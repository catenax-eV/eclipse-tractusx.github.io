"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[57978],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),p=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||r;return a?i.createElement(m,s(s({ref:t},c),{},{components:a})):i.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},53966:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));const r={id:"Operation View",title:"Operation View",description:"Data Chain Kit",sidebar_position:2},s=void 0,l={unversionedId:"kits/Data Chain Kit/Operation View",id:"version-24.08/kits/Data Chain Kit/Operation View",title:"Operation View",description:"Data Chain Kit",source:"@site/docs-kits_versioned_docs/version-24.08/kits/Data Chain Kit/page_software-operation-view.md",sourceDirName:"kits/Data Chain Kit",slug:"/kits/Data Chain Kit/Operation View",permalink:"/docs-kits/kits/Data Chain Kit/Operation View",draft:!1,tags:[],version:"24.08",sidebarPosition:2,frontMatter:{id:"Operation View",title:"Operation View",description:"Data Chain Kit",sidebar_position:2},sidebar:"kits",previous:{title:"Adoption View",permalink:"/docs-kits/kits/Data Chain Kit/Adoption View Data Chain Kit"},next:{title:"Specification",permalink:"/docs-kits/kits/Data Chain Kit/Software Development View/Specification"}},o={},p=[{value:"Data Chain KIT",id:"data-chain-kit",level:3},{value:"Local deployment of IRS with minimum dependencies setup",id:"local-deployment-of-irs-with-minimum-dependencies-setup",level:2},{value:"Step 1: Prerequisites",id:"step-1-prerequisites",level:3},{value:"Step 2: Add the IRS helm repository",id:"step-2-add-the-irs-helm-repository",level:3},{value:"Step 3: Installing the IRS",id:"step-3-installing-the-irs",level:3},{value:"1. Start the cluster",id:"1-start-the-cluster",level:4},{value:"1.1 Get the Status of the deployment",id:"11-get-the-status-of-the-deployment",level:5},{value:"2. Forward Ports",id:"2-forward-ports",level:4},{value:"Testing the Item Relationship Service",id:"testing-the-item-relationship-service",level:2},{value:"Valid Global Asset Ids for testing",id:"valid-global-asset-ids-for-testing",level:3},{value:"Valid test requests for testing",id:"valid-test-requests-for-testing",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Datachain kit banner",src:a(55871).Z,width:"285",height:"244"})),(0,n.kt)("h3",{id:"data-chain-kit"},"Data Chain KIT"),(0,n.kt)("h2",{id:"local-deployment-of-irs-with-minimum-dependencies-setup"},"Local deployment of IRS with minimum dependencies setup"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Please note that this demo is currently based on IRS version 5.4.0"))),(0,n.kt)("h3",{id:"step-1-prerequisites"},"Step 1: Prerequisites"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," is installed and the Docker deamon is running with at least 8GB of\nmemory"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," is installed"),(0,n.kt)("li",{parentName:"ol"},"Any Kubernetes cluster is installed and running, eg. ",(0,n.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl")," is installed")),(0,n.kt)("h3",{id:"step-2-add-the-irs-helm-repository"},"Step 2: Add the IRS helm repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add irs https://eclipse-tractusx.github.io/item-relationship-service\n")),(0,n.kt)("h3",{id:"step-3-installing-the-irs"},"Step 3: Installing the IRS"),(0,n.kt)("h4",{id:"1-start-the-cluster"},"1. Start the cluster"),(0,n.kt)("p",null,"To deploy IRS on kubernetes with helm run"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install irs-local irs/item-relationship-service -f your-values.yaml\n")),(0,n.kt)("h5",{id:"11-get-the-status-of-the-deployment"},"1.1 Get the Status of the deployment"),(0,n.kt)("p",null,"Helm can give you feedback on the release status:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm list\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"NAME            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART                           APP VERSION\nirs-local       default         1               2024-08-01 10:24:46.8811785 +0200 CEST  deployed        item-relationship-service-7.4.0 5.4.0\n")),(0,n.kt)("p",null,"Kubectl can give you feedback on how the status of the deployment currently is, there should be two pods deployed - IRS\nand Minio:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                   READY   STATUS    RESTARTS   AGE\nirs-local-item-relationship-service-5bdcd5854d-gq976   1/1     Running   0          47s\nirs-local-minio-6f6c58cfbd-j8jkg                       1/1     Running   0          47s\n")),(0,n.kt)("h4",{id:"2-forward-ports"},"2. Forward Ports"),(0,n.kt)("p",null,"When the deployment has been finished please use the command to forward the port:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/irs-local-item-relationship-service 8080:8080\n")),(0,n.kt)("p",null,"After that you can access the Swagger UI page:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"IRS Swagger:")," ",(0,n.kt)("a",{parentName:"li",href:"http://localhost:8080/api/swagger-ui/index.html"},"http://localhost:8080/api/swagger-ui/index.html"))),(0,n.kt)("h2",{id:"testing-the-item-relationship-service"},"Testing the Item Relationship Service"),(0,n.kt)("p",null,"You can use any approach to access exposed by IRS API endpoints, for example mentioned above Swagger UI page. There is\nalso prepared Insomnia collection with example calls to IRS,\nsee ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/item-relationship-service/blob/5.4.0/local/testing/request-collection/IRS_Request_Collection.json"},"IRS_Request_Collection.json")),(0,n.kt)("h3",{id:"valid-global-asset-ids-for-testing"},"Valid Global Asset Ids for testing"),(0,n.kt)("p",null,"IRS is loading with mocked data from Testdata file,\nsee ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/item-relationship-service/blob/5.4.0/irs-models/src/main/resources/test_data/CX_Testdata.json"},"CX_Testdata.json")),(0,n.kt)("h3",{id:"valid-test-requests-for-testing"},"Valid test requests for testing"),(0,n.kt)("p",null,"You can use these snippets for testing purposes."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bomLifecycle": "asBuilt",\n  "direction": "downward",\n  "depth": 10,\n  "auditContractNegotiation": false,\n  "key": {\n    "globalAssetId": "urn:uuid:951f1ebf-ebcf-427c-8a4d-7fe1f67c8d58",\n    "bpn": "BPNL00000003B0Q0"\n  }\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "aspects": [\n    "urn:samm:io.catenax.serial_part:3.0.0#SerialPart"\n  ],\n  "depth": 1,\n  "key": {\n    "globalAssetId": "urn:uuid:951f1ebf-ebcf-427c-8a4d-7fe1f67c8d58",\n    "bpn": "BPNL00000003B0Q0"\n  }\n}\n')))}d.isMDXComponent=!0},55871:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/DataChainKitIcon-9d971977caa3b7d5d469e64e2ee02dc7.png"}}]);