"use strict";(self.webpackChunkdesign_methods=self.webpackChunkdesign_methods||[]).push([[838],{3905:function(e,t,i){i.d(t,{Zo:function(){return h},kt:function(){return d}});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),m=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},h=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=m(i),d=n,f=p["".concat(c,".").concat(d)]||p[d]||l[d]||o;return i?a.createElement(f,r(r({ref:t},h),{},{components:i})):a.createElement(f,r({ref:t},h))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var m=2;m<o;m++)r[m]=i[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4039:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return c},mark:function(){return d},metadata:function(){return h},toc:function(){return p}});var a=i(7462),n=i(3366),o=(i(7294),i(3905)),r=i(4996),s=["components"],c={id:"methods","// hide_table_of_contents":!0,"// displayed_sidebar":"terminologyDesignSideBar",date:20221129},m="Methods",h={unversionedId:"methods",id:"methods",title:"Methods",description:"<img",source:"@site/docs/methods.md",sourceDirName:".",slug:"/methods",permalink:"/design-methods/docs/methods",draft:!1,editUrl:"https://github.com/tno-terminology-design/blob/master/docs/methods.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1706856664,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{id:"methods","// hide_table_of_contents":!0,"// displayed_sidebar":"terminologyDesignSideBar",date:20221129},sidebar:"terminologyDesignSideBar",previous:{title:"Design Principles",permalink:"/design-methods/docs/overview/design-principles"},next:{title:"1-1 Discussions",permalink:"/design-methods/docs/methods/1-1-discussions"}},l={},p=[{value:"Summary",id:"summary",level:2},{value:"Triggers and Counterindicators",id:"triggers-and-counterindicators",level:2},{value:"Activities",id:"activities",level:2},{value:"Issues/Exceptions",id:"issuesexceptions",level:2},{value:"Tips",id:"tips",level:2},{value:"Example",id:"example",level:2}],d=function(e){var t=e.text;return(0,o.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},f={toc:p,mark:d};function u(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"methods"},"Methods"),(0,o.kt)("img",{alt:"This page is under construction",src:(0,r.Z)("images/wip/wip-under-construction.png")}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The (high-level) process that we call ",(0,o.kt)("strong",{parentName:"p"},"Terminology Design")," aims to establish and maintain ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," for various ",(0,o.kt)("a",{parentName:"p",href:"@"},"contexts")," that are suitable for, e.g.:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"creating and maintaining e.g.,:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"a common understanding between a group of people that work together as they pursue specific objectives;"),(0,o.kt)("li",{parentName:"ul"},"a set of (simple) documents that describe the various ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms"),", how they relate to one another (to form ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",title:"Mental Model: a Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"mental models"),")."))),(0,o.kt)("li",{parentName:"ul"},"authoring well-formed arguments, nicely readable whitepapers, explanations, reference documentation, that use the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," in a consistent and coherent way, and that can readily be understood by the intended audiences of such texts.")),(0,o.kt)("p",null,"The key characteristic of a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," that is designed for a particular ",(0,o.kt)("a",{parentName:"p",href:"@"},"context")," is that it is fit for the purpose(s) that are pursued within that ",(0,o.kt)("a",{parentName:"p",href:"@"},"context"),". If, for example, the purpose pursued in a ",(0,o.kt)("a",{parentName:"p",href:"@"},"context")," is the architecture and design of IT, the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," will be much more precise than when it were developed for a ",(0,o.kt)("a",{parentName:"p",href:"@"},"context")," in which coming the purpose is to come to grips with e.g., societal or ethical issues (which are inherently less precise)."),(0,o.kt)("p",null,"To reap the full benefits of a (well-designed) ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),", a few principles must be adhered to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the respective ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/definition",title:"Definition: the combination of a Term and a descriptive text, where the Term refers to a Concept or other Semantic Unit, and the descriptive text enables a set of Parties to have the same understanding about that Concept. Ideally, the descriptive text is a criterion that such Parties can use to determine what is, and what is not, an instance (or example) of that Concept."},"definitions")," of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that are being created and maintained in a particular ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," are to be created by the means provided by the processes we define. This basically means that the focus lies on the ",(0,o.kt)("strong",{parentName:"li"},"MEANINGs")," (distinctions) that are needed in the ",(0,o.kt)("a",{parentName:"li",href:"@"},"context")," for which the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," are defined, rather than on the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that represent such meanings."),(0,o.kt)("li",{parentName:"ol"},"when doing work (e.g. making documents, discussing things, etc.) within a ",(0,o.kt)("a",{parentName:"li",href:"@"},"context")," for which a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," is being maintained, the participants are committed to use the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that are contained in that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," in the meaning in which they are ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/define",title:"Define: to provide a criterion and a Term, where the criterion can be used by people to determine whether or not something is an instance/example of a Concept (or other Semantic Unit), and the Term is used to refer to that Concept, or an arbitrary instance thereof."},"defined")," there (the meaning of other ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," would be 'as usual'). A lack of this commitment is a counterindicator for maintaining a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),".")),(0,o.kt)("p",null,"The terminology design process is supported by ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminology tools")," that enable people to document the results of this process, and use them to write other documents e.g. as part of a website, or a pdf file, or other rendered format."),(0,o.kt)("h2",{id:"triggers-and-counterindicators"},"Triggers and Counterindicators"),(0,o.kt)("p",null,"There are many signals that may serve as a trigger to start this process, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the determination, by a group of people that pursues one or more ",(0,o.kt)("a",{parentName:"li",href:"@"},"objectives"),", that they are spending (too much) time discussing topics or ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," without reaching a conclusion that is satisfactory for use by every member of the group (which means that such discussions keep popping up, even if a decision has been made that should have closed it)."),(0,o.kt)("li",{parentName:"ul"},"the desire that is felt by all(most all) members of a group to develop a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",title:"Mental Model: a Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"mental model")," on some topic."),(0,o.kt)("li",{parentName:"ul"},"the felt need for creating and/or maintaining some kind of standard or other reference text."),(0,o.kt)("li",{parentName:"ul"},"the need for creating some kind of framework or other foundational (set of) document(s) that are expected to serve as a basis for others to work from.")),(0,o.kt)("p",null,"There are also various counterindicators, i.e. signals that should prevent the process from being started, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the participants have an insufficient interest and/or motivation to spend the time and effort to realize the intended result."),(0,o.kt)("li",{parentName:"ul"},"the participants have no intention of consequently using the results in")),(0,o.kt)("h2",{id:"activities"},"Activities"),(0,o.kt)("p",null,"Running the process consists of executing the following activities:",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Determine the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," (i.e.: the ",(0,o.kt)("a",{parentName:"p",href:"@"},"context")," in which the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," will be used).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Determine the distinctions that participants make, and that they find relevant for realizing the ",(0,o.kt)("a",{parentName:"p",href:"@"},"objectives")," that they pursue within this ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"; use the ",(0,o.kt)("a",{href:"/design-methods/docs/methods/criteria-elicitation",title:"Criteria Elicitation Process: "},"criteria-elicitation process")," to ensure that all participants are enabled to make the same distinctions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Establish the set of elicited criteria that relate to one another in a way that is useful/relevant for realizing the ",(0,o.kt)("a",{parentName:"p",href:"@"},"objectives"),", and associate a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," with each of them (thereby creating a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/definition",title:"Definition: the combination of a Term and a descriptive text, where the Term refers to a Concept or other Semantic Unit, and the descriptive text enables a set of Parties to have the same understanding about that Concept. Ideally, the descriptive text is a criterion that such Parties can use to determine what is, and what is not, an instance (or example) of that Concept."},"definition")," for that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," in texts in the meaning as ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/define",title:"Define: to provide a criterion and a Term, where the criterion can be used by people to determine whether or not something is an instance/example of a Concept (or other Semantic Unit), and the Term is used to refer to that Concept, or an arbitrary instance thereof."},"defined"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Whenever a use-case/text emerges that calls for the revision of one or more ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms"),", then:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"remove the problematic ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," from the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),";"),(0,o.kt)("li",{parentName:"ol"},"re-assess the distinctions as mentioned in steps 2 and 3;"),(0,o.kt)("li",{parentName:"ol"},"repeat steps i and ii until the problem that caused the revision is resolved;"),(0,o.kt)("li",{parentName:"ol"},"revise all texts that exist within the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," so that they will be consistent with the new version of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),".")))),(0,o.kt)("h2",{id:"issuesexceptions"},"Issues/Exceptions"),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"An account of how this process was run several times in a project is described in this ",(0,o.kt)("a",{parentName:"p",href:"/methods/real-life-example"},"real-life example")),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"The crucial arguments that come up during the discussions in any of these steps should be logged, so that they can be documented later and as such provide guidance to readers for understanding why certain terms are used, and certain design decisions have been made.",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);