import{qH as R,c as y,e as t,y as i,pL as f,mv as x,bI as S,a as w,rh as j,ah as b,J as E,dz as T,dA as L,D as N,nQ as k,x as q,T as O,as as m,I as s,nn as A,av as D,ri as C,aq as P,iF as _,iJ as H,iN as I,fQ as J}from"./index-84d82762.js";import{c as F}from"./Analysis-55087d45.js";let l=class extends R(j){constructor(e){super(e),this.type="simple",this.color=new y("black"),this.lineSize=2,this.fontSize=10,this.textColor=new y("black"),this.textBackgroundColor=new y([255,255,255,.6])}};t([i({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),t([i({type:y,nonNullable:!0,json:{type:[f],write:{isRequired:!0}}})],l.prototype,"color",void 0),t([i({type:Number,cast:x,nonNullable:!0,range:{min:S(1)},json:{write:{isRequired:!0}}})],l.prototype,"lineSize",void 0),t([i({type:Number,cast:x,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"fontSize",void 0),t([i({type:y,nonNullable:!0,json:{type:[f],write:{isRequired:!0}}})],l.prototype,"textColor",void 0),t([i({type:y,nonNullable:!0,json:{type:[f],write:{isRequired:!0}}})],l.prototype,"textBackgroundColor",void 0),l=t([w("esri.analysis.DimensionSimpleStyle")],l);const v=l;var c;(function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"})(c||(c={}));const M=[c.Horizontal,c.Vertical,c.Direct];let a=class extends R(j){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=c.Direct,this.offset=0,this.orientation=0}};t([i({type:["length"],json:{write:{isRequired:!0}}})],a.prototype,"type",void 0),t([i({type:b,json:{write:!0}})],a.prototype,"startPoint",void 0),t([i({type:b,json:{write:!0}})],a.prototype,"endPoint",void 0),t([i({type:M,nonNullable:!0,json:{write:{isRequired:!0}}})],a.prototype,"measureType",void 0),t([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],a.prototype,"offset",void 0),t([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),E(e=>T.normalize(L(e),0,!0))],a.prototype,"orientation",void 0),a=t([w("esri.analysis.LengthDimension")],a);const z=a,g=N.ofType(z);let p=class extends F{constructor(e){super(e),this.type="dimension",this.style=new v,this.extent=null}initialize(){this.addHandles(q(()=>this._computeExtent(),e=>{(m(e)||m(e.pending))&&this._set("extent",s(e)?e.extent:null)},O))}get dimensions(){return this._get("dimensions")||new g}set dimensions(e){this._set("dimensions",A(e,this.dimensions,g))}get spatialReference(){for(const e of this.dimensions){if(s(e.startPoint))return e.startPoint.spatialReference;if(s(e.endPoint))return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,n)=>(e.push(n.startPoint,n.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return s(e)?D(e.pending):Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(m(e))return{pending:null,extent:null};const n=[];for(const r of this.dimensions)s(r.startPoint)&&n.push(r.startPoint),s(r.endPoint)&&n.push(r.endPoint);const u=C(n,e);if(s(u.pending))return{pending:u.pending,extent:null};let h=null;return s(u.geometries)&&(h=u.geometries.reduce((r,d)=>m(r)?s(d)?P.fromPoint(d):null:s(d)?r.union(P.fromPoint(d)):r,null)),{pending:null,extent:h}}clear(){this.dimensions.removeAll()}};t([i({type:["dimension"]})],p.prototype,"type",void 0),t([i({cast:k,type:g,nonNullable:!0})],p.prototype,"dimensions",null),t([i({readOnly:!0})],p.prototype,"spatialReference",null),t([i({types:{key:"type",base:null,typeMap:{simple:v}},nonNullable:!0})],p.prototype,"style",void 0),t([i({value:null,readOnly:!0})],p.prototype,"extent",void 0),t([i({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([w("esri.analysis.DimensionAnalysis")],p);const $=p;let o=class extends _(H(J)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new $,this.opacity=1,e){const{source:n,style:u}=e;n&&u&&(n.style=u)}}initialize(){this.addHandles([q(()=>this.source,(e,n)=>{s(n)&&n.parent===this&&(n.parent=null),s(e)&&(e.parent=this)},O)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return D(this.source.spatialReference)}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new $)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,n,u,h){n.dimensions=e.filter(({startPoint:r,endPoint:d})=>s(r)&&s(d)).map(r=>r.toJSON(h)).toJSON()}};t([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([i({type:["ArcGISDimensionLayer"]})],o.prototype,"operationalLayerType",void 0),t([i({nonNullable:!0})],o.prototype,"source",void 0),t([i({readOnly:!0})],o.prototype,"spatialReference",null),t([i({types:{key:"type",base:null,typeMap:{simple:v}},json:{write:{ignoreOrigin:!0}}})],o.prototype,"style",null),t([i({readOnly:!0})],o.prototype,"fullExtent",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],o.prototype,"opacity",void 0),t([i({type:["show","hide"]})],o.prototype,"listMode",void 0),t([i({type:N.ofType(z),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],o.prototype,"dimensions",null),t([I("web-scene","dimensions")],o.prototype,"writeDimensions",null),o=t([w("esri.layers.DimensionLayer")],o);const Q=o;export{Q as default};
