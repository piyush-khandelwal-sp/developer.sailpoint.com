"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[92388],{17377:(e,t,i)=>{i.d(t,{Z:()=>C});var r=i(67294),n=i(86010),a=i(76828),c=i(39130),o=i(35096),l=i(33084);const s={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var p=i(99603),d=i(21702);function u({href:e,children:t}){return r.createElement(c.default,{href:e,className:(0,n.default)("card padding--lg",s.cardContainer)},t)}function m({href:e,icon:t,title:i,description:a}){return r.createElement(u,{href:e},r.createElement("h2",{className:(0,n.default)("text--truncate",s.cardTitle),title:i},t,i),a&&r.createElement("p",{className:s.cardDescription,title:a},a))}function f({item:e}){var t,i;const n=(0,a.Wl)(e);return n?r.createElement(m,{href:n,icon:r.createElement(p.G,{icon:d.cC_,className:s.docCardIcon}),title:e.label,description:null!=(i=null==(t=e.customProps)?void 0:t.description)?i:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function b({item:e}){var t,i;const n=(0,o.Z)(e.href)?r.createElement(p.G,{icon:d.FL8,className:s.docCardIcon}):r.createElement(p.G,{icon:d.wlW,className:s.docCardIcon}),c=(0,a.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(m,{href:e.href,icon:n,title:e.label,description:null!=(i=e.description)?i:null==c?void 0:c.description})}function y({item:e}){switch(e.type){case"link":return r.createElement(b,{item:e});case"category":return r.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,O=(e,t,i)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,w=(e,t)=>{for(var i in t||(t={}))h.call(t,i)&&O(e,i,t[i]);if(g)for(var i of g(t))E.call(t,i)&&O(e,i,t[i]);return e};function j({className:e}){const t=(0,a.jA)();return r.createElement(C,{items:t.items,className:e})}function C(e){const{items:t,className:i}=e;if(!t)return r.createElement(j,w({},e));const c=(0,a.MN)(t);return r.createElement("section",{className:(0,n.default)("row",i)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},40914:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>j,frontMatter:()=>y,metadata:()=>g,toc:()=>E});var r=i(3905),n=i(17377),a=i(76828),c=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,i)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,m=(e,t)=>{for(var i in t||(t={}))p.call(t,i)&&u(e,i,t[i]);if(s)for(var i of s(t))d.call(t,i)&&u(e,i,t[i]);return e},f=(e,t)=>o(e,l(t)),b=(e,t)=>{var i={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&d.call(e,r)&&(i[r]=e[r]);return i};const y={id:"applications",title:"Applications",description:"Applications",custom_edit_url:null},v=void 0,g={unversionedId:"api/iiq/applications",id:"api/iiq/applications",title:"Applications",description:"Applications",source:"@site/docs/api/iiq/applications.tag.mdx",sourceDirName:"api/iiq",slug:"/api/iiq/applications",permalink:"/docs/api/iiq/applications",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"applications",title:"Applications",description:"Applications",custom_edit_url:null},sidebar:"iiqSideBar",previous:{title:"Returns an Alert resource based on id.",permalink:"/docs/api/iiq/get-alert-by-id"},next:{title:"Returns all Application resources.",permalink:"/docs/api/iiq/get-applications"}},h={},E=[],O={toc:E},w="wrapper";function j(e){var t=e,{components:i}=t,c=b(t,["components"]);return(0,r.kt)(w,f(m(m({},O),c),{components:i,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Alert object, a generic real time event processing object."),(0,r.kt)(n.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}j.isMDXComponent=!0}}]);