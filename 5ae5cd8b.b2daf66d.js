(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var o=n(3),l=n(7),i=(n(0),n(104)),a={id:"connect-with-google",title:"Connect Homeware with Google",sidebar_label:"Connect with Google",slug:"/connect-google"},c={unversionedId:"connect-with-google",id:"connect-with-google",isDocsHomePage:!1,title:"Connect Homeware with Google",description:"Once you have installed Homeware in your server, you must tell Google where your server is. Follow this instrucctions:",source:"@site/docs/connect-with-google.md",slug:"/connect-google",permalink:"/Homeware-LAN/docs/connect-google",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/connect-with-google.md",version:"current",sidebar_label:"Connect with Google",sidebar:"someSidebar",previous:{title:"Install Homeware",permalink:"/Homeware-LAN/docs/intall"},next:{title:"Connecting hardware to Homeware",permalink:"/Homeware-LAN/docs/connecting-hardware"}},b=[{value:"Activity Controls",id:"activity-controls",children:[]},{value:"Actions on Google Project",id:"actions-on-google-project",children:[]},{value:"Link your Account",id:"link-your-account",children:[]}],r={rightToc:b};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Once you have installed Homeware in your server, you must tell Google where your server is. Follow this instrucctions:"),Object(i.b)("p",null,"This is ",Object(i.b)("strong",{parentName:"p"},"important"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Follow this steps one by one and in order."),Object(i.b)("li",{parentName:"ul"},"Be patient"),Object(i.b)("li",{parentName:"ul"},"Use the same Google account in all steps")),Object(i.b)("h2",{id:"activity-controls"},"Activity Controls"),Object(i.b)("p",null,"Go to ",Object(i.b)("a",{href:"https://myaccount.google.com/activitycontrols",target:"blanck"},"Activity Control")," by Google and enable:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Web & App Activity"),Object(i.b)("li",{parentName:"ul"},"Device Iformation"),Object(i.b)("li",{parentName:"ul"},"Voice & Audio Activity")),Object(i.b)("kbd",null,Object(i.b)("img",{src:"/Homeware-LAN/img/connect-with-google/B1C1.png",width:"400"})),Object(i.b)("kbd",null,Object(i.b)("img",{src:"/Homeware-LAN/img/connect-with-google/B1C2.png",width:"400"}),"  ",Object(i.b)("img",{src:"/Homeware-LAN/img/connect-with-google/B1C3.png",width:"400"})),Object(i.b)("h2",{id:"actions-on-google-project"},"Actions on Google Project"),Object(i.b)("p",null,"Go to ",Object(i.b)("a",{href:"https://console.actions.google.com/",target:"blanck"},"Actions on Google console"),"."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Select ",Object(i.b)("inlineCode",{parentName:"li"},"New project"),"."),Object(i.b)("li",{parentName:"ol"},"Write a name for the project.")),Object(i.b)("kbd",null,Object(i.b)("img",{src:"/Homeware-LAN/img/connect-with-google/B2C2.png"})),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Select ",Object(i.b)("inlineCode",{parentName:"li"},"Home control"),".")),Object(i.b)("kbd",null,Object(i.b)("img",{src:"/Homeware-LAN/img/connect-with-google/B2C3.png"})),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Select ",Object(i.b)("inlineCode",{parentName:"li"},"Smart home"),".")),Object(i.b)("kbd",null,Object(i.b)("img",{src:"/Homeware-LAN/img/connect-with-google/B2C4.png"})),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go to ",Object(i.b)("inlineCode",{parentName:"p"},"Develop")," from the top menu and select ",Object(i.b)("inlineCode",{parentName:"p"},"Invocation")," in the left side menu.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Write ",Object(i.b)("inlineCode",{parentName:"p"},"Home")," as Display Name and click ",Object(i.b)("inlineCode",{parentName:"p"},"Save"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select ",Object(i.b)("inlineCode",{parentName:"p"},"Develop")," from the top menu and then select ",Object(i.b)("inlineCode",{parentName:"p"},"Actions")," in the left side menu.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add the fullfillment URL using your domain."))),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"https://<your.domain.com>/smarthome/\n")),Object(i.b)("ol",{start:9},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select ",Object(i.b)("inlineCode",{parentName:"p"},"Save"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go to ",Object(i.b)("inlineCode",{parentName:"p"},"Account Linking")," in the left side menu.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Enter the Client Information that the Homeware assistant gives you and click ",Object(i.b)("inlineCode",{parentName:"p"},"Next"),":")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Enable ",Object(i.b)("inlineCode",{parentName:"p"},"Google to transmit clientID and secret via HTTP basic auth header")," in Configure your Client and clicking 'Save'.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go to the ",Object(i.b)("inlineCode",{parentName:"p"},"Test")," section in the top menu.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select ",Object(i.b)("inlineCode",{parentName:"p"},"START TESTING"),"."))),Object(i.b)("h2",{id:"link-your-account"},"Link your Account"),Object(i.b)("p",null,"Use your smartphone to link the project. The Home App changes frequently, so it is possible that this steps are not correct."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open Google Home App.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the ",Object(i.b)("inlineCode",{parentName:"p"},"+")," button at the top left corner.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select 'Set a device'.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select ",Object(i.b)("inlineCode",{parentName:"p"},"Works with Google"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the options that looks like:"))),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-Markdown"}),"[test] Home\n")),Object(i.b)("p",null,"Up & running"),Object(i.b)("p",null,"Now we should see a light called Bulb in our Google Home App."),Object(i.b)("p",null,"Note: If you open the Bulb in the Home App and the Bulb it is not online (there isn't any hardware bulb) the app will say ",Object(i.b)("inlineCode",{parentName:"p"},"Not responding")," and the ",Object(i.b)("inlineCode",{parentName:"p"},"online")," will change to false in the database. This is normal, it is part of the API."))}p.isMDXComponent=!0}}]);