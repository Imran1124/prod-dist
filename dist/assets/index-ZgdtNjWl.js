import{j as e,H as T,g as A}from"./index-Cm13vULD.js";import{r}from"./router-Bu5b4_LN.js";import{C}from"./card-LmH44dMk.js";import{a as O,P as $}from"./index-DjsTfZ4u.js";import{L as M,P as R}from"./index-CF6AJFqG.js";import{I as D}from"./input-29TjVSRt.js";import"./axios-DmypytPv.js";import"./select-DyRCLz3X.js";function J(){var m,n,d,c,x,h,g,p,u,j,f,b;const[a,S]=r.useState(""),[o,w]=r.useState(""),[i,y]=r.useState(1),[l,I]=r.useState(5),s=O({api:`${A.collectionReport}?page=${i}&limit=${l}&fromDate=${a}&toDate=${o}`,key:"collectionReport",value:[i,l],options:{enabled:!0}});return e.jsxs($,{title:"Member List",children:[e.jsx("div",{className:"border-t border-secondary mt-3 mb-2"}),e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(D,{type:"date",value:a||new Date().toISOString().split("T")[0],onChange:t=>S(t.target.value),placeholder:"From Date",className:"w-full",min:o?new Date(o).toISOString().split("T")[0]:""}),e.jsx(D,{type:"date",min:a?new Date(a).toISOString().split("T")[0]:new Date().toISOString().split("T")[0],value:o||new Date().toISOString().split("T")[0],onChange:t=>w(t.target.value),placeholder:"To Date",className:"w-full"})]}),e.jsx("div",{className:"w-full",children:e.jsx(T,{size:"sm",className:"w-full",onClick:()=>{s.refetch()},children:"Search"})})]}),e.jsx("div",{className:"border-t border-secondary mt-1 mb-1"}),e.jsxs(M,{dataLength:((d=(n=(m=s.data)==null?void 0:m.data)==null?void 0:n.docs)==null?void 0:d.length)??0,isLoading:s.isFetching,children:[e.jsx("div",{className:"flex items-center justify-between mt-4",children:e.jsxs("h1",{className:"text-sm font-semibold text-muted-foreground",children:["Total Collection Amount (",(h=(x=(c=s.data)==null?void 0:c.data)==null?void 0:x.actualAmount)==null?void 0:h.totalPaidAmount,")"]})}),e.jsx("div",{className:"grid grid-cols-1 gap-0 mt-2",children:(p=(g=s.data)==null?void 0:g.data)==null?void 0:p.docs.map((t,L)=>{var N,v,P;return e.jsxs("div",{children:[e.jsx(C,{className:" p-4 shadow-none bg-secondary",children:e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xs font-semibold text-muted-foreground",children:"Member Name"}),e.jsx("h1",{className:"text-sm font-semibold",children:(N=t==null?void 0:t.member)==null?void 0:N.memberName})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xs font-semibold text-muted-foreground",children:"Member ID"}),e.jsx("h1",{className:"text-sm font-semibold",children:(v=t==null?void 0:t.member)==null?void 0:v.generatedId})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xs font-semibold text-muted-foreground",children:"Plan Name"}),e.jsx("h1",{className:"text-sm font-semibold",children:(P=t==null?void 0:t.member)==null?void 0:P.planName})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xs font-semibold text-muted-foreground",children:"Amount"}),e.jsx("h1",{className:"text-sm font-semibold",children:t.paidAmount})]})]})}),e.jsx("div",{className:"border-t border-secondary mt-2 mb-2"})]},L+1)})}),e.jsx("div",{className:"flex justify-end mt-3",children:e.jsx(R,{page:i,perPage:l,totalPage:(u=s.data)==null?void 0:u.data.totalDocs,hasNextPage:(f=(j=s.data)==null?void 0:j.data)==null?void 0:f.hasNextPage,hasPrevPage:(b=s.data)==null?void 0:b.data.hasPrevPage,setPage:y,setPerPage:I})})]})]})}export{J as default};