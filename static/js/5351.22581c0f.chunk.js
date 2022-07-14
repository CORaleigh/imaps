(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[5351],{67435:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=67435,e.exports=t},43968:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Legend:()=>r,default:()=>d});var i=s(72791),n=s(65349),a=s(80184);const r=e=>{const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const s=new n.default({container:t.current,view:e.view});return()=>{s&&s.destroy()}}),[e.view]),(0,a.jsx)("div",{ref:t})},d=r},41691:(e,t,s)=>{"use strict";s.d(t,{p:()=>l,r:()=>h});var i=s(27366),n=s(85015),a=s(100),r=s(49861),d=s(69912),o=s(61826);const l=e=>{let t=class extends e{destroy(){this.destroyed||(this._get("handles")?.destroy(),this._get("updatingHandles")?.destroy())}get handles(){return this._get("handles")||new a.Z}get updatingHandles(){return this._get("updatingHandles")||new o.t}};return(0,i._)([(0,r.Cb)({readOnly:!0})],t.prototype,"handles",null),(0,i._)([(0,r.Cb)({readOnly:!0})],t.prototype,"updatingHandles",null),t=(0,i._)([(0,d.j)("esri.core.HandleOwner")],t),t};let h=class extends(l(n.Z)){};h=(0,i._)([(0,d.j)("esri.core.HandleOwner")],h)},79056:(e,t,s)=>{"use strict";s.d(t,{IG:()=>r});var i=s(27366),n=s(69912);let a=0;const r=e=>{let t=class extends e{constructor(){super(...arguments),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+a++})}};return t=(0,i._)([(0,n.j)("esri.core.Identifiable")],t),t};let d=class extends(r(class{})){};d=(0,i._)([(0,n.j)("esri.core.Identifiable")],d)},8025:(e,t,s)=>{"use strict";s.d(t,{B:()=>n});var i=s(49861);function n(e,t){const s=t?{...t,source:e}:e;return(0,i.Cb)({aliasOf:s})}},61826:(e,t,s)=>{"use strict";s.d(t,{t:()=>c});var i=s(27366),n=s(85015),a=s(100),r=s(92026),d=s(94172),o=s(99346),l=s(49861),h=s(69912);let c=class extends n.Z{constructor(){super(...arguments),this.updating=!1,this.handleId=0,this.handles=new a.Z,this.scheduleHandleId=0,this.pendingPromises=new Set}destroy(){this.removeAll(),this.handles.destroy()}add(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._installWatch(e,t,s,d.YP)}addWhen(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._installWatch(e,t,s,d.gx)}addOnCollectionChange(e,t){let{initial:s=!1,final:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=++this.handleId;return this.handles.add([(0,d.on)(e,"after-changes",this._createSyncUpdatingCallback(),d.Z_),(0,d.on)(e,"change",t,{onListenerAdd:s?e=>t({added:e.toArray(),removed:[]}):void 0,onListenerRemove:i?e=>t({added:[],removed:e.toArray()}):void 0})],n),{remove:()=>this.handles.remove(n)}}addPromise(e){if((0,r.Wi)(e))return e;const t=++this.handleId;this.handles.add({remove:()=>{this.pendingPromises.delete(e)&&(0!==this.pendingPromises.size||this.handles.has(u)||this._set("updating",!1))}},t),this.pendingPromises.add(e),this._set("updating",!0);const s=()=>this.handles.remove(t);return e.then(s,s),e}removeAll(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1)}_installWatch(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;const n=++this.handleId;s.sync||this._installSyncUpdatingWatch(e,n);const a=i(e,t,s);return this.handles.add(a,n),{remove:()=>this.handles.remove(n)}}_installSyncUpdatingWatch(e,t){const s=this._createSyncUpdatingCallback(),i=(0,d.YP)(e,s,{sync:!0,equals:()=>!1});return this.handles.add(i,t),i}_createSyncUpdatingCallback(){return()=>{this.handles.remove(u),++this.scheduleHandleId;const e=this.scheduleHandleId;this._get("updating")||this._set("updating",!0),this.handles.add((0,o.Os)((()=>{e===this.scheduleHandleId&&(this._set("updating",this.pendingPromises.size>0),this.handles.remove(u))})),u)}}};(0,i._)([(0,l.Cb)({readOnly:!0})],c.prototype,"updating",void 0),c=(0,i._)([(0,h.j)("esri.core.support.WatchUpdatingTracking")],c);const u=-42;var p;!function(e){e[e.NONE=0]="NONE",e[e.SYNC=1]="SYNC",e[e.INIT=2]="INIT"}(p||(p={}))},57976:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var i,n=s(27366),a=s(85015),r=s(79056),d=s(49861),o=(s(63780),s(93169),s(25243),s(69912));let l=i=class extends((0,r.IG)(a.Z)){constructor(e){super(e),this.active=!1,this.className=null,this.disabled=!1,this.id=null,this.indicator=!1,this.title=null,this.type=null,this.visible=!0}clone(){return new i({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}};(0,n._)([(0,d.Cb)()],l.prototype,"active",void 0),(0,n._)([(0,d.Cb)()],l.prototype,"className",void 0),(0,n._)([(0,d.Cb)()],l.prototype,"disabled",void 0),(0,n._)([(0,d.Cb)()],l.prototype,"id",void 0),(0,n._)([(0,d.Cb)()],l.prototype,"indicator",void 0),(0,n._)([(0,d.Cb)()],l.prototype,"title",void 0),(0,n._)([(0,d.Cb)()],l.prototype,"type",void 0),(0,n._)([(0,d.Cb)()],l.prototype,"visible",void 0),l=i=(0,n._)([(0,o.j)("esri.support.actions.ActionBase")],l);const h=l},6945:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var i,n=s(27366),a=s(49861),r=(s(63780),s(93169),s(25243),s(69912)),d=s(57976);let o=i=class extends d.Z{constructor(e){super(e),this.image=null,this.type="button"}clone(){return new i({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})}};(0,n._)([(0,a.Cb)()],o.prototype,"image",void 0),o=i=(0,n._)([(0,r.j)("esri.support.Action.ActionButton")],o);const l=o},9676:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var i,n=s(27366),a=s(49861),r=(s(63780),s(93169),s(25243),s(69912)),d=s(57976);let o=i=class extends d.Z{constructor(e){super(e),this.image=null,this.type="toggle",this.value=!1}clone(){return new i({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}};(0,n._)([(0,a.Cb)()],o.prototype,"image",void 0),(0,n._)([(0,a.Cb)()],o.prototype,"value",void 0),o=i=(0,n._)([(0,r.j)("esri.support.Action.ActionToggle")],o);const l=o},78088:(e,t,s)=>{"use strict";s.d(t,{h:()=>n});var i=s(80975);function n(){return function(e,t){if(!e[t])throw new TypeError(`Cannot auto bind undefined function '${t}'`);return{value:r(e[t])}}}function a(e){const{type:t}=e;return e instanceof KeyboardEvent||"keyup"===t||"keydown"===t||"keypress"===t}function r(e){return function(t){for(var s=arguments.length,n=new Array(s>1?s-1:0),r=1;r<s;r++)n[r-1]=arguments[r];a(t)?(0,i.pf)(t.key)&&(t.preventDefault(),t.stopPropagation(),t.target.click()):e.call(this,t,...n)}}}}]);
//# sourceMappingURL=5351.22581c0f.chunk.js.map