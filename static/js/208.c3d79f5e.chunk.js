(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[208],{1213:function(t,e,r){"use strict";r.r(e),r.d(e,"FeatureCollectionSnappingSource",(function(){return p}));var n=r(81),o=r(92),a=r(85),c=r(83),i=(r(79),r(84),r(80),r(82)),s=r(953);let p=class extends o.a{constructor(t){super(t)}get availability(){return 1}refresh(){}async fetchCandidates(t,e){const r=this.layerSource.layer.source;return r.querySnapping?(await r.querySnapping({distance:t.distance,point:t.coordinateHelper.vectorToPoint(t.point).toJSON(),types:t.types,query:Object(a.k)(t.filter)?t.filter.createQuery().toJSON():{where:"1=1"}},{signal:e})).candidates.map((e=>Object(s.a)(e,t.coordinateHelper))):[]}};Object(n.a)([Object(c.b)({constructOnly:!0})],p.prototype,"layerSource",void 0),Object(n.a)([Object(c.b)({readOnly:!0})],p.prototype,"availability",null),p=Object(n.a)([Object(i.a)("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],p)},621:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(317),o=r(453);class a extends o.a{constructor(t){super(),this.point=t}equals(t){return t instanceof a&&Object(n.d)(this.point,t.point)}}},953:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(837),o=r(531),a=r(748),c=r(621);class i extends a.a{constructor(t){super({...t,constraint:new o.d(t.coordinateHelper,t.targetPoint)})}get hints(){return[new c.a(this.targetPoint)]}}function s(t,e){switch(t.type){case"edge":return new n.a({coordinateHelper:e,edgeStart:e.pointToVector(t.start),edgeEnd:e.pointToVector(t.end),targetPoint:e.pointToVector(t.target),objectId:t.objectId});case"vertex":return new i({coordinateHelper:e,targetPoint:e.pointToVector(t.target),objectId:t.objectId})}}}}]);
//# sourceMappingURL=208.c3d79f5e.chunk.js.map