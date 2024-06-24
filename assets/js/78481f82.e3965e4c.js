"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[38172],{68719:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(67294);function r({children:e,source:t,container:i="youtube"}){let r=n.createElement("iframe",{style:{width:"100%",aspectRatio:"16/9"},src:t,title:"YouTube video player",frameborder:"0",allow:"accelerometer; \n  autoplay; \n  clipboard-write; \n  encrypted-media; \n  gyroscope; \n  picture-in-picture; \n  web-share",allowfullscreen:!0});return"vidyard"===i&&(r=n.createElement("iframe",{class:"vidyard_iframe",style:{width:"100%",aspectRatio:"16/9"},title:"Authoring - Create New Sheets",src:t,scrolling:"no",frameborder:"0",allowtransparency:"true",allowfullscreen:!0})),r}},28203:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>z,frontMatter:()=>v,metadata:()=>f,toc:()=>b});var n=i(3905),r=i(68719),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,i)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,p=(e,t)=>{for(var i in t||(t={}))l.call(t,i)&&u(e,i,t[i]);if(c)for(var i of c(t))d.call(t,i)&&u(e,i,t[i]);return e},m=(e,t)=>a(e,s(t)),y=(e,t)=>{var i={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&d.call(e,n)&&(i[n]=e[n]);return i};const v={id:"connectivity-customizers-getting-started",title:"Getting Started",pagination_label:"Getting Started",sidebar_label:"Getting Started",sidebar_position:4,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Get started with connectivity customizers.",slug:"/connectivity/saas-connectivity/customizers/getting-started",tags:["Connectivity"]},g="Get Started",f={unversionedId:"connectivity/saas-connectivity/connector-customizers/connectivity-customizers-getting-started",id:"connectivity/saas-connectivity/connector-customizers/connectivity-customizers-getting-started",title:"Getting Started",description:"Get started with connectivity customizers.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/getting-started.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers",slug:"/connectivity/saas-connectivity/customizers/getting-started",permalink:"/docs/connectivity/saas-connectivity/customizers/getting-started",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/getting-started.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:4,frontMatter:{id:"connectivity-customizers-getting-started",title:"Getting Started",pagination_label:"Getting Started",sidebar_label:"Getting Started",sidebar_position:4,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Get started with connectivity customizers.",slug:"/connectivity/saas-connectivity/customizers/getting-started",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Connectivity Customizers",permalink:"/docs/connectivity/saas-connectivity/customizers"},next:{title:"Build and Upload",permalink:"/docs/connectivity/saas-connectivity/customizers/upload"}},h={},b=[{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Required software",id:"required-software",level:2},{value:"Create your first project",id:"create-your-first-project",level:2},{value:"Source files",id:"source-files",level:3}],k={toc:b},w="wrapper";function z(e){var t=e,{components:i}=t,o=y(t,["components"]);return(0,n.kt)(w,m(p(p({},k),o),{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"get-started"}),"Get Started"),(0,n.kt)("h2",p({},{id:"video-tutorial"}),"Video Tutorial"),(0,n.kt)(r.Z,{source:"//play.vidyard.com/YtrUm1a5B29VbADR2ryhWa.html?",container:"vidyard",mdxType:"Video"}),(0,n.kt)("h2",p({},{id:"required-software"}),"Required software"),(0,n.kt)("p",null,"You need to have the same software installed to create a customizer that you need to create a SaaS Connector. You can find the lists of Prerequisites ",(0,n.kt)("a",p({parentName:"p"},{href:"../prerequisites"}),"here"),"."),(0,n.kt)("h2",p({},{id:"create-your-first-project"}),"Create your first project"),(0,n.kt)("p",null,"To create an empty connector customizer project, run this command:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"sail conn customizers init my-customizer-project\n")),(0,n.kt)("p",null,"The CLI init command creates a new folder with your project name in the location where you run the command."),(0,n.kt)("p",null,"Change the directory to the project folder and run `",(0,n.kt)("inlineCode",{parentName:"p"},"npm install")," to install the dependencies."),(0,n.kt)("h3",p({},{id:"source-files"}),"Source files"),(0,n.kt)("p",null,"The earlier command creates this initial project source directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"my-customizer-project\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src/\n|   \u251c\u2500\u2500 index.ts\n|   \u2514\u2500\u2500 index-spec.ts\n\u251c\u2500\u2500 tsconfig.json\n")),(0,n.kt)("p",null,'This directory contains one source code file. Though you can expand the customizer to include more than one file, the "index.ts" file contains all the logic for the customizer.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"index.ts:")," Use this file to register all the available customizer commands the connector supports.")))}z.isMDXComponent=!0}}]);