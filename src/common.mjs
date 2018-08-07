
/**
 * @module openrailuk/common
 * @description A package for common files and functions between the various open rail UK packages
 */

import * as association from './models/association';
import * as location from './models/location';
import * as schedule from './models/schedule';
import * as station from './models/station';
import * as stationMessage from './models/stationMessage';
import * as trainOrder from './models/trainOrder';
import * as trainStatus from './models/trainStatus';
import * as via from './models/via';

export let Association = association.Association;
export const trainStatusProxyHandler = trainStatus.proxyHandler;
export const associationMixer = (mixin) => {
  Association = mixin(Association, association.symbols);
}

export let Location = location.Location;
export const locationProxyHandler = location.proxyHandler;
export const locationMixer = (mixin) => {
  Location = mixin(Location, location.symbols);
}

export let Schedule = schedule.Schedule;
export const scheduleProxyHandler = schedule.proxyHandler;
export const scheduleMixer = (mixin) => {
  Schedule = mixin(Schedule, schedule.symbols);
}

export let Station = station.Station;
export const stationProxyHandler = station.proxyHandler;
export const stationMixer = (mixin) => {
  Station = mixin(Station, station.symbols);
}

export let StationMessage = stationMessage.StationMessage;
export const stationMessageProxyHandler = stationMessage.proxyHandler;
export const stationMessageMixer = (mixin) => {
  StationMessage = mixin(StationMessage, stationMessage.symbols);
}

export let TrainOrder = trainOrder.TrainOrder;
export const trainOrderProxyHandler = trainOrder.proxyHandler;
export const trainOrderMixer = (mixin) => {
  TrainOrder = mixin(TrainOrder, trainOrder.symbols);
}

export let trainStatus = trainStatus.TrainStatus;
export const trainStatusProxyHandler = trainStatus.proxyHandler;
export const trainStatusMixer = (mixin) => {
  TrainStatus = mixin(TrainStatus, trainStatus.symbols);
}

export let Via = via.Via;
export const  viaProxyHandler = via.proxyHandler;
export const viaMixer = (mixin) => {
  Via = mixin(Via, via.symbols);
}

schedule.injectStation(Station); // inject potentialy mixed station object by reference
trainStatus.injectStation(Station); // inject potentialy mixed station object by reference
stationMessage.injectLocation(Location); // inject potentialy mixed location object by reference
via.injectLocation(Location); // inject potentialy mixed location object by reference
