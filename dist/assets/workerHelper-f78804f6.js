import{y as u,u as c,i as a,c as i,l,p as d,o as m,m as $,T as p,h as b,a as h,b as y,d as E,A as w,O as N,x as T,g as z,w as D,E as F,L as G,B as H,F as O,I as g,U as x,j as A,V as C,M,S as V,k as j,q as k,v as q,z as v,C as B,D as I,G as J,H as K}from"./BufferView-1e8da966.js";import{T as L}from"./InterleavedLayout-6fac11d9.js";function W(t,r){return r.push(t.buffer),{buffer:t.buffer,layout:S(t.layout)}}function X(t){return U(t.layout).createView(t.buffer)}function S(t){const r=new Array;return t.fields.forEach((o,e)=>{const f={...o,constructor:s(o.constructor)};r.push([e,f])}),{stride:t.stride,fields:r,fieldNames:t.fieldNames}}function U(t){const r=L();return r.stride=t.stride,r.fieldNames=t.fieldNames,t.fields.forEach(o=>r.fields.set(o[0],{...o[1],constructor:P(o[1].constructor)})),r}const _=[u,c,a,i,l,d,m,$,p,b,h,y,E,w,N,T,z,D,F,G,H,O,g,x,A,C,M,V,j,k,q,v,B,I,J,K];function s(t){return`${t.ElementType}_${t.ElementCount}`}function P(t){return n.get(t)}const n=new Map;_.forEach(t=>n.set(s(t),t));export{X as D,W as z};
