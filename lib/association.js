'use strict';

/**
 * @class
 * @classdesc A class for association data and helpful functions
 * @augments module:openraildata/common#Association
 * @instance
 */
class Association {
  /**
   * @constructor
   * @param {Object} assoc the raw json association message object
   */
  constructor(assoc) {
    this._payload = assoc || null;
  }

  /** 
   * @member {String} tiploc
   * @memberof module:openraildata/common#Association
   * @description gets the association tiploc code
   * @instance
   * @readonly
   */
  get tiploc() { return (this._payload) ? this._payload.tiploc : null; }
  /** 
   * @member {String} category
   * @memberof module:openraildata/common#Association
   * @description gets the association category
   * @instance
   * @readonly
   */
  get category() { return (this._payload) ? this._payload.category : null; }

  /** 
   * @member {Object} mainTrain
   * @memberof module:openraildata/common#Association
   * @description gets the main train information
   * @instance
   * @readonly
   */
  get mainTrain() { return (this._payload) ? this._payload.main : null; }
  /** 
   * @member {String} mainTrainId
   * @memberof module:openraildata/common#Association
   * @description gets the main train rid
   * @instance
   * @readonly
   */
  get mainTrainId() { return (this._payload) ? this._payload.main.rid : null; }

  /** 
   * @member {Object} assocTrain an object containing all of the assoc trains information or null
   * @memberof module:openraildata/common#Association
   * @description gets the assoc train information
   * @instance
   * @readonly
   */
  get assocTrain() { return (this._payload) ? this._payload.assoc : null; }

  /** 
   * @member {String} assocTrainId the associated train rid
   * @memberof module:openraildata/common#Association
   * @description gets the assoc train rid
   * @instance
   * @readonly
   */
  get assocTrainId() { return (this._payload) ? this._payload.assoc.rid : null; }

  /**
   * @method module:openraildata/common#Association~isJoin
   * @description checks to see if the association is a train join type
   * @returns {Boolean} 
   */
  isJoin() { return (this._payload && this._payload.category === 'JJ'); }
  /**
   * @method module:openraildata/common#Association~isSplit
   * @description checks to see if the association is a train split type
   * @returns {Boolean} 
   */
  isSplit() { return (this._payload && this._payload.category === 'VV'); }
  /**
   * @method module:openraildata/common#Association~isNextTrain
   * @description checks to see if the association is a next train type
   * @returns {Boolean} 
   */
  isNextTrain() { return (this._payload && this._payload.category === 'NP'); }
}

module.exports = Association;
