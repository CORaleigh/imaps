import{ac as s,aR as p,e as r,y as a,a as m}from"./index-7753bab1.js";import{a as h}from"./BitmapContainer-ed095a6e.js";import{f as n}from"./LayerView2D-b33f1dd0.js";import{v as d}from"./ExportStrategy-63c4b9f7.js";import{u as c}from"./LayerView-cbdf5e80.js";import{i as u}from"./RefreshableLayerView-7454ec77.js";import"./WGLContainer-96eaf2e6.js";import"./definitions-19bfb61c.js";import"./VertexArrayObject-6236f727.js";import"./Texture-280a81f5.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./vec4f32-0d1b2306.js";import"./color-12b7e170.js";import"./enums-55085e26.js";import"./number-b10bd8f5.js";import"./ProgramTemplate-2e0574b1.js";import"./MaterialKey-3f38180b.js";import"./alignmentUtils-ae955d28.js";import"./utils-4f0216af.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-e3ecda87.js";import"./EffectView-9a9cc65b.js";import"./earcut-61f7b102.js";import"./Bitmap-21e425ac.js";let t=class extends u(n(c)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this.declaredClass).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new d({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const H=t;export{H as default};
