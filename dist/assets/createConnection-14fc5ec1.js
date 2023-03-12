import{M as N,ae as c,e as g,y as w,a as b,na as F,J as h,at as f,hZ as R,aS as a,lO as E,a8 as O,ag as P,h4 as M,_ as W,g1 as T,c3 as C,eJ as q,f as j,pk as v}from"./index-3baec1e8.js";let S=class extends N.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new c("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};g([w({readOnly:!0})],S.prototype,"connectionError",null),S=g([b("esri.layers.support.StreamConnection")],S);const x=S;var y;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"})(y||(y={}));let _=class extends x{constructor(e){super(),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:s,sourceSpatialReference:r}=e;this._config=e,this._featureZScaler=F(t,r,s),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),h(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(f(this._websocket))return"disconnected";switch(this._websocket.readyState){case y.CONNECTING:case y.OPEN:return"connected";case y.CLOSING:case y.CLOSED:return"disconnected"}}sendMessageToSocket(e){f(this._websocket)?this._outstandingMessages.push(e):this._websocket.send(JSON.stringify(e))}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,h(this._websocket)&&this._websocket.close()}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,s=0){try{if(this.destroyed)return;const r=R(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(r),this.notifyChange("connectionStatus")}catch(r){const o=t/1e3;return this._config.maxReconnectionAttempts&&s>=this._config.maxReconnectionAttempts?(a.getLogger(this.declaredClass).error(new c("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(a.getLogger(this.declaredClass).error(new c("websocket-connection",`Failed to connect. Attempting to reconnect in ${o}s`,r)),await E(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),s+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=t=>{try{const s=JSON.parse(t.data);this._onMessage(s)}catch(s){return void a.getLogger(this.declaredClass).error(new c("websocket-connection","Failed to parse message, invalid JSON",{error:s}))}}}_createWebSocket(e){return new Promise((t,s)=>{const r=new WebSocket(e);r.onopen=()=>{if(r.onopen=null,this.destroyed)return r.onclose=null,void r.close();r.onclose=o=>this._onClose(o),r.onerror=o=>this._onError(o),this._setWebSocketJSONParseHandler(r),t(r)},r.onclose=o=>{r.onopen=r.onclose=null,s(o)}})}async _handshake(e=1e4){const t=this._websocket;if(f(t))return;const s=O(),r=t.onmessage,{filter:o,outFields:n,spatialReference:l}=this._config;return s.timeout(e),t.onmessage=d=>{var i;let u=null;try{u=JSON.parse(d.data)}catch{}u&&typeof u=="object"||(a.getLogger(this.declaredClass).error(new c("websocket-connection","Protocol violation. Handshake failed - malformed message",d.data)),s.reject(),this.destroy()),((i=u.spatialReference)==null?void 0:i.wkid)!==(l==null?void 0:l.wkid)&&(a.getLogger(this.declaredClass).error(new c("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,d.data)),s.reject(),this.destroy()),u.format!=="json"&&(a.getLogger(this.declaredClass).error(new c("websocket-connection","Protocol violation. Handshake failed - format is not set",d.data)),s.reject(),this.destroy()),o&&u.filter!==o&&a.getLogger(this.declaredClass).error(new c("websocket-connection","Tried to set filter, but server doesn't support it")),n&&u.outFields!==n&&a.getLogger(this.declaredClass).error(new c("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=r;for(const m of this._outstandingMessages)t.send(JSON.stringify(m));this._outstandingMessages=[],s.resolve()},t.send(JSON.stringify({filter:o,outFields:n,format:"json",spatialReference:{wkid:l.wkid}})),s.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)h(this._featureZScaler)&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),a.getLogger(this.declaredClass).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),e.code!==1e3&&a.getLogger(this.declaredClass).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};g([w()],_.prototype,"connectionStatus",null),g([w()],_.prototype,"errorString",void 0),_=g([b("esri.layers.graphics.sources.connections.WebSocketConnection")],_);const J=1e4,D={maxQueryDepth:5,maxRecordCountFactor:3};let k=class extends _{constructor(e){super({...D,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||a.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:s,outFields:r}=this._config;this.destroyed||this._setFilter(s,r)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),h(this._featureZScaler)&&this._featureZScaler(t.geometry)}catch(s){return void a.getLogger(this.declaredClass).error(new c("geoevent-connection","Failed to parse message",s))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},s=P(e.path,{query:t,responseType:"json"}),r=(await s).data;return this._serviceDefinition=r,r}_fetchWebSocketUrl(e,t){const s=e[0],{urls:r,token:o}=s,n=this._inferWebSocketBaseUrl(r);return R(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(e.length===1)return e[0];for(const t of e)if(t.includes("wss"))return t;return a.getLogger(this.declaredClass).error(new c("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const s=this._websocket;if(f(s)||f(e)&&f(t))return;const r=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const n=O(),l=()=>{o||(this.destroyed||this._websocket!==s||a.getLogger(this.declaredClass).error(new c("geoevent-connection","Server timed out when setting filter")),n.reject())},d=u=>{const i=JSON.parse(u.data);i.filter&&(i.error&&(a.getLogger(this.declaredClass).error(new c("geoevent-connection","Failed to set service filter",i.error)),this._set("errorString",`Could not set service filter - ${i.error}`),n.reject(i.error)),this._setWebSocketJSONParseHandler(s),o=!0,n.resolve())};return s.onmessage=d,s.send(r),setTimeout(l,J),n.promise}_serializeFilter(e,t){const s={};if(f(e)&&f(t))return s;if(h(e)&&e.geometry)try{const r=M(e.geometry);if(r.type!=="extent")throw new c(`Expected extent but found type ${r.type}`);s.geometry=JSON.stringify(r.shiftCentralMeridian())}catch(r){a.getLogger(this.declaredClass).error(new c("geoevent-connection","Encountered an error when setting connection geometryDefinition",r))}return h(e)&&e.where&&e.where!=="1 = 1"&&e.where!=="1=1"&&(s.where=e.where),h(t)&&(s.outFields=t.join(",")),s}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,s=e.attributes[t],r=this._relatedFeatures.get(s);if(!r)return a.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:n}=r;for(const l in o)e.attributes[l]=o[l];return n&&(e.geometry=n),e.geometry||e.centroid||a.getLogger(this.declaredClass).error(new c("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,s=this._queryRelatedFeatures(e),r=this._queryArchive(t);await s;const o=await r;if(!o)return;for(const n of o.features)this.onFeature(this._enrich(n))}catch(e){a.getLogger(this.declaredClass).error(new c("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new(await W(()=>import("./index-3baec1e8.js").then(L=>L.s$),["assets/index-3baec1e8.js","assets/index-0be7f32f.css"])).default({url:e}),{capabilities:s}=await t.load(),r=s.query.supportsMaxRecordCountFactor,o=s.query.supportsPagination,n=s.query.supportsCentroid,l=this._config.maxRecordCountFactor,d=t.capabilities.query.maxRecordCount,u=r?d*l:d,i=new T;if(i.outFields=C(this._config.outFields,["*"]),i.where=C(q(this._config.filter,"where"),"1=1"),i.returnGeometry=!0,i.returnExceededLimitFeatures=!0,i.outSpatialReference=j.fromJSON(this._config.spatialReference),n&&(i.returnCentroid=!0),r&&(i.maxRecordCountFactor=l),o)return i.num=u,t.destroy(),this._queryPages(e,i);const m=await v(e,i,this._config.sourceSpatialReference);return t.destroy(),m.data}async _queryPages(e,t,s=[],r=0){t.start=h(t.num)?r*t.num:null;const{data:o}=await v(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&r<(this._config.maxQueryDepth??0)?(o.features.forEach(n=>s.push(n)),this._queryPages(e,t,s,r+1)):(s.forEach(n=>o.features.push(n)),o)}_addRelatedFeatures(e){const t=new Map,s=e.features,r=this._serviceDefinition.relatedFeatures.joinField;for(const o of s){const n=o.attributes[r];t.set(n,o)}this._relatedFeatures=t}};k=g([b("esri.layers.graphics.sources.connections.GeoEventConnection")],k);const $=k;let p=class extends x{constructor(e){super(),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:s,sourceSpatialReference:r}=e;this._featureZScaler=F(t,r,s)}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)h(this._featureZScaler)&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};g([w()],p.prototype,"connectionStatus",void 0),g([w()],p.prototype,"errorString",void 0),p=g([b("esri.layers.support.ClientSideConnection")],p);function A(e,t,s,r,o,n,l,d){const u={source:e,sourceSpatialReference:t,spatialReference:s,geometryType:r,filter:o,maxReconnectionAttempts:n,maxReconnectionInterval:l,customParameters:d};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new _(u):new $(u):new p(u)}export{A as createConnection};
