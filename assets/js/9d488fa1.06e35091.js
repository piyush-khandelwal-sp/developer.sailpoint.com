"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[72157],{17377:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(67294),o=n(86010),a=n(76828),s=n(39130),i=n(35096),l=n(33084);const c={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=n(99603),p=n(21702);function d({href:e,children:t}){return r.createElement(s.default,{href:e,className:(0,o.default)("card padding--lg",c.cardContainer)},t)}function m({href:e,icon:t,title:n,description:a}){return r.createElement(d,{href:e},r.createElement("h2",{className:(0,o.default)("text--truncate",c.cardTitle),title:n},t,n),a&&r.createElement("p",{className:c.cardDescription,title:a},a))}function h({item:e}){var t,n;const o=(0,a.Wl)(e);return o?r.createElement(m,{href:o,icon:r.createElement(u.G,{icon:p.cC_,className:c.docCardIcon}),title:e.label,description:null!=(n=null==(t=e.customProps)?void 0:t.description)?n:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,n;const o=(0,i.Z)(e.href)?r.createElement(u.G,{icon:p.FL8,className:c.docCardIcon}):r.createElement(u.G,{icon:p.wlW,className:c.docCardIcon}),s=(0,a.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(m,{href:e.href,icon:o,title:e.label,description:null!=(n=e.description)?n:null==s?void 0:s.description})}function y({item:e}){switch(e.type){case"link":return r.createElement(f,{item:e});case"category":return r.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var g=Object.defineProperty,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&w(e,n,t[n]);if(v)for(var n of v(t))k.call(t,n)&&w(e,n,t[n]);return e};function E({className:e}){const t=(0,a.jA)();return r.createElement(C,{items:t.items,className:e})}function C(e){const{items:t,className:n}=e;if(!t)return r.createElement(E,D({},e));const s=(0,a.MN)(t);return r.createElement("section",{className:(0,o.default)("row",n)},s.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},90061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>E,frontMatter:()=>y,metadata:()=>v,toc:()=>k});var r=n(3905),o=n(17377),a=n(76828),s=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&d(e,n,t[n]);return e},h=(e,t)=>i(e,l(t)),f=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const y={id:"roles",title:"Roles",description:"Roles",custom_edit_url:null},g=void 0,v={unversionedId:"api/v3/roles",id:"api/v3/roles",title:"Roles",description:"Roles",source:"@site/docs/api/v3/roles.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/roles",permalink:"/docs/api/v3/roles",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"roles",title:"Roles",description:"Roles",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Requestable Objects List",permalink:"/docs/api/v3/list-requestable-objects"},next:{title:"List Roles",permalink:"/docs/api/v3/list-roles"}},b={},k=[],w={toc:k},D="wrapper";function E(e){var t=e,{components:n}=t,s=f(t,["components"]);return(0,r.kt)(D,h(m(m({},w),s),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API to implement and customize role functionality.\nWith this functionality in place, administrators can create roles and configure them for use throughout Identity Security Cloud.\nIdentity Security Cloud can use established criteria to automatically assign the roles to qualified users. This enables users to get all the access they need quickly and securely and administrators to spend their time on other tasks."),(0,r.kt)("p",null,"Entitlements represent the most granular level of access in Identity Security Cloud.\nAccess profiles represent the next level and often group entitlements.\nRoles represent the broadest level of access and often group access profiles. "),(0,r.kt)("p",null,"For example, an Active Directory source in Identity Security Cloud can have multiple entitlements: the first, 'Employees,' may represent the access all employees have at the organization, and a second, 'Developers,' may represent the access all developers have at the organization."),(0,r.kt)("p",null,"An administrator can then create a broader set of access in the form of an access profile, 'AD Developers' grouping the 'Employees' entitlement with the 'Developers' entitlement."),(0,r.kt)("p",null,"An administrator can then create an even broader set of access in the form of a role grouping the 'AD Developers' access profile with another profile, 'GitHub Developers,' grouping entitlements for the GitHub source."),(0,r.kt)("p",null,"When users only need Active Directory employee access, they can request access to the 'Employees' entitlement."),(0,r.kt)("p",null,"When users need both Active Directory employee and developer access, they can request access to the 'AD Developers' access profile."),(0,r.kt)("p",null,"When users need both the 'AD Developers' access profile and the 'GitHub Developers' access profile, they can request access to the role grouping both. "),(0,r.kt)("p",null,"Roles often represent positions within organizations.\nFor example, an organization's accountant can access all the tools the organization's accountants need with the 'Accountant' role.\nIf the accountant switches to engineering, a qualified member of the organization can quickly revoke the accountant's 'Accountant' access and grant access to the 'Engineer' role instead, granting access to all the tools the organization's engineers need."),(0,r.kt)("p",null,"In Identity Security Cloud, adminstrators can use the Access drop-down menu and select Roles to view, configure, and delete existing roles, as well as create new ones.\nAdministrators can enable and disable the role, and they can also make the following configurations: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Manage Access: Manage the role's access by adding or removing access profiles.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Define Assignment: Define the criteria Identity Security Cloud uses to assign the role to identities.\nUse the first option, 'Standard Criteria,' to provide specific criteria for assignment like specific account attributes, entitlements, or identity attributes.\nUse the second, 'Identity List,' to specify the identities for assignment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Access Requests: Configure roles to be requestable and establish an approval process for any requests that the role be granted or revoked.\nDo not configure a role to be requestable without establishing a secure access request approval process for that role first. "))),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",m({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/access/roles.html"}),"Working with Roles")," for more information about roles."),(0,r.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}E.isMDXComponent=!0}}]);