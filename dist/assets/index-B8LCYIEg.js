import{j as s,g as h,_ as n,H as w,S as T}from"./index-Dxh5Js5C.js";import{u as $,b as C,a as B,P as L}from"./index-BHHCXcXz.js";import{r as m}from"./router-Bu5b4_LN.js";import{h as E}from"./moment-BjLXg0w5.js";import{C as k,a as H,d as I,b as P}from"./card-DgPYe2M_.js";import{T as _,a as z,b as A,c as N,d as R,e as b}from"./table-DjHxnEih.js";import{u as Y}from"./FileUpload-CRxNyXAB.js";import{F as D,R as q,c as G,a as J}from"./RHFTextField-DnzJdVAc.js";import{o as K}from"./yup-BWkFvKXL.js";import{B as O}from"./ButtonLoading-C0GbRdtq.js";import"./input-BTZ0SpZW.js";import{S as F}from"./separator-BlW_xuVb.js";import{D as Q}from"./index-kk0vJxYA.js";import{S as U}from"./index-B3_HoLoc.js";import"./axios-DmypytPv.js";import"./select-viXEEKtQ.js";const V=G().shape({monthName:J().required("Month name is required")});function W({open:M,setOpen:u,title:S,id:x,edit:r,setEdit:p,refetch:v}){const j=$({}),f=C({}),{data:e,isFetching:y}=B({api:`${h.getMonthById}/${x}`,options:{enabled:r}}),i=Y({resolver:K(V)}),g=async c=>{var o,d,l,t;try{if(r&&c){const a=await f.mutateAsync({api:`${h.updateMonthById}/${x}`,data:c});(o=a.data)!=null&&o.success?n.success((d=a==null?void 0:a.data)==null?void 0:d.message):n.error(a.data.message)}else{const a=await j.mutateAsync({api:h.createMonth,data:c});(l=a.data)!=null&&l.success?n.success((t=a==null?void 0:a.data)==null?void 0:t.message):n.error("Month not created successfully"),i.reset({monthName:""})}u(!1),p(!1),v()}catch{}};return m.useEffect(()=>{r&&e?i.reset({monthName:e.data.monthName}):i.reset({monthName:""})},[r,e]),s.jsx(Q,{open:M,setOpen:u,title:S,setEdit:p,edit:r,isLoading:y,children:s.jsx(D,{methods:i,onSubmit:i.handleSubmit(g),children:s.jsxs("div",{className:"gap-y-4 gap-x-2 grid grid-cols-1",children:[s.jsx("div",{children:s.jsx(q,{name:"monthName",placeholder:"Enter month name"})}),s.jsx(F,{}),s.jsx("div",{children:s.jsx(O,{size:"sm",isLoading:i.formState.isSubmitting,type:"submit",className:"w-full",children:"Submit"})})]})})})}function X(){var g,c,o,d,l;const M=C({}),[u,S]=m.useState(""),[x,r]=m.useState(!1),[p,v]=m.useState(""),[j,f]=m.useState(!1),e=B({api:`${(g=h)==null?void 0:g.getAllMonths}`,key:"monthList",options:{enabled:!0}}),y=t=>{f(!0),r(!0),v(t)},i=async t=>{try{const a=await M.mutateAsync({api:`${h.updateMonthStatusById}/${t}`});a.data.success?(n.success(a.data.message),e.refetch()):n.error(a.data.message)}catch{n.error("Something went wrong")}};return s.jsxs("main",{className:"grid items-start",children:[s.jsx(W,{open:x,setOpen:r,title:j?"Edit Month":"Add Month",id:p,edit:j,setEdit:f,refetch:e.refetch}),s.jsxs("div",{className:"grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2",children:[s.jsxs("div",{className:"flex justify-between w-full gap-2",children:[s.jsx("div",{children:s.jsx(U,{search:u,setSearch:S,refetch:e.refetch,isFetching:e.isLoading})}),s.jsx("div",{children:s.jsx(w,{size:"sm",className:"flex items-center gap-2",onClick:()=>r(!0),children:"Add New"})})]}),s.jsxs(k,{className:"w-full overflow-scroll",children:[s.jsx(H,{className:"px-7",children:s.jsxs(I,{children:["Total Month: ",(o=(c=e==null?void 0:e.data)==null?void 0:c.data)==null?void 0:o.length]})}),s.jsx(P,{children:e.isLoading?s.jsx("div",{className:"flex justify-center items-center h-32",children:s.jsx(T,{})}):s.jsxs(s.Fragment,{children:[s.jsxs(_,{children:[s.jsx(z,{children:s.jsxs(A,{children:[s.jsx(N,{className:"",children:"Month Name"}),s.jsx(N,{className:"",children:"Created at"}),s.jsx(N,{className:"",children:"Status"}),s.jsx(N,{className:"text-center",children:"Action"})]})}),s.jsx(R,{children:(l=(d=e==null?void 0:e.data)==null?void 0:d.data)==null?void 0:l.map(t=>s.jsxs(A,{children:[s.jsx(b,{children:t.monthName}),s.jsx(b,{children:E(t.createdAt).format("DD-MM-YYYY")}),s.jsx(b,{children:t.status==1?"Active":"Inactive"}),s.jsx(b,{children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(w,{size:"sm",className:"bg-primary",onClick:()=>y(t._id),children:"Edit"}),s.jsx(w,{size:"sm",className:t.status==1?"bg-destructive":"bg-green-700",onClick:()=>i(t._id),children:t.status==1?"Deactivate":"Activate"})]})})]},t._id))})]}),s.jsx(F,{className:"mt-4 mb-2"})]})})]})]})]})}function ps(){return s.jsx(L,{title:"Month List",children:s.jsx("div",{className:" mt-3 mb-2",children:s.jsx(X,{})})})}export{ps as default};