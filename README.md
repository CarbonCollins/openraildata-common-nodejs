# openraildata-common
A package for common files and functions between the various openraildata packages

# usage

To use the openraildata-common package you need to import the required classes and functions in which your application needs, this can be done as follows:

```
const { Association, Location, Schedule, Station } = require('openraildata-common');
```

the currently available classes that can be used are listed below

- Association
- Location
- Schedule
- Station

an example of using the classes are:

```
const station = new Station(stationRefDataJSON);

console.log(station.plannedTimeOfArrival);
```

or if you want to convert a large array of stations 'stationArr' into there respective Station class:

```
const stations = stationArr.map(station => new Station(station));
```