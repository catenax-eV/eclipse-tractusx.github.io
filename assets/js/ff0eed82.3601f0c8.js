"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[44537],{26499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>v});var s=a(87462),i=(a(67294),a(3905)),d=a(26389),n=a(94891),r=a(75190),o=a(47507),l=(a(24310),a(63303)),c=(a(75035),a(85162));const p={id:"get-data-address-by-asset-id",title:"Gets a data address of an asset with the given ID",description:"Gets a data address of an asset with the given ID",sidebar_label:"Gets a data address of an asset with the given ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset V2"],operationId:"getDataAddressByAssetId",parameters:[{name:"assetId",in:"path",required:!0,schema:{type:"string"}},{name:"connectorUrl",in:"header",required:!1,schema:{type:"string",default:""}}],responses:{200:{description:"The data address",content:{"application/json":{schema:{type:"object"}}}},400:{description:"Request was malformed, e.g. id was null"},404:{description:"An asset with the given ID does not exist"}},description:"Gets a data address of an asset with the given ID",method:"get",path:"/v2/assets/{assetId}/dataaddress",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Gets a data address of an asset with the given ID",description:{type:"text/plain"},url:{path:["v2","assets",":assetId","dataaddress"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"assetId"}]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"connectorUrl",value:""},{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},m=void 0,u={unversionedId:"kits/Data Governance Kit/resources/MDX Files/get-data-address-by-asset-id",id:"version-24.05/kits/Data Governance Kit/resources/MDX Files/get-data-address-by-asset-id",title:"Gets a data address of an asset with the given ID",description:"Gets a data address of an asset with the given ID",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Data Governance Kit/resources/MDX Files/get-data-address-by-asset-id.api.mdx",sourceDirName:"kits/Data Governance Kit/resources/MDX Files",slug:"/kits/Data Governance Kit/resources/MDX Files/get-data-address-by-asset-id",permalink:"/docs-kits/24.05/kits/Data Governance Kit/resources/MDX Files/get-data-address-by-asset-id",draft:!1,editUrl:null,tags:[],version:"24.05",frontMatter:{id:"get-data-address-by-asset-id",title:"Gets a data address of an asset with the given ID",description:"Gets a data address of an asset with the given ID",sidebar_label:"Gets a data address of an asset with the given ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset V2"],operationId:"getDataAddressByAssetId",parameters:[{name:"assetId",in:"path",required:!0,schema:{type:"string"}},{name:"connectorUrl",in:"header",required:!1,schema:{type:"string",default:""}}],responses:{200:{description:"The data address",content:{"application/json":{schema:{type:"object"}}}},400:{description:"Request was malformed, e.g. id was null"},404:{description:"An asset with the given ID does not exist"}},description:"Gets a data address of an asset with the given ID",method:"get",path:"/v2/assets/{assetId}/dataaddress",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Gets a data address of an asset with the given ID",description:{type:"text/plain"},url:{path:["v2","assets",":assetId","dataaddress"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"assetId"}]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"connectorUrl",value:""},{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},sidebar:"kits",previous:{title:"Gets a list of contract definitions",permalink:"/docs-kits/24.05/kits/Data Governance Kit/resources/MDX Files/get-contract-definitions"},next:{title:"Gets policies by a list of IDs",permalink:"/docs-kits/24.05/kits/Data Governance Kit/resources/MDX Files/get-policies-by-id-list"}},h={},v=[{value:"Gets a data address of an asset with the given ID",id:"gets-a-data-address-of-an-asset-with-the-given-id",level:2}],k={toc:v};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gets-a-data-address-of-an-asset-with-the-given-id"},"Gets a data address of an asset with the given ID"),(0,i.kt)("p",null,"Gets a data address of an asset with the given ID"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"assetId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"connectorUrl",in:"header",required:!1,schema:{type:"string",default:""}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(d.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The data address")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request was malformed, e.g. id was null")),(0,i.kt)("div",null)),(0,i.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An asset with the given ID does not exist")),(0,i.kt)("div",null)))))}g.isMDXComponent=!0}}]);