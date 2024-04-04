import type { NpmInstaller } from './NpmInstaller';

/**
 * A dummy npm installer that does not install anything.
 */
export class VoidNpmInstaller implements NpmInstaller {
  // eslint-disable-next-line unused-imports/no-unused-vars
  public async install(cwd: string, packages: string[]): Promise<void> {
    // Do nothing
  }
}
