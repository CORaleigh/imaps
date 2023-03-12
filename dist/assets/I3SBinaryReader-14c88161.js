import{ae as f,aS as D,af as $}from"./index-3baec1e8.js";import{O as U}from"./VertexAttribute-15d1866a.js";function V(){const e=new Float32Array(4);return e[3]=1,e}function k(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Y(e,t,r,i){const o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=i,o}function X(e,t){return new Float32Array(e,t,4)}Object.freeze(Object.defineProperty({__proto__:null,clone:k,create:V,createView:X,fromValues:Y},Symbol.toStringTag,{value:"Module"}));const d=!0,m={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function F(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+m.identifierOffset,m.identifierLength)),version:t.getUint16(r+m.versionOffset,d),checksum:t.getUint32(r+m.checksumOffset,d)}}const w={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function Z(e,t){return{sizeLo:e.getUint32(t+w.sizeLo,d),sizeHi:e.getUint32(t+w.sizeHi,d),minX:e.getFloat64(t+w.minX,d),minY:e.getFloat64(t+w.minY,d),minZ:e.getFloat64(t+w.minZ,d),maxX:e.getFloat64(t+w.maxX,d),maxY:e.getFloat64(t+w.maxY,d),maxZ:e.getFloat64(t+w.maxZ,d),errorX:e.getFloat64(t+w.errorX,d),errorY:e.getFloat64(t+w.errorY,d),errorZ:e.getFloat64(t+w.errorZ,d),count:e.getUint32(t+w.count,d),reserved:e.getUint32(t+w.reserved,d)}}function ee(e){const t=new DataView(e,0);let r=0;const{identifier:i,version:o}=F(e,t,r);if(r+=m.byteCount,i!=="LEPCC     ")throw new f("lepcc-decode-error","Bad identifier");if(o>1)throw new f("lepcc-decode-error","Unknown version");const n=Z(t,r);if(r+=w.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new f("lepcc-decode-error","Bad size");const a=new Float64Array(3*n.count),u=[],c=[],s=[],l=[];if(r=A(e,r,u),r=A(e,r,c),r=A(e,r,s),r=A(e,r,l),r!==e.byteLength)throw new f("lepcc-decode-error","Bad length");let y=0,g=0;for(let b=0;b<u.length;b++){g+=u[b];let v=0;for(let C=0;C<c[b];C++){v+=s[y];const S=l[y];a[3*y]=Math.min(n.maxX,n.minX+2*n.errorX*v),a[3*y+1]=Math.min(n.maxY,n.minY+2*n.errorY*g),a[3*y+2]=Math.min(n.maxZ,n.minZ+2*n.errorZ*S),y++}}return{errorX:n.errorX,errorY:n.errorY,errorZ:n.errorZ,result:a}}function A(e,t,r){const i=[];t=M(e,t,i);const o=[];for(let n=0;n<i.length;n++){o.length=0,t=M(e,t,o);for(let a=0;a<o.length;a++)r.push(o[a]+i[n])}return t}function M(e,t,r){const i=new DataView(e,t),o=i.getUint8(0),n=31&o,a=!!(32&o),u=(192&o)>>6;let c=0;if(u===0)c=i.getUint32(1,d),t+=5;else if(u===1)c=i.getUint16(1,d),t+=3;else{if(u!==2)throw new f("lepcc-decode-error","Bad count type");c=i.getUint8(1),t+=2}if(a)throw new f("lepcc-decode-error","LUT not implemented");const s=Math.ceil(c*n/8),l=new Uint8Array(e,t,s);let y=0,g=0,b=0;const v=-1>>>32-n;for(let C=0;C<c;C++){for(;g<n;)y|=l[b]<<g,g+=8,b+=1;r[C]=y&v,y>>>=n,g-=n,g+n>32&&(y|=l[b-1]>>8-g)}return t+b}const p={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function H(e,t){return{sizeLo:e.getUint32(t+p.sizeLo,d),sizeHi:e.getUint32(t+p.sizeHi,d),count:e.getUint32(t+p.count,d),colorMapCount:e.getUint16(t+p.colorMapCount,d),lookupMethod:e.getUint8(t+p.lookupMethod),compressionMethod:e.getUint8(t+p.compressionMethod)}}function _(e){const t=new DataView(e,0);let r=0;const{identifier:i,version:o}=F(e,t,r);if(r+=m.byteCount,i!=="ClusterRGB")throw new f("lepcc-decode-error","Bad identifier");if(o>1)throw new f("lepcc-decode-error","Unknown version");const n=H(t,r);if(r+=p.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new f("lepcc-decode-error","Bad size");if((n.lookupMethod===2||n.lookupMethod===1)&&n.compressionMethod===0){if(3*n.colorMapCount+n.count+r!==e.byteLength||n.colorMapCount>256)throw new f("lepcc-decode-error","Bad count");const a=new Uint8Array(e,r,3*n.colorMapCount),u=new Uint8Array(e,r+3*n.colorMapCount,n.count),c=new Uint8Array(3*n.count);for(let s=0;s<n.count;s++){const l=u[s];c[3*s]=a[3*l],c[3*s+1]=a[3*l+1],c[3*s+2]=a[3*l+2]}return c}if(n.lookupMethod===0&&n.compressionMethod===0){if(3*n.count+r!==e.byteLength||n.colorMapCount!==0)throw new f("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(n.lookupMethod<=2&&n.compressionMethod===1){if(r+3!==e.byteLength||n.colorMapCount!==1)throw new f("lepcc-decode-error","Bad count");const a=t.getUint8(r),u=t.getUint8(r+1),c=t.getUint8(r+2),s=new Uint8Array(3*n.count);for(let l=0;l<n.count;l++)s[3*l]=a,s[3*l+1]=u,s[3*l+2]=c;return s}throw new f("lepcc-decode-error","Bad method "+n.lookupMethod+","+n.compressionMethod)}const h={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function j(e,t){return{sizeLo:e.getUint32(t+h.sizeLo,d),sizeHi:e.getUint32(t+h.sizeHi,d),count:e.getUint32(t+h.count,d),scaleFactor:e.getUint16(t+h.scaleFactor,d),bitsPerPoint:e.getUint8(t+h.bitsPerPoint),reserved:e.getUint8(t+h.reserved)}}function N(e){const t=new DataView(e,0);let r=0;const{identifier:i,version:o}=F(e,t,r);if(r+=m.byteCount,i!=="Intensity ")throw new f("lepcc-decode-error","Bad identifier");if(o>1)throw new f("lepcc-decode-error","Unknown version");const n=j(t,r);if(r+=h.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new f("lepcc-decode-error","Bad size");const a=new Uint16Array(n.count);if(n.bitsPerPoint===8){if(n.count+r!==e.byteLength)throw new f("lepcc-decode-error","Bad size");const u=new Uint8Array(e,r,n.count);for(let c=0;c<n.count;c++)a[c]=u[c]*n.scaleFactor}else if(n.bitsPerPoint===16){if(2*n.count+r!==e.byteLength)throw new f("lepcc-decode-error","Bad size");const u=new Uint16Array(e,r,n.count);for(let c=0;c<n.count;c++)a[c]=u[c]*n.scaleFactor}else{const u=[];if(M(e,r,u)!==e.byteLength)throw new f("lepcc-decode-error","Bad size");for(let c=0;c<n.count;c++)a[c]=u[c]*n.scaleFactor}return a}const z=D.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function R(e,t,r){let i="",o=0;for(;o<r;){const n=e[t+o];if(n<128)i+=String.fromCharCode(n),o++;else if(n>=192&&n<224){if(o+1>=r)throw new f("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&n)<<6|63&e[t+o+1];i+=String.fromCharCode(a),o+=2}else if(n>=224&&n<240){if(o+2>=r)throw new f("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&n)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];i+=String.fromCharCode(a),o+=3}else{if(!(n>=240&&n<248))throw new f("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(o+3>=r)throw new f("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&n)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(a>=65536){const u=55296+(a-65536>>10),c=56320+(1023&a);i+=String.fromCharCode(u,c)}else i+=String.fromCharCode(a);o+=4}}}return i}function T(e,t){const r={byteOffset:0,byteCount:0,fields:Object.create(null)};let i=0;for(let o=0;o<t.length;o++){const n=t[o],a=n.valueType||n.type,u=J[a];r.fields[n.property]=u(e,i),i+=I[a].BYTES_PER_ELEMENT}return r.byteCount=i,r}function G(e,t,r){return E(e,t,r).map(i=>{const o=i?Date.parse(i):null;return o&&!Number.isNaN(o)?o:null})}function E(e,t,r){const i=[];let o,n,a=0;for(n=0;n<e;n+=1){if(o=t[n],o>0){if(i.push(R(r,a,o-1)),r[a+o-1]!==0)throw new f("string-array-error","Invalid string array: missing null termination.")}else i.push(null);a+=o}return i}function L(e,t){return new I[t.valueType](e,t.byteOffset,t.count*t.valuesPerElement)}function W(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function q(e,t,r){const i=t.header!=null?T(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let n=i.byteCount;for(let a=0;a<t.ordering.length;a++){const u=t.ordering[a],c=$(t[u]);if(c.count=i.fields.count??0,c.valueType==="String"){if(c.byteOffset=n,c.byteCount=i.fields[u+"ByteCount"],c.encoding!=="UTF-8")throw new f("unsupported-encoding","Unsupported String encoding.",{encoding:c.encoding});if(c.timeEncoding&&c.timeEncoding!=="ECMA_ISO8601")throw new f("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:c.timeEncoding})}else{if(!x(c.valueType))throw new f("unsupported-value-type","Unsupported binary valueType",{valueType:c.valueType});{const s=O(c.valueType);n+=n%s!=0?s-n%s:0,c.byteOffset=n,c.byteCount=s*c.valuesPerElement*c.count}}n+=c.byteCount??0,o.entries[u]=c}return o.byteCount=n-o.byteOffset,o}function P(e,t,r){if(t!==e&&z.error(`Invalid ${r} buffer size
 expected: ${e}, actual: ${t})`),t<e)throw new f("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function te(e,t){const r=T(e,t&&t.header);let i=r.byteCount;const o={isDraco:!1,header:r,byteOffset:r.byteCount,byteCount:0,vertexAttributes:{}},n=r.fields,a=n.vertexCount!=null?n.vertexCount:n.count;for(const s of t.ordering){if(!t.vertexAttributes[s])continue;const l={...t.vertexAttributes[s],byteOffset:i,count:a},y=B[s]?B[s]:"_"+s;o.vertexAttributes[y]=l,i+=O(l.valueType)*l.valuesPerElement*a}const u=n.faceCount;if(t.faces&&u){o.faces={};for(const s of t.ordering){if(!t.faces[s])continue;const l={...t.faces[s],byteOffset:i,count:u};o.faces[s]=l,i+=O(l.valueType)*l.valuesPerElement*u}}const c=n.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const s of t.featureAttributeOrder){if(!t.featureAttributes[s])continue;const l={...t.featureAttributes[s],byteOffset:i,count:c};o.featureAttributes[s]=l,i+=(l.valueType==="UInt64"?8:O(l.valueType))*l.valuesPerElement*c}}return P(i,e.byteLength,"geometry"),o.byteCount=i-o.byteOffset,o}const B={position:U.POSITION,normal:U.NORMAL,color:U.COLOR,uv0:U.UV0,region:U.UVREGION};function ne(e,t,r){if(e.encoding==="lepcc-rgb")return _(t);if(e.encoding==="lepcc-intensity")return N(t);if(e.encoding!=null&&e.encoding!=="")throw new f("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(z.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),e.ordering[0]==="ObjectIds"&&e.hasOwnProperty("objectIds")&&(z.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const i=q(t,e,r);P(i.byteOffset+i.byteCount,t.byteLength,"attribute");const o=i.entries.attributeValues||i.entries.objectIds;if(o){if(o.valueType==="String"){const n=i.entries.attributeByteCounts,a=L(t,n),u=W(t,o);return o.timeEncoding?G(n.count,a,u):E(n.count,a,u)}return L(t,o)}throw new f("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const I={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},J={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function x(e){return I.hasOwnProperty(e)}function O(e){return x(e)?I[e].BYTES_PER_ELEMENT:0}export{ne as I,ee as c,V as e,L as l,k as r,te as w};
