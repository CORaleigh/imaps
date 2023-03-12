import{e as t,y as a,a_ as S,iN as $,a as f,l as O,aT as x,i_ as L,rQ as I,ae as N,qH as R,D as b,is as M,af as A,eI as w,iE as J,iF as D,iG as U,iD as j,iJ as V,iI as E,w as K,Q as P,dq as q,mB as G,eY as Q,I as z,as as F,ad as d,iO as k,ra as B,fQ as C}from"./index-7753bab1.js";import{g as m}from"./persistable-c933e536.js";import{E as H,L as v}from"./SceneService-18912f4c.js";import{s as Y,l as W,u as X,m as Z}from"./I3SLayerDefinitions-98cfb829.js";import"./resourceExtension-c4ba4cb6.js";import"./saveUtils-4e89c5e6.js";import"./resourceUtils-59e3ad6e.js";var h;let n=h=class extends O{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,i,r,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!x(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new L("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const l=new S;I(e,l,s.layer.spatialReference),i[r]=l.toJSON(s)}else i[r]=e.toJSON(s);delete i[r].spatialReference}clone(){return new h({geometry:N(this.geometry),type:this.type})}};t([a({type:S}),m()],n.prototype,"geometry",void 0),t([$(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),t([a({type:["clip","mask","replace"],nonNullable:!0}),m()],n.prototype,"type",void 0),n=h=t([f("esri.layers.support.SceneModification")],n);const c=n;var p;let y=p=class extends R(b.ofType(c)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(i=>i.toJSON(e)).filter(i=>!!i.geometry)}static fromJSON(e,i){const r=new p;for(const s of e)r.add(c.fromJSON(s,i));return r}static async fromUrl(e,i,r){const s={url:M(e),origin:"service"},l=await A(e,{responseType:"json",signal:w(r,"signal")}),T=i.toJSON(),u=[];for(const g of l.data)u.push(c.fromJSON({...g,geometry:{...g.geometry,spatialReference:T}},s));return new p({url:e,items:u})}};t([a({type:String})],y.prototype,"url",void 0),y=p=t([f("esri.layers.support.SceneModifications")],y);const _=y;let o=class extends H(J(D(U(j(V(E(C))))))){constructor(...e){super(...e),this._handles=new K,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add(P(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,q))}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}readModifications(e,i,r){this._modificationsSource={url:G(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const i=w(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){Q(r)}if(await this._fetchService(i),z(this._modificationsSource)){const r=await _.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",r,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,i)}beforeSave(){if(!F(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,i){return this._debouncedSaveOperations(v.SAVE_AS,{...i,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(v.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new d("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};t([a({type:String,readOnly:!0})],o.prototype,"geometryType",void 0),t([a({type:["show","hide"]})],o.prototype,"listMode",void 0),t([a({type:["IntegratedMeshLayer"]})],o.prototype,"operationalLayerType",void 0),t([a({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([a({type:Y,readOnly:!0})],o.prototype,"nodePages",void 0),t([a({type:[W],readOnly:!0})],o.prototype,"materialDefinitions",void 0),t([a({type:[X],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),t([a({type:[Z],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),t([a({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),t([a({type:_}),m({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],o.prototype,"modifications",void 0),t([k(["web-scene","portal-item"],"modifications")],o.prototype,"readModifications",null),t([a(B)],o.prototype,"elevationInfo",void 0),t([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),o=t([f("esri.layers.IntegratedMeshLayer")],o);const ne=o;export{ne as default};
