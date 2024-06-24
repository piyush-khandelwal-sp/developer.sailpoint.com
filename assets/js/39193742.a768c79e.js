"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[53174],{12563:(t,n,i)=>{i.r(n),i.d(n,{assets:()=>b,contentTitle:()=>m,default:()=>_,frontMatter:()=>u,metadata:()=>v,toc:()=>f});var e=i(3905),o=Object.defineProperty,r=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(t,n,i)=>n in t?o(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,d=(t,n)=>{for(var i in n||(n={}))a.call(n,i)&&p(t,i,n[i]);if(s)for(var i of s(n))l.call(n,i)&&p(t,i,n[i]);return t},y=(t,n)=>r(t,c(n)),g=(t,n)=>{var i={};for(var e in t)a.call(t,e)&&n.indexOf(e)<0&&(i[e]=t[e]);if(null!=t&&s)for(var e of s(t))n.indexOf(e)<0&&l.call(t,e)&&(i[e]=t[e]);return i};const u={id:"linting",title:"Linting",pagination_label:"Linting",sidebar_label:"Linting",sidebar_position:4,sidebar_class_name:"linting",keywords:["connectivity","connectors","linting"],description:"Automatically check your connector source code for programmatic and stylistic errors.",slug:"/connectivity/saas-connectivity/in-depth/linting",tags:["Connectivity"]},m=void 0,v={unversionedId:"connectivity/saas-connectivity/in-depth/linting",id:"connectivity/saas-connectivity/in-depth/linting",title:"Linting",description:"Automatically check your connector source code for programmatic and stylistic errors.",source:"@site/docs/connectivity/saas-connectivity/in-depth/linting.md",sourceDirName:"connectivity/saas-connectivity/in-depth",slug:"/connectivity/saas-connectivity/in-depth/linting",permalink:"/docs/connectivity/saas-connectivity/in-depth/linting",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/in-depth/linting.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:4,frontMatter:{id:"linting",title:"Linting",pagination_label:"Linting",sidebar_label:"Linting",sidebar_position:4,sidebar_class_name:"linting",keywords:["connectivity","connectors","linting"],description:"Automatically check your connector source code for programmatic and stylistic errors.",slug:"/connectivity/saas-connectivity/in-depth/linting",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Error Handling",permalink:"/docs/connectivity/saas-connectivity/in-depth/error-handling"},next:{title:"Logging",permalink:"/docs/connectivity/saas-connectivity/in-depth/logging"}},b={},f=[],h={toc:f},k="wrapper";function _(t){var n=t,{components:i}=n,o=g(n,["components"]);return(0,e.kt)(k,y(d(d({},h),o),{components:i,mdxType:"MDXLayout"}),(0,e.kt)("p",null,"To add linting to your project, simply install the linter using NPM:"),(0,e.kt)("p",null,"`",(0,e.kt)("inlineCode",{parentName:"p"},"npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin")),(0,e.kt)("p",null,"Then add the ",(0,e.kt)("inlineCode",{parentName:"p"},".eslintrc.yml")," file on the project root:"),(0,e.kt)("pre",null,(0,e.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"env:\n  browser: true\n  es2021: true\nextends:\n  - eslint:recommended\n  - plugin:@typescript-eslint/recommended\nparser: '@typescript-eslint/parser'\nparserOptions:\n  ecmaVersion: latest\n  sourceType: module\nplugins:\n  - '@typescript-eslint'\nrules: {}\n")))}_.isMDXComponent=!0}}]);