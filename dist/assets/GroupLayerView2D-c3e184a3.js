import{e as a,y as l,nQ as d,a as p,D as V,x as y,dq as h,nn as w,as as n}from"./index-84d82762.js";import{r as m}from"./GroupContainer-8cf94e34.js";import{f as v}from"./LayerView2D-715967bf.js";import{u}from"./LayerView-70584726.js";import"./WGLContainer-b78eadcd.js";import"./definitions-19bfb61c.js";import"./VertexArrayObject-5928be90.js";import"./Texture-01146b87.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./vec4f32-0d1b2306.js";import"./color-f709a8e1.js";import"./enums-55085e26.js";import"./number-b10bd8f5.js";import"./ProgramTemplate-5d941873.js";import"./MaterialKey-48941800.js";import"./alignmentUtils-ae955d28.js";import"./utils-a19edd14.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-3143eee9.js";import"./EffectView-8884bcf8.js";import"./earcut-61f7b102.js";let t=class extends u{constructor(i){super(i),this.type="group",this.layerViews=new V}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.handles.add([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),y(()=>this.layer.visibilityMode,()=>this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null)),h),y(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},h)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(i){this._set("layerViews",w(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>{var s;return!!((s=this._findLayerViewForLayer(e))!=null&&s.visible)});return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){n(i)&&(i=this._firstVisibleOnLayerOrder(),n(i)&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map(s=>y(()=>s.visible,r=>this._applyVisibility(()=>{r!==this.visible&&(s.visible=this.visible)},()=>this._applyExclusiveVisibility(r?s:null)),h)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e!=null&&e.visible?e:null))}_applyVisibility(i,e){var s,r;this._hasLayerViewVisibleOverrides()&&(((s=this.layer)==null?void 0:s.visibilityMode)==="inherited"?i():((r=this.layer)==null?void 0:r.visibilityMode)==="exclusive"&&e())}};a([l({cast:d})],t.prototype,"layerViews",null),a([l({readOnly:!0})],t.prototype,"updatingProgress",null),a([l()],t.prototype,"view",void 0),t=a([p("esri.views.layers.GroupLayerView")],t);const b=t;let o=class extends v(b){constructor(){super(...arguments),this.container=new m}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};o=a([p("esri.views.2d.layers.GroupLayerView2D")],o);const k=o;export{k as default};
