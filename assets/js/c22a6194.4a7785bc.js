"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[20058],{47941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>v,frontMatter:()=>m,metadata:()=>b,toc:()=>h});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))c.call(t,r)&&l(e,r,t[r]);return e},u=(e,t)=>i(e,s(t)),k=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={id:"typescript-sdk-create",title:"Creating resources with The TypeScript SDK",pagination_label:"Create a resource",sidebar_label:"Create a resource",sidebar_position:2,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","create"],description:"Learn how to use the TypeScript SDK to create new resources.",slug:"/tools/sdk/typescript/create",tags:["SDK"]},y=void 0,b={unversionedId:"tools/sdk/typescript/typescript-sdk-create",id:"tools/sdk/typescript/typescript-sdk-create",title:"Creating resources with The TypeScript SDK",description:"Learn how to use the TypeScript SDK to create new resources.",source:"@site/docs/tools/sdk/typescript/creating-resources.md",sourceDirName:"tools/sdk/typescript",slug:"/tools/sdk/typescript/create",permalink:"/docs/tools/sdk/typescript/create",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/typescript/creating-resources.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:2,frontMatter:{id:"typescript-sdk-create",title:"Creating resources with The TypeScript SDK",pagination_label:"Create a resource",sidebar_label:"Create a resource",sidebar_position:2,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","create"],description:"Learn how to use the TypeScript SDK to create new resources.",slug:"/tools/sdk/typescript/create",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Getting Started",permalink:"/docs/tools/sdk/typescript/getting-started"},next:{title:"Update a resource",permalink:"/docs/tools/sdk/typescript/update"}},g={},h=[],w={toc:h},f="wrapper";function v(e){var t=e,{components:r}=t,o=k(t,["components"]);return(0,n.kt)(f,u(d(d({},w),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use the SDK to create new resources."),(0,n.kt)("p",null,"Here is an example create workgroup script from the beta APIs you can copy into your typescript project to try it out:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-typescript",metastring:"showLineNumbers",showLineNumbers:!0}),"import {\n  Configuration,\n  GovernanceGroupsBetaApi,\n  GovernanceGroupsBetaApiCreateWorkgroupRequest,\n  PublicIdentitiesApi,\n} from 'sailpoint-api-client';\n\nconst createWorkGroup = async () => {\n  let apiConfig = new Configuration();\n  let identitiesApi = new PublicIdentitiesApi(apiConfig);\n\n  let identity = (await identitiesApi.getPublicIdentities({limit: 1})).data[0];\n\n  let api = new GovernanceGroupsBetaApi(apiConfig);\n  let workgroup: GovernanceGroupsBetaApiCreateWorkgroupRequest = {\n    workgroupDtoBeta: {\n      name: 'DB Access Governance Group',\n      description: 'Description of the Governance Group',\n      owner: {\n        id: identity.id,\n        type: 'IDENTITY',\n        name: identity.name,\n      },\n    },\n  };\n\n  let val = await api.createWorkgroup(workgroup);\n  console.log(val.data);\n};\n\ncreateWorkGroup();\n")),(0,n.kt)("p",null,"Run this command to compile and run the code:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"tsc src/index.ts && node src/index.js\n")),(0,n.kt)("p",null,"The example uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"getPublicIdentities")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"PublicIdentitiesApi")," to pull an identity needed to be the owner of the Workgroup."),(0,n.kt)("p",null,"The create workgroup request is initialized on lines 10-20 using the identity's name and id in the owner object."),(0,n.kt)("p",null,"The WorkGroup will be returned by the SDK:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-typescript"}),"{\n  description: 'Description of the Governance Group',\n  owner: {\n    displayName: 'Brian Mendoza',\n    emailAddress: null,\n    type: 'IDENTITY',\n    id: '0003c25c365e492381d4e557b6159f9b',\n    name: 'Brian Mendoza'\n  },\n  memberCount: 0,\n  connectionCount: 0,\n  id: '541ded73-d4b4-41d6-a10c-8085c02815bb',\n  name: 'DB Access Governance Group',\n  created: null,\n  modified: null\n}\n")))}v.isMDXComponent=!0}}]);