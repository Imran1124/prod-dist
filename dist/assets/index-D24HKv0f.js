import{j as s,u as d,a as x,_ as o}from"./index-D29d1MPK.js";import{L as u}from"./router-Bu5b4_LN.js";import{u as p}from"./FileUpload-DUsCJmUp.js";import{F as f,R as h,c as g,a as i}from"./RHFTextField-BgjQieZ9.js";import{o as j}from"./yup-C0jSCCYy.js";import{g as y}from"./services-KQnp_8oA.js";import{B as w}from"./ButtonLoading-C8CekMLe.js";import{R as N}from"./RHFPasswordField-CjrrgDir.js";import"./input-BTp5kw4h.js";import{u as v,P as F}from"./index-BByManSQ.js";import"./axios-DmypytPv.js";import"./select-BW5eHILA.js";function L(){return s.jsxs("div",{className:"px-6 lg:px-0 mx-auto max-w-sm py-6",children:[s.jsx("div",{className:"flex justify-center"}),s.jsx("h1",{className:"text-3xl font-bold text-center mt-4 text-primary",children:"Fitness Firsts GYM"}),s.jsx("p",{className:"text-center mt-2 text-muted-foreground",children:"Login to your account"})]})}const b=g({email:i().email().required(),password:i().min(8)});function S(){const l=v({}),{login:n}=d(),a=p({defaultValues:{email:"",password:""},resolver:j(b)}),m=async c=>{var t,r;try{const e=await l.mutateAsync({api:x.login,data:c});(t=e==null?void 0:e.data)!=null&&t.success?await n(e):o.error((r=e==null?void 0:e.data)==null?void 0:r.message)}catch(e){o.error(y(e))}};return s.jsx(f,{methods:a,onSubmit:a.handleSubmit(m),children:s.jsxs("div",{className:"space-y-4",children:[s.jsx("div",{className:"space-y-2",children:s.jsx(h,{className:"rounded-xl py-6 px-5 w-full bg-background",name:"email",inputValidation:["email","removeSpace"],placeholder:"Enter your email"})}),s.jsx("div",{className:"space-y-2",children:s.jsx(N,{className:"rounded-xl py-6 px-5 w-full bg-background",name:"password",placeholder:"Enter your password"})}),s.jsx("div",{children:s.jsx(w,{type:"submit",isLoading:a.formState.isSubmitting,className:"w-full rounded-xl py-5 px-4 mt-2 shadow-none",variant:"outline",children:"Login"})}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("hr",{className:"flex-1"}),s.jsx("span",{children:"or"}),s.jsx("hr",{className:"flex-1"})]}),s.jsx("div",{className:"text-center",children:s.jsx(u,{to:"/gym-app/auth/forget-password",children:s.jsx("span",{className:"text-sm text-primary",children:"Forget password?"})})})]})})}function q(){return s.jsx(F,{title:"Login",children:s.jsxs("div",{className:"flex flex-col w-full justify-center h-screen px-6 lg:px-0 mx-auto max-w-sm",children:[s.jsx(L,{}),s.jsx(S,{})]})})}export{q as default};