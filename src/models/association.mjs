export const symbols = new Map()
  .set('tiploc', Symbol('tiploc'))
  .set('category', Symbol('category'))
  .set('main', Symbol('main'))
  .set('association', Symbol('association'));

/**
 * @class
 * @classdesc A data model for train association data. This stores various train id's in order to
 * be used with associating different trains and rolling stock.
 * @author Steven Collins <steven@carboncollins.uk>
 */
export class Association {
  /**
   * @constructor
   * @description Creates an instance of Association.
   * @author Steven Collins <steven@carboncollins.uk>
   * @param {Association|Object} [payload={}]
   */
  constructor(payload = {}) {
    this[symbols.get('tiploc')] = payload.tiploc;
    this[symbols.get('category')] = payload.category;
    this[symbols.get('main')] = payload.main;
    this[symbols.get('association')] = payload.association;
  }

  /**
   * @method getRIDFromTrain
   * @memberof Association
   * @description gets the id of a specific type of train
   * @param {Object} train the train object to get the rid from
   * @private
   */
  getRIDFromTrain(train = {}) {
    return train.rid || null;
  }

  /** 
   * @member {tpl} tiploc gets the association tiploc code
   * @memberof Association
   * @readonly
   * @instance
   * @public
   */
  get tiploc() {
    return this[symbols.get('tiploc')] || null;
  }

  /** 
   * @member {category} category gets the association category
   * @memberof Association
   * @readonly
   * @instance
   * @public
   */
  get category() {
    return this[symbols.get('category')] || null;
  }

  /** 
   * @member {Object} mainTrain gets the main train information
   * @memberof Association
   * @readonly 
   * @instance
   * @public
   */
  get mainTrain() {
    return this[symbols.get('main')] || null;
  }

  /** 
   * @member {rid} mainTrainId gets the main train rid
   * @memberof Association
   * @readonly
   * @instance
   * @public
   */
  get mainTrainId() {
    return this.getRIDFromTrain(this[symbols.get('main')]);
  }

  /** 
   * @member {Object} associatedTrain an object containing all of the assoc trains information or null
   * @memberof Association
   * @readonly
   * @instance
   * @public
   */
  get associatedTrain() {
    return this[symbols.get('association')] || null;
  }

  /** 
   * @member {rid} associatedTrainId the associated train rid
   * @memberof Association
   * @readonly
   * @instance
   * @public
   */
  get associatedTrainId() {
    return this.getRIDFromTrain(this[symbols.get('association')]);
  }

  /**
   * @method isJoin
   * @memberof Association
   * @description checks to see if the association is a train join type using the `category` value
   * @see {@link category|Association.category}
   * @author Steven Collins <steven@carboncollins.uk>
   * @returns {boolean} returns true if `category` is join type
   * @instance
   */
  isJoin() {
    return (this[symbols.get('category')] === 'JJ');
  }

  /**
   * @method isSplit
   * @memberof Association
   * @description checks to see if the association is a train split type using the `category` value
   * @see {@link category|Association.category}
   * @author Steven Collins <steven@carboncollins.uk>
   * @returns {boolean} returns true if `category` is split type
   * @instance
   */
  isSplit() {
    return (this[symbols.get('category')] === 'VV');
  }

  /**
   * @method isNextTrain
   * @memberof Association
   * @description checks to see if the association is of next train type using the `category` value
   * @see {@link category|Association.category}
   * @author Steven Collins <steven@carboncollins.uk>
   * @returns {boolean} returns true if `category` is split type
   * @instance
   */
  isNextTrain() {
    return (this[symbols.get('category')] === 'NP');
  }
}
