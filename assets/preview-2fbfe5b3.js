var vr=Object.defineProperty;var f=(c,a)=>vr(c,"name",{value:a,configurable:!0});import{a as Hr}from"./index-cab4e39a.js";import{d as p2,c as P,w as hr,h as l4}from"./vue.esm-bundler-1651915a.js";import"./iframe-9c8b81f7.js";import"./es.map.constructor-01aba49d.js";import"./decorateStory-524b458e.js";function T3(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}f(T3,"ownKeys$1");function z(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?T3(Object(e),!0).forEach(function(r){b(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):T3(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}f(z,"_objectSpread2$1");function A1(c){return A1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},A1(c)}f(A1,"_typeof$1");function Vr(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}f(Vr,"_classCallCheck");function B3(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}f(B3,"_defineProperties");function Mr(c,a,e){return a&&B3(c.prototype,a),e&&B3(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}f(Mr,"_createClass");function b(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}f(b,"_defineProperty$1");function L2(c,a){return pr(c)||ur(c,a)||n4(c,a)||gr()}f(L2,"_slicedToArray");function t1(c){return Cr(c)||Lr(c)||n4(c)||dr()}f(t1,"_toConsumableArray$1");function Cr(c){if(Array.isArray(c))return s2(c)}f(Cr,"_arrayWithoutHoles$1");function pr(c){if(Array.isArray(c))return c}f(pr,"_arrayWithHoles");function Lr(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}f(Lr,"_iterableToArray$1");function ur(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,l,n;try{for(e=e.call(c);!(i=(l=e.next()).done)&&(r.push(l.value),!(a&&r.length===a));i=!0);}catch(o){s=!0,n=o}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw n}}return r}}f(ur,"_iterableToArrayLimit");function n4(c,a){if(c){if(typeof c=="string")return s2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s2(c,a)}}f(n4,"_unsupportedIterableToArray$1");function s2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}f(s2,"_arrayLikeToArray$1");function dr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}f(dr,"_nonIterableSpread$1");function gr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}f(gr,"_nonIterableRest");var q3=f(function(){},"noop"),u2={},o4={},t4=null,m4={mark:q3,measure:q3};try{typeof window<"u"&&(u2=window),typeof document<"u"&&(o4=document),typeof MutationObserver<"u"&&(t4=MutationObserver),typeof performance<"u"&&(m4=performance)}catch{}var xr=u2.navigator||{},D3=xr.userAgent,R3=D3===void 0?"":D3,O=u2,u=o4,E3=t4,C1=m4;O.document;var U=!!u.documentElement&&!!u.head&&typeof u.addEventListener=="function"&&typeof u.createElement=="function",z4=~R3.indexOf("MSIE")||~R3.indexOf("Trident/"),p1,L1,u1,d1,g1,D="___FONT_AWESOME___",l2=16,v4="fa",H4="svg-inline--fa",_="data-fa-i2svg",n2="data-fa-pseudo-element",br="data-fa-pseudo-element-pending",d2="data-prefix",g2="data-icon",U3="fontawesome-i2svg",Nr="async",Sr=["HTML","HEAD","STYLE","SCRIPT"],h4=function(){try{return!0}catch{return!1}}(),L="classic",d="sharp",x2=[L,d];function m1(c){return new Proxy(c,{get:f(function(e,r){return r in e?e[r]:e[L]},"get")})}f(m1,"familyProxy");var f1=m1((p1={},b(p1,L,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),b(p1,d,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),p1)),s1=m1((L1={},b(L1,L,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),b(L1,d,{solid:"fass",regular:"fasr"}),L1)),l1=m1((u1={},b(u1,L,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),b(u1,d,{fass:"fa-solid",fasr:"fa-regular"}),u1)),kr=m1((d1={},b(d1,L,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),b(d1,d,{"fa-solid":"fass","fa-regular":"fasr"}),d1)),Ar=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,V4="fa-layers-text",wr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,yr=m1((g1={},b(g1,L,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),b(g1,d,{900:"fass",400:"fasr"}),g1)),M4=[1,2,3,4,5,6,7,8,9,10],Pr=M4.concat([11,12,13,14,15,16,17,18,19,20]),Fr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},n1=new Set;Object.keys(s1[L]).map(n1.add.bind(n1));Object.keys(s1[d]).map(n1.add.bind(n1));var Tr=[].concat(x2,t1(n1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY]).concat(M4.map(function(c){return"".concat(c,"x")})).concat(Pr.map(function(c){return"w-".concat(c)})),e1=O.FontAwesomeConfig||{};function Br(c){var a=u.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}f(Br,"getAttrConfig");function qr(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}f(qr,"coerce");if(u&&typeof u.querySelector=="function"){var Dr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Dr.forEach(function(c){var a=L2(c,2),e=a[0],r=a[1],i=qr(Br(e));i!=null&&(e1[r]=i)})}var C4={styleDefault:"solid",familyDefault:"classic",cssPrefix:v4,replacementClass:H4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};e1.familyPrefix&&(e1.cssPrefix=e1.familyPrefix);var J=z(z({},C4),e1);J.autoReplaceSvg||(J.observeMutations=!1);var v={};Object.keys(C4).forEach(function(c){Object.defineProperty(v,c,{enumerable:!0,set:f(function(e){J[c]=e,r1.forEach(function(r){return r(v)})},"set"),get:f(function(){return J[c]},"get")})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:f(function(a){J.cssPrefix=a,r1.forEach(function(e){return e(v)})},"set"),get:f(function(){return J.cssPrefix},"get")});O.FontAwesomeConfig=v;var r1=[];function Rr(c){return r1.push(c),function(){r1.splice(r1.indexOf(c),1)}}f(Rr,"onChange");var $=l2,q={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Er(c){if(!(!c||!U)){var a=u.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=u.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],l=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(r=s)}return u.head.insertBefore(a,r),c}}f(Er,"insertCss");var Ur="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function o1(){for(var c=12,a="";c-- >0;)a+=Ur[Math.random()*62|0];return a}f(o1,"nextUniqueId");function c1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}f(c1,"toArray");function b2(c){return c.classList?c1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}f(b2,"classArray");function p4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}f(p4,"htmlEscape");function Gr(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(p4(c[e]),'" ')},"").trim()}f(Gr,"joinAttributes");function T1(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}f(T1,"joinStyles");function N2(c){return c.size!==q.size||c.x!==q.x||c.y!==q.y||c.rotate!==q.rotate||c.flipX||c.flipY}f(N2,"transformIsMeaningful");function $r(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),n="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(s," ").concat(l," ").concat(n)},m={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:o,path:m}}f($r,"transformForSvg");function Or(c){var a=c.transform,e=c.width,r=e===void 0?l2:e,i=c.height,s=i===void 0?l2:i,l=c.startCentered,n=l===void 0?!1:l,o="";return n&&z4?o+="translate(".concat(a.x/$-r/2,"em, ").concat(a.y/$-s/2,"em) "):n?o+="translate(calc(-50% + ".concat(a.x/$,"em), calc(-50% + ").concat(a.y/$,"em)) "):o+="translate(".concat(a.x/$,"em, ").concat(a.y/$,"em) "),o+="scale(".concat(a.size/$*(a.flipX?-1:1),", ").concat(a.size/$*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}f(Or,"transformForCss");var Wr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function L4(){var c=v4,a=H4,e=v.cssPrefix,r=v.replacementClass,i=Wr;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),l=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(l,"--".concat(e,"-")).replace(n,".".concat(r))}return i}f(L4,"css");var G3=!1;function e2(){v.autoAddCss&&!G3&&(Er(L4()),G3=!0)}f(e2,"ensureCss");var Ir={mixout:f(function(){return{dom:{css:L4,insertCss:e2}}},"mixout"),hooks:f(function(){return{beforeDOMElementCreation:f(function(){e2()},"beforeDOMElementCreation"),beforeI2svg:f(function(){e2()},"beforeI2svg")}},"hooks")},R=O||{};R[D]||(R[D]={});R[D].styles||(R[D].styles={});R[D].hooks||(R[D].hooks={});R[D].shims||(R[D].shims=[]);var T=R[D],u4=[],Zr=f(function c(){u.removeEventListener("DOMContentLoaded",c),w1=1,u4.map(function(a){return a()})},"listener"),w1=!1;U&&(w1=(u.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(u.readyState),w1||u.addEventListener("DOMContentLoaded",Zr));function jr(c){U&&(w1?setTimeout(c,0):u4.push(c))}f(jr,"domready");function z1(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?p4(c):"<".concat(a," ").concat(Gr(r),">").concat(s.map(z1).join(""),"</").concat(a,">")}f(z1,"toHtml");function $3(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}f($3,"iconFromMapping");var _r=f(function(a,e){return function(r,i,s,l){return a.call(e,r,i,s,l)}},"bindInternal4"),r2=f(function(a,e,r,i){var s=Object.keys(a),l=s.length,n=i!==void 0?_r(e,i):e,o,m,t;for(r===void 0?(o=1,t=a[s[0]]):(o=0,t=r);o<l;o++)m=s[o],t=n(t,a[m],m,a);return t},"fastReduceObject");function Yr(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}f(Yr,"ucs2decode");function o2(c){var a=Yr(c);return a.length===1?a[0].toString(16):null}f(o2,"toHex");function Xr(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}f(Xr,"codePointAt");function O3(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}f(O3,"normalizeIcons");function t2(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=O3(a);typeof T.hooks.addPack=="function"&&!i?T.hooks.addPack(c,O3(a)):T.styles[c]=z(z({},T.styles[c]||{}),s),c==="fas"&&t2("fa",a)}f(t2,"defineIcons");var x1,b1,N1,X=T.styles,Kr=T.shims,Qr=(x1={},b(x1,L,Object.values(l1[L])),b(x1,d,Object.values(l1[d])),x1),S2=null,d4={},g4={},x4={},b4={},N4={},Jr=(b1={},b(b1,L,Object.keys(f1[L])),b(b1,d,Object.keys(f1[d])),b1);function ci(c){return~Tr.indexOf(c)}f(ci,"isReserved");function ai(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!ci(i)?i:null}f(ai,"getIconName");var S4=f(function(){var a=f(function(s){return r2(X,function(l,n,o){return l[o]=r2(n,s,{}),l},{})},"lookup");d4=a(function(i,s,l){if(s[3]&&(i[s[3]]=l),s[2]){var n=s[2].filter(function(o){return typeof o=="number"});n.forEach(function(o){i[o.toString(16)]=l})}return i}),g4=a(function(i,s,l){if(i[l]=l,s[2]){var n=s[2].filter(function(o){return typeof o=="string"});n.forEach(function(o){i[o]=l})}return i}),N4=a(function(i,s,l){var n=s[2];return i[l]=l,n.forEach(function(o){i[o]=l}),i});var e="far"in X||v.autoFetchSvg,r=r2(Kr,function(i,s){var l=s[0],n=s[1],o=s[2];return n==="far"&&!e&&(n="fas"),typeof l=="string"&&(i.names[l]={prefix:n,iconName:o}),typeof l=="number"&&(i.unicodes[l.toString(16)]={prefix:n,iconName:o}),i},{names:{},unicodes:{}});x4=r.names,b4=r.unicodes,S2=B1(v.styleDefault,{family:v.familyDefault})},"build");Rr(function(c){S2=B1(c.styleDefault,{family:v.familyDefault})});S4();function k2(c,a){return(d4[c]||{})[a]}f(k2,"byUnicode");function ei(c,a){return(g4[c]||{})[a]}f(ei,"byLigature");function j(c,a){return(N4[c]||{})[a]}f(j,"byAlias");function k4(c){return x4[c]||{prefix:null,iconName:null}}f(k4,"byOldName");function ri(c){var a=b4[c],e=k2("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}f(ri,"byOldUnicode");function W(){return S2}f(W,"getDefaultUsablePrefix");var A2=f(function(){return{prefix:null,iconName:null,rest:[]}},"emptyCanonicalIcon");function B1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?L:e,i=f1[r][c],s=s1[r][c]||s1[r][i],l=c in T.styles?c:null;return s||l||null}f(B1,"getCanonicalPrefix");var W3=(N1={},b(N1,L,Object.keys(l1[L])),b(N1,d,Object.keys(l1[d])),N1);function q1(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},b(a,L,"".concat(v.cssPrefix,"-").concat(L)),b(a,d,"".concat(v.cssPrefix,"-").concat(d)),a),l=null,n=L;(c.includes(s[L])||c.some(function(m){return W3[L].includes(m)}))&&(n=L),(c.includes(s[d])||c.some(function(m){return W3[d].includes(m)}))&&(n=d);var o=c.reduce(function(m,t){var H=ai(v.cssPrefix,t);if(X[t]?(t=Qr[n].includes(t)?kr[n][t]:t,l=t,m.prefix=t):Jr[n].indexOf(t)>-1?(l=t,m.prefix=B1(t,{family:n})):H?m.iconName=H:t!==v.replacementClass&&t!==s[L]&&t!==s[d]&&m.rest.push(t),!i&&m.prefix&&m.iconName){var M=l==="fa"?k4(m.iconName):{},C=j(m.prefix,m.iconName);M.prefix&&(l=null),m.iconName=M.iconName||C||m.iconName,m.prefix=M.prefix||m.prefix,m.prefix==="far"&&!X.far&&X.fas&&!v.autoFetchSvg&&(m.prefix="fas")}return m},A2());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&n===d&&(X.fass||v.autoFetchSvg)&&(o.prefix="fass",o.iconName=j(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||l==="fa")&&(o.prefix=W()||"fas"),o}f(q1,"getCanonicalIcon");var ii=function(){function c(){Vr(this,c),this.definitions={}}return f(c,"Library"),Mr(c,[{key:"add",value:f(function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var l=i.reduce(this._pullDefinitions,{});Object.keys(l).forEach(function(n){e.definitions[n]=z(z({},e.definitions[n]||{}),l[n]),t2(n,l[n]);var o=l1[L][n];o&&t2(o,l[n]),S4()})},"add")},{key:"reset",value:f(function(){this.definitions={}},"reset")},{key:"_pullDefinitions",value:f(function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var l=i[s],n=l.prefix,o=l.iconName,m=l.icon,t=m[2];e[n]||(e[n]={}),t.length>0&&t.forEach(function(H){typeof H=="string"&&(e[n][H]=m)}),e[n][o]=m}),e},"_pullDefinitions")}]),c}(),I3=[],K={},Q={},fi=Object.keys(Q);function si(c,a){var e=a.mixoutsTo;return I3=c,K={},Object.keys(Q).forEach(function(r){fi.indexOf(r)===-1&&delete Q[r]}),I3.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(l){typeof i[l]=="function"&&(e[l]=i[l]),A1(i[l])==="object"&&Object.keys(i[l]).forEach(function(n){e[l]||(e[l]={}),e[l][n]=i[l][n]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(l){K[l]||(K[l]=[]),K[l].push(s[l])})}r.provides&&r.provides(Q)}),e}f(si,"registerPlugins");function m2(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=K[c]||[];return s.forEach(function(l){a=l.apply(null,[a].concat(r))}),a}f(m2,"chainHooks");function Y(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=K[c]||[];i.forEach(function(s){s.apply(null,e)})}f(Y,"callHooks");function E(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Q[c]?Q[c].apply(null,a):void 0}f(E,"callProvided");function z2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||W();if(a)return a=j(e,a)||a,$3(A4.definitions,e,a)||$3(T.styles,e,a)}f(z2,"findIconDefinition");var A4=new ii,li=f(function(){v.autoReplaceSvg=!1,v.observeMutations=!1,Y("noAuto")},"noAuto"),ni={i2svg:f(function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(Y("beforeI2svg",a),E("pseudoElements2svg",a),E("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},"i2svg"),watch:f(function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,jr(function(){ti({autoReplaceSvgRoot:e}),Y("watch",a)})},"watch")},oi={icon:f(function(a){if(a===null)return null;if(A1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:j(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=B1(a[0]);return{prefix:r,iconName:j(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(v.cssPrefix,"-"))>-1||a.match(Ar))){var i=q1(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||W(),iconName:j(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=W();return{prefix:s,iconName:j(s,a)||a}}},"icon")},w={noAuto:li,config:v,dom:ni,parse:oi,library:A4,findIconDefinition:z2,toHtml:z1},ti=f(function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?u:e;(Object.keys(T.styles).length>0||v.autoFetchSvg)&&U&&v.autoReplaceSvg&&w.dom.i2svg({node:r})},"autoReplace");function D1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:f(function(){return c.abstract.map(function(r){return z1(r)})},"get")}),Object.defineProperty(c,"node",{get:f(function(){if(U){var r=u.createElement("div");return r.innerHTML=c.html,r.children}},"get")}),c}f(D1,"domVariants");function mi(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,l=c.transform;if(N2(l)&&e.found&&!r.found){var n=e.width,o=e.height,m={x:n/o/2,y:.5};i.style=T1(z(z({},s),{},{"transform-origin":"".concat(m.x+l.x/16,"em ").concat(m.y+l.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}f(mi,"asIcon");function zi(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,l=s===!0?"".concat(a,"-").concat(v.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},i),{},{id:l}),children:r}]}]}f(zi,"asSymbol");function w2(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,l=c.transform,n=c.symbol,o=c.title,m=c.maskId,t=c.titleId,H=c.extra,M=c.watchable,C=M===void 0?!1:M,N=r.found?r:e,S=N.width,k=N.height,h=i==="fak",V=[v.replacementClass,s?"".concat(v.cssPrefix,"-").concat(s):""].filter(function(G){return H.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(H.classes).join(" "),p={children:[],attributes:z(z({},H.attributes),{},{"data-prefix":i,"data-icon":s,class:V,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(k)})},g=h&&!~H.classes.indexOf("fa-fw")?{width:"".concat(S/k*16*.0625,"em")}:{};C&&(p.attributes[_]=""),o&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(t||o1())},children:[o]}),delete p.attributes.title);var x=z(z({},p),{},{prefix:i,iconName:s,main:e,mask:r,maskId:m,transform:l,symbol:n,styles:z(z({},g),H.styles)}),B=r.found&&e.found?E("generateAbstractMask",x)||{children:[],attributes:{}}:E("generateAbstractIcon",x)||{children:[],attributes:{}},y=B.children,a2=B.attributes;return x.children=y,x.attributes=a2,n?zi(x):mi(x)}f(w2,"makeInlineSvgAbstract");function Z3(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,l=c.extra,n=c.watchable,o=n===void 0?!1:n,m=z(z(z({},l.attributes),s?{title:s}:{}),{},{class:l.classes.join(" ")});o&&(m[_]="");var t=z({},l.styles);N2(i)&&(t.transform=Or({transform:i,startCentered:!0,width:e,height:r}),t["-webkit-transform"]=t.transform);var H=T1(t);H.length>0&&(m.style=H);var M=[];return M.push({tag:"span",attributes:m,children:[a]}),s&&M.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),M}f(Z3,"makeLayersTextAbstract");function vi(c){var a=c.content,e=c.title,r=c.extra,i=z(z(z({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=T1(r.styles);s.length>0&&(i.style=s);var l=[];return l.push({tag:"span",attributes:i,children:[a]}),e&&l.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),l}f(vi,"makeLayersCounterAbstract");var i2=T.styles;function v2(c){var a=c[0],e=c[1],r=c.slice(4),i=L2(r,1),s=i[0],l=null;return Array.isArray(s)?l={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(Z.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Z.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Z.PRIMARY),fill:"currentColor",d:s[1]}}]}:l={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:l}}f(v2,"asFoundIcon");var Hi={found:!1,width:512,height:512};function hi(c,a){!h4&&!v.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}f(hi,"maybeNotifyMissing");function H2(c,a){var e=a;return a==="fa"&&v.styleDefault!==null&&(a=W()),new Promise(function(r,i){if(E("missingIconAbstract"),e==="fa"){var s=k4(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&i2[a]&&i2[a][c]){var l=i2[a][c];return r(v2(l))}hi(c,a),r(z(z({},Hi),{},{icon:v.showMissingIcons&&c?E("missingIconAbstract")||{}:{}}))})}f(H2,"findIcon");var j3=f(function(){},"noop"),h2=v.measurePerformance&&C1&&C1.mark&&C1.measure?C1:{mark:j3,measure:j3},a1='FA "6.3.0"',Vi=f(function(a){return h2.mark("".concat(a1," ").concat(a," begins")),function(){return w4(a)}},"begin"),w4=f(function(a){h2.mark("".concat(a1," ").concat(a," ends")),h2.measure("".concat(a1," ").concat(a),"".concat(a1," ").concat(a," begins"),"".concat(a1," ").concat(a," ends"))},"end"),y2={begin:Vi,end:w4},S1=f(function(){},"noop");function _3(c){var a=c.getAttribute?c.getAttribute(_):null;return typeof a=="string"}f(_3,"isWatched");function Mi(c){var a=c.getAttribute?c.getAttribute(d2):null,e=c.getAttribute?c.getAttribute(g2):null;return a&&e}f(Mi,"hasPrefixAndIcon");function Ci(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(v.replacementClass)}f(Ci,"hasBeenReplaced");function pi(){if(v.autoReplaceSvg===!0)return k1.replace;var c=k1[v.autoReplaceSvg];return c||k1.replace}f(pi,"getMutator");function Li(c){return u.createElementNS("http://www.w3.org/2000/svg",c)}f(Li,"createElementNS");function ui(c){return u.createElement(c)}f(ui,"createElement");function y4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Li:ui:e;if(typeof c=="string")return u.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(l){i.setAttribute(l,c.attributes[l])});var s=c.children||[];return s.forEach(function(l){i.appendChild(y4(l,{ceFn:r}))}),i}f(y4,"convertSVG");function di(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}f(di,"nodeAsComment");var k1={replace:f(function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(y4(i),e)}),e.getAttribute(_)===null&&v.keepOriginalSource){var r=u.createComment(di(e));e.parentNode.replaceChild(r,e)}else e.remove()},"replace"),nest:f(function(a){var e=a[0],r=a[1];if(~b2(e).indexOf(v.replacementClass))return k1.replace(a);var i=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(n,o){return o===v.replacementClass||o.match(i)?n.toSvg.push(o):n.toNode.push(o),n},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var l=r.map(function(n){return z1(n)}).join(`
`);e.setAttribute(_,""),e.innerHTML=l},"nest")};function Y3(c){c()}f(Y3,"performOperationSync");function P4(c,a){var e=typeof a=="function"?a:S1;if(c.length===0)e();else{var r=Y3;v.mutateApproach===Nr&&(r=O.requestAnimationFrame||Y3),r(function(){var i=pi(),s=y2.begin("mutate");c.map(i),s(),e()})}}f(P4,"perform");var P2=!1;function F4(){P2=!0}f(F4,"disableObservation");function V2(){P2=!1}f(V2,"enableObservation");var y1=null;function X3(c){if(E3&&v.observeMutations){var a=c.treeCallback,e=a===void 0?S1:a,r=c.nodeCallback,i=r===void 0?S1:r,s=c.pseudoElementsCallback,l=s===void 0?S1:s,n=c.observeMutationsRoot,o=n===void 0?u:n;y1=new E3(function(m){if(!P2){var t=W();c1(m).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!_3(H.addedNodes[0])&&(v.searchPseudoElements&&l(H.target),e(H.target)),H.type==="attributes"&&H.target.parentNode&&v.searchPseudoElements&&l(H.target.parentNode),H.type==="attributes"&&_3(H.target)&&~Fr.indexOf(H.attributeName))if(H.attributeName==="class"&&Mi(H.target)){var M=q1(b2(H.target)),C=M.prefix,N=M.iconName;H.target.setAttribute(d2,C||t),N&&H.target.setAttribute(g2,N)}else Ci(H.target)&&i(H.target)})}}),U&&y1.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}f(X3,"observe");function gi(){y1&&y1.disconnect()}f(gi,"disconnect");function xi(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),l=s[0],n=s.slice(1);return l&&n.length>0&&(r[l]=n.join(":").trim()),r},{})),e}f(xi,"styleParser");function bi(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=q1(b2(c));return i.prefix||(i.prefix=W()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=ei(i.prefix,c.innerText)||k2(i.prefix,o2(c.innerText))),!i.iconName&&v.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}f(bi,"classParser");function Ni(c){var a=c1(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return v.autoA11y&&(e?a["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(r||o1()):(a["aria-hidden"]="true",a.focusable="false")),a}f(Ni,"attributesParser");function Si(){return{iconName:null,title:null,titleId:null,prefix:null,transform:q,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}f(Si,"blankMeta");function K3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=bi(c),r=e.iconName,i=e.prefix,s=e.rest,l=Ni(c),n=m2("parseNodeAttributes",{},c),o=a.styleParser?xi(c):[];return z({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:q,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:l}},n)}f(K3,"parseMeta");var ki=T.styles;function T4(c){var a=v.autoReplaceSvg==="nest"?K3(c,{styleParser:!1}):K3(c);return~a.extra.classes.indexOf(V4)?E("generateLayersText",c,a):E("generateSvgReplacementMutation",c,a)}f(T4,"generateMutation");var I=new Set;x2.map(function(c){I.add("fa-".concat(c))});Object.keys(f1[L]).map(I.add.bind(I));Object.keys(f1[d]).map(I.add.bind(I));I=t1(I);function Q3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();var e=u.documentElement.classList,r=f(function(H){return e.add("".concat(U3,"-").concat(H))},"hclAdd"),i=f(function(H){return e.remove("".concat(U3,"-").concat(H))},"hclRemove"),s=v.autoFetchSvg?I:x2.map(function(t){return"fa-".concat(t)}).concat(Object.keys(ki));s.includes("fa")||s.push("fa");var l=[".".concat(V4,":not([").concat(_,"])")].concat(s.map(function(t){return".".concat(t,":not([").concat(_,"])")})).join(", ");if(l.length===0)return Promise.resolve();var n=[];try{n=c1(c.querySelectorAll(l))}catch{}if(n.length>0)r("pending"),i("complete");else return Promise.resolve();var o=y2.begin("onTree"),m=n.reduce(function(t,H){try{var M=T4(H);M&&t.push(M)}catch(C){h4||C.name==="MissingIcon"&&console.error(C)}return t},[]);return new Promise(function(t,H){Promise.all(m).then(function(M){P4(M,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),o(),t()})}).catch(function(M){o(),H(M)})})}f(Q3,"onTree");function Ai(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;T4(c).then(function(e){e&&P4([e],a)})}f(Ai,"onNode");function wi(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:z2(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:z2(i||{})),c(r,z(z({},e),{},{mask:i}))}}f(wi,"resolveIcons");var yi=f(function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?q:r,s=e.symbol,l=s===void 0?!1:s,n=e.mask,o=n===void 0?null:n,m=e.maskId,t=m===void 0?null:m,H=e.title,M=H===void 0?null:H,C=e.titleId,N=C===void 0?null:C,S=e.classes,k=S===void 0?[]:S,h=e.attributes,V=h===void 0?{}:h,p=e.styles,g=p===void 0?{}:p;if(a){var x=a.prefix,B=a.iconName,y=a.icon;return D1(z({type:"icon"},a),function(){return Y("beforeDOMElementCreation",{iconDefinition:a,params:e}),v.autoA11y&&(M?V["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(N||o1()):(V["aria-hidden"]="true",V.focusable="false")),w2({icons:{main:v2(y),mask:o?v2(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:B,transform:z(z({},q),i),symbol:l,title:M,maskId:t,titleId:N,extra:{attributes:V,styles:g,classes:k}})})}},"render"),Pi={mixout:f(function(){return{icon:wi(yi)}},"mixout"),hooks:f(function(){return{mutationObserverCallbacks:f(function(e){return e.treeCallback=Q3,e.nodeCallback=Ai,e},"mutationObserverCallbacks")}},"hooks"),provides:f(function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?u:r,s=e.callback,l=s===void 0?function(){}:s;return Q3(i,l)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,l=r.titleId,n=r.prefix,o=r.transform,m=r.symbol,t=r.mask,H=r.maskId,M=r.extra;return new Promise(function(C,N){Promise.all([H2(i,n),t.iconName?H2(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var k=L2(S,2),h=k[0],V=k[1];C([e,w2({icons:{main:h,mask:V},prefix:n,iconName:i,transform:o,symbol:m,maskId:H,title:s,titleId:l,extra:M,watchable:!0})])}).catch(N)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,l=e.transform,n=e.styles,o=T1(n);o.length>0&&(i.style=o);var m;return N2(l)&&(m=E("generateAbstractTransformGrouping",{main:s,transform:l,containerWidth:s.width,iconWidth:s.width})),r.push(m||s.icon),{children:r,attributes:i}}},"provides")},Fi={mixout:f(function(){return{layer:f(function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return D1({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:e,params:r});var l=[];return e(function(n){Array.isArray(n)?n.map(function(o){l=l.concat(o.abstract)}):l=l.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(t1(s)).join(" ")},children:l}]})},"layer")}},"mixout")},Ti={mixout:f(function(){return{counter:f(function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,l=r.classes,n=l===void 0?[]:l,o=r.attributes,m=o===void 0?{}:o,t=r.styles,H=t===void 0?{}:t;return D1({type:"counter",content:e},function(){return Y("beforeDOMElementCreation",{content:e,params:r}),vi({content:e.toString(),title:s,extra:{attributes:m,styles:H,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(t1(n))}})})},"counter")}},"mixout")},Bi={mixout:f(function(){return{text:f(function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?q:i,l=r.title,n=l===void 0?null:l,o=r.classes,m=o===void 0?[]:o,t=r.attributes,H=t===void 0?{}:t,M=r.styles,C=M===void 0?{}:M;return D1({type:"text",content:e},function(){return Y("beforeDOMElementCreation",{content:e,params:r}),Z3({content:e,transform:z(z({},q),s),title:n,extra:{attributes:H,styles:C,classes:["".concat(v.cssPrefix,"-layers-text")].concat(t1(m))}})})},"text")}},"mixout"),provides:f(function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,l=r.extra,n=null,o=null;if(z4){var m=parseInt(getComputedStyle(e).fontSize,10),t=e.getBoundingClientRect();n=t.width/m,o=t.height/m}return v.autoA11y&&!i&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,Z3({content:e.innerHTML,width:n,height:o,transform:s,title:i,extra:l,watchable:!0})])}},"provides")},qi=new RegExp('"',"ug"),J3=[1105920,1112319];function Di(c){var a=c.replace(qi,""),e=Xr(a,0),r=e>=J3[0]&&e<=J3[1],i=a.length===2?a[0]===a[1]:!1;return{value:o2(i?a[0]:a),isSecondary:r||i}}f(Di,"hexValueFromContent");function c4(c,a){var e="".concat(br).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=c1(c.children),l=s.filter(function(y){return y.getAttribute(n2)===a})[0],n=O.getComputedStyle(c,a),o=n.getPropertyValue("font-family").match(wr),m=n.getPropertyValue("font-weight"),t=n.getPropertyValue("content");if(l&&!o)return c.removeChild(l),r();if(o&&t!=="none"&&t!==""){var H=n.getPropertyValue("content"),M=~["Sharp"].indexOf(o[2])?d:L,C=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?s1[M][o[2].toLowerCase()]:yr[M][m],N=Di(H),S=N.value,k=N.isSecondary,h=o[0].startsWith("FontAwesome"),V=k2(C,S),p=V;if(h){var g=ri(S);g.iconName&&g.prefix&&(V=g.iconName,C=g.prefix)}if(V&&!k&&(!l||l.getAttribute(d2)!==C||l.getAttribute(g2)!==p)){c.setAttribute(e,p),l&&c.removeChild(l);var x=Si(),B=x.extra;B.attributes[n2]=a,H2(V,C).then(function(y){var a2=w2(z(z({},x),{},{icons:{main:y,mask:A2()},prefix:C,iconName:p,extra:B,watchable:!0})),G=u.createElement("svg");a==="::before"?c.insertBefore(G,c.firstChild):c.appendChild(G),G.outerHTML=a2.map(function(zr){return z1(zr)}).join(`
`),c.removeAttribute(e),r()}).catch(i)}else r()}else r()})}f(c4,"replaceForPosition");function Ri(c){return Promise.all([c4(c,"::before"),c4(c,"::after")])}f(Ri,"replace");function Ei(c){return c.parentNode!==document.head&&!~Sr.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(n2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}f(Ei,"processable");function a4(c){if(U)return new Promise(function(a,e){var r=c1(c.querySelectorAll("*")).filter(Ei).map(Ri),i=y2.begin("searchPseudoElements");F4(),Promise.all(r).then(function(){i(),V2(),a()}).catch(function(){i(),V2(),e()})})}f(a4,"searchPseudoElements");var Ui={hooks:f(function(){return{mutationObserverCallbacks:f(function(e){return e.pseudoElementsCallback=a4,e},"mutationObserverCallbacks")}},"hooks"),provides:f(function(a){a.pseudoElements2svg=function(e){var r=e.node,i=r===void 0?u:r;v.searchPseudoElements&&a4(i)}},"provides")},e4=!1,Gi={mixout:f(function(){return{dom:{unwatch:f(function(){F4(),e4=!0},"unwatch")}}},"mixout"),hooks:f(function(){return{bootstrap:f(function(){X3(m2("mutationObserverCallbacks",{}))},"bootstrap"),noAuto:f(function(){gi()},"noAuto"),watch:f(function(e){var r=e.observeMutationsRoot;e4?V2():X3(m2("mutationObserverCallbacks",{observeMutationsRoot:r}))},"watch")}},"hooks")},r4=f(function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),l=s[0],n=s.slice(1).join("-");if(l&&n==="h")return r.flipX=!0,r;if(l&&n==="v")return r.flipY=!0,r;if(n=parseFloat(n),isNaN(n))return r;switch(l){case"grow":r.size=r.size+n;break;case"shrink":r.size=r.size-n;break;case"left":r.x=r.x-n;break;case"right":r.x=r.x+n;break;case"up":r.y=r.y-n;break;case"down":r.y=r.y+n;break;case"rotate":r.rotate=r.rotate+n;break}return r},e)},"parseTransformString"),$i={mixout:f(function(){return{parse:{transform:f(function(e){return r4(e)},"transform")}}},"mixout"),hooks:f(function(){return{parseNodeAttributes:f(function(e,r){var i=r.getAttribute("data-fa-transform");return i&&(e.transform=r4(i)),e},"parseNodeAttributes")}},"hooks"),provides:f(function(a){a.generateAbstractTransformGrouping=function(e){var r=e.main,i=e.transform,s=e.containerWidth,l=e.iconWidth,n={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),t="rotate(".concat(i.rotate," 0 0)"),H={transform:"".concat(o," ").concat(m," ").concat(t)},M={transform:"translate(".concat(l/2*-1," -256)")},C={outer:n,inner:H,path:M};return{tag:"g",attributes:z({},C.outer),children:[{tag:"g",attributes:z({},C.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:z(z({},r.icon.attributes),C.path)}]}]}}},"provides")},f2={x:0,y:0,width:"100%",height:"100%"};function i4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}f(i4,"fillBlack");function Oi(c){return c.tag==="g"?c.children:[c]}f(Oi,"deGroup");var Wi={hooks:f(function(){return{parseNodeAttributes:f(function(e,r){var i=r.getAttribute("data-fa-mask"),s=i?q1(i.split(" ").map(function(l){return l.trim()})):A2();return s.prefix||(s.prefix=W()),e.mask=s,e.maskId=r.getAttribute("data-fa-mask-id"),e},"parseNodeAttributes")}},"hooks"),provides:f(function(a){a.generateAbstractMask=function(e){var r=e.children,i=e.attributes,s=e.main,l=e.mask,n=e.maskId,o=e.transform,m=s.width,t=s.icon,H=l.width,M=l.icon,C=$r({transform:o,containerWidth:H,iconWidth:m}),N={tag:"rect",attributes:z(z({},f2),{},{fill:"white"})},S=t.children?{children:t.children.map(i4)}:{},k={tag:"g",attributes:z({},C.inner),children:[i4(z({tag:t.tag,attributes:z(z({},t.attributes),C.path)},S))]},h={tag:"g",attributes:z({},C.outer),children:[k]},V="mask-".concat(n||o1()),p="clip-".concat(n||o1()),g={tag:"mask",attributes:z(z({},f2),{},{id:V,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,h]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:Oi(M)},g]};return r.push(x,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(V,")")},f2)}),{children:r,attributes:i}}},"provides")},Ii={provides:f(function(a){var e=!1;O.matchMedia&&(e=O.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:z(z({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var l=z(z({},s),{},{attributeName:"opacity"}),n={tag:"circle",attributes:z(z({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||n.children.push({tag:"animate",attributes:z(z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},l),{},{values:"1;0;1;1;0;1;"})}),r.push(n),r.push({tag:"path",attributes:z(z({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:z(z({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:z(z({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}},"provides")},Zi={hooks:f(function(){return{parseNodeAttributes:f(function(e,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return e.symbol=s,e},"parseNodeAttributes")}},"hooks")},ji=[Ir,Pi,Fi,Ti,Bi,Ui,Gi,$i,Wi,Ii,Zi];si(ji,{mixoutsTo:w});w.noAuto;var F2=w.config,_i=w.library;w.dom;var P1=w.parse;w.findIconDefinition;w.toHtml;var Yi=w.icon;w.layer;var Xi=w.text;w.counter;function f4(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}f(f4,"ownKeys");function F(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?f4(Object(e),!0).forEach(function(r){A(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):f4(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}f(F,"_objectSpread2");function F1(c){return F1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},F1(c)}f(F1,"_typeof");function A(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}f(A,"_defineProperty");function Ki(c,a){if(c==null)return{};var e={},r=Object.keys(c),i,s;for(s=0;s<r.length;s++)i=r[s],!(a.indexOf(i)>=0)&&(e[i]=c[i]);return e}f(Ki,"_objectWithoutPropertiesLoose");function Qi(c,a){if(c==null)return{};var e=Ki(c,a),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(c,r)&&(e[r]=c[r])}return e}f(Qi,"_objectWithoutProperties");function M2(c){return Ji(c)||cf(c)||af(c)||ef()}f(M2,"_toConsumableArray");function Ji(c){if(Array.isArray(c))return C2(c)}f(Ji,"_arrayWithoutHoles");function cf(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}f(cf,"_iterableToArray");function af(c,a){if(c){if(typeof c=="string")return C2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return C2(c,a)}}f(af,"_unsupportedIterableToArray");function C2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}f(C2,"_arrayLikeToArray");function ef(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
//# sourceMappingURL=preview-2fbfe5b3.js.map