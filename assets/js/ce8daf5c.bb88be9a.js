"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[34449],{46939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>_,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var o=n(3905),r=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&l(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&l(e,n,t[n]);return e},u=(e,t)=>i(e,a(t)),h=(e,t)=>{var n={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&c.call(e,o)&&(n[o]=e[o]);return n};const m={id:"python-sdk-create",title:"Creating resources with The Python SDK",pagination_label:"Create a resource",sidebar_label:"Create a resource",sidebar_position:2,sidebar_class_name:"pythonsdk",keywords:["python","sdk","create"],description:"Learn how to use the Python SDK to create new resources.",slug:"/tools/sdk/python/create",tags:["SDK"]},k=void 0,g={unversionedId:"tools/sdk/python/python-sdk-create",id:"tools/sdk/python/python-sdk-create",title:"Creating resources with The Python SDK",description:"Learn how to use the Python SDK to create new resources.",source:"@site/docs/tools/sdk/python/creating-resources.md",sourceDirName:"tools/sdk/python",slug:"/tools/sdk/python/create",permalink:"/docs/tools/sdk/python/create",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/python/creating-resources.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:2,frontMatter:{id:"python-sdk-create",title:"Creating resources with The Python SDK",pagination_label:"Create a resource",sidebar_label:"Create a resource",sidebar_position:2,sidebar_class_name:"pythonsdk",keywords:["python","sdk","create"],description:"Learn how to use the Python SDK to create new resources.",slug:"/tools/sdk/python/create",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Python SDK",permalink:"/docs/tools/sdk/python/getting-started"},next:{title:"Update a resource",permalink:"/docs/tools/sdk/python/update"}},y={},b=[],w={toc:b},f="wrapper";function _(e){var t=e,{components:n}=t,r=h(t,["components"]);return(0,o.kt)(f,u(d(d({},w),r),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use the SDK to create new resources."),(0,o.kt)("p",null,"For example, you can run a script to create a work group, also known as a ",(0,o.kt)("a",d({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html"}),"governance group"),". "),(0,o.kt)("p",null,"Copy this 'create WorkGroup' script from the beta APIs into your Python project to try it out:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0}),"import sailpoint\nimport sailpoint.v3\nimport sailpoint.beta\nfrom sailpoint.beta.models.workgroup_dto import WorkgroupDto\nfrom sailpoint.beta.models.owner_dto import OwnerDto\nfrom sailpoint.configuration import Configuration\n\nconfiguration = Configuration()\n\napi_client = sailpoint.v3.ApiClient(configuration)\napi_client_beta = sailpoint.beta.ApiClient(configuration)\n\nidentities_api_instance = sailpoint.v3.PublicIdentitiesApi(api_client)\nworkgroups_api_instance = sailpoint.beta.GovernanceGroupsApi(api_client_beta)\n\nidentity = identities_api_instance.get_public_identities(limit=1)[0]\n\nworkgroup = WorkgroupDto(name='DB Access Governance Group', \n                         description='Description of the Governance Group', \n                         owner=OwnerDto(id=identity.id, \n                                        name=identity.name, \n                                        type='IDENTITY'))\n\n\ntry:\n    workgroupResponse = workgroups_api_instance.create_workgroup(workgroup)\n    print(\"The response of GovernanceGroupsApi->create_workgroup:\\n\")\n    print(workgroupResponse)\nexcept Exception as e:\n    print(\"Exception when calling GovernanceGroupsApi->create_workgroup: %s\\n\" % e)\n")),(0,o.kt)("p",null,"Run this command to run the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"python sdk.py\n")),(0,o.kt)("p",null,"The example uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"getPublicIdentities")," method from the ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicIdentitiesApi")," to pull an identity needed to be the owner of the work group."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"create_workgroup")," request is initialized on lines 18-22, using the identity's ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," in the owner object."),(0,o.kt)("p",null,"The SDK will return the created work group:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"id='d287a1e2-81fc-474e-bc0c-155bd8ab0899' \nname='DB Access Governance Group' \ndescription='Description of the Governance Group' \nmember_count=0 \nconnection_count=0\nowner=OwnerDto(type='IDENTITY', \n               id='0003c25c365e492381d4e557b6159f9b', \n               name='Brian Mendoza')\n")))}_.isMDXComponent=!0}}]);