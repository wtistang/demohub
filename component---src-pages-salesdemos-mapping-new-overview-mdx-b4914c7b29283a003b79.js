(window.webpackJsonp=window.webpackJsonp||[]).push([[59,42,43,70,71,73,74,75],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),A=a("NmYn"),r=a.n(A),o=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),c=a.n(b),d=a("QH2O"),p=a.n(d),m=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,i=e.tabs,A=void 0===i?[]:i;return Object(m.b)("div",{className:c()(p.a.pageHeader,(t={},t[p.a.withTabs]=A.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,A=i.baseUrl,r=i.subDirectory,s=A+"/edit/"+i.branch+r+"/src/pages"+t;return A?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},h=a("FCXl"),f=a("dI71"),x=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],A=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),A=a===i,s=new RegExp(i+"/?(#.*)?$"),l=n.replace(s,a);return Object(m.b)("li",{key:e,className:c()((t={},t[x.selectedItem]=A,t),x.listItem)},Object(m.b)(o.Link,{className:x.link,to:""+l},e))}));return Object(m.b)("div",{className:x.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:x.list},A))))))},t}(i.a.Component),w=a("MjG9"),N=a("CzIb"),v=a("Asxa"),E=a("OIbQ"),B=a.n(E),T=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(v.c,{className:B.a.row},Object(m.b)(v.a,null,Object(m.b)("div",{className:B.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,A=t.frontmatter,b=void 0===A?{}:A,c=t.relativePagePath,d=t.titleType,p=b.tabs,g=b.title,f=b.theme,x=b.description,v=b.keywords,E=b.date,B=Object(N.a)().interiorTheme,y=Object(o.useStaticQuery)("2456312558").site.pathPrefix,Q=y?n.pathname.replace(y,""):n.pathname,P=p?Q.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",D=f||B;return Object(m.b)(l.a,{tabs:p,homepage:!1,theme:D,pageTitle:g,pageDescription:x,pageKeywords:v,titleType:d},Object(m.b)(u,{title:i?Object(m.b)(i,null):g,label:"label",tabs:p,theme:D}),p&&Object(m.b)(O,{title:g,slug:Q,tabs:p,currentTab:P}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:c}),Object(m.b)(T,{date:E})),Object(m.b)(h.a,{pageContext:t,location:n,slug:Q,tabs:p,currentTab:P}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},"F/NG":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return m}));var n,i=a("wx14"),A=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),s=(a("qKvR"),["components"]),l=function(){return Object(r.b)("span",null,"Mapping Assist - AI Powered Integration Demo")},b={},c=(n="FeatureCard",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),d={Title:l,_frontmatter:b},p=o.a;function m(e){var t=e.components,a=Object(A.a)(e,s);return Object(r.b)(p,Object(i.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{title:"Mapping Assist Demo",color:"dark",mdxType:"FeatureCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.33333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBP/EABcBAAMBAAAAAAAAAAAAAAAAAAACAwT/2gAMAwEAAhADEAAAAccy2ekDf//EABcQAQEBAQAAAAAAAAAAAAAAAAEAAhH/2gAIAQEAAQUCXs7nV//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABUQAQEAAAAAAAAAAAAAAAAAABAR/9oACAEBAAY/Aq//xAAYEAADAQEAAAAAAAAAAAAAAAABESEAQf/aAAgBAQABPyElouDGTNxCYt//2gAMAwEAAgADAAAAEH//AP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxBBbAv/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8QmI//xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAxQWH/2gAIAQEAAT8QjyHQQxAEP2ea2IJOb//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/cp4i-demohub/static/ee7a311f866abf28daed378d91720b0f/2e753/mapping.jpg",srcSet:["/cp4i-demohub/static/ee7a311f866abf28daed378d91720b0f/69549/mapping.jpg 288w","/cp4i-demohub/static/ee7a311f866abf28daed378d91720b0f/473e3/mapping.jpg 576w","/cp4i-demohub/static/ee7a311f866abf28daed378d91720b0f/2e753/mapping.jpg 1152w","/cp4i-demohub/static/ee7a311f866abf28daed378d91720b0f/92dea/mapping.jpg 1500w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(r.b)("h2",null,"Mapping Assist Demo"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Demo Overview"),": This demo shows how mapping assist can significantly accelerate building an API by reducing the time it takes to map complex fields."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Demo Description"),": This shows the use of the App Connect Designer mapping assist capability to speed the transformation of complex data formats used by SaaS applications such as Salesforce and Office 365."),Object(r.b)("p",null,"Data transformation can take a significant proportion of the development time - reducing this is a clear productivity gain."),Object(r.b)("p",null,"Not only does the Mapping Assist have built-in capabilities, it also has the ability to learn as your users create more integrations."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Key Demo Points"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Reduces Developer Time"),Object(r.b)("li",{parentName:"ul"},"Auto map all fields wherever the matching confidence is higher than 80%."),Object(r.b)("li",{parentName:"ul"},"Relevant and fine-grained field level suggestions are provided when confidence is between 30%-100%."),Object(r.b)("li",{parentName:"ul"},"Suggestions are provided based on multiple sources, including all the previous nodes in the flow, for greater accuracy."),Object(r.b)("li",{parentName:"ul"},"Mapping suggestions for flat structures as well as complex, nested mapping fields are provided."),Object(r.b)("li",{parentName:"ul"},"Previously selected mappings are remembered and shown as top suggestions when a similar source and target mapping is attempted.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Product Components"),": ACE"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Product Version"),": CP4I 4.1 on OCP 4.6"),Object(r.b)("p",null,"Here you will be able to prepare yourself to deliver this demo. To deliver this demo, follow the steps below:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/cp4i-demohub/demos/car-repair/understand"},"Understand the Demo"),": Learn the Demo Scenario, check the Demo Video and review the Demo Sequence"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/cp4i-demohub/demos/car-repair/setup"},"Deliver the Demo"),": Check the different delivery options and be ready to deliver the demo")))}m.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-salesdemos-mapping-new-overview-mdx-b4914c7b29283a003b79.js.map