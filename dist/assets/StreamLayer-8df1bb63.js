import{e as t,y as s,a as I,l as F,rk as P,rl as _,iC as k,qM as D,iD as O,qN as E,iE as C,iF as N,iG as U,iJ as q,iH as L,f as S,ad as p,I as A,eY as J,rm as f,r$ as M,aR as G,fR as V,nP as W,_ as z,pW as u,cN as Q,qX as Y,g0 as B,af as H,bB as K,rn as X,gV as Z,cK as ee,aq as te,ro as ie,q_ as se,rp as re,rq as oe,pL as g,s5 as ne,s6 as ae,qS as le,nO as pe,q$ as de,r0 as ce,iO as v,rs as ye,o7 as me,s7 as ue,s8 as he,r6 as fe,fQ as ge}from"./index-84d82762.js";var h;let l=h=class extends F{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new h({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([s({type:Number,json:{write:!0}})],l.prototype,"age",void 0),t([s({type:Number,json:{write:!0}})],l.prototype,"ageReceived",void 0),t([s({type:Number,json:{write:!0}})],l.prototype,"displayCount",void 0),t([s({type:Number,json:{write:!0}})],l.prototype,"maxObservations",void 0),l=h=t([I("esri.layers.support.PurgeOptions")],l);const $=l,b=fe();function w(e,r){return new p("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,{layer:e})}let i=class extends P(_(k(D(O(E(C(N(U(q(L(ge))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new $,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=S.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r=A(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(J).then(()=>this._fetchService(r))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){f(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,r,o){const a=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(a){const n=M(a,r,o)||void 0;return n||G.getLogger(this.declaredClass).error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:o}),n}if(r.defaultSymbol)return r.types&&r.types.length?new V({defaultSymbol:m(r.defaultSymbol,r,o),field:r.typeIdField,uniqueValueInfos:r.types.map(n=>({id:n.id,symbol:m(n.symbol,n,o)}))}):new W({symbol:m(r.defaultSymbol,r,o)})}async connect(e){const[{createConnection:r}]=await Promise.all([z(()=>import("./createConnection-b372fbb3.js"),["assets/createConnection-b372fbb3.js","assets/index-84d82762.js","assets/index-0be7f32f.css"]),this.load()]),o=this.geometryType?u.toJSON(this.geometryType):null,{customParameters:a=null,definitionExpression:n=null,geometryDefinition:c=null,maxReconnectionAttempts:x=0,maxReconnectionInterval:R=20,spatialReference:T=this.spatialReference}=e||this.createConnectionParameters(),d=r(this.parsedUrl,this.spatialReference,T,o,{geometry:c,where:n},x,R,a??void 0),j=Q([this.on("send-message-to-socket",y=>d.sendMessageToSocket(y)),this.on("send-message-to-client",y=>d.sendMessageToClient(y))]);return d.once("destroy",j.remove),d}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return Y(this,e)}createQuery(){const e=new B;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let o=null;return this.fields.some(a=>(a.name===e&&(o=a.domain),!!o)),o}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}write(e,r){const o=r==null?void 0:r.messages;return this.webSocketUrl?(o==null||o.push(w(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,r):(o==null||o.push(w(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){var r,o,a;if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:n}=await H(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=n}}else{if(!((r=this.timeInfo)!=null&&r.trackIdField))throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const n=(o=this.fields.find(c=>c.type==="oid"))==null?void 0:o.name;if(!n)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=n}if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(n=>n.name===this.objectIdField)||this.fields.push(new K({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(a=this.portalItem)==null?void 0:a.portal,url:this.parsedUrl}),f(this.renderer,this.fieldsIndex),X(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),Z(this,{origin:"service"})}};t([s({type:String})],i.prototype,"copyright",void 0),t([s({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([s({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([s({type:String})],i.prototype,"displayField",void 0),t([s({type:ee})],i.prototype,"elevationInfo",void 0),t([s(b.fields)],i.prototype,"fields",void 0),t([s(b.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([s({type:te})],i.prototype,"geometryDefinition",void 0),t([s({type:u.apiValues,json:{read:{reader:u.read}}})],i.prototype,"geometryType",void 0),t([s(ie)],i.prototype,"labelsVisible",void 0),t([s({type:[se],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:re},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],i.prototype,"labelingInfo",void 0),t([s(oe)],i.prototype,"legendEnabled",void 0),t([s({type:["show","hide"]})],i.prototype,"listMode",void 0),t([s({type:g})],i.prototype,"maxReconnectionAttempts",void 0),t([s({type:g})],i.prototype,"maxReconnectionInterval",void 0),t([s(ne)],i.prototype,"maxScale",void 0),t([s(ae)],i.prototype,"minScale",void 0),t([s({type:String})],i.prototype,"objectIdField",void 0),t([s({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),t([s(le)],i.prototype,"popupEnabled",void 0),t([s({type:pe,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],i.prototype,"popupTemplate",void 0),t([s({type:$})],i.prototype,"purgeOptions",void 0),t([s({types:de,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:ce,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),t([v("service","renderer",["drawingInfo.renderer","defaultSymbol"]),v("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),t([s(ye)],i.prototype,"screenSizePerspectiveEnabled",void 0),t([s()],i.prototype,"sourceJSON",void 0),t([s({type:S,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),t([s({json:{read:!1}})],i.prototype,"type",void 0),t([s(me)],i.prototype,"url",void 0),t([s({type:Number})],i.prototype,"updateInterval",void 0),t([s({type:String})],i.prototype,"webSocketUrl",void 0),i=t([I("esri.layers.StreamLayer")],i);const m=ue({types:he}),be=i;export{be as default};
