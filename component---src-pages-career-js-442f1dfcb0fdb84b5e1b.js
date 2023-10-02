"use strict";(self.webpackChunkmeyer_taffel=self.webpackChunkmeyer_taffel||[]).push([[271],{4265:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(7294);var a=e=>{let{size:t}=e;return n.createElement("div",{className:"MainLogo-module--logoCircle--53017 mainLogo",style:{width:t,height:t}})}},4993:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7294),a=r(1883);var l=e=>{let{to:t,name:r}=e;return n.createElement(a.Link,{to:t,className:"FlatButton-module--link--4f4bb","data-ripple":"true"},r)},o=r(4265);var c=()=>{let e="undefined"!=typeof window&&window.location.pathname===(0,a.withPrefix)("/");return n.createElement("div",{className:"HeaderComponent-module--header--eae43"},e?n.createElement("div",{className:"HeaderComponent-module--emptyDiv--423da"}):n.createElement(a.Link,{to:"/"},n.createElement(o.Z,{size:70})),n.createElement("div",{className:"HeaderComponent-module--links--c07f3"},n.createElement(l,{to:"/about/",name:"About"}),n.createElement(l,{to:"/career/",name:"Career"}),n.createElement(l,{to:"/education/",name:"Education"}),n.createElement(l,{to:"/contact/",name:"Contact"})))},i=r.p+"static/backgroundGrayscale-583a2565e7868a501c0763481fc39346.svg";var s=e=>{let{children:t}=e;return n.createElement("div",{className:"Background-module--background--c375a",style:{backgroundImage:"url("+i+")"}},t)};var m=e=>{let{children:t}=e;return n.createElement(s,null,n.createElement(c,null),n.createElement("div",{className:"index-module--pages--54c49"},console.log("sourced from: https://github.com/jangerhard/PersonalGatsbyWebsite"),t))}},1643:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var n={};r.r(n),r.d(n,{breakline:function(){return c},button:function(){return i},company:function(){return s},container:function(){return m},dates:function(){return u},desc:function(){return d},fadein:function(){return h},hidden:function(){return p},icons:function(){return f},image:function(){return g},location:function(){return v},moreBtn:function(){return E},roleDesc:function(){return b},title:function(){return k},unhidden:function(){return w}});var a=r(7294),l=r(4578),o="CareerPage-module--roleDesc--849e3",c="CareerShowcase-module--breakline--d7d3a",i="CareerShowcase-module--button--59fcb",s="CareerShowcase-module--company--8e8c3",m="CareerShowcase-module--container--bfc6a",u="CareerShowcase-module--dates--cd991",d="CareerShowcase-module--desc--9df9e",h="CareerShowcase-module--fadein--c1fdc",p="CareerShowcase-module--hidden--1c025",f="CareerShowcase-module--icons--1a996",g="CareerShowcase-module--image--95523",v="CareerShowcase-module--location--5f608",E="CareerShowcase-module--moreBtn--836c0",b="CareerShowcase-module--roleDesc--5438c",k="CareerShowcase-module--title--4b570",w="CareerShowcase-module--unhidden--42c21";let C=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){return a.createElement("a",{className:m,href:this.props.url,target:this.props.target,onMouseEnter:this.props.hoverOn,onMouseLeave:this.props.hoverOff},a.createElement("h3",{className:k},this.props.title),a.createElement("hr",{className:c}),a.createElement("div",{className:s},this.props.company),a.createElement("div",{className:u},this.props.dates),this.props.image&&a.createElement("img",{className:[g,n[this.props.hovering?"hidden":"unhidden"]].join(" "),src:this.props.image,alt:""}),a.createElement("div",{className:[d,n[this.props.hovering?"hidden":"unhidden"]].join(" ")},a.createElement("span",null,this.props.shortDesc),a.createElement("span",{className:E},"Read more.")),a.createElement("div",{className:[b,n[this.props.hovering?"unhidden":"hidden"]].join(" ")},this.props.roleDesc))},t}(a.Component);var H=C,y=r(8420),D=r.p+"static/theroadboomer-6eecee99335974f21c03efc685c4f478.png",N=r.p+"static/wekka_site-f4cbe8218baaeab7b42cd7032c32b1fa.png",S=r.p+"static/bearface_site-473976616d84a2918d261f76c9308529.png";var F=function(e){function t(t){var r;return(r=e.call(this,t)||this).hoverResearchHandler=()=>{r.setState({researchHovering:!r.state.researchHovering})},r.hoverFreelanceHandler=()=>{r.setState({freelanceHovering:!r.state.freelanceHovering})},r.hoverWekkaHandler=()=>{r.setState({wekkaHovering:!r.state.wekkaHovering})},r.hoverBearfaceHandler=()=>{r.setState({bearfaceHovering:!r.state.bearfaceHovering})},r.state={researchHovering:!1,freelanceHovering:!1,wekkaHovering:!1,bearfaceHovering:!1},r}return(0,l.Z)(t,e),t.prototype.render=function(){return a.createElement("div",{className:"CareerPage-module--career--54109"},a.createElement("div",{className:"CareerPage-module--grid--34999"},a.createElement(H,{title:a.createElement("div",null,a.createElement("span",null,"Undergraduate"),a.createElement("span",null,"Researcher")),company:"Lathrop Labs @ UMD",dates:"Summer 2021 - Present",image:y.Z,shortDesc:"Lab member focusing on R&D for drone-based applied physics/geophysics.",roleDesc:a.createElement("div",{className:o},a.createElement("p",null,"Research Responsibilities"),a.createElement("ul",null,a.createElement("li",null,"Design/dev/fabrication of landing gear & sensor package. ",a.createElement("small",null,"(~$90k worth of equipment at stake).")),a.createElement("li",null,"Use of geophysical methods to interpret magnetic data and categorize subsurface anomalies."),a.createElement("li",null,"FAA-Certified Drone pilot"),a.createElement("li",null,a.createElement("small",null,"Taffel, M., et al. Use of Magnetic Gradiometry for near surface detection and mapping. (In preparation).")))),url:"https://complex.umd.edu/",target:"_blank",hovering:this.state.researchHovering,hoverOn:this.hoverResearchHandler,hoverOff:this.hoverResearchHandler}),a.createElement(H,{title:a.createElement("div",null,a.createElement("span",null,"Freelance"),a.createElement("span",null,"Web Developer")),company:"Freelance | Upwork.com",dates:"Aug 2019 - Fall 2021",image:D,shortDesc:"Freelancer specializing in creating niche solutions for those times when website generators fall short.",roleDesc:a.createElement("div",{className:o},a.createElement("p",null,"Notable Projects:"),a.createElement("ul",null,a.createElement("li",null,"TotalDietetics",a.createElement("br",null),a.createElement("i",null,"Diet Planner imbedded in a Wix site.")),a.createElement("li",null,"The Road Boomer",a.createElement("br",null),a.createElement("i",null,"Photojournalist's online presence.")),a.createElement("li",null,"PictureBuild",a.createElement("br",null),a.createElement("i",null,"Landcaping companies' quote generating portal.")),a.createElement("li",null,"Todd Boss Originals",a.createElement("br",null),a.createElement("i",null,"Artists' blog. (backend only)")))),url:"https://www.upwork.com/fl/meyertaffel",target:"_blank",hovering:this.state.freelanceHovering,hoverOn:this.hoverFreelanceHandler,hoverOff:this.hoverFreelanceHandler}),a.createElement(H,{title:a.createElement("div",null,a.createElement("span",null,"Co Founder"),a.createElement("span",null,"Director of R&D")),company:"Wekka.co",dates:"Dec 2017 - Mar 2019",image:N,shortDesc:"As co-founder I had a hand in all aspects of growing an MVP. Primarily responsible for software dev.",roleDesc:a.createElement("div",{className:o},a.createElement("p",null,"Founder Responsibilities:"),a.createElement("ul",null,a.createElement("li",null,"Developed business strategy and kept Wekka on target."),a.createElement("li",null,"Grew Wekka to over 1k users in the first 6 months of operations.")),a.createElement("p",null,"Technical Responsibilities:"),a.createElement("ul",null,a.createElement("li",null,"Designed and coded matching algorithm I.P."),a.createElement("li",null,"Chiefly responsible for developing all aspects of our stack. ",a.createElement("small",null,"(Rails/PostgreSQL/Bootstrap/Jquery).")))),target:"_blank",hovering:this.state.wekkaHovering,hoverOn:this.hoverWekkaHandler,hoverOff:this.hoverWekkaHandler}),a.createElement(H,{title:a.createElement("div",null,a.createElement("span",null,"Full Stack Web"),a.createElement("span",null,"Developer")),company:"BearFace Media",dates:"Nov 2017 - Mar 2018",image:S,shortDesc:"First foray into full-stack web dev after completing an 18 month bootcamp.",roleDesc:a.createElement("div",{className:o},a.createElement("p",null,"Responsibilities:"),a.createElement("ul",null,a.createElement("li",null,"Worked directly with clients to customize UI for their needs."),a.createElement("li",null,"Developed the scheduler & quote generator for BF’s app suite."),a.createElement("li",null,"Updated old source code to bring it in-line with modern best-practices."))),target:"_blank",hovering:this.state.bearfaceHovering,hoverOn:this.hoverBearfaceHandler,hoverOff:this.hoverBearfaceHandler})))},t}(a.Component),P=r(4993);var R=()=>a.createElement(P.Z,null,a.createElement(F,null))},8420:function(e,t,r){t.Z=r.p+"static/umdLogo241x174-829534584b60b2b0f3031231ce5c83a9.png"}}]);
//# sourceMappingURL=component---src-pages-career-js-442f1dfcb0fdb84b5e1b.js.map