# openraildata-common

[![GitHub issues](https://img.shields.io/github/issues/CarbonCollins/openraildata-common-nodejs.svg)](https://github.com/CarbonCollins/openraildata-common-nodejs/issues)
[![npm](https://img.shields.io/npm/v/openraildata-common.svg)](https://www.npmjs.com/package/openraildata-common)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/CarbonCollins/openraildata-common-nodejs/master/LICENSE)
[![David](https://img.shields.io/david/CarbonCollins/openraildata-common-nodejs.svg)]()
[![David](https://img.shields.io/david/dev/CarbonCollins/openraildata-common-nodejs.svg)]()
[![sheilds](https://img.shields.io/badge/status-WIP-yellow.svg)](https://img.shields.io/badge/status-WIP-yellow.svg)

A package for common files and functions between the various openraildata packages

# usage

To use the openraildata-common package you need to import the required classes and functions in which your application needs, this can be done as follows:

```
const common = require('openraildata-common');

```

the currently available classes that can be used are listed below

- [Association](./docs/association.md)
- [Location](./docs/location.md)
- [Schedule](./docs/schedule.md)
- [Station](./docs/station.md)
- [StationMessage](./docs/stationMessage.md)
- [TrainOrder](./docs/trainOrder.md)
- [TrainStatus](./docs/trainStatus.md)

an example of using the classes are:

```
const station = new common.Station(stationRefDataJSON);

console.log(station.plannedTimeOfArrival);
```

or if you want to convert a large array of stations 'stationArr' into there respective Station class:

```
const stations = stationArr.map(station => new common.Station(station));
```

Mixins can be applied to all of the base models that this package provides. A sample mixin would be as follows:

```
const mixin = (SuperClass) => {
  return class StationMix extends SuperClass {
    constructor(payload) { super(payload); }

    newFunction(parms) { return 'stuff'; }
  };
};
```

and this can be applied by calling (re replacing station with the intended class to apply the mixin too:

```
const common = require('openraildata-common);

common.stationMixer(mixin);
```

all the functions for this are documents <a href="./docs/index.md">here</a>