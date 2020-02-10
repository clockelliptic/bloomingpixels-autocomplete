(this.webpackJsonpbloomingpixels=this.webpackJsonpbloomingpixels||[]).push([[0],{28:function(e,t,n){e.exports=n(66)},33:function(e,t,n){},34:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),c=(n(33),n(34),n(3)),u=n(2),s=n(5),l=n(4);function f(e,t,n,a){this.stability=null!=e?Math.abs(e):8,this.sensitivity=null!=t?1+Math.abs(t):100,this.tolerance=null!=n?1+Math.abs(n):1.1,this.delay=null!=a?a:150,this.lastUpDeltas=function(){var e,t,n;for(n=[],e=1,t=2*this.stability;1<=t?e<=t:e>=t;1<=t?e++:e--)n.push(null);return n}.call(this),this.lastDownDeltas=function(){var e,t,n;for(n=[],e=1,t=2*this.stability;1<=t?e<=t:e>=t;1<=t?e++:e--)n.push(null);return n}.call(this),this.deltasTimestamp=function(){var e,t,n;for(n=[],e=1,t=2*this.stability;1<=t?e<=t:e>=t;1<=t?e++:e--)n.push(null);return n}.call(this)}f.prototype.check=function(e){var t;return null!=(e=e.originalEvent||e).wheelDelta?t=e.wheelDelta:null!=e.deltaY?t=-40*e.deltaY:null==e.detail&&0!==e.detail||(t=-40*e.detail),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),t>0?(this.lastUpDeltas.push(t),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(t),this.lastDownDeltas.shift(),this.isInertia(-1))},f.prototype.isInertia=function(e){var t,n,a,r,i,o,c;return null===(t=-1===e?this.lastDownDeltas:this.lastUpDeltas)[0]?e:!(this.deltasTimestamp[2*this.stability-2]+this.delay>Date.now()&&t[0]===t[2*this.stability-1])&&(a=t.slice(0,this.stability),n=t.slice(this.stability,2*this.stability),c=a.reduce((function(e,t){return e+t})),i=n.reduce((function(e,t){return e+t})),o=c/a.length,r=i/n.length,Math.abs(o)<Math.abs(r*this.tolerance)&&this.sensitivity<Math.abs(r)&&e)},f.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},f.prototype.showLastDownDeltas=function(){return this.lastDownDeltas};var d=f,m=n(8),v=n.n(m),h=function(){try{var e=Object.defineProperty({},"passive",{get:function(){}});window.addEventListener("test",null,e)}catch(t){return console.error(t),!1}return!0}();function E(e,t,n){var r=e.orientation,i="y"===r?window.innerHeight:window.innerWidth,o="y"===r?"height":"width",c=function(){var e="y"===r?t.current.previousSize[0]:t.current.previousSize[1],a=i-e;t.current.previousSize=[window.innerHeight,window.innerWidth];var c="translate".concat(r,"(-").concat((i-a)*(t.current.curPage-1),"px)");n({transition:"transform 0s"}),n(Object(u.a)({transform:c},o,"".concat(i,"px"))),t.current.resetLinearTranslate()};return Object(a.useEffect)((function(){return window.addEventListener("resize",c,!1),document.addEventListener("resize",c,!1),c(),function(){window.removeEventListener("resize",c,!1),document.removeEventListener("resize",c,!1)}})),c}function p(e){return function(t){Object.keys(t).forEach((function(n){e.current&&(e.current.style[n]=t[n])}))}}function g(e,t,n,r){var i={reqAnim:null,touchStartPos:0,touchMoveDelta:0},o=e.orientation,c=e.swipeSensitivity,u=function(e){return"y"===o?window.innerHeight:window.innerWidth},s=function(n,a){var r=!e.touchEnabled,i=t.current.isAnimating,o="start"===n?t.current.isInSwipe:!t.current.isInSwipe,c=e.parentStatus.current.isAnimating;return r||i||o||c},l=function(e){var n=-u()*(t.current.curPage-1),a="translate".concat(o,"(").concat(n,"px)");e&&(t.current.isAnimating=!0),r({transform:a}),Object(m.forceCheck)()},f=function e(){var n=-(u()*(t.current.curPage-1)-i.touchMoveDelta),a="translate".concat(o,"(").concat(n,"px)");r({transform:a}),i.reqAnim=requestAnimationFrame(e)},d=function(n){s("start")?l():(t.current.isInSwipe=!0,i.reqAnim=requestAnimationFrame(f),i.touchStartPos="y"===e.orientation?n.touches[0].clientY:n.touches[0].clientX)},v=function(t){if(s("move"))l();else{var n=("y"===e.orientation?t.changedTouches[0].clientY:t.changedTouches[0].clientX)-i.touchStartPos;i.touchMoveDelta=n}},E=function(a){cancelAnimationFrame(i.reqAnim),i.touchMoveDelta=0,t.current.isInSwipe=!1;var r=("y"===e.orientation?a.changedTouches[0].clientY:a.changedTouches[0].clientX)-i.touchStartPos;if(e.parentStatus.current.isAnimating)return console.log(a.changedTouches),void l();!function(a){if(Math.abs(a)>c){var r=(1-Math.abs(a)/u())*e.transDuration;if(a<0)if(t.current.curPage<t.current.maxPage){n((function(e){return e+1}),t,q.TOUCH,r)}else l();else if(t.current.curPage>1){n((function(e){return e-1}),t,q.TOUCH,r)}else l()}else l();t.current.childStatus.forEach((function(e){return e.current.resetLinearTranslate()}))}(r)};return Object(a.useEffect)((function(){return document.addEventListener("touchstart",d,!!h&&{passive:!0}),document.addEventListener("touchmove",v,!!h&&{passive:!0}),document.addEventListener("touchend",E,!!h&&{passive:!0}),function(){document.removeEventListener("touchstart",d,!!h&&{passive:!0}),document.removeEventListener("touchmove",v,!!h&&{passive:!0}),document.removeEventListener("touchend",E,!!h&&{passive:!0})}})),l}var b=function(e,t,n){return function(a,r,i,o,c){var u=e.parentStatus.current,s=r.current,l=a(s.curPage),f=function(){return 1===l},d=function(){return l===s.maxPage},m=function(){return l>1&&l<s.maxPage},v=function(){return l<1||l>s.maxPage},h=function(){return l<s.curPage},E=function(){return l>s.curPage},p=function(){return 0===e.layoutIndex},g=function(){return e.layoutIndex>0};(function(t){var n=e.layoutIndex===u.curPage,a=u.isAnimating;return g()&&(!n||a)})()||(v()&&(u.allowPrev=!0,u.allowNext=!0),f()&&(u.allowPrev=!0,u.allowNext=!1),m()&&(u.allowPrev=!1),d()&&(u.allowNext=!0,u.allowPrev=!1),p()&&(function(e){var t=!s.allowNext,n=E()&&t,a=s.childSliderIndices.includes(s.curPage),r=s.childStatus.map((function(e){return e.current.isAnimating})).includes(!0);return(a||r)&&n&&i===q.WHEEL}()||function(e){var t=!s.allowPrev,n=h()&&t,a=s.childSliderIndices.includes(s.curPage),r=s.childStatus.map((function(e){return e.current.isAnimating})).includes(!0);return(a||r)&&n&&i===q.WHEEL}())||v()||(e.onBeforeScroll(r,e.layoutIndex),s.curPage=l,s.isAnimating=!0,u.isAnimating=!0,t(o,c),n({transform:"translate".concat(e.orientation,"(-").concat(100*(s.curPage-1)).concat("y"===e.orientation?"vh":"vw"," )")}),s.updateNavDots(s.curPage)))}},y=n(17),w=n(18),S=n(25),O=n(19),j=n(26);function D(){var e=Object(c.a)(["\n    visibility: ",";\n    animation: "," 2s linear;\n    transition: visibility 2s ease-in;\n"]);return D=function(){return e},e}function P(){var e=Object(c.a)(["\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n    }\n"]);return P=function(){return e},e}function T(){var e=Object(c.a)(["\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n"]);return T=function(){return e},e}r.a.Component;var x=Object(l.b)(T()),A=Object(l.b)(P()),N=l.a.div(D(),(function(e){return e.out?"hidden":"visible"}),(function(e){return e.out?A:x}));n(44);function C(){var e=Object(c.a)(["\n        display: flex;\n        width: 100%;\n        height: 100%;\n    "]);return C=function(){return e},e}var L=function(){var e=l.a.div(C());return r.a.createElement(e,null,r.a.createElement("div",{className:"cls-spinner"},r.a.createElement("div",{className:"cls-circle cls-spin"})))};function I(){var e=Object(c.a)(["\n    display: block;\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n"]);return I=function(){return e},e}function U(){var e=Object(c.a)(["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n"]);return U=function(){return e},e}var _,k=l.a.section(U()),R=Object(l.a)(k)(I()),z=function(e){var t=e.children,n=e.className,i=e.style,o=function(){return r.a.createElement(R,{className:e.className,style:e.style},e.children)},c=function(){return r.a.createElement(R,{className:n,style:Object(s.a)({},i)},r.a.createElement(v.a,{unmountIfInvisible:!0,resize:!0,overflow:!0,placeholder:r.a.createElement(k,null,r.a.createElement(L,null)),offset:-1,once:e.once},r.a.createElement(N,null,t)))},u=Object(a.useMemo)((function(){return e.lazy?c:o}));return r.a.createElement(u,null)};function M(){var e=Object(c.a)(["\n  background: ",";\n  border: "," solid ",";\n  border-radius: 50%;\n  width: 0.06em;\n  height: 0.06em;\n  margin: ",';\n  transition: all 0.2s ease-out;\n  &:hover {\n    /*\n     *   "!important" *MUST* be set otherwise the styleApplicator/setStyles\n     *    function will set inline styles that override these hover styles.\n     */\n    border: 0.04em solid '," !important;\n    margin: 0.05em !important;\n  }\n"]);return M=function(){return e},e}z.defaultProps={lazy:!1,once:!1},document.ontouchmove=function(e){e.preventDefault()};var q={WHEEL:"wheel",TOUCH:"touch",BUTTON:"button"};function H(e){var t=Object(a.useRef)(null),n=p(t),i=Object(a.useRef)({isAnimating:!1,isInSwipe:!1,curPage:e.initialPage,maxPage:e.children.length,childSliderIndices:e.children.reduce((function(e,t,n){return t.type===Y?e.concat([n+1]):e}),[]),allowNext:!0,allowPrev:!0,styleSetter:n,previousSize:[window.innerHeight,window.innerWidth],resize:function(){},resetLinearTranslate:function(){},childStatus:[],containerEl:t,updateNavDots:function(){}});var o=b(e,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.transDuration,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.easing;n({transition:"transform ".concat(t,"s ").concat(a)})}),n);function c(){n({transition:"transform 0s"}),i.current.isAnimating=!1,e.parentStatus.current.isAnimating=!1,e.onAfterScroll(i,e.layoutIndex),Object(m.forceCheck)()}i.current.resetLinearTranslate=g(e,i,o,n),i.current.resize=E(e,i,n),function(e,t,n){var r=new d,i=(new Date).getTime(),o=[];function c(a){if(a.stopPropagation(),!!r.check(a)&&e.wheelEnabled&&!t.current.isAnimating){var c=(new Date).getTime(),u=c-i,s=-a.wheelDelta||a.deltaY||a.detail;u>200&&(o=[]),i=c,o=o.slice(-30).concat([s]);n((function(e){return(t=o).reduce((function(e,t){return e+t}),0)/t.length>0?e+1:e-1;var t}),t,q.WHEEL)}}Object(a.useEffect)((function(){return window.addEventListener("wheel",c,!!h&&{passive:!0}),function(){window.removeEventListener("wheel",c,!!h&&{passive:!0})}}))}(e,i,o),function(e,t,n){var r=e.buttonIds,i=function(e){if(!t.current.isAnimating){var a;try{a=e.target.attributes.to.value}catch(e){console.error(e)}"next"===a&&n((function(e){return e+1}),t,q.BUTTON),"prev"===a&&n((function(e){return e-1}),t,q.BUTTON),isNaN(parseInt(a))||n((function(e){return parseInt(a)}),t,q.BUTTON)}};Object(a.useEffect)((function(){return r.map((function(e){try{document.getElementById(e).addEventListener("click",i)}catch(t){console.error(e,t)}})),function(){try{r.map((function(e){document.getElementById(e.id).removeEventListener("click",i)}))}catch(e){console.error(e)}}}))}(e,i,o),e.parentStatus.current.childStatus.push(i);var u=i,l=r.a.Children.toArray(e.children).map((function(e,t){return e.type!==Y&&"SubSlider"!==e.props.className?e:r.a.cloneElement(e,{parentStatus:u,layoutIndex:t+1,status:i})}));return r.a.createElement((function(){return Object(a.useMemo)((function(){var n=l.map((function(t,n){var a={position:"absolute",top:"0px",transform:"translatex(".concat(100*n,"vw)")};return"y"===e.orientation?t:r.a.cloneElement(t,{style:Object(s.a)({},t.props.style,{},a)})}));return r.a.createElement("div",null,r.a.createElement("div",{onTransitionEnd:c,ref:t,style:Object(s.a)({width:"100%",height:"100%",position:"fixed"},e.style)},n),r.a.createElement(B,{layoutIndex:e.layoutIndex,initialPage:e.initialPage,status:i,shouldDisplay:e.showNavDots,color:e.navDotColor,pos:e.navDotPos}))}))}),null)}function Y(e){var t=e.buttons;return r.a.createElement(z,{style:Object(s.a)({},e.style)},t?r.a.createElement(t,{show:e.showButtons}):null,r.a.createElement(H,e,e.children))}H.defaultProps=(_={showNavDots:!0,navDotColor:"#fff",navDotPos:"right",initialPage:1,buttonIds:[],layoutIndex:0,parentStatus:{current:{curPage:0,childSliderIndices:[0],allowPrev:!1,allowNext:!1,isInSwipe:!1,isAnimating:!1,resize:function(){},childStatus:[],containerEl:{current:{focus:function(){}}}}},children:[],easing:"ease-out"},Object(u.a)(_,"initialPage",1),Object(u.a)(_,"touchEnabled",!0),Object(u.a)(_,"wheelEnabled",!0),Object(u.a)(_,"onAfterScroll",(function(){})),Object(u.a)(_,"onBeforeScroll",(function(){})),Object(u.a)(_,"swipeSensitivity",100),Object(u.a)(_,"transDuration",1),Object(u.a)(_,"orientation","y"),_);var B=function(e){var t=e.layoutIndex,n=e.initialPage,a=e.orientation,i=e.status,o=e.pos,c=e.shouldDisplay,u=void 0===c||c,s=e.color,l=void 0===s?"#fff":s;if(!u)return null;var f=Array(i.current.maxPage).fill().map((function(e){return r.a.createRef()})),d=f.map((function(e){return p(e)})),m=i.current.curPage;return i.current.updateNavDots=function(e){d[m-1]({border:"0em solid ".concat(l)}),d[e-1]({border:"0.04em solid ".concat(l)}),m=e},r.a.createElement(G,{orientation:a,pos:o},Array(i.current.maxPage).fill().map((function(e,a){return r.a.createElement(F,{ref:f[a],key:"dot-".concat(t,"-").concat(a),active:n===a+1,color:l})})))},W=l.a.div(M(),(function(e){return e.color}),(function(e){return e.active?"0.04em":"0em"}),(function(e){return e.color}),(function(e){return e.active?"0.05em":"0.09em"}),(function(e){return e.color})),F=r.a.forwardRef((function(e,t){var n=e.active,a=e.color;return r.a.createElement(W,{ref:t,active:n,color:a})})),G=function(e){var t=e.children,n=e.pos,a="right"===n||"left"==n?"y":"x",i=Object(u.a)({flexDirection:"".concat("y"===a?"column":"row"),height:"".concat("y"===a?"auto":"0.14em"),width:"".concat("x"===a?"auto":"0.14em"),right:"".concat("right"===n?"1%":"auto"),left:"".concat("left"===n?"1%":"x"===a?"50%":"auto"),bottom:"".concat("bottom"===n?"1%":"auto"),top:"".concat("top"===n?"1%":"y"===a?"50%":"auto"),transform:"".concat("x"===a?"translateX(-50%)":"auto")},"transform","".concat("y"===a?"translateY(-50%)":"auto")),o=Object(s.a)({},{position:"absolute",zIndex:"99999999999",fontSize:"5em",display:"flex",alignContent:"center",alignItems:"center"},{},i);return r.a.createElement("div",{style:o},t)},Q=n(1),V=function(e){var t=Object(a.useState)(!1),n=Object(Q.a)(t,2),r=n[0],i=n[1];function o(t){t.key===e&&i(!0)}var c=function(t){t.key===e&&i(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",o),window.addEventListener("keyup",c),function(){window.removeEventListener("keydown",o),window.removeEventListener("keyup",c)}})),r},X=(n(45),{RESET:"RESET",UPDATE_QUERY:"UPDATE_QUERY",UPDATE_SUGGESTIONS:"UPDATE_SUGGESTIONS",RESET_PREDICTIONS:"RESET_PREDICTIONS",UPDATE_SELECTED_DATA:"UPDATE_SELECTED_DATA",UPDATE_SELECTED_LOC:"UPDATE_SELECTED_LOC",UPDATE_HOVERED:"UPDATE_HOVERED"});function J(e,t){return Object(s.a)({},e,{query:K(e.query,t),suggestions:$(e.suggestions,t),selected:Z(e.selected,t),hovered:ee(e.hovered,t)})}var K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:void 0};switch(t.type){case X.UPDATE_QUERY:return t.query;default:return e}},$=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:void 0};switch(t.type){case X.UPDATE_SUGGESTIONS:return t.suggestions;case X.RESET_SUGGESTIONS:return[];default:return e}},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:void 0};switch(t.type){case X.UPDATE_SELECTED_LOC:return Object(s.a)({},e.selected,{loc:t.loc});case X.UPDATE_SELECTED_DATA:return Object(s.a)({},e.selected,{data:t.data});default:return e}},ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:void 0};switch(t.type){case X.UPDATE_HOVERED:return t.id;default:return e}},te={query:"",suggestions:[],selected:{data:{id:"",name:"",description:"",tags:[]},loc:{longitude:"",latitude:"",address:""}},hovered:{id:""}},ne=r.a.createContext();function ae(e){var t=e.children,n=Object(a.useReducer)(J,te),i=Object(Q.a)(n,2),o={state:i[0],dispatch:i[1]};return r.a.createElement(ne.Provider,{value:o},t)}n(46);var re=function(e){var t=e.item,n=e.isActive,i=e.isSelected,o=e.setSelected,c=e.setHovered,u=e.refCollector,s=e.onSelectionChange,l=e._onSelectionChange,f=r.a.useContext(ne),d=(f.state,f.dispatch),m=Object(a.useRef)(null);return u(m),r.a.createElement("div",{className:"item ".concat(n?"active":""," ").concat(i?"selected":""),onClick:function(){o(t),s(t),l(t),d({type:X.UPDATE_QUERY,query:t.name})},onMouseEnter:function(){return c(t)},onMouseLeave:function(){return c(void 0)},ref:m},r.a.createElement("span",{className:"name"},t.name),r.a.createElement("span",{className:"description"},t.description))},ie=function(e){var t=e.shouldDisplay,n=e.inputRef,i=e.listItemRefCollector,o=e.onSelectionChange,c=e._onSelectionChange,u=r.a.useContext(ne),s=u.state,l=(u.dispatch,s.suggestions),f=Object(a.useRef)(null),d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},i=Object(a.useState)({id:null}),o=Object(Q.a)(i,2),c=o[0],u=o[1],s=Object(a.useState)(0),l=Object(Q.a)(s,2),f=l[0],d=l[1],m=Object(a.useState)(void 0),v=Object(Q.a)(m,2),h=v[0],E=v[1],p=r.a.useContext(ne),g=(p.state,p.dispatch),b=V("ArrowDown"),y=V("ArrowUp"),w=V("Enter");V("Escape"),Object(a.useEffect)((function(){e.length&&b&&d((function(t){return t<e.length-1?t+1:t}))}),[b]),Object(a.useEffect)((function(){e.length&&y&&d((function(e){return e>0?e-1:e}))}),[y]),Object(a.useEffect)((function(){e.length&&w&&(u(e[f]),n(e[f]),g({type:X.UPDATE_QUERY,query:e[f].name}))}),[f,w]),Object(a.useEffect)((function(){e.length&&h&&d(e.indexOf(h))}),[h]);return Object(a.useEffect)((function(){w||y||b||t&&t.current.focus()}),[]),[c,f,u,E]}(l,n,(function(e){o(e),c(e)})),m=Object(Q.a)(d,4),v=m[0],h=m[1],E=m[2],p=m[3];return console.log("sd",""===t),r.a.createElement("div",{ref:f,className:"selectionList",onWheel:function(e){return e.stopPropagation()}},r.a.createElement("div",{className:"".concat(t?"show":"hide")},l.map((function(e,t){return r.a.createElement(re,{key:e.id,isActive:t===h,isSelected:v.id===e.id,item:e,setSelected:E,setHovered:p,onClick:function(e){n.current.focus()},refCollector:i,onSelectionChange:o,_onSelectionChange:c})}))))},oe=n(14),ce=n.n(oe),ue=n(23);n(48);var se=function(){var e=Object(ue.a)(ce.a.mark((function e(t,n){return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coding-challenge.echoandapex.com/locations?q="+t);case 2:e.sent.json().then((function(e){e.predictions.length&&n(e.predictions)})).then((function(e){e&&n([])}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),le=function(e){var t=e.inputRef,n=e.setShowSuggestions,a=(e.value,r.a.useContext(ne)),i=a.state,o=a.dispatch,c=function(e){return o({type:X.UPDATE_SUGGESTIONS,suggestions:e})};return r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{onFocus:function(){return n(!0)},placeholder:"Search Locations",value:i.query,type:"text",name:"search_places",onChange:function(e){var t=e.target.value;o({type:X.UPDATE_QUERY,query:t}),t?se(t,c):c([]),e.target.value?n(!0):n(!1)},ref:t}),r.a.createElement("div",{className:"searchIcon"}))};function fe(e){var t=e.themeClass,n=e.onSelectionChange,i=Object(a.useRef)(null),o=function(){var e=Object(a.useRef)([]);return[e,function(t){e.current.includes(t)||e.current.push(t)}]}(),c=Object(Q.a)(o,2),u=c[0],s=c[1],l=function(e,t){var n=Object(a.useState)(!1),r=Object(Q.a)(n,2),i=r[0],o=r[1],c=V("Escape");Object(a.useLayoutEffect)((function(){c&&e.current&&(e.current.blur(),o(!1))})),Object(a.useLayoutEffect)((function(){var n=function(n){var a=t.current.map((function(e){return e.current})),r=n.target===e.current,i=a.includes(n.target);!r&&!i&&(n.stopPropagation(),o(!1))};return document.addEventListener("click",n),window.addEventListener("click",n),function(){document.removeEventListener("click",n),window.addEventListener("click",n)}}),[]);return[i,o]}(i,u),f=Object(Q.a)(l,2),d=f[0],m=f[1];return r.a.createElement("div",{className:t},r.a.createElement("div",{className:"autocomplete"},r.a.createElement(le,{inputRef:i,setShowSuggestions:m}),r.a.createElement(ie,{shouldDisplay:!!i.current&&d,inputRef:i,listItemRefCollector:s,onSelectionChange:n,_onSelectionChange:function(e){m(!1)}})))}fe.defaultProps={themeClass:"light",onSelectionChange:function(){}};var de=function(e){return r.a.createElement(ae,null,r.a.createElement(fe,e))},me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"fullpageFlexbox dark"},r.a.createElement("div",{className:"logo-box"}),r.a.createElement("div",{className:"autocompleteContainer"},r.a.createElement(de,{themeClass:"dark"}))))},ve=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"fullpageFlexbox"},r.a.createElement("div",{className:"message-alert"},"Please scroll or ",r.a.createElement("em",null,"swipe to the right")," to navigate examples."),r.a.createElement("div",{className:"logo-box"}),r.a.createElement("div",{className:"autocompleteContainer"},r.a.createElement(de,{themeClass:"light"}))))},he=n(10),Ee=n(24),pe=n.n(Ee),ge={width:"100%",height:"100%"};var be=r.a.memo(Object(he.GoogleApiWrapper)({apiKey:"AIzaSyBtP3n_AGKjiMb1YCt-UoYyQz8MEmMvJkY"})((function(e){var t=e.google,n=e.locationName,i=Object(a.useState)([]),o=Object(Q.a)(i,2),c=o[0],u=o[1],s=Object(a.useState)(),l=Object(Q.a)(s,2),f=l[0],d=l[1];if(f){var m={query:n,fields:["name","geometry","formatted_address"]};new t.maps.places.PlacesService(f).findPlaceFromQuery(m,(function(e,n){if(n===t.maps.places.PlacesServiceStatus.OK){for(var a=[],r=0;r<e.length;r++)a.push(e[r]);pe.a.isEqual(a,c)||(u(a),f.setCenter(e[0].geometry.location))}}))}return r.a.createElement("div",{onWheel:function(e){return e.stopPropagation()}},r.a.createElement(he.Map,{locationName:n,google:t,onReady:function(e,t){return d(t)},zoom:14,style:ge},c.map((function(e,t){return r.a.createElement(he.Marker,{key:"marker-".concat(t,"-").concat(Math.floor(1e5*Math.random())),title:e.formatted_address,name:e.name,position:{lat:e.geometry.location.lat(),lng:e.geometry.location.lng()}})}))))})));n(64);var ye=function(e){var t,n,a=e.info;return a.tags&&(t=a.tags.length?a.tags:void 0),a.description&&(n=a.description),r.a.createElement(r.a.Fragment,null,n?r.a.createElement("div",{className:"description"},r.a.createElement("h3",null,"Location:")," ",r.a.createElement("span",null,n)):void 0,t?r.a.createElement("div",{className:"tags"},r.a.createElement("h3",null,"Location Tags:")," ",r.a.createElement("span",null,t.map((function(e,t){return r.a.createElement("div",{key:"loctag-".concat(t),className:"tag"},e)})))):void 0)};n(65);var we=function(){var e=Object(a.useState)("Blooming Pixel Creatives"),t=Object(Q.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)({}),c=Object(Q.a)(o,2),u=c[0],s=c[1],l=Object(a.useState)(""),f=Object(Q.a)(l,2),d=f[0],m=f[1];!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){var t=Object(Q.a)(e,2);t[0],t[1]},t=function(){return e([window.innerHeight,window.innerWidth])};Object(a.useLayoutEffect)((function(){return window.addEventListener("resize",t,!1),document.addEventListener("resize",t,!1),t(),function(){window.removeEventListener("resize",t,!1),document.removeEventListener("resize",t,!1)}}))}((function(e){var t=Object(Q.a)(e,2),n=t[0],a=t[1];m(n>.825*a?"mobile":"")}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mapViewFlexbox ".concat(d)},r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"autocompleteContainer"},r.a.createElement(de,{themeClass:"light loc-browser",onSelectionChange:function(e){i(e.description),s(e)}})),r.a.createElement("div",{className:"infoBox"},r.a.createElement(ye,{info:u}))),r.a.createElement("div",{className:"map"},r.a.createElement("div",{style:{flex:0}}),r.a.createElement("div",{style:{flex:8,position:"relative",height:"100%"}},r.a.createElement(be,{locationName:n})),r.a.createElement("div",{style:{flex:0}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){return r.a.createElement(H,{orientation:"x",navDotPos:"bottom",transDuration:.8,navDotColor:"rgba(100, 100, 100, 1)",lazy:!0},r.a.createElement(z,null,r.a.createElement(ve,null)),r.a.createElement(z,null,r.a.createElement(me,null)),r.a.createElement(z,null,r.a.createElement(we,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.d09ebf34.chunk.js.map