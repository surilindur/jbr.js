import type { PathLike } from 'node:fs';
import * as Path from 'node:path';
import { createExperimentPaths } from '../../lib/cli/CliHelpers';
import type { ExperimentHandler } from '../../lib/experiment/ExperimentHandler';
import type { NpmInstaller } from '../../lib/npm/NpmInstaller';
import type { ExperimentLoader } from '../../lib/task/ExperimentLoader';
import type { ITaskContext } from '../../lib/task/ITaskContext';
import { TaskInitialize } from '../../lib/task/TaskInitialize';
import { TestLogger } from '../TestLogger';

let files: Record<string, string> = {};
let filesOut: Record<string, string> = {};
let filesDeleted: Record<string, boolean> = {};
let dirsOut: Record<string, boolean> = {};
jest.mock<typeof import('fs-extra')>('fs-extra', () => ({
  ...jest.requireActual('fs-extra'),
  async writeFile(file: number | PathLike, contents: string) {
    filesOut[file.toString()] = contents;
  },
  async remove(path: PathLike) {
    filesDeleted[path.toString()] = true;
  },
  async mkdir(path: PathLike) {
    dirsOut[path.toString()] = true;
  },
  async pathExists(filePath: string) {
    return filePath in files;
  },
  async copyFile(source: string, dest: string) {
    filesOut[dest] = source;
  },
  async createFile(dest: string) {
    filesOut[dest] = 'TRUE';
  },
}));

let experimentLoader: ExperimentLoader;
jest.mock<typeof import('../../lib/task/ExperimentLoader')>('../../lib/task/ExperimentLoader', () => ({
  ExperimentLoader: {
    ...jest.requireActual('../../lib/task/ExperimentLoader').ExperimentLoader,
    build: jest.fn(() => experimentLoader),
    getDefaultExperimentIri: () => 'IRI',
    requireCombinationsExperiment: () => true,
    getExperimentName: () => 'EXP-NAME',
  },
}));

let taskGenerateCombinations: any;
// eslint-disable-next-line max-len
jest.mock<typeof import('../../lib/task/TaskGenerateCombinations')>('../../lib/task/TaskGenerateCombinations', () => <any> ({
  TaskGenerateCombinations: jest.fn().mockImplementation(() => ({
    generate: taskGenerateCombinations,
  })),
}));

