(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[222],{1181:function(t,e,a){"use strict";a.r(e);var i=a(7),n=a.n(i),r=a(16),s=a(2),u=a(3),c=a(4),h=a(5),o=a(0),p=(a(14),a(12)),d=(a(17),a(1)),y=a(8),f=(a(11),a(18),a(19),a(24)),b=a(439),l=a(845),v=a(933),m=a(846),g=a(949),j=p.a.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D"),O=function(t){Object(c.a)(a,t);var e=Object(h.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"hitTest",value:function(){return null}},{key:"update",value:function(t){this.strategy.update(t).catch((function(t){Object(f.m)(t)||j.error(t)})),this.notifyChange("updating")}},{key:"attach",value:function(){this._bitmapContainer=new v.a,this.container.addChild(this._bitmapContainer),this.strategy=new g.a({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}},{key:"detach",value:function(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"fetchBitmapData",value:function(t,e,a){return this.layer.fetchImage(t,e,a,{timestamp:this.refreshTimestamp})}},{key:"doRefresh",value:function(){var t=Object(r.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.requestUpdate();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}}]),a}(Object(b.a)(Object(m.a)(l.a)));Object(o.a)([Object(d.b)()],O.prototype,"strategy",void 0),Object(o.a)([Object(d.b)()],O.prototype,"updating",void 0);var k=O=Object(o.a)([Object(y.a)("esri.views.2d.layers.BaseDynamicLayerView2D")],O);e.default=k}}]);
//# sourceMappingURL=222.68dd7ca9.chunk.js.map