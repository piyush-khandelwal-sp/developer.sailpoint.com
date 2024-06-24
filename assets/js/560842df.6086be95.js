"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[42048],{85407:(e,a)=>{function t(e,a){var t,l,s,i,n;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(l=null==(t=e.xml)?void 0:t.name)?l:e.type:"array"===e.type?null!=(i=null==(s=e.xml)?void 0:s.name)?i:e.type:null!=(n=e.title)?n:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var l;return e.items?t(e.items)+"[]":null!=(l=t(e))?l:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,l,s="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(l=`\`<= ${a.maxLength} characters\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),t.push(s)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,l,s="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?l=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?l=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(l=`\`< ${a.maximum}\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),t.push(s)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const l=a;if(l.mapping){const e=Object.keys(l.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>g});var l=t(67294),s=t(58750),i=t(82479),n=t(62574),m=t(94693),r=t(85407),o=t(52347),c=t(25365),d=t(88453),p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;const g=function({param:{description:e,example:a,examples:t,name:g,required:y,schema:f}}){f&&(null==f?void 0:f.type)||(f={type:"any"});const b=(0,o.lo)(f,(e=>l.createElement("span",{className:"openapi-schema__type"}," ",(0,r.uc)(e)))),k=(0,o.lo)(y,(()=>l.createElement("span",{className:"openapi-schema__required"},"required"))),x=(0,o.lo)((0,r.A4)(f),(e=>l.createElement("div",null,l.createElement(c.D,{children:(0,m.T)(e),rehypePlugins:[d.Z]})))),v=(0,o.lo)(e,(e=>l.createElement("div",null,l.createElement(c.D,{children:(0,m.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:i,className:n,children:m}=a;((e,a)=>{var t={};for(var l in e)u.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&p)for(var l of p(e))a.indexOf(l)<0&&h.call(e,l)&&(t[l]=e[l])})(a,["node","inline","className","children"]);const r=/language-(\w+)/.exec(n||"");return i?l.createElement("code",null,m):!i&&r?l.createElement(s.Z,{className:n},m):l.createElement(s.Z,null,m)}},rehypePlugins:[d.Z]})))),T=(0,o.lo)(f&&f.items?f.items.default:f?f.default:void 0,(e=>l.createElement("div",null,l.createElement(c.D,{children:`**Default value:** \`${e}\``})))),E=(0,o.lo)((0,o.toString)(a),(e=>l.createElement("div",null,l.createElement("strong",null,"Example: "),e))),q=(0,o.lo)(t,(e=>{const a=Object.entries(e);return l.createElement(l.Fragment,null,l.createElement("strong",null,"Examples:"),l.createElement(i.default,null,a.map((([e,a])=>l.createElement(n.default,{value:e,label:e},a.summary&&l.createElement("p",null,a.summary),a.description&&l.createElement("p",null,l.createElement("strong",null,"Description: "),l.createElement("span",null,a.description)),l.createElement("p",null,l.createElement("strong",null,"Example: "),l.createElement("code",null,a.value)))))))}));return l.createElement("div",{className:"openapi-params__list-item"},l.createElement("span",{className:"openapi-schema__container"},l.createElement("strong",{className:"openapi-schema__property"},g),b,y&&l.createElement("span",{className:"openapi-schema__divider"}),k),x,T,v,E,q)}},64299:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>N,contentTitle:()=>q,default:()=>M,frontMatter:()=>E,metadata:()=>A,toc:()=>L});var l=t(3905),s=t(68562),i=t(67001),n=t.n(i),m=t(98439),r=t(34168),o=t(3655),c=t(13503),d=t(82479),p=t(62574),u=Object.defineProperty,h=Object.defineProperties,g=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,k=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,x=(e,a)=>{for(var t in a||(a={}))f.call(a,t)&&k(e,t,a[t]);if(y)for(var t of y(a))b.call(a,t)&&k(e,t,a[t]);return e},v=(e,a)=>h(e,g(a)),T=(e,a)=>{var t={};for(var l in e)f.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&y)for(var l of y(e))a.indexOf(l)<0&&b.call(e,l)&&(t[l]=e[l]);return t};const E={id:"delete-mfa-config",sidebar_label:"Delete MFA method configuration",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"delete api-method",info_path:"docs/api/v3/identity-security-cloud-v-3-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete MFA method configuration' (delete-mfa-config)"},q=void 0,A={unversionedId:"api/v3/delete-mfa-config",id:"api/v3/delete-mfa-config",title:"delete-mfa-config",description:"Delete MFA method configuration",source:"@site/docs/api/v3/delete-mfa-config.api.mdx",sourceDirName:"api/v3",slug:"/api/v3/delete-mfa-config",permalink:"/docs/api/v3/delete-mfa-config",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete MFA method configuration' (delete-mfa-config)",tags:[],version:"current",frontMatter:{id:"delete-mfa-config",sidebar_label:"Delete MFA method configuration",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"delete api-method",info_path:"docs/api/v3/identity-security-cloud-v-3-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete MFA method configuration' (delete-mfa-config)"},sidebar:"openApiSidebar",previous:{title:"MFA method's test configuration",permalink:"/docs/api/v3/test-mfa-config"},next:{title:"MFA Controller",permalink:"/docs/api/v3/mfa-controller"}},N={},L=[{value:"Request",id:"request",level:2}],S={toc:L},I="wrapper";function M(e){var a=e,{components:t}=a,i=T(a,["components"]);return(0,l.kt)(I,v(x(x({},S),i),{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Delete MFA method configuration"),(0,l.kt)(n(),{method:"delete",path:"/mfa/{method}/delete",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"This API removes the configuration for the specified MFA method.\nA token with ORG_ADMIN authority is required to call this API."),(0,l.kt)("h2",x({},{id:"request"}),"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"method",schema:{type:"string",example:"okta-verify"},required:!0,description:"The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'."},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(p.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"MFA configuration of an MFA method.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(p.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(p.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"mfaMethod",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"Mfa method name",example:"okta-verify"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If MFA method is enabled.",default:!1,example:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"host",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"The server host name or IP address of the MFA provider.",example:"example.com"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"accessKey",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"The secret key for authenticating requests to the MFA provider.",example:"qw123Y3QlA5UqocYpdU3rEkzrK2D497y"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"identityAttribute",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"Optional. The name of the attribute for mapping IdentityNow identity to the MFA provider.",example:"email"},mdxType:"SchemaItem"})))),(0,l.kt)(p.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "mfaMethod": "okta-verify",\n  "enabled": true,\n  "host": "example.com",\n  "accessKey": "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",\n  "identityAttribute": "email"\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(p.default,{label:"Example",value:"Example",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "mfaMethod": "okta-verify",\n  "enabled": true,\n  "host": "www.example.com",\n  "accessKey": "d******Y",\n  "identityAttribute": "email"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(p.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Client Error - Returned if the request body is invalid.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(p.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(p.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(p.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(p.default,{label:"401",value:"401",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(p.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(p.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"JWT validation failed: JWT is expired"},mdxType:"SchemaItem"})))),(0,l.kt)(p.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "error": "JWT validation failed: JWT is expired"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(p.default,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(p.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(p.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(p.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(p.default,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("p",null," An example of a 403 response object"),(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "403 Forbidden",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server understood the request but refuses to authorize it."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(p.default,{label:"429",value:"429",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(p.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(p.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:" Rate Limit Exceeded "},mdxType:"SchemaItem"})))),(0,l.kt)(p.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "message": " Rate Limit Exceeded "\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(p.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - Returned if there is an unexpected error.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(p.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(p.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(p.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(p.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("p",null," An example of a 500 response object"),(0,l.kt)(o.Z,{responseExample:'{\n  "detailCode": "500.0 Internal Fault",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "An internal fault occurred."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}M.isMDXComponent=!0}}]);