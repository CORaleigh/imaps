import{e as s,a as o}from"./index-84d82762.js";import{T as d}from"./color-f709a8e1.js";import{n as a}from"./BaseGraphicContainer-1acfb985.js";import{_ as h}from"./enums-64ab819c.js";let e=class extends a{doRender(r){r.drawPhase===d.HIGHLIGHT&&super.doRender(r)}renderChildren(r){if(this.attributeView.update(),!this.children.some(n=>n.hasData))return;this.attributeView.bindTextures(r.context),super.renderChildren(r);const{painter:i}=r,t=i.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(h.COLOR_BUFFER_BIT),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind()}};e=s([o("esri.views.2d.layers.support.HighlightGraphicContainer")],e);const u=e;export{u as n};
