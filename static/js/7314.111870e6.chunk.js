"use strict";(globalThis.webpackChunkimaps=globalThis.webpackChunkimaps||[]).push([[7314],{99278:(t,e,i)=>{i.d(e,{Z:()=>d});var s,l=i(27366),n=(i(93169),i(10064)),r=i(46784),o=i(84652),a=i(32718),h=i(92026),c=i(49861),p=i(89125),f=i(69912);const u=a.Z.getLogger("esri.layers.support.PixelBlock");let x=s=class extends r.wq{constructor(t){super(t),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.pixels=null,this.statistics=null}static createEmptyBand(t,e){return new(s.getPixelArrayConstructor(t))(e)}static getPixelArrayConstructor(t){let e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":e=Float32Array;break;case"f64":e=Float64Array}return e}castPixelType(t){if(!t)return"f32";let e=t.toLowerCase();return["u1","u2","u4"].includes(e)?e="u8":["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].includes(e)||(e="f32"),e}getPlaneCount(){return this.pixels&&this.pixels.length}addData(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new n.Z("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null})}getAsRGBA(){const t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}getAsRGBAFloat(){const t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}updateStatistics(){this.statistics=this.pixels.map((t=>this._calculateBandStatistics(t,this.mask)));const t=this.mask;let e=0;if(t)for(let i=0;i<t.length;i++)t[i]&&e++;else e=this.width*this.height;this.validPixelCount=e}clamp(t){if(!t||"f64"===t||"f32"===t)return;let e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}const[i,l]=e,n=this.pixels,r=this.width*this.height,o=n.length;let a,h,c;const p=[];for(let f=0;f<o;f++){c=s.createEmptyBand(t,r),a=n[f];for(let t=0;t<r;t++)h=a[t],c[t]=h>l?l:h<i?i:h;p.push(c)}this.pixels=p,this.pixelType=t}extractBands(t){if((0,h.Wi)(t)||0===t.length||null==this.pixels||0===this.pixels.length)return this;const e=this.pixels.length,i=t.some((t=>t>=this.pixels.length)),l=e===t.length&&!t.some(((t,e)=>t!==e));return i||l?this:new s({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((t=>this.pixels[t])),statistics:this.statistics&&t.map((t=>this.statistics[t]))})}clone(){const t=new s({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let e;this.mask&&(this.mask instanceof Uint8Array?t.mask=new Uint8Array(this.mask):t.mask=this.mask.slice(0));const i=s.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];const s=this.pixels[0].slice;for(e=0;e<this.pixels.length;e++)t.pixels[e]=s?this.pixels[e].slice(0,this.pixels[e].length):new i(this.pixels[e])}if(this.statistics)for(t.statistics=[],e=0;e<this.statistics.length;e++)t.statistics[e]=(0,o.d9)(this.statistics[e]);return t}_fillFrom8Bit(t){const{mask:e,maskIsAlpha:i,pixels:s}=this;if(!t||!s||!s.length)return void u.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let l,n,r,o;l=n=r=s[0],s.length>=3?(n=s[1],r=s[2]):2===s.length&&(n=s[1]);const a=new Uint32Array(t),h=this.width*this.height;if(l.length===h)if(e&&e.length===h)if(i)for(o=0;o<h;o++)e[o]&&(a[o]=e[o]<<24|r[o]<<16|n[o]<<8|l[o]);else for(o=0;o<h;o++)e[o]&&(a[o]=255<<24|r[o]<<16|n[o]<<8|l[o]);else for(o=0;o<h;o++)a[o]=255<<24|r[o]<<16|n[o]<<8|l[o];else u.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(t){const{pixels:e,mask:i,statistics:s}=this;if(!t||!e||!e.length)return void u.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const l=this.pixelType;let n=1,r=0,o=1;if(s&&s.length>0)r=s.map((t=>t.minValue)).reduce(((t,e)=>Math.min(t,e))),o=s.map((t=>t.maxValue-t.minValue)).reduce(((t,e)=>Math.max(t,e))),n=255/o;else{let t=255;"s8"===l?(r=-128,t=127):"u16"===l?t=65535:"s16"===l?(r=-32768,t=32767):"u32"===l?t=4294967295:"s32"===l?(r=-2147483648,t=2147483647):"f32"===l?(r=-34e38,t=34e38):"f64"===l&&(r=-Number.MAX_VALUE,t=Number.MAX_VALUE),n=255/(t-r)}const a=new Uint32Array(t),h=this.width*this.height;let c,p,f,x,d;if(c=p=f=e[0],c.length!==h)return u.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(p=e[1],e.length>=3&&(f=e[2]),i&&i.length===h)for(x=0;x<h;x++)i[x]&&(a[x]=255<<24|(f[x]-r)*n<<16|(p[x]-r)*n<<8|(c[x]-r)*n);else for(x=0;x<h;x++)a[x]=255<<24|(f[x]-r)*n<<16|(p[x]-r)*n<<8|(c[x]-r)*n;else if(i&&i.length===h)for(x=0;x<h;x++)d=(c[x]-r)*n,i[x]&&(a[x]=255<<24|d<<16|d<<8|d);else for(x=0;x<h;x++)d=(c[x]-r)*n,a[x]=255<<24|d<<16|d<<8|d}_fillFrom32Bit(t){const{pixels:e,mask:i}=this;if(!t||!e||!e.length)return u.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let s,l,n,r;s=l=n=e[0],e.length>=3?(l=e[1],n=e[2]):2===e.length&&(l=e[1]);const o=this.width*this.height;if(s.length!==o)return u.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let a=0;if(i&&i.length===o)for(r=0;r<o;r++)t[a++]=s[r],t[a++]=l[r],t[a++]=n[r],t[a++]=1&i[r];else for(r=0;r<o;r++)t[a++]=s[r],t[a++]=l[r],t[a++]=n[r],t[a++]=1}_calculateBandStatistics(t,e){let i=1/0,s=-1/0;const l=t.length;let n,r=0;if(e)for(n=0;n<l;n++)e[n]&&(r=t[n],i=r<i?r:i,s=r>s?r:s);else for(n=0;n<l;n++)r=t[n],i=r<i?r:i,s=r>s?r:s;return{minValue:i,maxValue:s}}};(0,l._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"width",void 0),(0,l._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"height",void 0),(0,l._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"pixelType",void 0),(0,l._)([(0,p.p)("pixelType")],x.prototype,"castPixelType",null),(0,l._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"validPixelCount",void 0),(0,l._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"mask",void 0),(0,l._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"maskIsAlpha",void 0),(0,l._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"pixels",void 0),(0,l._)([(0,c.Cb)({json:{write:!0}})],x.prototype,"statistics",void 0),x=s=(0,l._)([(0,f.j)("esri.layers.support.PixelBlock")],x);const d=x},17314:(t,e,i)=>{i.d(e,{Kh:()=>p,Pz:()=>o,Qh:()=>C,SJ:()=>a,Uk:()=>v,Vl:()=>b,XV:()=>h,nk:()=>n,pW:()=>d,qF:()=>r,us:()=>u,zp:()=>c});var s=i(92026),l=i(99278);function n(t){return(0,s.pC)(t)&&"esri.layers.support.PixelBlock"===t.declaredClass&&t.pixels&&t.pixels.length>0}function r(t,e){if(!e?.length||!n(t))return t;const i=t.pixels.length;return e&&e.some((t=>t>=i))||1===i&&1===e.length&&0===e[0]?t:i!==e.length||e.some(((t,e)=>t!==e))?new l.Z({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map((e=>t.pixels[e])),statistics:t.statistics&&e.map((e=>t.statistics[e]))}):t}function o(t){if(!t)return;const e=t.colormap;if(!e||0===e.length)return;const i=e.sort(((t,e)=>t[0]-e[0]));let s=0;i[0][0]<0&&(s=i[0][0]);const l=Math.max(256,i[i.length-1][0]-s+1),n=new Uint8Array(4*l),r=[];let o,a=0,h=0;const c=5===i[0].length;if(l>65536)return i.forEach((t=>{r[t[0]-s]=c?t.slice(1):t.slice(1).concat([255])})),{indexed2DColormap:r,offset:s,alphaSpecified:c};if(t.fillUnspecified)for(o=i[h],a=o[0]-s;a<l;a++)n[4*a]=o[1],n[4*a+1]=o[2],n[4*a+2]=o[3],n[4*a+3]=c?o[4]:255,a===o[0]-s&&(o=h===i.length-1?o:i[++h]);else for(a=0;a<i.length;a++)o=i[a],h=4*(o[0]-s),n[h]=o[1],n[h+1]=o[2],n[h+2]=o[3],n[h+3]=c?o[4]:255;return{indexedColormap:n,offset:s,alphaSpecified:c}}function a(t,e){if(!n(t))return t;if(!e&&(e.indexedColormap||e.indexed2DColormap))return t;const i=t.clone(),s=i.pixels;let l=i.mask;const r=i.width*i.height;if(1!==s.length)return t;const{indexedColormap:o,indexed2DColormap:a,offset:h,alphaSpecified:c}=e,p=o.length-1;let f=0;const u=s[0],x=new Uint8Array(u.length),d=new Uint8Array(u.length),m=new Uint8Array(u.length);let g,y=0;if(o)if(l)for(f=0;f<r;f++)l[f]&&(y=4*(u[f]-h),y<h||y>p?l[f]=0:(x[f]=o[y],d[f]=o[y+1],m[f]=o[y+2],l[f]=o[y+3]));else{for(l=new Uint8Array(r),f=0;f<r;f++)y=4*(u[f]-h),y<h||y>p?l[f]=0:(x[f]=o[y],d[f]=o[y+1],m[f]=o[y+2],l[f]=o[y+3]);i.mask=l}else if(l)for(f=0;f<r;f++)l[f]&&(g=a[u[f]],x[f]=g[0],d[f]=g[1],m[f]=g[2],l[f]=g[3]);else{for(l=new Uint8Array(r),f=0;f<r;f++)g=a[u[f]],x[f]=g[0],d[f]=g[1],m[f]=g[2],l[f]=g[3];i.mask=l}return i.pixels=[x,d,m],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=c,i}function h(t,e){if(!n(t))return null;const{pixels:i,mask:s}=t,r=t.width*t.height,o=i.length;let a=e.lut;const{offset:h}=e;let c,p;a&&1===a[0].length&&(a=i.map((()=>a)));const f=[];let u,x,d;if(h)if(null==s)for(c=0;c<o;c++){for(u=i[c],x=a[c],d=new Uint8Array(r),p=0;p<r;p++)d[p]=x[u[p]-h];f.push(d)}else for(c=0;c<o;c++){for(u=i[c],x=a[c],d=new Uint8Array(r),p=0;p<r;p++)s[p]&&(d[p]=x[u[p]-h]);f.push(d)}else if(null==s)for(c=0;c<o;c++){for(u=i[c],x=a[c],d=new Uint8Array(r),p=0;p<r;p++)d[p]=x[u[p]];f.push(d)}else for(c=0;c<o;c++){for(u=i[c],x=a[c],d=new Uint8Array(r),p=0;p<r;p++)s[p]&&(d[p]=x[u[p]]);f.push(d)}const m=new l.Z({width:t.width,height:t.height,pixels:f,mask:s,pixelType:"u8"});return m.updateStatistics(),m}function c(t,e){if(!n(t))return null;const i=t.clone(),{pixels:s}=i,l=i.width*i.height,r=e.length,o=Math.floor(r/2),a=e[Math.floor(o)],h=s[0];let c,p,f,u,x,d,m=!1;const g=new Uint8Array(l),y=new Uint8Array(l),w=new Uint8Array(l);let k=i.mask;const A=4===e[0].mappedColor.length;for(k||(k=new Uint8Array(l),k.fill(A?255:1),i.mask=k),x=0;x<l;x++)if(k[x]){for(c=h[x],m=!1,d=o,p=a,f=0,u=r-1;u-f>1;){if(c===p.value){m=!0;break}c>p.value?f=d:u=d,d=Math.floor((f+u)/2),p=e[Math.floor(d)]}m||(c===e[f].value?(p=e[f],m=!0):c===e[u].value?(p=e[u],m=!0):c<e[f].value?(m=!1,p=null):c>e[f].value&&(c<e[u].value?(p=e[f],m=!0):u===r-1?(m=!1,p=null):(p=e[u],m=!0))),m?(g[x]=p.mappedColor[0],y[x]=p.mappedColor[1],w[x]=p.mappedColor[2],k[x]=p.mappedColor[3]):g[x]=y[x]=w[x]=k[x]=0}return i.pixels=[g,y,w],i.mask=k,i.pixelType="u8",i.maskIsAlpha=A,i}function p(t,e){if(!t||0===t.length)return null;const i=t.find((t=>t.pixelBlock));if(!i||(0,s.Wi)(i.pixelBlock))return null;const l=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,n=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,r=.01*Math.min(l,n),o=t.sort(((t,e)=>Math.abs(t.extent.ymax-e.extent.ymax)>r?e.extent.ymax-t.extent.ymax:Math.abs(t.extent.xmin-e.extent.xmin)>r?t.extent.xmin-e.extent.xmin:0)),a=Math.min.apply(null,o.map((t=>t.extent.xmin))),h=Math.min.apply(null,o.map((t=>t.extent.ymin))),c=Math.max.apply(null,o.map((t=>t.extent.xmax))),p=Math.max.apply(null,o.map((t=>t.extent.ymax))),f={x:Math.round((e.xmin-a)/l),y:Math.round((p-e.ymax)/n)},x={width:Math.round((c-a)/l),height:Math.round((p-h)/n)},d={width:Math.round((e.xmax-e.xmin)/l),height:Math.round((e.ymax-e.ymin)/n)};return Math.round(x.width/i.pixelBlock.width)*Math.round(x.height/i.pixelBlock.height)!==o.length||f.x<0||f.y<0||x.width<d.width||x.height<d.height?null:{extent:e,pixelBlock:u(o.map((t=>t.pixelBlock)),x,{clipOffset:f,clipSize:d})}}function f(t,e,i,s,l,n){const{width:r,height:o}=i.block,{x:a,y:h}=i.offset,{width:c,height:p}=i.mosaic,f=function(t,e,i,s,l,n,r,o){return{xmin:l<=i*t?0:l<i*t+t?l-i*t:t,ymin:n<=s*e?0:n<s*e+e?n-s*e:e,xmax:l+r<=i*t?0:l+r<i*t+t?l+r-i*t:t,ymax:n+o<=s*e?0:n+o<s*e+e?n+o-s*e:e}}(r,o,s,l,a,h,c,p);let u=0,x=0;if(n){const t=n.hasGCSSShiftTransform?360:n.halfWorldWidth,e=r*n.resolutionX,i=n.startX+s*e,l=i+e;i<t&&l>t?x=n.rightPadding:i>=t&&(u=n.leftMargin-n.rightPadding,x=0)}if(f.xmax-=x,"number"!=typeof e)for(let d=f.ymin;d<f.ymax;d++){const i=(l*o+d-h)*c+(s*r-a)+u,n=d*r;for(let s=f.xmin;s<f.xmax;s++)t[i+s]=e[n+s]}else for(let d=f.ymin;d<f.ymax;d++){const i=(l*o+d-h)*c+(s*r-a)+u;for(let s=f.xmin;s<f.xmax;s++)t[i+s]=e}}function u(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{clipOffset:r,clipSize:o,alignmentInfo:a,blockWidths:h}=i;if(h)return x(t,e,{blockWidths:h});const c=t.find((t=>n(t)));if((0,s.Wi)(c))return null;const p=o?o.width:e.width,u=o?o.height:e.height,d=c.width,m=c.height,g=e.width/d,y=e.height/m,w={offset:r||{x:0,y:0},mosaic:o||e,block:{width:d,height:m}},k=c.pixelType,A=l.Z.getPixelArrayConstructor(k),b=c.pixels.length,M=[];let C,v,U;for(let s=0;s<b;s++){v=new A(p*u);for(let e=0;e<y;e++)for(let i=0;i<g;i++){const l=t[e*g+i];n(l)&&(C=l.pixels[s],f(v,C,w,i,e,a))}M.push(v)}if(t.some((t=>(0,s.Wi)(t)||t.mask&&t.mask.length>0))){U=new Uint8Array(p*u);for(let e=0;e<y;e++)for(let i=0;i<g;i++){const l=t[e*g+i];f(U,((0,s.pC)(l)?l.mask:null)||(l?1:0),w,i,e,a)}}const B=new l.Z({width:p,height:u,pixels:M,pixelType:k,mask:U});return B.updateStatistics(),B}function x(t,e,i){const r=t.find((t=>(0,s.pC)(t)));if((0,s.Wi)(r))return null;const o=t.some((t=>!(0,s.pC)(t)||!!t.mask)),{width:a,height:h}=e,c=o?new Uint8Array(a*h):null,{blockWidths:p}=i,f=[],u=r.getPlaneCount(),x=l.Z.getPixelArrayConstructor(r.pixelType);if(o)for(let s=0,l=0;s<t.length;l+=p[s],s++){const e=t[s];if(!n(e))continue;const i=e.mask;for(let t=0;t<h;t++)for(let n=0;n<p[s];n++)c[t*a+n+l]=null==i?255:i[t*e.width+n]}for(let s=0;s<u;s++){const e=new x(a*h);for(let i=0,l=0;i<t.length;l+=p[i],i++){const r=t[i];if(!n(r))continue;const o=r.pixels[s];if(null!=o)for(let t=0;t<h;t++)for(let s=0;s<p[i];s++)e[t*a+s+l]=o[t*r.width+s]}f.push(e)}const d=new l.Z({width:a,height:h,mask:c,pixels:f,pixelType:r.pixelType});return d.updateStatistics(),d}function d(t,e,i){if(!n(t))return null;const{width:s,height:l}=t,r=e.x,o=e.y,a=i.width+r,h=i.height+o;if(r<0||o<0||a>s||h>l)return t;if(0===r&&0===o&&a===s&&h===l)return t;t.mask||(t.mask=new Uint8Array(s*l));const c=t.mask;for(let n=0;n<l;n++){const t=n*s;for(let e=0;e<s;e++)c[t+e]=n<o||n>=h||e<r||e>=a?0:1}return t.updateStatistics(),t}function m(t){if(!n(t))return null;const e=t.clone(),{width:i,height:s,pixels:l,mask:r}=t,o=l[0],a=e.pixels[0];for(let n=2;n<s-1;n++){const t=new Map;for(let s=n-2;s<n+2;s++)for(let e=0;e<4;e++){const l=s*i+e;w(t,o[l],r?r[l]:1)}a[n*i]=g(t),a[n*i+1]=a[n*i+2]=a[n*i];let e=3;for(;e<i-1;e++){let s=(n-2)*i+e+1;w(t,o[s],r?r[s]:1),s=(n-1)*i+e+1,w(t,o[s],r?r[s]:1),s=n*i+e+1,w(t,o[s],r?r[s]:1),s=(n+1)*i+e+1,w(t,o[s],r?r[s]:1),s=(n-2)*i+e-3,y(t,o[s],r?r[s]:1),s=(n-1)*i+e-3,y(t,o[s],r?r[s]:1),s=n*i+e-3,y(t,o[s],r?r[s]:1),s=(n+1)*i+e-3,y(t,o[s],r?r[s]:1),a[n*i+e]=g(t)}a[n*i+e+1]=a[n*i+e]}for(let n=0;n<i;n++)a[n]=a[i+n]=a[2*i+n],a[(s-1)*i+n]=a[(s-2)*i+n];return e.updateStatistics(),e}function g(t){if(0===t.size)return 0;let e=0,i=-1,s=0;const l=t.keys();let n=l.next();for(;!n.done;)s=t.get(n.value),s>e&&(i=n.value,e=s),n=l.next();return i}function y(t,e,i){if(0===i)return;const s=t.get(e);1===s?t.delete(e):t.set(e,s-1)}function w(t,e,i){0!==i&&t.set(e,t.has(e)?t.get(e)+1:1)}function k(t,e,i){let{x:s,y:r}=e;const{width:o,height:a}=i;if(0===s&&0===r&&a===t.height&&o===t.width)return t;const{width:h,height:c}=t,p=Math.max(0,r),f=Math.max(0,s),u=Math.min(s+o,h),x=Math.min(r+a,c);if(u<0||x<0||!n(t))return null;s=Math.max(0,-s),r=Math.max(0,-r);const{pixels:d,mask:m}=t,g=o*a,y=d.length,w=[];for(let n=0;n<y;n++){const e=d[n],i=l.Z.createEmptyBand(t.pixelType,g);for(let t=p;t<x;t++){const l=t*h;let n=(t+r-p)*o+s;for(let t=f;t<u;t++)i[n++]=e[l+t]}w.push(i)}const k=new Uint8Array(g);for(let l=p;l<x;l++){const t=l*h;let e=(l+r-p)*o+s;for(let i=f;i<u;i++)k[e++]=m?m[t+i]:1}const A=new l.Z({width:i.width,height:i.height,pixelType:t.pixelType,pixels:w,mask:k});return A.updateStatistics(),A}function A(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!n(t))return null;const{pixels:i,width:s,height:r,mask:o,pixelType:a}=t,h=[],c=Math.round(s/2),p=Math.round(r/2),f=r-1,u=s-1;for(let n=0;n<i.length;n++){const t=i[n],o=l.Z.createEmptyBand(a,c*p);let x=0;for(let i=0;i<r;i+=2)for(let l=0;l<s;l+=2){const n=t[i*s+l];if(e){const e=l===u?n:t[i*s+l+1],r=i===f?n:t[i*s+l+s],a=l===u?r:i===f?e:t[i*s+l+s+1];o[x++]=(n+e+r+a)/4}else o[x++]=n}h.push(o)}let x=null;if(o){x=new Uint8Array(c*p);let t=0;for(let i=0;i<r;i+=2)for(let l=0;l<s;l+=2){const n=o[i*s+l];if(e){const e=l===u?n:o[i*s+l+1],r=i===f?n:o[i*s+l+s],a=l===u?r:i===f?e:o[i*s+l+s+1];x[t++]=n*e*r*a?1:0}else x[t++]=n}}return new l.Z({width:c,height:p,pixelType:a,pixels:h,mask:x})}function b(t,e,i){if(!n(t))return null;const{width:s,height:l}=e;let{width:r,height:o}=t;const a=new Map,h={x:0,y:0},c=null==i?1:1+i;let p=t;for(let n=0;n<c;n++){const t=Math.ceil(r/s),i=Math.ceil(o/l);for(let r=0;r<i;r++){h.y=r*l;for(let i=0;i<t;i++){h.x=i*s;const t=k(p,h,e);a.set(`${n}/${r}/${i}`,t)}}n<c-1&&(p=A(p)),r=Math.round(r/2),o=Math.round(o/2)}return a}function M(t,e,i,s){let l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;const{width:n,height:r}=t,{width:o,height:a}=e,h=s.cols,c=s.rows,p=Math.ceil(o/h-.1/h),f=Math.ceil(a/c-.1/c);let u,x,d,m,g,y,w;const k=p*h,A=k*f*c,b=new Float32Array(A),M=new Float32Array(A),C=new Uint32Array(A),v=new Uint32Array(A);let U,B,T=0;for(let _=0;_<f;_++)for(let t=0;t<p;t++){u=12*(_*p+t),x=i[u],d=i[u+1],m=i[u+2],g=i[u+3],y=i[u+4],w=i[u+5];for(let e=0;e<c;e++){T=(_*c+e)*k+t*h,B=(e+.5)/c;for(let t=0;t<e;t++)U=(t+.5)/h,b[T+t]=(x*U+d*B+m)*n-l,M[T+t]=(g*U+y*B+w)*r-l,C[T+t]=Math.round(b[T+t]),v[T+t]=Math.round(M[T+t])}u+=6,x=i[u],d=i[u+1],m=i[u+2],g=i[u+3],y=i[u+4],w=i[u+5];for(let e=0;e<c;e++){T=(_*c+e)*k+t*h,B=(e+.5)/c;for(let t=e;t<h;t++)U=(t+.5)/h,b[T+t]=(x*U+d*B+m)*n-l,M[T+t]=(g*U+y*B+w)*r-l,C[T+t]=Math.round(b[T+t]),v[T+t]=Math.round(M[T+t])}}return{offsets_x:b,offsets_y:M,offsets_xi:C,offsets_yi:v,gridWidth:k}}function C(t,e){const{coefficients:i,spacing:s}=e,{offsets_x:l,offsets_y:n,gridWidth:r}=M(t,t,i,{rows:s[0],cols:s[1]},.5),{width:o,height:a}=t,h=new Float32Array(o*a),c=180/Math.PI;for(let p=0;p<a;p++)for(let t=0;t<o;t++){const e=p*r+t,i=0===p?e:e-r,s=p===a-1?e:e+r,f=l[i]-l[s],u=n[s]-n[i];if(isNaN(f)||isNaN(u))h[p*o+t]=90;else{let e=Math.atan2(u,f)*c;e=(360+e)%360,h[p*o+t]=e}}return h}function v(t,e,i,s){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"nearest";if(!n(t))return null;"majority"===r&&(t=m(t));const{pixels:o,mask:a,pixelType:h}=t,c=t.width,p=t.height,f=l.Z.getPixelArrayConstructor(h),u=o.length,{width:x,height:d}=e;let g=!1;for(let l=0;l<i.length;l+=3)-1===i[l]&&-1===i[l+1]&&-1===i[l+2]&&(g=!0);const{offsets_x:y,offsets_y:w,offsets_xi:k,offsets_yi:A,gridWidth:b}=M({width:c,height:p},e,i,s,"majority"===r?0:.5);let C;const v=(t,e,i)=>{const s=t instanceof Float32Array||t instanceof Float64Array?0:.5;for(let l=0;l<d;l++){C=l*b;for(let n=0;n<x;n++){if(y[C]<0||w[C]<0)t[l*x+n]=0;else if(i)t[l*x+n]=e[k[C]+A[C]*c];else{const i=Math.floor(y[C]),r=Math.floor(w[C]),o=Math.ceil(y[C]),h=Math.ceil(w[C]),p=y[C]-i,f=w[C]-r;if(!a||a[i+r*c]&&a[i+r*c]&&a[i+h*c]&&a[o+h*c]){const a=(1-p)*e[i+r*c]+p*e[o+r*c],u=(1-p)*e[i+h*c]+p*e[o+h*c];t[l*x+n]=(1-f)*a+f*u+s}else t[l*x+n]=e[k[C]+A[C]*c]}C++}}},U=[];let B;for(let l=0;l<u;l++)B=new f(x*d),v(B,o[l],"nearest"===r||"majority"===r),U.push(B);const T=new l.Z({width:x,height:d,pixelType:h,pixels:U});if(a)T.mask=new Uint8Array(x*d),v(T.mask,a,!0);else if(g){T.mask=new Uint8Array(x*d);for(let t=0;t<x*d;t++)T.mask[t]=y[t]<0||w[t]<0?0:1}return T.updateStatistics(),T}}}]);
//# sourceMappingURL=7314.111870e6.chunk.js.map