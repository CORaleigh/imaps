import{c9 as l}from"./index-84d82762.js";class h{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function w(r,e){if(!r){e=e||"Assertion";const c=new Error(e).stack;throw new h(`${e} at ${c}`)}}function m(r,e){r||(e=e||"",console.warn("Verify failed: "+e+`
`+new Error("verify").stack))}function p(r,e,c,n){let i,o=(c[0]-r[0])/e[0],t=(n[0]-r[0])/e[0];o>t&&(i=o,o=t,t=i);let u=(c[1]-r[1])/e[1],f=(n[1]-r[1])/e[1];if(u>f&&(i=u,u=f,f=i),o>f||u>t)return!1;u>o&&(o=u),f<t&&(t=f);let s=(c[2]-r[2])/e[2],a=(n[2]-r[2])/e[2];return s>a&&(i=s,s=a,a=i),!(o>a||s>t)&&(a<t&&(t=a),!(t<0))}function E(r,e,c,n,i,o=l()){const t=(n[i]-c[i])*(e[0]-r[0])-(n[0]-c[0])*(e[i]-r[i]),u=(n[0]-c[0])*(r[i]-c[i])-(n[i]-c[i])*(r[0]-c[0]);if(t===0)return!1;const f=u/t;return o[0]=r[0]+f*(e[0]-r[0]),o[1]=r[i]+f*(e[i]-r[i]),!0}function k(r,e){return Math.log(r)/Math.log(e)}function x(r,e,c,n){r[12]=e,r[13]=c,r[14]=n}function y(r){return r[0]===1&&r[1]===0&&r[2]===0&&r[3]===0&&r[4]===0&&r[5]===1&&r[6]===0&&r[7]===0&&r[8]===0&&r[9]===0&&r[10]===1&&r[11]===0&&r[15]===1}export{k as a,m as c,E as f,x as h,p as i,y as l,w as s};
