(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[284],{541:function(t,e,r){"use strict";var o=r(80),s=(r(78),r(79),r(86),r(83)),i=r(82),a=(r(81),r(84),r(85),r(88)),n=r(96);let c=class extends a.a{constructor(t){super(t),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const t=this.geometries.map((function(t){return t.toJSON()})),e=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=e.spatialReference.wkid||JSON.stringify(e.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:Object(n.c)(e),geometries:t}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}};Object(o.a)([Object(s.b)()],c.prototype,"geometries",void 0),Object(o.a)([Object(s.b)({json:{read:{source:"outSR"}}})],c.prototype,"outSpatialReference",void 0),Object(o.a)([Object(s.b)()],c.prototype,"transformation",void 0),Object(o.a)([Object(s.b)()],c.prototype,"transformForward",void 0),c=Object(o.a)([Object(i.a)("esri.tasks.support.ProjectParameters")],c);var p=c;e.a=p}}]);
//# sourceMappingURL=284.752151de.chunk.js.map