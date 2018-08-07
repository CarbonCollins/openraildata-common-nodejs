# Proxy Handlers

On the occasion where you want to parse the raw datafeeds information into the data models provided by this package there is a proxy handler is provided. The proxy handler is designed to be used with the `Proxy` class in order to translate the datafeeds parameter name to the openrailuk parameter name.

An example of this would be converting the `tpl` property in [National Rails Data Feed](https://datafeeds.nationalrail.co.uk) to `tiploc` which is used by OpenRailUK packages. 

In most cases this would not be used as it is generaly used internaly by other @openrailuk packages. However, these are provided for if you are feeling adventurous.

## Example

```javascript
import { Station, stationProxyHandler } from '@openrailuk/common';

const exampleRawData = {
  tpl: 'testValue',
  act: 'VV'
};

const proxiedData = new Proxy(exampleRawData, stationProxyHandler);

console.log(proxiedData.tiploc); // will print `testValue`

const exampleStation = new Station(proxiedData);

console.log(exampleStation.tiploc); // will also print `testValue`
```
