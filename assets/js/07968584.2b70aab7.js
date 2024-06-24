"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[88262],{64367:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>b,contentTitle:()=>k,default:()=>v,frontMatter:()=>h,metadata:()=>f,toc:()=>N});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))l.call(e,a)&&c(t,a,e[a]);if(s)for(var a of s(e))u.call(e,a)&&c(t,a,e[a]);return t},m=(t,e)=>i(t,o(e)),d=(t,e)=>{var a={};for(var n in t)l.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&s)for(var n of s(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a};const h={id:"account-attribute",title:"Account Attribute",pagination_label:"Account Attribute",sidebar_label:"Account Attribute",sidebar_class_name:"accountAttribute",keywords:["transforms","operations","account","attribute"],description:"Look up an account for a particular source on an identity.",slug:"/extensibility/transforms/operations/account-attribute",tags:["Transforms","Transform Operations"]},k=void 0,f={unversionedId:"extensibility/transforms/operations/account-attribute",id:"extensibility/transforms/operations/account-attribute",title:"Account Attribute",description:"Look up an account for a particular source on an identity.",source:"@site/docs/extensibility/transforms/operations/account-attribute.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/account-attribute",permalink:"/docs/extensibility/transforms/operations/account-attribute",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/account-attribute.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{id:"account-attribute",title:"Account Attribute",pagination_label:"Account Attribute",sidebar_label:"Account Attribute",sidebar_class_name:"accountAttribute",keywords:["transforms","operations","account","attribute"],description:"Look up an account for a particular source on an identity.",slug:"/extensibility/transforms/operations/account-attribute",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Operations",permalink:"/docs/extensibility/transforms/operations"},next:{title:"Base64 Decode",permalink:"/docs/extensibility/transforms/operations/base64-decode"}},b={},N=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],y={toc:N},g="wrapper";function v(t){var e=t,{components:a}=e,r=d(e,["components"]);return(0,n.kt)(g,m(p(p({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",p({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Use the account attribute transform to look up an account for a particular source on an identity and return a specific attribute value from that account."),(0,n.kt)("admonition",p({},{title:"Other Considerations",type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"If there are multiple accounts, then Identity Security Cloud by default takes the value from the oldest account (based on the account created date). You can configure this behavior by specifying ",(0,n.kt)("inlineCode",{parentName:"li"},"accountSortAttribute")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"accountSortDescending")," attributes."),(0,n.kt)("li",{parentName:"ul"},"If there are multiple accounts and the oldest account has a null attribute value, by default Identity Security Cloud moves to the next account that can have a value (if there are any). You can override this behavior with the ",(0,n.kt)("inlineCode",{parentName:"li"},"accountReturnFirstLink")," property."),(0,n.kt)("li",{parentName:"ul"},'You can filter the multiple accounts returned based on the data they contain so that you can target specific accounts. This is often used to target accounts that are "active" instead of those that are not.'))),(0,n.kt)("h2",p({},{id:"transform-structure"}),"Transform Structure"),(0,n.kt)("p",null,"The account attribute transform's configuration can take several attributes as inputs. The following example shows a fully configured transform with all required and optional attributes."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "sourceName": "Workday",\n    "attributeName": "DEPARTMENT",\n    "accountSortAttribute": "created",\n    "accountSortDescending": true,\n    "accountReturnFirstLink": true,\n    "accountPropertyFilter": "(DEPARTMENT == \\"Engineering\\")",\n    "accountFilter": "!(nativeIdentity.startsWith(\\"*DELETED*\\"))"\n  },\n  "type": "accountAttribute",\n  "name": "Account Attribute Transform"\n}\n')),(0,n.kt)("h2",p({},{id:"attributes"}),"Attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Required Attributes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,n.kt)("inlineCode",{parentName:"li"},"accountAttribute"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sourceName")," - This is a reference to the source to search for accounts.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is a reference by a source's display name attribute (e.g., Active Directory). If the display name is updated, this reference must also be updated."),(0,n.kt)("li",{parentName:"ul"},"As an alternative, you can provide an ",(0,n.kt)("inlineCode",{parentName:"li"},"applicationId")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"applicationName")," instead.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"applicationId"),' - This is a reference by a source\'s external GUID/ID attribute (e.g., "ff8081815a8b3925015a8b6adac901ff").'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"applicationName")," - This is a reference by a source's immutable name attribute (e.g., \"Active Directory ","[","source","]",'").'))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"attributeName")," - The name of the attribute on the account to return. This matches the name of the account attribute name visible in the user interface or on the source schema."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional Attributes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This is a ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," value indicating whether the transform logic must be reevaluated every evening as part of the identity refresh process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"accountSortAttribute")," - This configuration's value is a string name of the attribute to use when determining the ordering of returned accounts when there are multiple entries.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Accounts can be sorted by any schema attribute."),(0,n.kt)("li",{parentName:"ul"},'If no sort attribute is defined, the transform will default to "created" (ascending sort on created date - oldest object wins).'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"accountSortDescending")," - This configuration's value is a boolean (true/false). It controls the sort order when there are multiple accounts.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If not defined, the transform will default to false (ascending order)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"accountReturnFirstLink")," - This configuration's value is a boolean (true/false). It controls which account to source a value from for an attribute. If this flag is set to true, the transform returns the value from the first account in the list, even if it is null. If this flag is set to false, the transform returns the first non-null value.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If the configuration's value is not defined, the transform will default to the false setting."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"accountFilter")," - This expression queries the database to narrow search results. This configuration's value is a ",(0,n.kt)("inlineCode",{parentName:"li"},"sailpoint.object.Filter")," expression for searching against the database. The default filter always includes the source and identity, and any subsequent expressions are combined in an AND operation with the existing search criteria.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Only certain searchable attributes are available:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"nativeIdentity")," - This is the account ID."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"displayName")," - This is the account name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"entitlements")," - This boolean value determine whether the account has entitlements."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"accountPropertyFilter")," - Use this expression to search and filter accounts in memory. This configuration's value is a ",(0,n.kt)("inlineCode",{parentName:"li"},"sailpoint.object.Filter")," expression for searching against the returned resultset.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"All account attributes are available for filtering because this operation is performed in memory."),(0,n.kt)("li",{parentName:"ul"},"Examples:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'(status != "terminated")')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'(department == "Engineering")')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'(groups.containsAll({"Admin"}) || location == "Austin")')))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,n.kt)("h2",p({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"HR systems can have multiple HR records for a person, especially in rehire and conversion scenarios. In order to get the correct identity data, you must get data from only the latest active accounts."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"sourceName"),' is "Corporate HR" because that is the name of the authoritative source.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"attributeName"),' is "HIREDATE" because that is the attribute you want from the authoritative source.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"accountSortAttribute"),' is "created" because you want to sort on created dates in case there are multiple accounts.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"accountSortDescending")," is true because you want to sort based on the newest or latest account from the HR system.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"accountReturnFirstLink")," is true because you want to return the value of HIREDATE, event if it is null.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"accountPropertyFilter")," is filtering the accounts to look at only active accounts. Terminated accounts will not appear (assuming there are no data issues)."))),(0,n.kt)("admonition",p({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"You cannot use ",(0,n.kt)("inlineCode",{parentName:"p"},"accountFilter")," here because WORKER_STATUS","_","_","c is not a searchable attribute, but ",(0,n.kt)("inlineCode",{parentName:"p"},"accountPropertyFilter")," works instead.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "attributeName": "HIREDATE",\n    "sourceName": "Corporate HR",\n    "accountSortAttribute": "created",\n    "accountSortDescending": true,\n    "accountReturnFirstLink": true,\n    "accountPropertyFilter": "(WORKER_STATUS__c == \\"active\\")"\n  },\n  "type": "accountAttribute",\n  "name": "Account Attribute Transform"\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,"When you are mapping values like a username, focus on primary accounts from a particular source or accounts that are not service accounts."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sourceName"),' is "Active Directory" because that is the source this data is coming from.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"attributeName"),' is "sAMAccountName" because you are mapping the username of the user.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"accountFilter")," is an expression filtering the accounts to make sure they are not service accounts.")),(0,n.kt)("admonition",p({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"accountPropertyFilter")," also would have worked here.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "attributeName": "sAMAccountName",\n    "sourceName": "Active Directory",\n    "accountFilter": "!(displayName.startsWith(\\"SVC-\\"))"\n  },\n  "type": "accountAttribute",\n  "name": "Account Attribute Transform"\n}\n')),(0,n.kt)("p",null,"To determine whether an identity is a member of an entitlement."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"input")," contains the condition to be evaluated (is member of an entitlement or not). If the user doesn't meet the below conditions, the ",(0,n.kt)("inlineCode",{parentName:"li"},"firstValid"),' retuns "FALSE".',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sourceName"),' is "Active Directory" because that is the source this data is coming from.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"attributeName"),' is "sAMAccountName" because you are mapping the username of the user.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"accountPropertyFilter"),' is filtering accounts that are members of an entitlement that contains "All AD Users-rshwart".'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"table")," contains the boolean results: FALSE or TRUE (default).")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "values": [\n          {\n            "attributes": {\n              "accountPropertyFilter": "(memberOf.contains(\\"All AD Users-rshwart\\"))",\n              "attributeName": "sAMAccountName",\n              "sourceName": "Active Directory"\n            },\n            "type": "accountAttribute"\n          },\n          "FALSE"\n        ]\n      },\n      "type": "firstValid"\n    },\n    "table": {\n      "FALSE": "FALSE",\n      "default": "TRUE"\n    }\n  },\n  "id": "Contains IT Access",\n  "type": "lookup"\n}\n')))}v.isMDXComponent=!0}}]);