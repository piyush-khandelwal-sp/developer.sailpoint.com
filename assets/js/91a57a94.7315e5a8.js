"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[27534],{71487:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>b,contentTitle:()=>y,default:()=>A,frontMatter:()=>v,metadata:()=>k,toc:()=>f});var a=n(3905),c=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&p(t,n,e[n]);if(u)for(var n of u(e))r.call(e,n)&&p(t,n,e[n]);return t},m=(t,e)=>o(t,i(e)),l=(t,e)=>{var n={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&u)for(var a of u(t))e.indexOf(a)<0&&r.call(t,a)&&(n[a]=t[a]);return n};const v={id:"account-update-customizer",title:"Account Update",pagination_label:"Account Update",sidebar_label:"Account Update",keywords:["connectivity","connectors","Account Update"],description:"Intercept the account update command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-update",tags:["Connectivity","Connector Command"]},y=void 0,k={unversionedId:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-update-customizer",id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-update-customizer",title:"Account Update",description:"Intercept the account update command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-update.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/account-update",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-update",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-update.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{id:"account-update-customizer",title:"Account Update",pagination_label:"Account Update",sidebar_label:"Account Update",keywords:["connectivity","connectors","Account Update"],description:"Intercept the account update command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-update",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account Unlock",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-unlock"},next:{title:"Change Password",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/change-password"}},b={},f=[{value:"Overview",id:"overview",level:2},{value:"Example StdAccountUpdateInput",id:"example-stdaccountupdateinput",level:3},{value:"Example StdAccountUpdateOutput",id:"example-stdaccountupdateoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before account-update command",id:"before-account-update-command",level:3},{value:"After account-update command",id:"after-account-update-command",level:3}],h={toc:f},g="wrapper";function A(t){var e=t,{components:n}=e,c=l(e,["components"]);return(0,a.kt)(g,m(s(s({},h),c),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",s({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"Use these commands to intercept the ",(0,a.kt)("a",s({parentName:"p"},{href:"../../commands/account-update"}),"account-update")," command."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Input/Output"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Data Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"Input"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"StdAccountUpdateInput")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"Output"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"StdAccountUpdateOutput")))),(0,a.kt)("h3",s({},{id:"example-stdaccountupdateinput"}),"Example StdAccountUpdateInput"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "changes": [\n        {\n            "op": <Set|Add|Remove>,\n            "attribute": <account attribute to modify>,\n            "value": <the value to use for the operation>\n        }\n    ]\n}\n')),(0,a.kt)("h3",s({},{id:"example-stdaccountupdateoutput"}),"Example StdAccountUpdateOutput"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n')),(0,a.kt)("h2",s({},{id:"implementation"}),"Implementation"),(0,a.kt)("h3",s({},{id:"before-account-update-command"}),"Before account-update command"),(0,a.kt)("p",null,"Use this logic to implement the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"    .beforeStdAccountUpdate(async (context: Context, input: StdAccountUpdateInput) => {\n        logger.info(`Running before account, for account ${input.identity}`)\n        return input\n    })\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," object can be mutated and returned, but the same data type must still be returned."),(0,a.kt)("h3",s({},{id:"after-account-update-command"}),"After account-update command"),(0,a.kt)("p",null,"Use this logic to implement the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"    .afterStdAccountUpdate(async (context: Context, output: StdAccountUpdateOutput) => {\n        logger.info(`Running after account update for account ${output.identity}}`)\n        return output\n    })\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"output")," object can be mutated and returned, but the same data type must still be returned."))}A.isMDXComponent=!0}}]);