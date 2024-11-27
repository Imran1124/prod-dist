import{g,j as e,S as k,_ as c,H as B}from"./index-7XDXaKKu.js";import{d as H,e as z,r as p}from"./router-Bu5b4_LN.js";import{u as L,R as q,F as D,T as V}from"./FileUpload-CRtxqQ-0.js";import{o as Y}from"./yup-Dda3J18l.js";import{F as W,R as h,c as G,a as d,e as J}from"./RHFTextField-J48GokzN.js";import{b as O,a as v,P as K}from"./index-DQo4hSYu.js";import{R as Q}from"./RHFTextArea-fgQZFYC0.js";import{B as A}from"./ButtonLoading-IcoFPimE.js";import"./input-MZ6FSroX.js";import{T as X,a as Z,b as T,c as j,d as ee,e as f}from"./table-CLjeg2PZ.js";import{h as ae}from"./moment-BjLXg0w5.js";import{r as se}from"./resizeImage-nNayW6hE.js";import"./axios-DmypytPv.js";import"./select-BzjFIod1.js";const re=G().shape({memberName:d().required("Member Name is required"),address:d().required("Address is required"),mobile:d().required("Mobile is required"),dob:d().required("Date of Birth is required"),email:d().notRequired().email().label("Email"),gender:d().required().label("Gender"),weight:d().required("Weight is required"),planMapping:d(),imageUrl:J().nullable()});function je(){var M,w;const R=H(),{id:x}=z(),[t,$]=p.useState(null),[U,_]=p.useState(null),y=O({}),[m,u]=p.useState([]),l=v({api:`${g.getMember}/${x}`,key:"get-member-detail",value:[x],options:{enabled:!!x}}),b=p.useMemo(()=>{var a,s,r,i,F,E,P,S;return(a=l.data)!=null&&a.data?{memberName:(s=l.data)==null?void 0:s.data.memberName,address:(r=l.data)==null?void 0:r.data.address,mobile:(i=l.data)==null?void 0:i.data.mobile,dob:ae((F=l.data)==null?void 0:F.data.dob).format("YYYY-MM-DD"),email:(E=l.data)==null?void 0:E.data.email,weight:(P=l.data)==null?void 0:P.data.weight,gender:(S=l==null?void 0:l.data.data)==null?void 0:S.gender,planMapping:"",imageUrl:null}:{memberName:"",address:"",mobile:"",dob:"",email:"",weight:"",gender:"",planMapping:"",imageUrl:null}},[(M=l.data)==null?void 0:M.data]),o=L({defaultValues:b,resolver:Y(re)}),C=async a=>{if(m.length===0)return alert("Please add at least one plan mapping");const s=new FormData;s.append("memberName",a.memberName),s.append("address",a.address),s.append("mobile",a.mobile),s.append("dob",a.dob),s.append("email",a.email??""),s.append("planMappingId",JSON.stringify(m.map(r=>r._id))),s.append("gender",a.gender),s.append("weight",a.weight),s.append("imageUrl",U);try{const r=await y.mutateAsync({api:`${g.updateMember}/${x}`,data:s});r.data.success?(u([]),c.success(r.data.message),R("/gym-app/member-list?member-status=1")):c.error(r.data.message)}catch{c.error("Something went wrong")}},N=v({api:g.getAllPlanMapping,key:"get-plan-mapping-id-id",options:{enabled:!0}}),n=v({api:`${g.getPlanMappingById}?id=${o.watch("planMapping")}`,key:"get-plan-mapping-by-id",value:[o.watch("planMapping")],options:{enabled:!!o.watch("planMapping")}});p.useEffect(()=>{var a;b&&(o.reset(b),u(((a=l.data)==null?void 0:a.data.planMappingId.map(s=>({_id:s._id,planId:s.planId,monthId:s.monthId,status:s.status,plan:s.plan,month:s.month,amount:s.amount})))||[]))},[b]);const I=async()=>{var i;if(((i=t==null?void 0:t[0])==null?void 0:i.size)>20*1024*1024)return c.error("File size is too large");const a=t==null?void 0:t[0];if(!a)return;const s=await se(a),r=new File([s],a==null?void 0:a.name,{type:a==null?void 0:a.type});_(r)};return p.useEffect(()=>{t&&I()},[t]),l.isLoading?e.jsx("div",{className:"flex items-center justify-center h-screen",children:e.jsx(k,{})}):e.jsxs(K,{title:"Update Member",children:[e.jsx("div",{className:"flex items-center justify-between mt-4",children:e.jsx("h1",{className:"text-base font-semibold text-muted-foreground",children:"UPDATE MEMBER"})}),e.jsx("div",{className:"border-t border-secondary mt-3"}),e.jsxs(W,{methods:o,onSubmit:o.handleSubmit(C),children:[e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("div",{children:e.jsx(h,{name:"memberName",label:"Member Name",placeholder:"Enter Member Name"})}),e.jsx("div",{children:e.jsx(h,{name:"email",label:"Email",placeholder:"Enter Email"})}),e.jsx("div",{children:e.jsx(h,{name:"mobile",label:"Mobile",placeholder:"Enter Mobile",inputValidation:["mobile","number"]})}),e.jsx("div",{children:e.jsx(h,{type:"date",name:"dob",label:"Date of Birth",placeholder:"Enter Date of Birth"})}),e.jsx("div",{children:e.jsx(h,{name:"weight",label:"Weight",placeholder:"Enter Weight"})}),e.jsx("div",{children:e.jsx(q,{label:"Gender",name:"gender",data:[{label:"Male",value:"male"},{label:"Female",value:"female"}]})}),e.jsx("div",{className:"col-span-2 mt-1",children:e.jsx(D,{onChangeValue:$,files:t,maxFiles:1,maxSize:20*1024*1024,accept:"image/*",multiple:!1})}),e.jsx("div",{className:"col-span-2",children:e.jsx(Q,{name:"address",label:"Address",placeholder:"Enter Address"})}),e.jsx("div",{className:"col-span-2",children:e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"col-span-2",children:e.jsx(q,{name:"planMapping",label:"Select Plan List",data:((w=N==null?void 0:N.data)==null?void 0:w.data.map(a=>({label:(a==null?void 0:a.plan)+` - month ${a==null?void 0:a.month}`,value:a==null?void 0:a._id})))||[]})}),e.jsx("div",{className:"mt-6",children:e.jsx(A,{isLoading:n.isFetching,disabled:n.isFetching,type:"button",onClick:()=>{if(o.watch("planMapping")=="")return c.error("Please select plan mapping");if(m==null?void 0:m.find(s=>{var r,i;return(s==null?void 0:s.plan)==((i=(r=n==null?void 0:n.data)==null?void 0:r.data)==null?void 0:i.plan)}))return c.error("Plan already added");u(s=>{var r;return[...s,(r=n==null?void 0:n.data)==null?void 0:r.data]})},className:"bg-primary text-white w-full h-9",children:e.jsx("h1",{className:"text-xs",children:"Add Plan"})})})]})})]})}),e.jsx("div",{className:"border-t border-secondary mt-5"}),m.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-1",children:e.jsxs(X,{children:[e.jsx(Z,{children:e.jsxs(T,{children:[e.jsx(j,{className:"text-xs",children:"Plan"}),e.jsx(j,{className:"text-xs",children:"Month"}),e.jsx(j,{className:"text-xs",children:"Amount"}),e.jsx(j,{className:"text-xs",children:"Action"})]})}),e.jsx(ee,{children:m.map((a,s)=>e.jsxs(T,{children:[e.jsx(f,{className:"text-xs py-2.5",children:a==null?void 0:a.plan}),e.jsx(f,{className:"text-xs py-2.5",children:a==null?void 0:a.month}),e.jsx(f,{className:"text-xs py-2.5",children:a==null?void 0:a.amount}),e.jsx(f,{className:"text-xs py-2.5",children:e.jsx(B,{type:"button",className:"bg-red-100 text-white   flex items-center justify-center p-3",onClick:()=>{u(r=>r.filter(i=>(i==null?void 0:i._id)!==(a==null?void 0:a._id)))},children:e.jsx(V,{size:16,className:"text-red-700"})})})]},s+1))})]})}),e.jsx("div",{className:"border-t border-secondary mt-5"}),e.jsx("div",{className:"mt-8 flex justify-center",children:e.jsx(A,{type:"submit",className:"bg-primary text-white",isLoading:y.isPending,children:e.jsx("h1",{className:"text-xs",children:"Update Member"})})})]})]})]})}export{je as default};
