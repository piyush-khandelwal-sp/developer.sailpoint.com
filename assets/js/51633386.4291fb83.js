"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[83928],{71336:(e,t,i)=>{i.d(t,{Z:()=>E});var n=i(67294),a=i(57273),r=i(25026);const T={zoomIn:"zoomIn_Zi5X",mermaidContainer:"mermaidContainer_KO9S"};function E({children:e,diagram:t}){a.Z.contentLoaded();const[i,E]=n.useState(0),[c,s]=n.useState({cursor:"grab",clickX:0,clickY:0,offsetX:0,offsetY:0}),[o,I]=n.useState({x:0,y:0}),[h,_]=n.useState(!1);function d(e){e.screenX?(s({cursor:"grabbing",clickX:e.screenX,clickY:e.screenY,offsetX:o.x,offsetY:o.y}),I({x:o.x,y:o.y})):(s({cursor:"grabbing",clickX:e.changedTouches[0].screenX,clickY:e.changedTouches[0].screenY,offsetX:o.x,offsetY:o.y}),I({x:o.x,y:o.y}))}function u(e){s({cursor:"grab",clickX:0,clickY:0})}function f(e){"grabbing"===c.cursor&&(e.screenX?I({x:c.clickX-e.screenX+c.offsetX,y:c.clickY-e.screenY+c.offsetY}):I({x:c.clickX-e.changedTouches[0].screenX+c.offsetX,y:c.clickY-e.changedTouches[0].screenY+c.offsetY}))}let m,l;return n.useEffect((()=>{let e=!1;return setTimeout((()=>{e||_(!0)}),100),()=>{e=!0}})),!0===h?(l=n.createElement("div",null),m=n.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{position:"relative",top:-o.y+"px",left:-o.x+"px",width:"calc(100% + "+i+"px)",maxHeight:"1000px"}},t)):(l=n.createElement("div",null,"Diagram Loading ..."),m=n.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{visibility:"hidden",position:"relative",top:-o.y+"px",left:-o.x+"px",width:"calc(100% + "+i+"px)",maxHeight:"1000px"}},t)),n.createElement("div",null,n.createElement("img",{className:T.zoomIn,onClick:e=>{E(i+300)},src:(0,r.Z)("/icons/magnifying-glass-plus-regular.svg")}),n.createElement("img",{className:T.zoomIn,onClick:e=>function(e){E(0),s({cursor:"grab",clickX:e.screenX,clickY:e.screenY,offsetX:0,offsetY:0}),I({x:0,y:0})}(e),src:(0,r.Z)("/icons/house-regular.svg")}),n.createElement("img",{className:T.zoomIn,onClick:e=>{E(i-300)},src:(0,r.Z)("/icons/magnifying-glass-minus-regular.svg")}),n.createElement("div",{style:{cursor:c.cursor},className:T.mermaidContainer,onMouseMove:e=>f(e),onTouchMove:e=>f(e),onMouseDown:e=>d(e),onTouchStart:e=>d(e),onMouseUp:e=>u(),onTouchEnd:e=>u(),onMouseLeave:e=>u()},l,m))}},59122:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>f,default:()=>R,frontMatter:()=>u,metadata:()=>m,toc:()=>D});var n=i(3905),a=i(71336),r=Object.defineProperty,T=Object.defineProperties,E=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,I=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,h=(e,t)=>{for(var i in t||(t={}))s.call(t,i)&&I(e,i,t[i]);if(c)for(var i of c(t))o.call(t,i)&&I(e,i,t[i]);return e},_=(e,t)=>T(e,E(t)),d=(e,t)=>{var i={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&o.call(e,n)&&(i[n]=e[n]);return i};const u={id:"access-intelligence-center-er-diagram",title:"Access Intelligence Center ER Diagram",pagination_label:"Access Intelligence Center ER Diagram",sidebar_label:"Entity Relationship Diagram",sidebar_position:1,sidebar_class_name:"AccessIntelligenceCenter",keywords:["data listing","data share","secure data sharing"],description:"Access Intelligence Center ER Diagram",slug:"/reporting/aic-er-diagram",tags:["AccessIntelligenceCenter","AIC"],hide_table_of_contents:!0},f="Access Intelligence Center ER Diagram",m={unversionedId:"reporting/access-intelligence-center/access-intelligence-center-er-diagram",id:"reporting/access-intelligence-center/access-intelligence-center-er-diagram",title:"Access Intelligence Center ER Diagram",description:"Access Intelligence Center ER Diagram",source:"@site/docs/reporting/access-intelligence-center/identity-er-diagram.md",sourceDirName:"reporting/access-intelligence-center",slug:"/reporting/aic-er-diagram",permalink:"/docs/reporting/aic-er-diagram",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/reporting/access-intelligence-center/identity-er-diagram.md",tags:[{label:"AccessIntelligenceCenter",permalink:"/docs/tags/access-intelligence-center"},{label:"AIC",permalink:"/docs/tags/aic"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:1,frontMatter:{id:"access-intelligence-center-er-diagram",title:"Access Intelligence Center ER Diagram",pagination_label:"Access Intelligence Center ER Diagram",sidebar_label:"Entity Relationship Diagram",sidebar_position:1,sidebar_class_name:"AccessIntelligenceCenter",keywords:["data listing","data share","secure data sharing"],description:"Access Intelligence Center ER Diagram",slug:"/reporting/aic-er-diagram",tags:["AccessIntelligenceCenter","AIC"],hide_table_of_contents:!0},sidebar:"openApiSidebar",previous:{title:"Access Intelligence Center",permalink:"/docs/reporting/access-intelligence-center"},next:{title:"Access Intelligence Center Audit ER Diagram",permalink:"/docs/reporting/aic-audit-er-diagram"}},l={},D=[],N={toc:D},A="wrapper";function R(e){var t=e,{components:i}=t,r=d(t,["components"]);return(0,n.kt)(A,_(h(h({},N),r),{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",h({},{id:"access-intelligence-center-er-diagram"}),"Access Intelligence Center ER Diagram"),(0,n.kt)(a.Z,{diagram:'erDiagram\n    IDENTITY_ATRIBUTE {\n        varchar IDENTITY_ID "This contains the unique identifier for the identity"\n        varchar City "Identity\u2019s City"\n        varchar Cloud_Lifecycle_State "Identity\u2019s Cloud Lifecycle State"\n        varchar Company "Identity Company"\n        varchar CompanyName "Identity CompanyName"\n        varchar Cost_Center "Identity Cost Center"\n        varchar Country "Identity Country"\n        varchar Department "Identity Department"\n        varchar Job "Identity Job"\n        varchar Location "Identity Location"\n        varchar Postal_Code "Identity Postal Code"\n        varchar Region "Identity Region"\n        varchar State "Identity State"\n        varchar Title "Identity Title"\n    }\n    IDENTITY_ROLES_FULL {\n        varchar IDENTITY_ID "This contains the unique identifier for the identity"\n        varchar ROLE_ID "This contains the unique identifier for the role"\n        varchar ROLE_NAME "The name of the role"\n        varchar ROLE_DISPLAY_NAME "The user friendly name for the role"\n    }\n    IDENTITY {\n        varchar ID PK "The primary Key"\n        varchar TENANT_ID "Unique ID of customer organization"\n        varchar IDENTITY_ID "This contains the unique identifier for the identity"\n        timestamp IDENTITY_CREATED "Identity created Date"\n        timestamp IDENTITY_UPDATED "Identity modified Date"\n        varchar NAME "The name of identity"\n        varchar DISPLAY_NAME "This is the displayable name usually First Name Last Name"\n        varchar MANAGERS_NAME "Managers name for the identity"\n        varchar EMAIL "Identity email"\n        varchar STATUS "Identity status"\n        varchar JOB_TITLE "Identity job title"\n        varchar LOCATION "Identity location"\n        varchar LOCATION_CODE "Identity location code"\n        varchar DEPARTMENT "Identity department"\n        varchar IDENTITY_CREATED_MONTH_SORT "A field to sort charts based on the month an Identity was created"\n        number IDENTITY_CREATED_WEEK_SORT "A field to sort charts based on the week an Identity was created"\n        timestamp SYNC_DATE "The date the data was synced to the table"\n    }\n    ACCESS_PROFILES_FULL {\n        varchar IDENTITY_ID\xa0"This contains the unique identifier for the identity"\n        varchar ACCESS_PROFILE_ID "The unique identifier of access profile"\n        varchar ACCESS_PROFILE_NAME "The access profile name"\n        varchar ACCESS_PROFILE_DISPLAY_NAME "The user friendly name of access profile"\n        varchar ACCESS_PROFILE_DESCRIPTION "The description of the access profile"\n    }\n    IDENTITY_ACCOUNTS_FULL {\n        varchar IDENTITY_ID\xa0"This contains the unique identifier for the identity"\n        varchar ACCOUNT_ID "The unique identifier of the account"\n        varchar NATIVE_IDENTITY "The native name of the identity"\n        varchar ACCOUNT_DISPLAY_NAME\xa0"The user friendly name of the account"\n        varchar ACCOUNT_SOURCE_ID "The unique identifier of the account source"\n        varchar ACCOUNT_SOURCE__DISPLAY_NAME "The user friendly name of the account source"\n        varchar ACCOUNT_SOURCE_TYPE "The type of the account source"\n    }\n    IDENTITY_APPS_FULL {\n        varchar IDENTITY_ID "This contains the unique identifier for the identity often an ID"\n        varchar APP_ID\xa0"Unique identifier of the app"\n        varchar APP_DISPLAY_NAME\xa0"The user friendly name of the app"\n    }\n    IDENTITY_ENTITLEMENTS_FULL {\n        varchar IDENTITY_ID "This contains the unique identifier for the identity often an ID"\n        varchar ENTITLEMENT_ID\xa0"The unique identifier associated to the entitlement"\n        varchar ENTITLEMENT_DISPLAY_NAME\xa0"The entitlement display Name"\n        timestamp ENTITLEMENT_CREATED_DATE\xa0"Identity created date"\n        timestamp ENTITLEMENT_UPDATED_DATE "Identity modified date"\n        varchar ENTITLEMENT_ATTRIBUTE\xa0"The attribute associated to entitlement"\n        varchar ENTITLEMENT_VALUE\xa0"The value of the attribute"\n        varchar ENTITLEMENT_SOURCE_DISPLAY_NAME\xa0"The source display name to which entitlement is associated"\n    }   \n    IDENTITY_REQUEST_WITH_DURATION {\n        varchar ACCESS_REQUEST_ID "This contains the unique identifier for the access request"\n        varchar DURATION_HOURS "The duration in hours from the create date of an access request to the end date of the access request"\n    } \n    CERTIFICATION_STATS {\n        varchar CERTIFICATION_ID "This contains the unique identifier for the certification"\n        timestamp DUE_DATE "The date a certification is due"\n        timestamp FINISHED_DATE "the date a certification was completed"\n        number DAYS_LATE "The number of days after a certfications due date that a certification was finished"\n        number HOURS_LATE "The number of hours after a certfications due date that a certification was finished"\n        varchar CERTIFIER_DISPLAY_NAME "The display name of the Certifier"\n    }   \n    CERTIFICATION_ITEM {\n        varchar CERTIFICATION_ID "This contains the unique identifier for the certification"\n        varchar REVIEWER_ID "The identity id of the certifier"\n        varchar IDENTITY_ID "This contains the unique identifier for the Identity"\n        varchar ID "The unique identifier of the Certification Item"\n        timestamp CREATED_DATE "The date a certification was created"\n        timestamp UPDATED_DATE "The date a certification was last updated"\n        timestamp DELETED_DATE "The date a certification was deleted"\n        varchar APPLICATION_ID "the unique identifier of the application"\n        varchar REVIEWED_ID "the unique identifier of the reviewed"\n        varchar REVIEWED_TYPE "the unique typeentifier of the reviewed"\n        varchar TYPE "the unique typeentifier of the type"\n        varchar SUB_TYPE "the unique typeentifier of the sub"\n        timestamp COMPLETED_DATE "the unique dateentifier of the completed"\n        timestamp DECISION_DATE "the unique dateentifier of the decision"\n        varchar APPROVED "the unique approvedentifier of the approved"\n        varchar CERTIFICATION_ITEM_STATUS "the unique statusentifier of the status"\n        varchar DECISION "the unique decisionentifier of the decision"\n        varchar BULK "the unique bulkentifier of the bulk"\n        varchar REMEDIATED "the unique remediatedentifier of the remediated"\n        varchar PRIVILEGED "the unique privilegedentifier of the privileged"\n        varchar REMEDIATION_ACTION "the unique actionentifier of the remediation"\n        varchar MITIGATION_EXPIRATION "the unique expirationentifier of the mitigation"\n        varchar INSTANCE "the unique instanceentifier of the instance"\n        varchar ACCOUNT_ONLY "the unique onlyentifier of the account"\n        varchar NEW_ACCESS "the unique accessentifier of the new"\n        varchar POLICY_NAME "the unique nameentifier of the policy"\n        varchar CONSTRAINT_NAME "the unique nameentifier of the constraint"\n        timestamp SYNC_DATE "the unique dateentifier of the sync"\n    } \n    CERTIFICATION_IDENTITY_FULL {\n        varchar CERT_ID "The unique identifier of a certification"\n        varchar NAME "The Name of a certification"\n        varchar ORIGINAL_CERTIFICATION_ID "The original unique identifier of a certification"\n        varchar CERTIFICATION_CAMPAIGN_ID "The unique identifier of a certification campaign"\n        varchar CERTIFICATION_CAMPAIGN_STATUS "The status of a certification campaign"\n        varchar CERTIFICATION_CAMPAIGN_DEADLINE "The deadline of a certification campaign"\n        varchar CERTIFICATION_CAMPAIGN_TYPE "the type of a certification campaign"\n        varchar SIGNER_ID "The unique identity id of the signer of a certification"\n        varchar MANAGER_ID "The unique identity id of the signers manager of a certification"\n        varchar CERTIFIER_ID "The unique identity id of the certifier of a certification"\n        boolean REJECTED "boolean value of the rejection status of a certification"\n    } \n    IDENTITY_REQUEST_IDENTITY_REQUEST_ITEM_FULL {\n        varchar IDENTITY_REQUEST_ITEM_APPROVER_ID "The unique identity id of the identity request approver"\n        varchar IDENTITY_REQUEST_ITEM_REQUEST_ID "The unique identity item request id"\n        varchar IDENTITY_REQUEST_ITEM_REQUESTER_ID "The unique identity id of the identity request requester"\n        varchar IDENTITY_ID "This contains the unique identifier for the TARGET_ID"\n        varchar IDENTITY_REQUEST_ITEM_ID "This contains the unique identifier for the identity request item"\n        varchar IDENTITY_REQUEST_ITEM_INSTANCE "The instance name of the identity request item"\n        varchar IDENTITY_REQUEST_ITEM_NATIVE_IDENTITY "The native identity name for the request item"\n        varchar IDENTITY_REQUEST_ITEM_DISPLAY_NAME "The friendly name for the identity request item"\n        varchar IDENTITY_REQUEST_ITEM_NAME "The name for the identity request item"\n        varchar IDENTITY_REQUEST_ITEM_VALUE "The value of the identity request item"\n        varchar IDENTITY_REQUEST_ITEM_ANNOTATION "The annotation of the identity request item"\n        varchar IDENTITY_REQUEST_ITEM_OPERATION "The operation of the identity request item"\n        timestamp IDENTITY_REQUEST_ITEM_START_DATE "The date of the identity request item start"\n        timestamp IDENTITY_REQUEST_ITEM_END_DATE "The date of the identity request item end"\n        varchar IDENTITY_REQUEST_ITEM_APPROVED "The approved of the identity request item"\n        varchar IDENTITY_REQUEST_ITEM_REJECTED "The rejected of the identity request item"\n        varchar IDENTITY_REQUEST_ITEM_PROVISIONING_STATE "The state of the identity request item provisioning"\n        varchar IDENTITY_REQUEST_ITEM_COMPILATION_STATUS "The status of the identity request item compilation"\n        varchar IDENTITY_REQUEST_ITEM_EXPANSION_CAUSE "The cause of the identity request item expansion"\n        number IDENTITY_REQUEST_ITEM_RETRIES "The retries of the identity request item"\n        varchar IDENTITY_REQUEST_ITEM_PROVISIONING_ENGINE "The engine of the identity request item provisioning"\n        timestamp IDENTITY_REQUEST_ITEM_CREATED_DATE "The date of the identity request item created"\n        varchar IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_ID "The id of the identity request item access request"\n        timestamp IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_CREATED_DATE "The date of the identity request item access request created"\n        timestamp IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_END_DATE "The date of the identity request item access request end"\n        varchar IDENTITY_REQUEST_ITEM_EXECUTION_STATUS "The status of the eidentity request item execution"\n        varchar IDENTITY_REQUEST_ITEM_COMPLETION_STATUS "The status of the identity request item completion"\n        varchar IDENTITY_REQUEST_ITEM_PRIORITY "The priority of the identity request item"\n        varchar IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_REQUESTER "The requester of the identity request item access request"\n        varchar IDENTITY_REQUEST_ITEM_APP_ID "The id of the identity request item app"\n        varchar IDENTITY_REQUEST_ITEM_APP_DISPLAY_NAME "The name of the identity request item app display"\n        timestamp IDENTITY_REQUEST_ITEM_REQUESTER_CREATED_DATE "The date of the identity request item requester created"\n        timestamp IDENTITY_REQUEST_ITEM_REQUESTER_UPDATE_DATE "The date of the identity request item requester update"\n        varchar IDENTITY_REQUEST_ITEM_TARGET_DISPLAY_NAME "The name of the identity request item target display"\n        timestamp IDENTITY_REQUEST_ITEM_TARGET_CREATED_DATE "The date of the identity request item target created"\n        timestamp IDENTITY_REQUEST_ITEM_TARGET_UPDATE_DATE "The date of the identity request item target update"\n        timestamp IDENTITY_REQUEST_ITEM_APPROVER_CREATED_DATE "The date of the identity request item approver created"\n        timestamp IDENTITY_REQUEST_ITEM_APPROVER_UPDATED_DATE "The date of the identity request item approver updated"\n        varchar IDENTITY_REQUEST_ITEM_APPROVER_DISPLAY_NAME "The name of the identity request item approver display"\n        varchar IDENTITY_REQUEST_ITEM_ENTITLEMENT_ID "The id of the identity request item entitlement"\n        varchar IDENTITY_REQUEST_ITEM_ENTITLEMENT_VALUE "The value of the identity request item entitlement"\n        varchar IDENTITY_REQUEST_ITEM_ENTITLEMENT_DISPLAY_NAME "The name of the identity request item entitlement display"\n        varchar IDENTITY_REQUEST_ITEM_ROLE_ID "The id of the identity request item role"\n        varchar IDENTITY_REQUEST_ITEM_ROLE_NAME "The name of the identity request item role"\n        varchar IDENTITY_REQUEST_ITEM_ROLE_DISPLAY_NAME "The name of the identity request item role display"\n    } \n    IDENTITY ||--o{ IDENTITY_ATRIBUTE : "associated to and owns"\n    IDENTITY ||--o{ IDENTITY_ROLES_FULL : "associated to and owns"\n    IDENTITY ||--o{ ACCESS_PROFILES_FULL: "associated to and owns"\n    IDENTITY ||--o{ IDENTITY_ACCOUNTS_FULL : "associated to and owns"\n    IDENTITY ||--o{ IDENTITY_APPS_FULL : "associated to and owns"\n    IDENTITY ||--o{ IDENTITY_ENTITLEMENTS_FULL : "associated to and owns"\n    IDENTITY ||--o{ CERTIFICATION_ITEM : "associated to and owns"\n    CERTIFICATION_ITEM ||--o{ CERTIFICATION_STATS : "associated to and owns"\n    CERTIFICATION_ITEM ||--o{ CERTIFICATION_IDENTITY_FULL : "associated to and owns"\n    IDENTITY ||--o{ IDENTITY_REQUEST_IDENTITY_REQUEST_ITEM_FULL : "associated to and owns"\n    IDENTITY_REQUEST_IDENTITY_REQUEST_ITEM_FULL ||--o{ IDENTITY_REQUEST_WITH_DURATION : "associated to and owns"',mdxType:"MermaidViewer"}))}R.isMDXComponent=!0}}]);