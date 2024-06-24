"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[43895],{19877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>f,toc:()=>N});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&m(e,n,t[n]);return e},h=(e,t)=>i(e,s(t)),d=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n};const c={id:"your-first-rule",title:"Your First Rule",pagination_label:"Your First Rule",sidebar_label:"Your First Rule",sidebar_class_name:"yourFirstRule",keywords:["rules","guides","first"],description:"Learn to build your first rule!",sidebar_position:1,slug:"/extensibility/rules/guides/your-first-rule",tags:["Rules","Guides","First"]},p=void 0,f={unversionedId:"extensibility/rules/guides/your-first-rule",id:"extensibility/rules/guides/your-first-rule",title:"Your First Rule",description:"Learn to build your first rule!",source:"@site/docs/extensibility/rules/guides/your_first_rule.md",sourceDirName:"extensibility/rules/guides",slug:"/extensibility/rules/guides/your-first-rule",permalink:"/docs/extensibility/rules/guides/your-first-rule",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/guides/your_first_rule.md",tags:[{label:"Rules",permalink:"/docs/tags/rules"},{label:"Guides",permalink:"/docs/tags/guides"},{label:"First",permalink:"/docs/tags/first"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:1,frontMatter:{id:"your-first-rule",title:"Your First Rule",pagination_label:"Your First Rule",sidebar_label:"Your First Rule",sidebar_class_name:"yourFirstRule",keywords:["rules","guides","first"],description:"Learn to build your first rule!",sidebar_position:1,slug:"/extensibility/rules/guides/your-first-rule",tags:["Rules","Guides","First"]},sidebar:"openApiSidebar",previous:{title:"Guides",permalink:"/docs/extensibility/rules/guides"},next:{title:"Cloud Executed Rules",permalink:"/docs/extensibility/rules/cloud-rules"}},g={},N=[{value:"Overview",id:"overview",level:2},{value:"Attribute Generator Rule",id:"attribute-generator-rule",level:2},{value:"Username Requirements",id:"username-requirements",level:2},{value:"Example Outputs",id:"example-outputs",level:3},{value:"Write the Rule",id:"write-the-rule",level:2},{value:"Add Imports and generateUsername Function",id:"add-imports-and-generateusername-function",level:3},{value:"Get the firstName, lastName, and otherName Attributes and Sanitize Input",id:"get-the-firstname-lastname-and-othername-attributes-and-sanitize-input",level:3},{value:"Logic if the Proposed Username Exceeds the Max Length",id:"logic-if-the-proposed-username-exceeds-the-max-length",level:3},{value:"Logic if the Proposed User Name Is Within the Max Length",id:"logic-if-the-proposed-user-name-is-within-the-max-length",level:3},{value:"Add Function <code>isUnique()</code> To Check Active Directory for Username",id:"add-function-isunique-to-check-active-directory-for-username",level:3},{value:"Invoke <code>generateUsername()</code> With the Identity&#39;s First and Last Name",id:"invoke-generateusername-with-the-identitys-first-and-last-name",level:3},{value:"The Complete Rule",id:"the-complete-rule",level:2},{value:"Validate the Rule",id:"validate-the-rule",level:2},{value:"Submit for Rule Review",id:"submit-for-rule-review",level:2},{value:"Add Rule To Account Creation",id:"add-rule-to-account-creation",level:2}],k={toc:N},A="wrapper";function b(e){var t=e,{components:r}=t,i=d(t,["components"]);return(0,a.kt)(A,h(_(_({},k),i),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",_({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"In this guide you'll learn the end to end process of writing a cloud rule to generate a username for use in account creation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",_({parentName:"li"},{href:"#attribute-generator-rule"}),"Attribute generator rule overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",_({parentName:"li"},{href:"#username-requirements"}),"Username requirements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",_({parentName:"li"},{href:"#writing-the-rule"}),"Writing the rule")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",_({parentName:"li"},{href:"#validate-the-rule"}),"Validating the rule")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",_({parentName:"li"},{href:"#submitting-for-rule-review"}),"Submitting for rule review"))),(0,a.kt)("h2",_({},{id:"attribute-generator-rule"}),"Attribute Generator Rule"),(0,a.kt)("p",null,"This rule generates complex account attribute values during provisioning, e.g. when creating an account. You would typically use this rule when you are creating an account to generate attributes like usernames."),(0,a.kt)("p",null,"This rule executes in the Identity Security Cloud (ISC) cloud, and it has read-only access to ISC data models, but it doesn't have access to on-premise sources or connectors."),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",_({parentName:"p"},{href:"/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator"}),"Attribute Generator Rule")," to learn more about the inputs available to you during the rule execution."),(0,a.kt)("h2",_({},{id:"username-requirements"}),"Username Requirements"),(0,a.kt)("p",null,"With this rule you'll be able to generate a unique username and check for uniqueness for an Active Directory source."),(0,a.kt)("p",null,"The unique username will be generated as follows."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Retrieve the first name, last name and other name of the user."),(0,a.kt)("li",{parentName:"ul"},"If the other name is not available, use the first name."),(0,a.kt)("li",{parentName:"ul"},"First, check the length of (othername | firstname).lastname. If it is greater than 12 then use the first 12 letters of the first name, add a period ",(0,a.kt)("inlineCode",{parentName:"li"},".")," and append the first character of the last name. Convert to lowercase. Check for uniqueness."),(0,a.kt)("li",{parentName:"ul"},"If it is not unique then use the first 12 characters of the first name and add a period ",(0,a.kt)("inlineCode",{parentName:"li"},".")," and append the second character of the last name. Convert to lowercase. Check for uniqueness."),(0,a.kt)("li",{parentName:"ul"},"Follow this pattern until a unique username is found. If all characters of the last name are exhausted, return null.")),(0,a.kt)("h3",_({},{id:"example-outputs"}),"Example Outputs"),(0,a.kt)("p",null,"The following example shows the output if the other name is not null, the othername.lastname is less than 12 characters and the username ",(0,a.kt)("inlineCode",{parentName:"p"},"james.doe")," after being lowercased is unique."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("mermaid",_({},{value:"flowchart TD\n    A[first name]\n    B[last name]\n    C[other name]\n    A --\x3e | John| E\n    B --\x3e | Doe | E\n    C --\x3e | James| E\n    E[othername.lastname]\n    F[Length greater than 12?]\n    E --\x3e |James.Doe|F\n    F --\x3e |No| G\n    G[lowercase username]\n    G --\x3e |james.doe| H\n    H[Check Uniqueness]\n    H --\x3e |Unique| I\n    I[Final Result: \\n james.doe]"}))),(0,a.kt)("p",null,"The next example shows the case where the other name if null, the firstname.lastname is greater than 12 characters and the firstname.firstCharacterOfLastName lowercased ",(0,a.kt)("inlineCode",{parentName:"p"},"alexander.s")," is not unique. The rule will then use the firstname.secondCharacterOfLastName lowercased ",(0,a.kt)("inlineCode",{parentName:"p"},"alexander.m"),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("mermaid",_({},{value:"flowchart TD\n    A[first name]\n    B[last name]\n    C[other name]\n    A --\x3e | Alexander| E\n    B --\x3e | Smith | E\n    C --\x3e | null| E\n    E[firstname.lastname]\n    F[Length greater than 12?]\n    E --\x3e |Alexander.Smith|F\n    F --\x3e |Yes| H\n    H[firstname.firstCharacterOfLastName]\n    I[lowercase username]\n    H--\x3e I\n    I--\x3e |alexander.s| J\n    J[Check Uniqueness]\n    J--\x3e |Unique| K\n    K[Final Result:\\nalexander.s]\n    L[firstname.secondCharacterOfLastName]\n    J--\x3e |Not Unique| L\n    M[lowercase username]\n    L--\x3eM\n    N[Check Uniqueness]\n    M--\x3e |alexander.m| N\n    N --\x3e |Unique| P\n    P[Final Result:\\n alexander.m]"}))),(0,a.kt)("h2",_({},{id:"write-the-rule"}),"Write the Rule"),(0,a.kt)("p",null,"Create a new xml file with this naming scheme ",(0,a.kt)("a",_({parentName:"p"},{href:"/docs/extensibility/rules/cloud-rules#review-guidelines"}),"rule file naming"),"."),(0,a.kt)("p",null,"Open that file in your preferred editor."),(0,a.kt)("p",null,"For the attribute generator rule, you can begin with this template:"),(0,a.kt)("pre",null,(0,a.kt)("code",_({parentName:"pre"},{className:"language-xml"}),'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="AttributeGenerator">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n')),(0,a.kt)("h3",_({},{id:"add-imports-and-generateusername-function"}),"Add Imports and generateUsername Function"),(0,a.kt)("p",null,"Add a description and the necessary imports for your rule. This rule will need ",(0,a.kt)("inlineCode",{parentName:"p"},"Identity")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"sailpoint.object"),", as well as a few other classes for working with strings. Also add the global constant, ",(0,a.kt)("inlineCode",{parentName:"p"},"MAX_USERNAME_LENGTH")," - in this example, this rule will use the value of 12."),(0,a.kt)("pre",null,(0,a.kt)("code",_({parentName:"pre"},{className:"language-java"}),'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="ADUserNameGenerator" type="AttributeGenerator">\n  <Description>This will generate a unique username for active directory</Description>\n  <Source><![CDATA[\n        import sailpoint.tools.GeneralException;\n        import sailpoint.object.*;\n        import java.util.ArrayList;\n        import sailpoint.api.*;\n        import java.util.List;\n        import org.apache.commons.lang.StringUtils;\n\n        //Global constant\n        int MAX_USERNAME_LENGTH = 12;\n\n        public String generateUsername(String firstName, String lastName) {\n\n        }\n  ]]></Source>\n</Rule>\n')),(0,a.kt)("h3",_({},{id:"get-the-firstname-lastname-and-othername-attributes-and-sanitize-input"}),"Get the firstName, lastName, and otherName Attributes and Sanitize Input"),(0,a.kt)("pre",null,(0,a.kt)("code",_({parentName:"pre"},{className:"language-java"}),'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="AttributeGenerator">\n  <Description>This will generate a unique username for active directory</Description>\n  <Source><![CDATA[\n        import sailpoint.tools.GeneralException;\n        import sailpoint.object.*;\n        import java.util.ArrayList;\n        import sailpoint.api.*;\n        import java.util.List;\n        import org.apache.commons.lang.StringUtils;\n\n        //Global constant\n        int MAX_USERNAME_LENGTH = 12;\n\n        public String generateUsername(String firstName, String lastName) {\n            firstName = StringUtils.trimToNull( firstName );\n            lastName = StringUtils.trimToNull( lastName );\n            otherName = identity.getStringAttribute("otherName");\n\n            if(firstName != null){\n                firstName = firstName.replaceAll("[^a-zA-Z0-9]", "");\n            }\n\n            if(lastName != null){\n                lastName = lastName.replaceAll("[^a-zA-Z0-9]", "");\n            }\n\n            if(otherName != null){\n                otherName = otherName.replaceAll("[^a-zA-Z0-9]", "");\n            }\n\n            if ( ( firstName == null ) || ( lastName == null ) ){\n                log.debug( "AD Create User Name | Exit from generateADUsername method. No last name and other name for user" );\n                return null;\n            }\n            // If other name is available then we are using firstname as other name\n            if( !StringUtils.isEmpty(otherName) )\n                firstName = otherName;\n\n            // This will hold the final username;\n            String username = null;\n\n            log.debug( "AD Create User Name | Final first name and last name for user: " +firstName + " " +lastName );\n            // This will hold the final username;\n            String finalUserName = null;\n            String fullName = firstName + "." + lastName;\n            String newUsername = lastName;\n        }\n  ]]></Source>\n</Rule>\n')),(0,a.kt)("h3",_({},{id:"logic-if-the-proposed-username-exceeds-the-max-length"}),"Logic if the Proposed Username Exceeds the Max Length"),(0,a.kt)("p",null,"If the full name exceeds the ",(0,a.kt)("inlineCode",{parentName:"p"},"MAX_USERNAME_LENGTH")," the rule will check whether the length of the first name is greater than the MAX_USERNAME_LENGTH minus 2 (in the case below 10) characters of the first name - this allows for the period ",(0,a.kt)("inlineCode",{parentName:"p"},".")," and the first character of the last name to take up the remaining two characters. If the first name is less than the ",(0,a.kt)("inlineCode",{parentName:"p"},"MAX_USERNAME_LENGTH")," the rule will use the full first name for the username with the period ",(0,a.kt)("inlineCode",{parentName:"p"},".")," and the first character of the last name appended. After the username is determined, a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"isUnique( username )")," is made. This uses the ISCRuleUtil class to check Active Directory if the username exists. You will add in that function shortly."),(0,a.kt)("pre",null,(0,a.kt)("code",_({parentName:"pre"},{className:"language-java"}),'if(fullName.length() > MAX_USERNAME_LENGTH) {\n\n        int firstNameLength = firstName.length();\n\n        //Checking if the firstname length is more than the MAX minus 2 chars.\n        //If firstname is more then the MAX minus 2 we are picking MAX minus 2 characters from the firstname.\n        if(firstNameLength > (MAX_USERNAME_LENGTH - 2)){\n            //lastNameLength represents the current pointer of lastlength.\n            for(int lastNameLength = 0 ; lastNameLength < lastName.length() ; lastNameLength++){\n                username = firstName.substring(0,(MAX_USERNAME_LENGTH-2)) + "." + lastName.charAt(lastNameLength);\n                username = username.toLowerCase();\n                if( isUnique( username )) {\n                        log.debug( "AD Create User Name | Unique username generated: " +username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateADUsername Method" );\n                        finalUserName = username;\n                        return username;\n                }\n            }\n        }\n        //If firstname is less than or equal to the MAX minus 2 chars then we are considering full firstname for username generation.\n        else{\n            //lastNameLength represents the current pointer of lastlength.\n            for(int lastNameLength = 0 ; lastNameLength < lastName.length() ; lastNameLength++){\n                username = firstName + "." + lastName.charAt(lastNameLength);\n                username = username.toLowerCase();\n                if( isUnique( username )) {\n                        log.debug( "AD Create User Name | Unique username generated: " +username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateADUsername Method" );\n                        finalUserName = username;\n                        return username;\n                }\n            }\n        }\n}\n')),(0,a.kt)("h3",_({},{id:"logic-if-the-proposed-user-name-is-within-the-max-length"}),"Logic if the Proposed User Name Is Within the Max Length"),(0,a.kt)("p",null,"If the username firstname.lastname is less than or equal to the ",(0,a.kt)("inlineCode",{parentName:"p"},"MAX_USERNAME_LENGTH"),", check it for uniqueness against active directory. If it is not unique, check uniqueness with firstname.firstLetterOfLastName, firstname.secondLetterOfLastName, etc..."),(0,a.kt)("pre",null,(0,a.kt)("code",_({parentName:"pre"},{className:"language-java"}),'//The full name is less than MAX_USERNAME_LENGTH minus 2 chars directly assign username to full name.\nusername = fullName;\nusername = username.toLowerCase();\nif( isUnique( username ) ) {\n        log.debug( "AD Create User Name | Unique username generated: " +username);\n        log.debug( "AD Create User Name | Exit from the  GenerateADUsername Method" );\n        finalUserName = username;\n        return username;\n}\nelse{\n    //If the username was not unique with firstname.last name we then check uniqueness\n    // with firstname.firstLetterOfLastName, firstname.secondLetterOfLastName e.t.c...\n    for(int lastNameLength = 0 ; lastNameLength < lastName.length() ; lastNameLength++){\n        username = firstName + "." + lastName.charAt(lastNameLength);\n        username = username.toLowerCase();\n        if( isUnique( username ) ) {\n                log.debug( "AD Create User Name | Unique username generated: " +username);\n                log.debug( "AD Create User Name | Exit from the  GenerateADUsername Method" );\n                finalUserName = username;\n                return username;\n        }\n    }\n}\n')),(0,a.kt)("h3",_({},{id:"add-function-isunique-to-check-active-directory-for-username"}),"Add Function ",(0,a.kt)("inlineCode",{parentName:"h3"},"isUnique()")," To Check Active Directory for Username"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"isUnique()")," function takes the username as a string and uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"accountExistsByDisplayName()")," function from the ISCRuleUtil class to search Active Directory and return a true or false result, depending on whether the username is taken. The function takes an application name and username to test against. The variables ",(0,a.kt)("inlineCode",{parentName:"p"},"idn")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"application")," are included as inputs to the attribute generator rule and are already initialized. Refer to ",(0,a.kt)("a",_({parentName:"p"},{href:"/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator#input"}),"inputs")," to see all inputs available to attribute generator rules."),(0,a.kt)("pre",null,(0,a.kt)("code",_({parentName:"pre"},{className:"language-java"}),"public boolean isUnique ( String username ) throws GeneralException {\n    return !idn.accountExistsByDisplayName(application.getName(), username);\n}\n")),(0,a.kt)("h3",_({},{id:"invoke-generateusername-with-the-identitys-first-and-last-name"}),"Invoke ",(0,a.kt)("inlineCode",{parentName:"h3"},"generateUsername()")," With the Identity's First and Last Name"),(0,a.kt)("p",null,"This is the final part of the rule. Call the ",(0,a.kt)("inlineCode",{parentName:"p"},"generateUsername()")," function, passing in the identity's first and last name. The ",(0,a.kt)("inlineCode",{parentName:"p"},"identity")," variable is already initialized and included as input to our attribute generator rule."),(0,a.kt)("pre",null,(0,a.kt)("code",_({parentName:"pre"},{className:"language-java"}),"return generateUsername( identity.getFirstname(), identity.getLastname() );\n")),(0,a.kt)("h2",_({},{id:"the-complete-rule"}),"The Complete Rule"),(0,a.kt)("pre",null,(0,a.kt)("code",_({parentName:"pre"},{className:"language-java"}),'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="ADUserNameGenerator" type="AttributeGenerator">\n  <Description>This will generate a unique username for active directory</Description>\n  <Source><![CDATA[\n        import sailpoint.tools.GeneralException;\n        import sailpoint.object.*;\n        import java.util.ArrayList;\n        import sailpoint.api.*;\n        import java.util.List;\n        import org.apache.commons.lang.StringUtils;\n\n        //Global constant\n        int MAX_USERNAME_LENGTH = 12;\n\n        public String generateUsername(String firstName, String lastName) {\n\n            firstName = StringUtils.trimToNull( firstName );\n            lastName = StringUtils.trimToNull( lastName );\n            String otherName = identity.getStringAttribute("otherName");\n\n            if(firstName != null){\n                firstName = firstName.replaceAll("[^a-zA-Z0-9]", "");\n            }\n\n            if(lastName != null){\n                lastName = lastName.replaceAll("[^a-zA-Z0-9]", "");\n            }\n\n            if(otherName != null){\n                otherName = otherName.replaceAll("[^a-zA-Z0-9]", "");\n            }\n\n            if ( ( firstName == null ) || ( lastName == null ) ){\n                log.debug( "AD Create User Name | Exit from generateADUsername method. No last name and other name for user" );\n                return null;\n            }\n            // If other name is available then we are using firstname as other name\n            if( !StringUtils.isEmpty(otherName) )\n                firstName = otherName;\n\n            // This will hold the final username;\n            String username = null;\n\n            log.debug( "AD Create User Name | Final first name and last name for user: " +firstName + " " +lastName );\n            // This will hold the final username;\n            String finalUserName = null;\n            String fullName = firstName + "." + lastName;\n            String newUsername = lastName;\n\n            if(fullName.length() > MAX_USERNAME_LENGTH) {\n\n                int firstNameLength = firstName.length();\n\n                //Checking if the firstname length is more than the MAX minus 2 chars.\n                //If firstname is more then the MAX minus 2 we are picking MAX minus 2 characters from the firstname.\n                if(firstNameLength > (MAX_USERNAME_LENGTH - 2)){\n                    //lastNameLength represents the current pointer of lastlength.\n                    for(int lastNameLength = 0 ; lastNameLength < lastName.length() ; lastNameLength++){\n                        username = firstName.substring(0,(MAX_USERNAME_LENGTH-2)) + "." + lastName.charAt(lastNameLength);\n                        username = username.toLowerCase();\n                        if( isUnique( username )) {\n                                log.debug( "AD Create User Name | Unique username generated: " +username);\n                                log.debug( "AD Create User Name | Exit from the  GenerateADUsername Method" );\n                                finalUserName = username;\n                                return username;\n                        }\n                    }\n                }\n                //If firstname is less than or equal to the MAX minus 2 chars then we are considering full firstname for username generation.\n                else{\n                    //lastNameLength represents the current pointer of lastlength.\n                    for(int lastNameLength = 0 ; lastNameLength < lastName.length() ; lastNameLength++){\n                        username = firstName + "." + lastName.charAt(lastNameLength);\n                        username = username.toLowerCase();\n                        if( isUnique( username )) {\n                                log.debug( "AD Create User Name | Unique username generated: " +username);\n                                log.debug( "AD Create User Name | Exit from the  GenerateADUsername Method" );\n                                finalUserName = username;\n                                return username;\n                        }\n                    }\n                }\n            } else {\n                //The full name is less than MAX_USERNAME_LENGTH minus 2 chars directly assign username to full name.\n                username = fullName;\n                username = username.toLowerCase();\n                if( isUnique( username ) ) {\n                        log.debug( "AD Create User Name | Unique username generated: " +username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateADUsername Method" );\n                        finalUserName = username;\n                        return username;\n                }\n                else{\n                    //If the username was not unique with firstname.last name we then check uniqueness\n                    // with firstname.firstLetterOfLastName, firstname.secondLetterOfLastName e.t.c...\n                    for(int lastNameLength = 0 ; lastNameLength < lastName.length() ; lastNameLength++){\n                        username = firstName + "." + lastName.charAt(lastNameLength);\n                        username = username.toLowerCase();\n                        if( isUnique( username ) ) {\n                                log.debug( "AD Create User Name | Unique username generated: " +username);\n                                log.debug( "AD Create User Name | Exit from the  GenerateADUsername Method" );\n                                finalUserName = username;\n                                return username;\n                        }\n                    }\n                }\n            }\n\n            if( finalUserName == null ) {\n                log.debug( "AD Create User Name | Exit from the  GenerateADUsername Method without generating username" );return null;\n            }\n            log.debug( "AD Create User Name | Exit from the  GenerateADUsername Method" );\n        }\n\n        public boolean isUnique ( String username ) throws GeneralException {\n            return !idn.accountExistsByDisplayName(application.getName(), username);\n        }\n\n        return generateUsername( identity.getFirstname(), identity.getLastname() );\n  ]]></Source>\n</Rule>\n')),(0,a.kt)("h2",_({},{id:"validate-the-rule"}),"Validate the Rule"),(0,a.kt)("p",null,"Before you send the rule to the professional services team to upload your rule to your tenant for use, you can send it through the rule validator to check for any errors."),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",_({parentName:"p"},{href:"https://community.sailpoint.com/t5/Professional-Services/IdentityNow-Rule-Validator/ta-p/166116"}),"Rule Validator")," for installation."),(0,a.kt)("p",null,"Run the rule validator against your newly written rule."),(0,a.kt)("pre",null,(0,a.kt)("code",_({parentName:"pre"},{className:"language-bash"}),'sp-rv --file ~/rules/Rule - AttributeGenerator - ADUserNameGenerator.xml\n\n________________________________________________________________________________\nSailPoint SaaS Rule Validator v3.0.26\nBy the SaaS Acceleration Team\n\n(c)2022-23 SailPoint Technologies Inc\n\nCommand line arguments:\n   --file {-f} = "/Users/tyler.mairose/development/identitynow-services-config/devrel/devrel.identitynow.com/rules/Rule - AttributeGenerator - ADUserNameGenerator.xml"\n\nExecuted from: /Users/tyler.mairose/Downloads/sailpoint-saas-rule-validator-3.0.26\nJar location : /Users/tyler.mairose/Downloads/sailpoint-saas-rule-validator-3.0.26\n________________________________________________________________________________\nFile name    : /Users/tyler.mairose/development/identitynow-services-config/devrel/devrel.identitynow.com/rules/Rule - AttributeGenerator - ADUserNameGenerator.xml\nRule name    : ADUserNameGenerator\nProcess date : Thu Jun 08 17:22:53 EDT 2023\n\n\n________________________________________________________________________________\n\nNo errors found.\n\nWarnings: (3)\n\n  Line 55 - [LintValidatorForStatement(31)] For statement detected: for ( int lastNameLength = 0 ; .  .  "For Loops" can cause issues when looping with incorrect exit conditions. Ensure Looping exit conditions are correct.\n    55: for ( int lastNameLength = 0 ; lastNameLength < lastName .length ( ) ; lastNameLength ++ ) {\n\n  Line 70 - [LintValidatorForStatement(31)] For statement detected: for ( int lastNameLength = 0 ; .  .  "For Loops" can cause issues when looping with incorrect exit conditions. Ensure Looping exit conditions are correct.\n    70: for ( int lastNameLength = 0 ; lastNameLength < lastName .length ( ) ; lastNameLength ++ ) {\n\n  Line 95 - [LintValidatorForStatement(31)] For statement detected: for ( int lastNameLength = 0 ; .  .  "For Loops" can cause issues when looping with incorrect exit conditions. Ensure Looping exit conditions are correct.\n    95: for ( int lastNameLength = 0 ; lastNameLength < lastName .length ( ) ; lastNameLength ++ ) {\n\n\n________________________________________________________________________________\n  Runtime stats:\n    Started validation at Thu Jun 08 17:22:53 EDT 2023\n    1 Rules Analyzed\n    0 Errors\n    3 Warnings\n\n    Finished validation at:  Thu Jun 08 17:22:53 EDT 2023\n    Process completed in 1 second.\n________________________________________________________________________________\nValidation status: SUCCESS\n________________________________________________________________________________\n')),(0,a.kt)("h2",_({},{id:"submit-for-rule-review"}),"Submit for Rule Review"),(0,a.kt)("p",null,"To submit your Cloud Rule for review, approval, and inclusion in the SailPoint platform, submit a ",(0,a.kt)("a",_({parentName:"p"},{href:"https://support.sailpoint.com/csm"}),"SailPoint support portal request")," or send an email to ",(0,a.kt)("a",_({parentName:"p"},{href:"mailto:support@sailpoint.com"}),"support@sailpoint.com"),". Attach the rule, validator output, tenant name (e.g., acme-sb.identitynow.com for sandbox or acme.identitynow.com for production) and approval for expert services to proceed. If you need assistance writing and testing rules, Expert Services can assist in that process as well. Make sure your contact information is up to date so the review team can contact you if they need to."),(0,a.kt)("h2",_({},{id:"add-rule-to-account-creation"}),"Add Rule To Account Creation"),(0,a.kt)("p",null,"Log into your ISC tenant and navigate to ",(0,a.kt)("strong",{parentName:"p"},"Admin")," -> ",(0,a.kt)("strong",{parentName:"p"},"Connections")," -> ",(0,a.kt)("strong",{parentName:"p"},"Sources")," -> ",(0,a.kt)("strong",{parentName:"p"},"{Source Name}")," -> ",(0,a.kt)("strong",{parentName:"p"},"Accounts")," -> ",(0,a.kt)("strong",{parentName:"p"},"Create Account"),". Scroll to the attribute you wish to use the rule for generating the username. Check the generator radio button and pick your new rule from the drop down."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Account Create",src:n(44553).Z,width:"951",height:"315"})),(0,a.kt)("p",null,"Now you can trigger an account creation and the attribute chosen will have its value generated by your rule."))}b.isMDXComponent=!0},44553:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/account-create-f4cb8bf58db8848acc7eff85fc160596.png"}}]);