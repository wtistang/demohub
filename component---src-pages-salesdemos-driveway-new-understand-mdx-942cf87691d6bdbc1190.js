(window.webpackJsonp=window.webpackJsonp||[]).push([[55,42,43,70,71,73,74,75],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),i=a.n(r),c=a("Wbzz"),l=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),u=a.n(b),d=a("QH2O"),m=a.n(d),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,l=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),x=a("dI71"),O=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===o,l=new RegExp(o+"/?(#.*)?$"),s=n.replace(l,a);return Object(p.b)("li",{key:e,className:u()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(p.b)(c.Link,{className:O.link,to:""+s},e))}));return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:O.list},r))))))},t}(o.a.Component),y=a("MjG9"),w=a("CzIb"),A=a("Asxa"),T=a("OIbQ"),k=a.n(T),N=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(A.c,{className:k.a.row},Object(p.b)(A.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,b=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,m=b.tabs,g=b.title,x=b.theme,O=b.description,A=b.keywords,T=b.date,k=Object(w.a)().interiorTheme,D=Object(c.useStaticQuery)("2456312558").site.pathPrefix,P=D?n.pathname.replace(D,""):n.pathname,C=m?P.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",E=x||k;return Object(p.b)(s.a,{tabs:m,homepage:!1,theme:E,pageTitle:g,pageDescription:O,pageKeywords:A,titleType:d},Object(p.b)(h,{title:o?Object(p.b)(o,null):g,label:"label",tabs:m,theme:E}),m&&Object(p.b)(v,{title:g,slug:P,tabs:m,currentTab:C}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:u}),Object(p.b)(N,{date:T})),Object(p.b)(j.a,{pageContext:t,location:n,slug:P,tabs:m,currentTab:C}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},qskB:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return l})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return h}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),["components"]),l=function(){return Object(r.b)("span",null,"Driveway Dent Deletion - Accelerate Delivery")},s={},b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},u=b("AnchorLinks"),d=b("AnchorLink"),m={Title:l,_frontmatter:s},p=i.a;function h(e){var t=e.components,a=Object(o.a)(e,c);return Object(r.b)(p,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(u,{mdxType:"AnchorLinks"},Object(r.b)(d,{mdxType:"AnchorLink"},"Demo Scenario"),Object(r.b)(d,{mdxType:"AnchorLink"},"Demo Video"),Object(r.b)(d,{mdxType:"AnchorLink"},"Demo Flow")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Demo Scenario"),Object(r.b)("p",null,"The business scenario for this demo is a common one where a user wishes to enter a request for a service or product and have multiple quotes for that service returned from different vendors so that they can choose which one is best for them."),Object(r.b)("p",null,"It might not be a case of “I’ll take the cheapest” as that may  not be available quickly enough, in the right colour, or at the right time. For example when requesting quotes to fly from New York to Los Angeles, a direct flight may be more expensive than a stop over: Whether it is worth the extra money to fly direct is up to the user."),Object(r.b)("p",null,"Our scenario concerns someone who has incurred minor damage to their car –it’s not serious, more of a small dent. They wantit repaired at home, on their driveway by a mobile repairer."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"451px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAADH0lEQVQoz03Sf0zUdRzH8Q/V+jFQDrk77nvcyR33i/MQPcJ52igPvTZztrG1edDY9YNAMbgfePw6OJSMEFAm0O+2Q6+5yag/NGnk1FxF2NKsAw2nYAGtWrZaJcWEZ9/mP/3x2Gvv91/vvfcSSqWK7GwzBmM2RqMJjUaS0yDv/puNchqxmE3Y7TYkSSJJCMT/3JN0l1qVTnJyMkKl1uBwOMjJycFmtZKhySRNKWEw2dAbLGj0FjL0VvSmXBTpGsR9Ch5KSSdl2Qo5FYh7ZUkKUjPMPLBci+h5a4j4kRhH4+/y3vE49YdOsMx7CYX3gmwMnXcYZ/kpTGUjrCgZRfnkAMU+P1U1L/Ls7joKfYfY4OthvbeDXG8M8fHln5mcuMy5T8a4MZkgduYXVjaAJQrW+j/YFurF1/o6VZFuHmu6iqpgK6nq+0nVKkiTLIRafET2yyIllAS6EYWRKfbGLvFE2zWK9s2xvu02ns55XK8sUdRwk95QlNpoO3UBH82xb7GEbmHY/R2aihnUMmtgGqt/ipzQdczBWUSBJ0w03MC20hDOp/qwtsCqyD/kty3havmVdWXv43phiOd6Erg75smqSFC+b4jmnkEq9p9kY+gCruAYG4Oj5PmvIHYe+Izejk6KPMV4KgdYvRce7/4b75tQ0PQj4ZpWGquqiTS2sOPVv9Ba87CoBVatIDNTR0d4C2+0Pkp/4yPyTxsRUuk5VuZ5eDAljRR3P/Y2cEZvs6F9CUfdLY4fG2T45AhHjg6yo+830srnyNp1HVP1NKryadYEJ3AGE6wNJLAHphC6ko8wr9lCslyD5e7D6Jtg68F53F2L+N+Z5ZvEOB+cH+fDT8d57cQNpMpZtjeP4j94lsruUR4OXyM3NMnaPVexBb5HZAb+RNo1h7RzFp3/d9Jr7lDct8CmziXeHvmBmYnzXPz8LJNfjnBx/CYOl5N1qwX5qwQ2u4UDL2+nv8tNV+tmnvE3yRfW3kEX5q49i2iDCziaFzDWL1La+xNdx77mpfgV2uNfUTcwQ9bzY0hPn0Zbdgal3MvC2tNsDp9iU3CY/Oov+BeB3uxX/k3cVAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"scenario 1",title:"scenario 1",src:"/cp4i-demohub/static/4fb68a74b4e46adcd45138ef6ebcfc94/364a7/scenario-1.png",srcSet:["/cp4i-demohub/static/4fb68a74b4e46adcd45138ef6ebcfc94/7fc1e/scenario-1.png 288w","/cp4i-demohub/static/4fb68a74b4e46adcd45138ef6ebcfc94/364a7/scenario-1.png 451w"],sizes:"(max-width: 451px) 100vw, 451px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("p",null,"They use an app to get some quotes from three repair companies.They provide their name, eMail, License Plate, State and the number of dents in each part of their car."),Object(r.b)("p",null,"Each company providesa quote for the repair and the earliest date that they could perform the repair. These quotes are returned to the user but also stored in a database so that the user can retrieve them for future reference."),Object(r.b)("p",null,"In a real-world application, we could have the user accepting the quote, changing their appointment time etc, all through the API. We supply the source for all of the artefacts so you can extend the scenario if you wish."),Object(r.b)("hr",null),Object(r.b)("h3",null,"Demo Video"),Object(r.b)("p",null,"Do you want to understand better the Dent Deletion Demo? Check this ",Object(r.b)("a",{parentName:"p",href:"https://ibm.ent.box.com/s/7wghq4i0iwye39yxmgywttw15meemauo"},"video"),"."),Object(r.b)("hr",null),Object(r.b)("h3",null,"Demo Flow"),Object(r.b)("p",null,"Here is the list of the macro steps of this Demo:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Scenario Introduction"),Object(r.b)("li",{parentName:"ul"},"Deployments using a fully automated CI/CD pipeline"),Object(r.b)("li",{parentName:"ul"},"Multiple components being deployed and bound together automatically"),Object(r.b)("li",{parentName:"ul"},"Updating integration code with zero downtime"),Object(r.b)("li",{parentName:"ul"},"Applying fixpacks with zero downtime"),Object(r.b)("li",{parentName:"ul"},"Cross-Component Tracing through the stack (Coming)"),Object(r.b)("li",{parentName:"ul"},"Different environments (Dev, Test) showing route to live and isolation of environments"),Object(r.b)("li",{parentName:"ul"},"Environment-Specific Configuration and Policy overrides."),Object(r.b)("li",{parentName:"ul"},"Summary")),Object(r.b)("p",null,"On the Deliver page, you have the Guided Tour for each Delivery Option, explaining everything that you will do in each macro step."),Object(r.b)("hr",null))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-salesdemos-driveway-new-understand-mdx-942cf87691d6bdbc1190.js.map