"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[2137],{26823:(e,t,n)=>{n.r(t),n.d(t,{FeatureCollectionSnappingSource:()=>p});var r=n(27366),o=n(85015),a=n(92026),i=n(49861),s=(n(63780),n(93169),n(25243),n(69912)),c=n(69117);let p=class extends o.Z{constructor(e){super(e)}get availability(){return 1}refresh(){}async fetchCandidates(e,t){const n=this.layerSource.layer.source;return n.querySnapping?(await n.querySnapping({distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,query:(0,a.pC)(e.filter)?e.filter.createQuery().toJSON():{where:"1=1"}},{signal:t})).candidates.map((t=>(0,c.X)(t,e.coordinateHelper,e.elevationInfo))):[]}};(0,r._)([(0,i.Cb)({constructOnly:!0})],p.prototype,"layerSource",void 0),(0,r._)([(0,i.Cb)({readOnly:!0})],p.prototype,"availability",null),p=(0,r._)([(0,s.j)("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],p)},69117:(e,t,n)=>{n.d(t,{X:()=>c});var r=n(95905),o=n(95122),a=n(75691),i=n(61309);class s extends a.a{constructor(e){super({...e,constraint:new o.Hk(e.coordinateHelper,e.targetPoint)})}get hints(){return[new i.n(this.targetPoint,this.elevationInfo)]}}function c(e,t,n){switch(e.type){case"edge":return new r.L({coordinateHelper:t,edgeStart:t.pointToVector(e.start),edgeEnd:t.pointToVector(e.end),targetPoint:t.pointToVector(e.target),objectId:e.objectId,elevationInfo:n});case"vertex":return new s({coordinateHelper:t,targetPoint:t.pointToVector(e.target),objectId:e.objectId,elevationInfo:n})}}},61309:(e,t,n)=>{n.d(t,{n:()=>a});var r=n(64674),o=n(55054);class a extends o.r{constructor(e,t){super(t),this.point=e}equals(e){return e instanceof a&&(0,r.Xv)(this.point,e.point)}}}}]);
//# sourceMappingURL=2137.3c2c8e78.chunk.js.map