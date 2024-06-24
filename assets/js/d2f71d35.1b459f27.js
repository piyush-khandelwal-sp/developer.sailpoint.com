"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[47889],{9014:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>N,contentTitle:()=>c,default:()=>v,frontMatter:()=>h,metadata:()=>k,toc:()=>y});var r=a(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(t,e,a)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&l(t,a,e[a]);if(s)for(var a of s(e))p.call(e,a)&&l(t,a,e[a]);return t},u=(t,e)=>o(t,i(e)),f=(t,e)=>{var a={};for(var r in t)m.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&s)for(var r of s(t))e.indexOf(r)<0&&p.call(t,r)&&(a[r]=t[r]);return a};const h={id:"date-format",title:"Date Format",pagination_label:"Date Format",sidebar_label:"Date Format",sidebar_class_name:"dateFormat",keywords:["transforms","operations","date","format"],description:"Convert datetime strings from one format to another.",slug:"/extensibility/transforms/operations/date-format",tags:["Transforms","Transform Operations"]},c=void 0,k={unversionedId:"extensibility/transforms/operations/date-format",id:"extensibility/transforms/operations/date-format",title:"Date Format",description:"Convert datetime strings from one format to another.",source:"@site/docs/extensibility/transforms/operations/date-format.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/date-format",permalink:"/docs/extensibility/transforms/operations/date-format",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/date-format.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{id:"date-format",title:"Date Format",pagination_label:"Date Format",sidebar_label:"Date Format",sidebar_class_name:"dateFormat",keywords:["transforms","operations","date","format"],description:"Convert datetime strings from one format to another.",slug:"/extensibility/transforms/operations/date-format",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Date Compare",permalink:"/docs/extensibility/transforms/operations/date-compare"},next:{title:"Date Math",permalink:"/docs/extensibility/transforms/operations/date-math"}},N={},y=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2}],g={toc:y},b="wrapper";function v(t){var e=t,{components:a}=e,n=f(e,["components"]);return(0,r.kt)(b,u(d(d({},g),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",d({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Use the date format transform to convert datetime strings from one format to another. This is often useful when you are syncing data from one system to another, where each application uses a different format for date and time data."),(0,r.kt)("p",null,"This transform leverages the Java SimpleDateFormat syntax; see the ",(0,r.kt)("a",d({parentName:"p"},{href:"#references"}),"References")," section for more information on this standard."),(0,r.kt)("admonition",d({},{title:"Other Considerations",type:"note"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},'In addition to explicit SimpleDateFormat syntax, the date format transform also recognizes several built-in "named" constructs:',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ISO8601:")," This is the date format corresponding to the ISO8601 standard. The exact format is expressed as \"yyyy-MM-dd'T'HH:mm:ss.SSSZ\"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LDAP:"),' This is the date format corresponding to the LDAP date format standard, also expressed as "yyyyMMddHHmmss.Z".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PEOPLE_SOFT:"),' This is the date format format used by People Soft, also expressed as "MM/dd/yyyy".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EPOCH_TIME_JAVA:")," This represents the incoming date value as the elapsed time in milliseconds from midnight, January 1st, 1970."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EPOCH_TIME_WIN32:")," This represents the incoming date value as the elapsed time in 100-nanosecond intervals from midnight, January 1st, 1601."))))),(0,r.kt)("h2",d({},{id:"transform-structure"}),"Transform Structure"),(0,r.kt)("p",null,"The date format transform takes whatever value provided as the input, parses the datetime based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputFormat")," provided, and then reformats it into the desired ",(0,r.kt)("inlineCode",{parentName:"p"},"outputFormat"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "inputFormat": "EPOCH_TIME_JAVA",\n    "outputFormat": "ISO8601"\n  },\n  "type": "dateFormat",\n  "name": "Date Format Transform"\n}\n')),(0,r.kt)("h2",d({},{id:"attributes"}),"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Required Attributes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"dateFormat"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Optional Attributes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inputFormat")," - This string value indicates either the explicit SimpleDateFormat or the built-in named format of the incoming data.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If no inputFormat is provided, the transform assumes that it is in ",(0,r.kt)("a",d({parentName:"li"},{href:"https://en.wikipedia.org/wiki/ISO_8601"}),"ISO8601 format"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"outputFormat")," - This string value indicates either the explicit SimpleDateFormat or the built-in named format that the data is formatted into.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If no outputFormat is provided, the transform assumes that it is in ",(0,r.kt)("a",d({parentName:"li"},{href:"https://en.wikipedia.org/wiki/ISO_8601"}),"ISO8601 format"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,r.kt)("admonition",d({},{title:'Important This transform does not currently support the "now" keyword as an input value. :::',type:"note"}),(0,r.kt)("h2",d({parentName:"admonition"},{id:"examples"}),"Examples"),(0,r.kt)("p",{parentName:"admonition"},"This transform takes the incoming Java epoch-based timestamp and formats it as an ISO8601 compatible string."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"Input: 144642632190\nOutput: 1974-08-02T02:30:32.190-00\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "inputFormat": "EPOCH_TIME_JAVA",\n    "outputFormat": "ISO8601"\n  },\n  "type": "dateFormat",\n  "name": "Date Format Transform"\n}\n')),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",{parentName:"admonition"},"This transform takes the incoming date, formatted as a common US date string, and formats it to match the date structure of most database systems."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"Input: 4/1/1975\nOutput: 1975-04-01\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "inputFormat": "M/d/yyyy",\n    "outputFormat": "yyyy-MM-dd"\n  },\n  "type": "dateFormat",\n  "name": "Date Format Transform"\n}\n')),(0,r.kt)("h2",d({parentName:"admonition"},{id:"references"}),"References"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"http://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html"}),"http://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html")))))}v.isMDXComponent=!0}}]);