import{j as e,H as w,g as U}from"./index-7XDXaKKu.js";import{d as R,r as E,u as _}from"./router-Bu5b4_LN.js";import{h as C}from"./moment-BjLXg0w5.js";import{a as B,P as H}from"./index-DQo4hSYu.js";import{C as q}from"./card-APMXLuex.js";import{L as F,P as G}from"./index-SS1YGn5N.js";import{E as I}from"./eye-DZ07218i.js";import{P as J}from"./pencil-B9pW0s7O.js";import"./axios-DmypytPv.js";import"./select-BzjFIod1.js";function oe(){var r,l,a,x,c,d,u,h,g,f,p,j,b,N,P,v,A,y,L,D;const n=R(),[m,M]=E.useState(1),[i,S]=E.useState(10),k=_(),t=new URLSearchParams(k.search).get("paymentstatus")??"",z=t=="0"?"0":"",o=B({api:`${U.amountList}?page=${m}&limit=${i}&paidstatus=${t}`,key:"paymentListAmount",value:[m,i,z],options:{enabled:!0}});return e.jsx(H,{title:"Transaction List",children:e.jsxs(F,{isLoading:o.isLoading,dataLength:(l=(r=o.data)==null?void 0:r.data.docs)==null?void 0:l.length,children:[e.jsx("div",{className:"flex justify-between items-center  mt-2 mb-2",children:e.jsxs("h1",{className:`text-sm font-semibold 
          ${t=="0"&&"text-red-700"}
          ${t=="1"&&"text-green-700"}
          ${t=="2"&&"text-blue-700"}
          
            `,children:["Total Amount-:"," ",t=="0"&&((c=(x=(a=o.data)==null?void 0:a.data)==null?void 0:x.totalAmt)==null?void 0:c.totalUnpaidAmount)||t=="1"&&((h=(u=(d=o.data)==null?void 0:d.data)==null?void 0:u.totalAmt)==null?void 0:h.totalPaidAmount)||t=="2"&&((p=(f=(g=o.data)==null?void 0:g.data)==null?void 0:f.totalAmt)==null?void 0:p.totalDueAmount)||t==""&&((N=(b=(j=o.data)==null?void 0:j.data)==null?void 0:b.totalAmt)==null?void 0:N.totalAmount)]})}),e.jsx("div",{className:"grid grid-cols-1 gap-3",children:(v=(P=o.data)==null?void 0:P.data.docs)==null?void 0:v.map((s,T)=>{var $,Y;return e.jsx(q,{className:" shadow-none rounded-2xl bg-secondary",children:e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs("div",{children:[e.jsxs("h1",{className:"text-base font-semibold text-foreground",children:["Name-: ",s.member.memberName]}),e.jsxs("small",{className:"text-xs font-semibold text-muted-foreground",children:["Email-: ",($=s==null?void 0:s.member)==null?void 0:$.email]}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-xs font-semibold text-muted-foreground",children:["Mobile-: ",(Y=s==null?void 0:s.member)==null?void 0:Y.mobile]}),e.jsxs("h1",{className:"text-xs font-semibold text-muted-foreground",children:["Plan-: ",s.member.planName]})]}),e.jsx("div",{children:t=="0"&&e.jsxs("h1",{className:"text-xs font-semibold text-muted-foreground",children:["Unpaid Amount-: ",(s==null?void 0:s.amount)-(s==null?void 0:s.paidAmount)]})||t=="1"&&e.jsxs("h1",{className:"text-xs font-semibold text-muted-foreground",children:["Paid Amount-: ",s==null?void 0:s.paidAmount]})||t=="2"&&e.jsxs("h1",{className:"text-xs font-semibold text-muted-foreground",children:["Due Amount-: ",s==null?void 0:s.dueAmount]})||t==""&&e.jsxs("h1",{className:"text-xs font-semibold text-muted-foreground",children:["Total Amount-: ",s==null?void 0:s.amount]})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-xs font-semibold text-muted-foreground",children:["Start date-:"," ",C(s.startDate).format("DD-MM-YYYY")]}),e.jsxs("h1",{className:"text-xs font-semibold text-muted-foreground",children:["End date-: ",C(s.endDate).format("DD-MM-YYYY")]})]})]})}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{children:e.jsx(w,{size:"sm",className:"bg-blue-100 text-white rounded-xl",onClick:()=>n(`/gym-app/view-member/${s==null?void 0:s.member._id}`),children:e.jsx(I,{size:15,className:"text-blue-600"})})}),e.jsx("div",{children:e.jsx(w,{size:"sm",className:"bg-green-100 text-white rounded-xl",onClick:()=>n(`/gym-app/update-member/${s==null?void 0:s.member._id}`),children:e.jsx(J,{size:15,className:"text-green-600"})})})]})]})})},T+1)})}),e.jsx("div",{className:"flex justify-end mt-3",children:e.jsx(G,{page:m,perPage:i,totalPage:(A=o.data)==null?void 0:A.data.totalDocs,hasNextPage:(L=(y=o.data)==null?void 0:y.data)==null?void 0:L.hasNextPage,hasPrevPage:(D=o.data)==null?void 0:D.data.hasPrevPage,setPage:M,setPerPage:S})})]})})}export{oe as default};
