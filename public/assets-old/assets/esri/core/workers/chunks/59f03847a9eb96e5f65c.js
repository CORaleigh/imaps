"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3180],{68612:(t,n,e)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function o(t,n,e,r,o,a,u,s,c){return[t,n,e,r,o,a,u,s,c]}e.d(n,{IJ:()=>a,Su:()=>r,WK:()=>o});const a=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:r,createView:function(t,n){return new Float64Array(t,n,9)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},87104:(t,n,e)=>{function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}e.d(n,{IJ:()=>a,Su:()=>r,ct:()=>o});const a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:o,create:r,createView:function(t,n){return new Float64Array(t,n,16)},fromValues:function(t,n,e,r,o,a,u,s,c,i,l,f,M,h,E,I){return[t,n,e,r,o,a,u,s,c,i,l,f,M,h,E,I]}},Symbol.toStringTag,{value:"Module"}))},2620:(t,n,e)=>{function r(){return[0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3]]}e.d(n,{IJ:()=>a,Su:()=>r,ct:()=>o});const a=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:o,create:r,createView:function(t,n){return new Float64Array(t,n,4)},fromValues:function(t,n,e,r){return[t,n,e,r]}},Symbol.toStringTag,{value:"Module"}))},85256:(t,n,e)=>{function r(){return[0,0]}function o(t,n){return[t,n]}function a(){return o(1,1)}function u(){return o(1,0)}function s(){return o(0,1)}e.d(n,{Qw:()=>c,Su:()=>r,WK:()=>o});const c=a(),i=u(),l=s();Object.freeze(Object.defineProperty({__proto__:null,ONES:c,UNIT_X:i,UNIT_Y:l,ZEROS:[0,0],clone:function(t){return[t[0],t[1]]},create:r,createView:function(t,n){return new Float64Array(t,n,2)},fromArray:function(t,n=[0,0]){const e=Math.min(2,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n},fromValues:o,ones:a,unitX:u,unitY:s,zeros:function(){return[0,0]}},Symbol.toStringTag,{value:"Module"}))},77556:(t,n,e)=>{e.d(n,{KU:()=>f,QT:()=>E,S_:()=>s,WO:()=>a,_7:()=>c,aU:()=>l,iW:()=>i,kr:()=>o,oL:()=>u,yy:()=>M});var r=e(47364);function o(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function a(t,n,e,r,o,a,u,s,c,i){return t[0]=n,t[1]=e,t[2]=r,t[3]=o,t[4]=a,t[5]=u,t[6]=s,t[7]=c,t[8]=i,t}function u(t,n){if(t===n){const e=n[1],r=n[2],o=n[5];t[1]=n[3],t[2]=n[6],t[3]=e,t[5]=n[7],t[6]=r,t[7]=o}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function s(t,n){const e=n[0],r=n[1],o=n[2],a=n[3],u=n[4],s=n[5],c=n[6],i=n[7],l=n[8],f=l*u-s*i,M=-l*a+s*c,h=i*a-u*c;let E=e*f+r*M+o*h;return E?(E=1/E,t[0]=f*E,t[1]=(-l*r+o*i)*E,t[2]=(s*r-o*u)*E,t[3]=M*E,t[4]=(l*e-o*c)*E,t[5]=(-s*e+o*a)*E,t[6]=h*E,t[7]=(-i*e+r*c)*E,t[8]=(u*e-r*a)*E,t):null}function c(t,n){const e=n[0],r=n[1],o=n[2],a=n[3],u=n[4],s=n[5],c=n[6],i=n[7],l=n[8];return t[0]=u*l-s*i,t[1]=o*i-r*l,t[2]=r*s-o*u,t[3]=s*c-a*l,t[4]=e*l-o*c,t[5]=o*a-e*s,t[6]=a*i-u*c,t[7]=r*c-e*i,t[8]=e*u-r*a,t}function i(t,n,e){const r=n[0],o=n[1],a=n[2],u=n[3],s=n[4],c=n[5],i=n[6],l=n[7],f=n[8],M=e[0],h=e[1],E=e[2],I=e[3],S=e[4],O=e[5],T=e[6],A=e[7],N=e[8];return t[0]=M*r+h*u+E*i,t[1]=M*o+h*s+E*l,t[2]=M*a+h*c+E*f,t[3]=I*r+S*u+O*i,t[4]=I*o+S*s+O*l,t[5]=I*a+S*c+O*f,t[6]=T*r+A*u+N*i,t[7]=T*o+A*s+N*l,t[8]=T*a+A*c+N*f,t}function l(t,n,e){const r=e[0],o=e[1],a=e[2];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=o*n[3],t[4]=o*n[4],t[5]=o*n[5],t[6]=a*n[6],t[7]=a*n[7],t[8]=a*n[8],t}function f(t,n){const e=n[0],r=n[1],o=n[2],a=n[3],u=e+e,s=r+r,c=o+o,i=e*u,l=r*u,f=r*s,M=o*u,h=o*s,E=o*c,I=a*u,S=a*s,O=a*c;return t[0]=1-f-E,t[3]=l-O,t[6]=M+S,t[1]=l+O,t[4]=1-i-E,t[7]=h-I,t[2]=M-S,t[5]=h+I,t[8]=1-i-f,t}function M(t,n){const e=n[0],r=n[1],o=n[2],a=n[3],u=n[4],s=n[5],c=n[6],i=n[7],l=n[8],f=n[9],M=n[10],h=n[11],E=n[12],I=n[13],S=n[14],O=n[15],T=e*s-r*u,A=e*c-o*u,N=e*i-a*u,m=r*c-o*s,R=r*i-a*s,b=o*i-a*c,_=l*I-f*E,d=l*S-M*E,C=l*O-h*E,L=f*S-M*I,P=f*O-h*I,p=M*O-h*S;let F=T*p-A*P+N*L+m*C-R*d+b*_;return F?(F=1/F,t[0]=(s*p-c*P+i*L)*F,t[1]=(c*C-u*p-i*d)*F,t[2]=(u*P-s*C+i*_)*F,t[3]=(o*P-r*p-a*L)*F,t[4]=(e*p-o*C+a*d)*F,t[5]=(r*C-e*P-a*_)*F,t[6]=(I*b-S*R+O*m)*F,t[7]=(S*N-E*b-O*A)*F,t[8]=(E*R-I*N+O*T)*F,t):null}function h(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t[3]=n[3]-e[3],t[4]=n[4]-e[4],t[5]=n[5]-e[5],t[6]=n[6]-e[6],t[7]=n[7]-e[7],t[8]=n[8]-e[8],t}function E(t){const n=(0,r.Au)(),e=t[0],o=t[1],a=t[2],u=t[3],s=t[4],c=t[5],i=t[6],l=t[7],f=t[8];return Math.abs(1-(e*e+u*u+i*i))<=n&&Math.abs(1-(o*o+s*s+l*l))<=n&&Math.abs(1-(a*a+c*c+f*f))<=n}const I=i,S=h;Object.freeze(Object.defineProperty({__proto__:null,add:function(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t[3]=n[3]+e[3],t[4]=n[4]+e[4],t[5]=n[5]+e[5],t[6]=n[6]+e[6],t[7]=n[7]+e[7],t[8]=n[8]+e[8],t},adjoint:c,copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},determinant:function(t){const n=t[0],e=t[1],r=t[2],o=t[3],a=t[4],u=t[5],s=t[6],c=t[7],i=t[8];return n*(i*a-u*c)+e*(-i*o+u*s)+r*(c*o-a*s)},equals:function(t,n){const e=t[0],o=t[1],a=t[2],u=t[3],s=t[4],c=t[5],i=t[6],l=t[7],f=t[8],M=n[0],h=n[1],E=n[2],I=n[3],S=n[4],O=n[5],T=n[6],A=n[7],N=n[8],m=(0,r.Au)();return Math.abs(e-M)<=m*Math.max(1,Math.abs(e),Math.abs(M))&&Math.abs(o-h)<=m*Math.max(1,Math.abs(o),Math.abs(h))&&Math.abs(a-E)<=m*Math.max(1,Math.abs(a),Math.abs(E))&&Math.abs(u-I)<=m*Math.max(1,Math.abs(u),Math.abs(I))&&Math.abs(s-S)<=m*Math.max(1,Math.abs(s),Math.abs(S))&&Math.abs(c-O)<=m*Math.max(1,Math.abs(c),Math.abs(O))&&Math.abs(i-T)<=m*Math.max(1,Math.abs(i),Math.abs(T))&&Math.abs(l-A)<=m*Math.max(1,Math.abs(l),Math.abs(A))&&Math.abs(f-N)<=m*Math.max(1,Math.abs(f),Math.abs(N))},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]},frob:function(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2)},fromMat2d:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t},fromMat4:o,fromQuat:f,fromRotation:function(t,n){const e=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=e,t[2]=0,t[3]=-e,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromTranslation:function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},invert:s,isOrthoNormal:E,mul:I,multiply:i,multiplyScalar:function(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t[4]=n[4]*e,t[5]=n[5]*e,t[6]=n[6]*e,t[7]=n[7]*e,t[8]=n[8]*e,t},multiplyScalarAndAdd:function(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t[3]=n[3]+e[3]*r,t[4]=n[4]+e[4]*r,t[5]=n[5]+e[5]*r,t[6]=n[6]+e[6]*r,t[7]=n[7]+e[7]*r,t[8]=n[8]+e[8]*r,t},normalFromMat4:M,normalFromMat4Legacy:function(t,n){const e=n[0],r=n[1],o=n[2],a=n[4],u=n[5],s=n[6],c=n[8],i=n[9],l=n[10],f=l*u-s*i,M=-l*a+s*c,h=i*a-u*c,E=e*f+r*M+o*h;if(!E)return null;const I=1/E;return t[0]=f*I,t[1]=(-l*r+o*i)*I,t[2]=(s*r-o*u)*I,t[3]=M*I,t[4]=(l*e-o*c)*I,t[5]=(-s*e+o*a)*I,t[6]=h*I,t[7]=(-i*e+r*c)*I,t[8]=(u*e-r*a)*I,t},projection:function(t,n,e){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/e,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t},rotate:function(t,n,e){const r=n[0],o=n[1],a=n[2],u=n[3],s=n[4],c=n[5],i=n[6],l=n[7],f=n[8],M=Math.sin(e),h=Math.cos(e);return t[0]=h*r+M*u,t[1]=h*o+M*s,t[2]=h*a+M*c,t[3]=h*u-M*r,t[4]=h*s-M*o,t[5]=h*c-M*a,t[6]=i,t[7]=l,t[8]=f,t},scale:l,scaleByVec2:function(t,n,e){const r=e[0],o=e[1];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=o*n[3],t[4]=o*n[4],t[5]=o*n[5],t},set:a,str:function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},sub:S,subtract:h,translate:function(t,n,e){const r=n[0],o=n[1],a=n[2],u=n[3],s=n[4],c=n[5],i=n[6],l=n[7],f=n[8],M=e[0],h=e[1];return t[0]=r,t[1]=o,t[2]=a,t[3]=u,t[4]=s,t[5]=c,t[6]=M*r+h*u+i,t[7]=M*o+h*s+l,t[8]=M*a+h*c+f,t},transpose:u},Symbol.toStringTag,{value:"Module"}))},41512:(t,n,e)=>{e.d(n,{C0:()=>l,WO:()=>O,Wu:()=>I,fO:()=>h,iW:()=>f,sF:()=>P,yG:()=>i});var r=e(68612),o=e(2620),a=e(62484),u=e(47364),s=e(98472),c=e(74784);function i(t,n,e){e*=.5;const r=Math.sin(e);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(e),t}function l(t,n){const e=2*Math.acos(n[3]),r=Math.sin(e/2);return r>(0,u.Au)()?(t[0]=n[0]/r,t[1]=n[1]/r,t[2]=n[2]/r):(t[0]=1,t[1]=0,t[2]=0),e}function f(t,n,e){const r=n[0],o=n[1],a=n[2],u=n[3],s=e[0],c=e[1],i=e[2],l=e[3];return t[0]=r*l+u*s+o*i-a*c,t[1]=o*l+u*c+a*s-r*i,t[2]=a*l+u*i+r*c-o*s,t[3]=u*l-r*s-o*c-a*i,t}function M(t,n,e,r){const o=n[0],a=n[1],s=n[2],c=n[3];let i,l,f,M,h,E=e[0],I=e[1],S=e[2],O=e[3];return l=o*E+a*I+s*S+c*O,l<0&&(l=-l,E=-E,I=-I,S=-S,O=-O),1-l>(0,u.Au)()?(i=Math.acos(l),f=Math.sin(i),M=Math.sin((1-r)*i)/f,h=Math.sin(r*i)/f):(M=1-r,h=r),t[0]=M*o+h*E,t[1]=M*a+h*I,t[2]=M*s+h*S,t[3]=M*c+h*O,t}function h(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function E(t,n){const e=n[0]+n[4]+n[8];let r;if(e>0)r=Math.sqrt(e+1),t[3]=.5*r,r=.5/r,t[0]=(n[5]-n[7])*r,t[1]=(n[6]-n[2])*r,t[2]=(n[1]-n[3])*r;else{let e=0;n[4]>n[0]&&(e=1),n[8]>n[3*e+e]&&(e=2);const o=(e+1)%3,a=(e+2)%3;r=Math.sqrt(n[3*e+e]-n[3*o+o]-n[3*a+a]+1),t[e]=.5*r,r=.5/r,t[3]=(n[3*o+a]-n[3*a+o])*r,t[o]=(n[3*o+e]+n[3*e+o])*r,t[a]=(n[3*a+e]+n[3*e+a])*r}return t}function I(t,n,e,r){const o=.5*Math.PI/180;n*=o,e*=o,r*=o;const a=Math.sin(n),u=Math.cos(n),s=Math.sin(e),c=Math.cos(e),i=Math.sin(r),l=Math.cos(r);return t[0]=a*c*l-u*s*i,t[1]=u*s*l+a*c*i,t[2]=u*c*i-a*s*l,t[3]=u*c*l+a*s*i,t}const S=c.c,O=c.s,T=c.f,A=f,N=c.b,m=c.g,R=c.l,b=c.i,_=b,d=c.j,C=d,L=c.n,P=c.a,p=c.e,F=(0,a.Su)(),y=(0,a.WK)(1,0,0),g=(0,a.WK)(0,1,0),w=(0,o.Su)(),D=(0,o.Su)(),U=(0,r.Su)();Object.freeze(Object.defineProperty({__proto__:null,add:T,calculateW:function(t,n){const e=n[0],r=n[1],o=n[2];return t[0]=e,t[1]=r,t[2]=o,t[3]=Math.sqrt(Math.abs(1-e*e-r*r-o*o)),t},conjugate:h,copy:S,dot:m,equals:p,exactEquals:P,fromEuler:I,fromMat3:E,getAxisAngle:l,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},invert:function(t,n){const e=n[0],r=n[1],o=n[2],a=n[3],u=e*e+r*r+o*o+a*a,s=u?1/u:0;return t[0]=-e*s,t[1]=-r*s,t[2]=-o*s,t[3]=a*s,t},len:_,length:b,lerp:R,mul:A,multiply:f,normalize:L,random:function(t){const n=u.QR,e=n(),r=n(),o=n(),a=Math.sqrt(1-e),s=Math.sqrt(e);return t[0]=a*Math.sin(2*Math.PI*r),t[1]=a*Math.cos(2*Math.PI*r),t[2]=s*Math.sin(2*Math.PI*o),t[3]=s*Math.cos(2*Math.PI*o),t},rotateX:function(t,n,e){e*=.5;const r=n[0],o=n[1],a=n[2],u=n[3],s=Math.sin(e),c=Math.cos(e);return t[0]=r*c+u*s,t[1]=o*c+a*s,t[2]=a*c-o*s,t[3]=u*c-r*s,t},rotateY:function(t,n,e){e*=.5;const r=n[0],o=n[1],a=n[2],u=n[3],s=Math.sin(e),c=Math.cos(e);return t[0]=r*c-a*s,t[1]=o*c+u*s,t[2]=a*c+r*s,t[3]=u*c-o*s,t},rotateZ:function(t,n,e){e*=.5;const r=n[0],o=n[1],a=n[2],u=n[3],s=Math.sin(e),c=Math.cos(e);return t[0]=r*c+o*s,t[1]=o*c-r*s,t[2]=a*c+u*s,t[3]=u*c-a*s,t},rotationTo:function(t,n,e){const r=(0,s.k)(n,e);return r<-.999999?((0,s.b)(F,y,n),(0,s.H)(F)<1e-6&&(0,s.b)(F,g,n),(0,s.n)(F,F),i(t,F,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,s.b)(F,n,e),t[0]=F[0],t[1]=F[1],t[2]=F[2],t[3]=1+r,L(t,t))},scale:N,set:O,setAxes:function(t,n,e,r){const o=U;return o[0]=e[0],o[3]=e[1],o[6]=e[2],o[1]=r[0],o[4]=r[1],o[7]=r[2],o[2]=-n[0],o[5]=-n[1],o[8]=-n[2],L(t,E(t,o))},setAxisAngle:i,slerp:M,sqlerp:function(t,n,e,r,o,a){return M(w,n,o,a),M(D,e,r,a),M(t,w,D,2*a*(1-a)),t},sqrLen:C,squaredLength:d,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}},Symbol.toStringTag,{value:"Module"}))},51120:(t,n,e)=>{e.d(n,{y:()=>i});var r=e(53648),o=e(15008),a=e(62484);function u(t,n,e){const r=Math.sin(t),o=Math.cos(t),a=Math.sin(n),u=Math.cos(n),s=e;return s[0]=-r,s[4]=-a*o,s[8]=u*o,s[12]=0,s[1]=o,s[5]=-a*r,s[9]=u*r,s[13]=0,s[2]=0,s[6]=u,s[10]=a,s[14]=0,s[3]=0,s[7]=0,s[11]=0,s[15]=1,s}var s=e(38380),c=e(60544);function i(t,n,e,r){if(null==t||null==r)return!1;const a=(0,s.Se)(t,s.Wy),i=(0,s.Se)(r,s.mq);if(a===i&&!l(i)&&(a!==s.o3.UNKNOWN||(0,c.yK)(t,r)))return(0,o.mu)(e,n),!0;if(l(i)){const t=s.yw[a][s.o3.LON_LAT],r=s.yw[s.o3.LON_LAT][i];return null!=t&&null!=r&&(t(n,0,M,0),r(M,0,h,0),u(f*M[0],f*M[1],e),e[12]=h[0],e[13]=h[1],e[14]=h[2],!0)}if((i===s.o3.WEB_MERCATOR||i===s.o3.PLATE_CARREE||i===s.o3.WGS84)&&(a===s.o3.WGS84||a===s.o3.CGCS2000&&i===s.o3.PLATE_CARREE||a===s.o3.SPHERICAL_ECEF||a===s.o3.WEB_MERCATOR)){const t=s.yw[a][s.o3.LON_LAT],r=s.yw[s.o3.LON_LAT][i];return null!=t&&null!=r&&(t(n,0,M,0),r(M,0,h,0),a===s.o3.SPHERICAL_ECEF?function(t,n,e){u(t,n,e),(0,o.oL)(e,e)}(f*M[0],f*M[1],e):(0,o.ZX)(e),e[12]=h[0],e[13]=h[1],e[14]=h[2],!0)}return!1}function l(t){return t===s.o3.SPHERICAL_ECEF||t===s.o3.SPHERICAL_MARS_PCPF||t===s.o3.SPHERICAL_MOON_PCPF}const f=(0,r.EF)(1),M=(0,a.Su)(),h=(0,a.Su)()},82448:(t,n,e)=>{e.d(n,{_s:()=>i});var r=e(22080),o=e(56156),a=e(60544);const u=new o.c(r._),s=new o.c(r.IP),c=new o.c(r.Om);function i(t){const n=l.get(t);if(n)return n;let e=u;if(t)if(t===s)e=s;else if(t===c)e=c;else{const n=t.wkid,r=t.latestWkid;if(null!=n||null!=r)(0,a.cJ)(n)||(0,a.cJ)(r)?e=s:((0,a.C_)(n)||(0,a.C_)(r))&&(e=c);else{const n=t.wkt2??t.wkt;if(n){const t=n.toUpperCase();t===f?e=s:t===M&&(e=c)}}}return l.set(t,e),e}new o.c(r.MJ);const l=new Map,f=s.wkt.toUpperCase(),M=c.wkt.toUpperCase()},58632:(t,n,e)=>{e.d(n,{Su:()=>a,XX:()=>s,Oq:()=>u}),e(53648);var r=e(98472),o=e(62484);function a(t=E){return[t[0],t[1],t[2],t[3]]}function u(t){return t}function s(t,n,e,o=0,u=Math.floor(e*(1/3)),E=Math.floor(e*(2/3))){if(e<3)return!1;n(i,o);let I=u,S=!1;for(;I<e-1&&!S;)n(l,I),I++,S=!(0,r.j)(i,l);if(!S)return!1;for(I=Math.max(I,E),S=!1;I<e&&!S;)n(f,I),I++,(0,r.f)(M,i,l),(0,r.n)(M,M),(0,r.f)(h,l,f),(0,r.n)(h,h),S=!(0,r.j)(i,f)&&!(0,r.j)(l,f)&&Math.abs((0,r.k)(M,h))<c;return S?(function(t,n,e,r=a()){const o=e[0]-n[0],u=e[1]-n[1],s=e[2]-n[2],c=t[0]-n[0],i=t[1]-n[1],l=t[2]-n[2],f=u*l-s*i,M=s*c-o*l,h=o*i-u*c,E=f*f+M*M+h*h,I=Math.abs(E-1)>1e-5&&E>1e-12?1/Math.sqrt(E):1;r[0]=f*I,r[1]=M*I,r[2]=h*I,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2])}(i,l,f,t),!0):(0!==o||1!==u||2!==E)&&s(t,n,e,0,1,2)}e(74784),e(48880),e(20136),(0,o.Su)(),(0,o.Su)(),(0,o.Su)(),(0,o.Su)(),(0,o.Su)();const c=.99619469809,i=(0,o.Su)(),l=(0,o.Su)(),f=(0,o.Su)(),M=(0,o.Su)(),h=(0,o.Su)(),E=[0,0,1,0];var I,S;(S=I||(I={}))[S.NONE=0]="NONE",S[S.CLAMP=1]="CLAMP",S[S.INFINITE_MIN=4]="INFINITE_MIN",S[S.INFINITE_MAX=8]="INFINITE_MAX",I.INFINITE_MIN,I.INFINITE_MAX,I.INFINITE_MAX},48880:(t,n,e)=>{e.d(n,{i4:()=>u});var r=e(53648),o=e(98472),a=e(62484);function u(t,n){const e=(0,o.k)(t,n)/((0,o.l)(t)*(0,o.l)(n));return-(0,r.Uj)(e)}(0,a.Su)(),(0,a.Su)()},20136:(t,n,e)=>{e.d(n,{SW:()=>M,QX:()=>h,Wq:()=>f});var r=e(52324),o=e(68612),a=e(87104),u=e(2620),s=e(85256),c=e(62484),i=e(37008);class l{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&(0,r.o)((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new l(s.Su)}static createVec3f64(){return new l(c.Su)}static createVec4f64(){return new l(i.Su)}static createMat3f64(){return new l(o.Su)}static createMat4f64(){return new l(a.Su)}static createQuatf64(){return new l(u.Su)}get test(){return{length:this._items.length}}}l.createVec2f64();const f=l.createVec3f64(),M=(l.createVec4f64(),l.createMat3f64(),l.createMat4f64()),h=l.createQuatf64()},89560:(t,n,e)=>{e.d(n,{O:()=>o,Y:()=>r});class r{constructor(t,n,e=n){this.data=t,this.size=n,this.stride=e}}class o extends r{constructor(t,n,e,r=!1,o=e){super(t,e,o),this.indices=n,this.exclusive=r}}},4636:(t,n,e)=>{var r;e.d(n,{K:()=>r}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",t.LENGTH="length",t.PREVPOSITION="prevPosition",t.NEXTPOSITION="nextPosition",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMAL2COMPRESSED="normal2Compressed",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))}}]);