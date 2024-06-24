"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[36971],{69954:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>y,default:()=>C,frontMatter:()=>v,metadata:()=>f,toc:()=>g});var o=n(3905),c=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,l=(t,e,n)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))r.call(e,n)&&l(t,n,e[n]);if(s)for(var n of s(e))m.call(e,n)&&l(t,n,e[n]);return t},p=(t,e)=>i(t,a(e)),u=(t,e)=>{var n={};for(var o in t)r.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&s)for(var o of s(t))e.indexOf(o)<0&&m.call(t,o)&&(n[o]=t[o]);return n};const v={id:"test-connection-customizer",title:"Test Connection",pagination_label:"Test Connection",sidebar_label:"Test Connection",keywords:["connectivity","connectors","test connection"],description:"Intercept the test connection command.",slug:"/connectivity/saas-connectivity/customizers/commands/test-connection",tags:["Connectivity","Connector Command"]},y=void 0,f={unversionedId:"connectivity/saas-connectivity/connector-customizers/customizer-commands/test-connection-customizer",id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/test-connection-customizer",title:"Test Connection",description:"Intercept the test connection command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/test-connection.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/test-connection",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/test-connection",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/test-connection.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{id:"test-connection-customizer",title:"Test Connection",pagination_label:"Test Connection",sidebar_label:"Test Connection",keywords:["connectivity","connectors","test connection"],description:"Intercept the test connection command.",slug:"/connectivity/saas-connectivity/customizers/commands/test-connection",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Source Data Read",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/source-data-read"},next:{title:"Full Example",permalink:"/docs/connectivity/saas-connectivity/customizers/example"}},k={},g=[{value:"Overview",id:"overview",level:2},{value:"Example StdTestConnectionOutput",id:"example-stdtestconnectionoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before test-connection command",id:"before-test-connection-command",level:3},{value:"After test-connection command",id:"after-test-connection-command",level:3}],b={toc:g},h="wrapper";function C(t){var e=t,{components:n}=e,c=u(e,["components"]);return(0,o.kt)(h,p(d(d({},b),c),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",d({},{id:"overview"}),"Overview"),(0,o.kt)("p",null,"Use these commands to intercept the ",(0,o.kt)("a",d({parentName:"p"},{href:"../../commands/test-connection"}),"Test-Connection")," command."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",d({parentName:"tr"},{align:"left"}),"Input/Output"),(0,o.kt)("th",d({parentName:"tr"},{align:"center"}),"Data Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",d({parentName:"tr"},{align:"left"}),"Input"),(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"undefined")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",d({parentName:"tr"},{align:"left"}),"Output"),(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"StdTestConnectionOutput")))),(0,o.kt)("h3",d({},{id:"example-stdtestconnectionoutput"}),"Example StdTestConnectionOutput"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"{\n}\n")),(0,o.kt)("h2",d({},{id:"implementation"}),"Implementation"),(0,o.kt)("h3",d({},{id:"before-test-connection-command"}),"Before test-connection command"),(0,o.kt)("p",null,"Use this logic to implement the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"    .beforeStdTestConnection(async (context: Context, input: undefined) => {\n        logger.info('Running before test connection')\n    })\n")),(0,o.kt)("p",null,"There is no input, so you cannot mutate any data. However, you can make web request calls or perform any type of logging or logic before calling the connector."),(0,o.kt)("h3",d({},{id:"after-test-connection-command"}),"After test-connection command"),(0,o.kt)("p",null,"Use this logic to implement the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"    .afterStdTestConnection(async (context: Context, output: StdTestConnectionOutput) => {\n        logger.info('Running after test connection')\n        return output\n    })\n")),(0,o.kt)("p",null,"The output datatype is always an empty object handed down from the connector."))}C.isMDXComponent=!0}}]);