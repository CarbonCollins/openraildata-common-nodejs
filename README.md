![](./docs/images/commonBanner.png)

[![npm](https://img.shields.io/npm/dt/openraildata-common.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/CarbonCollins/openraildata-common-nodejs.svg)](https://github.com/CarbonCollins/openraildata-common-nodejs/issues)
[![GitHub release](https://img.shields.io/github/release/CarbonCollins/openraildata-common-nodejs.svg)]()
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/CarbonCollins/openraildata-common-nodejs/master/LICENSE)
[![David](https://img.shields.io/david/CarbonCollins/openraildata-common-nodejs.svg)]()
[![David](https://img.shields.io/david/dev/CarbonCollins/openraildata-common-nodejs.svg)]()
[![Maintainability](https://api.codeclimate.com/v1/badges/d565af9f95f072c98381/maintainability)](https://codeclimate.com/github/CarbonCollins/openraildata-common-nodejs/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d565af9f95f072c98381/test_coverage)](https://codeclimate.com/github/CarbonCollins/openraildata-common-nodejs/test_coverage)
[![Known Vulnerabilities](https://snyk.io/test/github/carboncollins/openraildata-common-nodejs/badge.svg)](https://snyk.io/test/github/carboncollins/openraildata-common-nodejs)

A package for common files and functions between the various open rail UK packages

# info

This repository is hosted on [GitLab as common-nodejs](https://gitlab.com/openrail/uk/common-nodejs). The [GitHub repository](https://github.com/CarbonCollins/openraildata-common-nodejs) is a downstream repository where all changes from GitLab are pushed. Please raise any issues or pull requests on the GitLab repository.

# usage

To use the common-nodejs package you need to import the required classes and functions in which your application needs, this can be done as follows:
```javascript
import { Location, Station } from '@openrailuk/common';
```
or this for everything:
```javascript
import * as common from '@openrailuk/common');

```

the currently available classes that can be used are listed below

- [Association](./docs/api.md#module_openrailuk/common+Association)
- [Location](./docs/api.md#module_openrailuk/common+Location)
- [Schedule](./docs/api.md#module_openrailuk/common+Schedule)
- [Station](./docs/api.md#module_openrailuk/common+Station)
- [StationMessage](./docs/api.md#module_openrailuk/common+StationMessage)
- [TrainOrder](./docs/api.md#module_openrailuk/common+TrainOrder)
- [TrainStatus](./docs/api.md#module_openrailuk/common+TrainStatus)

an example of using the classes are:

```javascript
const station = new Station(stationRefDataJSON);

console.log(station.plannedTimeOfArrival);
```

or if you want to convert a large array of stations 'stationArr' into there respective Station class:

```javascript
const stations = stationArr.map(station => new common.Station(station));
```

Mixins can be applied to all of the base models that this package provides. A sample mixin would be as follows:

```javascript
const mixin = (SuperClass) => {
  return class StationMix extends SuperClass {
    constructor(payload) { super(payload); }

    newFunction(parms) { return 'stuff'; }
  };
};
```

and this can be applied by calling (re replacing station with the intended class to apply the mixin too:

```javascript
import * as common from '@openrailuk/common';

common.stationMixer(mixin);
```

all the functions for this are documented in the <a href="./docs/api.md">API docs</a>