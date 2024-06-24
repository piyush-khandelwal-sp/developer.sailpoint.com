"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[88145],{17377:(e,t,i)=>{i.d(t,{Z:()=>P});var n=i(67294),a=i(86010),o=i(76828),r=i(39130),s=i(35096),c=i(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var p=i(99603),d=i(21702);function m({href:e,children:t}){return n.createElement(r.default,{href:e,className:(0,a.default)("card padding--lg",l.cardContainer)},t)}function u({href:e,icon:t,title:i,description:o}){return n.createElement(m,{href:e},n.createElement("h2",{className:(0,a.default)("text--truncate",l.cardTitle),title:i},t,i),o&&n.createElement("p",{className:l.cardDescription,title:o},o))}function f({item:e}){var t,i;const a=(0,o.Wl)(e);return a?n.createElement(u,{href:a,icon:n.createElement(p.G,{icon:d.cC_,className:l.docCardIcon}),title:e.label,description:null!=(i=null==(t=e.customProps)?void 0:t.description)?i:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function h({item:e}){var t,i;const a=(0,s.Z)(e.href)?n.createElement(p.G,{icon:d.FL8,className:l.docCardIcon}):n.createElement(p.G,{icon:d.wlW,className:l.docCardIcon}),r=(0,o.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(u,{href:e.href,icon:a,title:e.label,description:null!=(i=e.description)?i:null==r?void 0:r.description})}function v({item:e}){switch(e.type){case"link":return n.createElement(h,{item:e});case"category":return n.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var b=Object.defineProperty,y=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,N=(e,t,i)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,w=(e,t)=>{for(var i in t||(t={}))g.call(t,i)&&N(e,i,t[i]);if(y)for(var i of y(t))E.call(t,i)&&N(e,i,t[i]);return e};function I({className:e}){const t=(0,o.jA)();return n.createElement(P,{items:t.items,className:e})}function P(e){const{items:t,className:i}=e;if(!t)return n.createElement(I,w({},e));const r=(0,o.MN)(t);return n.createElement("section",{className:(0,a.default)("row",i)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}},87698:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>I,frontMatter:()=>v,metadata:()=>y,toc:()=>E});var n=i(3905),a=i(17377),o=i(76828),r=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,u=(e,t)=>{for(var i in t||(t={}))p.call(t,i)&&m(e,i,t[i]);if(l)for(var i of l(t))d.call(t,i)&&m(e,i,t[i]);return e},f=(e,t)=>s(e,c(t)),h=(e,t)=>{var i={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(i[n]=e[n]);return i};const v={id:"non-employee",title:"NERM API Specifications",pagination_label:"NERM API Specifications",sidebar_label:"NERM API Specifications",sidebar_position:1,sidebar_class_name:"nermApiSpecifications",keywords:["api","specifications"],description:"NERM API specifications.",slug:"/api/nerm",tags:["API Specifications"]},b=void 0,y={unversionedId:"api/non-employee",id:"api/non-employee",title:"NERM API Specifications",description:"NERM API specifications.",source:"@site/docs/api/non-employee.md",sourceDirName:"api",slug:"/api/nerm",permalink:"/docs/api/nerm",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/api/non-employee.md",tags:[{label:"API Specifications",permalink:"/docs/tags/api-specifications"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:1,frontMatter:{id:"non-employee",title:"NERM API Specifications",pagination_label:"NERM API Specifications",sidebar_label:"NERM API Specifications",sidebar_position:1,sidebar_class_name:"nermApiSpecifications",keywords:["api","specifications"],description:"NERM API specifications.",slug:"/api/nerm",tags:["API Specifications"]},sidebar:"openApiSidebar",previous:{title:"Change an approval",permalink:"/docs/api/beta/patch-approval"},next:{title:"Getting Started",permalink:"/docs/api/nerm/getting-started"}},g={},E=[{value:"Overview",id:"overview",level:2},{value:"Discuss",id:"discuss",level:2}],N={toc:E},w="wrapper";function I(e){var t=e,{components:i}=t,r=h(t,["components"]);return(0,n.kt)(w,f(u(u({},N),r),{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h2",u({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"https://documentation.sailpoint.com/ne-admin/help/"}),"Non-Employee Risk Management (NERM)")," is an add-on to Identity Security Cloud (ISC) that helps organizations track non-employees such as contractors, partners, and vendors, and their lifecycles within the organization."),(0,n.kt)("p",null,"The Non-Employee Risk Management (NERM) APIs provide developers with a way to interact with the NERM add-on and extend it. Developers can leverage these APIs to customize their platform experiences and build new solutions and integrations that meet their needs."),(0,n.kt)(a.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}),(0,n.kt)("h2",u({},{id:"discuss"}),"Discuss"),(0,n.kt)("p",null,"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions."),(0,n.kt)("p",null,"To learn more about the NERM APIs and discuss them with SailPoint Developer Community members, go to the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.sailpoint.com/discuss/tag/nerm"}),"SailPoint Developer Community Forum"),"."))}I.isMDXComponent=!0}}]);