import{ac as s,aR as p,e as r,y as a,a as m}from"./index-84d82762.js";import{a as h}from"./BitmapContainer-0b3d0461.js";import{f as n}from"./LayerView2D-715967bf.js";import{v as d}from"./ExportStrategy-93847eaf.js";import{u as c}from"./LayerView-70584726.js";import{i as u}from"./RefreshableLayerView-f4b3d0b4.js";import"./WGLContainer-b78eadcd.js";import"./definitions-19bfb61c.js";import"./VertexArrayObject-5928be90.js";import"./Texture-01146b87.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./vec4f32-0d1b2306.js";import"./color-f709a8e1.js";import"./enums-55085e26.js";import"./number-b10bd8f5.js";import"./ProgramTemplate-5d941873.js";import"./MaterialKey-48941800.js";import"./alignmentUtils-ae955d28.js";import"./utils-a19edd14.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-3143eee9.js";import"./EffectView-8884bcf8.js";import"./earcut-61f7b102.js";import"./Bitmap-d727c957.js";let t=class extends u(n(c)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this.declaredClass).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new d({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const H=t;export{H as default};
