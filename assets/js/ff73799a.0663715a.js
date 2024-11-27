"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[80610],{34800:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>h,toc:()=>g});var n=i(87462),a=(i(67294),i(3905)),s=i(26389),r=i(94891),o=i(75190),d=i(47507),m=i(24310),c=i(63303),u=(i(75035),i(85162));const l={id:"unsubscribe",title:"Client unsubscribing from information pushes",description:"Client unsubscribing from information pushes",sidebar_label:"Client unsubscribing from information pushes",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Unsubscribe",parameters:[{name:"messageId",in:"path",description:"which message to unsubscribe from",required:!0,schema:{type:"string",format:"uuid4"}}],responses:{200:{content:{"application/json":{schema:{description:"Aspect Model to request a production forecast",type:"object",properties:{request:{description:"Data model for a request",type:"object",properties:{offset:{description:'Send/start time of the first message/notification\n- "0" ==> immediate response',type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},customerId:{description:"Internal customer Id",type:"string",pattern:"^BPNL[0-9]{8}[a-zA-Z0-9]{4}$"},precisionOfForecast:{description:"Accuracy of the time specification of the completion date.\n- default: implicitly defined by production\n- only as a REQUEST of the requester since it cannot be guaranteed that the store floor can provide the data in this accuracy.",type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},productionForecastForAll:{description:"Boolean variable that detemines whether the customer request information about each position of an order, or information about the complete order",type:"boolean"},orderId:{description:"The Id identifying subject of the request",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},deviationOfSchedule:{description:'Mandatory property for the notification mode. The property specifies the deviation from targeted delivery date that must be met to send a notification to a subscriber\n\nmandatory for CommunicationMode = "notification"',type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},notificationInterval:{description:'Interval time that either specifies the cyclic send time or limits the notification time\nmandatory for CommunicationMode = "cyclic"',type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},communicationMode:{description:"Specification of the communication mode",type:"string",enum:["synchronous","cyclic","notification"]},version:{description:"The unique identifier of the aspect model defining the structure and the semantics of the message's header. The version number should reflect the versioning schema of aspect models in Catena-X.",type:"string",pattern:"^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(.[0-9A-Za-z-]+)*)?([0-9A-Za-z-]+(.[0-9A-Za-z-]+)*)?$"}},required:["offset","customerId","productionForecastForAll","orderId","communicationMode","version"]},header:{description:"Contains standardized attributes for message processing common across several use cases.",type:"object",properties:{messageId:{description:"Unique ID identifying the message. The purpose of the ID is to uniquely identify a single message, therefore it MUST not be reused.",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},context:{description:"Information about the context the message should be considered in.\nThe value MUST consist of two parts: an identifier of the context (e.g. business domain, etc.) followed by a version number.\nBoth the identifier and the version number MUST correspond to the content of the message.\nIf the content of a message is described by an aspect model available in the Catena-X Semantic Hub, then the unique identifier of this semantic model (e.g. urn:samm:io.catenax.<ASPECT-MODEL-NAME>:1.x.x) MUST be used as a value of the context field. This is considered the default case.\nIn all other cases the value of the context field MUST follow the pattern <domain>-<subdomain>-<object>:<[major] version> (e.g. TRACE-QM-Alert:1.x.x).\nVersioning only refers to major versions in both default and fallback cases.\nNote: The version of the message's header is specified in the version field.",type:"string"},sentDateTime:{description:"Time zone aware timestamp holding the date and the time the message was sent by the sending party. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](.[0-9]+)?|(24:00:00(.0+)?))(Z|(+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},senderBpn:{description:"The Business Partner Number of the sending party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard",type:"string",pattern:"^BPNL[0-9]{8}[a-zA-Z0-9]{4}$"},receiverBpn:{description:"The Business Partner Number of the receiving party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard.",type:"string",pattern:"^BPNL[0-9]{8}[a-zA-Z0-9]{4}$"},expectedResponseBy:{description:"Time zone aware timestamp holding the date and time by which the sending party expects a certain type of response from the receiving party. The meaning and interpretation of the fields's value are context-bound and MUST therefore be defined by any business domain or platform capability making use of it. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](.[0-9]+)?|(24:00:00(.0+)?))(Z|(+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},relatedMessageId:{description:"Unique ID identifying a message somehow related to the current one",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},version:{description:"The unique identifier of the aspect model defining the structure and the semantics of the message's header. The version number should reflect the versioning schema of aspect models in Catena-X.",type:"string",pattern:"^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(.[0-9A-Za-z-]+)*)?([0-9A-Za-z-]+(.[0-9A-Za-z-]+)*)?$"}},required:["messageId","context","sentDateTime","senderBpn","receiverBpn","version"]}},required:["header"]}}},description:"The request was successful."},401:{description:"Payload or user input is invalid. See error details in the payload for more.",content:{"application/json":{schema:{type:"object",required:["error"],properties:{error:{type:"object",required:["details"],properties:{message:{type:"string",minLength:1},path:{type:"string",minLength:1},details:{type:"object",minLength:1,additionalProperties:{type:"object"}},code:{type:"string",nullable:!0}}}}}}}},402:{description:"The requesting user or client is not authenticated."},403:{description:"The requesting user or client is not authorized to access resources for the given tenant."},404:{description:"The requested Twin has not been found."}},description:"Client unsubscribing from information pushes",method:"delete",path:"/relatedMessageId/{messageId}",servers:[{url:"catenax.io/api/v2",variables:{"api-version":{default:"v2"}}}],info:{title:"Get Production Forecast",version:"v2"},postman:{name:"Client unsubscribing from information pushes",description:{type:"text/plain"},url:{path:["relatedMessageId",":messageId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) which message to unsubscribe from",type:"text/plain"},type:"any",value:"",key:"messageId"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/Modular Production Kit/Software Development View/Provider//get-production-forecast",custom_edit_url:null},p=void 0,h={unversionedId:"kits/Modular Production Kit/Software Development View/Provider/unsubscribe",id:"version-24.08/kits/Modular Production Kit/Software Development View/Provider/unsubscribe",title:"Client unsubscribing from information pushes",description:"Client unsubscribing from information pushes",source:"@site/docs-kits_versioned_docs/version-24.08/kits/Modular Production Kit/Software Development View/Provider/unsubscribe.api.mdx",sourceDirName:"kits/Modular Production Kit/Software Development View/Provider",slug:"/kits/Modular Production Kit/Software Development View/Provider/unsubscribe",permalink:"/docs-kits/kits/Modular Production Kit/Software Development View/Provider/unsubscribe",draft:!1,editUrl:null,tags:[],version:"24.08",frontMatter:{id:"unsubscribe",title:"Client unsubscribing from information pushes",description:"Client unsubscribing from information pushes",sidebar_label:"Client unsubscribing from information pushes",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Unsubscribe",parameters:[{name:"messageId",in:"path",description:"which message to unsubscribe from",required:!0,schema:{type:"string",format:"uuid4"}}],responses:{200:{content:{"application/json":{schema:{description:"Aspect Model to request a production forecast",type:"object",properties:{request:{description:"Data model for a request",type:"object",properties:{offset:{description:'Send/start time of the first message/notification\n- "0" ==> immediate response',type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},customerId:{description:"Internal customer Id",type:"string",pattern:"^BPNL[0-9]{8}[a-zA-Z0-9]{4}$"},precisionOfForecast:{description:"Accuracy of the time specification of the completion date.\n- default: implicitly defined by production\n- only as a REQUEST of the requester since it cannot be guaranteed that the store floor can provide the data in this accuracy.",type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},productionForecastForAll:{description:"Boolean variable that detemines whether the customer request information about each position of an order, or information about the complete order",type:"boolean"},orderId:{description:"The Id identifying subject of the request",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},deviationOfSchedule:{description:'Mandatory property for the notification mode. The property specifies the deviation from targeted delivery date that must be met to send a notification to a subscriber\n\nmandatory for CommunicationMode = "notification"',type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},notificationInterval:{description:'Interval time that either specifies the cyclic send time or limits the notification time\nmandatory for CommunicationMode = "cyclic"',type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},communicationMode:{description:"Specification of the communication mode",type:"string",enum:["synchronous","cyclic","notification"]},version:{description:"The unique identifier of the aspect model defining the structure and the semantics of the message's header. The version number should reflect the versioning schema of aspect models in Catena-X.",type:"string",pattern:"^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(.[0-9A-Za-z-]+)*)?([0-9A-Za-z-]+(.[0-9A-Za-z-]+)*)?$"}},required:["offset","customerId","productionForecastForAll","orderId","communicationMode","version"]},header:{description:"Contains standardized attributes for message processing common across several use cases.",type:"object",properties:{messageId:{description:"Unique ID identifying the message. The purpose of the ID is to uniquely identify a single message, therefore it MUST not be reused.",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},context:{description:"Information about the context the message should be considered in.\nThe value MUST consist of two parts: an identifier of the context (e.g. business domain, etc.) followed by a version number.\nBoth the identifier and the version number MUST correspond to the content of the message.\nIf the content of a message is described by an aspect model available in the Catena-X Semantic Hub, then the unique identifier of this semantic model (e.g. urn:samm:io.catenax.<ASPECT-MODEL-NAME>:1.x.x) MUST be used as a value of the context field. This is considered the default case.\nIn all other cases the value of the context field MUST follow the pattern <domain>-<subdomain>-<object>:<[major] version> (e.g. TRACE-QM-Alert:1.x.x).\nVersioning only refers to major versions in both default and fallback cases.\nNote: The version of the message's header is specified in the version field.",type:"string"},sentDateTime:{description:"Time zone aware timestamp holding the date and the time the message was sent by the sending party. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},senderBpn:{description:"The Business Partner Number of the sending party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard",type:"string",pattern:"^BPNL[0-9]{8}[a-zA-Z0-9]{4}$"},receiverBpn:{description:"The Business Partner Number of the receiving party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard.",type:"string",pattern:"^BPNL[0-9]{8}[a-zA-Z0-9]{4}$"},expectedResponseBy:{description:"Time zone aware timestamp holding the date and time by which the sending party expects a certain type of response from the receiving party. The meaning and interpretation of the fields's value are context-bound and MUST therefore be defined by any business domain or platform capability making use of it. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},relatedMessageId:{description:"Unique ID identifying a message somehow related to the current one",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},version:{description:"The unique identifier of the aspect model defining the structure and the semantics of the message's header. The version number should reflect the versioning schema of aspect models in Catena-X.",type:"string",pattern:"^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(.[0-9A-Za-z-]+)*)?([0-9A-Za-z-]+(.[0-9A-Za-z-]+)*)?$"}},required:["messageId","context","sentDateTime","senderBpn","receiverBpn","version"]}},required:["header"]}}},description:"The request was successful."},401:{description:"Payload or user input is invalid. See error details in the payload for more.",content:{"application/json":{schema:{type:"object",required:["error"],properties:{error:{type:"object",required:["details"],properties:{message:{type:"string",minLength:1},path:{type:"string",minLength:1},details:{type:"object",minLength:1,additionalProperties:{type:"object"}},code:{type:"string",nullable:!0}}}}}}}},402:{description:"The requesting user or client is not authenticated."},403:{description:"The requesting user or client is not authorized to access resources for the given tenant."},404:{description:"The requested Twin has not been found."}},description:"Client unsubscribing from information pushes",method:"delete",path:"/relatedMessageId/{messageId}",servers:[{url:"catenax.io/api/v2",variables:{"api-version":{default:"v2"}}}],info:{title:"Get Production Forecast",version:"v2"},postman:{name:"Client unsubscribing from information pushes",description:{type:"text/plain"},url:{path:["relatedMessageId",":messageId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) which message to unsubscribe from",type:"text/plain"},type:"any",value:"",key:"messageId"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/Modular Production Kit/Software Development View/Provider//get-production-forecast",custom_edit_url:null},sidebar:"kits",previous:{title:"getGetProductionTracking",permalink:"/docs-kits/kits/Modular Production Kit/Software Development View/Provider/get-get-production-tracking"},next:{title:"Manufacturing as a Service KIT",permalink:"/docs-kits/category/manufacturing-as-a-service-kit"}},f={},g=[{value:"Client unsubscribing from information pushes",id:"client-unsubscribing-from-information-pushes",level:2}],y={toc:g};function b(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"client-unsubscribing-from-information-pushes"},"Client unsubscribing from information pushes"),(0,a.kt)("p",null,"Client unsubscribing from information pushes"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"messageId",in:"path",description:"which message to unsubscribe from",required:!0,schema:{type:"string",format:"uuid4"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"The request was successful.")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"request"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Data model for a request")),(0,a.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"offset"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Send/start time of the first message/notification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"0" ==',">"," immediate response"))),(0,a.kt)(m.Z,{collapsible:!1,name:"timeUnit",required:!1,deprecated:void 0,schemaDescription:"Specifies the unit in which the time is represented",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `[a-zA-Z]*:[a-zA-Z]+`, [`unit:secondUnitOfTime`, `unit:minuteUnitOfTime`, `unit:hour`, `unit:day`, `unit:week`, `unit:month`, `unit:year`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:"The amount of timeUnits considered",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(m.Z,{collapsible:!1,name:"customerId",required:!1,deprecated:void 0,schemaDescription:"Internal customer Id",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^BPNL[0-9]{8}[a-zA-Z0-9]{4}$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"precisionOfForecast"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Accuracy of the time specification of the completion date."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"default: implicitly defined by production"),(0,a.kt)("li",{parentName:"ul"},"only as a REQUEST of the requester since it cannot be guaranteed that the store floor can provide the data in this accuracy."))),(0,a.kt)(m.Z,{collapsible:!1,name:"timeUnit",required:!1,deprecated:void 0,schemaDescription:"Specifies the unit in which the time is represented",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `[a-zA-Z]*:[a-zA-Z]+`, [`unit:secondUnitOfTime`, `unit:minuteUnitOfTime`, `unit:hour`, `unit:day`, `unit:week`, `unit:month`, `unit:year`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:"The amount of timeUnits considered",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(m.Z,{collapsible:!1,name:"productionForecastForAll",required:!1,deprecated:void 0,schemaDescription:"Boolean variable that detemines whether the customer request information about each position of an order, or information about the complete order",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"orderId",required:!1,deprecated:void 0,schemaDescription:"The Id identifying subject of the request",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"deviationOfSchedule"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Mandatory property for the notification mode. The property specifies the deviation from targeted delivery date that must be met to send a notification to a subscriber"),(0,a.kt)("p",null,'mandatory for CommunicationMode = "notification"')),(0,a.kt)(m.Z,{collapsible:!1,name:"timeUnit",required:!1,deprecated:void 0,schemaDescription:"Specifies the unit in which the time is represented",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `[a-zA-Z]*:[a-zA-Z]+`, [`unit:secondUnitOfTime`, `unit:minuteUnitOfTime`, `unit:hour`, `unit:day`, `unit:week`, `unit:month`, `unit:year`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:"The amount of timeUnits considered",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"notificationInterval"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,'Interval time that either specifies the cyclic send time or limits the notification time\nmandatory for CommunicationMode = "cyclic"')),(0,a.kt)(m.Z,{collapsible:!1,name:"timeUnit",required:!1,deprecated:void 0,schemaDescription:"Specifies the unit in which the time is represented",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `[a-zA-Z]*:[a-zA-Z]+`, [`unit:secondUnitOfTime`, `unit:minuteUnitOfTime`, `unit:hour`, `unit:day`, `unit:week`, `unit:month`, `unit:year`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:"The amount of timeUnits considered",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(m.Z,{collapsible:!1,name:"communicationMode",required:!1,deprecated:void 0,schemaDescription:"Specification of the communication mode",schemaName:"string",qualifierMessage:"**Possible values:** [`synchronous`, `cyclic`, `notification`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"version",required:!1,deprecated:void 0,schemaDescription:"The unique identifier of the aspect model defining the structure and the semantics of the message's header. The version number should reflect the versioning schema of aspect models in Catena-X.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(.[0-9A-Za-z-]+)*)?([0-9A-Za-z-]+(.[0-9A-Za-z-]+)*)?$`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"header"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Contains standardized attributes for message processing common across several use cases.")),(0,a.kt)(m.Z,{collapsible:!1,name:"messageId",required:!1,deprecated:void 0,schemaDescription:"Unique ID identifying the message. The purpose of the ID is to uniquely identify a single message, therefore it MUST not be reused.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"context",required:!1,deprecated:void 0,schemaDescription:"Information about the context the message should be considered in.\nThe value MUST consist of two parts: an identifier of the context (e.g. business domain, etc.) followed by a version number.\nBoth the identifier and the version number MUST correspond to the content of the message.\nIf the content of a message is described by an aspect model available in the Catena-X Semantic Hub, then the unique identifier of this semantic model (e.g. urn:samm:io.catenax.<ASPECT-MODEL-NAME>:1.x.x) MUST be used as a value of the context field. This is considered the default case.\nIn all other cases the value of the context field MUST follow the pattern <domain>-<subdomain>-<object>:<[major] version> (e.g. TRACE-QM-Alert:1.x.x).\nVersioning only refers to major versions in both default and fallback cases.\nNote: The version of the message's header is specified in the version field.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"sentDateTime",required:!1,deprecated:void 0,schemaDescription:"Time zone aware timestamp holding the date and the time the message was sent by the sending party. The value MUST be formatted according to the ISO 8601 standard",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"senderBpn",required:!1,deprecated:void 0,schemaDescription:"The Business Partner Number of the sending party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^BPNL[0-9]{8}[a-zA-Z0-9]{4}$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"receiverBpn",required:!1,deprecated:void 0,schemaDescription:"The Business Partner Number of the receiving party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^BPNL[0-9]{8}[a-zA-Z0-9]{4}$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"expectedResponseBy",required:!1,deprecated:void 0,schemaDescription:"Time zone aware timestamp holding the date and time by which the sending party expects a certain type of response from the receiving party. The meaning and interpretation of the fields's value are context-bound and MUST therefore be defined by any business domain or platform capability making use of it. The value MUST be formatted according to the ISO 8601 standard",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"relatedMessageId",required:!1,deprecated:void 0,schemaDescription:"Unique ID identifying a message somehow related to the current one",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"version",required:!1,deprecated:void 0,schemaDescription:"The unique identifier of the aspect model defining the structure and the semantics of the message's header. The version number should reflect the versioning schema of aspect models in Catena-X.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(.[0-9A-Za-z-]+)*)?([0-9A-Za-z-]+(.[0-9A-Za-z-]+)*)?$`",defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,a.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(d.Z,{responseExample:'{\n  "request": {\n    "offset": {\n      "timeUnit": "unit:secondUnitOfTime",\n      "value": 0\n    },\n    "customerId": "string",\n    "precisionOfForecast": {\n      "timeUnit": "unit:secondUnitOfTime",\n      "value": 0\n    },\n    "productionForecastForAll": true,\n    "orderId": "string",\n    "deviationOfSchedule": {\n      "timeUnit": "unit:secondUnitOfTime",\n      "value": 0\n    },\n    "notificationInterval": {\n      "timeUnit": "unit:secondUnitOfTime",\n      "value": 0\n    },\n    "communicationMode": "synchronous",\n    "version": "string"\n  },\n  "header": {\n    "messageId": "string",\n    "context": "string",\n    "sentDateTime": "string",\n    "senderBpn": "string",\n    "receiverBpn": "string",\n    "expectedResponseBy": "string",\n    "relatedMessageId": "string",\n    "version": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(u.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Payload or user input is invalid. See error details in the payload for more.")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"error"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(m.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"details"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"non-empty"))),(0,a.kt)("li",null,(0,a.kt)("div",null,(0,a.kt)("code",null,"property name*"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,a.kt)(m.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,a.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(d.Z,{responseExample:'{\n  "error": {\n    "message": "string",\n    "path": "string",\n    "details": {},\n    "code": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(u.Z,{label:"402",value:"402",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"The requesting user or client is not authenticated.")),(0,a.kt)("div",null)),(0,a.kt)(u.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"The requesting user or client is not authorized to access resources for the given tenant.")),(0,a.kt)("div",null)),(0,a.kt)(u.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"The requested Twin has not been found.")),(0,a.kt)("div",null)))))}b.isMDXComponent=!0}}]);