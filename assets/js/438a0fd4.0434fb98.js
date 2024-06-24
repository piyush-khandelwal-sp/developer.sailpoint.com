"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[29679],{17377:(e,t,r)=>{r.d(t,{Z:()=>O});var o=r(67294),a=r(86010),i=r(76828),n=r(39130),s=r(35096),c=r(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=r(99603),p=r(21702);function u({href:e,children:t}){return o.createElement(n.default,{href:e,className:(0,a.default)("card padding--lg",l.cardContainer)},t)}function m({href:e,icon:t,title:r,description:i}){return o.createElement(u,{href:e},o.createElement("h2",{className:(0,a.default)("text--truncate",l.cardTitle),title:r},t,r),i&&o.createElement("p",{className:l.cardDescription,title:i},i))}function f({item:e}){var t,r;const a=(0,i.Wl)(e);return a?o.createElement(m,{href:a,icon:o.createElement(d.G,{icon:p.cC_,className:l.docCardIcon}),title:e.label,description:null!=(r=null==(t=e.customProps)?void 0:t.description)?r:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function w({item:e}){var t,r;const a=(0,s.Z)(e.href)?o.createElement(d.G,{icon:p.FL8,className:l.docCardIcon}):o.createElement(d.G,{icon:p.wlW,className:l.docCardIcon}),n=(0,i.xz)(null!=(t=e.docId)?t:void 0);return o.createElement(m,{href:e.href,icon:a,title:e.label,description:null!=(r=e.description)?r:null==n?void 0:n.description})}function y({item:e}){switch(e.type){case"link":return o.createElement(w,{item:e});case"category":return o.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var h=Object.defineProperty,b=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&v(e,r,t[r]);if(b)for(var r of b(t))P.call(t,r)&&v(e,r,t[r]);return e};function I({className:e}){const t=(0,i.jA)();return o.createElement(O,{items:t.items,className:e})}function O(e){const{items:t,className:r}=e;if(!t)return o.createElement(I,E({},e));const n=(0,i.MN)(t);return o.createElement("section",{className:(0,a.default)("row",r)},n.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(y,{item:e})))))}},60823:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>I,frontMatter:()=>y,metadata:()=>b,toc:()=>P});var o=r(3905),a=r(17377),i=r(76828),n=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>s(e,c(t)),w=(e,t)=>{var r={};for(var o in e)d.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&p.call(e,o)&&(r[o]=e[o]);return r};const y={id:"password-policies",title:"Password Policies",description:"Password Policies",custom_edit_url:null},h=void 0,b={unversionedId:"api/beta/password-policies",id:"api/beta/password-policies",title:"Password Policies",description:"Password Policies",source:"@site/docs/api/beta/password-policies.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/password-policies",permalink:"/docs/api/beta/password-policies",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"password-policies",title:"Password Policies",description:"Password Policies",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Password Change Request Status",permalink:"/docs/api/beta/get-identity-password-change-status"},next:{title:"Get Password Policy by ID",permalink:"/docs/api/beta/get-password-policy-by-id"}},g={},P=[],v={toc:P},E="wrapper";function I(e){var t=e,{components:r}=t,n=w(t,["components"]);return(0,o.kt)(E,f(m(m({},v),n),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use these APIs to implement password policies functionality.\nThese APIs allow you to define the policy parameters for choosing passwords."),(0,o.kt)("p",null,"IdentityNow comes with a default policy that you can modify to define the password requirements your users must meet to log in to IdentityNow, such as requiring a minimum password length, including special characters, and disallowing certain patterns.\nIf you have licensed Password Management, you can create additional password policies beyond the default one to manage passwords for supported sources in your org."),(0,o.kt)("p",null,"In the Identity Security Cloud Admin panel, administrators can use the Password Mgmt dropdown menu to select Sync Groups."),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",m({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/pwd/pwd_policies/pwd_policies.html"}),"Managing Password Policies")," for more information about password policies."),(0,o.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}I.isMDXComponent=!0}}]);