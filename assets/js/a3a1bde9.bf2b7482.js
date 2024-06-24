"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[33384],{51095:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>c,default:()=>T,frontMatter:()=>b,metadata:()=>f,toc:()=>y});var r=i(3905),n=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,g=(e,t)=>{for(var i in t||(t={}))l.call(t,i)&&m(e,i,t[i]);if(s)for(var i of s(t))d.call(t,i)&&m(e,i,t[i]);return e},p=(e,t)=>a(e,o(t)),u=(e,t)=>{var i={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&d.call(e,r)&&(i[r]=e[r]);return i};const b={id:"form-submitted",title:"Form Submitted",pagination_label:"Form Submitted",sidebar_label:"Form Submitted",sidebar_class_name:"formSubmitted",keywords:["event","trigger","form","submitted","available"],description:"Triggered when a form is submitted.",slug:"/extensibility/event-triggers/triggers/form-submitted",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},c=void 0,f={unversionedId:"extensibility/event-triggers/available/form-submitted",id:"extensibility/event-triggers/available/form-submitted",title:"Form Submitted",description:"Triggered when a form is submitted.",source:"@site/docs/extensibility/event-triggers/available/form-submitted.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/form-submitted",permalink:"/docs/extensibility/event-triggers/triggers/form-submitted",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/form-submitted.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{id:"form-submitted",title:"Form Submitted",pagination_label:"Form Submitted",sidebar_label:"Form Submitted",sidebar_class_name:"formSubmitted",keywords:["event","trigger","form","submitted","available"],description:"Triggered when a form is submitted.",slug:"/extensibility/event-triggers/triggers/form-submitted",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Certification Signed Off",permalink:"/docs/extensibility/event-triggers/triggers/certification-signed-off"},next:{title:"Identity Attributes Changed",permalink:"/docs/extensibility/event-triggers/triggers/identity-attribute-changed"}},v={},y=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],k={toc:y},h="wrapper";function T(e){var t=e,{components:i}=t,n=u(t,["components"]);return(0,r.kt)(h,p(g(g({},k),n),{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h2",g({},{id:"event-context"}),"Event Context"),(0,r.kt)("p",null,"The Form Submitted events occur after a user has submitted a ",(0,r.kt)("a",g({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/forms/index.html"}),"custom form"),"."),(0,r.kt)("p",null,"Some uses cases for this trigger include the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Immediately take actions based on data submitted in the form")),(0,r.kt)("p",null,"This is an example input from this trigger:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-json"}),'{\n  "submittedAt": "2020-06-29T22:01:50.474Z",\n  "tenantId": "2c9180845d1edece015d27a9717c3e19",\n  "formInstanceId": "2c9180835d2e5168015d32f890ca1582",\n  "formDefinitionId": "2c9180835d2e5168015d32f890ca1581",\n  "name": "Open Service Request",\n  "createdBy": {\n    "type": "WORKFLOW_EXECUTION",\n    "id": "2c9180845d1edece015d27a9717c3e19"\n  },\n  "submittedBy": {\n    "type": "IDENTITY",\n    "id": "2c9180845d1edece015d27a9717c3e19",\n    "name": "Neil McGlennon"\n  },\n  "formData": {\n    "department": "IT",\n    "requestType": "New Laptop",\n    "laptop": "New Laptop type for Engineer",\n    "comments": "My laptop is running slow, and I need to get a shiny new laptop to get my work done.  Thanks!"\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formData")," contains the information provided by the user who submitted the form. The attributes of ",(0,r.kt)("inlineCode",{parentName:"li"},"formData")," will vary depending on the form definition.")),(0,r.kt)("h2",g({},{id:"additional-information-and-links"}),"Additional Information and Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,r.kt)("a",g({parentName:"li"},{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget"}),"FIRE_AND_FORGET"))))}T.isMDXComponent=!0}}]);