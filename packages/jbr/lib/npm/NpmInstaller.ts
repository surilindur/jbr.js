/**
 * Installs npm packages.
 */
// eslint-disable-next-line ts/naming-convention
export interface NpmInstaller {
  install: (cwd: string, packages: string[], scopeError: string) => Promise<void>;
}
