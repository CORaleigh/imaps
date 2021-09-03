(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[281],{1304:function(e,t,s){"use strict";s.r(t),s.d(t,"toBinaryGLTF",(function(){return U}));var r=s(85),i=s(103),n=s(75);class a{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this.length=a.HEADER_SIZE,this.length+=a.CHUNK_HEADER_SIZE;const s=this.textToArrayBuffer(e);if(this.length+=this.alignTo(s.byteLength,4),t&&(this.length+=a.CHUNK_HEADER_SIZE,this.length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this.writeHeader();const r=this.writeChunk(s,12,1313821514,32);t&&this.writeChunk(t,r,5130562)}writeHeader(){this.outView.setUint32(0,a.MAGIC,!0),this.outView.setUint32(4,a.VERSION,!0),this.outView.setUint32(8,this.length,!0)}writeChunk(e,t,s,r=0){const i=this.alignTo(e.byteLength,4);for(this.outView.setUint32(t,i,!0),this.outView.setUint32(t+=4,s,!0),this.writeArrayBuffer(this.outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)r&&this.outView.setUint8(t,r),t++;return t}writeArrayBuffer(e,t,s,r,i){new Uint8Array(e,s,i).set(new Uint8Array(t,r,i),0)}textToArrayBuffer(e){if(Object(n.a)("esri-text-encoder"))return(new TextEncoder).encode(e).buffer;const t=new Uint8Array(e.length);for(let s=0;s<t.length;++s)t[s]=e.charCodeAt(s);return t.buffer}alignTo(e,t){return t*Math.ceil(e/t)}}a.HEADER_SIZE=12,a.CHUNK_HEADER_SIZE=8,a.MAGIC=1179937895,a.VERSION=2;var o,c,h,u,l,f,d,b,m=s(81),p=s(492),g=s(355),A=s(99),x=s(97),w=s(834),y=s(886);(b=o||(o={}))[b.External=0]="External",b[b.DataURI=1]="DataURI",b[b.GLB=2]="GLB",function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(c||(c={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(h||(h={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(u||(u={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(l||(l={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(f||(f={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(d||(d={}));class O{constructor(e,t,s,r,i){this.buffer=e,this.componentType=s,this.dataType=r,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this.bufferView={buffer:e.index,byteLength:-1,target:i};const n=this.getElementSize();n>=4&&i!==h.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=n),t.bufferViews.push(this.bufferView)}push(e){const t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){const s=t%this.numComponentsForDataType(),r=this.accessorMin[s];this.accessorMin[s]="number"!=typeof r?e:Math.min(r,e);const i=this.accessorMax[s];this.accessorMax[s]="number"!=typeof i?e:Math.max(i,e)}}get dataSize(){return this.data.length*this.sizeComponentType()}get size(){return function(e,t){return t*Math.ceil(e/t)}(this.dataSize,4)}getByteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}get byteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}writeOutToBuffer(e,t=this.size){const s=new DataView(e,t),r=this.sizeComponentType();for(let i=0;i<this.data.length;++i)this.writeValue(s,i*r,this.data[i])}writeAsync(e){if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView vlaues asynchronously");return this.asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let s=0;s<t.byteLength;++s)this.data.push(t[s]);delete this.asyncWritePromise})),this.asyncWritePromise}startAccessor(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;const t=this.numComponentsForDataType();this.accessorMin=new Array(t),this.accessorMax=new Array(t)}endAccessor(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this.getElementSize(),t=this.numComponentsForDataType(),s=(this.data.length-this.accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let i=0;i<this.accessorMin.length;++i)"number"!=typeof this.accessorMin[i]&&(this.accessorMin[i]=0),"number"!=typeof this.accessorMax[i]&&(this.accessorMax[i]=0);const r={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:s,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case 5121:case 5123:r.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,r}get finalized(){return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise((e=>this.finalizedPromiseResolve=e))}finalize(){const e=this.bufferView;return new Promise((e=>{const t=this.buffer.getViewFinalizePromises(this);this.asyncWritePromise&&t.push(this.asyncWritePromise),e(Object(r.j)(t))})).then((()=>{this.isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this.finalizedPromiseResolve&&this.finalizedPromiseResolve()}))}getElementSize(){return this.sizeComponentType()*this.numComponentsForDataType()}sizeComponentType(){switch(this.componentType){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5125:case 5126:return 4}}numComponentsForDataType(){switch(this.dataType){case u.SCALAR:return 1;case u.VEC2:return 2;case u.VEC3:return 3;case u.VEC4:case u.MAT2:return 4;case u.MAT3:return 9;case u.MAT4:return 16}}writeValue(e,t,s){switch(this.componentType){case 5120:e.setInt8(t,s);break;case 5121:e.setUint8(t,s);break;case 5122:e.setInt16(t,s,!0);break;case 5123:e.setUint16(t,s,!0);break;case 5125:e.setUint32(t,s,!0);break;case 5126:e.setFloat32(t,s,!0);break;default:throw new Error(`Unsupported data type: ${this.componentType}`)}}}class E{constructor(e){this.gltf=e,this.bufferViews=[],this.isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this.buffer=t}addBufferView(e,t,s){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new O(this,this.gltf,e,t,s);return this.bufferViews.push(r),r}getByteOffset(e){let t=0;for(const s of this.bufferViews){if(s===e)return t;t+=s.size}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this.bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this.getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const r of this.bufferViews)r.writeOutToBuffer(t,s),s+=r.size;return t}finalize(){if(this.finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this.finalizePromise=new Promise((e=>{e(Object(r.j)(this.getViewFinalizePromises()))})).then((()=>{this.isFinalized=!0;const e=this.getArrayBuffer();this.buffer.byteLength=e.byteLength,this.buffer.uri=e})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}getTotalSize(){let e=0;for(const t of this.bufferViews)e+=t.size;return e}}s(93);var v=s(105);function T(e,t){Object(m.j)(e.vertexAttributes.normal)&&(e.vertexAttributes.normal=new Float32Array(e.vertexAttributes.position.length));const s=t.faces.length/3;for(let r=0;r<s;++r){const s=t.faces[3*r+0],i=t.faces[3*r+1],n=t.faces[3*r+2],a=Object(A.w)(R,e.vertexAttributes.position[3*s+0],e.vertexAttributes.position[3*s+1],e.vertexAttributes.position[3*s+2]),o=Object(A.w)(B,e.vertexAttributes.position[3*i+0],e.vertexAttributes.position[3*i+1],e.vertexAttributes.position[3*i+2]),c=Object(A.w)(C,e.vertexAttributes.position[3*n+0],e.vertexAttributes.position[3*n+1],e.vertexAttributes.position[3*n+2]),h=Object(A.j)(o,o,a),u=Object(A.j)(c,c,a),l=Object(A.g)(h,h,u);Object(v.k)(e.vertexAttributes.normal[3*s+0])&&(e.vertexAttributes.normal[3*s+0]=0),Object(v.k)(e.vertexAttributes.normal[3*s+1])&&(e.vertexAttributes.normal[3*s+1]=0),Object(v.k)(e.vertexAttributes.normal[3*s+2])&&(e.vertexAttributes.normal[3*s+2]=0),Object(v.k)(e.vertexAttributes.normal[3*i+0])&&(e.vertexAttributes.normal[3*i+0]=0),Object(v.k)(e.vertexAttributes.normal[3*i+1])&&(e.vertexAttributes.normal[3*i+1]=0),Object(v.k)(e.vertexAttributes.normal[3*i+2])&&(e.vertexAttributes.normal[3*i+2]=0),Object(v.k)(e.vertexAttributes.normal[3*n+0])&&(e.vertexAttributes.normal[3*n+0]=0),Object(v.k)(e.vertexAttributes.normal[3*n+1])&&(e.vertexAttributes.normal[3*n+1]=0),Object(v.k)(e.vertexAttributes.normal[3*n+2])&&(e.vertexAttributes.normal[3*n+2]=0),e.vertexAttributes.normal[3*s+0]+=l[0],e.vertexAttributes.normal[3*s+1]+=l[1],e.vertexAttributes.normal[3*s+2]+=l[2],e.vertexAttributes.normal[3*i+0]+=l[0],e.vertexAttributes.normal[3*i+1]+=l[1],e.vertexAttributes.normal[3*i+2]+=l[2],e.vertexAttributes.normal[3*n+0]+=l[0],e.vertexAttributes.normal[3*n+1]+=l[1],e.vertexAttributes.normal[3*n+2]+=l[2]}for(let r=0;r<e.vertexAttributes.normal.length;r+=3)Object(A.w)(L,e.vertexAttributes.normal[r],e.vertexAttributes.normal[r+1],e.vertexAttributes.normal[r+2]),Object(A.r)(L,L),e.vertexAttributes.normal[r+0]=L[0],e.vertexAttributes.normal[r+1]=L[1],e.vertexAttributes.normal[r+2]=L[2]}const R=Object(x.e)(),B=Object(x.e)(),C=Object(x.e)(),L=Object(x.e)();var M=s(83);async function S(e){const t=z(e);if(Object(m.j)(t))throw new M.a("imageToArrayBuffer","Unsupported image type");const s=async e=>{if(!e)throw new M.a("imageToArrayBuffer","Unable to convert image to PNG");const t=new FileReader,s=new Promise((e=>{t.addEventListener("loadend",(()=>{e(t.result)}))}));return t.readAsArrayBuffer(e),s};if(t.toBlob)return new Promise(((e,r)=>{t.toBlob((t=>{s(t).then(e,r)}),"image/png")}));if("msToBlob"in t)return s(t.msToBlob());throw new M.a("imageToArrayBuffer","Could not convert canvas to blob")}function z(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");return e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,e.width,e.height),t}class V{constructor(e,t,s){this.params={},this.materialMap=new Array,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this.addScenes(e)}addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras.options.bufferOutputType===o.GLB||this.gltf.extras.options.imageOutputType===c.GLB;t&&(this.gltf.extras.binChunkBuffer=new E(this.gltf)),e.forEachScene((e=>{this.addScene(e)})),t&&this.gltf.extras.binChunkBuffer.finalize()}addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]);const s=this.addNode(e);t.nodes.push(s)})),this.gltf.scenes.push(t)}addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;Object(A.o)(s,x.b)||(t.translation=Object(x.c)(s));const r=e.rotation;Object(p.d)(r,g.a)||(t.rotation=Object(g.c)(r));const i=e.scale;Object(A.o)(i,x.a)||(t.scale=Object(x.c)(i)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this.addMesh(e.mesh):e.forEachNode((e=>{t.children||(t.children=[]);const s=this.addNode(e);t.children.push(s)}));const n=this.gltf.nodes.length;return this.gltf.nodes.push(t),n}addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const t={primitives:[]},s=this.gltf.extras.options.bufferOutputType===o.GLB;let r;r=s?this.gltf.extras.binChunkBuffer:new E(this.gltf);const n=e.clone();this.params.origin||(this.params.origin=function(e){if(Object(m.k)(e.transform))return e.transform.getOriginPoint(e.spatialReference);const t=e.extent.xmax-e.extent.width/2,s=e.extent.ymax-e.extent.height/2,r=e.extent.zmin;return new i.a({x:t,y:s,z:r,spatialReference:e.extent.spatialReference})}(n)),n.rotate(-90,0,0,{origin:this.params.origin}),function(e){if(e.components){for(const t of e.components)"smooth"===t.shading&&t.faces&&T(e,t);e.vertexAttributesChanged()}}(n);const a=Object(y.e)(n.vertexAttributes,n.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});n.vertexAttributes.position=a.position,n.vertexAttributes.normal=a.normal,n.vertexAttributes.tangent=a.tangent;const c=r.addBufferView(5126,u.VEC3,h.ARRAY_BUFFER);let l,f,d,b;n.vertexAttributes.normal&&(l=r.addBufferView(5126,u.VEC3,h.ARRAY_BUFFER)),n.vertexAttributes.uv&&(f=r.addBufferView(5126,u.VEC2,h.ARRAY_BUFFER)),n.vertexAttributes.tangent&&(d=r.addBufferView(5126,u.VEC4,h.ARRAY_BUFFER)),n.vertexAttributes.color&&(b=r.addBufferView(5121,u.VEC4,h.ARRAY_BUFFER)),c.startAccessor("POSITION"),l&&l.startAccessor("NORMAL"),f&&f.startAccessor("TEXCOORD_0"),d&&d.startAccessor("TANGENT"),b&&b.startAccessor("COLOR_0");const p=n.vertexAttributes.position.length/3;for(let i=0;i<p;++i)c.push(n.vertexAttributes.position[3*i+0]),c.push(n.vertexAttributes.position[3*i+1]),c.push(n.vertexAttributes.position[3*i+2]),l&&Object(m.k)(n.vertexAttributes.normal)&&(l.push(n.vertexAttributes.normal[3*i+0]),l.push(n.vertexAttributes.normal[3*i+1]),l.push(n.vertexAttributes.normal[3*i+2])),f&&Object(m.k)(n.vertexAttributes.uv)&&(f.push(n.vertexAttributes.uv[2*i+0]),f.push(n.vertexAttributes.uv[2*i+1])),d&&Object(m.k)(n.vertexAttributes.tangent)&&(d.push(n.vertexAttributes.tangent[4*i+0]),d.push(n.vertexAttributes.tangent[4*i+1]),d.push(n.vertexAttributes.tangent[4*i+2]),d.push(n.vertexAttributes.tangent[4*i+3])),b&&Object(m.k)(n.vertexAttributes.color)&&(b.push(n.vertexAttributes.color[4*i+0]),b.push(n.vertexAttributes.color[4*i+1]),b.push(n.vertexAttributes.color[4*i+2]),b.push(n.vertexAttributes.color[4*i+3]));const g=c.endAccessor(),A=this.addAccessor(c.index,g);let x,w,O,v,R;if(l){const e=l.endAccessor();x=this.addAccessor(l.index,e)}if(f){const e=f.endAccessor();w=this.addAccessor(f.index,e)}if(d){const e=d.endAccessor();O=this.addAccessor(d.index,e)}if(b){const e=b.endAccessor();v=this.addAccessor(b.index,e)}n.components&&n.components.length>0&&n.components[0].faces?(R=r.addBufferView(5125,u.SCALAR,h.ELEMENT_ARRAY_BUFFER),this.addMeshVertexIndexed(R,n.components,t,A,x,w,O,v)):this.addMeshVertexNonIndexed(n.components,t,A,x,w,O,v),c.finalize(),l&&l.finalize(),f&&f.finalize(),d&&d.finalize(),R&&R.finalize(),b&&b.finalize(),s||r.finalize();const B=this.gltf.meshes.length;return this.gltf.meshes.push(t),B}addMaterial(e){if(null===e)return;const t=this.materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=f.MASK;break;case"auto":case"blend":s.alphaMode=f.BLEND}.5!==e.alphaCutoff&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const r=e=>e**2.1,i=e=>{const t=e.toRgba();return t[0]=r(t[0]/255),t[1]=r(t[1]/255),t[2]=r(t[2]/255),t};if(Object(m.k)(e.color)&&(s.pbrMetallicRoughness.baseColorFactor=i(e.color)),Object(m.k)(e.colorTexture)&&(s.pbrMetallicRoughness.baseColorTexture={index:this.addTexture(e.colorTexture)}),Object(m.k)(e.normalTexture)&&(s.normalTexture={index:this.addTexture(e.normalTexture)}),e instanceof w.a){if(Object(m.k)(e.emissiveTexture)&&(s.emissiveTexture={index:this.addTexture(e.emissiveTexture)}),Object(m.k)(e.emissiveColor)){const t=i(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]]}Object(m.k)(e.occlusionTexture)&&(s.occlusionTexture={index:this.addTexture(e.occlusionTexture)}),Object(m.k)(e.metallicRoughnessTexture)&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this.addTexture(e.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1;const n=this.gltf.materials.length;return this.gltf.materials.push(s),this.materialMap.push(e),n}addTexture(e){this.gltf.textures||(this.gltf.textures=[]);const t={sampler:this.addSampler(e),source:this.addImage(e)},s=this.gltf.textures.length;return this.gltf.textures.push(t),s}addImage(e){this.gltf.images||(this.gltf.images=[]);const t={};if(e.url)t.uri=e.url;else{t.extras=e.data;for(let t=0;t<this.gltf.images.length;++t)if(e.data===this.gltf.images[t].extras)return t;switch(this.gltf.extras.options.imageOutputType){case c.GLB:{const s=this.gltf.extras.binChunkBuffer.addBufferView(5121,u.SCALAR);s.writeAsync(S(e.data)).then((()=>{s.finalize()})),t.bufferView=s.index,t.mimeType="image/png";break}case c.DataURI:t.uri=function(e){const t=z(e);return Object(m.k)(t)?t.toDataURL():""}(e.data);break;default:this.gltf.extras.promises.push(S(e.data).then((e=>{t.uri=e})))}}const s=this.gltf.images.length;return this.gltf.images.push(t),s}addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=10497,s=10497;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=33071,s=33071;break;case"mirror":t=33648,s=33648}else{switch(e.wrap.vertical){case"clamp":s=33071;break;case"mirror":s=33648}switch(e.wrap.horizontal){case"clamp":t=33071;break;case"mirror":t=33648}}const r={wrapS:t,wrapT:s};for(let n=0;n<this.gltf.samplers.length;++n)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[n]))return n;const i=this.gltf.samplers.length;return this.gltf.samplers.push(r),i}addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}addMeshVertexIndexed(e,t,s,r,i,n,a,o){for(const c of t){e.startAccessor("INDICES");for(let s=0;s<c.faces.length;++s)e.push(c.faces[s]);const t=e.endAccessor(),h={attributes:{POSITION:r},indices:this.addAccessor(e.index,t),material:this.addMaterial(c.material)};i&&"flat"!==c.shading&&(h.attributes.NORMAL=i),n&&(h.attributes.TEXCOORD_0=n),a&&"flat"!==c.shading&&(h.attributes.TANGENT=a),o&&(h.attributes.COLOR_0=o),s.primitives.push(h)}}addMeshVertexNonIndexed(e,t,s,r,i,n,a){const o={attributes:{POSITION:s}};r&&(o.attributes.NORMAL=r),i&&(o.attributes.TEXCOORD_0=i),n&&(o.attributes.TANGENT=n),a&&(o.attributes.COLOR_0=a),e&&(o.material=this.addMaterial(e[0].material)),t.primitives.push(o)}}class j{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.indexOf(e)>=0)throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){const t=this._scenes.indexOf(e);t>=0&&this._scenes.splice(t,1)}forEachScene(e){this._scenes.forEach(e)}}class I{constructor(){this.name="",this.nodes=[]}addNode(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)}forEachNode(e){this.nodes.forEach(e)}}class N{constructor(){this.name="",this.mesh=null,this.translation=Object(x.e)(),this.rotation=Object(g.b)(),this.scale=Object(x.c)(x.a),this.nodes=[]}addNode(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)}forEachNode(e){this.nodes.forEach(e)}set rotationAngles(e){Object(p.e)(this.rotation,e[0],e[1],e[2])}}const F="model.glb";function k(e,t,s){const n=new V(e,t=t||{},s);let h=n.params;h?h.origin||(h.origin=new i.a({x:-1,y:-1,z:-1})):h={origin:new i.a({x:-1,y:-1,z:-1})};const u=h.origin,l=n.gltf,f=l.extras.promises;let d=1,b=1,m=null;return Object(r.j)(f).then((()=>{const e={origin:u};delete l.extras;const s="number"==typeof t.jsonSpacing?t.jsonSpacing:4,r=JSON.stringify(l,((s,r)=>{if("extras"!==s){if(r instanceof ArrayBuffer){if(function(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}(r))switch(t.imageOutputType){case c.DataURI:case c.GLB:break;case c.External:default:{const t=`img${b}.png`;return b++,e[t]=r,t}}switch(t.bufferOutputType){case o.DataURI:return function(e){const t=[],s=new Uint8Array(e);for(let r=0;r<s.length;r++)t.push(String.fromCharCode(s[r]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}(r);case o.GLB:if(m)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(m=r);case o.External:default:{const t=`data${d}.bin`;return d++,e[t]=r,t}}}return r}}),s);return t.bufferOutputType===o.GLB||t.imageOutputType===c.GLB?e[F]=new a(r,m).buffer:e["model.gltf"]=r,e}))}class _{constructor(e,t){this.file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this.file)}download(e){return new Promise((()=>{const t=new Blob([this.file.data],{type:this.file.type});let s=e;if(s||(s="model.glb"),"glb"!==s.split(".").pop()&&(s+=".glb"),window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(t,s);else{const e=document.createElement("a"),r=URL.createObjectURL(t);e.href=r,e.download=s,document.body.appendChild(e),e.click(),setTimeout((function(){document.body.removeChild(e),window.URL.revokeObjectURL(r)}),0)}}))}}function U(e,t){const s=new j,r=new I;s.addScene(r);const i=new N;return r.addNode(i),i.mesh=e,(n=s,a=t,k(n,{bufferOutputType:o.GLB,imageOutputType:c.GLB,jsonSpacing:0},a)).then((e=>new _(e[F],e.origin)));var n,a}}}]);
//# sourceMappingURL=281.429f515f.chunk.js.map