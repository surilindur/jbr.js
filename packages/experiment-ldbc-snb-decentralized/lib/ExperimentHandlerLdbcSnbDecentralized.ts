import * as Path from 'path';
import * as fs from 'fs-extra';
import type { IExperimentPaths } from 'jbr';
import { ExperimentHandler } from 'jbr';
import { Templates } from 'ldbc-snb-decentralized';
import { ExperimentLdbcSnbDecentralized } from './ExperimentLdbcSnbDecentralized';

/**
 * An experiment handler for the LDBC SNB Decentralized benchmark.
 */
export class ExperimentHandlerLdbcSnbDecentralized extends ExperimentHandler<ExperimentLdbcSnbDecentralized> {
  public constructor() {
    super('ldbc-snb-decentralized', ExperimentLdbcSnbDecentralized.name);
  }

  public getDefaultParams(experimentPaths: IExperimentPaths): Record<string, any> {
    return {
      scale: '0.1',
      configGenerateAux: 'input/config-enhancer.json',
      configFragment: 'input/config-fragmenter.json',
      configFragmentAux: 'input/config-fragmenter-auxiliary.json',
      configQueries: 'input/config-queries.json',
      configServer: 'input/config-server.json',
      directoryQueryTemplates: 'input/templates/queries',
      validationParamsUrl: Templates.VALIDATION_PARAMS_URL,
      configValidation: 'input/config-validation.json',
      hadoopMemory: '4G',
      dockerfileServer: 'input/dockerfiles/Dockerfile-server',

      endpointUrl: 'http://localhost:3001/sparql',
      serverPort: 3_000,
      serverLogLevel: 'info',
      serverBaseUrl: 'http://ldbc-snb-decentralized-server:3000/',
      serverResourceConstraints: {
        '@type': 'StaticDockerResourceConstraints',
        cpu_percentage: 100,
      },
      queryRunnerReplication: 3,
      queryRunnerWarmupRounds: 1,
      queryRunnerRecordTimestamps: true,
    };
  }

  public getHookNames(): string[] {
    return [ 'hookSparqlEndpoint' ];
  }

  public async init(experimentPaths: IExperimentPaths, experiment: ExperimentLdbcSnbDecentralized): Promise<void> {
    // Copy config templates
    await Promise.all([
      fs.copyFile(Templates.ENHANCEMENT_CONFIG,
        Path.join(experimentPaths.root, experiment.configGenerateAux)),
      fs.copyFile(Templates.FRAGMENT_CONFIG,
        Path.join(experimentPaths.root, experiment.configFragment)),
      fs.copyFile(Templates.ENHANCEMENT_FRAGMENT_CONFIG,
        Path.join(experimentPaths.root, experiment.configFragmentAux)),
      fs.copyFile(Templates.QUERY_CONFIG,
        Path.join(experimentPaths.root, experiment.configQueries)),
      fs.copyFile(Templates.SERVER_CONFIG,
        Path.join(experimentPaths.root, experiment.configServer)),
      fs.copy(Templates.QUERIES_DIRECTORY,
        Path.join(experimentPaths.root, experiment.directoryQueryTemplates)),
      fs.copyFile(Templates.VALIDATION_CONFIG,
        Path.join(experimentPaths.root, experiment.configValidation)),
    ]);

    // Create Dockerfile for server
    await fs.mkdir(Path.join(experimentPaths.input, 'dockerfiles'));
    await fs.copyFile(Path.join(__dirname, 'templates', 'dockerfiles', 'Dockerfile-server'),
      Path.join(experimentPaths.input, 'dockerfiles', 'Dockerfile-server'));

    await this.replaceBaseUrlInDir(experimentPaths.root);
  }

  protected async replaceBaseUrlInDir(path: string): Promise<void> {
    for (const entry of await fs.readdir(path, { withFileTypes: true })) {
      if (entry.isFile()) {
        const file = Path.join(path, entry.name);
        await fs.writeFile(file, (await fs.readFile(file, 'utf8'))
          .replace(/localhost:3000/ug, 'ldbc-snb-decentralized-server:3000'));
      } else if (entry.isDirectory()) {
        await this.replaceBaseUrlInDir(Path.join(path, entry.name));
      }
    }
  }
}
