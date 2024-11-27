"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[34700],{81799:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>k,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var a=s(87462),i=(s(67294),s(3905)),r=s(26389),n=s(94891),l=s(75190),o=s(47507),d=s(24310),p=s(63303),m=(s(75035),s(85162));const c={id:"get-asset-by-id-1",title:"Gets an asset with the given ID",description:"Gets an asset with the given ID",sidebar_label:"Gets an asset with the given ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["DGK Asset"],operationId:"getAssetById_1",parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"The asset",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{createdAt:{type:"string",format:"date-time"},createdBy:{type:"string"},modifiedAt:{type:"string",format:"date-time"},modifiedBy:{type:"string"},isDeleted:{type:"boolean"},id:{type:"string"},properties:{type:"object",additionalProperties:{type:"object"}},privateProperties:{type:"object",additionalProperties:{type:"object"}},dataAddress:{type:"object",properties:{properties:{type:"object",additionalProperties:{type:"object"}}}},governanceStatus:{type:"string"},syncStatus:{type:"string"}}}}}}}}}}},404:{description:"Asset with given id is not found",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},description:"Gets an asset with the given ID",method:"get",path:"/assets/{id}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Gets an asset with the given ID",description:{type:"text/plain"},url:{path:["assets",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},y=void 0,u={unversionedId:"kits/Data Governance Kit/resources/MDX Files/get-asset-by-id-1",id:"version-24.08/kits/Data Governance Kit/resources/MDX Files/get-asset-by-id-1",title:"Gets an asset with the given ID",description:"Gets an asset with the given ID",source:"@site/docs-kits_versioned_docs/version-24.08/kits/Data Governance Kit/resources/MDX Files/get-asset-by-id-1.api.mdx",sourceDirName:"kits/Data Governance Kit/resources/MDX Files",slug:"/kits/Data Governance Kit/resources/MDX Files/get-asset-by-id-1",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-asset-by-id-1",draft:!1,editUrl:null,tags:[],version:"24.08",frontMatter:{id:"get-asset-by-id-1",title:"Gets an asset with the given ID",description:"Gets an asset with the given ID",sidebar_label:"Gets an asset with the given ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["DGK Asset"],operationId:"getAssetById_1",parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"The asset",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{createdAt:{type:"string",format:"date-time"},createdBy:{type:"string"},modifiedAt:{type:"string",format:"date-time"},modifiedBy:{type:"string"},isDeleted:{type:"boolean"},id:{type:"string"},properties:{type:"object",additionalProperties:{type:"object"}},privateProperties:{type:"object",additionalProperties:{type:"object"}},dataAddress:{type:"object",properties:{properties:{type:"object",additionalProperties:{type:"object"}}}},governanceStatus:{type:"string"},syncStatus:{type:"string"}}}}}}}}}}},404:{description:"Asset with given id is not found",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},description:"Gets an asset with the given ID",method:"get",path:"/assets/{id}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Gets an asset with the given ID",description:{type:"text/plain"},url:{path:["assets",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},sidebar:"kits",previous:{title:"generateToken",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/generate-token"},next:{title:"Gets an asset with the given ID",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-asset-by-id"}},v={},g=[{value:"Gets an asset with the given ID",id:"gets-an-asset-with-the-given-id",level:2}],h={toc:g};function k(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gets-an-asset-with-the-given-id"},"Gets an asset with the given ID"),(0,i.kt)("p",null,"Gets an asset with the given ID"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The asset")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"result"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"items"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"createdBy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"modifiedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"modifiedBy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"isDeleted",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"privateProperties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"dataAddress"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))))))))),(0,i.kt)(d.Z,{collapsible:!1,name:"governanceStatus",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"syncStatus",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": {\n    "items": [\n      {\n        "createdAt": "2024-02-27",\n        "createdBy": "string",\n        "modifiedAt": "2024-02-27",\n        "modifiedBy": "string",\n        "isDeleted": true,\n        "id": "string",\n        "properties": {},\n        "privateProperties": {},\n        "dataAddress": {\n          "properties": {}\n        },\n        "governanceStatus": "string",\n        "syncStatus": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Asset with given id is not found")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);