'use strict';

const optional = require('optional');

/**
 * an optional package for accessing the reference data to allow some extra functionality in this package
 * if the package is not present then the extra functions will only return null
 * @external
 * @see {@link https://github.com/CarbonCollins/openraildata-referencedata-nodejs|refData}
 */
const refData = optional('openraildata-referencedata');

/**
 * @class
 * @desc A class for association data and helpful functions
 */
class Association {
  constructor(assoc) {
    this._payload = assoc || null;
  }

  /** 
   * @desc gets the association tiploc code
   * @returns {String|null} the tiploc code or null
   * @readonly
   */
  get tiploc() { return (this._payload) ? this._payload.tiploc : null; }
  /** 
   * @desc gets the association category
   * @returns {String|null} the category or null
   * @readonly
   */
  get category() { return (this._payload) ? this._payload.category : null; }

  /** 
   * @desc gets the main train information
   * @returns {Object|null} an object containing all of the main trains information or null
   * @readonly
   */
  get mainTrain() { return (this._payload) ? this._payload.main : null; }
  /** 
   * @desc gets the main train rid
   * @returns {String|null} the main trains rid
   * @readonly
   */
  get mainTrainId() { return (this._payload) ? this._payload.main.rid : null; }
  /** 
   * @desc gets the main trains schedule (if ref data is used)
   * @returns {Schedule|null} the main trains Schedule object or a null if ref data is not used
   * @readonly
   */
  get mainTrainSchedule() { 
    if (refData) {
      return (this._payload) ? refData.v8.getSchedule(this._payload.main.rid) : null;
    } else {
      console.warn('Reference Data is not valid or has not been included. Please add openraildata-referencedata as a dependancy if you want to use the association schedule functionality');
      return null;
    }
  }

  /** 
   * @desc gets the assoc train information
   * @returns {Object|null} an object containing all of the assoc trains information or null
   * @readonly
   */
  get assocTrain() { return (this._payload) ? this._payload.assoc : null; }
  /** 
   * @desc gets the assoc train rid
   * @returns {String|null} the assoc trains rid
   * @readonly
   */
  get assocTrainId() { return (this._payload) ? this._payload.assoc.rid : null; }
  /** 
   * @desc gets the assoc trains schedule
   * @returns {Schedule|null} the assoc trains Schedule object or null if ref data is not used
   * @readonly
   */
  get assocTrainSchedule() { 
    if (refData) {
      return (this._payload) ? refData.v8.getSchedule(this._payload.assoc.rid) : null;
    } else {
      console.warn('Reference Data is not valid or has not been included. Please add openraildata-referencedata as a dependancy if you want to use the association schedule functionality');
      return null;
    }
  }

  /**
   * @method Association~getLocation
   * @desc gets the location name of the where the association happens
   * @returns {String|null} the location name of the association or null if ref data is not used
   */
  getLocation() { 
    if (refData) {
      return (this._payload) ? refData.v3.getLocation(this.tiploc) : null; 
    } else {
      console.warn('Reference Data is not valid or has not been included. Please add openraildata-referencedata as a dependancy if you want to use the association location functionality');
      return null;
    }
  }

  /**
   * @method Association~isJoin
   * @desc checks to see if the association is a train join type
   * @returns {Boolean} 
   */
  isJoin() { return (this._payload && this._payload.category === 'JJ'); }
  /**
   * @method Association~isSplit
   * @desc checks to see if the association is a train split type
   * @returns {Boolean} 
   */
  isSplit() { return (this._payload && this._payload.category === 'VV'); }
  /**
   * @method Association~isNextTrain
   * @desc checks to see if the association is a next train type
   * @returns {Boolean} 
   */
  isNextTrain() { return (this._payload && this._payload.category === 'NP'); }
}

module.exports = Association;
