"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[27965],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>N});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function M(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",I={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=M(e,["components","mdxType","originalType","parentName"]),u=l(i),s=a,N=u["".concat(p,".").concat(s)]||u[s]||I[s]||r;return i?n.createElement(N,o(o({ref:t},c),{},{components:i})):n.createElement(N,o({ref:t},c))}));function N(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=s;var M={};for(var p in t)hasOwnProperty.call(t,p)&&(M[p]=t[p]);M.originalType=e,M[u]="string"==typeof e?e:a,o[1]=M;for(var l=2;l<r;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}s.displayName="MDXCreateElement"},86174:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>M,toc:()=>l});var n=i(87462),a=(i(67294),i(3905));const r={id:"overview",title:"Architecture View",description:"The view from above"},o=void 0,M={unversionedId:"kits/Demand and Capacity Management Kit/architecture-view/overview",id:"kits/Demand and Capacity Management Kit/architecture-view/overview",title:"Architecture View",description:"The view from above",source:"@site/docs-kits/kits/Demand and Capacity Management Kit/architecture-view/overview.md",sourceDirName:"kits/Demand and Capacity Management Kit/architecture-view",slug:"/kits/Demand and Capacity Management Kit/architecture-view/overview",permalink:"/docs-kits/next/kits/Demand and Capacity Management Kit/architecture-view/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Architecture View",description:"The view from above"},sidebar:"kits",previous:{title:"Test - Supplier",permalink:"/docs-kits/next/kits/Demand and Capacity Management Kit/development-view/test-supplier"},next:{title:"Dependencies",permalink:"/docs-kits/next/kits/Demand and Capacity Management Kit/architecture-view/dependencies"}},p={},l=[{value:"Why\u200b",id:"why",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"How",id:"how",level:2},{value:"Solution Overview",id:"solution-overview",level:2},{value:"Architecture Constraints",id:"architecture-constraints",level:3},{value:"Sequence Diagram",id:"sequence-diagram",level:2},{value:"Notice",id:"notice",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"DCM kit banner",src:i(93191).Z,width:"285",height:"245"})),(0,a.kt)("h2",{id:"why"},"Why\u200b"),(0,a.kt)("p",null,"This page is relevant for you, if one of the following cases applies:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You want to participate in the demand and capacity usecase as either a customer or a supplier and intend to adapt your existing custom application landscape to Catena-X DCM."),(0,a.kt)("li",{parentName:"ol"},"You want to offer business solutions to the aforementioned customers and suppliers by adapting your commercial software product for Catena-X DCM.")),(0,a.kt)("p",null,"If none of this applies to you or you are unsure, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs-kits/next/kits/Demand%20and%20Capacity%20Management%20Kit/operation-view"},"Operation View")," first."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: If you purchase commercial software from a software vendor, the vendor needs to adopt their software for you. Please refer your vendor to this page.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"In order to participate in the Catena-X network an Eclipse Dataspace Connector (EDC), or a similar connector fulfilling the Dataspace Protocol, is required, as the endpoints must not be called directly but only through a Data Asset/Contract Offer."),(0,a.kt)("p",null,"In addition use case participants need to be boarded onto the Catena-X network."),(0,a.kt)("p",null,"Participants intending to act as a customer require at least one BPNL for their company as well as one BPNS for every site they intend to integrate into the Catena-X network."),(0,a.kt)("p",null,"Participants intending to act as a supplier require at least one BPNL for their company."),(0,a.kt)("h2",{id:"how"},"How"),(0,a.kt)("p",null,"If you want to adapt your custom or commercial applications to work with the Catena-X DCM usecase you will have to"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Modify the source code of your application"),(0,a.kt)("li",{parentName:"ol"},"Enable your software to offer multiple REST API endpoints in order to receive data"),(0,a.kt)("li",{parentName:"ol"},"Enable your software to call multiple REST API endpoints in order to send data"),(0,a.kt)("li",{parentName:"ol"},"Enable your software to communicate through an Eclipse Dataspace Connector (EDC), or a similar solution, which is to be setup separately")),(0,a.kt)("p",null,"For details, please refer to the Catena-X DCM standard ",(0,a.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128"),". This page provides a non-normative overview only."),(0,a.kt)("h2",{id:"solution-overview"},"Solution Overview"),(0,a.kt)("p",null,"For the exchange of the demand and capacity information required by the process, five REST APIs are used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WeekBasedMaterialDemand API - used for the exchange of demand information"),(0,a.kt)("li",{parentName:"ul"},"WeekBasedCapacityGroup API - used for the exchange of capacity information"),(0,a.kt)("li",{parentName:"ul"},"RequestForUpdate API - used for requesting an update of WeekBasedMaterialDemand or WeekBasedCapacityGroup"),(0,a.kt)("li",{parentName:"ul"},"IdBasedComment API - used for the exchange of additional comments regarding WeekBasedMaterialDemand or WeekBasedCapacityGroup"),(0,a.kt)("li",{parentName:"ul"},"Asset Administration Shell (AAS) API - used when using DCM in combination with a Digital Twin Registry")),(0,a.kt)("p",null,"All those APIs are REST-based APIs."),(0,a.kt)("p",null,"Implementing all endpoints is mandatory, except the AAS API endpoint, which is optional."),(0,a.kt)("p",null,"Note that the software solutions used as well as the business process should be enabled in order to receive WeekBasedMaterialDemand information from customers and send WeekBasedCapacityGroup information back to those customers. Also, it needs to be possible to send the own WeekBasedMaterialDemand information to the suppliers and receive their WeekBasedCapacityGroup information in return. Therefore, the software tools used need to be able to send/receive these information and the users need to be able to work with the information in the planning processes."),(0,a.kt)("p",null,"When implementing the API endpoints, it is important to follow the DCM standard closely in order to ensure compatibility with other solutions. This is not limited to technical aspects, but also extends to the business definition of demand and capacity."),(0,a.kt)("h3",{id:"architecture-constraints"},"Architecture Constraints"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Constraint ID"),(0,a.kt)("th",{parentName:"tr",align:null},"Constraint"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"C-1"),(0,a.kt)("td",{parentName:"tr",align:null},"Software and third party software must be compliant to the Catena-X and Eclipse Foundation Guidelines/Policies ",(0,a.kt)("a",{parentName:"td",href:"https://www.eclipse.org/projects/dev_process/"},"eclipse_foundation"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"C-2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/eclipse-tractusx/tractusx-edc/tree/main"},"Eclipse Dataspace Connector")," (EDC), or a similar solution, must be used for data transfer between different legal entities; e.g. the API endpoints listed above may only be called through a Data Asset/Contract Offer")))),(0,a.kt)("h2",{id:"sequence-diagram"},"Sequence Diagram"),(0,a.kt)("p",null,"The overall interaction between partners is illustrated by the following sequence diagram:"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    box rgb(97,97,97) Customer\n    actor Customer\n    participant CustomerApp as Customer App\n    participant CustomerConnector as Customer connector\n    end\n    box rgb(97,97,97) Core Services\n    participant CoreBpnlDiscovery as Core BPNL Discovery\n    participant CoreEdcDiscovery as Core EDC discovery\n    end\n    box rgb(97,97,97) Supplier\n    participant SupplierConnector as Supplier connector\n    participant SupplierApp as Supplier App\n    actor Supplier\n    end\n    rect rgb(221,130,0)\n        note right of Customer: Customer creates MaterialDemand locally\n        Customer ->> CustomerApp: Create MaterialDemand\n        activate CustomerApp\n        CustomerApp --\x3e> Customer: MaterialDemand created\n        deactivate CustomerApp\n        Customer ->> CustomerApp: Finalize MaterialDemand\n    end\n    rect rgb(4,107,153)\n        note right of CustomerApp: Customer App finds endpoint of Supplier\n        activate CustomerApp\n        CustomerApp ->> CoreBpnlDiscovery: Resolve Supplier Base Data into BPNL\n        activate CoreBpnlDiscovery\n        CoreBpnlDiscovery --\x3e> CustomerApp: Supplier BPNL\n        deactivate CoreBpnlDiscovery\n        CustomerApp ->> CoreEdcDiscovery: Resolve Supplier BPNL into connector URL catalogue\n        activate CoreEdcDiscovery\n        CoreEdcDiscovery --\x3e> CustomerApp: Connector URL catalogue\n        deactivate CoreEdcDiscovery\n        CustomerApp ->> CustomerApp: Find correct connector via URL catalogue inspection\n    activate CustomerConnector\n        CustomerConnector ->> SupplierConnector: Resolve connector Endpoint and connector service catalogue into MaterialDemand API URL\n        activate SupplierConnector\n        SupplierConnector ->> CustomerConnector: Framework & Contract Negotiation\n        CustomerConnector --\x3e> SupplierConnector: Framework & Contract Negotiation\n        SupplierConnector --\x3e> CustomerConnector: MaterialDemand API URL\n    end\n    rect rgb(221,130,0)\n        note right of Customer: Exchange Material Demand\n        CustomerApp ->> CustomerConnector: Transmit MaterialDemand\n        CustomerConnector ->> SupplierConnector: Transmit MaterialDemand\n        SupplierConnector ->> SupplierApp: Transmit MaterialDemand\n        activate SupplierApp\n        SupplierApp ->> Supplier: Transmit MaterialDemand\n        Supplier --\x3e> SupplierApp: MaterialDemand received\n        SupplierApp --\x3e> SupplierConnector: MaterialDemand received\n        deactivate SupplierApp\n        SupplierConnector --\x3e> CustomerConnector: MaterialDemand received\n        deactivate SupplierConnector\n        CustomerConnector --\x3e> CustomerApp: MaterialDemand received\n        deactivate CustomerConnector\n        CustomerApp --\x3e> Customer: MaterialDemand finalized & synchronized\n        deactivate CustomerApp\n    end\n    rect rgb(128,149,0)\n    note left of Supplier: Supplier creates CapacityGroup locally\n        Supplier ->> SupplierApp: Create CapacityGroup\n        activate SupplierApp\n        SupplierApp --\x3e> Supplier: CapacityGroup created\n        deactivate SupplierApp\n        Supplier ->> SupplierApp: Link Demands to CapacityGroup\n        activate SupplierApp\n        SupplierApp --\x3e> Supplier: Demands Linked\n        deactivate SupplierApp\n        Supplier ->> SupplierApp: Finalize CapacityGroup\n    end\n    rect rgb(4,107,153)\n        note left of SupplierApp: Supplier App finds endpoint of Customer\n        activate SupplierApp\n        SupplierApp ->> CoreBpnlDiscovery: Resolve Customer Base Data into BPNL\n        activate CoreBpnlDiscovery\n        CoreBpnlDiscovery --\x3e> SupplierApp: Customer BPNL\n        deactivate CoreBpnlDiscovery\n        SupplierApp ->> CoreEdcDiscovery: Resolve Customer BPNL into connector URL catalogue\n        activate CoreEdcDiscovery\n        CoreEdcDiscovery --\x3e> SupplierApp: connector URL catalogue\n        deactivate CoreEdcDiscovery\n        SupplierApp ->> SupplierApp: Find correct connector via URL catalogue inspection\n        SupplierApp ->> SupplierConnector: Transmit CapacityGroup\n        activate SupplierConnector\n        SupplierConnector ->> CustomerConnector: Resolve connector Endpoint and connector service catalogue into CapacityGroup API URL\n        activate CustomerConnector\n        CustomerConnector ->> SupplierConnector: Framework & Contract Negotiation\n        SupplierConnector --\x3e> CustomerConnector: Framework & Contract Negotiation\n        CustomerConnector --\x3e> SupplierConnector: CapacityGroup API Endpoint\n    end \n    rect rgb(128,149,0)\n        note left of Supplier: Exchange Capacity Group\n        SupplierConnector ->> CustomerConnector: Transmit CapacityGroup\n        CustomerConnector ->> CustomerApp: Transmit CapacityGroup\n        activate CustomerApp\n        CustomerApp ->> Customer: Transmit CapacityGroup\n        Customer --\x3e> CustomerApp: CapacityGroup received\n        CustomerApp --\x3e> CustomerConnector: CapacityGroup received\n        deactivate CustomerApp\n        CustomerConnector --\x3e> SupplierConnector: CapacityGroup received\n        deactivate CustomerConnector\n        SupplierConnector --\x3e> SupplierApp: CapacityGroup received\n        deactivate SupplierConnector\n        SupplierApp --\x3e> Supplier: CapacityGroup finalized & synchronized\n        deactivate SupplierApp\n    end"}),(0,a.kt)("p",null,"Figure: ",(0,a.kt)("em",{parentName:"p"},"Core business process")),(0,a.kt)("p",null,"Note that the supplier does not need to immediately reply with capacity group after receiving demand information, although a timely reply is appreciated, there can be a considerable time in between instead."),(0,a.kt)("p",null,"Digital Twins can also be used to reference parts, but are not shown in the sequence diagram for simplicity."),(0,a.kt)("h2",{id:"notice"},"Notice"),(0,a.kt)("p",null,"This work is licensed under the ",(0,a.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 BASF SE"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Fraunhofer-Gesellschaft zur F\xf6rderung der angewandten Forschung e.V (Fraunhofer)"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Henkel AG & Co.KGaA"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Mercedes Benz Group AG"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SAP SE"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SupplyOn AG"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Volkswagen AG"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 ZF Friedrichshafen AG"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Contributors to the Eclipse Foundation")))}u.isMDXComponent=!0},93191:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg1IiBoZWlnaHQ9IjI0NSIgdmlld0JveD0iMCAwIDI4NSAyNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzE4MDYpIj4KPHBhdGggZD0iTTEyMy4wNDggOTEuODM2OUMxMzMuNzA1IDg1LjY4NDQgMTUwLjk4NSA4NS42ODQ0IDE2MS42NDIgOTEuODM2OUwyNTQuMzQ1IDE0NS4zNTRDMjY1LjAwMiAxNTEuNTA3IDI2NS4wMDIgMTYxLjQ4MiAyNTQuMzQ1IDE2Ny42MzVMMTYxLjY0MiAyMjEuMTUyQzE1MC45ODUgMjI3LjMwNCAxMzMuNzA1IDIyNy4zMDQgMTIzLjA0OCAyMjEuMTUyTDMwLjM0NTMgMTY3LjYzNUMxOS42ODc5IDE2MS40ODIgMTkuNjg3OCAxNTEuNTA3IDMwLjM0NTMgMTQ1LjM1NEwxMjMuMDQ4IDkxLjgzNjlaIiBmaWxsPSIjRTNERUU2IiBmaWxsLW9wYWNpdHk9IjAuOSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1My4zOCAxNTguMTFMMTYwLjY3NyAxMDQuNTkzQzE1MC41NTMgOTguNzQ4MyAxMzQuMTM3IDk4Ljc0ODMgMTI0LjAxMyAxMDQuNTkzTDMxLjMxMDIgMTU4LjExQzIxLjE4NTYgMTYzLjk1NSAyMS4xODU2IDE3My40MzIgMzEuMzEwMiAxNzkuMjc3TDEyNC4wMTMgMjMyLjc5NEMxMzQuMTM3IDIzOC42MzkgMTUwLjU1MyAyMzguNjM5IDE2MC42NzcgMjMyLjc5NEwyNTMuMzggMTc5LjI3N0MyNjMuNTA0IDE3My40MzIgMjYzLjUwNCAxNjMuOTU1IDI1My4zOCAxNTguMTFaTTE2MS42NDIgMTA0LjAzNkMxNTAuOTg1IDk3Ljg4MzYgMTMzLjcwNSA5Ny44ODM2IDEyMy4wNDggMTA0LjAzNkwzMC4zNDU0IDE1Ny41NTNDMTkuNjg3OSAxNjMuNzA2IDE5LjY4NzkgMTczLjY4MSAzMC4zNDU0IDE3OS44MzRMMTIzLjA0OCAyMzMuMzUxQzEzMy43MDUgMjM5LjUwNCAxNTAuOTg1IDIzOS41MDQgMTYxLjY0MiAyMzMuMzUxTDI1NC4zNDUgMTc5LjgzNEMyNjUuMDAyIDE3My42ODEgMjY1LjAwMiAxNjMuNzA2IDI1NC4zNDUgMTU3LjU1M0wxNjEuNjQyIDEwNC4wMzZaIiBmaWxsPSIjRTVFMEU3Ii8+CjxwYXRoIGQ9Ik0xMjMuNjY0IDY0LjY5NjhDMTM0LjMyMiA1OC41NDQzIDE1MS42MDEgNTguNTQ0MyAxNjIuMjU5IDY0LjY5NjhMMjU0Ljk2MSAxMTguMjE0QzI2NS42MTkgMTI0LjM2NyAyNjUuNjE5IDEzNC4zNDIgMjU0Ljk2MSAxNDAuNDk0TDE2Mi4yNTkgMTk0LjAxMkMxNTEuNjAxIDIwMC4xNjQgMTM0LjMyMiAyMDAuMTY0IDEyMy42NjQgMTk0LjAxMkwzMC45NjE4IDE0MC40OTRDMjAuMzA0NCAxMzQuMzQyIDIwLjMwNDQgMTI0LjM2NyAzMC45NjE4IDExOC4yMTRMMTIzLjY2NCA2NC42OTY4WiIgZmlsbD0iI0Q2Q0VEQSIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kZGRkZF8xXzE4MDYpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTMuOTk2IDEzMC45N0wxNjEuMjk0IDc3LjQ1M0MxNTEuMTY5IDcxLjYwODEgMTM0Ljc1NCA3MS42MDgxIDEyNC42MjkgNzcuNDUzTDMxLjkyNjcgMTMwLjk3QzIxLjgwMjEgMTM2LjgxNSAyMS44MDIxIDE0Ni4yOTIgMzEuOTI2NyAxNTIuMTM3TDEyNC42MjkgMjA1LjY1NEMxMzQuNzU0IDIxMS40OTkgMTUxLjE2OSAyMTEuNDk5IDE2MS4yOTQgMjA1LjY1NEwyNTMuOTk2IDE1Mi4xMzdDMjY0LjEyMSAxNDYuMjkyIDI2NC4xMjEgMTM2LjgxNSAyNTMuOTk2IDEzMC45N1pNMTYyLjI1OSA3Ni44OTZDMTUxLjYwMSA3MC43NDM1IDEzNC4zMjIgNzAuNzQzNSAxMjMuNjY0IDc2Ljg5NkwzMC45NjE4IDEzMC40MTNDMjAuMzA0NCAxMzYuNTY2IDIwLjMwNDQgMTQ2LjU0MSAzMC45NjE4IDE1Mi42OTRMMTIzLjY2NCAyMDYuMjExQzEzNC4zMjIgMjEyLjM2MyAxNTEuNjAxIDIxMi4zNjMgMTYyLjI1OSAyMDYuMjExTDI1NC45NjEgMTUyLjY5NEMyNjUuNjE5IDE0Ni41NDEgMjY1LjYxOSAxMzYuNTY2IDI1NC45NjEgMTMwLjQxM0wxNjIuMjU5IDc2Ljg5NloiIGZpbGw9IiNENkNFREEiLz4KPC9nPgo8cGF0aCBkPSJNMTIzLjY2NCAzOC43ODk2QzEzNC4zMjIgMzIuNjM3IDE1MS42MDEgMzIuNjM3IDE2Mi4yNTkgMzguNzg5NkwyNTQuOTYxIDkyLjMwNjhDMjY1LjYxOSA5OC40NTk0IDI2NS42MTkgMTA4LjQzNSAyNTQuOTYxIDExNC41ODdMMTYyLjI1OSAxNjguMTA0QzE1MS42MDEgMTc0LjI1NyAxMzQuMzIyIDE3NC4yNTcgMTIzLjY2NCAxNjguMTA0TDMwLjk2MTggMTE0LjU4N0MyMC4zMDQ0IDEwOC40MzUgMjAuMzA0NCA5OC40NTk0IDMwLjk2MTggOTIuMzA2OEwxMjMuNjY0IDM4Ljc4OTZaIiBmaWxsPSIjQjZBNkJGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUzLjk5NiAxMDUuMDYzTDE2MS4yOTQgNTEuNTQ1OEMxNTEuMTY5IDQ1LjcwMDkgMTM0Ljc1NCA0NS43MDA5IDEyNC42MjkgNTEuNTQ1OEwzMS45MjY3IDEwNS4wNjNDMjEuODAyMiAxMTAuOTA4IDIxLjgwMjIgMTIwLjM4NCAzMS45MjY3IDEyNi4yMjlMMTI0LjYyOSAxNzkuNzQ3QzEzNC43NTQgMTg1LjU5MiAxNTEuMTY5IDE4NS41OTIgMTYxLjI5NCAxNzkuNzQ3TDI1My45OTYgMTI2LjIyOUMyNjQuMTIxIDEyMC4zODQgMjY0LjEyMSAxMTAuOTA4IDI1My45OTYgMTA1LjA2M1pNMTYyLjI1OSA1MC45ODg4QzE1MS42MDEgNDQuODM2MyAxMzQuMzIyIDQ0LjgzNjMgMTIzLjY2NSA1MC45ODg4TDMwLjk2MTkgMTA0LjUwNkMyMC4zMDQ0IDExMC42NTkgMjAuMzA0NCAxMjAuNjM0IDMwLjk2MTkgMTI2Ljc4NkwxMjMuNjY1IDE4MC4zMDRDMTM0LjMyMiAxODYuNDU2IDE1MS42MDEgMTg2LjQ1NiAxNjIuMjU5IDE4MC4zMDRMMjU0Ljk2MSAxMjYuNzg2QzI2NS42MTkgMTIwLjYzNCAyNjUuNjE5IDExMC42NTkgMjU0Ljk2MSAxMDQuNTA2TDE2Mi4yNTkgNTAuOTg4OFoiIGZpbGw9IiNCNkE2QkYiLz4KPHBhdGggZD0iTTEyMy42NjUgMTEuNjQ5QzEzNC4zMjIgNS40OTY0MiAxNTEuNjAxIDUuNDk2NDEgMTYyLjI1OSAxMS42NDlMMjU0Ljk2MiA2NS4xNjYyQzI2NS42MTkgNzEuMzE4NyAyNjUuNjE5IDgxLjI5NCAyNTQuOTYyIDg3LjQ0NjVMMTYyLjI1OSAxNDAuOTY0QzE1MS42MDEgMTQ3LjExNiAxMzQuMzIyIDE0Ny4xMTYgMTIzLjY2NSAxNDAuOTY0TDMwLjk2MjIgODcuNDQ2NUMyMC4zMDQ4IDgxLjI5NCAyMC4zMDQ4IDcxLjMxODggMzAuOTYyMiA2NS4xNjYyTDEyMy42NjUgMTEuNjQ5WiIgZmlsbD0iIzk2NzZBNiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1My45OTcgNzcuOTIyNEwxNjEuMjk0IDI0LjQwNTJDMTUxLjE3IDE4LjU2MDMgMTM0Ljc1NCAxOC41NjAzIDEyNC42MyAyNC40MDUyTDMxLjkyNzEgNzcuOTIyNEMyMS44MDI1IDgzLjc2NzMgMjEuODAyNSA5My4yNDM4IDMxLjkyNzEgOTkuMDg4OEwxMjQuNjMgMTUyLjYwNkMxMzQuNzU0IDE1OC40NTEgMTUxLjE3IDE1OC40NTEgMTYxLjI5NCAxNTIuNjA2TDI1My45OTcgOTkuMDg4OEMyNjQuMTIxIDkzLjI0MzggMjY0LjEyMSA4My43NjczIDI1My45OTcgNzcuOTIyNFpNMTYyLjI1OSAyMy44NDgyQzE1MS42MDEgMTcuNjk1NiAxMzQuMzIyIDE3LjY5NTYgMTIzLjY2NSAyMy44NDgyTDMwLjk2MjIgNzcuMzY1NEMyMC4zMDQ4IDgzLjUxOCAyMC4zMDQ4IDkzLjQ5MzIgMzAuOTYyMiA5OS42NDU4TDEyMy42NjUgMTUzLjE2M0MxMzQuMzIyIDE1OS4zMTYgMTUxLjYwMSAxNTkuMzE2IDE2Mi4yNTkgMTUzLjE2M0wyNTQuOTYyIDk5LjY0NThDMjY1LjYxOSA5My40OTMyIDI2NS42MTkgODMuNTE4IDI1NC45NjIgNzcuMzY1NEwxNjIuMjU5IDIzLjg0ODJaIiBmaWxsPSIjOTY3NkE2Ii8+CjxwYXRoIGQ9Ik0xMzguMjE3IDczLjI2NzFMMTE3LjcyNSA4NS4wOTc1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTE2MS42MzcgODkuODYwNEwxNDMuODA2IDEwMC4xNTQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPgo8cGF0aCBkPSJNMTU4LjQ0NCA3Ni42NDdMMTMwLjc2NSA5Mi42MjU3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTExNy43MjUgNzAuMDQwNUwxMDQuNjg0IDc3LjU2OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxwYXRoIGQ9Ik0xMTUuMDYzIDU2LjUyTDkxLjY0MyA3MC4wNDA1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTEyNC42NDQgNDkuNDUyNUwxMjQuNzMzIDUxLjc5NjhDMTI1LjA0IDU5LjkwNjUgMTM3LjA0IDY2LjIxNzMgMTUxLjA1NiA2NS42Mzk1VjY1LjYzOTVDMTY2LjU4OSA2NC45OTkxIDE3OS4yMjUgNzIuNzUzOSAxNzcuMTY5IDgxLjY2NTVMMTc2Ljg1NiA4My4wMjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kZGRkZF8xXzE4MDYiIHg9Ii00Mi4wMzEyIiB5PSI1OC4yODE3IiB3aWR0aD0iMzkxLjk4NSIgaGVpZ2h0PSI0MTguNTQzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMV8xODA2Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjEiIGR5PSIxMiIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMyIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18xXzE4MDYiIHJlc3VsdD0iZWZmZWN0Ml9kcm9wU2hhZG93XzFfMTgwNiIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR4PSIzIiBkeT0iNDciLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMjQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDkgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0Ml9kcm9wU2hhZG93XzFfMTgwNiIgcmVzdWx0PSJlZmZlY3QzX2Ryb3BTaGFkb3dfMV8xODA2Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjYiIGR5PSIxMDciLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMzIiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0M19kcm9wU2hhZG93XzFfMTgwNiIgcmVzdWx0PSJlZmZlY3Q0X2Ryb3BTaGFkb3dfMV8xODA2Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjExIiBkeT0iMTkwIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjM4Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjAxIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDRfZHJvcFNoYWRvd18xXzE4MDYiIHJlc3VsdD0iZWZmZWN0NV9kcm9wU2hhZG93XzFfMTgwNiIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDVfZHJvcFNoYWRvd18xXzE4MDYiIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMV8xODA2Ij4KPHJlY3Qgd2lkdGg9IjI4NC4zNDIiIGhlaWdodD0iMjQzLjk4MyIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC41MDg3ODkpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);