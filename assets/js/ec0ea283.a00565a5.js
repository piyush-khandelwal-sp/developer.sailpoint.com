"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[59168],{12818:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>f,default:()=>w,frontMatter:()=>v,metadata:()=>b,toc:()=>h});var i=a(3905),n=Object.defineProperty,r=Object.defineProperties,g=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&o(e,a,t[a]);if(s)for(var a of s(t))d.call(t,a)&&o(e,a,t[a]);return e},c=(e,t)=>r(e,g(t)),m=(e,t)=>{var a={};for(var i in e)l.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&s)for(var i of s(e))t.indexOf(i)<0&&d.call(e,i)&&(a[i]=e[i]);return a};const v={id:"campaign-generated",title:"Campaign Generated",pagination_label:"Campaign Generated",sidebar_label:"Campaign Generated",sidebar_class_name:"campaignGenerated",keywords:["event","trigger","campaign","generated","available"],description:"Triggered when a campaign finishes generating.",slug:"/extensibility/event-triggers/triggers/campaign-generated",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},f=void 0,b={unversionedId:"extensibility/event-triggers/available/campaign-generated",id:"extensibility/event-triggers/available/campaign-generated",title:"Campaign Generated",description:"Triggered when a campaign finishes generating.",source:"@site/docs/extensibility/event-triggers/available/campaign-generated.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/campaign-generated",permalink:"/docs/extensibility/event-triggers/triggers/campaign-generated",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/campaign-generated.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{id:"campaign-generated",title:"Campaign Generated",pagination_label:"Campaign Generated",sidebar_label:"Campaign Generated",sidebar_class_name:"campaignGenerated",keywords:["event","trigger","campaign","generated","available"],description:"Triggered when a campaign finishes generating.",slug:"/extensibility/event-triggers/triggers/campaign-generated",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Campaign Ended",permalink:"/docs/extensibility/event-triggers/triggers/campaign-ended"},next:{title:"Certification Signed Off",permalink:"/docs/extensibility/event-triggers/triggers/certification-signed-off"}},u={},h=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],k={toc:h},y="wrapper";function w(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,i.kt)(y,c(p(p({},k),r),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",p({},{id:"event-context"}),"Event Context"),(0,i.kt)("p",null,'The Campaign Generated events occur when a campaign has finished generating and moves to the "Preview Ready" state, which is a step before activating the campaign.'),(0,i.kt)("p",null,'When a new campaign is created, it will start in the "Generating" state.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generating",src:a(12439).Z,width:"2186",height:"355"})),(0,i.kt)("p",null,'Once the generation is complete, the campaign will move to the "Preview Ready" state, and this trigger will fire an event with the details of the campaign.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Preivew",src:a(86555).Z,width:"2174",height:"350"})),(0,i.kt)("p",null,"Some uses cases for this trigger include the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Immediately activate a campaign as soon as it is ready")),(0,i.kt)("p",null,"This is an example input from this trigger:"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-json"}),'{\n  "campaign": {\n    "id": "2c91808576f886190176f88cac5a0010",\n    "name": "Manager Access Campaign",\n    "description": "Audit access for all employees.",\n    "created": "2021-02-16T03:04:45.815Z",\n    "modified": null,\n    "deadline": null,\n    "type": "MANAGER",\n    "campaignOwner": {\n      "id": "37f080867702c1910177031320c40n27",\n      "displayName": "William Wilson",\n      "email": "william.wilson@example.com"\n    },\n    "status": "STAGED"\n  }\n}\n')),(0,i.kt)("h2",p({},{id:"additional-information-and-links"}),"Additional Information and Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,i.kt)("a",p({parentName:"li"},{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget"}),"FIRE_AND_FORGET"))))}w.isMDXComponent=!0},12439:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/campaign-generated-generating-934c2f7f4f8c4fd5639accadc66a4ce0.png"},86555:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/campaign-generated-preview-3774388d3d0d95764edcb352b72e96cf.png"}}]);