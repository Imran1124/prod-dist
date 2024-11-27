import{c as H,j as i,S as B,U as W,A as K,d as J,e as Q,g as k}from"./index-DQGuf2o5.js";import{i as X,r as P,L as F}from"./router-Bu5b4_LN.js";import{a as z,P as Z}from"./index-DUO4P5gm.js";import{C as M}from"./card-DT0AfMCL.js";import{h as C}from"./moment-BjLXg0w5.js";import"./axios-DmypytPv.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=H("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);var _={},U=function(){return U=Object.assign||function(r){for(var e,n=1,a=arguments.length;n<a;n++)for(var t in e=arguments[n])Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r},U.apply(this,arguments)},te=function(){function r(e,n,a){var t=this;this.endVal=n,this.options=a,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(l){t.startTime||(t.startTime=l);var o=l-t.startTime;t.remaining=t.duration-o,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(o,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(o,t.startVal,t.endVal-t.startVal,t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(o/t.duration);var u=t.countDown?t.frameVal<t.endVal:t.frameVal>t.endVal;t.frameVal=u?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),o<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.options.onCompleteCallback&&t.options.onCompleteCallback()},this.formatNumber=function(l){var o,u,c,d,h=l<0?"-":"";o=Math.abs(l).toFixed(t.options.decimalPlaces);var x=(o+="").split(".");if(u=x[0],c=x.length>1?t.options.decimal+x[1]:"",t.options.useGrouping){d="";for(var s=3,m=0,g=0,y=u.length;g<y;++g)t.options.useIndianSeparators&&g===4&&(s=2,m=1),g!==0&&m%s==0&&(d=t.options.separator+d),m++,d=u[y-g-1]+d;u=d}return t.options.numerals&&t.options.numerals.length&&(u=u.replace(/[0-9]/g,function(p){return t.options.numerals[+p]}),c=c.replace(/[0-9]/g,function(p){return t.options.numerals[+p]})),h+t.options.prefix+u+c+t.options.suffix},this.easeOutExpo=function(l,o,u,c){return u*(1-Math.pow(2,-10*l/c))*1024/1023+o},this.options=U(U({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error||(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return t.handleScroll(t)}),window.onscroll=function(){window.onScrollFns.forEach(function(l){return l()})},this.handleScroll(this)))}return r.prototype.handleScroll=function(e){if(e&&window&&!e.once){var n=window.innerHeight+window.scrollY,a=e.el.getBoundingClientRect(),t=a.top+window.pageYOffset,l=a.top+a.height+window.pageYOffset;l<n&&l>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>l||t>n)&&!e.paused&&e.reset()}},r.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var n=e-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var a=this.countDown?1:-1;this.endVal=e+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},r.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},r.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},r.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},r.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},r.prototype.printValue=function(e){var n;if(this.el){var a=this.formattingFn(e);!((n=this.options.plugin)===null||n===void 0)&&n.render?this.options.plugin.render(this.el,a):this.el.tagName==="INPUT"?this.el.value=a:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=a:this.el.innerHTML=a}},r.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},r.prototype.validateValue=function(e){var n=Number(e);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},r.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},r}();const ne=Object.freeze(Object.defineProperty({__proto__:null,CountUp:te},Symbol.toStringTag,{value:"Module"})),re=X(ne);Object.defineProperty(_,"__esModule",{value:!0});var b=P,ae=re;function ie(r,e){var n=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var a,t,l,o,u=[],c=!0,d=!1;try{if(l=(n=n.call(r)).next,e!==0)for(;!(c=(a=l.call(n)).done)&&(u.push(a.value),u.length!==e);c=!0);}catch(h){d=!0,t=h}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw t}}return u}}function $(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})),n.push.apply(n,a)}return n}function T(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$(Object(n),!0).forEach(function(a){le(r,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(n,a))})}return r}function se(r,e){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var a=n.call(r,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function oe(r){var e=se(r,"string");return typeof e=="symbol"?e:String(e)}function le(r,e,n){return e=oe(e),e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function I(){return I=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},I.apply(this,arguments)}function ue(r,e){if(r==null)return{};var n={},a=Object.keys(r),t,l;for(l=0;l<a.length;l++)t=a[l],!(e.indexOf(t)>=0)&&(n[t]=r[t]);return n}function G(r,e){if(r==null)return{};var n=ue(r,e),a,t;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(t=0;t<l.length;t++)a=l[t],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(n[a]=r[a])}return n}function ce(r,e){return de(r)||ie(r,e)||me(r,e)||fe()}function de(r){if(Array.isArray(r))return r}function me(r,e){if(r){if(typeof r=="string")return L(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(r,e)}}function L(r,e){(e==null||e>r.length)&&(e=r.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=r[n];return a}function fe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var pe=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?b.useLayoutEffect:b.useEffect;function V(r){var e=b.useRef(r);return pe(function(){e.current=r}),b.useCallback(function(){for(var n=arguments.length,a=new Array(n),t=0;t<n;t++)a[t]=arguments[t];return e.current.apply(void 0,a)},[])}var he=function(e,n){var a=n.decimal,t=n.decimals,l=n.duration,o=n.easingFn,u=n.end,c=n.formattingFn,d=n.numerals,h=n.prefix,x=n.separator,s=n.start,m=n.suffix,g=n.useEasing,y=n.useGrouping,p=n.useIndianSeparators,S=n.enableScrollSpy,f=n.scrollSpyDelay,E=n.scrollSpyOnce,j=n.plugin;return new ae.CountUp(e,u,{startVal:s,duration:l,decimal:a,decimalPlaces:t,easingFn:o,formattingFn:c,numerals:d,separator:x,prefix:h,suffix:m,plugin:j,useEasing:g,useIndianSeparators:p,useGrouping:y,enableScrollSpy:S,scrollSpyDelay:f,scrollSpyOnce:E})},ge=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],ye={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},q=function(e){var n=Object.fromEntries(Object.entries(e).filter(function(v){var A=ce(v,2),D=A[1];return D!==void 0})),a=b.useMemo(function(){return T(T({},ye),n)},[e]),t=a.ref,l=a.startOnMount,o=a.enableReinitialize,u=a.delay,c=a.onEnd,d=a.onStart,h=a.onPauseResume,x=a.onReset,s=a.onUpdate,m=G(a,ge),g=b.useRef(),y=b.useRef(),p=b.useRef(!1),S=V(function(){return he(typeof t=="string"?t:t.current,m)}),f=V(function(v){var A=g.current;if(A&&!v)return A;var D=S();return g.current=D,D}),E=V(function(){var v=function(){return f(!0).start(function(){c==null||c({pauseResume:j,reset:w,start:O,update:N})})};u&&u>0?y.current=setTimeout(v,u*1e3):v(),d==null||d({pauseResume:j,reset:w,update:N})}),j=V(function(){f().pauseResume(),h==null||h({reset:w,start:O,update:N})}),w=V(function(){f().el&&(y.current&&clearTimeout(y.current),f().reset(),x==null||x({pauseResume:j,start:O,update:N}))}),N=V(function(v){f().update(v),s==null||s({pauseResume:j,reset:w,start:O})}),O=V(function(){w(),E()}),R=V(function(v){l&&(v&&w(),E())});return b.useEffect(function(){p.current?o&&R(!0):(p.current=!0,R())},[o,p,R,u,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),b.useEffect(function(){return function(){w()}},[w]),{start:O,pauseResume:j,reset:w,update:N,getCountUp:f}},be=["className","redraw","containerProps","children","style"],xe=function(e){var n=e.className,a=e.redraw,t=e.containerProps,l=e.children,o=e.style,u=G(e,be),c=b.useRef(null),d=b.useRef(!1),h=q(T(T({},u),{},{ref:c,startOnMount:typeof l!="function"||e.delay===0,enableReinitialize:!1})),x=h.start,s=h.reset,m=h.update,g=h.pauseResume,y=h.getCountUp,p=V(function(){x()}),S=V(function(j){e.preserveValue||s(),m(j)}),f=V(function(){typeof e.children=="function"&&!(c.current instanceof Element)||y()});b.useEffect(function(){f()},[f]),b.useEffect(function(){d.current&&S(e.end)},[e.end,S]);var E=a&&e;return b.useEffect(function(){a&&d.current&&p()},[p,a,E]),b.useEffect(function(){!a&&d.current&&p()},[p,a,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),b.useEffect(function(){d.current=!0},[]),typeof l=="function"?l({countUpRef:c,start:x,reset:s,update:m,pauseResume:g,getCountUp:y}):b.createElement("span",I({className:n,ref:c,style:o},t),typeof e.start<"u"?y().formattingFn(e.start):"")},Y=_.default=xe;_.useCountUp=q;const ve=[{title:"Total Amount",amount:300,color:"text-blue-500",bg:"bg-blue-300/10",paidStatus:""},{title:"Total Paid",amount:200,color:"text-green-500",bg:"bg-green-300/10",paidStatus:1},{title:"Total Due",amount:100,color:"text-red-500",bg:"bg-red-300/10",paidStatus:2},{title:"Total Unpaid",amount:0,color:"text-yellow-500",bg:"bg-yellow-300/10",paidStatus:0}];function Oe(){var c,d,h,x;const[r,e]=P.useState(""),[n,a]=P.useState([]),[t,l]=P.useState([]),o=z({api:k.getCount,key:"countData",options:{enabled:!0}}),u=z({api:k.getExpSubBeforeSevenDat,key:"expiresList",options:{enabled:!0}});return P.useEffect(()=>{var s,m,g,y;if(o!=null&&o.data){const p=ve.map(f=>{var E,j,w,N,O,R,v,A;return f.title==="Total Due"?{...f,amount:(j=(E=o.data)==null?void 0:E.data)==null?void 0:j.totalDueAmount}:f.title==="Total Paid"?{...f,amount:(N=(w=o.data)==null?void 0:w.data)==null?void 0:N.totalPaidAmount}:f.title==="Total Amount"?{...f,amount:(R=(O=o.data)==null?void 0:O.data)==null?void 0:R.totalAmount}:f.title==="Total Unpaid"?{...f,amount:(A=(v=o.data)==null?void 0:v.data)==null?void 0:A.totalUnpaidAmount}:f});a(p);const S=[{title:"Total Members",amount:((m=(s=o.data)==null?void 0:s.data)==null?void 0:m.activeMember)??0,color:"text-blue-500",bg:"bg-blue-300/10",href:"/gym-app/member-list?member-status="},{title:"Expired Subscription",amount:((y=(g=o.data)==null?void 0:g.data)==null?void 0:y.expiredSub)??0,color:"text-red-500",bg:"bg-red-300/10",href:"/gym-app/exp-subscription"}];l(S)}},[o==null?void 0:o.data]),P.useEffect(()=>{const s=setInterval(()=>{e(C().format("DD-MMM-YY hh:mm:ss A"))},1e3);return()=>clearInterval(s)},[]),o.isLoading||u.isLoading?i.jsx("div",{className:"flex items-center justify-center h-screen",children:i.jsx(B,{})}):i.jsxs(Z,{title:"Home",children:[i.jsxs("div",{className:"flex justify-between items-center py-2 mt-2",children:[i.jsx("h1",{className:"font-semibold text-foreground text-sm",children:"Dashboard"}),i.jsx("div",{className:"flex items-center gap-4",children:i.jsx("span",{className:"text-primary font-bold text-xs",children:r})})]}),i.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4",children:t==null?void 0:t.map((s,m)=>i.jsx(F,{to:s.href,children:i.jsx(M,{className:`shadow-none rounded-2xl ${s.bg}`,children:i.jsxs("div",{className:"px-4 py-5",children:[i.jsxs("div",{className:"flex items-center gap-1",children:[i.jsx(W,{size:20,className:s.color}),i.jsx("span",{className:`text-lg font-semibold ${s.color}`,children:i.jsx(Y,{end:s.amount,duration:3})})]}),i.jsx("h1",{className:"text-xs font-semibold",children:s.title})]})},m+1)},m+1))}),i.jsx("div",{className:"border-t border-secondary mt-3 mb-3"}),i.jsxs("div",{className:"flex justify-between items-center py-2 mt-5 text-sm",children:[i.jsx("h1",{className:"text-base font-semibold text-foreground",children:"Transaction"}),i.jsx(F,{to:"/gym-app/collection-report",className:"flex items-center gap-4",children:i.jsx("span",{className:"text-sm font-semibold text-primary",children:"Collection Report"})})]}),i.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4",children:n==null?void 0:n.map((s,m)=>i.jsx(F,{to:`/gym-app/payment-list?paymentstatus=${s.paidStatus}`,children:i.jsx(M,{className:`shadow-none rounded-2xl ${s.bg}`,children:i.jsxs("div",{className:"px-4 py-5",children:[i.jsxs("div",{className:"flex items-center gap-0",children:[i.jsx(ee,{size:20,className:s.color}),i.jsx("span",{className:`text-lg font-semibold ${s.color}`,children:i.jsx(Y,{end:s.amount,duration:3})})]}),i.jsx("h1",{className:"text-xs font-semibold",children:s.title})]})},m+1)},m+1))}),i.jsx("div",{className:"border-t border-secondary mt-5"}),i.jsxs("div",{className:"mt-3",children:[i.jsxs("div",{className:"flex justify-between items-center",children:[i.jsxs("h1",{className:"text-sm font-semibold text-foreground",children:["Recent Expired Subscription (",(d=(c=u==null?void 0:u.data)==null?void 0:c.data)==null?void 0:d.length,")"]}),i.jsx("div",{className:"flex items-center justify-center gap-1",children:i.jsx(F,{to:"#",className:"text-primary",children:i.jsx("small",{className:"text-primary font-semibold",children:"View All"})})})]}),i.jsx("div",{className:"grid grid-cols-1 gap-3 mt-2",children:(x=(h=u==null?void 0:u.data)==null?void 0:h.data)==null?void 0:x.map((s,m)=>{var g,y,p,S;return i.jsx(F,{to:`/gym-app/view-member/${(g=s.member)==null?void 0:g._id}`,children:i.jsx(M,{className:" shadow-none rounded-2xl bg-secondary",children:i.jsx("div",{className:"p-4",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsxs(K,{className:"w-12 h-12 border dark:border-gray-700 ",children:[i.jsx(J,{src:(y=s.member)==null?void 0:y.fullImgUrl,alt:"@shadcn"}),i.jsx(Q,{className:"text-base text-primary",children:(p=s.member)==null?void 0:p.memberName.charAt(0).toUpperCase()})]}),i.jsxs("div",{children:[i.jsx("div",{className:"flex justify-start items-center gap-1",children:i.jsx("h1",{className:"text-primary font-semibold text-sm w-40 truncate",children:(S=s.member)==null?void 0:S.memberName})}),i.jsx("div",{className:"text-primary font-semibold text-sm",children:i.jsxs("small",{className:"text-muted-foreground",children:[s.planName," |"," ",C(s.endDate).diff(C(),"days")<=0?i.jsx("span",{className:"text-red-500",children:"Expired"}):i.jsx("span",{className:"text-red-500",children:C(s.endDate).diff(C(),"days")+" days left"})]})})]})]}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-primary font-semibold text-xs",children:C(s.endDate).format("DD-MMM-YY")}),i.jsx("small",{className:"text-muted-foreground text-xs",children:"Expire Date"})]})]})})})},m+1)})})]})]})}export{Oe as default};
