(this.webpackJsonpbloomingpixels=this.webpackJsonpbloomingpixels||[]).push([[0],{22:function(e,t,n){e.exports=n(43)},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(7),o=n.n(i),c=(n(27),n(9)),u=n.n(c),s=n(12),l=n(2),f=(n(29),function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),a=n[0],i=n[1];function o(t){t.key===e&&i(!0)}var c=function(t){t.key===e&&i(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",o),window.addEventListener("keyup",c),function(){window.removeEventListener("keydown",o),window.removeEventListener("keyup",c)}})),a});n(30);var d=function(e){var t=e.item,n=e.isActive,i=e.isSelected,o=e.setSelected,c=e.setHovered,u=e.exposeRef,s=Object(r.useRef)(null);return u(s),a.a.createElement("div",{className:"item ".concat(n?"active":""," ").concat(i?"selected":""),onClick:function(){return o(t)},onMouseEnter:function(){return c(t)},onMouseLeave:function(){return c(void 0)},ref:s},a.a.createElement("span",{className:"name"},t.name),a.a.createElement("span",{className:"description"},t.description))},h=function(e){var t=e.items,n=e.shouldDisplay,i=e.inputRef,o=e.exposeRef,c=Object(r.useRef)(null),u=function(e,t){var n=Object(r.useState)({id:null,name:null}),a=Object(l.a)(n,2),i=a[0],o=a[1],c=Object(r.useState)(0),u=Object(l.a)(c,2),s=u[0],d=u[1],h=Object(r.useState)(void 0),m=Object(l.a)(h,2),v=m[0],p=m[1],g=f("ArrowDown"),w=f("ArrowUp"),b=f("Enter");Object(r.useEffect)((function(){e.length&&g&&d((function(t){return t<e.length-1?t+1:t}))}),[g]),Object(r.useEffect)((function(){e.length&&w&&d((function(e){return e>0?e-1:e}))}),[w]),Object(r.useEffect)((function(){e.length&&b&&o(e[s])}),[s,b]),Object(r.useEffect)((function(){e.length&&v&&d(e.indexOf(v))}),[v]);return Object(r.useEffect)((function(){b||w||g||t&&t.current.focus()}),[]),[i,s,o,p]}(t,i),s=Object(l.a)(u,4),h=s[0],m=s[1],v=s[2],p=s[3];return a.a.createElement("div",{ref:c,className:"selectionList",onWheel:function(e){return e.stopPropagation()}},a.a.createElement("div",{className:"".concat(n?"show":"hide")},t.map((function(e,t){return a.a.createElement(d,{key:e.id,isActive:t===m,isSelected:h.id===e.id,item:e,setSelected:v,setHovered:p,onClick:function(e){i.current.focus()},exposeRef:o})}))))};var m=function(){var e=Object(s.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coding-challenge.echoandapex.com/locations?q="+n);case 2:e.sent.json().then((function(e){e.predictions.length&&t(e)})).then((function(e){e&&t({predictions:[]})}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(e){var t=e.themeClass,n=Object(r.useRef)(null),i=function(){var e=Object(r.useRef)([]);return[e,function(t){e.current.includes(t)||e.current.push(t)}]}(),o=Object(l.a)(i,2),c=o[0],u=o[1],s=function(e,t){var n=Object(r.useState)(!1),a=Object(l.a)(n,2),i=a[0],o=a[1];return Object(r.useLayoutEffect)((function(){var n=function(n){var r=t.current.map((function(e){return e.current})),a=n.target===e.current,i=r.includes(n.target);!a&&!i&&(n.stopPropagation(),o(!1))};return document.addEventListener("click",n),window.addEventListener("click",n),function(){document.removeEventListener("click",n),window.addEventListener("click",n)}}),[]),[i,o]}(n,c),f=Object(l.a)(s,2),d=f[0],v=f[1],p=Object(r.useState)({predictions:[]}),g=Object(l.a)(p,2),w=g[0],b=g[1];return a.a.createElement("div",{className:t},a.a.createElement("div",{className:"autocomplete"},a.a.createElement("div",{className:"input-container"},a.a.createElement("input",{onFocus:function(){return v(!0)},placeholder:"Search Locations",type:"text",name:"search_places",onChange:function(e){e.target.value?m(b,e.target.value):b({predictions:[]})},ref:n}),a.a.createElement("div",{className:"searchIcon"})),a.a.createElement(h,{items:w.predictions,shouldDisplay:d,inputRef:n,exposeRef:u})))},p=(n(31),n(3)),g=n(1),w=n(5),b=n(4);function y(e,t,n,r){this.stability=null!=e?Math.abs(e):8,this.sensitivity=null!=t?1+Math.abs(t):100,this.tolerance=null!=n?1+Math.abs(n):1.1,this.delay=null!=r?r:150,this.lastUpDeltas=function(){var e,t,n;for(n=[],e=1,t=2*this.stability;1<=t?e<=t:e>=t;1<=t?e++:e--)n.push(null);return n}.call(this),this.lastDownDeltas=function(){var e,t,n;for(n=[],e=1,t=2*this.stability;1<=t?e<=t:e>=t;1<=t?e++:e--)n.push(null);return n}.call(this),this.deltasTimestamp=function(){var e,t,n;for(n=[],e=1,t=2*this.stability;1<=t?e<=t:e>=t;1<=t?e++:e--)n.push(null);return n}.call(this)}y.prototype.check=function(e){var t;return null!=(e=e.originalEvent||e).wheelDelta?t=e.wheelDelta:null!=e.deltaY?t=-40*e.deltaY:null==e.detail&&0!==e.detail||(t=-40*e.detail),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),t>0?(this.lastUpDeltas.push(t),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(t),this.lastDownDeltas.shift(),this.isInertia(-1))},y.prototype.isInertia=function(e){var t,n,r,a,i,o,c;return null===(t=-1===e?this.lastDownDeltas:this.lastUpDeltas)[0]?e:!(this.deltasTimestamp[2*this.stability-2]+this.delay>Date.now()&&t[0]===t[2*this.stability-1])&&(r=t.slice(0,this.stability),n=t.slice(this.stability,2*this.stability),c=r.reduce((function(e,t){return e+t})),i=n.reduce((function(e,t){return e+t})),o=c/r.length,a=i/n.length,Math.abs(o)<Math.abs(a*this.tolerance)&&this.sensitivity<Math.abs(a)&&e)},y.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},y.prototype.showLastDownDeltas=function(){return this.lastDownDeltas};var E=y,O=n(6),x=n.n(O),j=function(){try{var e=Object.defineProperty({},"passive",{get:function(){}});window.addEventListener("test",null,e)}catch(t){return console.error(t),!1}return!0}();function D(e,t,n){var a=e.orientation,i="y"===a?window.innerHeight:window.innerWidth,o="y"===a?"height":"width",c=function(){var e="y"===a?t.current.previousSize[0]:t.current.previousSize[1],r=i-e;t.current.previousSize=[window.innerHeight,window.innerWidth];var c="translate".concat(a,"(-").concat((i-r)*(t.current.curPage-1),"px)");n({transition:"transform 0s"}),n(Object(g.a)({transform:c},o,"".concat(i,"px"))),t.current.resetLinearTranslate()};return Object(r.useEffect)((function(){return window.addEventListener("resize",c,!1),document.addEventListener("resize",c,!1),c(),function(){window.removeEventListener("resize",c,!1),document.removeEventListener("resize",c,!1)}})),c}function S(e){return function(t){Object.keys(t).forEach((function(n){e.current&&(e.current.style[n]=t[n])}))}}function P(e,t,n,a){var i={reqAnim:null,touchStartPos:0,touchMoveDelta:0},o=e.orientation,c=e.swipeSensitivity,u=function(e){return"y"===o?window.innerHeight:window.innerWidth},s=function(n,r){var a=!e.touchEnabled,i=t.current.isAnimating,o="start"===n?t.current.isInSwipe:!t.current.isInSwipe,c=e.parentStatus.current.isAnimating;return a||i||o||c},l=function(e){var n=-u()*(t.current.curPage-1),r="translate".concat(o,"(").concat(n,"px)");e&&(t.current.isAnimating=!0),a({transform:r}),Object(O.forceCheck)()},f=function e(){var n=-(u()*(t.current.curPage-1)-i.touchMoveDelta),r="translate".concat(o,"(").concat(n,"px)");a({transform:r}),i.reqAnim=requestAnimationFrame(e)},d=function(n){s("start")?l():(t.current.isInSwipe=!0,i.reqAnim=requestAnimationFrame(f),i.touchStartPos="y"===e.orientation?n.touches[0].clientY:n.touches[0].clientX)},h=function(t){if(s("move"))l();else{var n=("y"===e.orientation?t.changedTouches[0].clientY:t.changedTouches[0].clientX)-i.touchStartPos;i.touchMoveDelta=n}},m=function(r){cancelAnimationFrame(i.reqAnim),i.touchMoveDelta=0,t.current.isInSwipe=!1;var a=("y"===e.orientation?r.changedTouches[0].clientY:r.changedTouches[0].clientX)-i.touchStartPos;if(e.parentStatus.current.isAnimating)return console.log(r.changedTouches),void l();!function(r){if(Math.abs(r)>c){var a=(1-Math.abs(r)/u())*e.transDuration;if(r<0)if(t.current.curPage<t.current.maxPage){n((function(e){return e+1}),t,G.TOUCH,a)}else l();else if(t.current.curPage>1){n((function(e){return e-1}),t,G.TOUCH,a)}else l()}else l();t.current.childStatus.forEach((function(e){return e.current.resetLinearTranslate()}))}(a)};return Object(r.useEffect)((function(){return document.addEventListener("touchstart",d,!!j&&{passive:!0}),document.addEventListener("touchmove",h,!!j&&{passive:!0}),document.addEventListener("touchend",m,!!j&&{passive:!0}),function(){document.removeEventListener("touchstart",d,!!j&&{passive:!0}),document.removeEventListener("touchmove",h,!!j&&{passive:!0}),document.removeEventListener("touchend",m,!!j&&{passive:!0})}})),l}var I=function(e,t,n){return function(r,a,i,o,c){var u=e.parentStatus.current,s=a.current,l=r(s.curPage),f=function(){return 1===l},d=function(){return l===s.maxPage},h=function(){return l>1&&l<s.maxPage},m=function(){return l<1||l>s.maxPage},v=function(){return l<s.curPage},p=function(){return l>s.curPage},g=function(){return 0===e.layoutIndex},w=function(){return e.layoutIndex>0};(function(t){var n=e.layoutIndex===u.curPage,r=u.isAnimating;return w()&&(!n||r)})()||(m()&&(u.allowPrev=!0,u.allowNext=!0),f()&&(u.allowPrev=!0,u.allowNext=!1),h()&&(u.allowPrev=!1),d()&&(u.allowNext=!0,u.allowPrev=!1),g()&&(function(e){var t=!s.allowNext,n=p()&&t,r=s.childSliderIndices.includes(s.curPage),a=s.childStatus.map((function(e){return e.current.isAnimating})).includes(!0);return(r||a)&&n&&i===G.WHEEL}()||function(e){var t=!s.allowPrev,n=v()&&t,r=s.childSliderIndices.includes(s.curPage),a=s.childStatus.map((function(e){return e.current.isAnimating})).includes(!0);return(r||a)&&n&&i===G.WHEEL}())||m()||(e.onBeforeScroll(a,e.layoutIndex),s.curPage=l,s.isAnimating=!0,u.isAnimating=!0,t(o,c),n({transform:"translate".concat(e.orientation,"(-").concat(100*(s.curPage-1)).concat("y"===e.orientation?"vh":"vw"," )")}),s.updateNavDots(s.curPage)))}},L=n(13),N=n(14),A=n(19),k=n(15),T=n(20);function C(){var e=Object(p.a)(["\n    visibility: ",";\n    animation: "," 2s linear;\n    transition: visibility 2s ease-in;\n"]);return C=function(){return e},e}function M(){var e=Object(p.a)(["\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n    }\n"]);return M=function(){return e},e}function z(){var e=Object(p.a)(["\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n"]);return z=function(){return e},e}a.a.Component;var U=Object(b.b)(z()),R=Object(b.b)(M()),H=b.a.div(C(),(function(e){return e.out?"hidden":"visible"}),(function(e){return e.out?R:U}));n(41);function B(){var e=Object(p.a)(["\n        display: flex;\n        width: 100%;\n        height: 100%;\n    "]);return B=function(){return e},e}var W=function(){var e=b.a.div(B());return a.a.createElement(e,null,a.a.createElement("div",{className:"cls-spinner"},a.a.createElement("div",{className:"cls-circle cls-spin"})))};function q(){var e=Object(p.a)(["\n    display: block;\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n"]);return q=function(){return e},e}function Y(){var e=Object(p.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]);return Y=function(){return e},e}var F,X=b.a.section(Y()),J=Object(b.a)(X)(q()),$=function(e){var t=e.children,n=e.className,i=e.style,o=function(){return a.a.createElement(J,{className:e.className,style:e.style},e.children)},c=function(){return a.a.createElement(J,{className:n,style:Object(w.a)({},i)},a.a.createElement(x.a,{unmountIfInvisible:!0,resize:!0,overflow:!0,placeholder:a.a.createElement(X,null,a.a.createElement(W,null)),offset:-1,once:e.once},a.a.createElement(H,null,t)))},u=Object(r.useMemo)((function(){return e.lazy?c:o}));return a.a.createElement(u,null)};function _(){var e=Object(p.a)(["\n  background: ",";\n  border: "," solid ",";\n  border-radius: 50%;\n  width: 0.06em;\n  height: 0.06em;\n  margin: ",';\n  transition: all 0.2s ease-out;\n  &:hover {\n    /*\n     *   "!important" *MUST* be set otherwise the styleApplicator/setStyles\n     *    function will set inline styles that override these hover styles.\n     */\n    border: 0.04em solid '," !important;\n    margin: 0.05em !important;\n  }\n"]);return _=function(){return e},e}$.defaultProps={lazy:!1,once:!1},document.ontouchmove=function(e){e.preventDefault()};var G={WHEEL:"wheel",TOUCH:"touch",BUTTON:"button"};function K(e){var t=Object(r.useRef)(null),n=S(t),i=Object(r.useRef)({isAnimating:!1,isInSwipe:!1,curPage:e.initialPage,maxPage:e.children.length,childSliderIndices:e.children.reduce((function(e,t,n){return t.type===Q?e.concat([n+1]):e}),[]),allowNext:!0,allowPrev:!0,styleSetter:n,previousSize:[window.innerHeight,window.innerWidth],resize:function(){},resetLinearTranslate:function(){},childStatus:[],containerEl:t,updateNavDots:function(){}});var o=I(e,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.transDuration,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.easing;n({transition:"transform ".concat(t,"s ").concat(r)})}),n);function c(){n({transition:"transform 0s"}),i.current.isAnimating=!1,e.parentStatus.current.isAnimating=!1,e.onAfterScroll(i,e.layoutIndex),Object(O.forceCheck)()}i.current.resetLinearTranslate=P(e,i,o,n),i.current.resize=D(e,i,n),function(e,t,n){var a=new E,i=(new Date).getTime(),o=[];function c(r){if(r.stopPropagation(),!!a.check(r)&&e.wheelEnabled&&!t.current.isAnimating){var c=(new Date).getTime(),u=c-i,s=-r.wheelDelta||r.deltaY||r.detail;u>200&&(o=[]),i=c,o=o.slice(-30).concat([s]);n((function(e){return(t=o).reduce((function(e,t){return e+t}),0)/t.length>0?e+1:e-1;var t}),t,G.WHEEL)}}Object(r.useEffect)((function(){return window.addEventListener("wheel",c,!!j&&{passive:!0}),function(){window.removeEventListener("wheel",c,!!j&&{passive:!0})}}))}(e,i,o),function(e,t,n){var a=e.buttonIds,i=function(e){if(!t.current.isAnimating){var r;try{r=e.target.attributes.to.value}catch(e){console.error(e)}"next"===r&&n((function(e){return e+1}),t,G.BUTTON),"prev"===r&&n((function(e){return e-1}),t,G.BUTTON),isNaN(parseInt(r))||n((function(e){return parseInt(r)}),t,G.BUTTON)}};Object(r.useEffect)((function(){return a.map((function(e){try{document.getElementById(e).addEventListener("click",i)}catch(t){console.error(e,t)}})),function(){try{a.map((function(e){document.getElementById(e.id).removeEventListener("click",i)}))}catch(e){console.error(e)}}}))}(e,i,o),e.parentStatus.current.childStatus.push(i);var u=i,s=a.a.Children.toArray(e.children).map((function(e,t){return e.type!==Q&&"SubSlider"!==e.props.className?e:a.a.cloneElement(e,{parentStatus:u,layoutIndex:t+1,status:i})}));return a.a.createElement((function(){return Object(r.useMemo)((function(){var n=s.map((function(t,n){var r={position:"absolute",top:"0px",transform:"translatex(".concat(100*n,"vw)")};return"y"===e.orientation?t:a.a.cloneElement(t,{style:Object(w.a)({},t.props.style,{},r)})}));return a.a.createElement("div",null,a.a.createElement("div",{onTransitionEnd:c,ref:t,style:Object(w.a)({width:"100%",height:"100%",position:"fixed"},e.style)},n),a.a.createElement(V,{layoutIndex:e.layoutIndex,initialPage:e.initialPage,status:i,shouldDisplay:e.showNavDots,color:e.navDotColor,pos:e.navDotPos}))}))}),null)}function Q(e){var t=e.buttons;return a.a.createElement($,{style:Object(w.a)({},e.style)},t?a.a.createElement(t,{show:e.showButtons}):null,a.a.createElement(K,e,e.children))}K.defaultProps=(F={showNavDots:!0,navDotColor:"#fff",navDotPos:"right",initialPage:1,buttonIds:[],layoutIndex:0,parentStatus:{current:{curPage:0,childSliderIndices:[0],allowPrev:!1,allowNext:!1,isInSwipe:!1,isAnimating:!1,resize:function(){},childStatus:[],containerEl:{current:{focus:function(){}}}}},children:[],easing:"ease-out"},Object(g.a)(F,"initialPage",1),Object(g.a)(F,"touchEnabled",!0),Object(g.a)(F,"wheelEnabled",!0),Object(g.a)(F,"onAfterScroll",(function(){})),Object(g.a)(F,"onBeforeScroll",(function(){})),Object(g.a)(F,"swipeSensitivity",100),Object(g.a)(F,"transDuration",1),Object(g.a)(F,"orientation","y"),F);var V=function(e){var t=e.layoutIndex,n=e.initialPage,r=e.orientation,i=e.status,o=e.pos,c=e.shouldDisplay,u=void 0===c||c,s=e.color,l=void 0===s?"#fff":s;if(!u)return null;var f=Array(i.current.maxPage).fill().map((function(e){return a.a.createRef()})),d=f.map((function(e){return S(e)})),h=i.current.curPage;return i.current.updateNavDots=function(e){d[h-1]({border:"0em solid ".concat(l)}),d[e-1]({border:"0.04em solid ".concat(l)}),h=e},a.a.createElement(te,{orientation:r,pos:o},Array(i.current.maxPage).fill().map((function(e,r){return a.a.createElement(ee,{ref:f[r],key:"dot-".concat(t,"-").concat(r),active:n===r+1,color:l})})))},Z=b.a.div(_(),(function(e){return e.color}),(function(e){return e.active?"0.04em":"0em"}),(function(e){return e.color}),(function(e){return e.active?"0.05em":"0.09em"}),(function(e){return e.color})),ee=a.a.forwardRef((function(e,t){var n=e.active,r=e.color;return a.a.createElement(Z,{ref:t,active:n,color:r})})),te=function(e){var t=e.children,n=e.pos,r="right"===n||"left"==n?"y":"x",i=Object(g.a)({flexDirection:"".concat("y"===r?"column":"row"),height:"".concat("y"===r?"auto":"0.14em"),width:"".concat("x"===r?"auto":"0.14em"),right:"".concat("right"===n?"1%":"auto"),left:"".concat("left"===n?"1%":"x"===r?"50%":"auto"),bottom:"".concat("bottom"===n?"1%":"auto"),top:"".concat("top"===n?"1%":"y"===r?"50%":"auto"),transform:"".concat("x"===r?"translateX(-50%)":"auto")},"transform","".concat("y"===r?"translateY(-50%)":"auto")),o=Object(w.a)({},{position:"absolute",zIndex:"99999999999",fontSize:"5em",display:"flex",alignContent:"center",alignItems:"center"},{},i);return a.a.createElement("div",{style:o},t)};n(42);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement((function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(K,{orientation:"x",navDotPos:"bottom",transDuration:.8,navDotColor:"rgba(100, 100, 100, 1)"},a.a.createElement($,null,a.a.createElement("div",{style:{position:"relative",display:"flex",flexDirection:"column",height:"100%",width:"100%",background:"#fff"}},a.a.createElement("div",{className:"message-alert"},"Please scroll or ",a.a.createElement("em",null,"swipe to the right")," to navigate examples."),a.a.createElement("div",{className:"logo-box"}),a.a.createElement("div",{style:{flex:1,width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"center",alignItems:"center"}},a.a.createElement(v,{themeClass:"light"})))),a.a.createElement($,null,a.a.createElement("div",{style:{position:"relative",display:"flex",flexDirection:"column",height:"100%",width:"100%",background:"#111"}},a.a.createElement("div",{className:"logo-box"}),a.a.createElement("div",{style:{flex:1,width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"center",alignItems:"center"}},a.a.createElement(v,{themeClass:"dark"}))))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.52eb5a51.chunk.js.map