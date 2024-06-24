"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[78329],{33415:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>f,contentTitle:()=>h,default:()=>y,frontMatter:()=>c,metadata:()=>k,toc:()=>N});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&p(t,n,e[n]);if(s)for(var n of s(e))d.call(e,n)&&p(t,n,e[n]);return t},g=(t,e)=>i(t,l(e)),m=(t,e)=>{var n={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&s)for(var a of s(t))e.indexOf(a)<0&&d.call(t,a)&&(n[a]=t[a]);return n};const c={id:"filtering-events",title:"Filtering Events",pagination_label:"Filtering Events",sidebar_label:"Filtering Events",sidebar_position:4,sidebar_class_name:"filteringEvents",keywords:["filtering","events"],description:"Many triggers can produce a staggering amount of events if left unfiltered. Event filtering helps you solve this problem.",slug:"/extensibility/event-triggers/filtering-events",tags:["Event Triggers"]},h=void 0,k={unversionedId:"extensibility/event-triggers/filtering-events",id:"extensibility/event-triggers/filtering-events",title:"Filtering Events",description:"Many triggers can produce a staggering amount of events if left unfiltered. Event filtering helps you solve this problem.",source:"@site/docs/extensibility/event-triggers/filtering-events.md",sourceDirName:"extensibility/event-triggers",slug:"/extensibility/event-triggers/filtering-events",permalink:"/docs/extensibility/event-triggers/filtering-events",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/filtering-events.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:4,frontMatter:{id:"filtering-events",title:"Filtering Events",pagination_label:"Filtering Events",sidebar_label:"Filtering Events",sidebar_position:4,sidebar_class_name:"filteringEvents",keywords:["filtering","events"],description:"Many triggers can produce a staggering amount of events if left unfiltered. Event filtering helps you solve this problem.",slug:"/extensibility/event-triggers/filtering-events",tags:["Event Triggers"]},sidebar:"openApiSidebar",previous:{title:"Subscribing to a Trigger",permalink:"/docs/extensibility/event-triggers/subscribing-to-trigger"},next:{title:"Testing Triggers",permalink:"/docs/extensibility/event-triggers/testing-triggers"}},f={},N=[{value:"What is a Filter",id:"what-is-a-filter",level:2},{value:"Benefits of Using Filters",id:"benefits-of-using-filters",level:2},{value:"Constructing a Filter",id:"constructing-a-filter",level:2},{value:"Expressions",id:"expressions",level:3},{value:"Functions",id:"functions",level:3},{value:"Operators",id:"operators",level:3},{value:"Developing Filters",id:"developing-filters",level:3},{value:"Validating Filters",id:"validating-filters",level:2},{value:"Validating Filters Using the UI",id:"validating-filters-using-the-ui",level:3},{value:"Validating Filters Using the API",id:"validating-filters-using-the-api",level:3},{value:"Testing Filters",id:"testing-filters",level:2}],b={toc:N},v="wrapper";function y(t){var e=t,{components:r}=e,i=m(e,["components"]);return(0,a.kt)(v,g(u(u({},b),i),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",u({},{id:"what-is-a-filter"}),"What is a Filter"),(0,a.kt)("p",null,"Many triggers can produce a staggering amount of events if left unfiltered, resulting in more network traffic and more processing time on a subscribing service. Your subscribing service usually only needs to be notified of events containing a key attribute or value you want to process. For example, the Identity Attributes Changed trigger emits an event whenever an identity has a change in attributes. This can occur during the mover process when an identity changes departments or a manager is promoted, resulting in several identities receiving a new manager. Rather than inundate your subscribing service with every identity change, you can use an event trigger filter to specify which events your service is interested in processing."),(0,a.kt)("h2",u({},{id:"benefits-of-using-filters"}),"Benefits of Using Filters"),(0,a.kt)("p",null,"Network bandwidth and processing power come at a cost, especially when you are using managed solutions like AWS or no-code providers like Zapier. Without filtering, a subscribing service would be sent every single event that the trigger receives. The first thing any subscriber must do in this scenario is inspect each event to figure out which ones it must process and which ones it can ignore. Taking this approach with managed providers that charge per invocation, like AWS Lambda, can become expensive. Furthermore, some no-code providers may put a limit on the total number of invocations that a service can make in a given month, which would be quickly exhausted with this approach. Trigger filters take the filtering logic out of your subscribing service and place it on the event trigger within SailPoint, so you only receive the events matching your filter criteria."),(0,a.kt)("h2",u({},{id:"constructing-a-filter"}),"Constructing a Filter"),(0,a.kt)("p",null,"Event trigger filters are constructed using a ",(0,a.kt)("strong",{parentName:"p"},"Jayway")," JSONpath expression. See the following tables for a list of operators that can be used in a trigger filter."),(0,a.kt)("h3",u({},{id:"expressions"}),"Expressions"),(0,a.kt)("p",null,"Expressions specify a path to an element or array of elements in a JSON structure. Expressions are used to select data in a JSON structure to check for the existence of attributes or to narrow down the data where the filter logic is applied."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Root")," - The root object / element."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"@"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Current")," - The current object / element of an array."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$.changes",'[?(@.attribute == "department")]')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Child operator")," - Selects a child element of an object."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$.identity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),".."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Recursive descent")," - JSONPath borrows this syntax from E4X."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$..id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"*"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Wildcard")," - All objects / elements regardless of their names."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$.changes","[*]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"[]"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Subscript")," - In Javascript and JSON, it is the native array operator."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$.changes","[1]",".attribute")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"[,]"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Union")," - Selects elements of an array."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$.changes","[0,1,2]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"[start:stop:step]"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Array slice")," - Selects elements of an array."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$.changes","[0:2:1]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"[:n]"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Array slice")," - Selects the first ",(0,a.kt)("inlineCode",{parentName:"td"},"n")," elements of an array."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$.changes","[:2]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"[-n:]"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Array slice")," - Selects the last ",(0,a.kt)("inlineCode",{parentName:"td"},"n")," elements of an array."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$.changes","[-1:]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"?()"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Filter expression")," - Applies a filter expression."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$",'[?($.identity.name == "john.doe")]')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"()"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Script expression")," - Applies a script expression."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$.changes","[(@.length-1)]")))),(0,a.kt)("h3",u({},{id:"functions"}),"Functions"),(0,a.kt)("p",null,"Functions can be invoked at the tail end of a path - the input to a function is the output of the path expression. The function output is dictated by the function itself."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Function"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Output type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"length()"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Provides the length of an array"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$","[?($.changes.length() >= 3)]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"concat()"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Concatenates two or more paths into a single string value"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),'$.concat($.identity.attributes.firstname," ",$.identity.attributes.lastname)')))),(0,a.kt)("h3",u({},{id:"operators"}),"Operators"),(0,a.kt)("p",null,"Operators provide more options to filter JSON structures."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Operator"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"=="),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Equals to")," - Evaluates to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if operands match."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$",'[?($.identity.name == "john.doe")]')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"!="),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Not equal to")," - Evaluates to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if operands do not match."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$",'[?($.identity.name != "george.washington")]')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),">"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Greater than")," - Evaluates to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the left operand is greater than the right operand. It works on strings and numbers."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$","[?($.attributes.created > '2020-04-27T16:48:33.200Z')]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),">="),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Greater than or equal to")," - Evaluates to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the left operand is greater than or equal to the right operand."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$","[?($.attributes.created >= '2020-04-27T16:48:33.597Z')]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"<"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Less than")," - Evaluates to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the left operand is less than the right operand."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$","[?($.attributes.created < '2020-04-27T16:48:33.200Z')]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"<="),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Less than or equal to")," - Evaluates to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the left operand is less than or equal to the right operand."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$","[?($.attributes.created <= '2020-04-27T16:48:33.200Z')]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"=~"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Regular expression")," - Evaluates to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the left operand matches the regular expression."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$.changes",'[?(@.attribute == "department" && @.newValue =~ /US.*Support/i)]')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"in"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"In")," - Evaluates to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the left operand exists in the list of values on the right."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$.changes[?(@.attribute == 'department' && @.newValue in ","['sales','engineering']",")]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"nin"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Not in")," - Evaluates to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the left operand ",(0,a.kt)("strong",{parentName:"td"},"does not")," exist in the list of values on the right."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$.changes[?(@.attribute == 'department' && @.newValue nin ","['sales','engineering']",")]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"subsetof"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Subset of")," - Evaluates to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the left operand is a subset of the right."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$[?($.warnings subsetof ","['Account skipped','Invalid account']",")]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"anyof"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Any of")," - Evaluates to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the left operand has an intersection with the right."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$[?($.warnings anyof ","['Account skipped','Invalid account']",")]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"noneof"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"None of")," - Evaluates to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the left operand ",(0,a.kt)("strong",{parentName:"td"},"does not")," have an intersection with the right."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$[?($.warnings anyof ","['Account skipped','Invalid account']",")]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"size"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Size")," - Evaluates to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the size of the left (array or string) matches the right."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$","[?($.warnings size 1]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"&&"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Logical ",(0,a.kt)("strong",{parentName:"td"},"AND")," operator that evaluates ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," only if both conditions are ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),". You can only use this operator when both operands are part of the same item."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$.changes",'[?(@.attribute == "cloudLifecycleState" && @.newValue == "terminated")]')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"!"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Not")," - Negates the boolean expression."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$.identity.attributes","[?(!@.alternateEmail)]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"|","|"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Logical ",(0,a.kt)("strong",{parentName:"td"},"OR")," operator that evaluates ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if at least one condition is ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),"."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$.changes",'[?(@.attribute == "cloudLifecycleState" ',"|","|",' @.attribute == "department")]')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"contains"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Contains")," - Checks whether a string contains the specified substring (case sensitive)."),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"$",'[?($.identity.name contains "john")]')))),(0,a.kt)("h3",u({},{id:"developing-filters"}),"Developing Filters"),(0,a.kt)("p",null,"Developing a filter can be faster when you use a tool like an online ",(0,a.kt)("a",u({parentName:"p"},{href:"https://www.javainuse.com/jsonpath"}),"JSONpath editor"),". These tools can provide quick feedback on your filter, allowing you to focus on the exact filter expression you want before testing it on a trigger. Just paste an example of your event trigger input and start crafting an expression to see its result."),(0,a.kt)("p",null,":::Warning\nThird party websites like the one mentioned earlier must be treated with caution. Do not use real data from your tenant when you're interacting with these tools.\n:::"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"JSONPath editor",src:n(96566).Z,width:"2541",height:"1192"})),(0,a.kt)("p",null,"Most of the examples provided in the operator tables above can be used against the Identity Attributes Changed event trigger input, as seen below. You can find all of the input/output schemas for the other available triggers in our ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/api/beta/triggers#available-event-triggers"}),"API specification"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "identity": {\n    "id": "ee769173319b41d19ccec6cea52f237b",\n    "name": "john.doe",\n    "type": "IDENTITY"\n  },\n  "changes": [\n    {\n      "attribute": "department",\n      "oldValue": "Sales",\n      "newValue": "Marketing"\n    },\n    {\n      "attribute": "manager",\n      "oldValue": {\n        "id": "ee769173319b41d19ccec6c235423237b",\n        "name": "robert.brown",\n        "type": "IDENTITY"\n      },\n      "newValue": {\n        "id": "ee769173319b41d19ccec6c235423236c",\n        "name": "mary.johnson",\n        "type": "IDENTITY"\n      }\n    },\n    {\n      "attribute": "cloudLifecycleState",\n      "oldValue": "active",\n      "newValue": "terminated"\n    }\n  ]\n}\n')),(0,a.kt)("h2",u({},{id:"validating-filters"}),"Validating Filters"),(0,a.kt)("p",null,"When you are finished developing your JSONpath filter, you must validate it with SailPoint's trigger service. There are two ways to do this: use the UI or the API."),(0,a.kt)("h3",u({},{id:"validating-filters-using-the-ui"}),"Validating Filters Using the UI"),(0,a.kt)("p",null,"To validate a filter using the UI, subscribe to a new event trigger or edit an existing one. In the configuration options, paste your JSONpath expression in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Filter")," input box and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Update"),". If you do not receive an error message, then your filter expression is valid with SailPoint."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"UI filter",src:n(57423).Z,width:"791",height:"1297"})),(0,a.kt)("h3",u({},{id:"validating-filters-using-the-api"}),"Validating Filters Using the API"),(0,a.kt)("p",null,"You can validate a trigger filter by using the ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/api/beta/test-subscription-filter"}),"test filter")," API endpoint. You must escape any double quotes, as seen in the example payload in the API description. Also, you must provide a sample input for the validation engine to run against. It is best to use the input example included in the input/output schemas for the event trigger you want to apply your filter to. Refer to ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/api/beta/triggers#available-event-triggers"}),"this table")," to find the schema of your event trigger. This is an example request:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-text"}),"POST https://{tenant}.api.identitynow.com/beta/trigger-subscriptions/validate-filter\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "input": {\n    "identity": {\n      "id": "ee769173319b41d19ccec6cea52f237b",\n      "name": "john.doe",\n      "type": "IDENTITY"\n    },\n    "changes": [\n      {\n        "attribute": "department",\n        "oldValue": "Sales",\n        "newValue": "Marketing"\n      },\n      {\n        "attribute": "manager",\n        "oldValue": {\n          "id": "ee769173319b41d19ccec6c235423237b",\n          "name": "robert.brown",\n          "type": "IDENTITY"\n        },\n        "newValue": {\n          "id": "ee769173319b41d19ccec6c235423236c",\n          "name": "mary.johnson",\n          "type": "IDENTITY"\n        }\n      },\n      {\n        "attribute": "cloudLifecycleState",\n        "oldValue": "active",\n        "newValue": "terminated"\n      }\n    ]\n  },\n  "filter": "$[?($.identity.name == \\"john.doe\\")]"\n}\n')),(0,a.kt)("h2",u({},{id:"testing-filters"}),"Testing Filters"),(0,a.kt)("p",null,"If SailPoint accepts your trigger filter, you must test whether it actually works. You must configure your trigger subscription to point to the URL of your testing service. ",(0,a.kt)("a",u({parentName:"p"},{href:"https://webhook.site"}),"webhook.site")," is an easy to use testing service. Just copy the unique URL it generates and paste it into your subscription's integration URL field. The easiest way to test a trigger subscription is to use the UI to fire off a test event."),(0,a.kt)("p",null,":::Warning\nThird party websites like the one mentioned earlier must be treated with caution. Do not use real data from your tenant when you're interacting with these tools.\n:::"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"test subscription",src:n(28163).Z,width:"2041",height:"344"})),(0,a.kt)("p",null,"Once you fire off a test event, monitor your webhook.site webpage for an incoming event. If the filter matches the test input, you will an event come in. If the filter does not match the input, then it will nott fire. Test both scenarios to make sure your filter is not always evaluating to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", and that it will indeed evaluate to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," under the correct circumstances. For example, the filter ",(0,a.kt)("inlineCode",{parentName:"p"},'$[?($.identity.name contains "john")]')," will match the test event for Identity Attributes Changed and you will see an event in webhook.site, but you also want to make sure that ",(0,a.kt)("inlineCode",{parentName:"p"},'$[?($.identity.name contains "archer")]')," doesn't fire because the test input is always the same."),(0,a.kt)("p",null,"If you want to control the test input to validate your filter against a more robust set of data, use the ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/api/beta/start-test-trigger-invocation"}),"test invocation")," API endpoint."))}y.isMDXComponent=!0},96566:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/jsonpath-editor-6b27255e293ed1aed200900bd38f6d55.png"},28163:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/test-subscription-572f17aa5c34840225f632ae61598fd6.png"},57423:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ui-filter-bbd6ba8d5a004335161f834ff6b5f217.png"}}]);