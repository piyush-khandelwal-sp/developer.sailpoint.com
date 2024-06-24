"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[17776],{96067:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>f,contentTitle:()=>y,default:()=>w,frontMatter:()=>c,metadata:()=>k,toc:()=>N});var a=n(3905),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&p(t,n,e[n]);if(o)for(var n of o(e))d.call(e,n)&&p(t,n,e[n]);return t},u=(t,e)=>r(t,l(e)),h=(t,e)=>{var n={};for(var a in t)s.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&o)for(var a of o(t))e.indexOf(a)<0&&d.call(t,a)&&(n[a]=t[a]);return n};const c={id:"lifecycle-state-transform",title:"Lifecycle State Transform",pagination_label:"Lifecycle State Transform",sidebar_label:"Lifecycle State Transform",sidebar_class_name:"lifecycleStateTransform",keywords:["transforms","guides","nested","lifecycle"],description:"Learn how to build a lifecycle state transform.",sidebar_position:4,slug:"/extensibility/transforms/guides/lifecycle-state-transform",tags:["Transforms","Guides","Lifecycle"]},y=void 0,k={unversionedId:"extensibility/transforms/guides/lifecycle-state-transform",id:"extensibility/transforms/guides/lifecycle-state-transform",title:"Lifecycle State Transform",description:"Learn how to build a lifecycle state transform.",source:"@site/docs/extensibility/transforms/guides/lifecycle-state-transforms.md",sourceDirName:"extensibility/transforms/guides",slug:"/extensibility/transforms/guides/lifecycle-state-transform",permalink:"/docs/extensibility/transforms/guides/lifecycle-state-transform",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/guides/lifecycle-state-transforms.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Guides",permalink:"/docs/tags/guides"},{label:"Lifecycle",permalink:"/docs/tags/lifecycle"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:4,frontMatter:{id:"lifecycle-state-transform",title:"Lifecycle State Transform",pagination_label:"Lifecycle State Transform",sidebar_label:"Lifecycle State Transform",sidebar_class_name:"lifecycleStateTransform",keywords:["transforms","guides","nested","lifecycle"],description:"Learn how to build a lifecycle state transform.",sidebar_position:4,slug:"/extensibility/transforms/guides/lifecycle-state-transform",tags:["Transforms","Guides","Lifecycle"]},sidebar:"openApiSidebar",previous:{title:"Transforms in Provisioning Policies",permalink:"/docs/extensibility/transforms/guides/transforms-in-provisioning-policies"},next:{title:"Identity Attribute Context",permalink:"/docs/extensibility/transforms/guides/identity-context-examples"}},f={},N=[{value:"Overview",id:"overview",level:2},{value:"Determine lifecycle state from end date attribute",id:"determine-lifecycle-state-from-end-date-attribute",level:2},{value:"Check whether the end date was in the past",id:"check-whether-the-end-date-was-in-the-past",level:3},{value:"Check whether end date is within 7 days",id:"check-whether-end-date-is-within-7-days",level:3},{value:"Check whether end date is within 25 days",id:"check-whether-end-date-is-within-25-days",level:3},{value:"Putting It All Together",id:"putting-it-all-together",level:2}],g={toc:N},b="wrapper";function w(t){var e=t,{components:n}=e,i=h(e,["components"]);return(0,a.kt)(b,u(m(m({},g),i),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",m({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"In this guide, you will walk through a lifecycle state transform that requires you to nest multiple transforms together to achieve your desired result."),(0,a.kt)("p",null,"A lifecycle state is a status an identity can be in, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"inactive")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"terminated"),", for example. You can then use this lifecycle state in Identity Security Cloud to determine an identity's access."),(0,a.kt)("h2",m({},{id:"determine-lifecycle-state-from-end-date-attribute"}),"Determine lifecycle state from end date attribute"),(0,a.kt)("p",null,"The example scenario is as follows: If the end date is greater than 25 days from today, the transform will return ",(0,a.kt)("inlineCode",{parentName:"p"},"active"),". If the end date is between 7 and 25 days from today, the transform will return ",(0,a.kt)("inlineCode",{parentName:"p"},"activePendingTermination"),". If the end date is between 0 and 7 days from today, the transform will return ",(0,a.kt)("inlineCode",{parentName:"p"},"inactivePendingTermination"),". Finally, if the end date is in the past, the transform will return ",(0,a.kt)("inlineCode",{parentName:"p"},"terminated"),"."),(0,a.kt)("p",null,"The table shows conditions and expected outcomes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Condition"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Return Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"end date within 0-7 Days"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"inactivePendingTermination")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"end date within 7-25 Days out"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"activePendingTermination")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"end date 25 Days or more"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"active")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"end date in past"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"terminated")))),(0,a.kt)("p",null,"This example will use a delimited file to show how this can be accomplished. The file contents will be in the following format:"),(0,a.kt)("admonition",m({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"This example and dates assume that the ",(0,a.kt)("inlineCode",{parentName:"p"},"now")," keyword in the dateMath expression returns 2023-11-07.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"id"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"email"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"first_name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"last_name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"end_date"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"100010"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"mailto:lewis.hamilton@sailpoint.com"}),"lewis.hamilton@sailpoint.com")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Lewis"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Hamilton"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2023-11-01")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"100011"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"mailto:frank.williams@sailpoint.com"}),"frank.williams@sailpoint.com")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Frank"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Williams"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2023-11-09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"100012"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"mailto:paddy.lowe@sailpoint.com"}),"paddy.lowe@sailpoint.com")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Paddy"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Lowe"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2023-11-25")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"100013"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"mailto:keifer.sutherland@sailpoint.com"}),"keifer.sutherland@sailpoint.com")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Keifer"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Sutherland"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2023-12-25")))),(0,a.kt)("h3",m({},{id:"check-whether-the-end-date-was-in-the-past"}),"Check whether the end date was in the past"),(0,a.kt)("p",null,"The first part of the transform will check whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"end_date")," attribute was in the past. You will use these transforms to do so: ",(0,a.kt)("inlineCode",{parentName:"p"},"dateCompare"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"dateFormat"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"dateMath"),"."),(0,a.kt)("p",null,"First, use the ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/extensibility/transforms/operations/date-compare"}),"dateCompare operation")," to check that today is less than the specified ",(0,a.kt)("inlineCode",{parentName:"p"},"end_date"),". To use the ",(0,a.kt)("inlineCode",{parentName:"p"},"dateCompare")," operation, the dates must be in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ISO8601")," format, so the transform will require the use of the ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/extensibility/transforms/operations/date-format"}),"dateFormat operation")," as well."),(0,a.kt)("p",null,"On lines 10-17, the ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/extensibility/transforms/operations/date-math"}),"dathMath operation")," to pull the date ",(0,a.kt)("inlineCode",{parentName:"p"},"now"),", which represents the current moment in time. The ",(0,a.kt)("inlineCode",{parentName:"p"},"dateFormat")," operation then converts it into the ",(0,a.kt)("inlineCode",{parentName:"p"},"ISO8601")," format for comparison."),(0,a.kt)("p",null,"On lines 21-31, the ",(0,a.kt)("inlineCode",{parentName:"p"},"dateFormat")," operation converts the end date provided from the source format (",(0,a.kt)("inlineCode",{parentName:"p"},"YYYY-MM-dd"),") into the ",(0,a.kt)("inlineCode",{parentName:"p"},"ISO8601")," format."),(0,a.kt)("p",null,"Finally, lines 34-36 use the comparison operator greater than or equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"gte"),". If the current date is greater than or equal to the end date, the comparison will return ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", meaning that the end date is in the past. This would result in identity's ",(0,a.kt)("inlineCode",{parentName:"p"},"terminated")," lifecycle state. If the current date is still less than the end date, the comparison will return ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Transform"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0}),'{\n  "type": "static",\n  "attributes": {\n    "inPast": {\n      "type": "dateCompare",\n      "attributes": {\n        "firstDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "dateMath",\n              "attributes": {\n                "expression": "now"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd\'T\'HH:mm",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "secondDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "sourceName": "Example CSV",\n                "attributeName": "end_date"\n              }\n            },\n            "inputFormat": "YYYY-MM-dd",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "operator": "gte",\n        "positiveCondition": "true",\n        "negativeCondition": "false"\n      }\n    },\n    "value": "$inPast"\n  }\n}\n'))),(0,a.kt)("h3",m({},{id:"check-whether-end-date-is-within-7-days"}),"Check whether end date is within 7 days"),(0,a.kt)("p",null,"Once you have ensured that the ",(0,a.kt)("inlineCode",{parentName:"p"},"end_date")," is in fact in the past, the next step is to check whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"end_date")," is fewer than 7 days away, 7-25 days days away, or more than 25 days away, to determine their exact lifecycle states. Start by checking whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"end_date")," is fewer than 7 days away. You will again use ",(0,a.kt)("inlineCode",{parentName:"p"},"dateCompare"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"dateFormat"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"dateMath")," for this comparison."),(0,a.kt)("p",null,"On line 27, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"dateMath")," operation to add 7 days to the current date: ",(0,a.kt)("inlineCode",{parentName:"p"},"now+7d"),". It pulls in the ",(0,a.kt)("inlineCode",{parentName:"p"},"end_date")," the same way it did before, and it converts both dates to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ISO8601")," format for comparison."),(0,a.kt)("p",null,"Lines 34-36 use the comparison operator less than or equal to: ",(0,a.kt)("inlineCode",{parentName:"p"},"lte"),". This uses the result from the previous check to ensure that if the ",(0,a.kt)("inlineCode",{parentName:"p"},"end_date")," is not in the past and that it is also fewer than 7 days away, the ",(0,a.kt)("inlineCode",{parentName:"p"},"end_date")," will indeed occur in the 0-7 days range. This would result in the identity's ",(0,a.kt)("inlineCode",{parentName:"p"},"inactivePendingTermination")," lifecycle state."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Transform"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0}),'{\n  "type": "static",\n  "attributes": {\n    "Within7Days": {\n      "type": "dateCompare",\n      "attributes": {\n        "firstDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "sourceName": "Example CSV",\n                "attributeName": "end_date"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "secondDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "dateMath",\n              "attributes": {\n                "expression": "now+7d"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd\'T\'HH:mm",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "operator": "lte",\n        "positiveCondition": "true",\n        "negativeCondition": "false"\n      }\n    },\n    "value": "$Within7Days"\n  }\n}\n'))),(0,a.kt)("h3",m({},{id:"check-whether-end-date-is-within-25-days"}),"Check whether end date is within 25 days"),(0,a.kt)("p",null,"Once you have ensured that the end date is in the past and that it is not fewer than 7 days away, the last required comparison checks whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"end_date")," attribute is either between 7 and 25 days from now or more than 25 days away. You can do so by checking whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"end_date")," is fewer than 25 days away (and more than 7 days away, using the result from the previous transform). You will again use ",(0,a.kt)("inlineCode",{parentName:"p"},"dateCompare"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"dateFormat"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"dateMath")," for this comparison."),(0,a.kt)("p",null,"On line 27, the ",(0,a.kt)("inlineCode",{parentName:"p"},"dateMath")," operation adds 25 days to the current date ",(0,a.kt)("inlineCode",{parentName:"p"},"now+25d"),". It pulls in the end date the same way it did before, and it converts both dates to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ISO8601")," format for comparison."),(0,a.kt)("p",null,"Lines 34-36 use the comparison operator less than or equal to: ",(0,a.kt)("inlineCode",{parentName:"p"},"lte"),". This uses the combination of the previous checks to ensure that if the ",(0,a.kt)("inlineCode",{parentName:"p"},"end_date")," is not in the past, it is greater than 7 days away, and it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," that it is fewer than 25 days away, then the ",(0,a.kt)("inlineCode",{parentName:"p"},"end_date")," must fall between 7 and 25 days away. This would result in the identity's ",(0,a.kt)("inlineCode",{parentName:"p"},"activePendingTermination")," lifecycle state. If it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", then the ",(0,a.kt)("inlineCode",{parentName:"p"},"end_date")," must be more than 25 days away. This would result in the identity's ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," lifecycle state."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Transform"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0}),'{\n  "type": "static",\n  "attributes": {\n    "Within25Days": {\n      "type": "dateCompare",\n      "attributes": {\n        "firstDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "sourceName": "Example CSV",\n                "attributeName": "end_date"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "secondDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "dateMath",\n              "attributes": {\n                "expression": "now+25d"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd\'T\'HH:mm",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "operator": "lte",\n        "positiveCondition": "true",\n        "negativeCondition": "false"\n      }\n    },\n    "value": "$Within25Days"\n  }\n}\n'))),(0,a.kt)("h2",m({},{id:"putting-it-all-together"}),"Putting It All Together"),(0,a.kt)("p",null,"Now that you have taken the time to understand each of the nested transforms, you can put it all together! You can now calculate lifecycle states for the identities with the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://people.apache.org/~henning/velocity/html/ch05s03.html"}),"velocity if/else logic")," within the static transform."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"#if($inPast=='false' && $Within7Days == 'true')\n    inactivePendingTermination\n#elseif($inPast == 'false' && $Within25Days == 'true')\n    activePendingTermination\n#elseif($inPast == 'false')\n    active\n#{else}\n    terminated\n#end\n")),(0,a.kt)("p",null,"This is the logic within the static transform:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n    "name": "Lifecycle State Transfrom",\n    "type": "static",\n    "attributes": {\n        ...\n        "value": "#if($inPast==\'false\' && $Within7Days == \'true\')inactivePendingTermination#elseif($inPast == \'false\' && $Within25Days == \'true\')activePendingTermination#elseif($inPast == \'false\')active#{else}terminated#end"\n    }\n}\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Complete Transform"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "name": "Lifecycle State Transfrom",\n  "type": "static",\n  "attributes": {\n    "inPast": {\n      "type": "dateCompare",\n      "attributes": {\n        "firstDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "dateMath",\n              "attributes": {\n                "expression": "now"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd\'T\'HH:mm",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "secondDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "sourceName": "Example CSV",\n                "attributeName": "end_date"\n              }\n            },\n            "inputFormat": "YYYY-MM-dd",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "operator": "gte",\n        "positiveCondition": "true",\n        "negativeCondition": "false"\n      }\n    },\n    "Within7Days": {\n      "type": "dateCompare",\n      "attributes": {\n        "firstDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "sourceName": "Example CSV",\n                "attributeName": "end_date"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "secondDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "dateMath",\n              "attributes": {\n                "expression": "now+7d"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd\'T\'HH:mm",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "operator": "lte",\n        "positiveCondition": "true",\n        "negativeCondition": "false"\n      }\n    },\n    "Within25Days": {\n      "type": "dateCompare",\n      "attributes": {\n        "firstDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "sourceName": "Example CSV",\n                "attributeName": "end_date"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "secondDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "dateMath",\n              "attributes": {\n                "expression": "now+25d"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd\'T\'HH:mm",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "operator": "lte",\n        "positiveCondition": "true",\n        "negativeCondition": "false"\n      }\n    },\n    "value": "#if($inPast==\'false\' && $Within7Days == \'true\')inactivePendingTermination#elseif($inPast == \'false\' && $Within25Days == \'true\')activePendingTermination#elseif($inPast == \'false\')active#{else}terminated#end"\n  }\n}\n'))),(0,a.kt)("p",null,"These are the results of the transform on each identity, given that ",(0,a.kt)("inlineCode",{parentName:"p"},"now")," returns 2023-11-07:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"id"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"email"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"first_name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"last_name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"end_date"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"result"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"100010"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"mailto:lewis.hamilton@sailpoint.com"}),"lewis.hamilton@sailpoint.com")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Lewis"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Hamilton"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2023-11-01"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"terminated")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"100011"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"mailto:frank.williams@sailpoint.com"}),"frank.williams@sailpoint.com")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Frank"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Williams"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2023-11-09"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"inactivePendingTermination")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"100012"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"mailto:paddy.lowe@sailpoint.com"}),"paddy.lowe@sailpoint.com")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Paddy"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Lowe"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2023-11-25"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"activePendingTermination")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"100013"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"mailto:keifer.sutherland@sailpoint.com"}),"keifer.sutherland@sailpoint.com")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Keifer"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Sutherland"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2023-12-25"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"active")))))}w.isMDXComponent=!0}}]);