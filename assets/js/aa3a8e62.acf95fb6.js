"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[31733],{60453:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>f,default:()=>k,frontMatter:()=>v,metadata:()=>m,toc:()=>b});var o=t(3905),n=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,i,t)=>i in e?n(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,u=(e,i)=>{for(var t in i||(i={}))d.call(i,t)&&p(e,t,i[t]);if(a)for(var t of a(i))s.call(i,t)&&p(e,t,i[t]);return e},g=(e,i)=>r(e,l(i)),c=(e,i)=>{var t={};for(var o in e)d.call(e,o)&&i.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&a)for(var o of a(e))i.indexOf(o)<0&&s.call(e,o)&&(t[o]=e[o]);return t};const v={id:"plugin-developer-guide",title:"Plugin Developer Guide",pagination_label:"Plugin Developer Guide",sidebar_label:"Plugin Developer Guide",sidebar_position:1,sidebar_class_name:"plugin_developer_guide",keywords:["plugin"],description:"IdentityIQ Plugin Developer Guide.",slug:"/iiq/plugin-developer-guide",tags:["plugin","guide","identityiq"]},f=void 0,m={unversionedId:"plugin-developer-guide",id:"plugin-developer-guide",title:"Plugin Developer Guide",description:"IdentityIQ Plugin Developer Guide.",source:"@site/docs/plugin-developer-guide.md",sourceDirName:".",slug:"/iiq/plugin-developer-guide",permalink:"/docs/iiq/plugin-developer-guide",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/plugin-developer-guide.md",tags:[{label:"plugin",permalink:"/docs/tags/plugin"},{label:"guide",permalink:"/docs/tags/guide"},{label:"identityiq",permalink:"/docs/tags/identityiq"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:1,frontMatter:{id:"plugin-developer-guide",title:"Plugin Developer Guide",pagination_label:"Plugin Developer Guide",sidebar_label:"Plugin Developer Guide",sidebar_position:1,sidebar_class_name:"plugin_developer_guide",keywords:["plugin"],description:"IdentityIQ Plugin Developer Guide.",slug:"/iiq/plugin-developer-guide",tags:["plugin","guide","identityiq"]},sidebar:"iiqSideBar",previous:{title:"Returns a Workflow resource based on id.",permalink:"/docs/api/iiq/get-workflow-by-id"},next:{title:"Overview",permalink:"/docs/iiq/plugin-developer-guide/overview"}},h={},b=[],y={toc:b},w="wrapper";function k(e){var i=e,{components:t}=i,n=c(i,["components"]);return(0,o.kt)(w,g(u(u({},y),n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Introduced with IdentityIQ 7.1, the plugin framework provides the infrastructure and tools to enable developers to extend the Open Identity Platform to meet a variety of specialized use cases that one might encounter in a non-standard deployment. The plugin framework allows developers to create packaged functionality that integrates with IdentityIQ, in a upgrade safe and isolated manner. It gives implementers a safe option for creating User Interface extensions, REST services, Custom SailPoint configuration objects, and more. This guide is designed to walk through the basics of plugin development and installation."),(0,o.kt)("p",null,"The first iteration of the plugin framework was released as an add-on to IdentityIQ 7.0 - the development process for this legacy version is slightly different and is not the subject of this document. However, Appendix A will discuss the differences between versions, and the strategy for migrating a plugin developed for the 7.0 frameworks to the 7.1 framework."),(0,o.kt)("p",null,"Developing a plugin requires a fairly robust knowledge of IdentityIQ and its object model, Java, JavaScript, css, and SQL. This document is designed to provide development guidance at the high level - what the components of a plugin are, which components are required, how those objects interact. Language specific tutorials are beyond its scope. Throughout this document, examples will be taken and discussed from the 'TodoPlugin' - located here: ",(0,o.kt)("a",u({parentName:"p"},{href:"https://community.sailpoint.com/t5/Plugin-Framework/TodoPlugin-V3-zip/ta-p/79764"}),"To-do Plugin")),(0,o.kt)("p",null,"This guide is intended to be a community driven effort - please feel free to update and or add chapters based on your use of the Plugin Framework."))}k.isMDXComponent=!0}}]);