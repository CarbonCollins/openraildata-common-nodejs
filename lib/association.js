'use strict';

const s_tiploc = Symbol('tiploc');
const s_category = Symbol('category');
const s_main = Symbol('main');
const s_association = Symbol('association');

/**
 * @class
 * @classdesc A class for association data and helpful functions
 * @augments module:openraildata/common#Association
 * @instance
 */
class Association {
  /**
   * @constructor
   * @param {Object} payload the raw json association message object
   */
  constructor(payload = {}) {
    this[s_tiploc] = payload.tiploc;
    this[s_category] = payload.category;
    this[s_main] = payload.main;
    this[s_association] = payload.assoc;
  }

  /**
   * @method module:openraildata/common#Association~getRIDFromTrain
   * @description gets the id of a specific type of train
   * @param {Object} train the train object to get the rid from
   * @private
   */
  getRIDFromTrain(train = {}) {
    return train.rid || null;
  }

  /** 
   * @member {tpl} tiploc
   * @memberof module:openraildata/common#Association
   * @description gets the association tiploc code
   * @instance
   * @readonly
   */
  get tiploc() {
    return this[s_tiploc] || null;
  }

  /** 
   * @member {category} category
   * @memberof module:openraildata/common#Association
   * @description gets the association category
   * @instance
   * @readonly
   */
  get category() {
    return this[s_category] || null;
  }

  /** 
   * @member {Object} mainTrain
   * @memberof module:openraildata/common#Association
   * @description gets the main train information
   * @instance
   * @readonly
   */
  get mainTrain() {
    return this[s_main] || null;
  }

  /** 
   * @member {rid} mainTrainId
   * @memberof module:openraildata/common#Association
   * @description gets the main train rid
   * @instance
   * @readonly
   */
  get mainTrainId() {
    return this.getRIDFromTrain(this[s_main]);
  }

  /** 
   * @member {Object} associatedTrain an object containing all of the assoc trains information or null
   * @memberof module:openraildata/common#Association
   * @description gets the assoc train information
   * @instance
   * @readonly
   */
  get associatedTrain() {
    return this[s_association] || null;
  }

  /** 
   * @member {rid} associatedTrainId the associated train rid
   * @memberof module:openraildata/common#Association
   * @description gets the assoc train rid
   * @instance
   * @readonly
   */
  get associatedTrainId() {
    return this.getRIDFromTrain(this[s_association]);
  }

  /**
   * @method module:openraildata/common#Association~isJoin
   * @description checks to see if the association is a train join type
   * @see category
   * @returns {Boolean} 
   */
  isJoin() {
    return (this[s_category] === 'JJ');
  }

  /**
   * @method module:openraildata/common#Association~isSplit
   * @description checks to see if the association is a train split type
   * @see category
   * @returns {Boolean} 
   */
  isSplit() {
    return (this[s_category] === 'VV');
  }

  /**
   * @method module:openraildata/common#Association~isNextTrain
   * @description checks to see if the association is a next train type
   * @see category
   * @returns {Boolean} 
   */
  isNextTrain() {
    return (this[s_category] === 'NP');
  }
}

module.exports = {
  class: Association,
  symbols: {
    s_tiploc,
    s_category,
    s_main,
    s_association
  }
};