import{j as e,A as k,d as F,e as z,H as w,g as E,_ as c}from"./index-B8VgSHhE.js";import{d as I,r as o}from"./router-Bu5b4_LN.js";import{C as M}from"./card-CddJtPvx.js";import{b as _,a as B,P as T}from"./index-BB8grdrY.js";import{L as U,P as q}from"./index-BybDsDcF.js";import{S as H}from"./index-Cn1-0_Om.js";import{h as r}from"./moment-BjLXg0w5.js";import{C as R}from"./index-C83XgMq8.js";import{E as V}from"./eye-DD36P5M9.js";import{T as G}from"./trash-B_X7aT2m.js";import"./axios-DmypytPv.js";import"./select-DQojJYC_.js";import"./input-AhHqe99W.js";function ae(){var x,h,p,u,f,b,j,g,N;const A=_({}),L=I(),[m,n]=o.useState(1),[l,D]=o.useState(20),[d,C]=o.useState(""),t=B({api:`${E.getAllExpiredSubscription}?page=${m}&limit=${l}&q=${d}`,key:"exp-list",value:[m,l],options:{enabled:!0}}),$=async s=>{R("Are you sure?","Do you really want to delete this?",async()=>{var i;try{(i=(await A.mutateAsync({api:`${E.updateExpInSubscription}/${s}`,data:{}})).data)!=null&&i.success?(t.refetch(),c.success("Deleted Successfully")):c.error("Failed to delete")}catch{c.error("Failed to delete")}})};return e.jsxs(T,{title:"Expired Subscription",children:[e.jsx("div",{className:"flex items-center justify-between mt-4",children:e.jsxs("h1",{className:"text-base font-semibold text-muted-foreground",children:["Expired Subscription List(",(x=t.data)==null?void 0:x.data.totalDocs,")"]})}),e.jsx("div",{className:"border-t border-secondary mt-3 mb-2"}),e.jsx(H,{search:d,setSearch:C,refetch:t.refetch,isFetching:t.isFetching,setPage:n}),e.jsx("div",{className:"border-t border-secondary mt-1 mb-1"}),e.jsxs(U,{dataLength:(p=(h=t.data)==null?void 0:h.data)==null?void 0:p.docs.length,isLoading:t.isLoading,children:[e.jsx("div",{className:"grid grid-cols-1 gap-3 mt-2",children:(f=(u=t.data)==null?void 0:u.data)==null?void 0:f.docs.map((s,i)=>{var a,y,v,P,S;return e.jsxs(M,{children:[e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(k,{className:"w-12 h-12 border dark:border-gray-700",children:[e.jsx(F,{src:(a=s==null?void 0:s.member)==null?void 0:a.fullImgUrl,alt:"@shadcn"}),e.jsx(z,{className:"text-base text-primary",children:(y=s==null?void 0:s.member)==null?void 0:y.memberName.charAt(0).toUpperCase()})]}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-primary font-semibold text-sm",children:[(v=s==null?void 0:s.member)==null?void 0:v.memberName," "]}),e.jsx("div",{className:"text-primary font-bold ",children:e.jsx("h1",{className:"text-muted-foreground text-xs",children:(P=s==null?void 0:s.member)==null?void 0:P.generatedId})})]})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-primary font-semibold text-sm",children:r(s.endDate).diff(r(),"days")<0&&e.jsx("span",{className:"text-red-500",children:"Expired"})||r(s.endDate).diff(r(),"days")>=0&&e.jsx("span",{className:"text-red-500",children:r(s.endDate).diff(r(),"days")+1+" day left"})})})]})}),e.jsx("div",{className:"px-4 mb-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-primary font-semibold text-xs",children:(S=s==null?void 0:s.member)==null?void 0:S.mobile}),e.jsx("small",{className:"text-muted-foreground font-semibold text-xs",children:"Mobile"})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-primary font-semibold text-xs",children:s==null?void 0:s.planName})})]})}),e.jsxs("div",{className:"flex items-center justify-between px-4 mb-4 gap-4",children:[e.jsxs(w,{variant:"outline",size:"sm",className:"text-primary w-full h-6 ",onClick:()=>L(`/gym-app/view-member/${s==null?void 0:s.member._id}`),children:[e.jsx(V,{size:16}),e.jsx("h1",{className:"ms-1 text-xs",children:"View"})]}),e.jsxs(w,{variant:"outline",size:"sm",className:"text-red-600 w-full h-6 border-red-600 ",onClick:()=>$(s._id),children:[e.jsx(G,{size:16}),e.jsx("h1",{className:"ms-1 text-xs",children:"Delete"})]})]})]},i+1)})}),e.jsx("div",{className:"flex justify-end mt-3",children:e.jsx(q,{page:m,perPage:l,totalPage:(b=t.data)==null?void 0:b.data.totalDocs,hasNextPage:(g=(j=t.data)==null?void 0:j.data)==null?void 0:g.hasNextPage,hasPrevPage:(N=t.data)==null?void 0:N.data.hasPrevPage,setPage:n,setPerPage:D})})]})]})}export{ae as default};
