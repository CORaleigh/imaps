import{dt as F,aB as m,aC as l,aD as $,aE as B,aG as C,aF as M,df as S,d8 as j,dv as q}from"./index-84d82762.js";import{s as y,c as s}from"./sphere-52f8f52c.js";function w(t){return t?{origin:F(t.origin),vector:F(t.vector)}:{origin:m(),vector:m()}}function z(t,r){const n=J.get();return n.origin=t,n.vector=r,n}function N(t,r=w()){return H(t.origin,t.vector,r)}function H(t,r,n=w()){return l(n.origin,t),l(n.vector,r),n}function O(t,r,n=w()){return l(n.origin,t),$(n.vector,r,t),n}function Q(t,r){const n=$(s.get(),r,t.origin),c=B(t.vector,n),g=B(t.vector,t.vector),e=j(c/g,0,1),f=$(s.get(),C(s.get(),t.vector,e),n);return B(f,f)}function R(t,r,n){return I(t,r,0,1,n)}function T(t,r,n){return M(n,t.origin,C(n,t.vector,r))}function I(t,r,n,c,g){const{vector:e,origin:f}=t,a=$(s.get(),r,f),h=B(e,a)/S(e);return C(g,e,j(h,n,c)),M(g,g,t.origin)}function U(t,r){if(G(t,z(r.origin,r.direction),!1,k)){const{tA:n,pB:c,distance2:g}=k;if(n>=0&&n<=1)return g;if(n<0)return q(t.origin,c);if(n>1)return q(M(s.get(),t.origin,t.vector),c)}return null}function V(t,r,n){return!!G(t,r,!0,k)&&(l(n,k.pA),!0)}function G(t,r,n,c){const e=t.origin,f=M(s.get(),e,t.vector),a=r.origin,h=M(s.get(),a,r.vector),u=s.get(),i=s.get();if(u[0]=e[0]-a[0],u[1]=e[1]-a[1],u[2]=e[2]-a[2],i[0]=h[0]-a[0],i[1]=h[1]-a[1],i[2]=h[2]-a[2],Math.abs(i[0])<1e-6&&Math.abs(i[1])<1e-6&&Math.abs(i[2])<1e-6)return!1;const o=s.get();if(o[0]=f[0]-e[0],o[1]=f[1]-e[1],o[2]=f[2]-e[2],Math.abs(o[0])<1e-6&&Math.abs(o[1])<1e-6&&Math.abs(o[2])<1e-6)return!1;const D=u[0]*i[0]+u[1]*i[1]+u[2]*i[2],A=i[0]*o[0]+i[1]*o[1]+i[2]*o[2],P=u[0]*o[0]+u[1]*o[1]+u[2]*o[2],x=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],E=(o[0]*o[0]+o[1]*o[1]+o[2]*o[2])*x-A*A;if(Math.abs(E)<1e-6)return!1;let v=(D*A-P*x)/E,p=(D+A*v)/x;n&&(v=j(v,0,1),p=j(p,0,1));const b=s.get(),d=s.get();return b[0]=e[0]+v*o[0],b[1]=e[1]+v*o[1],b[2]=e[2]+v*o[2],d[0]=a[0]+p*i[0],d[1]=a[1]+p*i[1],d[2]=a[2]+p*i[2],c.tA=v,c.tB=p,c.pA=b,c.pB=d,c.distance2=q(b,d),!0}const k={tA:0,tB:0,pA:m(),pB:m(),distance2:0},J=new y(()=>w());export{I as A,U as B,Q as M,O as b,N as h,R as j,V as k,T as l,H as m,w as v};
