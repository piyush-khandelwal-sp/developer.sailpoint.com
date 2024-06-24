"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[39330],{17377:(e,t,i)=>{i.d(t,{Z:()=>R});var r=i(67294),l=i(86010),n=i(76828),a=i(39130),o=i(35096),s=i(33084);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var c=i(99603),d=i(21702);function p({href:e,children:t}){return r.createElement(a.default,{href:e,className:(0,l.default)("card padding--lg",u.cardContainer)},t)}function m({href:e,icon:t,title:i,description:n}){return r.createElement(p,{href:e},r.createElement("h2",{className:(0,l.default)("text--truncate",u.cardTitle),title:i},t,i),n&&r.createElement("p",{className:u.cardDescription,title:n},n))}function h({item:e}){var t,i;const l=(0,n.Wl)(e);return l?r.createElement(m,{href:l,icon:r.createElement(c.G,{icon:d.cC_,className:u.docCardIcon}),title:e.label,description:null!=(i=null==(t=e.customProps)?void 0:t.description)?i:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,i;const l=(0,o.Z)(e.href)?r.createElement(c.G,{icon:d.FL8,className:u.docCardIcon}):r.createElement(c.G,{icon:d.wlW,className:u.docCardIcon}),a=(0,n.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(m,{href:e.href,icon:l,title:e.label,description:null!=(i=e.description)?i:null==a?void 0:a.description})}function y({item:e}){switch(e.type){case"link":return r.createElement(f,{item:e});case"category":return r.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var k=Object.defineProperty,g=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,w=(e,t,i)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,N=(e,t)=>{for(var i in t||(t={}))v.call(t,i)&&w(e,i,t[i]);if(g)for(var i of g(t))b.call(t,i)&&w(e,i,t[i]);return e};function x({className:e}){const t=(0,n.jA)();return r.createElement(R,{items:t.items,className:e})}function R(e){const{items:t,className:i}=e;if(!t)return r.createElement(x,N({},e));const a=(0,n.MN)(t);return r.createElement("section",{className:(0,l.default)("row",i)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},21829:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>x,frontMatter:()=>y,metadata:()=>g,toc:()=>b});var r=i(3905),l=i(17377),n=i(76828),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,i)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,m=(e,t)=>{for(var i in t||(t={}))c.call(t,i)&&p(e,i,t[i]);if(u)for(var i of u(t))d.call(t,i)&&p(e,i,t[i]);return e},h=(e,t)=>o(e,s(t)),f=(e,t)=>{var i={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(i[r]=e[r]);return i};const y={id:"cloud-executed-rules",title:"Cloud Executed Rules",pagination_label:"Cloud Executed Rules",sidebar_label:"Cloud Executed Rules",sidebar_position:2,sidebar_class_name:"cloudExecutedRules",keywords:["cloud","rules"],description:"Overview of cloud-executed rules",slug:"/extensibility/rules/cloud-rules",tags:["Rules"]},k=void 0,g={unversionedId:"extensibility/rules/cloud-rules/cloud-executed-rules",id:"extensibility/rules/cloud-rules/cloud-executed-rules",title:"Cloud Executed Rules",description:"Overview of cloud-executed rules",source:"@site/docs/extensibility/rules/cloud-rules/index.md",sourceDirName:"extensibility/rules/cloud-rules",slug:"/extensibility/rules/cloud-rules",permalink:"/docs/extensibility/rules/cloud-rules",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/cloud-rules/index.md",tags:[{label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:2,frontMatter:{id:"cloud-executed-rules",title:"Cloud Executed Rules",pagination_label:"Cloud Executed Rules",sidebar_label:"Cloud Executed Rules",sidebar_position:2,sidebar_class_name:"cloudExecutedRules",keywords:["cloud","rules"],description:"Overview of cloud-executed rules",slug:"/extensibility/rules/cloud-rules",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Your First Rule",permalink:"/docs/extensibility/rules/guides/your-first-rule"},next:{title:"Account Profile Attribute Generator",permalink:"/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator"}},v={},b=[{value:"Overview",id:"overview",level:2},{value:"Supported Cloud Rules",id:"supported-cloud-rules",level:2},{value:"Configuration Process",id:"configuration-process",level:2},{value:"Submit for Rule Review",id:"submit-for-rule-review",level:2},{value:"Review Guidelines",id:"review-guidelines",level:2},{value:"Review Expectations",id:"review-expectations",level:2}],w={toc:b},N="wrapper";function x(e){var t=e,{components:i}=t,a=f(t,["components"]);return(0,r.kt)(N,h(m(m({},w),a),{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h2",m({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cloud-Executed Rules")," or ",(0,r.kt)("strong",{parentName:"p"},"Cloud Rules")," typically only perform specific functions, such as calculating attribute values. Cloud Rules all execute within the SailPoint cloud and offer access to objects and data, but they do not offer any sort of external connectivity."),(0,r.kt)("p",null,"Because these rules execute in a multi-tenant cloud environment, they have a very restricted context, and the review process is carefully scrutinized to ensure that they execute in an efficient and secure manner."),(0,r.kt)("h2",m({},{id:"supported-cloud-rules"}),"Supported Cloud Rules"),(0,r.kt)(l.Z,{items:(0,n.jA)().items,mdxType:"DocCardList"}),(0,r.kt)("h2",m({},{id:"configuration-process"}),"Configuration Process"),(0,r.kt)("p",null,"To ensure maximum compatibility, platform integrity, and security, SailPoint has instantiated a review process to ensure that any submitted Cloud Rules meet SailPoint requirements and do not contain code that can harm the system. The review process also checks the rules to verify their intended purposes and use cases."),(0,r.kt)("p",null,"In this process, SailPoint does ",(0,r.kt)("em",{parentName:"p"},"not check")," whether the rule executes correctly or verify that it works as expected to deliver specific outcomes. The review is merely an integrity check on the rule itself."),(0,r.kt)("h2",m({},{id:"submit-for-rule-review"}),"Submit for Rule Review"),(0,r.kt)("p",null,"To submit your Cloud Rule for review, approval, and inclusion in the SailPoint platform, submit a ",(0,r.kt)("a",m({parentName:"p"},{href:"https://support.sailpoint.com/csm"}),"SailPoint support portal request")," or send an email to ",(0,r.kt)("a",m({parentName:"p"},{href:"mailto:support@sailpoint.com"}),"support@sailpoint.com"),". Attach the rule, validator output, tenant name (e.g., acme-sb.identitynow.com for sandbox or acme.identitynow.com for production) and approval for expert services to proceed. If you need assistance writing and testing rules, Expert Services can assist in that process as well. Make sure your contact information is up to date so the review team can contact you if they need to."),(0,r.kt)("h2",m({},{id:"review-guidelines"}),"Review Guidelines"),(0,r.kt)("p",null,"All submitted rules must follow proper rule submission guidelines."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Best Practices"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ensure that all rule configurations are complete and accurate."),(0,r.kt)("li",{parentName:"ul"},"Check whether your rule follows SailPoint best practice guidance, and ensure that you have considered other product features first."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rule Quality"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rules must follow the ",(0,r.kt)("a",m({parentName:"li"},{href:"/docs/extensibility/rules#rule-guidelines"}),"Rule Guidelines")," and ",(0,r.kt)("a",m({parentName:"li"},{href:"/docs/extensibility/rules#rule-code-restrictions"}),"Code Restrictions")),(0,r.kt)("li",{parentName:"ul"},"Rules must be adequately tested prior to submission."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Documentation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Include detailed comments for non-obvious features in the configurations, including supporting documentation where appropriate. This includes justification for why something was created or done in a certain way. - ",(0,r.kt)("em",{parentName:"li"},"e.g. I did this because...")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Standards"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rules must omit commented out blocks or unfinished, incomplete, or untested code."),(0,r.kt)("li",{parentName:"ul"},"Rules must be submitted with appropriate UTF-8 encoding."),(0,r.kt)("li",{parentName:"ul"},"Rules must convert url-encoded characters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&amp;")," should be ",(0,r.kt)("inlineCode",{parentName:"li"},"&")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&lt;")," should be ",(0,r.kt)("inlineCode",{parentName:"li"},"<")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&gt;")," should be ",(0,r.kt)("inlineCode",{parentName:"li"},">")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rule File Naming"))),(0,r.kt)("p",null,"This is the file naming convention for rules: ",(0,r.kt)("inlineCode",{parentName:"p"},"Rule - {type} - {name}.xml")),(0,r.kt)("p",null,"For example, this is the rule:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'<Rule language="beanshell" name="Calculate Lifecycle" type="IdentityAttribute">')),(0,r.kt)("p",null,"This should be the rule's file name:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Rule - IdentityAttribute - Calculate Lifecycle.xml")),(0,r.kt)("p",null,'If you do not have a type, use "Generic" as the type. It would look like this:'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Rule - Generic - My Generic Rule.xml")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Updating Existing Rules and Versioning")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The best practice is to maintain a single rule for a given use case in the tenant. Creating additional rules while updating to maintain versioning is not supported because doing so may cause issues during reviews and support."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example:"),' For an AD Before Provisioning rule called "AD BeforeProvisioningRule", you have the file "Rule - BeforeProvisioning - AD BeforeProvisioningRule.xml". When you are updating the logic for AD, it is best to update the file/rule with the same name so changes can be properly tracked to the single object.'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Deployment Window Requirements")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rules are generally reviewed and deployed, if they are accepted without feedback, within 24 hours."),(0,r.kt)("li",{parentName:"ul"},"If specific windows are required and you want full control of when a rule is updated, use these steps to follow the versioning best practices:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Submit your request for a new rule with the name: ",(0,r.kt)("inlineCode",{parentName:"li"},"<original name>-TEMP")),(0,r.kt)("li",{parentName:"ul"},"Apply the new rule during the change window."),(0,r.kt)("li",{parentName:"ul"},"Validate the updated rule logic."),(0,r.kt)("li",{parentName:"ul"},"Once the rule is validated, submit your request to update original rule with the updated logic."),(0,r.kt)("li",{parentName:"ul"},"Once the original rule is updated, apply the original rule as the production configuration."),(0,r.kt)("li",{parentName:"ul"},"Submit your request to delete the TEMP rule.")))))),(0,r.kt)("h2",m({},{id:"review-expectations"}),"Review Expectations"),(0,r.kt)("p",null,"Once you have submitted your rule and you are in the review process, remember these points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timing:")," SailPoint will examine your rule as soon as possible. Most rules are reviewed within 24 hours of submission. However, if your rule is complex, poorly documented, hard to read, or if it presents new issues, it may require greater scrutiny and consideration. If your rule is repeatedly rejected for the same guideline violation, your rule's review may take longer to complete."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status Updates:")," Your rule's current status will be reflected in your ",(0,r.kt)("a",m({parentName:"li"},{href:"https://www.sailpoint.com/services/professional/#contact-form"}),"SailPoint Expert Services request"),", so you can monitor its progress there."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expedite Requests:")," If you have a critical timing issue, you can request an expedited review. Respect your fellow implementers by seeking expedited review only when you truly need it. If you are found to be abusing this system, SailPoint may reject further requests going forward."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rejections:")," SailPoint's goal is to apply these guidelines fairly and consistently, but mistaken rejections can happen. If your rule has been rejected and you have questions or you would like to provide additional information, communicate directly with the rule review team. This may help get your rule into Identity Security Cloud, and it can help SailPoint improve the process or identify a need for clarity in its policies. If you still disagree with the outcome, let SailPoint know and someone can look into it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Changes:")," Rule changes or modifications to meet guidelines are not the reviewer's responsibility. They are the responsibility of the person(s) submitting the rule. Reviewers may give advice, examples, etc. to help, but doing so does not guarantee a solution. You should test the rules with the changes before resubmission.")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"")))}x.isMDXComponent=!0}}]);