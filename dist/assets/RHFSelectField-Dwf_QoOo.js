import{j as e,D as g}from"./index-BdoqKkkJ.js";import{a as w,C}from"./index.esm-DdUqhsLW.js";import{S as j,a as v,b as y,c as S,d as N,e as F}from"./select-Bl5H_JfX.js";const E=({children:b,name:t,label:o,selectedText:x,className:s,data:d,isRequired:u,placeHolder:h,isNormal:a=!0,isHookForm:r=!0,...i})=>r?e.jsx(k,{name:t,label:o,selectedText:x,className:s,data:d,isRequired:u,placeHolder:h,isNormal:a,...i}):e.jsx(V,{name:t,label:o,selectedText:x,className:s,data:d,isRequired:u,placeHolder:h,isNormal:a,...i}),k=({name:b,label:t,selectedText:o,className:x,data:s,isRequired:d,placeHolder:u,isNormal:h=!0,...a})=>{const{control:r,setValue:i}=w();return e.jsx(C,{name:b,control:r,render:({field:{ref:p,...m},fieldState:{error:l}})=>h?e.jsxs("div",{children:[e.jsxs("h1",{className:"text-muted-foreground text-xs font-bold mt-2",children:[t," ",d&&e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsxs("select",{...m,onChange:n=>{var c;m.onChange(n),o&&i(o,(c=s==null?void 0:s.find(f=>f.value==n.target.value))==null?void 0:c.label)},ref:p,className:g("flex h-9 w-full rounded-[6px] border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",l?"border-red-400":null,x),...a,children:[e.jsx("option",{value:"",className:"text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800",children:"Select"}),s==null?void 0:s.map((n,c)=>e.jsx("option",{value:n.value,className:"text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800",children:n.label},c+1))]}),l&&e.jsx("span",{className:"text-red-400 text-xs",children:l==null?void 0:l.message})]}):e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"text-muted-foreground text-xs font-bold",htmlFor:t,children:[t," ",l&&e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsxs(j,{onValueChange:n=>{var c;m.onChange(n),o&&i(o,(c=s==null?void 0:s.find(f=>f.value==n))==null?void 0:c.label)},defaultValue:m.value,...a,children:[e.jsx(v,{ref:p,className:g("h-9",l?"border-red-400":null,x),children:e.jsx(y,{placeholder:u??"Select"})}),e.jsx(S,{children:e.jsx(N,{children:s==null?void 0:s.map((n,c)=>e.jsx(F,{value:n.value,children:n.label},c+1))})})]}),l&&e.jsx("span",{className:"text-red-400 text-xs",children:l==null?void 0:l.message})]})})},V=({name:b,label:t,selectedText:o,className:x,data:s,isRequired:d,placeHolder:u,isNormal:h=!0,...a})=>h?e.jsxs("div",{children:[e.jsxs("h1",{className:"text-muted-foreground text-xs font-bold mt-2",children:[t," ",d&&e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsxs("select",{className:g("flex h-9 w-full rounded-[6px] border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",x),...a,children:[e.jsx("option",{value:"",className:"text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800",children:"Select"}),s==null?void 0:s.map((r,i)=>e.jsx("option",{value:r.value,className:"text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800",children:r.label},i+1))]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"text-muted-foreground text-xs font-bold",htmlFor:t,children:[t," ",d&&e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsxs(j,{...a,children:[e.jsx(v,{className:g("h-9",x),children:e.jsx(y,{placeholder:u??"Select"})}),e.jsx(S,{children:e.jsx(N,{children:s==null?void 0:s.map((r,i)=>e.jsx(F,{value:r.value,children:r.label},i+1))})})]})]});export{E as R};
