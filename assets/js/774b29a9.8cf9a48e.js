"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[17546],{85407:(e,a)=>{function t(e,a){var t,s,l,m,i;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(s=null==(t=e.xml)?void 0:t.name)?s:e.type:"array"===e.type?null!=(m=null==(l=e.xml)?void 0:l.name)?m:e.type:null!=(i=e.title)?i:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var s;return e.items?t(e.items)+"[]":null!=(s=t(e))?s:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,s,l="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(s=`\`<= ${a.maxLength} characters\``),e&&!s&&(l+=e),s&&!e&&(l+=s),e&&s&&(l+=`${e} and ${s}`),t.push(l)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,s,l="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?s=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?s=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(s=`\`< ${a.maximum}\``),e&&!s&&(l+=e),s&&!e&&(l+=s),e&&s&&(l+=`${e} and ${s}`),t.push(l)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const s=a;if(s.mapping){const e=Object.keys(s.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>f});var s=t(67294),l=t(58750),m=t(82479),i=t(62574),n=t(94693),r=t(85407),p=t(52347),o=t(25365),c=t(88453),u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;const f=function({param:{description:e,example:a,examples:t,name:f,required:h,schema:b}}){b&&(null==b?void 0:b.type)||(b={type:"any"});const g=(0,p.lo)(b,(e=>s.createElement("span",{className:"openapi-schema__type"}," ",(0,r.uc)(e)))),k=(0,p.lo)(h,(()=>s.createElement("span",{className:"openapi-schema__required"},"required"))),v=(0,p.lo)((0,r.A4)(b),(e=>s.createElement("div",null,s.createElement(o.D,{children:(0,n.T)(e),rehypePlugins:[c.Z]})))),x=(0,p.lo)(e,(e=>s.createElement("div",null,s.createElement(o.D,{children:(0,n.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:m,className:i,children:n}=a;((e,a)=>{var t={};for(var s in e)d.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&u)for(var s of u(e))a.indexOf(s)<0&&y.call(e,s)&&(t[s]=e[s])})(a,["node","inline","className","children"]);const r=/language-(\w+)/.exec(i||"");return m?s.createElement("code",null,n):!m&&r?s.createElement(l.Z,{className:i},n):s.createElement(l.Z,null,n)}},rehypePlugins:[c.Z]})))),T=(0,p.lo)(b&&b.items?b.items.default:b?b.default:void 0,(e=>s.createElement("div",null,s.createElement(o.D,{children:`**Default value:** \`${e}\``})))),N=(0,p.lo)((0,p.toString)(a),(e=>s.createElement("div",null,s.createElement("strong",null,"Example: "),e))),q=(0,p.lo)(t,(e=>{const a=Object.entries(e);return s.createElement(s.Fragment,null,s.createElement("strong",null,"Examples:"),s.createElement(m.default,null,a.map((([e,a])=>s.createElement(i.default,{value:e,label:e},a.summary&&s.createElement("p",null,a.summary),a.description&&s.createElement("p",null,s.createElement("strong",null,"Description: "),s.createElement("span",null,a.description)),s.createElement("p",null,s.createElement("strong",null,"Example: "),s.createElement("code",null,a.value)))))))}));return s.createElement("div",{className:"openapi-params__list-item"},s.createElement("span",{className:"openapi-schema__container"},s.createElement("strong",{className:"openapi-schema__property"},f),g,h&&s.createElement("span",{className:"openapi-schema__divider"}),k),v,T,x,N,q)}},4011:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>_,contentTitle:()=>q,default:()=>S,frontMatter:()=>N,metadata:()=>I,toc:()=>j});var s=t(3905),l=t(68562),m=t(67001),i=t.n(m),n=t(98439),r=t(34168),p=t(3655),o=t(13503),c=t(82479),u=t(62574),d=Object.defineProperty,y=Object.defineProperties,f=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,a,t)=>a in e?d(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,v=(e,a)=>{for(var t in a||(a={}))b.call(a,t)&&k(e,t,a[t]);if(h)for(var t of h(a))g.call(a,t)&&k(e,t,a[t]);return e},x=(e,a)=>y(e,f(a)),T=(e,a)=>{var t={};for(var s in e)b.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&h)for(var s of h(e))a.indexOf(s)<0&&g.call(e,s)&&(t[s]=e[s]);return t};const N={id:"get-profile-type-attributes",sidebar_label:"profile_types/ne_attributes synced status",hide_title:!0,hide_table_of_contents:!0,api:"eJy1V9tu20YQ/ZXBvLQFaMsXuU0J9MFFnFZFkxiJ2xdDMFbkSNqE3GX24pgQ+O/F7EoUJcpSlDQvtkie3Tlzn1mgrsgIJ7Ua5ZjijNyt0VNZ0F1d0bVzRk68I4sJ5mQzIyuGYop/kANFIFoECJWDrVVG+fotGCrC5XYuK3Aaqng5uLqiU0zQiZnF9B63D1ocJ1gJI0pyZBiyQCVKwhSXVzzwFQ8yxwQlE6qEm/dY3nbEwegl6Cm4OYGefKDMYYKGPnlpKMfUGU8J2mxOpcB0gXwCU7TOSDXDBKfalMJhit4HmfQkyqpgyPnF8Of8xeTyRGQXv54Mz86vTl6cXw1PchLD4eVQ/HI5Fdg0SauAyJx8pIepLByZFf1Pnkzd4/8qYGCqzYblena2G7pMRWH3KkPKl2urY4JetT9FUbDt1/rxiy59S8Jk8y/iPamhlXkMvVb2UlZXfCVmtF/4rZhJFaIOGAzKl5Ng6MMUpHI0C9jW31K5ywtMsJRKlmy28w7Bq69mJh2VFioysDz2nclZbdx+cn/qz2Ao0ya3YOfaFzlMCPhciIvD/NqsahkskCOUpdcqwwS1yYkfhc2wSTiTKzJOkl1D90YD39K01zwf13x/VG8rlFlu0zRjVsdWWtko+uLsjP9t2uPmqaLMUQ4rKNcvAY+ikPzukyfLymZaOVIuaFBVhcyCfwcfLF+y2GOlTe3ZpYdRmfZR1OGQ6Du3FKreqNmtu+lJ2g3HXTVsofCxI00YIzhuQuweJivzvlFjDe6S4CZwoNYaEvlbVdSrKn1s7U3Q7+LypsPiBwtR1jaXUqq/Sc3cHNPLiwRL8dR9/HZmhZhQcZBbRPXZbfev5/ksfdQkq6LfExnfP6yjY/QSZOiXhkBa0Krjq9YzW0Xh+LaITrpwYNfcwdm6H2FDQjNquCuJfxc5vIu5CifglZgUIY8zzTRdmEG+OIO1orfTMIpsB/6K4UiF8vAXH+Xi+xzuX0YFMTfGaGOxGUclrnYpMVKOjBIFvCfzSAbCGTgBQ84bRTloBV7NhcoLyoGeMgon7VHK7c9lYpF9ZtdQkrXcZOP7iVSzMGFFfDce3mtjarC6JDdn1GdSDj4brWZLDzYJ8je9HEOZAo90KQ66E58dLLYGwGag6GFjErLBTHFo9KbAFOfOVTYdDBaOlFDujSipOVVaUVkVuiY6zXQ5EJXEBB+FkRwlscC18Kj7VPjChRGupEz3quxdgAO3XBDWyhk7h6PNW6dLMhh7j6XMG+nqQHBCwpC59qzq/bj7+T37JvLoglpXsVK47MP8HEGYLH+8WlXRO/2RFDj++1utvYk/Q+5JNdV8I5srqnB+enZ61onUNzfvXsP17aiv65xg9REyoXhY8DbqK7KMbNwISp3LaQ1sVe0t91LtTUYWpIJAhtSjNFqVpBzHayEzUjaYezm5vB7dBa6Vtq4UqvNlMy42omA1IVsnnO9tL4t1Wvxvi0z0iaMnN6gKIVVoOyaU9hjH95t8McG0v8pshvI4wbm2js8uFhNh6R9TNA2/jiMcx08uLYfrugQ/q+kxy8ROdT5SvWN9eRSFZ2woeEez6a4Ie4S2S8dXSnt2J9gjczmYf7vE3qz/3YQemOH3GTjuB2u543UpPDLOfny3nAp+gkP7905Cq2lT1V1CrYG2cqYZNwnOSYSV4H6xRF1n3AQ753vNjxVs+80fN1xj/gMxiNqk",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'profile_types/ne_attributes synced status' (get-profile-type-attributes)"},q=void 0,I={unversionedId:"api/nerm/v1/get-profile-type-attributes",id:"api/nerm/v1/get-profile-type-attributes",title:"get-profile-type-attributes",description:"profiletypes/neattributes synced status",source:"@site/docs/api/nerm/v1/get-profile-type-attributes.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/get-profile-type-attributes",permalink:"/docs/api/nerm/v1/get-profile-type-attributes",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'profile_types/ne_attributes synced status' (get-profile-type-attributes)",tags:[],version:"current",frontMatter:{id:"get-profile-type-attributes",sidebar_label:"profile_types/ne_attributes synced status",hide_title:!0,hide_table_of_contents:!0,api:"eJy1V9tu20YQ/ZXBvLQFaMsXuU0J9MFFnFZFkxiJ2xdDMFbkSNqE3GX24pgQ+O/F7EoUJcpSlDQvtkie3Tlzn1mgrsgIJ7Ua5ZjijNyt0VNZ0F1d0bVzRk68I4sJ5mQzIyuGYop/kANFIFoECJWDrVVG+fotGCrC5XYuK3Aaqng5uLqiU0zQiZnF9B63D1ocJ1gJI0pyZBiyQCVKwhSXVzzwFQ8yxwQlE6qEm/dY3nbEwegl6Cm4OYGefKDMYYKGPnlpKMfUGU8J2mxOpcB0gXwCU7TOSDXDBKfalMJhit4HmfQkyqpgyPnF8Of8xeTyRGQXv54Mz86vTl6cXw1PchLD4eVQ/HI5Fdg0SauAyJx8pIepLByZFf1Pnkzd4/8qYGCqzYblena2G7pMRWH3KkPKl2urY4JetT9FUbDt1/rxiy59S8Jk8y/iPamhlXkMvVb2UlZXfCVmtF/4rZhJFaIOGAzKl5Ng6MMUpHI0C9jW31K5ywtMsJRKlmy28w7Bq69mJh2VFioysDz2nclZbdx+cn/qz2Ao0ya3YOfaFzlMCPhciIvD/NqsahkskCOUpdcqwwS1yYkfhc2wSTiTKzJOkl1D90YD39K01zwf13x/VG8rlFlu0zRjVsdWWtko+uLsjP9t2uPmqaLMUQ4rKNcvAY+ikPzukyfLymZaOVIuaFBVhcyCfwcfLF+y2GOlTe3ZpYdRmfZR1OGQ6Du3FKreqNmtu+lJ2g3HXTVsofCxI00YIzhuQuweJivzvlFjDe6S4CZwoNYaEvlbVdSrKn1s7U3Q7+LypsPiBwtR1jaXUqq/Sc3cHNPLiwRL8dR9/HZmhZhQcZBbRPXZbfev5/ksfdQkq6LfExnfP6yjY/QSZOiXhkBa0Krjq9YzW0Xh+LaITrpwYNfcwdm6H2FDQjNquCuJfxc5vIu5CifglZgUIY8zzTRdmEG+OIO1orfTMIpsB/6K4UiF8vAXH+Xi+xzuX0YFMTfGaGOxGUclrnYpMVKOjBIFvCfzSAbCGTgBQ84bRTloBV7NhcoLyoGeMgon7VHK7c9lYpF9ZtdQkrXcZOP7iVSzMGFFfDce3mtjarC6JDdn1GdSDj4brWZLDzYJ8je9HEOZAo90KQ66E58dLLYGwGag6GFjErLBTHFo9KbAFOfOVTYdDBaOlFDujSipOVVaUVkVuiY6zXQ5EJXEBB+FkRwlscC18Kj7VPjChRGupEz3quxdgAO3XBDWyhk7h6PNW6dLMhh7j6XMG+nqQHBCwpC59qzq/bj7+T37JvLoglpXsVK47MP8HEGYLH+8WlXRO/2RFDj++1utvYk/Q+5JNdV8I5srqnB+enZ61onUNzfvXsP17aiv65xg9REyoXhY8DbqK7KMbNwISp3LaQ1sVe0t91LtTUYWpIJAhtSjNFqVpBzHayEzUjaYezm5vB7dBa6Vtq4UqvNlMy42omA1IVsnnO9tL4t1Wvxvi0z0iaMnN6gKIVVoOyaU9hjH95t8McG0v8pshvI4wbm2js8uFhNh6R9TNA2/jiMcx08uLYfrugQ/q+kxy8ROdT5SvWN9eRSFZ2woeEez6a4Ie4S2S8dXSnt2J9gjczmYf7vE3qz/3YQemOH3GTjuB2u543UpPDLOfny3nAp+gkP7905Cq2lT1V1CrYG2cqYZNwnOSYSV4H6xRF1n3AQ753vNjxVs+80fN1xj/gMxiNqk",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'profile_types/ne_attributes synced status' (get-profile-type-attributes)"},sidebar:"openApiSidebar",previous:{title:"Delete profile type",permalink:"/docs/api/nerm/v1/delete-profile-type"},next:{title:"Create a synced attribute",permalink:"/docs/api/nerm/v1/create-synced-attribute"}},_={},j=[{value:"Request",id:"request",level:2}],O={toc:j},F="wrapper";function S(e){var a=e,{components:t}=a,m=T(a,["components"]);return(0,s.kt)(F,x(v(v({},O),m),{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"profile_types/ne_attributes synced status"),(0,s.kt)(i(),{method:"get",path:"/profile_types/{profile_type_id}/ne_attributes",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"Get ne attributes and synced attribute relationship to profile type."),(0,s.kt)("h2",v({},{id:"request"}),"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"profile_type_id",in:"path",description:"Profile type ID of the object",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"active_filter",in:"query",description:"Filter for profile type synced attributes",required:!1,schema:{type:"string",enum:["synced","unsynced","all"],example:"all"}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"search",in:"query",description:"Filter by string",required:!1,schema:{type:"string",example:"search"}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Pagination page number",required:!1,schema:{type:"integer",format:"int32",minimum:1,example:5}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Pagination items per page",required:!1,schema:{type:"integer",format:"int32",minimum:1,example:5}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"sort",in:"query",description:"How records should be sorted",required:!1,schema:{type:"object",example:{attr:"sync",order:"asc"},properties:{attr:{type:"string",example:"sync"},order:{type:"string",enum:["asc","desc"],example:"asc"}}}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(l.Z,{mdxType:"ApiTabs"},(0,s.kt)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Expected response to a valid request")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"form"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"count",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",description:"How many ne attribute records exist",example:5},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"records"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{description:"ID of ne attribute",type:"string",format:"uuid",readOnly:!0,example:"1246d8b3-ac29-4015-8154-dea4434a73fa"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{description:"Ne attribute's uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"1246d8b3-ac29-4015-8154-dea4434a73fa"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"label",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Ne attribute's label",type:"string",required:!0,readOnly:!0,example:"object"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"synced",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{description:"synced_attribute ID if there is one",type:"uuid",required:!1,example:"1246d8b3-ac29-4015-8154-dea4434a73fa"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,s.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "form": {\n    "count": 5,\n    "records": [\n      {\n        "id": "1246d8b3-ac29-4015-8154-dea4434a73fa",\n        "uid": "1246d8b3-ac29-4015-8154-dea4434a73fa",\n        "label": "object",\n        "synced": "1246d8b3-ac29-4015-8154-dea4434a73fa"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(u.default,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request - unable to complete.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(c.default,{mdxType:"SchemaTabs"},(0,s.kt)(u.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,s.kt)(u.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,s.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(u.default,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,s.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}S.isMDXComponent=!0}}]);