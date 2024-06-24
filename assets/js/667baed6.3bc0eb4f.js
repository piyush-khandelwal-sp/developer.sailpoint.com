"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[96385],{80845:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>w,frontMatter:()=>h,metadata:()=>f,toc:()=>g});var n=i(3905),o=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,i)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,d=(e,t)=>{for(var i in t||(t={}))c.call(t,i)&&p(e,i,t[i]);if(s)for(var i of s(t))l.call(t,i)&&p(e,i,t[i]);return e},u=(e,t)=>r(e,a(t)),m=(e,t)=>{var i={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(i[n]=e[n]);return i};const h={id:"prerequisites",title:"Prerequisites",pagination_label:"Prerequisites",sidebar_label:"Prerequisites",sidebar_position:1,sidebar_class_name:"prerequisites",keywords:["connectivity","connectors","prerequisites"],description:"These are some prerequisites you must have before you start building SaaS Connectors.",slug:"/connectivity/saas-connectivity/prerequisites",tags:["Connectivity"]},v=void 0,f={unversionedId:"connectivity/saas-connectivity/prerequisites",id:"connectivity/saas-connectivity/prerequisites",title:"Prerequisites",description:"These are some prerequisites you must have before you start building SaaS Connectors.",source:"@site/docs/connectivity/saas-connectivity/prerequisites.md",sourceDirName:"connectivity/saas-connectivity",slug:"/connectivity/saas-connectivity/prerequisites",permalink:"/docs/connectivity/saas-connectivity/prerequisites",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/prerequisites.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:1,frontMatter:{id:"prerequisites",title:"Prerequisites",pagination_label:"Prerequisites",sidebar_label:"Prerequisites",sidebar_position:1,sidebar_class_name:"prerequisites",keywords:["connectivity","connectors","prerequisites"],description:"These are some prerequisites you must have before you start building SaaS Connectors.",slug:"/connectivity/saas-connectivity/prerequisites",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"SaaS Connectivity",permalink:"/docs/connectivity/saas-connectivity"},next:{title:"Videos",permalink:"/docs/connectivity/saas-connectivity/videos"}},y={},g=[{value:"Required Software",id:"required-software",level:2},{value:"Node",id:"node",level:3},{value:"SailPoint CLI",id:"sailpoint-cli",level:3},{value:"Recommended Software",id:"recommended-software",level:2},{value:"IDE",id:"ide",level:3},{value:"Postman",id:"postman",level:3},{value:"Creating your first project",id:"creating-your-first-project",level:2},{value:"Source Files",id:"source-files",level:3}],k={toc:g},b="wrapper";function w(e){var t=e,{components:i}=t,o=m(t,["components"]);return(0,n.kt)(b,u(d(d({},k),o),{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h2",d({},{id:"required-software"}),"Required Software"),(0,n.kt)("h3",d({},{id:"node"}),"Node"),(0,n.kt)("p",null,"To develop a connector, Node >= 18.0.0 is required. Download node from the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://nodejs.org/en/download"}),"nodejs.org downloads page"),"."),(0,n.kt)("h3",d({},{id:"sailpoint-cli"}),"SailPoint CLI"),(0,n.kt)("p",null,"SailPoint provides a CLI tool to manage the connectors' lifecycles. To install and set up the CLI, ",(0,n.kt)("a",d({parentName:"p"},{href:"../../tools/cli"}),"follow the instructions here")," or you can directly download and install from the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/sailpoint-oss/sailpoint-cli/releases"}),"GitHub releases page")),(0,n.kt)("h2",d({},{id:"recommended-software"}),"Recommended Software"),(0,n.kt)("h3",d({},{id:"ide"}),"IDE"),(0,n.kt)("p",null,"Although you can develop connectors in a text editor, use an Integrated Development Environment (IDE) for a better experience. There are many IDEs that support Javascript/Typescript, including ",(0,n.kt)("a",d({parentName:"p"},{href:"https://code.visualstudio.com/Download"}),"Visual Sudio Code"),", a free IDE with native support for Javascript/Typescript. VS Code provides syntax highlight, debugging, hints, code completion, and other helpful options."),(0,n.kt)("h3",d({},{id:"postman"}),"Postman"),(0,n.kt)("p",null,"A convenient way to test your connector before deploying to ISC is to use Postman. You can get it from the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://www.postman.com/downloads/"}),"postman.com downloads page")),(0,n.kt)("h2",d({},{id:"creating-your-first-project"}),"Creating your first project"),(0,n.kt)("p",null,"To create an empty connector project, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"sail conn init my-first-project\n")),(0,n.kt)("p",null,"The CLI init command creates a new folder with your project name in the location where you run the command."),(0,n.kt)("p",null,"Change the directory to the project folder and run `",(0,n.kt)("inlineCode",{parentName:"p"},"npm install to install")," the dependencies."),(0,n.kt)("h3",d({},{id:"source-files"}),"Source Files"),(0,n.kt)("p",null,"The earlier command creates the initial project source directory below:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"my-first-project\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 connector-spec.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src/\n|   \u251c\u2500\u2500 index.ts\n|   \u251c\u2500\u2500 my-client.txt\n|   \u2514\u2500\u2500 connector-spec.ts\n\u251c\u2500\u2500 tsconfig.json\n")),(0,n.kt)("p",null,"This directory contains three main files:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"index.ts:")," Use this file to register all the available commands the connector supports, provide the necessary configuration options to the client code implementing the API for the source, and pass data the client code obtains to Identity Security Cloud. This file can either use a vendor supplied client Software Development Kit (SDK) to interact with the web service or reference custom client code within the project.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"my-client.ts:")," Use this template to create custom client code to interact with a web service\u2019s APIs. If the web service does not provide an SDK, you can modify this file to implement the necessary API calls to interact with the source web service.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"connector-spec.ts")," This file describes how the connector works to ISC. More information about the connector spec is available in the next section. At a high level, it has the information for the following:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"What commands the connector supports"),(0,n.kt)("li",{parentName:"ul"},"What config values the user must provide when creating the connector"),(0,n.kt)("li",{parentName:"ul"},"Defining the account schema"),(0,n.kt)("li",{parentName:"ul"},"Defining the entitlment schema"),(0,n.kt)("li",{parentName:"ul"},"Defining the account create template that maps fields from ISC to the connector")))),(0,n.kt)("p",null,"These files are templates that provide guidance to begin implementing the connector on the target web service. Although you can implement a connector's entire functionality within these three files (or even just one if the web service provides an SDK), you can implement your own code architecture, like breaking out common utility functions into a separate file or creating separate files for each operation."))}w.isMDXComponent=!0}}]);