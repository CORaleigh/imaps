import{g3 as j,aj as A,g4 as B,c8 as H}from"./index-84d82762.js";function b(n,a,e,o){if(o==null||n.hasZ||(o=void 0),n.type==="point")return n.x+=a,n.y+=e,n.hasZ&&o!=null&&(n.z+=o),n;if(n.type==="multipoint"){const x=n.points;for(let i=0;i<x.length;i++)x[i]=C(x[i],a,e,o);return n}if(n.type==="extent")return n.xmin+=a,n.xmax+=a,n.ymin+=e,n.ymax+=e,o!=null&&(n.zmin??(n.zmin=0),n.zmin+=o,n.zmax??(n.zmax=0),n.zmax+=o),n;const r=j(n),t=n.type==="polyline"?n.paths:n.rings;for(let x=0;x<r.length;x++){const i=r[x];for(let s=0;s<i.length;s++)i[s]=C(i[s],a,e,o)}return"paths"in n?n.paths=t:n.rings=t,n}function J(n,a,e,o,r){const t=n.clone(),x=o.resolution;if(t.type==="point"){if(r)b(t,a*x,-e*x);else{const i=o.state.transform,s=o.state.inverseTransform,l=i[0]*t.x+i[2]*t.y+i[4],y=i[1]*t.x+i[3]*t.y+i[5];t.x=s[0]*(l+a)+s[2]*(y+e)+s[4],t.y=s[1]*(l+a)+s[3]*(y+e)+s[5]}return t}if(t.type==="multipoint"){if(r)b(t,a*x,-e*x);else{const i=t.points,s=o.state.transform,l=o.state.inverseTransform;for(let y=0;y<i.length;y++){const c=i[y],p=s[0]*c[0]+s[2]*c[1]+s[4],z=s[1]*c[0]+s[3]*c[1]+s[5],f=l[0]*(p+a)+l[2]*(z+e)+l[4],u=l[1]*(p+a)+l[3]*(z+e)+l[5];i[y]=q(c,f,u,void 0)}}return t}if(t.type==="extent"){if(r)b(t,a*x,-e*x);else{const i=o.state.transform,s=o.state.inverseTransform,l=i[0]*t.xmin+i[2]*t.ymin+i[4],y=i[1]*t.xmin+i[3]*t.ymin+i[5],c=i[0]*t.xmax+i[2]*t.ymax+i[4],p=i[1]*t.xmax+i[3]*t.ymax+i[5];t.xmin=s[0]*(l+a)+s[2]*(y+e)+s[4],t.ymin=s[1]*(l+a)+s[3]*(y+e)+s[5],t.xmax=s[0]*(c+a)+s[2]*(p+e)+s[4],t.ymax=s[1]*(c+a)+s[3]*(p+e)+s[5]}return t}if(r)b(t,a*x,-e*x);else{const i=j(t),s=t.type==="polyline"?t.paths:t.rings,l=o.state.transform,y=o.state.inverseTransform;for(let c=0;c<i.length;c++){const p=i[c];for(let z=0;z<p.length;z++){const f=p[z],u=l[0]*f[0]+l[2]*f[1]+l[4],h=l[1]*f[0]+l[3]*f[1]+l[5],v=y[0]*(u+a)+y[2]*(h+e)+y[4],g=y[1]*(u+a)+y[3]*(h+e)+y[5];p[z]=q(f,v,g,void 0)}}"paths"in t?t.paths=s:t.rings=s}return t}function K(n,a,e,o){if(n.type==="point"){const{x:f,y:u}=n,h=o?o[0]:f,v=o?o[1]:u,g=n.clone(),M=(f-h)*a+h,m=(u-v)*e+v;return g.x=M,g.y=m,g}if(n.type==="multipoint"){const f=j(n),u=A(),[h,v,g,M]=B(u,[f]),m=o?o[0]:(h+g)/2,d=o?o[1]:(M+v)/2,T=n.clone(),k=T.points;for(let Z=0;Z<k.length;Z++){const w=k[Z],[D,E]=w,F=(D-m)*a+m,G=(E-d)*e+d;k[Z]=q(w,F,G,void 0)}return T}if(n.type==="extent"){const{xmin:f,xmax:u,ymin:h,ymax:v}=n,g=o?o[0]:(f+u)/2,M=o?o[1]:(v+h)/2,m=n.clone();if(m.xmin=(f-g)*a+g,m.ymax=(v-M)*e+M,m.xmax=(u-g)*a+g,m.ymin=(h-M)*e+M,m.xmin>m.xmax){const d=m.xmin,T=m.xmax;m.xmin=T,m.xmax=d}if(m.ymin>m.ymax){const d=m.ymin,T=m.ymax;m.ymin=T,m.ymax=d}return m}const r=j(n),t=A(),[x,i,s,l]=B(t,r),y=o?o[0]:(x+s)/2,c=o?o[1]:(l+i)/2,p=n.clone(),z=p.type==="polyline"?p.paths:p.rings;for(let f=0;f<r.length;f++){const u=r[f];for(let h=0;h<u.length;h++){const v=u[h],[g,M]=v,m=(g-y)*a+y,d=(M-c)*e+c;z[f][h]=q(v,m,d,void 0)}}return"paths"in p?p.paths=z:p.rings=z,p}function L(n,a,e,o,r,t){const x=Math.sqrt((e-n)*(e-n)+(o-a)*(o-a));return Math.sqrt((r-n)*(r-n)+(t-a)*(t-a))/x}function N(n,a,e,o=!1){const r=Math.atan2(a.y-e.y,a.x-e.x)-Math.atan2(n.y-e.y,n.x-e.x),t=Math.atan2(Math.sin(r),Math.cos(r));return o?t:H(t)}function C(n,a,e,o){return q(n,n[0]+a,n[1]+e,n[2]!=null&&o!=null?n[2]+o:void 0)}function q(n,a,e,o){const r=[a,e];return n.length>2&&r.push(o??n[2]),n.length>3&&r.push(n[3]),r}export{N as a,b as i,L as m,J as r,K as s};
