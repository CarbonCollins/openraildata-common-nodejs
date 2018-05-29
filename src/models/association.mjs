export const symbols = new Map()
  .set('tiploc', Symbol())
  .set('category', Symbol())
  .set('main', Symbol())
  .set('association', Symbol());

/**
 * @class
 * @classdesc A class for association data and helpful functions
 * @augments module:openraildata/common#Association
 * @instance
 */
export default class Association {
  /**
   * @constructor
   * @param {Object} payload the raw json association message object
   */
  constructor(payload = {}) {
    this[symbols.get('tiploc')] = payload.tiploc;
    this[symbols.get('category')] = payload.category;
    this[symbols.get('main')] = payload.main;
    this[symbols.get('association')] = payload.association;
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
    return this[symbols.get('tiploc')] || null;
  }

  /** 
   * @member {category} category
   * @memberof module:openraildata/common#Association
   * @description gets the association category
   * @instance
   * @readonly
   */
  get category() {
    return this[symbols.get('category')] || null;
  }

  /** 
   * @member {Object} mainTrain
   * @memberof module:openraildata/common#Association
   * @description gets the main train information
   * @instance
   * @readonly
   */
  get mainTrain() {
    return this[symbols.get('main')] || null;
  }

  /** 
   * @member {rid} mainTrainId
   * @memberof module:openraildata/common#Association
   * @description gets the main train rid
   * @instance
   * @readonly
   */
  get mainTrainId() {
    return this.getRIDFromTrain(this[symbols.get('main')]);
  }

  /** 
   * @member {Object} associatedTrain an object containing all of the assoc trains information or null
   * @memberof module:openraildata/common#Association
   * @description gets the assoc train information
   * @instance
   * @readonly
   */
  get associatedTrain() {
    return this[symbols.get('association')] || null;
  }

  /** 
   * @member {rid} associatedTrainId the associated train rid
   * @memberof module:openraildata/common#Association
   * @description gets the assoc train rid
   * @instance
   * @readonly
   */
  get associatedTrainId() {
    return this.getRIDFromTrain(this[symbols.get('association')]);
  }

  /**
   * @method module:openraildata/common#Association~isJoin
   * @description checks to see if the association is a train join type
   * @see category
   * @returns {Boolean} 
   */
  isJoin() {
    return (this[symbols.get('category')] === 'JJ');
  }

  /**
   * @method module:openraildata/common#Association~isSplit
   * @description checks to see if the association is a train split type
   * @see category
   * @returns {Boolean} 
   */
  isSplit() {
    return (this[symbols.get('category')] === 'VV');
  }

  /**
   * @method module:openraildata/common#Association~isNextTrain
   * @description checks to see if the association is a next train type
   * @see category
   * @returns {Boolean} 
   */
  isNextTrain() {
    return (this[symbols.get('category')] === 'NP');
  }
}
