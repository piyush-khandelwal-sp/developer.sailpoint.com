"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[43092],{94353:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>h,default:()=>b,frontMatter:()=>m,metadata:()=>c,toc:()=>N});var o=t(3905),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,w=(e,a,t)=>a in e?l(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,f=(e,a)=>{for(var t in a||(a={}))p.call(a,t)&&w(e,t,a[t]);if(n)for(var t of n(a))s.call(a,t)&&w(e,t,a[t]);return e},k=(e,a)=>r(e,i(a)),d=(e,a)=>{var t={};for(var o in e)p.call(e,o)&&a.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&n)for(var o of n(e))a.indexOf(o)<0&&s.call(e,o)&&(t[o]=e[o]);return t};const m={id:"cli-workflows",title:"Workflows",pagination_label:"CLI Workflows",sidebar_label:"Workflows",sidebar_position:9,sidebar_class_name:"cli-workflows",keywords:["cli","cli workflows","workflows"],description:"Learn how to use the CLI to create, manage, and test workflows in this guide.",slug:"/tools/cli/workflow",tags:["CLI"]},h="Workflows",c={unversionedId:"tools/cli/cli-workflows",id:"tools/cli/cli-workflows",title:"Workflows",description:"Learn how to use the CLI to create, manage, and test workflows in this guide.",source:"@site/docs/tools/cli/workflow.md",sourceDirName:"tools/cli",slug:"/tools/cli/workflow",permalink:"/docs/tools/cli/workflow",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/workflow.md",tags:[{label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1719240792,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:9,frontMatter:{id:"cli-workflows",title:"Workflows",pagination_label:"CLI Workflows",sidebar_label:"Workflows",sidebar_position:9,sidebar_class_name:"cli-workflows",keywords:["cli","cli workflows","workflows"],description:"Learn how to use the CLI to create, manage, and test workflows in this guide.",slug:"/tools/cli/workflow",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"CLI Clusters",permalink:"/docs/tools/cli/cluster"},next:{title:"CLI Templates Report",permalink:"/docs/tools/cli/templates/report"}},u={},N=[],g={toc:N},y="wrapper";function b(e){var a=e,{components:t}=a,l=d(a,["components"]);return(0,o.kt)(y,k(f(f({},g),l),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",f({},{id:"workflows"}),"Workflows"),(0,o.kt)("p",null,"Learn how to use the SailPoint CLI to create, manage, and test workflows in this guide."),(0,o.kt)("p",null,"A workflow is a set of steps that are completed whenever a specific event occurs. Once that event triggers the workflow, the workflow performs the steps within Identity Security Cloud."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow")," command makes it easy to create, manage, and test workflows from within the SailPoint CLI. To learn more about workflows, refer to ",(0,o.kt)("a",f({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/workflows/workflow-basics.html?h=workflow"}),"Workflows"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",f({parentName:"p"},{href:"#workflows"}),"Workflows")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",f({parentName:"li"},{href:"#list-workflows"}),"List workflows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",f({parentName:"li"},{href:"#get-workflow"}),"Get workflow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",f({parentName:"li"},{href:"#create-workflow"}),"Create workflow"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",f({parentName:"li"},{href:"#file-path"}),"File path")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",f({parentName:"li"},{href:"#folder-path"}),"Folder path")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",f({parentName:"li"},{href:"#update-workflow"}),"Update workflow"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",f({parentName:"li"},{href:"#file-path-1"}),"File path")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",f({parentName:"li"},{href:"#folder-path-1"}),"Folder path")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",f({parentName:"li"},{href:"#delete-workflow"}),"Delete workflow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",f({parentName:"li"},{href:"#download-workflow"}),"Download workflow"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",f({parentName:"li"},{href:"#folder"}),"Folder"))))),(0,o.kt)("h2",f({parentName:"li"},{id:"list-workflows"}),"List workflows"),(0,o.kt)("p",{parentName:"li"},"To manage workflows in the SailPoint CLI, you need to know which workflows are available, and you may need to know their IDs. Run this command to list the workflows in your tenant:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow list\n")),(0,o.kt)("p",{parentName:"li"},"The CLI will return a table of the available workflows in your tenant, with their IDs."),(0,o.kt)("p",{parentName:"li"},"This command uses the ",(0,o.kt)("a",f({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/beta/list-workflows"}),"List Workflows endpoint"),"."),(0,o.kt)("h2",f({parentName:"li"},{id:"get-workflow"}),"Get workflow"),(0,o.kt)("p",{parentName:"li"},"Once you have a workflow's ID, you can see view all its details. Run this command to get a workflow by ID:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow get {workflow ID}\n")),(0,o.kt)("p",{parentName:"li"},"Here is an example command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow get f691874a-c5a5-426d-9dd4-33129072bafa\n")),(0,o.kt)("p",{parentName:"li"},"The CLI will return the workflow, along with all its details."),(0,o.kt)("p",{parentName:"li"},"This command uses the ",(0,o.kt)("a",f({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/beta/get-workflow"}),"Get workflow endpoint"),"."),(0,o.kt)("h2",f({parentName:"li"},{id:"create-workflow"}),"Create workflow"),(0,o.kt)("p",{parentName:"li"},"To create workflows with the SailPoint CLI, you must append the ",(0,o.kt)("inlineCode",{parentName:"p"},"--file")," (",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," for short) flag to provide a file path for the workflow. Run this command to create a workflow:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow create -f {file path}\n")),(0,o.kt)("p",{parentName:"li"},"File paths are relative to the working directory, and only one workflow is allowed per file path. You can provide multiple workflows by specifying multiple file paths as arguments:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow create -f {file path} {file-path}\n")),(0,o.kt)("p",{parentName:"li"},"Here is an example command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow create -f ./workflow-file.json\n")),(0,o.kt)("p",{parentName:"li"},"Once you create the workflow, it will be located in the file path you specified."),(0,o.kt)("p",{parentName:"li"},"This command uses the ",(0,o.kt)("a",f({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/beta/create-workflow"}),"Create workflow endpoint"),"."),(0,o.kt)("h3",f({parentName:"li"},{id:"file-path"}),"File path"),(0,o.kt)("p",{parentName:"li"},"The first flag you can append when you are creating workflows is required, the ",(0,o.kt)("inlineCode",{parentName:"p"},"--file")," (",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," for short) flag. This flag specifies the file path for the workflow you are going to create."),(0,o.kt)("p",{parentName:"li"},"You can specify multiple file paths with one workflow create command."),(0,o.kt)("h3",f({parentName:"li"},{id:"folder-path"}),"Folder path"),(0,o.kt)("p",{parentName:"li"},"The second flag you can append when you are creating workflows is the ",(0,o.kt)("inlineCode",{parentName:"p"},"--directory")," (",(0,o.kt)("inlineCode",{parentName:"p"},"-d")," for short) flag. Appending the ",(0,o.kt)("inlineCode",{parentName:"p"},"-d")," flag specifies a directory, or folder path, of workflows to contain the created workflow."),(0,o.kt)("p",{parentName:"li"},"Here is what the command looks like with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-d")," flag:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow create -d {folder-path}\n")),(0,o.kt)("p",{parentName:"li"},"You can also provide multiple workflow directories by specifying multiple folder paths as arguments:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow create -d {folder-path} {folder-path}\n")),(0,o.kt)("h2",f({parentName:"li"},{id:"update-workflow"}),"Update workflow"),(0,o.kt)("p",{parentName:"li"},"To update workflows with the SailPoint CLI, you must append the ",(0,o.kt)("inlineCode",{parentName:"p"},"--file")," (",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," for short) flag to provide a file path for the updated workflow. Run this command to update a workflow:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow update -f {file-path}\n")),(0,o.kt)("p",{parentName:"li"},"You can also provide multiple workflows by specifying multiple file paths as arguments:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow update -f {file-path} {file-path}\n")),(0,o.kt)("p",{parentName:"li"},"Here is an example command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow create -f ./workflow-file.json\n")),(0,o.kt)("p",{parentName:"li"},"The updated workflow will be located in the file path you specified."),(0,o.kt)("p",{parentName:"li"},"This command uses the ",(0,o.kt)("a",f({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/beta/update-workflow"}),"Update workflow endpoint"),"."),(0,o.kt)("h3",f({parentName:"li"},{id:"file-path-1"}),"File path"),(0,o.kt)("p",{parentName:"li"},"The first flag you can append when you are creating workflows is required, the ",(0,o.kt)("inlineCode",{parentName:"p"},"--file")," (",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," for short) flag. This flag specifies the file path for the workflow you are going to update."),(0,o.kt)("p",{parentName:"li"},"You can specify multiple file paths with one workflow update command."),(0,o.kt)("h3",f({parentName:"li"},{id:"folder-path-1"}),"Folder path"),(0,o.kt)("p",{parentName:"li"},"The second flag you can append when you are updating workflows is the ",(0,o.kt)("inlineCode",{parentName:"p"},"--directory")," (",(0,o.kt)("inlineCode",{parentName:"p"},"-d")," for short) flag. Appending the ",(0,o.kt)("inlineCode",{parentName:"p"},"-d")," flag specifies a directory, or folder path, of workflows to contain the updated workflow."),(0,o.kt)("p",{parentName:"li"},"Here is what the command looks like with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-d")," flag:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow update -d {folder-path}\n")),(0,o.kt)("p",{parentName:"li"},"You can also provide multiple workflow directories by specifying multiple folder paths as arguments:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow update -d {folder-path} {folder-path}\n")),(0,o.kt)("h2",f({parentName:"li"},{id:"delete-workflow"}),"Delete workflow"),(0,o.kt)("p",{parentName:"li"},"To delete workflows with the SailPoint CLI, you must specify the ID of the workflow you want to delete. Run this command to delete a workflow:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow delete id1\n")),(0,o.kt)("p",{parentName:"li"},"You can also delete multiple workflows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow delete id1 id2\n")),(0,o.kt)("p",{parentName:"li"},"You can also delete a list of workflows specified in a file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow delete $(cat list_of_workflowIDs.txt)\n")),(0,o.kt)("p",{parentName:"li"},"This command uses the ",(0,o.kt)("a",f({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/beta/delete-workflow"}),"Delete workflow endpoint"),"."),(0,o.kt)("h2",f({parentName:"li"},{id:"download-workflow"}),"Download workflow"),(0,o.kt)("p",{parentName:"li"},"To download workflows with the SailPoint CLI, run this command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow download\n")),(0,o.kt)("p",{parentName:"li"},'Running this command downloads the available workflow files to the default folder, "workflows".'),(0,o.kt)("h3",f({parentName:"li"},{id:"folder"}),"Folder"),(0,o.kt)("p",{parentName:"li"},'By default, workflows downloaded from the CLI are located in the folder, "workflows". To change the folder the workflows are downloaded to, append the ',(0,o.kt)("inlineCode",{parentName:"p"},"-f")," flag to the command, as shown in this example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"sail workflow download -f my-workflows\n")),(0,o.kt)("p",{parentName:"li"},"Running this command downloads the available workflow files."))))}b.isMDXComponent=!0}}]);