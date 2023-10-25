"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2046],{2046:(e,s,t)=>{t.d(s,{uploadAssets:()=>q});var o=t(3172),r=t(80442),n=t(92604),a=t(95330),i=t(76882),c=t(17452),u=t(41123),l=t(84470),p=t(20102);const d="upload-assets",m=()=>new Error;class f extends p.Z{constructor(){super(`${d}:unsupported`,"Layer does not support asset uploads.",m())}}class h extends p.Z{constructor(){super(`${d}:no-glb-support`,"Layer does not support glb.",m())}}class g extends p.Z{constructor(){super(`${d}:no-supported-source`,"No supported external source found",m())}}class w extends p.Z{constructor(){super(`${d}:not-base-64`,"Expected gltf data in base64 format after conversion.",m())}}class y extends p.Z{constructor(){super(`${d}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",m())}}class P extends p.Z{constructor(e,s){super(`${d}:bad-response`,`Bad response. Uploaded ${e} items and received ${s} results.`,m())}}class b extends p.Z{constructor(e,s){super(`${d}-layer:upload-failed`,`Failed to upload mesh file ${e}. Error code: ${s?.code??"-1"}. Error message: ${s?.messages??"unknown"}`,m())}}class _ extends p.Z{constructor(e){super(`${d}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${e}, but it does not list it in its supported formats.`,m())}}class T extends p.Z{constructor(){super(`${d}:convert3D-failed`,"convert3D failed.")}}const v={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};var k=t(66677),A=t(50758),x=t(30175);function F(e,s=(e=>{}),t){return new Z(e,s,t)}class Z{constructor(e,s=(e=>{}),t){if(this.onProgress=s,this.taskName=t,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof e){this._weights={};for(let s=0;s<e;s++){const t=s,o=1/e;this._weights[t]=o,this._progressMap.set(t,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[s,t]of this._progressMap.entries())e+=t*this._weights[s];if(1===e&&(0,r.Z)("enable-feature:esri-3dofl-upload-timings")){const e=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${e} sec`);for(const[s,t]of this._timingsMap){const o=Math.round(t.end-t.start)/1e3,r=Math.round(o/e*100);console.log(this.taskName??"Task",{stepKey:s,stepTime:o,relativeTime:r})}}this.onProgress(e)}setProgress(e,s){if(this._progressMap.set(e,s),(0,r.Z)("enable-feature:esri-3dofl-upload-timings")){const t=performance.now();this._startTime??=t;const o=(0,x.s1)(this._timingsMap,e,(()=>({start:t,end:0})));1===s&&(o.end=t)}this.emitProgress()}simulate(e,s){return $((s=>this.setProgress(e,s)),s)}makeOnProgress(e){return s=>this.setProgress(e,s)}}function $(e=(e=>{}),s=N){const t=performance.now();e(0);const o=setInterval((()=>{const o=performance.now()-t,r=1-Math.exp(-o/s);e(r)}),I);return(0,A.kB)((()=>{clearInterval(o),e(1)}))}function E(e,s=M){return(0,i.up)((0,i._H)(e*S/s))}const M=10,j=10,S=8e-6,I=(0,i.HA)(50),N=(0,i.HA)(1e3),D=1e6,C=20*D,U=2e9,B=3;async function L({data:e,name:s,description:t},r,n){let i=null;try{const u=(0,c.v_)(r,"uploads"),l=(0,c.v_)(u,"info"),{data:p}=await(0,o.Z)(l,{query:{f:"json"},responseType:"json"});(0,a.k_)(n);const d=(0,k.M8)(r),m=p.maxUploadFileSize*D,f=d?U:m,h=d?Math.min(C,m):C;if(e.size>f)throw new Error("Data too large");const g=(0,c.v_)(u,"register"),{data:w}=await(0,o.Z)(g,{query:{f:"json",itemName:O(s),description:t},responseType:"json",method:"post"});if((0,a.k_)(n),!w.success)throw new Error("Registration failed");const{itemID:y}=w.item;i=(0,c.v_)(u,y);const P=(0,c.v_)(i,"uploadPart"),b=Math.ceil(e.size/h),_=new Array;for(let s=0;s<b;++s)_.push(e.slice(s*h,Math.min((s+1)*h,e.size)));const T=_.slice().reverse(),v=new Array,A=F(b,n?.onProgress,"uploadItem"),x=async()=>{for(;0!==T.length;){const e=_.length-T.length,s=T.pop(),t=new FormData,r=A.simulate(e,E(s.size));try{const r=s;t.append("f","json"),t.append("file",r),t.append("partId",`${e}`);const{data:i}=await(0,o.Z)(P,{timeout:0,body:t,responseType:"json",method:"post"});if((0,a.k_)(n),!i.success)throw new Error("Part upload failed")}finally{r.remove()}}};for(let e=0;e<B&&0!==T.length;++e)v.push(x());await Promise.all(v);const Z=(0,c.v_)(i,"commit"),{data:$}=await(0,o.Z)(Z,{query:{f:"json",parts:_.map(((e,s)=>s)).join(",")},responseType:"json",method:"post"});if((0,a.k_)(n),!$.success)throw new Error("Commit failed");return $.item}catch(e){if(null!=i){const e=(0,c.v_)(i,"delete");await(0,o.Z)(e,{query:{f:"json"},responseType:"json",method:"post"})}throw e}}function O(e){return e.replaceAll("/","_").replaceAll("\\","_")}var R=t(2981);async function q(e,s,t){const o=e.length;if(!o)return t?.onProgress?.(1),[];const r=F(o,t?.onProgress,"uploadAssets");return Promise.all(e.map(((e,o)=>async function(e,{layer:s,ongoingUploads:t},o){const r=t.get(e);if(r)return r;if(!function(e){return!!e.infoFor3D&&!!e.url}(s))throw new f;if(function(e,s){const{parsedUrl:t}=s;return null!=t&&e.metadata.externalSources.some((e=>(0,l.JG)(e,t)))}(e,s))return o?.onProgress?.(1),e;const n=async function(e,s,t){const{metadata:o}=e,{displaySource:r}=o,n=H(r?.source,s),c=!!n,l=o.externalSources.length>0,p=c?async function(e,s,t){return{source:await G(e,s,t),original:!0}}(n,s,t):l?async function(e,s,t){const o=X(s),{externalSources:r}=e.metadata,n=function(e,s){for(const t of e){const e=H(t.source,s);if(e)return e}return null}(r,s);if(!n)throw new g;const a=F(v.uploadConvertibleSource,t?.onProgress,"uploadConvertibleSource"),c=await G(n,s,{onProgress:a.makeOnProgress("uploadEditSource")});e.addExternalSources([{source:c,original:!0}]);const u=n.reduce(((e,{asset:s})=>s instanceof File?e+s.size:e),0),l=a.simulate("serviceAssetsToGlb",function(e,s=j){return(0,i.up)((0,i._H)(e*S/s))}(u));try{return{source:await W(c,s,o)}}finally{l.remove()}}(e,s,t):async function(e,s,t){const o=F(v.uploadLocalMesh,t?.onProgress,"uploadLocalMesh"),r=async function(e,s,t){const o=X(s),r=await e.load(t),n=await r.toBinaryGLTF({ignoreLocalTransform:!0});(0,a.k_)(t);const i=await n.buffer();return(0,a.k_)(t),{blob:new Blob([i.data],{type:i.type}),assetName:`${(0,u.z)()}.glb`,assetType:o}}(e,s,{...t,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await J([r],s,{...t,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:e.extent.clone(),original:!0}}(e,s,t),d=await p;return(0,a.k_)(t),e.addExternalSources([d]),e}(e,s,o);t.set(e,n);try{await n}finally{t.delete(e)}return e}(e,s,{...t,onProgress:r.makeOnProgress(o)}))))}function H(e,s){if(!e)return null;const{infoFor3D:{supportedFormats:t,editFormats:o}}=s,r=(0,l.zE)(e),n=new Array;let a=!1;for(let e=0;e<r.length;++e){const s=z(r[e],t);if(!s)return null;o.includes(s.assetType)&&(a=!0),n.push(s)}return a?n:null}function z(e,s){const t=(0,l.vj)(e,s);return t?{asset:e,assetType:t}:null}async function G(e,s,t){return J(e.map((e=>async function(e,s){const{asset:t,assetType:o}=e;if(t instanceof File)return{blob:t,assetName:t.name,assetType:o};const r=await t.toBlob(s);return(0,a.k_)(s),{blob:r,assetName:t.assetName,assetType:o}}(e,t))),s,t)}async function J(e,s,t){const o=F(v.uploadAssetBlobs,t?.onProgress,"uploadAssetBlobs"),r=await function(e,s,t){const o=F(e.length,t?.onProgress,"prepareAssetItems");return Promise.all(e.map((async(e,r)=>{const i=async function(e,s,t){const{blob:o,assetType:r,assetName:i}=e;let u=null;try{const e=await L({data:o,name:i},s.url,t);(0,a.k_)(t),u={assetType:r,assetUploadId:e.itemID}}catch(e){(0,a.r9)(e),n.Z.getLogger("esri.layers.graphics.sources.support.uploadAssets").warnOnce(`Service ${s.url} does not support the REST Uploads API.`)}if(!u){const e=await(0,c.IR)(o);if((0,a.k_)(t),!e.isBase64)throw new w;u={assetType:r,assetData:e.data}}if(!u)throw new y;return{item:u,assetName:i}}(await e,s,{...t,onProgress:o.makeOnProgress(r)});return(0,a.k_)(t),i})))}(e,s,{...t,onProgress:o.makeOnProgress("prepareAssetItems")});(0,a.k_)(t);const i=r.map((({item:e})=>e)),{uploadResults:u}=await K(i,s,{...t,onProgress:o.makeOnProgress("uploadAssetItems")});return(0,a.k_)(t),e.map(((e,t)=>function(e,s,t){const{success:o}=s;if(!o){const{error:t}=s;throw new b(e.assetName,t)}const{assetHash:r}=s,{assetName:n,item:{assetType:a}}=e,{infoFor3D:{supportedFormats:i}}=t,c=(0,R.d1)(a,i);if(!c)throw new _(a);return new l.CP(n,c,[new l.LL(`${t.parsedUrl.path}/assets/${r}`,r)])}(r[t],u[t],s)))}async function K(e,s,t){const r=$(t?.onProgress);try{const r=await(0,o.Z)((0,c.v_)(s.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if((0,a.k_)(t),r.data.uploadResults.length!==e.length)throw new P(e.length,r.data.uploadResults.length);return r.data}finally{r.remove()}}async function W(e,s,t){const o=e.map((({assetName:e,parts:s})=>({assetName:e,assetHash:s[0].partHash}))),r=s.capabilities?.operations.supportsAsyncConvert3D,n={f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:t,async:r},a=(0,c.v_)(s.parsedUrl.path,"convert3D");let i;try{i=(await(r?V:Q)(a,{query:n,responseType:"json",timeout:0})).data}catch(e){throw new T}const{supportedFormats:u}=s.infoFor3D;return i.assets.map((e=>{const s=(0,R.S0)(e.contentType,u);if(!s)throw new _(s);return new l.CP(e.assetName,e.contentType,[new l.LL(e.assetURL,e.assetHash)])}))}function Q(e,s){return(0,o.Z)(e,s)}async function V(e,s){const t=(await(0,o.Z)(e,s)).data.statusUrl;for(;;){const e=(await(0,o.Z)(t,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return(0,o.Z)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(e.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await(0,a.e4)(Y)}}function X(e){const{infoFor3D:s}=e,t=(0,R.S0)("model/gltf-binary",s.supportedFormats)??(0,R.Ow)("glb",s.supportedFormats);if(!t)throw new h;return t}const Y=(0,i.HA)(1e3)}}]);