# Changelog
All notable changes to this project will be documented in this file.

<a name="v6.0.0"></a>
## [v6.0.0](https://github.com/rubensworks/jbr.js/compare/v5.7.1...v6.0.0) - 2025-04-18

### BREAKING CHANGE
* [Update SolidBench to version 2.x (#69)](https://github.com/rubensworks/jbr.js/commit/675659e2dfca7e7f0aef60b20a623a3df365b170)
	* Not a breaking change if you are not using the SolidBench experiment type.

<a name="v5.7.1"></a>
## [v5.7.1](https://github.com/rubensworks/jbr.js/compare/v5.7.0...v5.7.1) - 2025-04-03

### Fixed
* [Fix .gitignore being converted to .npmignore, Closes #45](https://github.com/rubensworks/jbr.js/commit/4b6fdcae054096d4e4608e0e703571dd58b979a6)

<a name="v5.7.0"></a>
## [v5.7.0](https://github.com/rubensworks/jbr.js/compare/v5.6.0...v5.7.0) - 2025-04-02

### Added
* [Support queries with '.rq' extension](https://github.com/rubensworks/jbr.js/commit/203f5a2707aef87950883b5e4f7f8c9bb568f8db)

### Changed
* [Bump to sparql-benchmark-runner v5](https://github.com/rubensworks/jbr.js/commit/1d763b310a6fb09558637ee0a18980655b3eadbb)

<a name="v5.6.0"></a>
## [v5.6.0](https://github.com/rubensworks/jbr.js/compare/v5.5.0...v5.6.0) - 2025-03-03

### Added
* [Report SPARQL endpoint load time](https://github.com/rubensworks/jbr.js/commit/b7e54cf546ae60d146b4392087c49c9512007b9c)

<a name="v5.5.0"></a>
## [v5.5.0](https://github.com/rubensworks/jbr.js/compare/v5.4.2...v5.5.0) - 2025-02-28

### Changed
* [Send alive requests using GET instead of HEAD](https://github.com/rubensworks/jbr.js/commit/d84272ba26622d6f4d2d280ef289e06025253d37)

<a name="v5.4.2"></a>
## [v5.4.2](https://github.com/rubensworks/jbr.js/compare/v5.4.1...v5.4.2) - 2025-02-17

### Fixed
* [Restore endpointUrl param name for backwards-compat](https://github.com/rubensworks/jbr.js/commit/c0b4729ad1db5651b771f3203a68b918bc639d59)

<a name="v5.4.1"></a>
## [v5.4.1](https://github.com/rubensworks/jbr.js/compare/v5.4.0...v5.4.1) - 2025-01-31

### Fixed
* [Lookup Docker bridge IP in BSBM](https://github.com/rubensworks/jbr.js/commit/594d89cc2c780acb911437aa60063104ab892a19)

<a name="v5.4.0"></a>
## [v5.4.0](https://github.com/rubensworks/jbr.js/compare/v5.3.1...v5.4.0) - 2024-10-25

### Added
* [Add endpointUrlExternal for WatDiv](https://github.com/rubensworks/jbr.js/commit/720dbd0761f526d3b89345f7bf19008af6bd9ec2)
* [Support breakpoint in BSBM](https://github.com/rubensworks/jbr.js/commit/7b910ec94d2d3f0e8303fdc9e9518fee09bb1ed2)
* [Add Docker-based hook](https://github.com/rubensworks/jbr.js/commit/590fa3c1ee660fda3700d56fe646fe17e031ac30)

### Fixed
* [Bump CJS with fix when using FractionalCombinationProvider](https://github.com/rubensworks/jbr.js/commit/f6463d15d8fab991f8f62f9484f3a9bd0a42752a)

<a name="v5.3.1"></a>
## [v5.3.1](https://github.com/rubensworks/jbr.js/compare/v5.3.0...v5.3.1) - 2024-08-28

### Changed
* [Wait to start SolidBench queries until server is up](https://github.com/rubensworks/jbr.js/commit/3e52f8a54f989803763d7042f3a7516f928d9551)

<a name="v5.3.0"></a>
## [v5.3.0](https://github.com/rubensworks/jbr.js/compare/v5.2.3...v5.3.0) - 2024-07-02

### Added
* [Add SPARQL Custom experiment type](https://github.com/rubensworks/jbr.js/commit/6ac1ded5974404b44b08ed0feae5aac313d7db5f)

<a name="v5.2.3"></a>
## [v5.2.3](https://github.com/rubensworks/jbr.js/compare/v5.2.2...v5.2.3) - 2024-06-18

### Fixed
* [Fix incorrect Docker internal IP on Linux](https://github.com/rubensworks/jbr.js/commit/b3a19d13dbac8be4888bc3139d15e066c3ca46c9)

<a name="v5.2.2"></a>
## [v5.2.2](https://github.com/rubensworks/jbr.js/compare/v5.2.1...v5.2.2) - 2024-06-18

### Fixed
* [Fix BSBM internal URL when running on Linux](https://github.com/rubensworks/jbr.js/commit/377bc1fd8e50158c3b11d3ffc7c40592fe142f87)

<a name="v5.2.1"></a>
## [v5.2.1](https://github.com/rubensworks/jbr.js/compare/v5.2.0...v5.2.1) - 2024-06-18

### Changed
* [Output the BSBM run log if the run failed](https://github.com/rubensworks/jbr.js/commit/9ec9590d698dd1814dda290f64ab9c034da6738f)

<a name="v5.2.0"></a>
## [v5.2.0](https://github.com/rubensworks/jbr.js/compare/v5.1.1...v5.2.0) - 2024-06-18

### Added
* [Add BSBM experiment handler, Closes #9](https://github.com/rubensworks/jbr.js/commit/0f899793fe82e5e68c895e463ee89d52dda573b4)

<a name="v5.1.1"></a>
## [v5.1.1](https://github.com/rubensworks/jbr.js/compare/v5.1.0...v5.1.1) - 2024-05-30

### Fixed
* [Update to latest @types/tar](https://github.com/rubensworks/jbr.js/commit/77f3bd0f7632b63f41bb0f0df384ded2db434a55)

<a name="v5.1.0"></a>
## [v5.1.0](https://github.com/rubensworks/jbr.js/compare/v5.0.1...v5.1.0) - 2024-05-30

### Added
* [Make LDF experiment wait until server is up before querying](https://github.com/rubensworks/jbr.js/commit/7e68aba29c58c0360e06d7f4ab12e2244cc50ee8)

<a name="v5.0.1"></a>
## [v5.0.1](https://github.com/rubensworks/jbr.js/compare/v5.0.0...v5.0.1) - 2024-05-14

### Fixed
* [Print newlines in logger](https://github.com/rubensworks/jbr.js/commit/926829ea5335a6d09dffa96651dfbd0e2644412e)
* [Use .txt as query file extension](https://github.com/rubensworks/jbr.js/commit/2f5fad3b3e285d4d583cfd7e2831b85328640741)

<a name="v5.0.0"></a>
## [v5.0.0](https://github.com/rubensworks/jbr.js/compare/v4.2.3...v5.0.0) - 2024-05-14

### BREAKING CHANGES
* [Update experiments to use sparql-benchmark-runner v4](https://github.com/rubensworks/jbr.js/commit/67309c46377a40d2c4ae0ee3e88a5729513e584e)
    This includes breaking changes to experiment configs.

    Most notable, the following fields have been removed:

    - `queryRunnerRecordTimestamps`
    - `queryRunnerRecordHttpRequests`
    - `queryRunnerUpQuery`
    - `queryRunnerUrlParamsInit`
    - `queryRunnerUrlParamsRun`

    And the following fields have been added:

    - `queryRunnerRequestDelay`
    - `queryRunnerEndpointAvailabilityCheckTimeout`
    - `queryRunnerUrlParams`

<a name="v4.2.3"></a>
## [v4.2.3](https://github.com/rubensworks/jbr.js/compare/v4.2.2...v4.2.3) - 2024-05-08

### Fixed
* [Fix race condition in ExperimentLoader breaking runs](https://github.com/rubensworks/jbr.js/commit/dba0eb33f9c61c04325730091d753b42c6fd283b)

<a name="v4.2.2"></a>
## [v4.2.2](https://github.com/rubensworks/jbr.js/compare/v4.2.1...v4.2.2) - 2024-05-03

### Changed
* [Remove debug output](https://github.com/rubensworks/jbr.js/commit/1b344fd0cb3bafef0205e03a9bb7f4f70a3f3907)

<a name="v4.2.1"></a>
## [v4.2.1](https://github.com/rubensworks/jbr.js/compare/v4.2.0...v4.2.1) - 2024-05-03

### Changed
* [Add debug info to CliProcessHandler](https://github.com/rubensworks/jbr.js/commit/1cffbb990f45d56478ef95e0b7d4d07f0d51a7d9)

<a name="v4.2.0"></a>
## [v4.2.0](https://github.com/rubensworks/jbr.js/compare/v4.1.1...v4.2.0) - 2024-05-03

### Changed
* [Use entrypoint array instead of command string in HookCli](https://github.com/rubensworks/jbr.js/commit/82fa6fa191cecac6e35e385babdacb5d99359446)

<a name="v4.1.1"></a>
## [v4.1.1](https://github.com/rubensworks/jbr.js/compare/v4.1.0...v4.1.1) - 2024-05-03

### Fixed
* [Pass args separately to execFile](https://github.com/rubensworks/jbr.js/commit/353e396ebe37bf157d357ae8e2c0e13a92673208)

<a name="v4.1.0"></a>
## [v4.1.0](https://github.com/rubensworks/jbr.js/compare/v4.0.4...v4.1.0) - 2024-05-03

### Added
* [Allow query filter to be passed to WatDiv experiment](https://github.com/rubensworks/jbr.js/commit/6fb4f7cfe15f3b017fefc3b78290a78c449e76a2)

### Changed
* [Print error message on early process termination](https://github.com/rubensworks/jbr.js/commit/ad372c8ef21888652f0c6c806910ae6601b288fa)

<a name="v4.0.4"></a>
## [v4.0.4](https://github.com/rubensworks/jbr.js/compare/v4.0.3...v4.0.4) - 2024-05-02

### Fixed
* [Use execFile instead of exec to file issues in CI](https://github.com/rubensworks/jbr.js/commit/9ab13696a0eb78a6091f454e20c0808749b9bc65)

<a name="v4.0.3"></a>
## [v4.0.3](https://github.com/rubensworks/jbr.js/compare/v4.0.2...v4.0.3) - 2024-05-02

### Fixed
* [Stop streams on child process kill](https://github.com/rubensworks/jbr.js/commit/bd7fec262afc1abef979ca8c9b34747d3df7de02)

<a name="v4.0.2"></a>
## [v4.0.2](https://github.com/rubensworks/jbr.js/compare/v4.0.1...v4.0.2) - 2024-05-02

### Fixed
* [Listen to child process exit instead of close](https://github.com/rubensworks/jbr.js/commit/c2f3251030d64be0624ff8a6a8d93f59d0050eb5)

<a name="v4.0.1"></a>
## [v4.0.1](https://github.com/rubensworks/jbr.js/compare/v4.0.0...v4.0.1) - 2024-05-02

### Fixed
* [Kill child process if it hasn't stopped yet after 3 seconds](https://github.com/rubensworks/jbr.js/commit/9e7ad2db105470d724ef7fb401736c067116e974)

<a name="v4.0.0"></a>
## [v4.0.0](https://github.com/rubensworks/jbr.js/compare/v3.0.2...v4.0.0) - 2024-05-02

### BREAKING CHANGES
* [Update to Components.js v6](https://github.com/rubensworks/jbr.js/commit/f8c4cfd6972514a85c9076dbc8748bc071051c63)
  * For most users, this will not cause breaking changes.

### Added
* [Add CLI-based hook](https://github.com/rubensworks/jbr.js/commit/0c1ccf8ba46e574a219bb8ddf65f02276314c7a1)

<a name="v3.0.2"></a>
## [v3.0.2](https://github.com/rubensworks/jbr.js/compare/v3.0.1...v3.0.2) - 2023-09-13

### Fixed
* [Fix component IRIs version to major version only](https://github.com/rubensworks/jbr.js/commit/42f0ce80c52fea780f68048a5ba3ad6fc368af16)

<a name="v3.0.1"></a>
## [v3.0.1](https://github.com/rubensworks/jbr.js/compare/v3.0.0...v3.0.1) - 2023-09-11

### Fixed
* [Fix wrong component versions after major update](https://github.com/rubensworks/jbr.js/commit/67cd5e5610466fdfa61cb1007f69b910cbbf008b)

<a name="v3.0.0"></a>
## [v3.0.0](https://github.com/rubensworks/jbr.js/compare/v2.6.1...v3.0.0) - 2023-09-07

### Breaking
* [Allow binding local directories to comunica docker image](https://github.com/rubensworks/jbr.js/commit/b462a9991a85cbba8a78732d7d53c396884cc5cc)
* [Update to Node 18](https://github.com/rubensworks/jbr.js/commit/75c2c06625a2d488eeb1e3bf44f12731215332a0)

<a name="v2.6.1"></a>
## [v2.6.1](https://github.com/rubensworks/jbr.js/compare/v2.6.0...v2.6.1) - 2023-02-11

### Fixed
* [Fix rare freeze when waiting for endpoint](https://github.com/rubensworks/jbr.js/commit/61eba521a90f0bd8e214d9ba0adde586c0e7140a)

<a name="v2.6.0"></a>
## [v2.6.0](https://github.com/rubensworks/jbr.js/compare/v2.5.1...v2.6.0) - 2023-02-09

### Added
* [Allow prepare task to be run for single combination](https://github.com/rubensworks/jbr.js/commit/9b8764f29caea47382c91bcccea50e58cdf74be1)

### Fixed
* [Fix user aborted request errors](https://github.com/rubensworks/jbr.js/commit/a9da2959d56142f260a5a8eb05cb3e4d3c8a8753)

<a name="v2.5.1"></a>
## [v2.5.1](https://github.com/rubensworks/jbr.js/compare/v2.5.0...v2.5.1) - 2023-02-08

### Fixed
* [Update solidbench with generation backpressure fix](https://github.com/rubensworks/jbr.js/commit/d02215ae19c7ab69bf95a110d4b7494babf955e4)
* [Fix .keep files not being included in combinations generated and output dirs](https://github.com/rubensworks/jbr.js/commit/e2e863c7247e06d6b5b15528ec76f9a01b6cf95e)

<a name="v2.5.0"></a>
## [v2.5.0](https://github.com/rubensworks/jbr.js/compare/v2.4.3...v2.5.0) - 2023-02-07

### Added
* [Update to SolidBench 1.6 with post multiplication support](https://github.com/rubensworks/jbr.js/commit/5056826d35d95c3a93e1c43ca088138177d2eee1)

<a name="v2.4.3"></a>
## [v2.4.3](https://github.com/rubensworks/jbr.js/compare/v2.4.2...v2.4.3) - 2023-02-06

### Fixed
* [Update sparql-benchmark-runner to 2.9.2 with isUp hanging fix](https://github.com/rubensworks/jbr.js/commit/cfaa3d02e7e2d15db9b5a5e9e4095d2ef2b47763)

<a name="v2.4.2"></a>
## [v2.4.2](https://github.com/rubensworks/jbr.js/compare/v2.4.1...v2.4.2) - 2023-02-06

### Fixed
* [Add .keep files in combinations init directories](https://github.com/rubensworks/jbr.js/commit/03dfed45a975dd6033690b95205e1d04bcb1994a)

<a name="v2.4.1"></a>
## [v2.4.1](https://github.com/rubensworks/jbr.js/compare/v2.4.0...v2.4.1) - 2023-02-06

### Fixed
* [Update to sparql-benchmark-runner 2.9.1](https://github.com/rubensworks/jbr.js/commit/f987ebfbdfe5eb472837a640ea7df5ae8824836d)

<a name="v2.4.0"></a>
## [v2.4.0](https://github.com/rubensworks/jbr.js/compare/v2.3.1...v2.4.0) - 2023-02-06

### Added
* [Add queryTimeoutFallback to experiments](https://github.com/rubensworks/jbr.js/commit/39e9b3a49d35726cdfd1f9118b372701d1d0a227)

<a name="v2.3.1"></a>
## [v2.3.1](https://github.com/rubensworks/jbr.js/compare/v2.3.0...v2.3.1) - 2023-01-12

### Fixed
* [Fix invalid experiment name during combinations-based init](https://github.com/rubensworks/jbr.js/commit/58255d1874a73ba6c449bc7d2fbc621a37b960d6)

<a name="v2.3.0"></a>
## [v2.3.0](https://github.com/rubensworks/jbr.js/compare/v2.2.2...v2.3.0) - 2022-08-15

### Added
* [Bump to SolidBench 1.4.0 with discover queries](https://github.com/rubensworks/jbr.js/commit/cf42d58c8d60353f47bd4dfe593d668c7a01f9ca)

<a name="v2.2.2"></a>
## [v2.2.2](https://github.com/rubensworks/jbr.js/compare/v2.2.1...v2.2.2) - 2022-08-10

### Fixed
* [Bump to solidbench 1.3.1](https://github.com/rubensworks/jbr.js/commit/7843ec0fcd671d64baf41cb90f9486088f70bf97)

<a name="v2.2.1"></a>
## [v2.2.1](https://github.com/rubensworks/jbr.js/compare/v2.2.0...v2.2.1) - 2022-08-04

### Fixed
* [Bump to sparql-benchmark-runner 2.8.1](https://github.com/rubensworks/jbr.js/commit/c43250145d28e602018cbf8ec4a1780151788800)

<a name="v2.2.0"></a>
## [v2.2.0](https://github.com/rubensworks/jbr.js/compare/v2.1.0...v2.2.0) - 2022-08-04

### Added
* [Record number of HTTP requests in experiments](https://github.com/rubensworks/jbr.js/commit/339c0885d216619164789f286a962247c69acf1b)

<a name="v2.1.0"></a>
## [v2.1.0](https://github.com/rubensworks/jbr.js/compare/v2.0.4...v2.1.0) - 2022-08-02

### Changed
* [Bump solidbench with dataset backlink between forum and post](https://github.com/rubensworks/jbr.js/commit/44f92ae58c6f19944a9516664342c38979de5ab1)

<a name="v2.0.4"></a>
## [v2.0.4](https://github.com/rubensworks/jbr.js/compare/v2.0.3...v2.0.4) - 2022-07-26

### Fixed
* [Fix SolidBench not pulling ldbc-snb-generator Docker image](https://github.com/rubensworks/jbr.js/commit/099a4d2f1c6fda41f14d74338ebad56180f8362a)
* [Fix bin script hanging on some systems](https://github.com/rubensworks/jbr.js/commit/a1f5668584e8e16d53f1a963ae4b017b991cb602)

<a name="v2.0.3"></a>
## [v2.0.3](https://github.com/rubensworks/jbr.js/compare/v2.0.2...v2.0.3) - 2022-07-26

### Fixed
* [Fix experiments becoming invalid upon directory renaming](https://github.com/rubensworks/jbr.js/commit/346658d5e803df808eef2929d316517d10745866)

<a name="v2.0.2"></a>
## [v2.0.2](https://github.com/rubensworks/jbr.js/compare/v2.0.1...v2.0.2) - 2022-07-25

### Fixed
* [Fix combinations-based init failing in standalone experiments](https://github.com/rubensworks/jbr.js/commit/796609ca2f347496196f04839424f6e3bc2f712a)
* [Fix incorrect default experiment iri](https://github.com/rubensworks/jbr.js/commit/54ec13fb2b889651b9b39e42ed0dd13c81de30e8)

<a name="v2.0.1"></a>
## [v2.0.1](https://github.com/rubensworks/jbr.js/compare/v2.0.0...v2.0.1) - 2022-07-19

### Fixed
* [Fix dependency version issues introducing during major bump](https://github.com/rubensworks/jbr.js/commit/4e525009e7103a0f5727912696a9280a3754bae1)

<a name="v2.0.0"></a>
## [v2.0.0](https://github.com/rubensworks/jbr.js/compare/v1.0.2...v2.0.0) - 2022-07-19

### Added
* [Allow running just a single combination](https://github.com/rubensworks/jbr.js/commit/61f9389a0da7992bed29039e6e9f119bf1cb83f1)
* [Allow URL params to be passed to query runners](https://github.com/rubensworks/jbr.js/commit/b5f073c86ef738e103a39fed18748d1aa581db7c)

### Changed
* [Rename ldbc-snb-decentralized to solidbench](https://github.com/rubensworks/jbr.js/commit/b71e4e48003e2dc5136ea3dac9c20c10505e6178)
* [Update to Components.js 5](https://github.com/rubensworks/jbr.js/commit/9230cfa90b85a169131f557604d7c0311693661b)
* [Update dependency comunica/query-sparql to v2.3.0](https://github.com/rubensworks/jbr.js/commit/6f78f42521cd1d84b57cb94ad7d0dc80614ac47b)
* [Add termination handler to close experiments on early process close](https://github.com/rubensworks/jbr.js/commit/67249ca3ce38aa6e9131a08c33012a322e16aec4)
* [Abstract securing of process handlers](https://github.com/rubensworks/jbr.js/commit/cee5ece990356c6283aeb887daa722db69abd6ff)
* [Make sure all combinations have different @id values](https://github.com/rubensworks/jbr.js/commit/b3c5425f3fc0683070fd9450a1bda153722741f6)
* [Update to sparql-benchmark-runner 2.5.0](https://github.com/rubensworks/jbr.js/commit/f2ffcc8136f07f05b08d63e003086693f633743f)
* [Count intermediary query result before error occurs](https://github.com/rubensworks/jbr.js/commit/fc2b987a6408e79681a5c0a3b779e48cde83608d)
* Changes to solidbench
    * [Bump sparql-benchmark-runner to output errored queries](https://github.com/rubensworks/jbr.js/commit/fc91acb8c901c6860419c29968671c57f84ea740)
    * [Fix server URL not being applied to template queries in LDBC SNB D](https://github.com/rubensworks/jbr.js/commit/b1e541a8f759860e57dea917df5839e0cc628978)
    * [Configure proper up-check query for LDBC-SNB-D](https://github.com/rubensworks/jbr.js/commit/928259f5c72bf277bf42fa2f3df5aaf4a2d97594)
    * [Fix networks in LDBC SNB D not being removed correctly](https://github.com/rubensworks/jbr.js/commit/da79b1cb0bb4db8531e0dab20893202533307af8)
    * [Modify baseUrl for LDBC-SNB-D dataset](https://github.com/rubensworks/jbr.js/commit/3c55b995a91b0b9979ee881b9f9f02a37930bea5)
    * [Run LDBC SNB D experiment in Docker network](https://github.com/rubensworks/jbr.js/commit/62da5ef6890110b0a10292319e9c2f346042f4fa)
    * [Emit warning when running LDBC without enough memory](https://github.com/rubensworks/jbr.js/commit/f23216b79575928f0e6318c2a2d0650f44183f1a)
    * [Pass configs as absolute paths to ldbc-snb-d](https://github.com/rubensworks/jbr.js/commit/b35c15282f78565130046ec64afbe44ece4cfd5d)

### Fixed
* [Fix broken Docker CPU measuring](https://github.com/rubensworks/jbr.js/commit/e5079dda8465e710caa9202832703aead080429f)

<a name="v1.0.2"></a>
## [v1.0.2](https://github.com/rubensworks/jbr.js/compare/v1.0.1...v1.0.2) - 2021-08-13

### Fixed
* [Fix mainModulePath being invalid when globally install](https://github.com/rubensworks/jbr.js/commit/366949199b3c74b18476cb681aa36f558c204b20)

<a name="v1.0.1"></a>
## [v1.0.1](https://github.com/rubensworks/jbr.js/compare/v1.0.0...v1.0.1) - 2021-08-13

### Fixed
* [Fix .gitignore not being available in template files](https://github.com/rubensworks/jbr.js/commit/6c7f47d4450fdf8bbe48b830db543bffb704f59d)

<a name="v1.0.0"></a>
## [v1.0.0] - 2021-04-13

Initial release
