"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[88494],{90881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>T,frontMatter:()=>h,metadata:()=>f,toc:()=>g});var n=a(3905),s=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&c(e,a,t[a]);return e},m=(e,t)=>r(e,l(t)),d=(e,t)=>{var a={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const h={id:"cli-template-search",title:"Search Template",pagination_label:"CLI Templates Search",sidebar_label:"Search",sidebar_position:10,sidebar_class_name:"cli-template-search",keywords:["cli","template","search"],description:"Learn about the commands you can use to run search templates from the CLI.",slug:"/tools/cli/templates/search",tags:["CLI"]},y=void 0,f={unversionedId:"tools/cli/Templates/cli-template-search",id:"tools/cli/Templates/cli-template-search",title:"Search Template",description:"Learn about the commands you can use to run search templates from the CLI.",source:"@site/docs/tools/cli/Templates/search.md",sourceDirName:"tools/cli/Templates",slug:"/tools/cli/templates/search",permalink:"/docs/tools/cli/templates/search",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/Templates/search.md",tags:[{label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:10,frontMatter:{id:"cli-template-search",title:"Search Template",pagination_label:"CLI Templates Search",sidebar_label:"Search",sidebar_position:10,sidebar_class_name:"cli-template-search",keywords:["cli","template","search"],description:"Learn about the commands you can use to run search templates from the CLI.",slug:"/tools/cli/templates/search",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"CLI Templates Report",permalink:"/docs/tools/cli/templates/report"},next:{title:"CLI Templates SPConfig",permalink:"/docs/tools/cli/templates/spconfig"}},b={},g=[],v={toc:g},k="wrapper";function T(e){var t=e,{components:a}=t,s=d(t,["components"]);return(0,n.kt)(k,m(u(u({},v),s),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use search templates to run predefined search queries from the CLI."),(0,n.kt)("p",null,"This is an example of a template file with 3 search templates populated:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "name": "all-account-unlocks",\n    "description": "All account unlocks in the tenant for a given time range",\n    "variables": [{"name": "days", "prompt": "Days before today"}],\n    "searchQuery": {\n      "indices": ["events"],\n      "queryType": null,\n      "queryVersion": null,\n      "query": {\n        "query": "(USER_UNLOCK_PASSED AND created:[now-{{days}}d TO now])"\n      },\n      "sort": [],\n      "searchAfter": []\n    }\n  },\n  {\n    "name": "all-provisioning-events",\n    "description": "All provisioning events in the tenant for a given time range",\n    "variables": [{"name": "days", "prompt": "Days before today"}],\n    "searchQuery": {\n      "indices": ["events"],\n      "queryType": null,\n      "queryVersion": null,\n      "query": {\n        "query": "(type:provisioning AND created:[now-{{days}}d TO now])"\n      },\n      "sort": [],\n      "searchAfter": []\n    }\n  },\n  {\n    "name": "all-provisioning-events-90-days",\n    "description": "All provisioning events in the tenant for a given time range",\n    "variables": [],\n    "searchQuery": {\n      "indices": ["events"],\n      "queryType": null,\n      "queryVersion": null,\n      "query": {\n        "query": "(type:provisioning AND created:[now-90d TO now])"\n      },\n      "sort": [],\n      "searchAfter": []\n    }\n  }\n]\n')),(0,n.kt)("p",null,"This is the search template anatomy:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "name": "all-account-unlocks",\n')),(0,n.kt)("p",null,"This is the search template's name."),(0,n.kt)("p",null,"It displays in the template list when you run ",(0,n.kt)("inlineCode",{parentName:"p"},"sail search template"),"."),(0,n.kt)("p",null,"You can also provide this name as an argument: ",(0,n.kt)("inlineCode",{parentName:"p"},"sail search template all-account-unlocks")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'  "description": "All account unlocks in the tenant for a given time range"\n')),(0,n.kt)("p",null,"This is the search template's description."),(0,n.kt)("p",null,"It displays following the template name in the ",(0,n.kt)("inlineCode",{parentName:"p"},"sail search template")," list."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'  "variables": [{"name": "days", "prompt": "Days before today"}],\n')),(0,n.kt)("p",null,"Use variables to dynamically populate values in the following content during command run time."),(0,n.kt)("p",null,"For example, the variable in this template is configured so you can choose how many days back you want to search for account unlock events. When you run ",(0,n.kt)("inlineCode",{parentName:"p"},"sail search template all-account-unlocks"),", a prompt displays, ",(0,n.kt)("inlineCode",{parentName:"p"},"Input Days before today:")," The number you enter will then populate anywhere the variable is used in the following object, and then the query runs."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'  "searchQuery": {\n    "indices": ["events"],\n    "queryType": null,\n    "queryVersion": null,\n    "query": {\n      "query": "(USER_UNLOCK_PASSED AND created:[now-{{days}}d TO now])" },\n      "sort": [], "searchAfter": []\n      }\n  }\n')),(0,n.kt)("p",null,"Everything inside this searchQuery object matches the standard format of an ",(0,n.kt)("a",u({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/search/building-query.html"}),"Identity Security Cloud search query"),". A limited number of examples are provided ",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/v3/search-post"}),"here"),", but the searchQuery object is mapped to the full search object. This means that you can add any search query values missing from this object."))}T.isMDXComponent=!0}}]);