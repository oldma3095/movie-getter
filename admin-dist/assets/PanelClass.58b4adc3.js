import{F as d,A as f,R as g}from"./RefreshCircleOutline.81936af7.js";import{d as h,r as l,Q as y,Z as x,T as t,b7 as C,S as e,X as n,U as i,bm as u,h as B}from"./index.7431aa93.js";import{N as k,_ as v}from"./Space.7751e613.js";import{N}from"./Switch.2e2b731f.js";import{_ as b}from"./Input.5baf0b28.js";import{_ as w}from"./DataTable.10dc5da0.js";import"./Checkbox.38ad5681.js";import"./Dropdown.6a65d68c.js";import"./next-frame-once.da993024.js";const A={style:{display:"flex","align-items":"center",height:"100%"}},F={style:{display:"flex","align-items":"center",height:"100%"}},P=h({__name:"PanelClass",setup(I){const s=l([{id:1,name:"\u52A8\u4F5C\u7247",get:!0,categoryId:1}]);l(!1);const _=l([{title:"ID",key:"id",width:100,align:"center"},{title:"\u540D\u5B57",key:"name",align:"center"},{title:"\u662F\u5426\u91C7\u96C6",key:"get",width:200,align:"center",render(a,r){return B(N,{value:a.get,onUpdateValue:o=>{a.get=o}})}},{title:"\u6240\u5C5E\u5206\u7C7B",key:"categoryId",width:200,align:"center"}]);return setTimeout(()=>{console.log(s.value)},5e3),(a,r)=>{const o=k,c=b,p=w,m=C;return y(),x(m,{title:"\u5206\u7C7B\u7BA1\u7406",size:"small"},{"header-extra":t(()=>[e(n(v),null,{default:t(()=>[e(c,{placeholder:"\u641C\u7D22",round:""},{prefix:t(()=>[e(o,{component:n(d)},null,8,["component"])]),_:1}),i("div",A,[e(n(u),{text:"",type:"primary",style:{"font-size":"24px"}},{default:t(()=>[e(o,null,{default:t(()=>[e(n(f))]),_:1})]),_:1})]),i("div",F,[e(n(u),{text:"",type:"info",style:{"font-size":"24px"}},{default:t(()=>[e(o,null,{default:t(()=>[e(n(g))]),_:1})]),_:1})])]),_:1})]),default:t(()=>[e(p,{columns:_.value,data:s.value,bordered:!1,"single-line":!1},null,8,["columns","data"])]),_:1})}}});export{P as default};