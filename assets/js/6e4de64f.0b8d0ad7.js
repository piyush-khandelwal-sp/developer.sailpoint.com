"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[65157],{35062:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>S,frontMatter:()=>v,metadata:()=>b,toc:()=>D});var o=a(3905),n=Object.defineProperty,r=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(i)for(var a of i(t))d.call(t,a)&&u(e,a,t[a]);return e},l=(e,t)=>r(e,c(t)),p=(e,t)=>{var a={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&d.call(e,o)&&(a[o]=e[o]);return a};const v={id:"source-data-discover-customizer",title:"Source Data Discover",pagination_label:"Source Data Discover",sidebar_label:"Source Data Discover",keywords:["connectivity","connectors","Source Data Discover"],description:"Intercept the source data discover command.",slug:"/connectivity/saas-connectivity/customizers/commands/source-data-discover",tags:["Connectivity","Connector Command"]},y=void 0,b={unversionedId:"connectivity/saas-connectivity/connector-customizers/customizer-commands/source-data-discover-customizer",id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/source-data-discover-customizer",title:"Source Data Discover",description:"Intercept the source data discover command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/source-data-discover.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/source-data-discover",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/source-data-discover",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/source-data-discover.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{id:"source-data-discover-customizer",title:"Source Data Discover",pagination_label:"Source Data Discover",sidebar_label:"Source Data Discover",keywords:["connectivity","connectors","Source Data Discover"],description:"Intercept the source data discover command.",slug:"/connectivity/saas-connectivity/customizers/commands/source-data-discover",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Entitlement Read",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/entitlement-read"},next:{title:"Source Data Read",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/source-data-read"}},k={},D=[{value:"Overview",id:"overview",level:2},{value:"Example StdSourceDataDiscoverInput",id:"example-stdsourcedatadiscoverinput",level:3},{value:"Example StdSourceDataDiscoverOutput",id:"example-stdsourcedatadiscoveroutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before source-data-discover command",id:"before-source-data-discover-command",level:3},{value:"After source-data-discover command",id:"after-source-data-discover-command",level:3}],f={toc:D},g="wrapper";function S(e){var t=e,{components:a}=t,n=p(t,["components"]);return(0,o.kt)(g,l(m(m({},f),n),{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",m({},{id:"overview"}),"Overview"),(0,o.kt)("p",null,"Use these commands to intercept the ",(0,o.kt)("a",m({parentName:"p"},{href:"../../commands/source-data-discover"}),"source-data-discover")," command."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",m({parentName:"tr"},{align:"left"}),"Input/Output"),(0,o.kt)("th",m({parentName:"tr"},{align:"center"}),"Data Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",m({parentName:"tr"},{align:"left"}),"Input"),(0,o.kt)("td",m({parentName:"tr"},{align:"center"}),"StdSourceDataDiscoverInput")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",m({parentName:"tr"},{align:"left"}),"Output"),(0,o.kt)("td",m({parentName:"tr"},{align:"center"}),"StdSourceDataDiscoverOutput")))),(0,o.kt)("h3",m({},{id:"example-stdsourcedatadiscoverinput"}),"Example StdSourceDataDiscoverInput"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'{\n    "queryInput": {\n        "query": "fetchAll",\n        "limit": 10\n    }\n}\n')),(0,o.kt)("h3",m({},{id:"example-stdsourcedatadiscoveroutput"}),"Example StdSourceDataDiscoverOutput"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"[\n  {\n    key: 'id',\n    label: 'Id',\n    subLabel: 'Airtable Base Id',\n  },\n  {\n    key: 'name',\n    label: 'Name',\n    subLabel: 'Airtable Source Table Name',\n  },\n];\n")),(0,o.kt)("h2",m({},{id:"implementation"}),"Implementation"),(0,o.kt)("h3",m({},{id:"before-source-data-discover-command"}),"Before source-data-discover command"),(0,o.kt)("p",null,"Use this logic to implement the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"    .beforeStdSourceDataDiscover(async (context: Context, input: StdSourceDataDiscoverInput) => {\n        logger.info(`Running before source data discover. Query: ${input.queryInput?.query}`)\n        return input\n    })\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," object can be mutated and returned, but the same data type must still be returned."),(0,o.kt)("h3",m({},{id:"after-source-data-discover-command"}),"After source-data-discover command"),(0,o.kt)("p",null,"Use this logic to implement the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"    .afterStdSourceDataDiscover(async (context: Context, output: StdSourceDataDiscoverOutput) => {\n        logger.info(`Running after source data discover first record key: ${output[0].key}`)\n        return output\n    })\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," object can be mutated and returned, but the same data type must still be returned."))}S.isMDXComponent=!0}}]);