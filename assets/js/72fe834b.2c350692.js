"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[52180],{17377:(e,t,a)=>{a.d(t,{Z:()=>C});var i=a(67294),c=a(86010),n=a(76828),o=a(39130),r=a(35096),s=a(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=a(99603),d=a(21702);function p({href:e,children:t}){return i.createElement(o.default,{href:e,className:(0,c.default)("card padding--lg",l.cardContainer)},t)}function m({href:e,icon:t,title:a,description:n}){return i.createElement(p,{href:e},i.createElement("h2",{className:(0,c.default)("text--truncate",l.cardTitle),title:a},t,a),n&&i.createElement("p",{className:l.cardDescription,title:n},n))}function h({item:e}){var t,a;const c=(0,n.Wl)(e);return c?i.createElement(m,{href:c,icon:i.createElement(u.G,{icon:d.cC_,className:l.docCardIcon}),title:e.label,description:null!=(a=null==(t=e.customProps)?void 0:t.description)?a:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,a;const c=(0,r.Z)(e.href)?i.createElement(u.G,{icon:d.FL8,className:l.docCardIcon}):i.createElement(u.G,{icon:d.wlW,className:l.docCardIcon}),o=(0,n.xz)(null!=(t=e.docId)?t:void 0);return i.createElement(m,{href:e.href,icon:c,title:e.label,description:null!=(a=e.description)?a:null==o?void 0:o.description})}function y({item:e}){switch(e.type){case"link":return i.createElement(f,{item:e});case"category":return i.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,N=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,A=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&N(e,a,t[a]);if(g)for(var a of g(t))k.call(t,a)&&N(e,a,t[a]);return e};function w({className:e}){const t=(0,n.jA)();return i.createElement(C,{items:t.items,className:e})}function C(e){const{items:t,className:a}=e;if(!t)return i.createElement(w,A({},e));const o=(0,n.MN)(t);return i.createElement("section",{className:(0,c.default)("row",a)},o.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(y,{item:e})))))}},18251:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>w,frontMatter:()=>y,metadata:()=>g,toc:()=>k});var i=a(3905),c=a(17377),n=a(76828),o=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&p(e,a,t[a]);if(l)for(var a of l(t))d.call(t,a)&&p(e,a,t[a]);return e},h=(e,t)=>r(e,s(t)),f=(e,t)=>{var a={};for(var i in e)u.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&d.call(e,i)&&(a[i]=e[i]);return a};const y={id:"account-activities",title:"Account Activities",description:"Account Activities",custom_edit_url:null},v=void 0,g={unversionedId:"api/beta/account-activities",id:"api/beta/account-activities",title:"Account Activities",description:"Account Activities",source:"@site/docs/api/beta/account-activities.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/account-activities",permalink:"/docs/api/beta/account-activities",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"account-activities",title:"Account Activities",description:"Account Activities",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Access Request Status",permalink:"/docs/api/beta/list-access-request-status"},next:{title:"List Account Activities",permalink:"/docs/api/beta/list-account-activities"}},b={},k=[],N={toc:k},A="wrapper";function w(e){var t=e,{components:a}=t,o=f(t,["components"]);return(0,i.kt)(A,h(m(m({},N),o),{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use this API to implement account activity tracking functionality.\nWith this functionality in place, users can track source account activity in Identity Security Cloud, which greatly improves traceability in the system."),(0,i.kt)("p",null,"An account activity refers to a log of each action performed on a source account. This is useful for auditing the changes that occur on an account throughout its life.\nIn Identity Security Cloud's Search, users can search for account activities and select the activity's row to get an overview of the activity's account action and view its progress, its involved sources, and its most basic metadata, such as the identity requesting the option and the recipient."),(0,i.kt)("p",null,"Account activity includes most actions Identity Security Cloud completes on source accounts. Users can search in Identity Security Cloud for the following account action types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Access Request: These include any access requests the source account is involved in.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Account Attribute Updates: These include updates to a single attribute on an account on a source.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Account State Update: These include locking or unlocking actions on an account on a source.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Certification: These include actions removing an entitlement from an account on a source as a result of the entitlement's revocation during a certification.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cloud Automated ",(0,i.kt)("inlineCode",{parentName:"p"},"Lifecyclestate"),": These include automated lifecycle state changes that result in a source account's correlated identity being assigned to a different lifecycle state.\nIdentity Security Cloud replaces the ",(0,i.kt)("inlineCode",{parentName:"p"},"Lifecyclestate")," variable with the name of the lifecycle state it has moved the account's identity to.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Identity Attribute Update: These include updates to a source account's correlated identity attributes as the result of a provisioning action.\nWhen you update an identity attribute that also updates an identity's lifecycle state, the cloud automated ",(0,i.kt)("inlineCode",{parentName:"p"},"Lifecyclestate")," event also displays.\nAccount Activity does not include attribute updates that occur as a result of aggregation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Identity Refresh: These include correlated identity refreshes that occur for an account on a source whenever the account's correlated identity profile gets a new role or updates.\nThese also include refreshes that occur whenever Identity Security Cloud assigns an application to the account's correlated identity based on the application's being assigned to All Users From Source or Specific Users From Source.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Lifecycle State Refresh: These include the actions that took place when a lifecycle state changed. This event only occurs after a cloud automated ",(0,i.kt)("inlineCode",{parentName:"p"},"Lifecyclestate")," change or a lifecycle state change.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Lifecycle State Change: These include the account activities that result from an identity's manual assignment to a null lifecycle state.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Password Change: These include password changes on sources."))),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",m({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/search/index.html#account-activity"}),"Account Activity")," for more information about account activities."),(0,i.kt)(c.Z,{items:(0,n.jA)().items,mdxType:"DocCardList"}))}w.isMDXComponent=!0}}]);