import{a6 as _e,Z as Ue,h as Se,a7 as ze,i as Ge,a8 as qe,k as ge,V as B,a9 as Ye,m as y,aa as Ze,ab as Xe,o as D,p as T,ac as U,ad as Je,ae as Qe,af as et,ag as tt,ah as ot,ai as nt,aj as ct,ak as rt,j as I,al as at,D as z,am as st,an as lt,a3 as it}from"./index-BdoqKkkJ.js";import{r as e,a as Pe}from"./router-Bu5b4_LN.js";function be(o,[n,t]){return Math.min(t,Math.max(n,o))}function dt(o){const n=e.useRef({value:o,previous:o});return e.useMemo(()=>(n.current.value!==o&&(n.current.previous=n.current.value,n.current.value=o),n.current.previous),[o])}const ft=[" ","Enter","ArrowUp","ArrowDown"],ut=[" ","Enter"],le="Select",[ie,de,pt]=qe(le),[te,ro]=Ge(le,[pt,_e]),xe=_e(),[mt,Y]=te(le),[$t,ht]=te(le),vt=o=>{const{__scopeSelect:n,children:t,open:r,defaultOpen:l,onOpenChange:f,value:a,defaultValue:c,onValueChange:s,dir:i,name:$,autoComplete:C,disabled:_,required:E}=o,p=xe(n),[h,w]=e.useState(null),[m,d]=e.useState(null),[v,oe]=e.useState(!1),M=Ue(i),[ne=!1,R]=Se({prop:r,defaultProp:l,onChange:f}),[O,G]=Se({prop:a,defaultProp:c,onChange:s}),X=e.useRef(null),q=h?!!h.closest("form"):!0,[L,W]=e.useState(new Set),F=Array.from(L).map(P=>P.props.value).join(";");return e.createElement(ze,p,e.createElement(mt,{required:E,scope:n,trigger:h,onTriggerChange:w,valueNode:m,onValueNodeChange:d,valueNodeHasChildren:v,onValueNodeHasChildrenChange:oe,contentId:ge(),value:O,onValueChange:G,open:ne,onOpenChange:R,dir:M,triggerPointerDownPosRef:X,disabled:_},e.createElement(ie.Provider,{scope:n},e.createElement($t,{scope:o.__scopeSelect,onNativeOptionAdd:e.useCallback(P=>{W(V=>new Set(V).add(P))},[]),onNativeOptionRemove:e.useCallback(P=>{W(V=>{const H=new Set(V);return H.delete(P),H})},[])},t)),q?e.createElement(De,{key:F,"aria-hidden":!0,required:E,tabIndex:-1,name:$,autoComplete:C,value:O,onChange:P=>G(P.target.value),disabled:_},O===void 0?e.createElement("option",{value:""}):null,Array.from(L)):null))},gt="SelectTrigger",xt=e.forwardRef((o,n)=>{const{__scopeSelect:t,disabled:r=!1,...l}=o,f=xe(t),a=Y(gt,t),c=a.disabled||r,s=B(n,a.onTriggerChange),i=de(t),[$,C,_]=Me(p=>{const h=i().filter(d=>!d.disabled),w=h.find(d=>d.value===a.value),m=ke(h,p,w);m!==void 0&&a.onValueChange(m.value)}),E=()=>{c||(a.onOpenChange(!0),_())};return e.createElement(Xe,y({asChild:!0},f),e.createElement(D.button,y({type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":"none",dir:a.dir,"data-state":a.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":Oe(a.value)?"":void 0},l,{ref:s,onClick:T(l.onClick,p=>{p.currentTarget.focus()}),onPointerDown:T(l.onPointerDown,p=>{const h=p.target;h.hasPointerCapture(p.pointerId)&&h.releasePointerCapture(p.pointerId),p.button===0&&p.ctrlKey===!1&&(E(),a.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)},p.preventDefault())}),onKeyDown:T(l.onKeyDown,p=>{const h=$.current!=="";!(p.ctrlKey||p.altKey||p.metaKey)&&p.key.length===1&&C(p.key),!(h&&p.key===" ")&&ft.includes(p.key)&&(E(),p.preventDefault())})})))}),wt="SelectValue",St=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:r,style:l,children:f,placeholder:a="",...c}=o,s=Y(wt,t),{onValueNodeHasChildrenChange:i}=s,$=f!==void 0,C=B(n,s.onValueNodeChange);return U(()=>{i($)},[i,$]),e.createElement(D.span,y({},c,{ref:C,style:{pointerEvents:"none"}}),Oe(s.value)?e.createElement(e.Fragment,null,a):f)}),bt=e.forwardRef((o,n)=>{const{__scopeSelect:t,children:r,...l}=o;return e.createElement(D.span,y({"aria-hidden":!0},l,{ref:n}),r||"▼")}),Ct=o=>e.createElement(Je,y({asChild:!0},o)),ee="SelectContent",yt=e.forwardRef((o,n)=>{const t=Y(ee,o.__scopeSelect),[r,l]=e.useState();if(U(()=>{l(new DocumentFragment)},[]),!t.open){const f=r;return f?Pe.createPortal(e.createElement(Te,{scope:o.__scopeSelect},e.createElement(ie.Slot,{scope:o.__scopeSelect},e.createElement("div",null,o.children))),f):null}return e.createElement(Et,y({},o,{ref:n}))}),j=10,[Te,Z]=te(ee),Et=e.forwardRef((o,n)=>{const{__scopeSelect:t,position:r="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:f,onPointerDownOutside:a,side:c,sideOffset:s,align:i,alignOffset:$,arrowPadding:C,collisionBoundary:_,collisionPadding:E,sticky:p,hideWhenDetached:h,avoidCollisions:w,...m}=o,d=Y(ee,t),[v,oe]=e.useState(null),[M,ne]=e.useState(null),R=B(n,u=>oe(u)),[O,G]=e.useState(null),[X,q]=e.useState(null),L=de(t),[W,F]=e.useState(!1),P=e.useRef(!1);e.useEffect(()=>{if(v)return Qe(v)},[v]),et();const V=e.useCallback(u=>{const[S,...N]=L().map(x=>x.ref.current),[b]=N.slice(-1),g=document.activeElement;for(const x of u)if(x===g||(x==null||x.scrollIntoView({block:"nearest"}),x===S&&M&&(M.scrollTop=0),x===b&&M&&(M.scrollTop=M.scrollHeight),x==null||x.focus(),document.activeElement!==g))return},[L,M]),H=e.useCallback(()=>V([O,v]),[V,O,v]);e.useEffect(()=>{W&&H()},[W,H]);const{onOpenChange:J,triggerPointerDownPosRef:K}=d;e.useEffect(()=>{if(v){let u={x:0,y:0};const S=b=>{var g,x,k,A;u={x:Math.abs(Math.round(b.pageX)-((g=(x=K.current)===null||x===void 0?void 0:x.x)!==null&&g!==void 0?g:0)),y:Math.abs(Math.round(b.pageY)-((k=(A=K.current)===null||A===void 0?void 0:A.y)!==null&&k!==void 0?k:0))}},N=b=>{u.x<=10&&u.y<=10?b.preventDefault():v.contains(b.target)||J(!1),document.removeEventListener("pointermove",S),K.current=null};return K.current!==null&&(document.addEventListener("pointermove",S),document.addEventListener("pointerup",N,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",N,{capture:!0})}}},[v,J,K]),e.useEffect(()=>{const u=()=>J(!1);return window.addEventListener("blur",u),window.addEventListener("resize",u),()=>{window.removeEventListener("blur",u),window.removeEventListener("resize",u)}},[J]);const[fe,re]=Me(u=>{const S=L().filter(g=>!g.disabled),N=S.find(g=>g.ref.current===document.activeElement),b=ke(S,u,N);b&&setTimeout(()=>b.ref.current.focus())}),ue=e.useCallback((u,S,N)=>{const b=!P.current&&!N;(d.value!==void 0&&d.value===S||b)&&(G(u),b&&(P.current=!0))},[d.value]),pe=e.useCallback(()=>v==null?void 0:v.focus(),[v]),Q=e.useCallback((u,S,N)=>{const b=!P.current&&!N;(d.value!==void 0&&d.value===S||b)&&q(u)},[d.value]),ae=r==="popper"?Ce:It,ce=ae===Ce?{side:c,sideOffset:s,align:i,alignOffset:$,arrowPadding:C,collisionBoundary:_,collisionPadding:E,sticky:p,hideWhenDetached:h,avoidCollisions:w}:{};return e.createElement(Te,{scope:t,content:v,viewport:M,onViewportChange:ne,itemRefCallback:ue,selectedItem:O,onItemLeave:pe,itemTextRefCallback:Q,focusSelectedItem:H,selectedItemText:X,position:r,isPositioned:W,searchRef:fe},e.createElement(tt,{as:ot,allowPinchZoom:!0},e.createElement(nt,{asChild:!0,trapped:d.open,onMountAutoFocus:u=>{u.preventDefault()},onUnmountAutoFocus:T(l,u=>{var S;(S=d.trigger)===null||S===void 0||S.focus({preventScroll:!0}),u.preventDefault()})},e.createElement(ct,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:f,onPointerDownOutside:a,onFocusOutside:u=>u.preventDefault(),onDismiss:()=>d.onOpenChange(!1)},e.createElement(ae,y({role:"listbox",id:d.contentId,"data-state":d.open?"open":"closed",dir:d.dir,onContextMenu:u=>u.preventDefault()},m,ce,{onPlaced:()=>F(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...m.style},onKeyDown:T(m.onKeyDown,u=>{const S=u.ctrlKey||u.altKey||u.metaKey;if(u.key==="Tab"&&u.preventDefault(),!S&&u.key.length===1&&re(u.key),["ArrowUp","ArrowDown","Home","End"].includes(u.key)){let b=L().filter(g=>!g.disabled).map(g=>g.ref.current);if(["ArrowUp","End"].includes(u.key)&&(b=b.slice().reverse()),["ArrowUp","ArrowDown"].includes(u.key)){const g=u.target,x=b.indexOf(g);b=b.slice(x+1)}setTimeout(()=>V(b)),u.preventDefault()}})}))))))}),It=e.forwardRef((o,n)=>{const{__scopeSelect:t,onPlaced:r,...l}=o,f=Y(ee,t),a=Z(ee,t),[c,s]=e.useState(null),[i,$]=e.useState(null),C=B(n,R=>$(R)),_=de(t),E=e.useRef(!1),p=e.useRef(!0),{viewport:h,selectedItem:w,selectedItemText:m,focusSelectedItem:d}=a,v=e.useCallback(()=>{if(f.trigger&&f.valueNode&&c&&i&&h&&w&&m){const R=f.trigger.getBoundingClientRect(),O=i.getBoundingClientRect(),G=f.valueNode.getBoundingClientRect(),X=m.getBoundingClientRect();if(f.dir!=="rtl"){const g=X.left-O.left,x=G.left-g,k=R.left-x,A=R.width+k,me=Math.max(A,O.width),$e=window.innerWidth-j,he=be(x,[j,$e-me]);c.style.minWidth=A+"px",c.style.left=he+"px"}else{const g=O.right-X.right,x=window.innerWidth-G.right-g,k=window.innerWidth-R.right-x,A=R.width+k,me=Math.max(A,O.width),$e=window.innerWidth-j,he=be(x,[j,$e-me]);c.style.minWidth=A+"px",c.style.right=he+"px"}const q=_(),L=window.innerHeight-j*2,W=h.scrollHeight,F=window.getComputedStyle(i),P=parseInt(F.borderTopWidth,10),V=parseInt(F.paddingTop,10),H=parseInt(F.borderBottomWidth,10),J=parseInt(F.paddingBottom,10),K=P+V+W+J+H,fe=Math.min(w.offsetHeight*5,K),re=window.getComputedStyle(h),ue=parseInt(re.paddingTop,10),pe=parseInt(re.paddingBottom,10),Q=R.top+R.height/2-j,ae=L-Q,ce=w.offsetHeight/2,u=w.offsetTop+ce,S=P+V+u,N=K-S;if(S<=Q){const g=w===q[q.length-1].ref.current;c.style.bottom="0px";const x=i.clientHeight-h.offsetTop-h.offsetHeight,k=Math.max(ae,ce+(g?pe:0)+x+H),A=S+k;c.style.height=A+"px"}else{const g=w===q[0].ref.current;c.style.top="0px";const k=Math.max(Q,P+h.offsetTop+(g?ue:0)+ce)+N;c.style.height=k+"px",h.scrollTop=S-Q+h.offsetTop}c.style.margin=`${j}px 0`,c.style.minHeight=fe+"px",c.style.maxHeight=L+"px",r==null||r(),requestAnimationFrame(()=>E.current=!0)}},[_,f.trigger,f.valueNode,c,i,h,w,m,f.dir,r]);U(()=>v(),[v]);const[oe,M]=e.useState();U(()=>{i&&M(window.getComputedStyle(i).zIndex)},[i]);const ne=e.useCallback(R=>{R&&p.current===!0&&(v(),d==null||d(),p.current=!1)},[v,d]);return e.createElement(_t,{scope:t,contentWrapper:c,shouldExpandOnScrollRef:E,onScrollButtonChange:ne},e.createElement("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:oe}},e.createElement(D.div,y({},l,{ref:C,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}}))))}),Ce=e.forwardRef((o,n)=>{const{__scopeSelect:t,align:r="start",collisionPadding:l=j,...f}=o,a=xe(t);return e.createElement(rt,y({},a,f,{ref:n,align:r,collisionPadding:l,style:{boxSizing:"border-box",...f.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[_t,we]=te(ee,{}),ye="SelectViewport",Pt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o,l=Z(ye,t),f=we(ye,t),a=B(n,l.onViewportChange),c=e.useRef(0);return e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),e.createElement(ie.Slot,{scope:t},e.createElement(D.div,y({"data-radix-select-viewport":"",role:"presentation"},r,{ref:a,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:T(r.onScroll,s=>{const i=s.currentTarget,{contentWrapper:$,shouldExpandOnScrollRef:C}=f;if(C!=null&&C.current&&$){const _=Math.abs(c.current-i.scrollTop);if(_>0){const E=window.innerHeight-j*2,p=parseFloat($.style.minHeight),h=parseFloat($.style.height),w=Math.max(p,h);if(w<E){const m=w+_,d=Math.min(E,m),v=m-d;$.style.height=d+"px",$.style.bottom==="0px"&&(i.scrollTop=v>0?v:0,$.style.justifyContent="flex-end")}}}c.current=i.scrollTop})}))))}),Tt="SelectGroup",[Rt,Nt]=te(Tt),Ot=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o,l=ge();return e.createElement(Rt,{scope:t,id:l},e.createElement(D.div,y({role:"group","aria-labelledby":l},r,{ref:n})))}),Dt="SelectLabel",Mt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o,l=Nt(Dt,t);return e.createElement(D.div,y({id:l.id},r,{ref:n}))}),ve="SelectItem",[kt,Re]=te(ve),At=e.forwardRef((o,n)=>{const{__scopeSelect:t,value:r,disabled:l=!1,textValue:f,...a}=o,c=Y(ve,t),s=Z(ve,t),i=c.value===r,[$,C]=e.useState(f??""),[_,E]=e.useState(!1),p=B(n,m=>{var d;return(d=s.itemRefCallback)===null||d===void 0?void 0:d.call(s,m,r,l)}),h=ge(),w=()=>{l||(c.onValueChange(r),c.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return e.createElement(kt,{scope:t,value:r,disabled:l,textId:h,isSelected:i,onItemTextChange:e.useCallback(m=>{C(d=>{var v;return d||((v=m==null?void 0:m.textContent)!==null&&v!==void 0?v:"").trim()})},[])},e.createElement(ie.ItemSlot,{scope:t,value:r,disabled:l,textValue:$},e.createElement(D.div,y({role:"option","aria-labelledby":h,"data-highlighted":_?"":void 0,"aria-selected":i&&_,"data-state":i?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1},a,{ref:p,onFocus:T(a.onFocus,()=>E(!0)),onBlur:T(a.onBlur,()=>E(!1)),onPointerUp:T(a.onPointerUp,w),onPointerMove:T(a.onPointerMove,m=>{if(l){var d;(d=s.onItemLeave)===null||d===void 0||d.call(s)}else m.currentTarget.focus({preventScroll:!0})}),onPointerLeave:T(a.onPointerLeave,m=>{if(m.currentTarget===document.activeElement){var d;(d=s.onItemLeave)===null||d===void 0||d.call(s)}}),onKeyDown:T(a.onKeyDown,m=>{var d;((d=s.searchRef)===null||d===void 0?void 0:d.current)!==""&&m.key===" "||(ut.includes(m.key)&&w(),m.key===" "&&m.preventDefault())})}))))}),se="SelectItemText",Lt=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:r,style:l,...f}=o,a=Y(se,t),c=Z(se,t),s=Re(se,t),i=ht(se,t),[$,C]=e.useState(null),_=B(n,m=>C(m),s.onItemTextChange,m=>{var d;return(d=c.itemTextRefCallback)===null||d===void 0?void 0:d.call(c,m,s.value,s.disabled)}),E=$==null?void 0:$.textContent,p=e.useMemo(()=>e.createElement("option",{key:s.value,value:s.value,disabled:s.disabled},E),[s.disabled,s.value,E]),{onNativeOptionAdd:h,onNativeOptionRemove:w}=i;return U(()=>(h(p),()=>w(p)),[h,w,p]),e.createElement(e.Fragment,null,e.createElement(D.span,y({id:s.textId},f,{ref:_})),s.isSelected&&a.valueNode&&!a.valueNodeHasChildren?Pe.createPortal(f.children,a.valueNode):null)}),Vt="SelectItemIndicator",Bt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o;return Re(Vt,t).isSelected?e.createElement(D.span,y({"aria-hidden":!0},r,{ref:n})):null}),Ee="SelectScrollUpButton",Ht=e.forwardRef((o,n)=>{const t=Z(Ee,o.__scopeSelect),r=we(Ee,o.__scopeSelect),[l,f]=e.useState(!1),a=B(n,r.onScrollButtonChange);return U(()=>{if(t.viewport&&t.isPositioned){let s=function(){const i=c.scrollTop>0;f(i)};const c=t.viewport;return s(),c.addEventListener("scroll",s),()=>c.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),l?e.createElement(Ne,y({},o,{ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:s}=t;c&&s&&(c.scrollTop=c.scrollTop-s.offsetHeight)}})):null}),Ie="SelectScrollDownButton",jt=e.forwardRef((o,n)=>{const t=Z(Ie,o.__scopeSelect),r=we(Ie,o.__scopeSelect),[l,f]=e.useState(!1),a=B(n,r.onScrollButtonChange);return U(()=>{if(t.viewport&&t.isPositioned){let s=function(){const i=c.scrollHeight-c.clientHeight,$=Math.ceil(c.scrollTop)<i;f($)};const c=t.viewport;return s(),c.addEventListener("scroll",s),()=>c.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),l?e.createElement(Ne,y({},o,{ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:s}=t;c&&s&&(c.scrollTop=c.scrollTop+s.offsetHeight)}})):null}),Ne=e.forwardRef((o,n)=>{const{__scopeSelect:t,onAutoScroll:r,...l}=o,f=Z("SelectScrollButton",t),a=e.useRef(null),c=de(t),s=e.useCallback(()=>{a.current!==null&&(window.clearInterval(a.current),a.current=null)},[]);return e.useEffect(()=>()=>s(),[s]),U(()=>{var i;const $=c().find(C=>C.ref.current===document.activeElement);$==null||(i=$.ref.current)===null||i===void 0||i.scrollIntoView({block:"nearest"})},[c]),e.createElement(D.div,y({"aria-hidden":!0},l,{ref:n,style:{flexShrink:0,...l.style},onPointerDown:T(l.onPointerDown,()=>{a.current===null&&(a.current=window.setInterval(r,50))}),onPointerMove:T(l.onPointerMove,()=>{var i;(i=f.onItemLeave)===null||i===void 0||i.call(f),a.current===null&&(a.current=window.setInterval(r,50))}),onPointerLeave:T(l.onPointerLeave,()=>{s()})}))}),Wt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o;return e.createElement(D.div,y({"aria-hidden":!0},r,{ref:n}))});function Oe(o){return o===""||o===void 0}const De=e.forwardRef((o,n)=>{const{value:t,...r}=o,l=e.useRef(null),f=B(n,l),a=dt(t);return e.useEffect(()=>{const c=l.current,s=window.HTMLSelectElement.prototype,$=Object.getOwnPropertyDescriptor(s,"value").set;if(a!==t&&$){const C=new Event("change",{bubbles:!0});$.call(c,t),c.dispatchEvent(C)}},[a,t]),e.createElement(Ye,{asChild:!0},e.createElement("select",y({},r,{ref:f,defaultValue:t})))});De.displayName="BubbleSelect";function Me(o){const n=Ze(o),t=e.useRef(""),r=e.useRef(0),l=e.useCallback(a=>{const c=t.current+a;n(c),function s(i){t.current=i,window.clearTimeout(r.current),i!==""&&(r.current=window.setTimeout(()=>s(""),1e3))}(c)},[n]),f=e.useCallback(()=>{t.current="",window.clearTimeout(r.current)},[]);return e.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,l,f]}function ke(o,n,t){const l=n.length>1&&Array.from(n).every(i=>i===n[0])?n[0]:n,f=t?o.indexOf(t):-1;let a=Ft(o,Math.max(f,0));l.length===1&&(a=a.filter(i=>i!==t));const s=a.find(i=>i.textValue.toLowerCase().startsWith(l.toLowerCase()));return s!==t?s:void 0}function Ft(o,n){return o.map((t,r)=>o[(n+r)%o.length])}const Kt=vt,Ae=xt,Ut=St,zt=bt,Gt=Ct,Le=yt,qt=Pt,Yt=Ot,Ve=Mt,Be=At,Zt=Lt,Xt=Bt,He=Ht,je=jt,We=Wt,ao=Kt,so=Yt,lo=Ut,Jt=e.forwardRef(({className:o,children:n,...t},r)=>I.jsxs(Ae,{ref:r,className:z("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",o),...t,children:[n,I.jsx(zt,{asChild:!0,children:I.jsx(at,{className:"h-4 w-4 opacity-50"})})]}));Jt.displayName=Ae.displayName;const Fe=e.forwardRef(({className:o,...n},t)=>I.jsx(He,{ref:t,className:z("flex cursor-default items-center justify-center py-1",o),...n,children:I.jsx(st,{})}));Fe.displayName=He.displayName;const Ke=e.forwardRef(({className:o,...n},t)=>I.jsx(je,{ref:t,className:z("flex cursor-default items-center justify-center py-1",o),...n,children:I.jsx(lt,{})}));Ke.displayName=je.displayName;const Qt=e.forwardRef(({className:o,children:n,position:t="popper",...r},l)=>I.jsx(Gt,{children:I.jsxs(Le,{ref:l,className:z("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",o),position:t,...r,children:[I.jsx(Fe,{}),I.jsx(qt,{className:z("p-1",t==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),I.jsx(Ke,{})]})}));Qt.displayName=Le.displayName;const eo=e.forwardRef(({className:o,...n},t)=>I.jsx(Ve,{ref:t,className:z("px-2 py-1.5 text-sm font-semibold",o),...n}));eo.displayName=Ve.displayName;const to=e.forwardRef(({className:o,children:n,...t},r)=>I.jsxs(Be,{ref:r,className:z("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o),...t,children:[I.jsx("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:I.jsx(Xt,{children:I.jsx(it,{className:"h-4 w-4"})})}),I.jsx(Zt,{children:n})]}));to.displayName=Be.displayName;const oo=e.forwardRef(({className:o,...n},t)=>I.jsx(We,{ref:t,className:z("-mx-1 my-1 h-px bg-muted",o),...n}));oo.displayName=We.displayName;export{dt as $,ao as S,Jt as a,lo as b,Qt as c,so as d,to as e};
