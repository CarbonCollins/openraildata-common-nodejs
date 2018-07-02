![](https://gitlab.com/openrail/uk/common-nodejs/uploads/93346c225ec30c3d1c0f92edff15af1a/common-banner.svg)

[![country](https://img.shields.io/badge/country-UK-blue.svg)](https://gitlab.com/groups/openrail/uk)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)
[![npm (scoped)](https://img.shields.io/npm/v/@openrailuk/common.svg)](https://www.npmjs.com/package/@openrailuk/common)
[![status](https://img.shields.io/badge/status-WIP-yellow.svg)](https://gitlab.com/openrail/uk/common-nodejs)
[![pipeline](https://gitlab.com/openrail/uk/common-nodejs/badges/master/pipeline.svg)](https://gitlab.com/openrail/uk/common-nodejs/commits/master)
[![coverage](https://gitlab.com/openrail/uk/common-nodejs/badges/master/coverage.svg)](https://gitlab.com/openrail/uk/common-nodejs/commits/master)
[![slack](https://open-rail-slack-invite.herokuapp.com/badge.svg)](https://open-rail-slack-invite.herokuapp.com/)

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

an example of using the classes:

```javascript
import { Station } from '@openrailuk/common';

const station = new Station(stationRefDataJSON);

console.log(station.plannedTimeOfArrival);
```

or if you want to convert a large array of stations 'stationArr' into there respective Station class:

```javascript
import { Station } from '@openrailuk/common';

const stations = stationArr.map(station => new Station(station));
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

# documentation

You might be wondering where to find information about how to use this package, fear not all documentation can be found on the [wiki](https://gitlab.com/openrail/uk/common-nodejs/wikis/home)