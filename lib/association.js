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
  constructor(assoc = {}) {
    this._payload = assoc;
  }

  /**
   * @method module:openraildata/common#Association~getRIDFromTrain
   * @description gets the id of a specific type of train
   * @param {Object} train the train object to get the rid from
   * @private
   */
  getRIDFromTrain(train = {}) {
    return (train.rid)
      ? train.rid
      : null;
  }

  /** 
   * @member {tpl} tiploc
   * @memberof module:openraildata/common#Association
   * @description gets the association tiploc code
   * @instance
   * @readonly
   */
  get tiploc() {
    return (this._payload.tiploc)
      ? this._payload.tiploc
      : null;
  }

  /** 
   * @member {category} category
   * @memberof module:openraildata/common#Association
   * @description gets the association category
   * @instance
   * @readonly
   */
  get category() {
    return (this._payload.category)
      ? this._payload.category
      : null;
  }

  /** 
   * @member {Object} mainTrain
   * @memberof module:openraildata/common#Association
   * @description gets the main train information
   * @instance
   * @readonly
   */
  get mainTrain() {
    return (this._payload.main)
      ? this._payload.main
      : null;
  }

  /** 
   * @member {rid} mainTrainId
   * @memberof module:openraildata/common#Association
   * @description gets the main train rid
   * @instance
   * @readonly
   */
  get mainTrainId() {
    return this.getRIDFromTrain(this._payload.main);
  }

  /** 
   * @member {Object} assocTrain an object containing all of the assoc trains information or null
   * @memberof module:openraildata/common#Association
   * @description gets the assoc train information
   * @instance
   * @readonly
   */
  get assocTrain() {
    return (this._payload.assoc)
      ? this._payload.assoc
      : null;
  }

  /** 
   * @member {rid} assocTrainId the associated train rid
   * @memberof module:openraildata/common#Association
   * @description gets the assoc train rid
   * @instance
   * @readonly
   */
  get assocTrainId() {
    return this.getRIDFromTrain(this._payload.assoc);
  }

  /**
   * @method module:openraildata/common#Association~isJoin
   * @description checks to see if the association is a train join type
   * @see category
   * @returns {Boolean} 
   */
  isJoin() {
    return (this._payload && this._payload.category === 'JJ');
  }

  /**
   * @method module:openraildata/common#Association~isSplit
   * @description checks to see if the association is a train split type
   * @see category
   * @returns {Boolean} 
   */
  isSplit() {
    return (this._payload && this._payload.category === 'VV');
  }

  /**
   * @method module:openraildata/common#Association~isNextTrain
   * @description checks to see if the association is a next train type
   * @see category
   * @returns {Boolean} 
   */
  isNextTrain() {
    return (this._payload && this._payload.category === 'NP');
  }
}

module.exports = Association;
