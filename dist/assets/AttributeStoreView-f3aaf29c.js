import{lW as V,gK as z,mY as tt,kU as et,mZ as st,lY as it,I as c,as as u,aR as rt,mS as N,cu as x,P as C,av as _,ad as G,a7 as nt,mT as ht,fp as l,c2 as L}from"./index-7753bab1.js";import{o as F,c as q,P as A,B as v,C as U,D as $,E as B,F as b,G as S,H as Y,M as at,O as dt,N as ot,R as ut}from"./definitions-19bfb61c.js";import{r as _t}from"./TiledDisplayObject-5d69f8c4.js";import{n as ct,l as lt,f as K}from"./visualVariablesUtils-12809f65.js";import{W as T,K as Et}from"./color-12b7e170.js";import{D as X,P as Z,G as W,L as j,M as xt,Y as pt,V as Rt}from"./enums-64ab819c.js";import{x as ft}from"./VertexArrayObject-6236f727.js";import{E as H}from"./Texture-280a81f5.js";class Tt{acquire(t){return{refCount:1,version:-1,labelMat2d:V(),tileMat3:z(),dvs:z()}}release(t){}}class k extends _t{constructor(t,e,s,i){super(t,e,s,i,F,F)}destroy(){super.destroy(),this._transforms&&k.TransformCache.release(this.key.hash)}setTransform(t){const e=this.resolution/t.resolution,s=this.transforms.tileMat3,[i,r]=t.toScreenNoRotation([0,0],[this.x,this.y]),h=this.width/this.rangeX*e,a=this.height/this.rangeY*e;tt(s,h,0,0,0,a,0,i,r,1),et(this.transforms.dvs,t.displayViewMat3,s);const d=this.transforms.labelMat2d,o=window.devicePixelRatio,E=st(V(),h*o,0,0,a*o,i*o,r*o);it(d,t.viewMat2d,E)}_createTransforms(){return k.TransformCache.acquire(this.key.hash)}}k.TransformCache=new Tt;const g=2147483647;class p{constructor(t){this._head=t,this._cursor=t}static from(t,e=0,s=t.byteLength/n.BYTES_PER_RECORD-e){const i=new n(new Int32Array(t,e*n.BYTES_PER_RECORD,s*n.ELEMENTS_PER_RECORD));return new p(i)}size(){let t=this._cursor,e=0;for(;t;)e+=t.size(),t=t._link;return e}get id(){return this._cursor.id}set id(t){this._cursor.id=t}get materialKey(){return this._cursor.materialKey}set materialKey(t){this._cursor.materialKey=t}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(t){this._cursor.indexFrom=t}get indexCount(){return this._cursor.indexCount}set indexCount(t){this._cursor.indexCount=t}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(t){this._cursor.vertexFrom=t}get vertexCount(){return this._cursor.vertexCount}set vertexCount(t){this._cursor.vertexCount=t}get sortKey(){return this._cursor.sortKey}set sortKey(t){this._cursor.sortKey=t}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(t){let e=t;for(this._cursor=this._head;this._cursor;){const s=this._cursor.size();if(e<s)return this._cursor._index=e,!0;e-=s,this._cursor=this._cursor._link}return!1}forEach(t){const e=this.getCursor();for(;e.next();)t(e)}link(t){if(!this._head)return void(this._head=t._head);let e=this._head;for(;e._link;)e=e._link;e._link=t._head,e._link._indexStart=e._indexStart+e.size()}getCursor(){return this.copy()}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}copy(){var i;const t=new p((i=this._head)==null?void 0:i.copy());if(!t._head)return t;let e=t._head,s=t._head._link;for(;s;)e._link=s.copy(),e=s,s=e._link;return t}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){return this._cursor.peekId()??this._cursor._link.peekId()}delete(t){let e=this._head,s=null;for(;e;){if(e.delete(t))return e.isEmpty()&&(c(s)&&(s._link=e._link),e===this._head&&(this._head=e._link),e===this._cursor&&(this._cursor=e._link)),!0;s=e,e=e._link}return!1}}p.ELEMENTS_PER_RECORD=q,p.BYTES_PER_RECORD=p.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;class n{constructor(t){this._link=null,this._index=-1,this._indexStart=0,this._packedRecordsF32=null,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=t}static from(t,e=0,s=t.byteLength/this.BYTES_PER_RECORD-e){return new n(new Int32Array(t,e*this.BYTES_PER_RECORD,s*this.ELEMENTS_PER_RECORD))}delete(t){const e=this._index,s=this.lookup(t);if(s)for(this.id=g,++this._deletedCount;this.next()&&this.id===t;)this.id=g,++this._deletedCount;return this._index=e,s}isEmpty(){return this._deletedCount===this.size()}link(t){this._link?this._link.link(t):this._link=t}lookup(t){if(u(this._offsets.instance)){this._offsets.instance=new Map;const s=this.copy();s._index=-1;let i=0;for(;s.next();)s.id!==i&&(this._offsets.instance.set(s.id,s._index),i=s.id)}if(!this._offsets.instance.has(t))return!1;const e=this._index;return this._index=this._offsets.instance.get(t),this.id!==g||(this._index=e,!1)}get id(){return this._packedRecords[this._index*n.ELEMENTS_PER_RECORD]}set id(t){this._packedRecords[this._index*n.ELEMENTS_PER_RECORD]=t}get materialKey(){return this._packedRecords[this._index*n.ELEMENTS_PER_RECORD+1]}set materialKey(t){this._packedRecords[this._index*n.ELEMENTS_PER_RECORD+1]=t}get insertAfter(){return this._packedRecords[this._index*n.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*n.ELEMENTS_PER_RECORD+3]}set indexFrom(t){this._packedRecords[this._index*n.ELEMENTS_PER_RECORD+3]=t}get indexCount(){return this._packedRecords[this._index*n.ELEMENTS_PER_RECORD+4]}set indexCount(t){this._packedRecords[this._index*n.ELEMENTS_PER_RECORD+4]=t}get vertexFrom(){return this._packedRecords[this._index*n.ELEMENTS_PER_RECORD+5]}set vertexFrom(t){this._packedRecords[this._index*n.ELEMENTS_PER_RECORD+5]=t}get vertexCount(){return this._packedRecords[this._index*n.ELEMENTS_PER_RECORD+6]}set vertexCount(t){this._packedRecords[this._index*n.ELEMENTS_PER_RECORD+6]=t}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*n.ELEMENTS_PER_RECORD+7]}set sortKey(t){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*n.ELEMENTS_PER_RECORD+7]=t}get index(){return this._index}size(){return this._packedRecords.length/n.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===g;);return this._index<this.size()}peekId(){const t=(this._index+1)*n.ELEMENTS_PER_RECORD;return t>=this._packedRecords.length?0:this._packedRecords[t]}getCursor(){return this.copy()}copy(){const t=new n(this._packedRecords);return t._indexStart=this._indexStart,t._link=this._link,t._index=this._index,t._offsets=this._offsets,t._deletedCount=this._deletedCount,t}}n.ELEMENTS_PER_RECORD=q,n.BYTES_PER_RECORD=n.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;const w=rt.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),D=ct(lt,w);class I{constructor(t,e,s){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:i,pixelType:r,textureOnly:h}=t,a=T(r);this.shared=s,this.pixelType=r,this.size=e,this.textureOnly=h,h||(this.data=new a(_(i))),this._resetRange()}destroy(){x(this._texture,t=>t.dispose());for(const t in this._fbos)x(this._fbos[t],e=>{t==="0"&&e.detachColorTexture(),e.dispose()}),this._fbos[t]=null;this._texture=null}get _textureDesc(){return{target:xt.TEXTURE_2D,wrapMode:X.CLAMP_TO_EDGE,pixelFormat:Z.RGBA,dataType:this.pixelType,samplingMode:j.NEAREST,width:this.size,height:this.size}}setData(t,e,s){const i=K(t),r=_(this.data),h=i*this.texelSize+e;!r||h>=r.length||(r[h]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i))}getData(t,e){if(u(this.data))return null;const s=K(t)*this.texelSize+e;return!this.data||s>=this.data.length?null:this.data[s]}getTexture(t){return L(this._texture,()=>this._initTexture(t))}getFBO(t,e=0){if(u(this._fbos[e])){const s={colorTarget:pt.TEXTURE,depthStencilTarget:Rt.NONE},i=e===0?this.getTexture(t):this._textureDesc;this._fbos[e]=new ft(t,s,i)}return this._fbos[e]}get locked(){return!(this.pixelType!==W.UNSIGNED_BYTE||!this.shared||this.textureOnly||!C("esri-atomics")||!this.data)&&Atomics.load(this.data,0)===1}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(t,e){if(!this.locked){try{const s=this.dirtyStart,i=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const r=_(this.data).buffer,h=this.getTexture(t),a=4,d=(s-s%this.size)/this.size,o=(i-i%this.size)/this.size,E=d,y=this.size,R=o,f=d*this.size*a,m=(y+R*this.size)*a-f,O=T(this.pixelType),J=new O(r,f*O.BYTES_PER_ELEMENT,m),Q=this.size,P=R-E+1;if(P>this.size)return void w.error(new G("mapview-webgl","Out-of-bounds index when updating AttributeData"));h.updateData(0,0,E,Q,P,J)}catch{}e()}}update(t){const{data:e,start:s,end:i}=t;if(c(e)&&c(this.data)){const r=this.data,h=s*this.texelSize;for(let a=0;a<e.length;a++){const d=1<<a%this.texelSize;t.layout&d&&(r[h+a]=e[a])}}this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,i)}resize(t,e){const s=this.size;if(this.size=e,this.textureOnly)return void(s!==this.size&&(this._lastTexture=this._texture,this._texture=null));const i=T(this.pixelType);this.destroy(),this.data=new i(_(t.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new H(t,this._textureDesc,L(this.data,void 0));if(c(this._lastTexture)&&this._fbos[0]){const s=this._lastTexture.descriptor.width,i=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,h=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(t),d=Et(r),o=new(T(r))(new ArrayBuffer(s*i*d*this.texelSize)),E=t.getBoundFramebufferObject(),{x:y,y:R,width:f,height:m}=t.getViewport();t.bindFramebuffer(a),a.readPixels(0,0,s,i,h,r,o),e.updateData(0,0,0,2*s,i/2,o),t.setViewport(y,R,f,m),t.bindFramebuffer(E)}return this.destroy(),this._texture=e,this._texture}}class wt{constructor(t){this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(t){const{blocks:e,shared:s,size:i}=t;if(this.shared=s,this.size=i,D("Initializing AttributeStoreView",t),u(this._data))this._data=N(e,r=>new I(r,i,s));else for(let r=0;r<this._data.length;r++){const h=this._data[r],a=e[r];c(a)&&(u(h)?this._data[r]=new I(a,i,s):h.resize(a,i))}this._initialized=!0}destroy(){x(this._data,t=>N(t,e=>e.destroy())),x(this._defaultTexture,t=>t.dispose())}isEmpty(){const t=this._data;return u(t)}isUpdating(){const t=c(this._pendingAttributeUpdate),e=t;return C("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${e}
  -> hasPendingUpdate ${t}`),e}getBlock(t){return u(this._data)?null:this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e)}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,A,0,0)}getData(t,e,s,i){if(!this._data)return 0;const r=_(this._data)[e];if(u(r))return 0;const h=r.getData(t,s);return c(h)?h:i}setData(t,e,s,i){const r=_(this._data)[e];_(r).setData(t,s,i)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(t){if(this._pendingAttributeUpdate)return void w.error(new G("mapview-webgl","Tried to update attribute data with a pending update"));const e=nt();return D("AttributeStoreView Update Requested",t),this._pendingAttributeUpdate={data:t,resolver:e},this._onUpdate(),e.promise}update(){if(this._initialized&&c(this._pendingAttributeUpdate)){C("esri-2d-update-debug")&&console.debug("AttributeStoreView::update");const{data:t,resolver:e}=this._pendingAttributeUpdate,s=_(this._data);for(let i=0;i<t.blocks.length;i++){const r=t.blocks[i],h=s[i];x(h,a=>x(r,d=>{D(`Updating block ${i}`,d),a.update(d)}))}this._pendingAttributeUpdate=null,e(),this._onUpdate()}}bindTextures(t,e=!0){const s=this._getDefaultTexture(t);if(!this._initialized)return t.bindTexture(s,v),void(e&&(t.bindTexture(s,U),t.bindTexture(s,$),t.bindTexture(s,B),t.bindTexture(s,b),t.bindTexture(s,S),t.bindTexture(s,Y)));const i=_(this._data);this._locked&&!this._forceNextUpload||(ht(i,r=>r.updateTexture(t,()=>this._onUpdate())),this._forceNextUpload=!1),t.bindTexture(l(i[at],s,r=>r.getTexture(t)),v),e&&(t.bindTexture(l(i[dt],s,r=>r.getTexture(t)),Y),t.bindTexture(l(i[ot],s,r=>r.getTexture(t)),U),t.bindTexture(l(i[A],s,r=>r.getTexture(t)),$),t.bindTexture(l(i[ut],s,r=>r.getTexture(t)),B),t.bindTexture(l(i[b],s,r=>r.getTexture(t)),b),t.bindTexture(l(i[S],s,r=>r.getTexture(t)),S))}_getDefaultTexture(t){if(u(this._defaultTexture)){const e={wrapMode:X.CLAMP_TO_EDGE,pixelFormat:Z.RGBA,dataType:W.UNSIGNED_BYTE,samplingMode:j.NEAREST,width:1,height:1};this._defaultTexture=new H(t,e,new Uint8Array(4))}return this._defaultTexture}}export{wt as G,p as i,k as m};
