"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[35719],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=i,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},77970:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:7,title:"Detailed Architecture"},o=void 0,l={unversionedId:"kits/knowledge-agents/development-view/Arc42",id:"version-24.08/kits/knowledge-agents/development-view/Arc42",title:"Detailed Architecture",description:"\x3c!--",source:"@site/docs-kits_versioned_docs/version-24.08/kits/knowledge-agents/development-view/Arc42.md",sourceDirName:"kits/knowledge-agents/development-view",slug:"/kits/knowledge-agents/development-view/Arc42",permalink:"/docs-kits/kits/knowledge-agents/development-view/Arc42",draft:!1,tags:[],version:"24.08",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Detailed Architecture"},sidebar:"kits",previous:{title:"High-Level Architecture",permalink:"/docs-kits/kits/knowledge-agents/development-view/architecture"},next:{title:"Ontology Modelling",permalink:"/docs-kits/kits/knowledge-agents/development-view/modelling"}},s={},c=[{value:"Agents KIT",id:"agents-kit",level:2},{value:"Introduction and Goals",id:"introduction-and-goals",level:2},{value:"Constraints",id:"constraints",level:2},{value:"Context and Scope",id:"context-and-scope",level:2},{value:"Solution Strategy",id:"solution-strategy",level:2},{value:"Building Block View",id:"building-block-view",level:2},{value:"Runtime View",id:"runtime-view",level:2},{value:"Deployment View",id:"deployment-view",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"agents-kit"},"Agents KIT"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Agents Kit Banner",src:a(3389).Z,width:"286",height:"244"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arc42 for federated queries over the whole data space.")),(0,i.kt)("p",null,"For more information see"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Our ",(0,i.kt)("a",{parentName:"li",href:"../adoption-view/intro"},"Adoption")," guideline"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"architecture"},"High-Level")," architecture"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"modelling"},"Ontology")," modelling guide"),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("a",{parentName:"li",href:"api"},"API")," specification"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"modules"},"Layers & Modules")," Architecture"),(0,i.kt)("li",{parentName:"ul"},"Our ",(0,i.kt)("a",{parentName:"li",href:"reference"},"Reference Implementation")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"../operation-view/deployment"},"Deployment")," guide")),(0,i.kt)("h2",{id:"introduction-and-goals"},"Introduction and Goals"),(0,i.kt)("p",null,"The main objective concerning the approach described in this section is to create a state-of-the-art compute-to-data architecture for automotive use cases (and beyond) based on standards and best practices around GAIA-X and W3C. To reach this aim, full semantic integration, search and query with focus on relations between entities and data sovereignty is focused. In contrast to a simple file-based data transfer, this shifts the responsibility for the access, authorization to the data and processing of the data from the application development to the provider and hence ultimately, the actual owner of the data. To achieve this aim, the Knowledge Agent standard shall achieve the following abilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ability to define well-formed and composable computations/scripts (skills) which operate over various assets of various business partners."),(0,i.kt)("li",{parentName:"ul"},"the ability to invoke and dynamically distribute these (sub-)skills over the relevant partners/connectors using an extensible agent interface."),(0,i.kt)("li",{parentName:"ul"},'the ability to safely provide data and service assets via appropriate agent implementations which "bind" the skill to the backend execution engines (rather than mapping data).'),(0,i.kt)("li",{parentName:"ul"},"the ability for an agent/connector/business partner to decide",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"whether to hide particular data and computations inside a sub-skill"),(0,i.kt)("li",{parentName:"ul"},"whether to delegate/federate particular computations/sub-skills to other agents"),(0,i.kt)("li",{parentName:"ul"},"whether to migrate or clone an agent/asset from a partner"))),(0,i.kt)("li",{parentName:"ul"},"the ability to describe data and service assets as well as appropriate federation policies in the IDS vocabulary in order to allow for a dynamic matchmaking of skills and agents."),(0,i.kt)("li",{parentName:"ul"},"the ability to define domain/use case-based ontologies which form the vocabulary used in the skill definitions."),(0,i.kt)("li",{parentName:"ul"},"the ability to visualize and develop the ontologies and skills in appropriate SDKs and User Experience components.")),(0,i.kt)("p",null,"See also the KIT ",(0,i.kt)("a",{parentName:"p",href:"../adoption-view/intro"},"Introduction")," section and The ",(0,i.kt)("a",{parentName:"p",href:"architecture"},"High-Level Architecture"),"."),(0,i.kt)("h2",{id:"constraints"},"Constraints"),(0,i.kt)("p",null,"The Knowledge Agents Architecture is based on the Catena-X Dataspace Architecture with a specific focus on the Eclipse Dataspace Connector (EDC). It integrates with Catena-X Portal/Core Services & Identity Management principles and supports the typical interaction models as required by Catena-X Use Cases, such as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Traceability with Focus on Low-Volume Bills-Of-Material Data and Deep Supply Chains with One-Up and One-Down Visibility"),(0,i.kt)("li",{parentName:"ul"},"Behaviour Twin with Focus on High-Volume Telematics Data and Flat and Trustful Supply Chain\xa0\xa0")),(0,i.kt)("p",null,"Furthermore, on the vocabulary/script level it utilizes and extends well-defined profiles of W3C Semantic Web Standards, such as OWL, RDF, SHACL, SPARQL."),(0,i.kt)("h2",{id:"context-and-scope"},"Context and Scope"),(0,i.kt)("p",null,"The standard is relevant for the following roles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Business Application Provider"),(0,i.kt)("li",{parentName:"ul"},"Enablement Service Provider"),(0,i.kt)("li",{parentName:"ul"},"Data Consumer"),(0,i.kt)("li",{parentName:"ul"},"Data Provider")),(0,i.kt)("p",null,"The following Catena-X stakeholders are affected by Knowledge Agent approach"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Business Application Provider:")," Applications that use KA technology on behalf of a Dataspace Participant (e.g. a Fleet Monitor, an Incident Reporting Solution).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Enablement Service Provider:")," Services to assist Dataspace Participants/Applications in processing data based on KA technology (e.g. a Graph Database, a Virtual Graph Binding Engine, an EDC Package).\nAs a second path, Companies are addressed that want to provide compute resources (for example by a server or other KA-enabled Applications or Services) based on instances/configurations of KA-enabled EDC Packages, for example a Recycling Software Specialist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Data Consumer:")," Companies that want to use data and logic (for example by KA-enabled Applications or Services) based on instances/configurations of KA-enabled EDC Packages, such as a Recycling Company or a Tier-2 Automotive Supplier")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Data Provider:")," Companies that want to provide data (for example by a backend database or other KA-enabled Applications or Services) based on instances/configurations of KA-enabled EDC Packages, for example an Automotive OEM. Companies that want to provide functions (for example by a REST endpoint or other KA-enabled Applications or Services) based on instances/configurations of KA-enabled EDC Packages, for example a Tier1 Sensor Device Supplier"))),(0,i.kt)("p",null,"Content-wise the following capabilities of Catena-X are addressed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Query and Search (Basic Mechanism, Integration in User Experiences)"),(0,i.kt)("li",{parentName:"ul"},"Services for making use of various federated data sources being part of a data space (Data & Function Provisioning, Logic Development & Provisioning)"),(0,i.kt)("li",{parentName:"ul"},"Semantic Modelling"),(0,i.kt)("li",{parentName:"ul"},"Publishing, Negotiation, Transfer Protocols and Policy Enforcement via IDS (EDC) connector")),(0,i.kt)("h2",{id:"solution-strategy"},"Solution Strategy"),(0,i.kt)("p",null,"Knowledge Agents regards the peer-to-peer Dataspace as one large (virtual) knowledge graph."),(0,i.kt)("p",null,"A graph, because the representation of data as a set of Triples (Outgoing-Node = Subject, Edge = Predicate, Receiving-Node = Object) is the highest form of normalization to which all other forms of structured data can be abstracted."),(0,i.kt)("p",null,"Virtual, because this graph is not centrally instantiated in a dedicated database, but it is manifested by a computation (traversal) which jumps from node to node (and hereby: from the sovereignity domain of one business partner to the another one including taking over authentication and authorization information).\xa0\xa0"),(0,i.kt)("p",null,"Knowledge because computations and graph contents are not arbitrary, but share common meta-data (again in the form of a graph interlinked with the actual instance graph) such that the vocabulary (at least: edge names) is standardized and computations can be formulated (offered)  independent of the data."),(0,i.kt)("p",null,"To reach that metaphor, the Knowledge Agents Architecture uses the following specifications, some of which are standard-relevant:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A general description language based on the Resource Description Framework (RDF)"),(0,i.kt)("li",{parentName:"ul"},"A Meta-Model defined by OWL-R"),(0,i.kt)("li",{parentName:"ul"},"A platform Ontology (consisting of several domain ontologies) as the Semantic Model"),(0,i.kt)("li",{parentName:"ul"},"A description of graphs (=graph assets) which contain instance data for the Semantic Model (or: use-case driven and role-driven subsets thereof) and which may be described as SHACL constraints"),(0,i.kt)("li",{parentName:"ul"},"A query language to traverse the graphs in SPARQL and store these queries as skills (=skill assets) in the database")),(0,i.kt)("p",null,"Non-standard relevant, but provided as a best practice/blueprint architecture are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bindings for relational and functional data"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/r2rml/"},"R2RML")," or OBDA (Ontology-Based Data Access ) for relational data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/RDF4J"},"RDF4J"),"/SAIL (Storage And Inference Layer) configuration for REST remoting"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SQL- and REST-based Virtualizers which bridge public Dataspace Operations with internal/private backend systems/data sources."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{target:"_blank",href:a(41965).Z},(0,i.kt)("img",{alt:"Example_Graph_Standards",src:a(71924).Z,width:"1124",height:"889"}))))),(0,i.kt)("p",null,"Knowledge Agents regards the peer-to-peer Dataspace as one large federated execution engine."),(0,i.kt)("p",null,"Federation means distributed that is there is no central endpoint/resource which controls the computation, but the execution may be entered/triggered on any tenant and uses a scalable set of resources which are contributed by each participant."),(0,i.kt)("p",null,"Federation means independent in that there is no central authentication/authorization regime, but the computation is validated, controled and (transparently) delegated by decentral policies as given/defined be each particpant."),(0,i.kt)("p",null,"See also ",(0,i.kt)("a",{parentName:"p",href:"architecture"},"High-Level Architecture"),"."),(0,i.kt)("h2",{id:"building-block-view"},"Building Block View"),(0,i.kt)("p",null,"See chapter ",(0,i.kt)("a",{parentName:"p",href:"modules"},"Layers & Modules")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(25104).Z},(0,i.kt)("img",{alt:"Architecture High-Level",src:a(59770).Z,width:"600",height:"447"}))),(0,i.kt)("h2",{id:"runtime-view"},"Runtime View"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(37448).Z},(0,i.kt)("img",{alt:"Runtime View2",src:a(38971).Z,width:"1246",height:"1062"}))),(0,i.kt)("p",null,"Sequence of actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A data provider provides a self description of the piece of knowledge he likes to provide including the terms of conditions in his own data catalogue (Although the diagram depicts only one single instance of the Federated Datacatalog, each EDC of each participant (Provider or Consumer) runs a Datacatalog instance. Beween those synchronisation takes place)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Graph assets describe means of domain ontologies the",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"node classes"),(0,i.kt)("li",{parentName:"ul"},"relations (edges between nodes)"),(0,i.kt)("li",{parentName:"ul"},"constraints on nodes and relations (temporal, value ranges, regex patterns, ...)"),(0,i.kt)("li",{parentName:"ul"},"constraints on the queries/skills that may be executed on the graph (e.g. allowed and denied network connections)"))),(0,i.kt)("li",{parentName:"ul"},"Graph policies will restrict the following operations on graphs (based on nodes and edges, given an execution context)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"selection"),(0,i.kt)("li",{parentName:"ul"},"traversion"),(0,i.kt)("li",{parentName:"ul"},"storage"),(0,i.kt)("li",{parentName:"ul"},"manipulation"),(0,i.kt)("li",{parentName:"ul"},"deletion"),(0,i.kt)("li",{parentName:"ul"},"delegation"))))),(0,i.kt)("li",{parentName:"ol"},"A data provider marks particular graph assets as being visible in the federated data catalog.\xa0The federated data catalogues of the federated companies/EDCs will be automatically synchronized."),(0,i.kt)("li",{parentName:"ol"},"Any consuming app can employ an agent with a suitable skill/query (which can be provided locally or as a remote asset, too)"),(0,i.kt)("li",{parentName:"ol"},"The agent will match the requirements in the skill with the offers in the federated data catalog to fill in the endpoints and usage policies from the self descriptions."),(0,i.kt)("li",{parentName:"ol"},"Agreements (between XA (5.1), XC (5.2), eventually between AB (5.3)) have to be set up in such a way that the corresponding agents are allowed to communicate through the data plane."),(0,i.kt)("li",{parentName:"ol"},"The agent delegates a sub-query/sub-skill to the respective knowledge owners (data provider C: 6.1, A: 6.2 and B: 6.3) via an instance of EDC. It annotates the sub-queries with a call context containing the EDC/agent calling sequence and the other assets to be joined with the result data. 6.3 shows that an agent can decide to delegate further down the line"),(0,i.kt)("li",{parentName:"ol"},"The data plane will validate the calling context together with the claims inside the agreement token."),(0,i.kt)("li",{parentName:"ol"},"The agent executes the actual query by mapping to a backend data system and finally providing the result to the app")),(0,i.kt)("p",null,"Just as the Federated Datacatalog is a multi-instance-synchronised component, also the Federated Trust is an instance running on each EDC. All Federated Trust instances are synchronised with each other within the referring EDC ecosystem."),(0,i.kt)("h2",{id:"deployment-view"},"Deployment View"),(0,i.kt)("p",null,"See chapter ",(0,i.kt)("a",{parentName:"p",href:"../operation-view/deployment"},"Deployment"),"."),(0,i.kt)("sub",null,(0,i.kt)("sup",null,"(C) 2021,2024 Contributors to the Eclipse Foundation. SPDX-License-Identifier: CC-BY-4.0")))}p.isMDXComponent=!0},41965:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/Example_Graph-584f192a4463bf5bf21613d642426a55.jpg"},37448:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/Runtime_View3-ffe55baacdc5171f0deaef0b987bfd0c.png"},25104:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/knowledge_agent_architecture-3aa46110a6213138c677b339e3647703.png"},3389:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/AgentsKit-Icon-d790626da1d452d4369dd7cf814b7dfe.png"},71924:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Example_Graph-584f192a4463bf5bf21613d642426a55.jpg"},38971:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Runtime_View3-ffe55baacdc5171f0deaef0b987bfd0c.png"},59770:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/knowledge_agent_architecture_small-adfd1153ee8a08d5338e311a931d0f3a.png"}}]);