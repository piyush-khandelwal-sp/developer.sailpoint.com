"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[66945],{17377:(e,t,a)=>{a.d(t,{Z:()=>O});var n=a(67294),r=a(86010),i=a(76828),o=a(39130),s=a(35096),l=a(33084);const c={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=a(99603),p=a(21702);function d({href:e,children:t}){return n.createElement(o.default,{href:e,className:(0,r.default)("card padding--lg",c.cardContainer)},t)}function m({href:e,icon:t,title:a,description:i}){return n.createElement(d,{href:e},n.createElement("h2",{className:(0,r.default)("text--truncate",c.cardTitle),title:a},t,a),i&&n.createElement("p",{className:c.cardDescription,title:i},i))}function g({item:e}){var t,a;const r=(0,i.Wl)(e);return r?n.createElement(m,{href:r,icon:n.createElement(u.G,{icon:p.cC_,className:c.docCardIcon}),title:e.label,description:null!=(a=null==(t=e.customProps)?void 0:t.description)?a:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,a;const r=(0,s.Z)(e.href)?n.createElement(u.G,{icon:p.FL8,className:c.docCardIcon}):n.createElement(u.G,{icon:p.wlW,className:c.docCardIcon}),o=(0,i.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(m,{href:e.href,icon:r,title:e.label,description:null!=(a=e.description)?a:null==o?void 0:o.description})}function h({item:e}){switch(e.type){case"link":return n.createElement(f,{item:e});case"category":return n.createElement(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var b=Object.defineProperty,k=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,N=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,j=(e,t)=>{for(var a in t||(t={}))y.call(t,a)&&N(e,a,t[a]);if(k)for(var a of k(t))v.call(t,a)&&N(e,a,t[a]);return e};function w({className:e}){const t=(0,i.jA)();return n.createElement(O,{items:t.items,className:e})}function O(e){const{items:t,className:a}=e;if(!t)return n.createElement(w,j({},e));const o=(0,i.MN)(t);return n.createElement("section",{className:(0,r.default)("row",a)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},58434:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>w,frontMatter:()=>h,metadata:()=>k,toc:()=>v});var n=a(3905),r=a(17377),i=a(76828),o=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&d(e,a,t[a]);if(c)for(var a of c(t))p.call(t,a)&&d(e,a,t[a]);return e},g=(e,t)=>s(e,l(t)),f=(e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const h={id:"tagged-objects",title:"Tagged Objects",description:"Tagged Objects",custom_edit_url:null},b=void 0,k={unversionedId:"api/v3/tagged-objects",id:"api/v3/tagged-objects",title:"Tagged Objects",description:"Tagged Objects",source:"@site/docs/api/v3/tagged-objects.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/tagged-objects",permalink:"/docs/api/v3/tagged-objects",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"tagged-objects",title:"Tagged Objects",description:"Tagged Objects",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Upload connector file to source",permalink:"/docs/api/v3/import-connector-file"},next:{title:"List Tagged Objects",permalink:"/docs/api/v3/list-tagged-objects"}},y={},v=[],N={toc:v},j="wrapper";function w(e){var t=e,{components:a}=t,o=f(t,["components"]);return(0,n.kt)(j,g(m(m({},N),o),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to implement object tagging functionality.\nWith object tagging functionality in place, any user in an organization can use tags as a way to group objects together and find them more quickly when the user searches Identity Security Cloud. "),(0,n.kt)("p",null,"In Identity Security Cloud, users can search their tenants for information and add tags objects they find.\nTagging an object provides users with a way of grouping objects together and makes it easier to find these objects in the future. "),(0,n.kt)("p",null,'For example, if a user is searching for an entitlement that grants a risky level of access to Active Directory, it\'s possible that the user may have to search through hundreds of entitlements to find the correct one.\nOnce the user finds that entitlement, the user can add a tag to the entitlement, "AD_RISKY" to make it easier to find the entitlement again.\nThe user can add the same tag to multiple objects the user wants to group together for an easy future search, and the user can also do so in bulk.\nWhen the user wants to find that tagged entitlement again, the user can search for "tags:AD_RISKY" to find all objects with that tag. '),(0,n.kt)("p",null,"With the API, you can tag even more different object types than you can in Identity Security Cloud (access profiles, entitlements, identities, and roles).\nYou can use the API to tag all these objects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Access profiles ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Applications ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Certification campaigns")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Entitlements")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Identities ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Roles ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SOD (separation of duties) policies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Sources "))),(0,n.kt)("p",null,"You can also use the API to directly find, create, and manage tagged objects without using search queries. "),(0,n.kt)("p",null,"There are limits to tags: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can have up to 500 different tags in your tenant.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can apply up to 30 tags to one object. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can have up to 10,000 tag associations, pairings of 1 tag to 1 object, in your tenant. "))),(0,n.kt)("p",null,"Because of these limits, it is recommended that you work with your governance experts and security teams to establish a list of tags that are most expressive of governance objects and access managed by Identity Security Cloud. "),(0,n.kt)("p",null,"These are the types of information often expressed in tags: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Affected departments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Compliance and regulatory categories ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Remediation urgency levels ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Risk levels "))),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",m({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/search/index.html?h=tags#tagging-items-in-search"}),"Tagging Items in Search")," for more information about tagging objects in Identity Security Cloud. "),(0,n.kt)(r.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}w.isMDXComponent=!0}}]);