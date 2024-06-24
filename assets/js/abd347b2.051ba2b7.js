"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[37945],{21175:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>N,contentTitle:()=>f,default:()=>v,frontMatter:()=>k,metadata:()=>c,toc:()=>b});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))l.call(e,a)&&m(t,a,e[a]);if(s)for(var a of s(e))p.call(e,a)&&m(t,a,e[a]);return t},d=(t,e)=>i(t,o(e)),h=(t,e)=>{var a={};for(var n in t)l.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&s)for(var n of s(t))e.indexOf(n)<0&&p.call(t,n)&&(a[n]=t[n]);return a};const k={id:"date-math",title:"Date Math",pagination_label:"Date Math",sidebar_label:"Date Math",sidebar_class_name:"dateMath",keywords:["transforms","operations","date","math"],description:"Add, subtract, and round components of a timestamp's incoming value.",slug:"/extensibility/transforms/operations/date-math",tags:["Transforms","Transform Operations"]},f=void 0,c={unversionedId:"extensibility/transforms/operations/date-math",id:"extensibility/transforms/operations/date-math",title:"Date Math",description:"Add, subtract, and round components of a timestamp's incoming value.",source:"@site/docs/extensibility/transforms/operations/date-math.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/date-math",permalink:"/docs/extensibility/transforms/operations/date-math",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/date-math.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{id:"date-math",title:"Date Math",pagination_label:"Date Math",sidebar_label:"Date Math",sidebar_class_name:"dateMath",keywords:["transforms","operations","date","math"],description:"Add, subtract, and round components of a timestamp's incoming value.",slug:"/extensibility/transforms/operations/date-math",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Date Format",permalink:"/docs/extensibility/transforms/operations/date-format"},next:{title:"Decompose Diacritial Marks",permalink:"/docs/extensibility/transforms/operations/decompose-diacritical-marks"}},N={},b=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],y={toc:b},g="wrapper";function v(t){var e=t,{components:a}=e,r=h(e,["components"]);return(0,n.kt)(g,d(u(u({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",u({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,'Use the date math transform to add, subtract, and round components of a timestamp\'s incoming value. It also allows you to work with a referential value of "now" to run operations against the current date and time instead of a fixed value.'),(0,n.kt)("p",null,"The output format for the DateMath transform is \"yyyy-MM-dd'T'HH:mm\". When you use this transform inside another transform (e.g., ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/extensibility/transforms/operations/date-compare"}),"dateCompare"),"), make sure to convert to ",(0,n.kt)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/ISO_8601"}),"ISO8601")," first."),(0,n.kt)("admonition",u({},{title:"Other Considerations",type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The input datetime value must always be in ",(0,n.kt)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/ISO_8601"}),"ISO8601 format"),", in UTC time zone:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Use this format: "yyyy-MM-dd\'T\'HH:mm:ss.SSSZ", i.e., "2020-10-28T12:00:00.000Z".')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The dateFormat transform can help get data into this format.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The industry standard for rounding is actually date/time truncation. When the transform is rounding down, it truncates the the fractional value from the incoming data. When the transform is rounding up, it truncates the fractional value and adds the next unit of time. For examples, refer to the ",(0,n.kt)("a",u({parentName:"p"},{href:"#transform-structure"}),"Transform Structure"),"."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'The "week" unit of time is not supported as a metric when you are rounding. Rounding up or down a week will result in an error.'),(0,n.kt)("li",{parentName:"ul"},'If you are using the "now" keyword and you have also applied an input date as the implicitly or explicitly definted input parameter, the transform prefers using "now" and ignores the data in the ',(0,n.kt)("inlineCode",{parentName:"li"},"input")," attribute."))))),(0,n.kt)("h2",u({},{id:"transform-structure"}),"Transform Structure"),(0,n.kt)("p",null,"The date math transform takes the input value and executes addition, subtraction and/or rounding operations to that value based on an ",(0,n.kt)("inlineCode",{parentName:"p"},"expression")," configuration value. As indicated earlier, the input datetime must be in ",(0,n.kt)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/ISO_8601"}),"ISO8601 format"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"expression")," value leverages the following abbreviations to indicate which date or time component to evaluate:"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},'"y" - year'),(0,n.kt)("li",{parentName:"ul"},'"M" - month'),(0,n.kt)("li",{parentName:"ul"},'"w" - week'),(0,n.kt)("li",{parentName:"ul"},'"d" - day'),(0,n.kt)("li",{parentName:"ul"},'"h" - hour'),(0,n.kt)("li",{parentName:"ul"},'"m" - minute'),(0,n.kt)("li",{parentName:"ul"},'"s" - second'),(0,n.kt)("li",{parentName:"ul"},'"now" - the current instant in time'))),(0,n.kt)("p",null,"Also, the operational logic is defined by usage of one of the following symbols:"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},'"+" - add; This must be followed by a valid time unit.'),(0,n.kt)("li",{parentName:"ul"},'"-" - subtract; This must be followed by a valid time unit.'),(0,n.kt)("li",{parentName:"ul"},'"/" - round; This must be followed by a valid time unit.'))),(0,n.kt)("p",null,"Some examples of expressions are:"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"expression": "now"')," returns the current date and time."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"expression": "now/h"')," returns the current date and time, rounded to the hour."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"expression": "now+1w"')," returns one week from the current date and time."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"expression": "now+1y+1M+2d-4h+1m-3s/s"')," returns the current date and time plus one year, one month, two days, minus four hours, plus one minute and minus three seconds, rounded to the second."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"expression": "+3M"')," returns the date and time that would be three months more than the value provided as an input to the transform."))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "expression": "+3M/h",\n    "roundUp": true,\n    "input": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "startDate"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "dateMath",\n  "name": "Test Date Math Transform"\n}\n')),(0,n.kt)("h2",u({},{id:"attributes"}),"Attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Required Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,n.kt)("inlineCode",{parentName:"li"},"dateMath"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"expression")," - A string value of the date and time components to operate on, along with the math operations to execute. Multiple operations on multiple components are supported."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"requiresPeriodicRefresh")," - This ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"roundUp")," - This ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," value indicates whether the transform rounds up or down when the ",(0,n.kt)("inlineCode",{parentName:"p"},"expression"),' defines a rounding ("/") operation. If this value is not provided, the transform defaults to ',(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"true")," indicates the transform rounds up (i.e., truncate the fractional date/time component indicated and then add one unit of that component)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"false")," indicates the transform rounds down (i.e., truncate the fractional date/time component indicated)."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI."))))),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"This transform takes the current date, subtracts five days from it, and rounds down to the lowest day."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "expression": "now-5d/d",\n    "roundUp": false\n  },\n  "type": "dateMath",\n  "name": "Date Math Transform"\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,"This transform takes the ",(0,n.kt)("inlineCode",{parentName:"p"},"startDate"),' attribute from a user\'s record in the "HR Source," converts it from its native format to an ',(0,n.kt)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/ISO_8601"}),"ISO8601-formatted")," string, and then adds twelve hours to it. The final value is then rounded up to the next second."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "expression": "+12h/s",\n    "roundUp": true,\n    "input": {\n      "attributes": {\n        "input": {\n          "attributes": {\n            "sourceName": "HR Source",\n            "attributeName": "startDate"\n          },\n          "type": "accountAttribute"\n        },\n        "inputFormat": "MMM dd yyyy, HH:mm:ss.SSS",\n        "outputFormat": "ISO8601"\n      },\n      "type": "dateFormat"\n    }\n  },\n  "type": "dateMath",\n  "name": "Date Math Transform"\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,"This transform take the ",(0,n.kt)("inlineCode",{parentName:"p"},"HIREDATE")," from Workday and converts it to ",(0,n.kt)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/ISO_8601"}),"ISO8601")," to be used in the Date Math transform. The Date Math transform then creates a new Date of ",(0,n.kt)("inlineCode",{parentName:"p"},"HIREDATE + 1"),". Since that is then outputted in the format \"yyyy-MM-dd'T'HH:mm\", you can then use it in a ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/extensibility/transforms/operations/date-format"}),"dateFormat")," transform to give a WIN32 formatted date."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "type": "dateFormat",\n  "name": "WD - HireDate",\n  "attributes": {\n    "input": {\n      "attributes": {\n        "expression": "+1d",\n        "input": {\n          "attributes": {\n            "input": {\n              "attributes": {\n                "attributeName": "HIREDATE",\n                "sourceName": "Workday"\n              },\n              "type": "accountAttribute"\n            },\n            "inputFormat": "MM/dd/yyyy",\n            "outputFormat": "ISO8601"\n          },\n          "type": "dateFormat"\n        },\n        "roundUp": true\n      },\n      "type": "dateMath"\n    },\n    "inputFormat": "yyyy-MM-dd\'T\'HH:mm",\n    "outputFormat": "EPOCH_TIME_WIN32"\n  }\n}\n')))}v.isMDXComponent=!0}}]);