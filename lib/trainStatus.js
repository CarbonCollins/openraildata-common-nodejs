'use strict';


/**
 * @class
 * @classdesc a class for train status messages
 */
class TrainStatus {
  /**
   * @constructor
   * @param {Object} payload the raw train status message
   */
  constructor(payload) {
    this._rid = payload.rid || null;
    this._uid = payload.uid || null;
    this._ssd = payload.ssd || null;
    this._locations = payload.locations || null;
  }
}

module.exports = TrainStatus;


// <TS rid="201411200059207" uid="C70164" ssd="2014-11-20">
//   <fc:Location tpl="LOGHBRO" wta="09:41:30" wtd="09:43" pta="09:41" ptd="09:42">
//     <fc:arr at="09:41" src="TD" />
//     <fc:dep et="09:42" src="Darwin" />
//     <fc:plat platsup="true" cisPlatsup="true">2</fc:plat>
//   </fc:Location>
//   <fc:Location tpl="LESTER" wta="09:51:30" wtd="09:53:30" pta="09:51" ptd="09:51">
//     <fc:arr et="09:51" src="Darwin" />
//     <fc:dep et="09:51" src="Darwin" />
//     <fc:plat platsup="true" cisPlatsup="true">3</fc:plat>
//   </fc:Location>
//   <fc:Location tpl="STPX" wta="10:57" pta="10:59">
//     <fc:arr et="10:59" wet="10:52" src="Darwin" />
//     <fc:plat>2</fc:plat>
//   </fc:Location>
// </TS>
