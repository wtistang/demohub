(window.webpackJsonp=window.webpackJsonp||[]).push([[60,42,43,70,71,73,74,75],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),s=a("NmYn"),o=a.n(s),r=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),d=a("TSYQ"),b=a.n(d),p=a("QH2O"),u=a.n(p),m=a("qKvR"),g=function(e){var t,a=e.title,i=e.theme,n=e.tabs,s=void 0===n?[]:n;return Object(m.b)("div",{className:b()(u.a.pageHeader,(t={},t[u.a.withTabs]=s.length,t[u.a.darkMode]="dark"===i,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,i=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,s=n.baseUrl,o=n.subDirectory,l=s+"/edit/"+n.branch+o+"/src/pages"+t;return s?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},y=a("FCXl"),A=a("dI71"),v=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,n=i.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),s=a===n,l=new RegExp(n+"/?(#.*)?$"),c=i.replace(l,a);return Object(m.b)("li",{key:e,className:b()((t={},t[v.selectedItem]=s,t),v.listItem)},Object(m.b)(r.Link,{className:v.link,to:""+c},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:v.list},s))))))},t}(n.a.Component),x=a("MjG9"),w=a("CzIb"),j=a("Asxa"),k=a("OIbQ"),T=a.n(k),N=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(j.c,{className:T.a.row},Object(m.b)(j.a,null,Object(m.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,s=t.frontmatter,d=void 0===s?{}:s,b=t.relativePagePath,p=t.titleType,u=d.tabs,h=d.title,A=d.theme,v=d.description,j=d.keywords,k=d.date,T=Object(w.a)().interiorTheme,I=Object(r.useStaticQuery)("2456312558").site.pathPrefix,z=I?i.pathname.replace(I,""):i.pathname,B=u?z.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",D=A||T;return Object(m.b)(c.a,{tabs:u,homepage:!1,theme:D,pageTitle:h,pageDescription:v,pageKeywords:j,titleType:p},Object(m.b)(g,{title:n?Object(m.b)(n,null):h,label:"label",tabs:u,theme:D}),u&&Object(m.b)(O,{title:h,slug:z,tabs:u,currentTab:B}),Object(m.b)(x.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:b}),Object(m.b)(N,{date:k})),Object(m.b)(y.a,{pageContext:t,location:i,slug:z,tabs:u,currentTab:B}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Yvbb:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return g}));var i=a("wx14"),n=a("zLVn"),s=(a("q1tI"),a("7ljp")),o=a("013z"),r=(a("qKvR"),["components"]),l=function(){return Object(s.b)("span",null,"Mapping Assist - AI Powered Integration Demo")},c={},d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",t)}},b=d("AnchorLinks"),p=d("AnchorLink"),u={Title:l,_frontmatter:c},m=o.a;function g(e){var t=e.components,a=Object(n.a)(e,r);return Object(s.b)(m,Object(i.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)(b,{mdxType:"AnchorLinks"},Object(s.b)(p,{mdxType:"AnchorLink"},"Demo Scenario"),Object(s.b)(p,{mdxType:"AnchorLink"},"Demo Video"),Object(s.b)(p,{mdxType:"AnchorLink"},"Demo Flow")),Object(s.b)("hr",null),Object(s.b)("h2",null,"Demo Scenario"),Object(s.b)("p",null,"As part of IBM Cloud Pak® for Integration 2020.2.1, IBM® App Connect has added Artificial Intelligence (AI) powered Mapping Assist to help organizations integrate applications and data more quickly compared to manual mapping."),Object(s.b)("p",null,"Mapping Assist uses a pre-trained AI algorithm to provide organizations with intelligent, customized data map suggestions at the point of building integrations. The algorithm is trained and curated to provide suggestions on flat structures as well as complex, nested mapping fields. This feature accelerates the speed of development, shortens time to value, and improves overall user experience."),Object(s.b)("p",null,"The need for digital modernization is more important than ever before. During this age of cloud and digital transformation, doing business faster and easier is the goal of every successful organization. Organizations need to be able to rapidly respond to changing business requirements in order to remain competitive in their markets. With an increase in the diversity and number of applications coupled with a broad range of skills across a business, from line-of-business users to integration experts, it is a challenge to build integrations quickly, consistently, and accurately."),Object(s.b)("p",null,"Data mapping is among the most important design steps in building an integration flow. This design-time task is usually the most tedious, time-consuming, complex and error-prone because it requires deep understanding of all the data fields on the source and target systems. Building a successful data mapping also requires business analysis, domain expertise and technical knowledge on both source and target systems."),Object(s.b)("p",null,"Our goal behind creating Mapping Assist was to simplify and automate data mapping, and when coupled with the extensive list of pre-built, security rich connectors, so that every user across the enterprise, from integration experts to line-of-business professionals, can accelerate the delivery of value to the business through integration."),Object(s.b)("p",null,"Mapping Assist has been designed with an architectural approach to provide AI based mapping suggestions within a containerized environment. With this approach IBM App Connect along with Mapping Assist works along-side your integrations, either within your on-prem OR on any cloud environment where containers are deployed. This feature works perfectly even if the product is running on a laptop, as the minimal resources required to run this feature is just 1 CPU and 1 GB of memory."),Object(s.b)("p",null,"Integrations are not always point to point-mapping data from one source to one target. In reality, data from multiple sources systems are mapped to the target based on the business requirement. One of the key features of Mapping Assist is that it can analyze fields from multiple source systems and suggest the relevant mappings for the given target system."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"468px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.31944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACc0lEQVQ4y42S608TURDF+48aY/xq4ge/YGIMhihqRBIVRA0UNCpVKwjBQlvCoyACIdACBZo+QAql9LW77bbd7e7+vG1pLSiJNznZ3D0z586ZGdv2kYxvJ8GPvSQLAv5fEqbFpadKZbNZFEUhnU4Tj8eRJKnOWRa28fUE7XY3HfZJHjoWcSzto+RVdL1CpShT3PJQ9LtQz6DnTvBOz+Bxu/F6Pfj9G0I41XzOli3oJAsGKdUkma+QFnfLNKmIUqRYAGmsE3niCYrrKdK3+5QjyyTTOaKRCOFojIYZrSJyDBObL5RmyOPn/bTAbBDvZoJSqYzgUeM7HH59hLPzBq7uW8QcHZQiKzUBRS3j2s4y4PbT45znnS/C6r4kBPdSvJlYYWBimUH3Op7NYzRNR+ghH2yjep6zNtjOTG8b+alu1PAyhuAykoIrkOTj7DavnLN8XoqycahgS+c1TosiQIOksJ0Sd9Mw0AyLXLRuOe/qEpa7yI2KCsM/m/0yW6ZnNYYysZGgY8jDg7duHg/7+LQUQymooh8GZlmlHFpADrhRNr0Y4UUoy3UB0zxTsmpCjWMLHinMbR3iqyJ4jP8g11ybRpgucotahdOMRPz4mHxeaa7JRdj+vWxV8iyhOvFKBVmWGBkZwW4fxB8I1MKqlmsxLam26g/zDFZL+fVv3ZZl6Bi6hpzLcJI4IpvJnKuQi4J/QRDl3TmOJvsIjb8kLBD7/pqDqX4S03a0NSdGKf9HtFXwvNOaz1oPSysOQkO3GWq7wvDdazjvXefDnassPLtJwd2NrqT+X7Be4TzZWTu7431sjrwgONrDzlgvcU8/xdUvl1b4Gx2fuYz9UU1IAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"scenario 1",title:"scenario 1",src:"/cp4i-demohub/static/a72ae2270283dc37909d6691c914226b/d5a55/scenario-1.png",srcSet:["/cp4i-demohub/static/a72ae2270283dc37909d6691c914226b/7fc1e/scenario-1.png 288w","/cp4i-demohub/static/a72ae2270283dc37909d6691c914226b/d5a55/scenario-1.png 468w"],sizes:"(max-width: 468px) 100vw, 468px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",null,"Now let’s talk about how it all works internally, in terms of how the algorithm determines the relevant mapping suggestions for a given target system and the list of source systems."),Object(s.b)("p",null,"Our Al algorithm is pre-trained and designed to provide suggestions purely based on the metadata available from the source and target systems. The metadata used are field name, display name, description, data type and more importantly the domain knowledge."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"718px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.93055555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABn0lEQVQoz32RXW8SQRiF9+d64U1/gZfqbX+B8cbaGAuWFFqMLW2xQUGUT4kr8tFl2aXdpewXC+w8zmw1Nk3jSd7J5GTOyZzzaiBwnWts2+Jm7qIghFDHv/sdiHt84HtMDAPn+irVaL9mAbmLLrlyg8Nan4kb3QqSRM6GRI4QSfpYcckfTsHxVxxWf5It1aVHh46xQOtbXmpYqHynUNUZ2guSzYr7EA8wluunGqXNV3o0Rw5abzLnVbHGu3KbvXKXgbVgGcfMB22Gp7voH3bw9CrCdxifvqZ39BLzIkM4n2HdLHlTapA5a7J31qaq22i65bMvf5gtfeHg0w8ZOcQPI8aVA062t8g+fcT0fBe8KbUXT3j77DHNnee45gBrEZOXmv3zBllp2p14MvIsJP9Zlx02KdaHGE5IFAYkaxl7FUIs76votsdNLJNKXlayjpeYbkDx60hqW6lHx5CGuh1SkMtQ5PtvY0ZXPmKzfrA3cWfUaTqB1FyS+9iSXfbpqB/qsyjdrop83DYx/m5ZbfU/o2DLyMctk8xJjaP6gN405DdWxkzsiWJDrgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"scenario 2",title:"scenario 2",src:"/cp4i-demohub/static/96c0f4abf41b471f12713f4a9d5955be/70c24/scenario-2.png",srcSet:["/cp4i-demohub/static/96c0f4abf41b471f12713f4a9d5955be/7fc1e/scenario-2.png 288w","/cp4i-demohub/static/96c0f4abf41b471f12713f4a9d5955be/a5df1/scenario-2.png 576w","/cp4i-demohub/static/96c0f4abf41b471f12713f4a9d5955be/70c24/scenario-2.png 718w"],sizes:"(max-width: 718px) 100vw, 718px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",null,"By taking all these metadata the AI algorithm derives a semantic meaning separately for each source and target field, and then predicts how similar both these fields are by providing a confidence score if they are mappable."),Object(s.b)("hr",null),Object(s.b)("h3",null,"Demo Video"),Object(s.b)("p",null,"Do you want to understand better the Mapping Assist Demo? Check the video below."),Object(s.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(s.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/kWc8-k2G3IY",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(s.b)("hr",null),Object(s.b)("h3",null,"Demo Flow"),Object(s.b)("p",null,"Here is the list of the macro steps of this Demo:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Scenario Introduction"),Object(s.b)("li",{parentName:"ul"},"Auto map all fields wherever the matching confidence is higher than 80%."),Object(s.b)("li",{parentName:"ul"},"Relevant and fine-grained field level suggestions are provided when confidence is between 30%-100%."),Object(s.b)("li",{parentName:"ul"},"Suggestions are provided based on multiple sources, including all the previous nodes in the flow, for greater accuracy."),Object(s.b)("li",{parentName:"ul"},"Mapping suggestions for flat structures as well as complex, nested mapping fields are provided."),Object(s.b)("li",{parentName:"ul"},"Previously selected mappings are remembered and shown as top suggestions when a similar source and target mapping is attempted."),Object(s.b)("li",{parentName:"ul"},"Summary")),Object(s.b)("p",null,"On the Deliver page, you have the Guided Tour for each Delivery Option, explaining everything that you will do in each macro step."),Object(s.b)("hr",null))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-salesdemos-mapping-new-understand-mdx-084de939d84a99217e47.js.map