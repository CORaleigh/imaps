import{e as s,y as t,a as d,T as h,ad as l,aS as o}from"./index-3baec1e8.js";const y=r=>{let e=class extends r{initialize(){this.handles.add(h(()=>this.layer,"refresh",i=>{this.doRefresh(i.dataChanged).catch(a=>{l(a)||o.getLogger(this.declaredClass).error(a)})}),"RefreshableLayerView")}};return s([t()],e.prototype,"layer",void 0),e=s([d("esri.layers.mixins.RefreshableLayerView")],e),e};export{y as i};
