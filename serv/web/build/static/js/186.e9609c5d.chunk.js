"use strict";(self.webpackChunkweb_ui=self.webpackChunkweb_ui||[]).push([[186],{9186:function(e,o,t){t.r(o);var n=t(889),i=(t(6998),t(2791),t(4164),Object.defineProperty),r=function(e,o){return i(e,"name",{value:o,configurable:!0})};function u(e){return{options:e instanceof Function?{render:e}:!0===e?{}:e}}function a(e){var o=e.state.info.options;return(null===o||void 0===o?void 0:o.hoverTime)||500}function m(e,o){var t=e.state.info,i=o.target||o.srcElement;if(i instanceof HTMLElement&&"SPAN"===i.nodeName&&void 0===t.hoverTimeout){var u=i.getBoundingClientRect(),m=r((function(){clearTimeout(t.hoverTimeout),t.hoverTimeout=setTimeout(p,l)}),"onMouseMove"),s=r((function(){n.C.off(document,"mousemove",m),n.C.off(e.getWrapperElement(),"mouseout",s),clearTimeout(t.hoverTimeout),t.hoverTimeout=void 0}),"onMouseOut"),p=r((function(){n.C.off(document,"mousemove",m),n.C.off(e.getWrapperElement(),"mouseout",s),t.hoverTimeout=void 0,f(e,u)}),"onHover"),l=a(e);t.hoverTimeout=setTimeout(p,l),n.C.on(document,"mousemove",m),n.C.on(e.getWrapperElement(),"mouseout",s)}}function f(e,o){var t=e.coordsChar({left:(o.left+o.right)/2,top:(o.top+o.bottom)/2}),n=e.state.info.options,i=n.render||e.getHelper(t,"info");if(i){var r=e.getTokenAt(t,!0);if(r){var u=i(r,n,e,t);u&&s(e,o,u)}}}function s(e,o,t){var i=document.createElement("div");i.className="CodeMirror-info",i.appendChild(t),document.body.appendChild(i);var u=i.getBoundingClientRect(),a=window.getComputedStyle(i),m=u.right-u.left+parseFloat(a.marginLeft)+parseFloat(a.marginRight),f=u.bottom-u.top+parseFloat(a.marginTop)+parseFloat(a.marginBottom),s=o.bottom;f>window.innerHeight-o.bottom-15&&o.top>window.innerHeight-o.bottom&&(s=o.top-f),s<0&&(s=o.bottom);var p,l=Math.max(0,window.innerWidth-m-15);l>o.left&&(l=o.left),i.style.opacity="1",i.style.top=s+"px",i.style.left=l+"px";var v=r((function(){clearTimeout(p)}),"onMouseOverPopup"),c=r((function(){clearTimeout(p),p=setTimeout(d,200)}),"onMouseOut"),d=r((function(){n.C.off(i,"mouseover",v),n.C.off(i,"mouseout",c),n.C.off(e.getWrapperElement(),"mouseout",c),i.style.opacity?(i.style.opacity="0",setTimeout((function(){i.parentNode&&i.parentNode.removeChild(i)}),600)):i.parentNode&&i.parentNode.removeChild(i)}),"hidePopup");n.C.on(i,"mouseover",v),n.C.on(i,"mouseout",c),n.C.on(e.getWrapperElement(),"mouseout",c)}n.C.defineOption("info",!1,(function(e,o,t){if(t&&t!==n.C.Init){var i=e.state.info.onMouseOver;n.C.off(e.getWrapperElement(),"mouseover",i),clearTimeout(e.state.info.hoverTimeout),delete e.state.info}if(o){var r=e.state.info=u(o);r.onMouseOver=m.bind(null,e),n.C.on(e.getWrapperElement(),"mouseover",r.onMouseOver)}})),r(u,"createState"),r(a,"getHoverTime"),r(m,"onMouseOver"),r(f,"onMouseHover"),r(s,"showPopup")}}]);
//# sourceMappingURL=186.e9609c5d.chunk.js.map