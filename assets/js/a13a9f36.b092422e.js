"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[34053],{68939:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>S,frontMatter:()=>g,metadata:()=>k,toc:()=>f});var i=r(3905),s=Object.defineProperty,n=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))c.call(t,r)&&l(e,r,t[r]);return e},u=(e,t)=>n(e,o(t)),y=(e,t)=>{var r={};for(var i in e)p.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&a)for(var i of a(e))t.indexOf(i)<0&&c.call(e,i)&&(r[i]=e[i]);return r};const g={id:"typescript-sdk-retries",title:"Retries with The TypeScript SDK",pagination_label:"Retries",sidebar_label:"Retries",sidebar_position:7,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","retry"],description:"Learn how to configure retries when using the TypeScript SDK.",slug:"/tools/sdk/typescript/retries",tags:["SDK"]},m=void 0,k={unversionedId:"tools/sdk/typescript/typescript-sdk-retries",id:"tools/sdk/typescript/typescript-sdk-retries",title:"Retries with The TypeScript SDK",description:"Learn how to configure retries when using the TypeScript SDK.",source:"@site/docs/tools/sdk/typescript/retries.md",sourceDirName:"tools/sdk/typescript",slug:"/tools/sdk/typescript/retries",permalink:"/docs/tools/sdk/typescript/retries",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/typescript/retries.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:7,frontMatter:{id:"typescript-sdk-retries",title:"Retries with The TypeScript SDK",pagination_label:"Retries",sidebar_label:"Retries",sidebar_position:7,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","retry"],description:"Learn how to configure retries when using the TypeScript SDK.",slug:"/tools/sdk/typescript/retries",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Search",permalink:"/docs/tools/sdk/typescript/search"},next:{title:"Error Handling",permalink:"/docs/tools/sdk/typescript/error-handling"}},b={},f=[],h={toc:f},w="wrapper";function S(e){var t=e,{components:r}=t,s=y(t,["components"]);return(0,i.kt)(w,u(d(d({},h),s),{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The SDK supports retry logic in the case of an unexpected error. You are able to configure the number of retries and the delay between retries. This logic is implemented in lines 7-12:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-typescript",metastring:"showLineNumbers",showLineNumbers:!0}),"import {\n  Configuration,\n  axiosRetry,\n  AccountsApi,\n  Paginator,\n} from 'sailpoint-api-client';\n\nconst getPaginatedAccounts = async () => {\n  let apiConfig = new Configuration();\n  apiConfig.retriesConfig = {\n    retries: 4,\n    retryDelay: axiosRetry.exponentialDelay,\n    onRetry(retryCount, error, requestConfig) {\n      console.log(`retrying due to request error, try number ${retryCount}`);\n    },\n  };\n  let api = new AccountsApi(apiConfig);\n\n  const val = await Paginator.paginate(api, api.listAccounts, {limit: 100}, 10);\n\n  console.log(val);\n};\n\ngetPaginatedAccounts();\n")),(0,i.kt)("p",null,"Run this command to compile and run the code:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"tsc src/index.ts && node src/index.js\n")))}S.isMDXComponent=!0}}]);