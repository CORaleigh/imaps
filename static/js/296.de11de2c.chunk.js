(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[296],{1220:function(t,e,i){"use strict";i.r(e),i.d(e,"DropShadow",(function(){return u}));var r=i(102),s=(i(212),i(241)),a=(i(79),i(195),i(202),i(263),i(174),i(179)),o=(i(216),i(709));const n=[1,0],l=[0,1];class u{constructor(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null)}draw(t,e,i){const{context:s,state:a,painter:u,pixelRatio:h}=t,{materialManager:p}=u,d=this._programDesc,c=e.width,_=e.height,B=[Math.round(c/2),Math.round(_/2)],{blurRadius:f,offsetX:m,offsetY:g,color:F}=i,b=[h*Object(r.h)(m/2),h*Object(r.h)(g/2)];this._createOrResizeResources(t,c,_,B);const w=this._horizontalBlurFBO,T=this._verticalBlurFBO;s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setDepthWriteEnabled(!1),s.setDepthTestEnabled(!1);const O=this._layerFBOTexture;e.copyToTexture(0,0,c,_,0,0,O),this._quad||(this._quad=new o.a(s,[-1,-1,1,-1,-1,1,1,1])),s.setViewport(0,0,B[0],B[1]);const x=this._quad;x.bind(),s.setBlendingEnabled(!1);const v=p.getProgram(t,d.blur,[{name:"radius",value:Math.ceil(f)}]);s.useProgram(v),s.bindFramebuffer(w),s.bindTexture(e.colorTexture,4),v.setUniformMatrix3fv("u_displayViewMat3",a.displayMat3),v.setUniform2fv("u_offset",b),v.setUniform1i("u_colorTexture",4),v.setUniform2fv("u_texSize",B),v.setUniform2fv("u_direction",n),v.setUniform1f("u_sigma",f),x.draw(),s.bindFramebuffer(T),s.bindTexture(w.colorTexture,5),v.setUniformMatrix3fv("u_displayViewMat3",a.displayMat3),v.setUniform2fv("u_offset",[0,0]),v.setUniform1i("u_colorTexture",5),v.setUniform2fv("u_direction",l),x.draw(),s.bindFramebuffer(e),s.setViewport(0,0,c,_);const z=p.getProgram(t,d.composite);s.useProgram(z),s.bindTexture(T.colorTexture,2),z.setUniform1i("u_blurTexture",2),s.bindTexture(O,3),z.setUniform1i("u_layerFBOTexture",3),z.setUniform4fv("u_shadowColor",[F[3]*(F[0]/255),F[3]*(F[1]/255),F[3]*(F[2]/255),F[3]]),x.draw(),s.setBlendingEnabled(!0),s.setStencilTestEnabled(!0),s.setBlendFunction(1,771),x.unbind()}_createOrResizeResources(t,e,i,r){const{context:o}=t;this._horizontalBlurFBO&&this._size[0]===e&&this._size[1]===i||(this._size[0]=e,this._size[1]=i,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(r[0],r[1]):this._horizontalBlurFBO=new s.a(o,{colorTarget:0,depthStencilTarget:0,width:r[0],height:r[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r[0],height:r[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(r[0],r[1]):this._verticalBlurFBO=new s.a(o,{colorTarget:0,depthStencilTarget:0,width:r[0],height:r[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r[0],height:r[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(e,i):this._layerFBOTexture=new a.a(o,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:e,height:i}))}}}}]);
//# sourceMappingURL=296.de11de2c.chunk.js.map