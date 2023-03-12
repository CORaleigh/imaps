import{j8 as de,j9 as pe,ja as ue,jb as _e,cN as ge,c9 as T,eR as C,ah as w,cs as fe,jc as se,fk as me,jd as xe,cF as D,aB as c,je as ve,c$ as z,ch as ye,fY as re,eJ as Ve,aC as A,cn as Y,et as Ee,dB as G,jf as Te,cx as we,cD as De,jg as Pe,ca as Ae,a1 as Me,I as u,L as ne,dl as Ze,a_ as Re,dI as S,as as d,av as $e,fw as Ce,dd as B,aE as U,fc as q,d3 as b,cg as R,aF as P,jh as ze,ji as F,cf as W,cd as Se,dQ as Ie,aG as Ge,ap as Ue,jj as be,dP as Q}from"./index-7753bab1.js";import{n as Xe}from"./PointSnappingHint-9fd6408b.js";import{p as J,_ as Le,V as $,A as X,B as Oe,Y as L,q as Ye}from"./plane-32e6467c.js";import{a as He,e as K}from"./sphere-89c2d6c4.js";let at=class{draw(e,t){const i=this._getUniqueHints(e),s=this.sortUniqueHints(i),r=[];for(const n of s)n instanceof de&&r.push(this.visualizeIntersectionPoint(n,t)),n instanceof pe&&r.push(this.visualizeLine(n,t)),n instanceof ue&&r.push(this.visualizeParallelSign(n,t)),n instanceof _e&&r.push(this.visualizeRightAngleQuad(n,t)),n instanceof Xe&&r.push(this.visualizePoint(n,t));return ge(r)}sortUniqueHints(e){return e}_getUniqueHints(e){const t=[];for(const i of e){let s=!0;for(const r of t)if(i.equals(r)){s=!1;break}s&&t.push(i)}return t}};var l;(function(o){o[o.Z=0]="Z",o[o.M=1]="M"})(l||(l={}));class Ne{constructor(e){this.spatialReference=e}createVector(){return this._tag(T())}pointToVector(e){return this._tag(C(e.x,e.y))}arrayToVector(e){return this._tag(C(e[0],e[1]))}vectorToArray(e){return[e[0],e[1]]}pointToArray(e){return[e.x,e.y]}vectorToPoint(e,t=new w){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new w){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.hasZ=!1,t.hasM=!1,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return fe(s,e,t,i)}addDelta(e,t,i){e[0]+=t,e[1]+=i}distance(e,t){return se(e,t)}getZ(e,t){return t}hasZ(){return!1}getM(e,t){return t}hasM(){return!1}clone(e){return this._tag(me(e))}copy(e,t){return xe(t,e)}fromXYZ(e){return this._tag(C(e[0],e[1]))}toXYZ(e,t=c()){return D(t,e[0],e[1],0)}pointToXYZ(e,t=c()){return D(t,e.x,e.y,0)}equals(e,t){return ve(e,t)}_tag(e){return e}}class ee{constructor(e,t){this._valueType=e,this.spatialReference=t}createVector(){return this._tag(c())}pointToVector(e){return this._tag(z(e.x,e.y,this._valueType===l.Z?e.z:e.m))}arrayToVector(e){return this._tag(z(e[0],e[1],e[2]||0))}vectorToArray(e){return[e[0],e[1],e[2]]}pointToArray(e){return this._valueType===l.Z?[e.x,e.y,e.z]:[e.x,e.y,e.m]}vectorToPoint(e,t=new w){return t.x=e[0],t.y=e[1],t.z=this._valueType===l.Z?e[2]:void 0,t.m=this._valueType===l.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new w){return t.x=e[0],t.y=e[1],t.z=this._valueType===l.Z?e[2]:void 0,t.m=this._valueType===l.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){const i=this._valueType===l.Z,s=this._valueType===l.M;return t.x=e[0],t.y=e[1],t.z=i?e[2]:void 0,t.m=s?e[2]:void 0,t.hasZ=i,t.hasM=s,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return ye(s,e,t,i)}addDelta(e,t,i,s){e[0]+=t,e[1]+=i,this._valueType===l.Z&&(e[2]+=s)}distance(e,t){return this._valueType===l.Z?re(e,t):se(e,t)}getZ(e,t){return this._valueType===l.Z?e[2]:t}hasZ(){return this._valueType===l.Z}getM(e,t){return this._valueType===l.M?e[2]:t}hasM(){return this._valueType===l.M}clone(e){return this._tag(Ve(e))}copy(e,t){return A(t,e)}fromXYZ(e,t=0,i=0){return this._tag(z(e[0],e[1],this._valueType===l.Z?e.length>2?e[2]:t:i))}toXYZ(e,t=c()){return D(t,e[0],e[1],this._valueType===l.Z?e[2]:0)}pointToXYZ(e,t=c()){return D(t,e.x,e.y,this._valueType===l.Z?e.z??0:0)}equals(e,t){return Y(e,t)}_tag(e){return e}}class ke{constructor(e){this.spatialReference=e}createVector(){return this._tag(Ee())}pointToVector(e){return this._tag(G(e.x,e.y,e.z,e.m))}arrayToVector(e){return this._tag(G(e[0],e[1],e[2]||0,e[3]||0))}vectorToArray(e){return[e[0],e[1],e[2],e[3]]}pointToArray(e){return[e.x,e.y,e.z,e.m]}vectorToPoint(e,t=new w){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new w){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.hasZ=!0,t.hasM=!0,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return Te(s,e,t,i)}addDelta(e,t,i,s){e[0]+=t,e[1]+=i,e[2]+=s}distance(e,t){return re(e,t)}getZ(e){return e[2]}hasZ(){return!0}getM(e){return e[3]}hasM(){return!0}clone(e){return this._tag(we(e))}copy(e,t){return De(t,e)}fromXYZ(e,t=0,i=0){return this._tag(G(e[0],e[1],e.length>2?e[2]:t,i))}toXYZ(e,t=c()){return D(t,e[0],e[1],e[2])}pointToXYZ(e,t=c()){return D(t,e.x,e.y,e.z??0)}equals(e,t){return Pe(e,t)}_tag(e){return e}}function je(o,e,t){return o&&e?new ke(t):e?new ee(l.M,t):o?new ee(l.Z,t):new Ne(t)}function Be(o,e){if(!e.supported)return;let t=1/0,i=-1/0;const s=e.upperBoundX-e.lowerBoundX;o.forEach(n=>{let a=n.pos[0];for(;a<e.lowerBoundX;)a+=s;for(;a>e.upperBoundX;)a-=s;t=Math.min(t,a),i=Math.max(i,a),n.pos[0]=a});const r=i-t;s-r<r&&o.forEach(n=>{n.pos[0]<0&&(n.pos[0]+=s)})}function qe(o,e){const t=Ae(o);return e===Me.Global&&t?{supported:!0,lowerBoundX:t.valid[0],upperBoundX:t.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}let M=class{constructor(e){this.component=e,this.leftEdge=null,this.rightEdge=null,this.type="vertex",this.index=null}get pos(){return this._pos}set pos(e){this._pos=e,this.component.unnormalizeVertexPositions()}};class y{constructor(e,t,i){this.component=e,this.leftVertex=t,this.rightVertex=i,this.type="edge",t.rightEdge=this,i.leftEdge=this}}class O{constructor(e,t){this._spatialReference=e,this._viewingMode=t,this.vertices=[],this.edges=[],this.index=null}unnormalizeVertexPositions(){this.vertices.length<=1||Be(this.vertices,qe(this._spatialReference,this._viewingMode))}updateVertexIndex(e,t){if(this.vertices.length===0)return;const i=this.vertices[0];let s=null,r=e,n=t;do s=r,s.index=n++,r=s.rightEdge?s.rightEdge.rightVertex:null;while(r!=null&&r!==i);s.leftEdge&&s!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(s),this.vertices.length-1)}getFirstVertex(){return this.vertices.length===0?null:this.vertices[0]}getLastVertex(){return this.vertices.length===0?null:this.vertices[this.vertices.length-1]}isClosed(){return this.vertices.length>2&&this.vertices[0].leftEdge!==null}swapVertices(e,t){const i=this.vertices[e];this.vertices[e]=this.vertices[t],this.vertices[t]=i}iterateVertices(e){if(this.vertices.length===0)return;const t=this.vertices[0];let i=t;do e(i,i.index),i=u(i.rightEdge)?i.rightEdge.rightVertex:null;while(i!==t&&i!=null)}}class N extends ne{constructor(e,t){super(),this.type=e,this.coordinateHelper=t,this._geometry=null,this._dirty=!0,this.components=[]}get geometry(){if(this._dirty){switch(this.type){case"point":this._geometry=this._toPoint();break;case"polyline":this._geometry=this._toPolyline();break;case"polygon":this._geometry=this._toPolygon()}this._dirty=!1}return this._geometry}get spatialReference(){return this.coordinateHelper.spatialReference}notifyChanges(e){this._dirty=!0,this.emit("change",e)}_toPoint(){return this.components.length===0||this.components[0].vertices.length===0?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}_toPolyline(){const e=[],t=this.coordinateHelper.vectorToArray;for(const i of this.components){if(i.vertices.length<1)continue;const s=[];let r=i.vertices.find(a=>a.leftEdge==null);const n=r;do s.push(t(r.pos)),r=r.rightEdge?r.rightEdge.rightVertex:null;while(r&&r!==n);e.push(s)}return new Ze({paths:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}_toPolygon(){const e=[],t=this.coordinateHelper.vectorToArray;for(const i of this.components){if(i.vertices.length<1)continue;const s=[],r=i.vertices[0];let n=r;const a=n;do s.push(t(n.pos)),n=u(n.rightEdge)?n.rightEdge.rightVertex:null;while(n&&n!==a);i.isClosed()&&s.push(t(r.pos)),e.push(s)}return new Re({rings:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}static fromGeometry(e,t){const i=e.spatialReference,s=je(e.hasZ,e.hasM,i),r=new N(e.type,s);switch(e.type){case"polygon":{const n=e.rings;for(let a=0;a<n.length;++a){const _=n[a],h=new O(i,t);h.index=a;const V=_.length>2&&S(_[0],_[_.length-1]),E=V?_.length-1:_.length;for(let p=0;p<E;++p){const f=s.arrayToVector(_[p]),x=new M(h);h.vertices.push(x),x.pos=f,x.index=p}const g=h.vertices.length-1;for(let p=0;p<g;++p){const f=h.vertices[p],x=h.vertices[p+1],le=new y(h,f,x);h.edges.push(le)}if(V){const p=new y(h,h.vertices[h.vertices.length-1],h.vertices[0]);h.edges.push(p)}r.components.push(h)}break}case"polyline":{const n=e.paths;for(let a=0;a<n.length;++a){const _=n[a],h=new O(i,t);h.index=a;const V=_.length;for(let g=0;g<V;++g){const p=s.arrayToVector(_[g]),f=new M(h);h.vertices.push(f),f.pos=p,f.index=g}const E=h.vertices.length-1;for(let g=0;g<E;++g){const p=h.vertices[g],f=h.vertices[g+1],x=new y(h,p,f);h.edges.push(x)}r.components.push(h)}break}case"point":{const n=new O(i,t);n.index=0;const a=new M(n);a.index=0,a.pos=s.pointToVector(e),n.vertices.push(a),r.components.push(n);break}}return r}}var v;(function(o){o[o.NEW_STEP=0]="NEW_STEP",o[o.ACCUMULATE_STEPS=1]="ACCUMULATE_STEPS"})(v||(v={}));class Fe{constructor(e,t,i){this._editGeometry=e,this._component=t,this._pos=i,this._addedVertex=null,this._originalEdge=null,this._left=null,this._right=null}apply(){let e="redo";d(this._addedVertex)&&(e="apply",this._addedVertex=new M(this._component));const t=this._component.getLastVertex();if(d(t))this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,this._addedVertex.index=0;else{let i=null;t.rightEdge&&(this._originalEdge=t.rightEdge,i=this._originalEdge.rightVertex,this._component.edges.splice(this._component.edges.indexOf(this._originalEdge),1)),this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,d(this._left)&&(this._left=new y(this._component,t,this._addedVertex)),this._component.edges.push(this._left),t.rightEdge=this._left,u(this._originalEdge)&&u(i)&&(d(this._right)&&(this._right=new y(this._component,this._addedVertex,i)),this._component.edges.push(this._right),i.leftEdge=this._right),this._component.updateVertexIndex(this._addedVertex,t.index+1)}this._editGeometry.notifyChanges({operation:e,addedVertices:[this._addedVertex]})}undo(){d(this._addedVertex)||(this._component.vertices.splice(this._component.vertices.indexOf(this._addedVertex),1),u(this._left)&&(this._component.edges.splice(this._component.edges.indexOf(this._left),1),this._left.leftVertex.rightEdge=null),u(this._right)&&(this._component.edges.splice(this._component.edges.indexOf(this._right),1),this._right.rightVertex.leftEdge=null),u(this._originalEdge)&&(this._component.edges.push(this._originalEdge),this._originalEdge.leftVertex.rightEdge=this._originalEdge,this._originalEdge.rightVertex.leftEdge=this._originalEdge),u(this._left)?this._component.updateVertexIndex(this._left.leftVertex,this._left.leftVertex.index):this._component.updateVertexIndex(this._addedVertex,0),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this._addedVertex]}))}accumulate(){return!1}}let We=class oe{constructor(e,t,i){this._editGeometry=e,this._vertices=t,this.operation=i,this._undone=!1}apply(){this._vertices.forEach(e=>this.operation.apply(e)),this._editGeometry.components.forEach(e=>e.unnormalizeVertexPositions()),this._editGeometry.notifyChanges({operation:this._undone?"redo":"apply",updatedVertices:this._vertices})}undo(){this._vertices.forEach(e=>this.operation.undo(e)),this._editGeometry.notifyChanges({operation:"undo",updatedVertices:this._vertices}),this._undone=!0}canAccumulate(e){if(this._undone||e._vertices.length!==this._vertices.length)return!1;for(let t=0;t<e._vertices.length;++t)if(e._vertices[t]!==this._vertices[t])return!1;return this.operation.canAccumulate(e.operation)}accumulate(e){return!!(e instanceof oe&&this.canAccumulate(e))&&(this._vertices.forEach(t=>this.operation.accumulate(t,e.operation)),this.operation.accumulateParams(e.operation),this._editGeometry.components.forEach(t=>t.unnormalizeVertexPositions()),this._editGeometry.notifyChanges({operation:"apply",updatedVertices:this._vertices}),!0)}};var m;(function(o){o[o.CUMULATIVE=0]="CUMULATIVE",o[o.REPLACE=1]="REPLACE"})(m||(m={}));let Qe=class{constructor(e,t,i=0){this._editGeometry=e,this._vertices=t,this._minNumberOfVertices=i,this.removedVertices=null}apply(){let e="redo";if(this.removedVertices==null){const t=this.removedVertices=[];this._vertices.forEach(i=>{const s=this._removeVertex(i);u(s)&&t.push(s)}),e="apply"}else this.removedVertices.forEach(t=>{this._removeVertex(t.removedVertex)});this._editGeometry.notifyChanges({operation:e,removedVertices:this._vertices})}undo(){var e;(e=this.removedVertices)==null||e.forEach(t=>{this._undoRemoveVertex(t)}),this._editGeometry.notifyChanges({operation:"undo",addedVertices:this._vertices})}accumulate(){return!1}_removeVertex(e){const t=e.component;if(t.vertices.length<=this._minNumberOfVertices)return null;const i={removedVertex:e,createdEdge:null},s=e.leftEdge,r=e.rightEdge;return t.vertices.splice(t.vertices.indexOf(e),1),s&&(t.edges.splice(t.edges.indexOf(s),1),s.leftVertex.rightEdge=null),r&&(t.edges.splice(t.edges.indexOf(r),1),r.rightVertex.leftEdge=null),e.index===0&&r&&this._vertices.length>0&&t.swapVertices(t.vertices.indexOf(r.rightVertex),0),s&&r&&(i.createdEdge=new y(t,s.leftVertex,r.rightVertex),t.edges.push(i.createdEdge)),r&&t.updateVertexIndex(r.rightVertex,r.rightVertex.index-1),i}_undoRemoveVertex(e){const t=e.removedVertex,i=e.removedVertex.component,s=t.leftEdge,r=t.rightEdge;e.createdEdge&&i.edges.splice(i.edges.indexOf(e.createdEdge),1),i.vertices.push(t),s&&(i.edges.push(s),s.leftVertex.rightEdge=s),r&&(i.edges.push(r),r.rightVertex.leftEdge=r),i.updateVertexIndex(t,t.index)}};class Je{constructor(e,t,i){this._editGeometry=e,this._edge=t,this._t=i,this.createdVertex=null,this._left=null,this._right=null}apply(){let e="redo";const t=this._edge,i=t.component,s=t.leftVertex,r=t.rightVertex;i.edges.splice(i.edges.indexOf(t),1),d(this.createdVertex)&&(e="apply",this.createdVertex=new M(t.component)),i.vertices.push(this.createdVertex),this.createdVertex.pos=this._editGeometry.coordinateHelper.lerp(t.leftVertex.pos,t.rightVertex.pos,this._t,this._editGeometry.coordinateHelper.createVector()),d(this._left)&&(this._left=new y(i,s,this.createdVertex)),this._left.leftVertex.leftEdge?i.edges.push(this._left):i.edges.unshift(this._left),s.rightEdge=this._left,d(this._right)&&(this._right=new y(i,this.createdVertex,r)),i.edges.push(this._right),r.leftEdge=this._right,i.updateVertexIndex(this.createdVertex,s.index+1),this._editGeometry.notifyChanges({operation:e,addedVertices:[this.createdVertex]})}undo(){if(d(this.createdVertex)||d(this._left)||d(this._right))return null;const e=this._edge,t=e.component,i=this.createdVertex.leftEdge,s=this.createdVertex.rightEdge,r=i==null?void 0:i.leftVertex,n=s==null?void 0:s.rightVertex;t.vertices.splice(t.vertices.indexOf(this.createdVertex),1),t.edges.splice(t.edges.indexOf(this._left),1),t.edges.splice(t.edges.indexOf(this._right),1),this._edge.leftVertex.leftEdge?t.edges.push(this._edge):t.edges.unshift(this._edge),r&&(r.rightEdge=e),n&&(n.leftEdge=e),r&&t.updateVertexIndex(r,r.index),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this.createdVertex]})}accumulate(){return!1}}let Ke=class ae{constructor(e,t,i){this._editGeometry=e,this._vertex=t,this._pos=i}apply(){const e=d(this._originalPosition);e&&(this._originalPosition=this._vertex.pos),this._apply(e?"apply":"redo")}undo(){this._vertex.pos=$e(this._originalPosition),this._editGeometry.notifyChanges({operation:"undo",updatedVertices:[this._vertex]})}accumulate(e){return e instanceof ae&&e._vertex===this._vertex&&(this._pos=e._pos,this._apply("apply"),!0)}_apply(e){this._vertex.pos=this._pos,this._editGeometry.components.forEach(t=>t.unnormalizeVertexPositions()),this._editGeometry.notifyChanges({operation:e,updatedVertices:[this._vertex]})}};class et{constructor(e,t){this._editGeometry=e,this._component=t,this._createdEdge=null}apply(){let e="redo";if(d(this._createdEdge)){e="apply";const t=this._component.getFirstVertex(),i=this._component.getLastVertex();if(this._component.isClosed()||this._component.vertices.length<3||d(t)||d(i))return;this._createdEdge=new y(this._component,i,t)}this._createdEdge.leftVertex.rightEdge=this._createdEdge,this._createdEdge.rightVertex.leftEdge=this._createdEdge,this._component.edges.push(this._createdEdge),this._editGeometry.notifyChanges({operation:e})}undo(){d(this._createdEdge)||(Ce(this._component.edges,this._createdEdge),this._createdEdge.leftVertex.rightEdge=null,this._createdEdge.rightVertex.leftEdge=null,this._editGeometry.notifyChanges({operation:"undo"}))}accumulate(){return!1}}let tt=class he{constructor(e,t,i,s){this._helper=e,this.dx=t,this.dy=i,this.dz=s}_move(e,t,i,s){this._helper.addDelta(e.pos,t,i,s)}apply(e){this._move(e,this.dx,this.dy,this.dz)}undo(e){this._move(e,-this.dx,-this.dy,-this.dz)}canAccumulate(e){return e instanceof he}accumulate(e,t){this._move(e,t.dx,t.dy,t.dz)}accumulateParams(e){this.dx+=e.dx,this.dy+=e.dy,this.dz+=e.dz}};class I{get plane(){return this._plane}get requiresSplitEdgeLeft(){return!this._left.isOriginalDirection}get requiresSplitEdgeRight(){return!this._right.isOriginalDirection}get edgeDirection(){return this._edgeDirection}constructor(e,t,i,s=0,r=Z.IMMEDIATE){this._helper=e,this._planeType=t,this._edge=i,this.distance=s,this._plane=J(),this._offsetPlane=J(),this._minDistance=-1/0,this._maxDistance=1/0,this._selectedArrow=1,r===Z.IMMEDIATE&&this._initialize()}_initialize(){this._initializeNeighbors(),this._initializePlane(),this._initializeDistanceConstraints()}_initializeNeighbors(){var r,n,a,_;const e=this._toXYZ(this._edge.leftVertex.pos),t=this._toXYZ((n=(r=this._edge.leftVertex.leftEdge)==null?void 0:r.leftVertex)==null?void 0:n.pos),i=this._toXYZ(this._edge.rightVertex.pos),s=this._toXYZ((_=(a=this._edge.rightVertex.rightEdge)==null?void 0:a.rightVertex)==null?void 0:_.pos);this._edgeDirection=B(c(),e,i),this._left=this._computeNeighbor(e,t,this._edgeDirection),this._right=this._computeNeighbor(i,s,this._edgeDirection)}_toXYZ(e){return u(e)?this._helper.toXYZ(e):null}_pointToXYZ(e){return this._toXYZ(this._helper.pointToVector(e))}_computeNeighbor(e,t,i){if(d(t))return{start:e,end:t,direction:z(-i[1],i[0],0),isOriginalDirection:!0};const s=B(c(),e,t),r=!this._passesBisectingAngleThreshold(s,i);return{start:e,end:t,direction:r?this._bisectVectorsPerpendicular(i,s):s,isOriginalDirection:!r}}_passesBisectingAngleThreshold(e,t){const i=Math.abs(He(t,e));return i>=te&&i<=Math.PI-te}_bisectVectorsPerpendicular(e,t){const i=U(e,t)<0?e:q(c(),e),s=Math.abs(U(i,t));if(!(s<ie||s>1-ie))return this._bisectDirection(i,t);const r=b(c(),i,[0,0,1]);return R(r,r)}_bisectDirection(e,t){const i=P(c(),e,t);return R(i,i)}_initializePlane(){const e=this._computeNormalDirection(this._left),t=this._computeNormalDirection(this._right);U(e,t)<0&&q(t,t),Le(this._left.start,this._bisectDirection(e,t),this._plane)}_computeNormalDirection(e){const t=b(c(),e.direction,this._edgeDirection);R(t,t);const i=b(c(),this._edgeDirection,t);return this._planeType===H.XY&&(i[2]=0),R(i,i)}_initializeDistanceConstraints(){u(this._left.end)&&!this.requiresSplitEdgeLeft&&this._updateDistanceConstraint($(this._plane,this._left.end)),u(this._right.end)&&!this.requiresSplitEdgeRight&&this._updateDistanceConstraint($(this._plane,this._right.end)),this._updateIntersectDistanceConstraint(this._plane)}_updateDistanceConstraint(e){e<=0&&(this._minDistance=Math.max(this._minDistance,e)),e>=0&&(this._maxDistance=Math.min(this._maxDistance,e))}_updateIntersectDistanceConstraint(e){const t=L(e),i=this._edgeDirection,s=P(c(),this._left.start,this._left.direction),r=P(c(),this._right.start,this._right.direction),n=this._pointInBasis2D(T(),t,i,this._left.start),a=this._pointInBasis2D(T(),t,i,s),_=this._pointInBasis2D(T(),t,i,this._right.start),h=this._pointInBasis2D(T(),t,i,r),[V]=ze({start:a,end:n,type:F.LINE},{start:h,end:_,type:F.LINE});if(!V)return;const E=W(T(),n,a);Se(E,E);const g=W(T(),V,a),p=Ie(E,g),f=P(c(),s,Ge(c(),this._left.direction,-p)),x=$(e,f);this._updateDistanceConstraint(x)}_pointInBasis2D(e,t,i,s){return e[0]=K(t,s),e[1]=K(i,s),e}_offset(e,t){Number.isFinite(this._minDistance)&&(t=Math.max(this._minDistance,t)),Number.isFinite(this._maxDistance)&&(t=Math.min(this._maxDistance,t)),X(this._offsetPlane,this._plane),this._offsetPlane[3]-=t;const i=(r,n,a)=>u(n)&&Ye(this._offsetPlane,r,P(c(),r,n),a),s=c();(e===this._edge.leftVertex?i(this._left.start,this._left.direction,s):i(this._right.start,this._right.direction,s))&&this._helper.copy(this._helper.fromXYZ(s,void 0,this._helper.getM(e.pos)),e.pos)}selectArrowFromStartPoint(e){this._selectedArrow=Oe(this.plane,this._pointToXYZ(e))?1:-1}get selectedArrow(){return this._selectedArrow}signedDistanceToPoint(e){return $(this.plane,this._pointToXYZ(e))}apply(e){this._offset(e,this.distance)}undo(e){this._offset(e,0)}canAccumulate(e){return e instanceof I&&this._edge.leftVertex.index===e._edge.leftVertex.index&&this._edge.rightVertex.index===e._edge.rightVertex.index&&this._edge.component===e._edge.component&&this._maybeEqualsVec3(this._left.direction,e._left.direction)&&this._maybeEqualsVec3(this._right.direction,e._right.direction)&&Y(L(this._plane),L(e._plane))}accumulate(e,t){const i=this._plane[3]-t._plane[3]+t.distance;this._offset(e,i)}accumulateParams(e){const t=e.distance-e._plane[3];this.distance=t+this._plane[3]}clone(){const e=new I(this._helper,this._planeType,this._edge,this.distance,Z.DEFERRED);return X(e._plane,this._plane),X(e._offsetPlane,this._offsetPlane),e._maxDistance=this._maxDistance,e._minDistance=this._minDistance,e._left=this._cloneNeighbor(this._left),e._right=this._cloneNeighbor(this._right),e._edgeDirection=A(c(),this._edgeDirection),e}_maybeEqualsVec3(e,t){return d(e)&&d(t)||u(e)&&u(t)&&Y(e,t)}_cloneNeighbor({start:e,end:t,direction:i,isOriginalDirection:s}){return{start:A(c(),e),end:u(t)?A(c(),t):null,direction:A(c(),i),isOriginalDirection:s}}}const te=Ue(15),ie=.001;var H,Z;(function(o){o[o.XYZ=0]="XYZ",o[o.XY=1]="XY"})(H||(H={})),function(o){o[o.IMMEDIATE=0]="IMMEDIATE",o[o.DEFERRED=1]="DEFERRED"}(Z||(Z={}));class k{constructor(e,t,i=m.CUMULATIVE){this.origin=e,this.angle=t,this._accumulationType=i}_rotate(e,t){be(e.pos,e.pos,this.origin,t)}apply(e){this._rotate(e,this.angle)}undo(e){this._rotate(e,-this.angle)}canAccumulate(e){return e instanceof k&&S(this.origin,e.origin)}accumulate(e,t){const i=t._accumulationType===m.REPLACE;this._rotate(e,i?t.angle-this.angle:t.angle)}accumulateParams(e){const t=e._accumulationType===m.REPLACE;this.angle=t?e.angle:this.angle+e.angle}}class j{constructor(e,t,i,s,r=m.CUMULATIVE){this.origin=e,this.axis1=t,this.factor1=i,this.factor2=s,this._accumulationType=r,this.axis2=C(t[1],-t[0])}_scale(e,t,i){Q(e.pos,e.pos,this.origin,this.axis1,t),Q(e.pos,e.pos,this.origin,this.axis2,i)}apply(e){this._scale(e,this.factor1,this.factor2)}undo(e){this._scale(e,1/this.factor1,1/this.factor2)}canAccumulate(e){return e instanceof j&&S(this.origin,e.origin)&&S(this.axis1,e.axis1)}accumulate(e,t){t._accumulationType===m.REPLACE?this._scale(e,t.factor1/this.factor1,t.factor2/this.factor2):this._scale(e,t.factor1,t.factor2)}accumulateParams(e){const t=e._accumulationType===m.REPLACE;this.factor1=t?e.factor1:this.factor1*e.factor1,this.factor2=t?e.factor2:this.factor2*e.factor2}}class it{constructor(){this._operations=[],this._closed=!1}close(){this._closed=!0}apply(){for(const e of this._operations)e.apply()}undo(){for(let e=this._operations.length-1;e>=0;e--)this._operations[e].undo()}accumulate(e){if(this._closed)return!1;const t=this._operations.length?this._operations[this._operations.length-1]:null;return t&&t.accumulate(e)||(this._operations.push(e),e.apply()),!0}}class ce extends ne{constructor(e){super(),this.data=e,this._undoStack=[],this._redoStack=[],this._listener=this.data.on("change",t=>{t.addedVertices&&this.emit("vertex-add",{type:"vertex-add",vertices:t.addedVertices,operation:t.operation}),t.removedVertices&&this.emit("vertex-remove",{type:"vertex-remove",vertices:t.removedVertices,operation:t.operation}),t.updatedVertices&&this.emit("vertex-update",{type:"vertex-update",vertices:t.updatedVertices,operation:t.operation})})}destroy(){this._listener.remove()}splitEdge(e,t){return this._apply(new Je(this.data,e,t))}updateVertices(e,t,i=v.ACCUMULATE_STEPS){return this._apply(new We(this.data,e,t),i)}moveVertices(e,t,i,s,r=v.ACCUMULATE_STEPS){return this.updateVertices(e,new tt(this.data.coordinateHelper,t,i,s),r)}scaleVertices(e,t,i,s,r,n=v.ACCUMULATE_STEPS,a=m.CUMULATIVE){return this.updateVertices(e,new j(t,i,s,r,a),n)}rotateVertices(e,t,i,s=v.ACCUMULATE_STEPS,r=m.CUMULATIVE){return this.updateVertices(e,new k(t,i,r),s)}removeVertices(e){return this._apply(new Qe(this.data,e,this._minNumVerticesPerType))}appendVertex(e){return this.data.components.length===0?null:this._apply(new Fe(this.data,this.data.components[0],e))}setVertexPosition(e,t){return this._apply(new Ke(this.data,e,t))}offsetEdge(e,t,i,s=v.ACCUMULATE_STEPS){return this.updateVertices([t.leftVertex,t.rightVertex],new I(this.data.coordinateHelper,e,t,i),s)}closeComponent(e){return this.data.components.includes(e)?this._apply(new et(this.data,e)):null}canRemoveVertex(){return this.data.components[0].vertices.length>this._minNumVerticesPerType}createUndoGroup(){const e=new it;return this._apply(e),{remove:()=>e.close()}}undo(){if(this._undoStack.length>0){const e=this._undoStack.pop();return e.undo(),this._redoStack.push(e),e}return null}redo(){if(this._redoStack.length>0){const e=this._redoStack.pop();return e.apply(),this._undoStack.push(e),e}return null}get canUndo(){return this._undoStack.length>0}get canRedo(){return this._redoStack.length>0}get lastOperation(){return this._undoStack.length>0?this._undoStack[this._undoStack.length-1]:null}get _minNumVerticesPerType(){switch(this.data.type){case"point":return 1;case"polyline":return 2;case"polygon":return 3;default:return 0}}_apply(e,t=v.ACCUMULATE_STEPS){return t!==v.NEW_STEP&&!d(this.lastOperation)&&this.lastOperation.accumulate(e)||(e.apply(),this._undoStack.push(e),this._redoStack=[]),e}static fromGeometry(e,t){return new ce(N.fromGeometry(e,t))}}class dt{constructor(e){this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.selfSnappingZ=null,this.editGeometryOperations=e.editGeometryOperations,this.elevationInfo=e.elevationInfo,this.pointer=e.pointer,this.vertexHandle=e.vertexHandle,this.excludeFeature=e.excludeFeature,this.visualizer=e.visualizer,this.selfSnappingZ=e.selfSnappingZ}get coordinateHelper(){return this.editGeometryOperations.data.coordinateHelper}get spatialReference(){return this.coordinateHelper.spatialReference}}export{H as A,v as E,I as P,ce as V,dt as a,tt as b,j as c,m as e,N as g,O as p,at as r,k as s,We as t,je as w};
