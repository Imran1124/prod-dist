import{j as t}from"./index-DQGuf2o5.js";import{a as c,C as p}from"./FileUpload-BtQ2-EgK.js";import{d as f}from"./RHFTextField-CvL56UXW.js";function j({name:r,label:s,size:a,borderColor:l,inputValidation:n,...d}){const{control:u}=c();return t.jsx(p,{name:r,control:u,render:({field:{ref:m,...o},fieldState:{error:e}})=>t.jsxs(t.Fragment,{children:[t.jsx("label",{className:"text-muted-foreground text-xs font-bold",htmlFor:s,children:s}),t.jsx("textarea",{ref:m,...o,value:typeof o.value=="number"&&o.value===0?"":o.value,onInput:x=>{n&&f(x,n)},className:`bg-transparent block w-full rounded-lg border dark:text-white ${a==="small"&&"p-1"||a==="medium"&&"p-3"||a==="large"&&"p-4"||"p-2"} placeholder-gray-500 focus:outline-none focus:z-10 
              ${e?"focus:border-red-400":"focus:border-indigo-400"}  
              ${e?"border-red-400":l??"border-gray-300"}
          `,...d}),e&&t.jsx("span",{className:"text-red-400 text-xs",children:e==null?void 0:e.message})]})})}export{j as R};
