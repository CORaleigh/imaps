"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[6251],{96866:(e,t,o)=>{o.d(t,{B:()=>y});var r=o(80292),i=o(35995),s=o(71907),n=o(33397),a=o(25265),p=o(49861),l=o(22892),c=o(53283);function y(e){const t=e?.origins??[void 0];return(o,s)=>{const y=function(e,t,o){if("resource"===e?.type)return function(e,t,o){const s=(0,n.Oe)(t,o);return{type:String,read:(e,t,o)=>{const r=(0,c.r)(e,t,o);return s.type===String?r:"function"==typeof s.type?new s.type({url:r}):void 0},write:{writer(t,n,p,y){if(!y||!y.resources)return"string"==typeof t?void(n[p]=(0,c.t)(t,y)):void(n[p]=t.write({},y));const h=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),f=(0,c.t)(h,{...y,verifyItemRelativeUrls:y&&y.verifyItemRelativeUrls?{writtenUrls:y.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},c.M.NO),v=s.type!==String&&(!(0,r.l)(this)||y&&y.origin&&this.originIdOf(o)>(0,a.M9)(y.origin)),g={object:this,propertyName:o,value:t,targetUrl:f,dest:n,targetPropertyName:p,context:y,params:e};y&&y.portalItem&&f&&!(0,i.YP)(f)?v?function(e){const{context:t,targetUrl:o,params:r,value:s,dest:n,targetPropertyName:a}=e;if(!t.portalItem)return;const p=t.portalItem.resourceFromPath(o),c=m(s,o,t),y=(0,l.B)(c),h=(0,i.Ml)(p.path),f=r?.compress??!1;y===h?(t.resources&&d({...e,resource:p,content:c,compress:f,updates:t.resources.toUpdate}),n[a]=o):u(e)}(g):function(e){let{context:t,targetUrl:o,dest:r,targetPropertyName:i}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(o),compress:!1}),r[i]=o)}(g):y&&y.portalItem&&(null==f||null!=(0,c.i)(f)||(0,i.jc)(f)||v)?u(g):n[p]=f}}}}(e,t,o);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=c.a;return{read:e,write:t}}}}(e,o,s);for(const e of t){const t=(0,p.CJ)(o,e,s);for(const e in y)t[e]=y[e]}}}function u(e){const{targetUrl:t,params:r,value:n,context:a,dest:p,targetPropertyName:y}=e;if(!a.portalItem)return;const u=(0,c.p)(t),h=u?.filename??(0,s.D)(),f=r?.prefix??u?.prefix,v=m(n,t,a),g=(0,i.v_)(f,h),b=`${g}.${(0,l.B)(v)}`,_=a.portalItem.resourceFromPath(b);(0,i.jc)(t)&&a.resources&&a.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(o.bind(o,76200))).default,{data:r}=await t(e,{responseType:"blob"});return r}(t).then((e=>{_.path=`${g}.${(0,l.B)(e)}`,p[y]=_.itemRelativeUrl})).catch((()=>{})));const S=r?.compress??!1;a.resources&&d({...e,resource:_,content:v,compress:S,updates:a.resources.toAdd}),p[y]=_.itemRelativeUrl}function d(e){let{object:t,propertyName:o,updates:r,resource:i,content:s,compress:n}=e;r.push({resource:i,content:s,compress:n,finish:e=>{!function(e,t,o){"string"==typeof e[t]?e[t]=o.url:e[t].url=o.url}(t,o,e)}})}function m(e,t,o){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(o))],{type:"application/json"})}},56251:(e,t,o)=>{o.r(t),o.d(t,{default:()=>D});var r,i=o(27366),s=o(10064),n=o(100),a=o(92026),p=o(97642),l=o(66978),c=o(94172),y=o(49861),u=(o(25243),o(63780),o(38511)),d=o(69912),m=o(96866),h=o(30651),f=o(27961),v=o(11936),g=o(6061),b=o(29598),_=o(56811),S=o(81118),w=o(45948),x=o(34207),C=o(76200),I=o(40281),T=o(46784),N=o(35995),j=(o(59486),o(84652)),U=o(51370),M=o(31201),R=o(79803),O=o(80885);let P=r=class extends T.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,R.Up)(e.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new U.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const i=new O.Z;(0,R.Wt)(e,i,r.layer.spatialReference),t[o]=i.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new r({geometry:(0,j.d9)(this.geometry),type:this.type})}};(0,i._)([(0,y.Cb)({type:O.Z}),(0,m.B)()],P.prototype,"geometry",void 0),(0,i._)([(0,M.c)(["web-scene","portal-item"],"geometry")],P.prototype,"writeGeometry",null),(0,i._)([(0,y.Cb)({type:["clip","mask","replace"],nonNullable:!0}),(0,m.B)()],P.prototype,"type",void 0),P=r=(0,i._)([(0,d.j)("esri.layers.support.SceneModification")],P);const F=P;var J;let q=J=class extends((0,T.eC)(I.Z.ofType(F))){constructor(e){super(e),this.url=null}clone(){return new J({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const o=new J;for(const r of e)o.add(F.fromJSON(r,t));return o}static async fromUrl(e,t,o){const r={url:(0,N.mN)(e),origin:"service"},i=await(0,C.default)(e,{responseType:"json",signal:(0,a.U2)(o,"signal")}),s=t.toJSON(),n=[];for(const a of i.data)n.push(F.fromJSON({...a,geometry:{...a.geometry,spatialReference:s}},r));return new J({url:e,items:n})}};(0,i._)([(0,y.Cb)({type:String})],q.prototype,"url",void 0),q=J=(0,i._)([(0,d.j)("esri.layers.support.SceneModifications")],q);const B=q;var k=o(53283);let A=class extends((0,S.Vt)((0,v.Y)((0,g.q)((0,b.I)((0,_.M)((0,p.R)((0,f.V)(h.Z)))))))){constructor(){super(...arguments),this._handles=new n.Z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add((0,c.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),c.Z_))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:(0,k.f)(e,o),context:o}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=(0,a.U2)(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){(0,l.r9)(o)}if(await this._fetchService(t),(0,a.pC)(this._modificationsSource)){const t=await B.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!(0,a.Wi)(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(S.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(S.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};(0,i._)([(0,y.Cb)({type:String,readOnly:!0})],A.prototype,"geometryType",void 0),(0,i._)([(0,y.Cb)({type:["show","hide"]})],A.prototype,"listMode",void 0),(0,i._)([(0,y.Cb)({type:["IntegratedMeshLayer"]})],A.prototype,"operationalLayerType",void 0),(0,i._)([(0,y.Cb)({json:{read:!1},readOnly:!0})],A.prototype,"type",void 0),(0,i._)([(0,y.Cb)({type:x.U4,readOnly:!0})],A.prototype,"nodePages",void 0),(0,i._)([(0,y.Cb)({type:[x.QI],readOnly:!0})],A.prototype,"materialDefinitions",void 0),(0,i._)([(0,y.Cb)({type:[x.Yh],readOnly:!0})],A.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,y.Cb)({type:[x.H3],readOnly:!0})],A.prototype,"geometryDefinitions",void 0),(0,i._)([(0,y.Cb)({readOnly:!0})],A.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,y.Cb)({type:B}),(0,m.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],A.prototype,"modifications",void 0),(0,i._)([(0,u.r)(["web-scene","portal-item"],"modifications")],A.prototype,"readModifications",null),(0,i._)([(0,y.Cb)(w.PV)],A.prototype,"elevationInfo",void 0),(0,i._)([(0,y.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],A.prototype,"path",void 0),A=(0,i._)([(0,d.j)("esri.layers.IntegratedMeshLayer")],A);const D=A},34207:(e,t,o)=>{o.d(t,{H3:()=>v,QI:()=>y,U4:()=>p,Yh:()=>d});var r=o(27366),i=o(46784),s=o(49861),n=(o(25243),o(63780),o(27135)),a=o(69912);let p=class extends i.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,r._)([(0,s.Cb)({type:Number})],p.prototype,"nodesPerPage",void 0),(0,r._)([(0,s.Cb)({type:Number})],p.prototype,"rootIndex",void 0),(0,r._)([(0,s.Cb)({type:String})],p.prototype,"lodSelectionMetricType",void 0),p=(0,r._)([(0,a.j)("esri.layer.support.I3SNodePageDefinition")],p);let l=class extends i.wq{constructor(){super(...arguments),this.factor=1}};(0,r._)([(0,s.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),(0,r._)([(0,s.Cb)({type:Number})],l.prototype,"factor",void 0),l=(0,r._)([(0,a.j)("esri.layer.support.I3SMaterialTexture")],l);let c=class extends i.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,r._)([(0,s.Cb)({type:[Number]})],c.prototype,"baseColorFactor",void 0),(0,r._)([(0,s.Cb)({type:l})],c.prototype,"baseColorTexture",void 0),(0,r._)([(0,s.Cb)({type:l})],c.prototype,"metallicRoughnessTexture",void 0),(0,r._)([(0,s.Cb)({type:Number})],c.prototype,"metallicFactor",void 0),(0,r._)([(0,s.Cb)({type:Number})],c.prototype,"roughnessFactor",void 0),c=(0,r._)([(0,a.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],c);let y=class extends i.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,r._)([(0,n.J)({opaque:"opaque",mask:"mask",blend:"blend"})],y.prototype,"alphaMode",void 0),(0,r._)([(0,s.Cb)({type:Number})],y.prototype,"alphaCutoff",void 0),(0,r._)([(0,s.Cb)({type:Boolean})],y.prototype,"doubleSided",void 0),(0,r._)([(0,n.J)({none:"none",back:"back",front:"front"})],y.prototype,"cullFace",void 0),(0,r._)([(0,s.Cb)({type:l})],y.prototype,"normalTexture",void 0),(0,r._)([(0,s.Cb)({type:l})],y.prototype,"occlusionTexture",void 0),(0,r._)([(0,s.Cb)({type:l})],y.prototype,"emissiveTexture",void 0),(0,r._)([(0,s.Cb)({type:[Number]})],y.prototype,"emissiveFactor",void 0),(0,r._)([(0,s.Cb)({type:c})],y.prototype,"pbrMetallicRoughness",void 0),y=(0,r._)([(0,a.j)("esri.layer.support.I3SMaterialDefinition")],y);let u=class extends i.wq{};(0,r._)([(0,s.Cb)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],u.prototype,"name",void 0),(0,r._)([(0,n.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],u.prototype,"format",void 0),u=(0,r._)([(0,a.j)("esri.layer.support.I3STextureFormat")],u);let d=class extends i.wq{constructor(){super(...arguments),this.atlas=!1}};(0,r._)([(0,s.Cb)({type:[u]})],d.prototype,"formats",void 0),(0,r._)([(0,s.Cb)({type:Boolean})],d.prototype,"atlas",void 0),d=(0,r._)([(0,a.j)("esri.layer.support.I3STextureSetDefinition")],d);let m=class extends i.wq{};(0,r._)([(0,n.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],m.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:Number})],m.prototype,"component",void 0),m=(0,r._)([(0,a.j)("esri.layer.support.I3SGeometryAttribute")],m);let h=class extends i.wq{};(0,r._)([(0,n.J)({draco:"draco"})],h.prototype,"encoding",void 0),(0,r._)([(0,s.Cb)({type:[String]})],h.prototype,"attributes",void 0),h=(0,r._)([(0,a.j)("esri.layer.support.I3SGeometryCompressedAttributes")],h);let f=class extends i.wq{constructor(){super(...arguments),this.offset=0}};(0,r._)([(0,s.Cb)({type:Number})],f.prototype,"offset",void 0),(0,r._)([(0,s.Cb)({type:m})],f.prototype,"position",void 0),(0,r._)([(0,s.Cb)({type:m})],f.prototype,"normal",void 0),(0,r._)([(0,s.Cb)({type:m})],f.prototype,"uv0",void 0),(0,r._)([(0,s.Cb)({type:m})],f.prototype,"color",void 0),(0,r._)([(0,s.Cb)({type:m})],f.prototype,"uvRegion",void 0),(0,r._)([(0,s.Cb)({type:m})],f.prototype,"featureId",void 0),(0,r._)([(0,s.Cb)({type:m})],f.prototype,"faceRange",void 0),(0,r._)([(0,s.Cb)({type:h})],f.prototype,"compressedAttributes",void 0),f=(0,r._)([(0,a.j)("esri.layer.support.I3SGeometryBuffer")],f);let v=class extends i.wq{};(0,r._)([(0,n.J)({triangle:"triangle"})],v.prototype,"topology",void 0),(0,r._)([(0,s.Cb)()],v.prototype,"geometryBuffers",void 0),v=(0,r._)([(0,a.j)("esri.layer.support.I3SGeometryDefinition")],v)},22892:(e,t,o)=>{o.d(t,{B:()=>i});var r=o(35995);function i(e){return s[function(e){return e instanceof Blob?e.type:function(e){const t=(0,r.Ml)(e);return p[t]||n}(e.url)}(e)]||a}const s={},n="text/plain",a=s[n],p={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const l in p)s[p[l]]=l}}]);
//# sourceMappingURL=6251.931b6ec8.chunk.js.map