describe('TaskInitialize', () => {
  let context: ITaskContext;
  let npmInstaller: NpmInstaller;
  let task: TaskInitialize;
  let handler: ExperimentHandler<any>;
  beforeEach(() => {
    context = {
      cwd: 'CWD',
      experimentPaths: createExperimentPaths('CWD'),
      experimentName: 'EXP',
      mainModulePath: 'MMP',
      verbose: true,
      closeExperiment: jest.fn(),
      cleanupHandlers: [],
      logger: <any> new TestLogger(),
      docker: <any> {},
    };
    npmInstaller = {
      install: jest.fn(),
    };
    task = new TaskInitialize(
      context,
      'TYPE',
      'NAME',
      'TARGETDIR',
      false,
      false,
      npmInstaller,
    );

    handler = <any> {
      experimentClassName: 'TYPE',
      getHookNames: jest.fn(() => [ 'hook1', 'hook2' ]),
      getDefaultParams: jest.fn(() => ({ param1: 'value1' })),
      init: jest.fn(),
    };
    experimentLoader = <any> {
      discoverExperimentHandlers: jest.fn(() => ({
        TYPE: {
          handler,
          contexts: [ 'context1', 'context2' ],
        },
      })),
      instantiateExperiments: jest.fn((path: any) => {
        return {
          experiments: [{ CONFIG: path }],
        };
      }),
    };
    taskGenerateCombinations = jest.fn();

    files = {};
    filesOut = {};
    filesDeleted = {};
    dirsOut = {};
  });

  describe('init', () => {
    it('initializes a valid experiment', async() => {
      await expect(task.init()).resolves.toEqual({
        experimentDirectory: Path.join('CWD', 'TARGETDIR'),
        hookNames: [ 'hook1', 'hook2' ],
      });

      expect(handler.init)
        .toHaveBeenCalledWith(createExperimentPaths(Path.join('CWD', 'TARGETDIR')), { CONFIG: 'EXP-NAME' });

      expect(dirsOut).toEqual({
        [Path.join('CWD', 'TARGETDIR')]: true,
        [Path.join('CWD', 'TARGETDIR', 'generated')]: true,
        [Path.join('CWD', 'TARGETDIR', 'input')]: true,
        [Path.join('CWD', 'TARGETDIR', 'output')]: true,
      });
      expect(filesOut).toEqual({
        [Path.join('CWD', 'TARGETDIR', '.gitignore')]:
          Path.join(__dirname, '..', '..', 'lib', 'templates', '.gitignore'),
        [Path.join('CWD', 'TARGETDIR', 'README.md')]:
          Path.join(__dirname, '..', '..', 'lib', 'templates', 'README.md'),
        [Path.join('CWD', 'TARGETDIR', 'generated', '.keep')]: 'TRUE',
        [Path.join('CWD', 'TARGETDIR', 'output', '.keep')]: 'TRUE',
        [Path.join('CWD', 'TARGETDIR', 'jbr-experiment.json')]: `{
  "@context": [
    "https://linkedsoftwaredependencies.org/bundles/npm/jbr/^3.0.0/components/context.jsonld",
    "context1",
    "context2"
  ],
  "@id": "IRI",
  "@type": "TYPE",
  "param1": "value1",
  "hook1": {
    "@id": "IRI:hook1",
    "@type": "HookNonConfigured"
  },
  "hook2": {
    "@id": "IRI:hook2",
    "@type": "HookNonConfigured"
  }
}`,
        [Path.join('CWD', 'TARGETDIR', 'package.json')]: `{
  "private": true,
  "name": "NAME",
  "dependencies": {
    "cross-env": "^7.0.3"
  },
  "scripts": {
    "jbr": "cross-env NODE_OPTIONS=--max-old-space-size=8192 jbr",
    "validate": "jbr validate"
  }
}`,
      });
    });

    it('should throw if the destination already exists', async() => {
      files[Path.join('CWD', 'TARGETDIR')] = `TRUE`;
      await expect(task.init()).rejects.toThrow('The target directory already exists: \'CWD/TARGETDIR\'');
    });

    it('should not throw if the destination already exists and forceReInit is true', async() => {
      task = new TaskInitialize(
        context,
        'TYPE',
        'NAME',
        'TARGETDIR',
        true,
        false,
        npmInstaller,
      );
      files[Path.join('CWD', 'TARGETDIR')] = `TRUE`;

      await expect(task.init()).resolves.toBeTruthy();

      expect(filesDeleted).toEqual({
        [Path.join('CWD', 'TARGETDIR')]: true,
      });
    });

    it('should throw when initializing an unknown experiment type', async() => {
      task = new TaskInitialize(
        context,
        'TYPEUNKNOWN',
        'NAME',
        'TARGETDIR',
        false,
        false,
        npmInstaller,
      );

      await expect(task.init()).rejects.toThrow(`Invalid experiment type 'TYPEUNKNOWN'. Must be one of 'TYPE'`);
    });
  });

  it('initializes a valid experiment with npm install', async() => {
    task = new TaskInitialize(
      context,
      'TYPE',
      'NAME',
      'TARGETDIR',
      false,
      false,
      npmInstaller,
    );

    await expect(task.init()).resolves.toBeTruthy();

    expect(npmInstaller.install)
      .toHaveBeenCalledWith('CWD/TARGETDIR', [ 'jbr', '@jbr-experiment/TYPE' ], 'jbr-experiment');
  });

  it('initializes a valid combinations-based experiment', async() => {
    task = new TaskInitialize(
      context,
      'TYPE',
      'NAME',
      'TARGETDIR',
      false,
      true,
      npmInstaller,
    );

    await expect(task.init()).resolves.toEqual({
      experimentDirectory: Path.join('CWD', 'TARGETDIR'),
      hookNames: [ 'hook1', 'hook2' ],
    });

    expect(taskGenerateCombinations).toHaveBeenCalledTimes(1);

    expect(handler.init)
      .toHaveBeenCalledWith(createExperimentPaths(Path.join('CWD', 'TARGETDIR')), { CONFIG: 'EXP-NAME' });

    expect(dirsOut).toEqual({
      [Path.join('CWD', 'TARGETDIR')]: true,
      [Path.join('CWD', 'TARGETDIR', 'generated')]: true,
      [Path.join('CWD', 'TARGETDIR', 'input')]: true,
      [Path.join('CWD', 'TARGETDIR', 'output')]: true,
    });
    expect(filesOut).toEqual({
      [Path.join('CWD', 'TARGETDIR', '.gitignore')]:
        Path.join(__dirname, '..', '..', 'lib', 'templates', '.gitignore'),
      [Path.join('CWD', 'TARGETDIR', 'README.md')]:
        Path.join(__dirname, '..', '..', 'lib', 'templates', 'README.md'),
      [Path.join('CWD', 'TARGETDIR', 'generated', '.keep')]: 'TRUE',
      [Path.join('CWD', 'TARGETDIR', 'output', '.keep')]: 'TRUE',
      [Path.join('CWD', 'TARGETDIR', 'jbr-combinations.json')]: `{
  "@context": [
    "https://linkedsoftwaredependencies.org/bundles/npm/jbr/^3.0.0/components/context.jsonld"
  ],
  "@id": "IRI-combinations",
  "@type": "FullFactorialCombinationProvider",
  "commonGenerated": false,
  "factors": {}
}`,
      [Path.join('CWD', 'TARGETDIR', 'jbr-experiment.json.template')]: `{
  "@context": [
    "https://linkedsoftwaredependencies.org/bundles/npm/jbr/^3.0.0/components/context.jsonld",
    "context1",
    "context2"
  ],
  "@id": "IRI",
  "@type": "TYPE",
  "param1": "value1",
  "hook1": {
    "@id": "IRI:hook1",
    "@type": "HookNonConfigured"
  },
  "hook2": {
    "@id": "IRI:hook2",
    "@type": "HookNonConfigured"
  }
}`,
      [Path.join('CWD', 'TARGETDIR', 'package.json')]: `{
  "private": true,
  "name": "NAME",
  "dependencies": {
    "cross-env": "^7.0.3"
  },
  "scripts": {
    "jbr": "cross-env NODE_OPTIONS=--max-old-space-size=8192 jbr",
    "validate": "jbr validate"
  }
}`,
    });
  });
});
