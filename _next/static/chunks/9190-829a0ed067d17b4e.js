(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9190],{40695:function(e,t,n){"use strict";var r=n(1413),i=n(67294),a=n(47612),c=n(7918),o=function(e,t){return i.createElement(c.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a.Z}))};o.displayName="CheckCircleOutlined",t.Z=i.forwardRef(o)},96159:function(e,t,n){"use strict";n.d(t,{Tm:function(){return a},l$:function(){return i}});var r=n(67294),i=r.isValidElement;function a(e,t){return i(e)?r.cloneElement(e,"function"==typeof t?t(e.props||{}):t):e}},68349:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r,i=n(15671),a=n(43144),c=n(97326),o=n(32531),s=n(73568),l=n(67294),u=n(44958),d=n(42550),f=n(75164),v=0,p={};function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=v++,r=t;return p[n]=(0,f.Z)(function t(){(r-=1)<=0?(e(),delete p[n]):p[n]=(0,f.Z)(t)}),n}m.cancel=function(e){void 0!==e&&(f.Z.cancel(p[e]),delete p[e])},m.ids=p;var h=n(61975),x=n(96159);function y(e){return!e||null===e.offsetParent||e.hidden}var g=function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,i.Z)(this,n),e=t.apply(this,arguments),e.containerRef=l.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,n){if(!(!t||y(t)||t.className.indexOf("-leave")>=0)){var i,a,o,s=e.props.insertExtraNode;e.extraNode=document.createElement("div");var l=(0,c.Z)(e).extraNode,d=e.context.getPrefixCls;l.className="".concat(d(""),"-click-animating-node");var f=e.getAttributeName();if(t.setAttribute(f,"true"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&(!(i=(n||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/))||!i[1]||!i[2]||!i[3]||!(i[1]===i[2]&&i[2]===i[3]))&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n){l.style.borderColor=n;var v=(null===(a=t.getRootNode)||void 0===a?void 0:a.call(t))||t.ownerDocument,p=v instanceof Document?v.body:null!==(o=v.firstChild)&&void 0!==o?o:v;r=(0,u.hq)("\n      [".concat(d(""),"-click-animating-without-extra-node='true']::after, .").concat(d(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),"antd-wave",{csp:e.csp,attachTo:p})}s&&t.appendChild(l),["transition","animation"].forEach(function(n){t.addEventListener("".concat(n,"start"),e.onTransitionStart),t.addEventListener("".concat(n,"end"),e.onTransitionEnd)})}},e.onTransitionStart=function(t){if(!e.destroyed){var n=e.containerRef.current;t&&t.target===n&&!e.animationStart&&e.resetEffect(n)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(!(!t||!t.getAttribute||t.getAttribute("disabled")||t.className.indexOf("disabled")>=0)){var n=function(n){if(!("INPUT"===n.target.tagName||y(n.target))){e.resetEffect(t);var r=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout(function(){return e.onClick(t,r)},0),m.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=m(function(){e.animationStart=!1},10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,r=e.props.children;if(e.csp=n,!l.isValidElement(r))return r;var i=e.containerRef;return(0,d.Yr)(r)&&(i=(0,d.sQ)(r.ref,e.containerRef)),(0,x.Tm)(r,{ref:i})},e}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var e=this.containerRef.current;e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var e=this.context.getPrefixCls;return this.props.insertExtraNode?"".concat(e(""),"-click-animating"):"".concat(e(""),"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(e){var t=this;if(e&&e!==this.extraNode&&e instanceof Element){var n=this.props.insertExtraNode,i=this.getAttributeName();e.setAttribute(i,"false"),r&&(r.innerHTML=""),n&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),["transition","animation"].forEach(function(n){e.removeEventListener("".concat(n,"start"),t.onTransitionStart),e.removeEventListener("".concat(n,"end"),t.onTransitionEnd)})}}},{key:"render",value:function(){return l.createElement(h.C,null,this.renderWave)}}]),n}(l.Component);g.contextType=h.E_},94594:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(87462),i=n(4942),a=n(67294),c=n(97685),o=n(91),s=n(94184),l=n.n(s),u=n(3129),d=n(15105),f=a.forwardRef(function(e,t){var n,r=e.prefixCls,s=void 0===r?"rc-switch":r,f=e.className,v=e.checked,p=e.defaultChecked,m=e.disabled,h=e.loadingIcon,x=e.checkedChildren,y=e.unCheckedChildren,g=e.onClick,b=e.onChange,_=e.onKeyDown,N=(0,o.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),k=(0,u.Z)(!1,{value:v,defaultValue:p}),C=(0,c.Z)(k,2),E=C[0],Z=C[1];function j(e,t){var n=E;return m||(Z(n=e),null==b||b(n,t)),n}var w=l()(s,f,(n={},(0,i.Z)(n,"".concat(s,"-checked"),E),(0,i.Z)(n,"".concat(s,"-disabled"),m),n));return a.createElement("button",Object.assign({},N,{type:"button",role:"switch","aria-checked":E,disabled:m,className:w,ref:t,onKeyDown:function(e){e.which===d.Z.LEFT?j(!1,e):e.which===d.Z.RIGHT&&j(!0,e),null==_||_(e)},onClick:function(e){var t=j(!E,e);null==g||g(t,e)}}),h,a.createElement("span",{className:"".concat(s,"-inner")},E?x:y))});f.displayName="Switch";var v=n(19267),p=n(68349),m=n(61975),h=n(97647),x=n(21687),y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},g=a.forwardRef(function(e,t){var n,c=e.prefixCls,o=e.size,s=e.loading,u=e.className,d=e.disabled,g=y(e,["prefixCls","size","loading","className","disabled"]);(0,x.Z)("checked"in g||!("value"in g),"Switch","`value` is not a valid prop, do you mean `checked`?");var b=a.useContext(m.E_),_=b.getPrefixCls,N=b.direction,k=a.useContext(h.Z),C=_("switch",c),E=a.createElement("div",{className:"".concat(C,"-handle")},s&&a.createElement(v.Z,{className:"".concat(C,"-loading-icon")})),Z=l()((n={},(0,i.Z)(n,"".concat(C,"-small"),"small"===(o||k)),(0,i.Z)(n,"".concat(C,"-loading"),s),(0,i.Z)(n,"".concat(C,"-rtl"),"rtl"===N),n),void 0===u?"":u);return a.createElement(p.Z,{insertExtraNode:!0},a.createElement(f,(0,r.Z)({},g,{prefixCls:C,className:Z,disabled:d||s,ref:t,loadingIcon:E})))});g.__ANT_SWITCH=!0,g.displayName="Switch";var b=g},72198:function(e,t,n){"use strict";n.d(t,{a:function(){return d}});var r=n(67294),i=n(94184),a=n.n(i),c=n(67667),o=n.n(c),s=n(3612),l=n(86920),u=n(85893),d=function(){var e=(0,r.useState)(0),t=e[0],n=e[1];return[t,(0,r.useCallback)(function(){n(function(e){return e+1})},[n])]};t.Z=function(e){var t=e.title,n=e.balance,i=e.available,c=e.placeholder,d=e.options,f=e.selectedToken,v=e.clearTrigger,p=e.decimals,m=e.selectedChange,h=e.changeValue,x=e.maxAmount,y=e.errMsg,g=e.moreInfo,b=e.onChange,_=void 0===b?function(){}:b,N=(0,r.useState)(!1),k=N[0],C=N[1],E=(0,l.Z)().theme,Z=(0,r.useState)(""),j=Z[0],w=Z[1],S=function(e){w(""),_(0),m(e),C(!1)};return(0,r.useEffect)(function(){h&&(w((0,s.FR)(h,!1,null!=p?p:18)),_(h))},[h]),(0,r.useEffect)(function(){w("")},[v]),(0,u.jsxs)("div",{className:a()(o().inputWrapper,y&&o().error),children:[(t||n||i)&&(0,u.jsxs)("div",{className:"flex items-center justify-between mb-2 color-white",children:[t&&(0,u.jsx)("div",{className:"",children:t}),n&&(0,u.jsxs)("div",{children:["Balance: ",(0,u.jsx)("span",{className:"color-blue",children:n})]}),i&&(0,u.jsxs)("div",{children:["Available: ",(0,u.jsx)("span",{className:"color-blue",children:i})]})]}),(0,u.jsxs)("div",{className:o().inputContent,children:[d&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:o().selectBox,children:[(0,u.jsxs)("div",{className:a()(o().select,"flex justify-between items-center"),onClick:function(){return C(function(e){return!e})},children:[(0,u.jsx)("div",{children:f}),(0,u.jsx)("img",{src:"default"===E?"/assets/arrow-down-default.svg":"/assets/arrow-down-dark.svg",className:a()("w-6",k&&o().reverse)})]}),(0,u.jsx)("div",{className:a()(o().options,k&&o().visible),children:d.map(function(e,t){return(0,u.jsx)("div",{onClick:function(){return S(e)},className:a()(o().option,e===f&&o().active),children:e},t)})})]}),(0,u.jsx)("div",{className:o().divider})]}),(0,u.jsx)("input",{onChange:function(e){var t=e.target.value,n=/[^\d.]/g;n.test(t)&&(t=t.replace(n,"")),w(t||""),_((0,s.F6)(t||"").shiftedBy(null!=p?p:18))},value:j,placeholder:c}),(0,u.jsx)("a",{className:o().max,onClick:function(){_(x),w((0,s.FR)(x,!1,null!=p?p:18))},children:"MAX"})]}),y&&(0,u.jsx)("div",{className:o().errMsg,children:y}),g&&(0,u.jsx)("div",{className:o().inputBottom,children:g.map(function(e,t){return(0,u.jsx)("div",{className:o().moreInfoItem,children:e},t)})})]})}},94874:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),i=n(70794),a=n(29752),c=n.n(a),o=n(85893);function s(e){var t=e.current,n=e.cap,a=e.token,s=(0,r.useState)(0),l=s[0],u=s[1];return(0,r.useEffect)(function(){if("-"!==t&&"-"!==n){var e=t.replace(/,/g,""),r=n.replace(/,/g,"");u(new i.Z(e).div(r).times(100).toFixed(2))}else u(0)},[t,n]),(0,o.jsxs)("div",{className:"mb-2",children:[(0,o.jsxs)("div",{className:"flex justify-between",children:[(0,o.jsx)("div",{children:"Utilization"}),(0,o.jsxs)("div",{children:[t,"/",n," ",a]})]}),(0,o.jsx)("div",{className:c().outter,children:(0,o.jsx)("div",{className:c().inner,style:{width:"".concat(l,"%")}})})]})}},29386:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}}),n(67294);var r=n(86920),i=n(31462),a=n.n(i),c=n(85893);function o(e){var t=e.title,n=(0,r.Z)(),i=n.theme,o=n.handleTip;return(0,c.jsx)("div",{className:a().tip,children:(0,c.jsx)("img",{onMouseEnter:function(e){o({title:t,x:e.clientX,y:e.clientY})},onMouseLeave:function(e){"tipWrapper"!==e.relatedTarget.id&&o({title:""})},src:"default"===i?"/assets/exp-default.svg":"/assets/exp-dark.svg",className:a().icon})})}},36863:function(e,t,n){"use strict";var r=n(67294),i=n(3612),a=n(43275),c=n(86920);t.Z=function(e){var t=(0,a.Z)().blockNumber,n=(0,c.Z)().ConvexVaultsAPY,o=(0,r.useState)("35"),s=o[0],l=o[1],u=(0,r.useState)([]),d=u[0],f=u[1],v=(0,r.useState)({}),p=v[0],m=v[1];(0,r.useEffect)(function(){if("object"==typeof e)f(e.map(function(e){return h(e)}).map(function(e){return e.aprVal}));else{var t=h(e),n=t.aprVal;m(t.convexData),l(n)}},[t,n]);var h=function(e){var t=(0,i.sE)(n,e)||{},r=(null==t?void 0:t.apy)||{project:"2%",cvxAirfoceApr:"0%"},a=r.cvxAirfoceApr,c=r.project;return{aprVal:a?parseFloat(a):parseFloat(c),convexData:t}};return{aprData:"object"==typeof e?d:s,lpConvexInfo:p}}},10480:function(e,t,n){"use strict";var r=n(67294),i=n(96486),a=n(86920);t.Z=function(e){var t=(0,r.useState)({}),n=t[0],c=t[1],o=(0,a.Z)().tokenPrice;return(0,r.useEffect)(function(){(0,i.isEmpty)(o)||c(o[null!=e?e:"convex-finance"])},[e,o]),n}},67667:function(e){e.exports={reverse:"styles_reverse__0xOFL",inputWrapper:"styles_inputWrapper__xOT4k",error:"styles_error__d8ZO1",inputContent:"styles_inputContent__k8jCy",max:"styles_max__WLv8v",errMsg:"styles_errMsg__HcZUt",moreInfoItem:"styles_moreInfoItem__A2CV2",selectBox:"styles_selectBox__SHEVQ",select:"styles_select__TIhIk",divider:"styles_divider__kctGL",options:"styles_options__bS2Py",visible:"styles_visible__N7IAw",option:"styles_option__kYxQJ"}},29752:function(e){e.exports={outter:"style_outter__Ak_ai",inner:"style_inner__6Xfcl"}},31462:function(e){e.exports={tip:"styles_tip__wueS4",titleWrapper:"styles_titleWrapper__5HCFa",icon:"styles_icon__GIbUD"}},9008:function(e,t,n){e.exports=n(11597)},8410:function(e,t,n){"use strict";n.d(t,{o:function(){return a}});var r=n(67294),i=(0,n(98924).Z)()?r.useLayoutEffect:r.useEffect;t.Z=i;var a=function(e,t){var n=r.useRef(!0);i(function(){if(!n.current)return e()},t),i(function(){return n.current=!1,function(){n.current=!0}},[])}},3129:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(97685),i=n(67294);function a(e){var t=i.useRef();return t.current=e,i.useCallback(function(){for(var e,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(r))},[])}var c=n(8410),o=n(30470);function s(e){return void 0!==e}function l(e,t){var n=t||{},i=n.defaultValue,l=n.value,u=n.onChange,d=n.postState,f=(0,o.Z)(function(){return s(l)?l:s(i)?"function"==typeof i?i():i:"function"==typeof e?e():e}),v=(0,r.Z)(f,2),p=v[0],m=v[1],h=void 0!==l?l:p,x=d?d(h):h,y=a(u),g=(0,o.Z)([h]),b=(0,r.Z)(g,2),_=b[0],N=b[1];return(0,c.o)(function(){var e=_[0];p!==e&&y(p,e)},[_]),(0,c.o)(function(){s(l)||m(l)},[l]),[x,a(function(e,t){m(e,t),N([h],t)})]}},4730:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return r}})}}]);