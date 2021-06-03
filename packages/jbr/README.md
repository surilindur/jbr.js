# jbr.js – Just a Benchmark Runner

[![Build status](https://github.com/rubensworks/jbr.js/workflows/CI/badge.svg)](https://github.com/rubensworks/jbr.js/actions?query=workflow%3ACI)
[![Coverage Status](https://coveralls.io/repos/github/rubensworks/jbr.js/badge.svg?branch=master)](https://coveralls.io/github/rubensworks/jbr.js?branch=master)
[![npm version](https://badge.fury.io/js/jbr.svg)](https://www.npmjs.com/package/jbr)

A simple tool to initialize benchmarking experiments, run them, and analyze their results.

Experiments that are created and executed with this tool are [fully reproducible](https://linkedsoftwaredependencies.org/articles/reproducibility/),
as experiments are fully _deterministic_,
and metadata on all exact installed dependency versions is emitted together with the results.

This tool completes the whole provenance chain of experimental results:

* **Setup** of sofware based on configuration
* **Generating** experiment input data
* **Execution** of experiments based on parameters
* Description of environment **dependencies** during experiments
* **Reporting** of results
* **Archiving** results into a single file for easy exchange

## Requirements

* [Node.js](https://nodejs.org/en/) _(1.12 or higher)_

## Installation

```bash
$ npm install -g jbr
```
or
```bash
$ yarn global add jbr
```

## Usage

This tool offers commands for executing the whole experimentation chain:

1. [**Initialization**](#1-initialization): Create a new experiment. This should be done only once.
2. [**Data Preparation**](#2-data-preparation): Generating a dataset and query set. This should be done only once.
3. [**Running Experiments**](#3-running-experiments): Starting the required machines and running the benchmark.
4. [**Results Analysis**](#4-results-analysis): Generating plots and outputting data for result analysis. (TODO: WIP)

**Full usage**:
```text
jbr <command>

Commands:
  jbr init <type> <name>         Initializes a new experiment
  jbr prepare                    Prepare data for the current experiment
  jbr run                        Run the current experiment
  jbr set-hook <hook> <handler>  Provide a handler for a hook in an experiment
  jbr validate                   Validate the current experiment

Options:
      --version         Show version number                            [boolean]
      --cwd             The current working directory      [string] [default: .]
  -m, --mainModulePath  Path from which modules should be loaded        [string]
  -v, --verbose         If more logging output should be generated     [boolean]
  -d, --dockerOptions   Path to a file with custom Docker options       [string]
      --help            Show help
```

### 1. Initialization

```bash
$ jbr init experiment-type my-experiment
$ cd my-experiment
```

Running this command will initialize a new experiment of the given type (`experiment-type`)
in a new directory of the provided experiment name (`my-experiment`).

The experiment type must exist in the [list of available experiment types](https://github.com/rubensworks/jbr.js/tree/master/packages) (directories prefixed with `experiment-`, such as `ldbc-snb-decentralized`).

The created directory will contain all default required files for running an experiment.
You can initialize this directory as a [git](https://git-scm.com/) repository.

In most cases, you will only need to edit the `jbr-experiment.json` file to [configure your experiment](#configurability).

### 2. Data Preparation

In order to run all preprocessing steps, such as creating all required datasets, invoke the prepare step:

```bash
$ jbr prepare
```

All prepared files will be contained in the `generated/` directory.

### 3. Running Experiments

Once the experiment has been fully configured and prepared, you can run it:

```bash
$ jbr run
```

Once the run step completes, results will be present in the `output/` directory.

### 4. Results Analysis

TODO: WIP

## Configurability

All experiments will have a `jbr-experiment.json` in which the properties of an experiment can be set.
The parameters of such a config file are dependent on the type of experiment that is being initialized.

Depending on the experiment type, you may also need to change certain files within the `input/` directory.

## Directory structure

A jbr experiment typically has the following directory structure:

```text
my-experiment/
  .gitignore
  jbr-experiment.json  # Main config of your experiment
  package.json
  generated/           # Prepared data files
  input/               # More indirect configuration
  output/              # Raw output of the experiment
  node_modules/
```

To enable reproducibility, it is highly recommended to place these experiments under version control, e.g. via a [git](https://git-scm.com/) repository.

The following files and directories do **not have to be added** to this repository,
as they are derived and can be reproduced:

```text
my-experiment/
  generated/
  output/
  node_modules/
```

## Advanced

### Docker Resource Constraint

Some experiments or hooks may be executed in Docker containers.
For these cases, jbr exposes a reusable helper component for defining Docker resource constraints.

For example, the following experiment is configured to use at most 90% of the CPU, and 10MB of memory.
```json
{
  "@type": "SomeExperiment",
  "resourceConstraints": {
    "@type": "StaticDockerResourceConstraints",
    "cpu_percentage": 90,
    "memory_limit": "10m"
  }
}
```

All possible parameters (all are optional):
* `cpu_percentage`: Percentage (0-100) of the total CPU power that can be used. E.g. when fully consuming 4 cores, this value must be set to 100.
* `memory_limit`: Memory usage limit, e.g. '10m', '1g'.

### Running against a different Docker instance

By default, Docker-based experiment will look for and use the Docker installation on your local machine.
In some cases, you may want to run experiments within remote Docker instances.
In such cases, you can use the `-d` or `--dockerOptions` option to pass a custom Docker options file.

For example, Docker options can be set when running an experiment as follows:
```bash
$ jbr run -d docker-options.json
```

`docker-options.json` for the default socket:
```json
{
    "socketPath": "/var/run/docker.sock"
}
```

`docker-options.json` for running against a different host:
```json
{
    "host": "http://192.168.1.10",
    "port": 3000
}
```

More configuration options can be found at https://github.com/apocas/dockerode#getting-started

## License

jbr.js is written by [Ruben Taelman](http://www.rubensworks.net/).

This code is copyrighted by [Ghent University – imec](http://idlab.ugent.be/)
and released under the [MIT license](http://opensource.org/licenses/MIT).