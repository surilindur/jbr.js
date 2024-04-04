import { DockerNetworkHandler } from '../../lib/docker/DockerNetworkHandler';

let write: any;
let streamEnd: any;
jest.mock<typeof import('node:fs')>('node:fs', () => <typeof import('node:fs')> <unknown> ({
  createWriteStream: () => ({
    write,
    end: streamEnd,
  }),
}));

describe('DockerNetworkHandler', () => {
  let network: any;
  let handler: DockerNetworkHandler;
  beforeEach(() => {
    network = {
      remove: jest.fn(),
    };
    handler = new DockerNetworkHandler(network);
  });

  describe('close', () => {
    it('kills and removes a container', async() => {
      await handler.close();
      expect(network.remove).toHaveBeenCalledTimes(1);
    });
  });

  describe('join', () => {
    it('does nothing', async() => {
      // eslint-disable-next-line unicorn/require-array-join-separator
      await handler.join();
    });
  });

  describe('startCollectingStats', () => {
    it('does nothing', async() => {
      const cb = await handler.startCollectingStats();
      cb();
    });
  });

  describe('addTerminationHandler', () => {
    it('does nothing', () => {
      handler.addTerminationHandler(jest.fn());
    });
  });

  describe('removeTerminationHandler', () => {
    it('does nothing', () => {
      handler.removeTerminationHandler(jest.fn());
    });
  });
});
