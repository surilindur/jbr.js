import type Dockerode from 'dockerode';

/**
 * Allows constraints to be placed on Docker container resources.
 */
// eslint-disable-next-line ts/naming-convention
export interface DockerResourceConstraints {
  /**
   * Obtain a Docker HostConfig object from the current constraints.
   */
  toHostConfig: () => Dockerode.HostConfig;
}
