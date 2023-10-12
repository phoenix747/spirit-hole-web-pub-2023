(function(){"use strict";var e={4368:function(e,n,t){var o=t(9242),a=(t(7658),t(3396)),s=t(4870);const l=Symbol("messageSymbol"),i={symbol:"~^~"};var r=t(7853),u=t(7139),c={en:{how_do_you_feel_today:"How do you feel today?",aphorisms_banner_tile:"Spirit Hole",aphorisms_banner_subtitle:"Know thyself",clear_history:"Clear History",message_send:"Send",do_MBTI_test:"I don’t know your personality characteristics yet, so let’s take a simple MBTI test!\n\n     ＊Warm reminder: If both options are consistent, it will be more accurate to choose the side you prefer＊\n\n     1. In which of the following situations can you gain more energy?\n     (I) Being alone, watching dramas and playing video games alone\n     (E) Go out to play or get together with friends or family\n\n     2. What do you tend to do when you learn new things?\n     (N) Unbridled and likes to think openly\n     (S) Based on experience, a clear direction is needed\n\n     3. When you are communicating, what do you tend to do?\n     (T) First check whether this matter is logical or fair.\n     (F) Confirm the other person’s feelings first and hope to live in harmony\n\n     4. What do you usually do before traveling abroad?\n     (J) Make a list of each itinerary and proceed according to the plan\n     (P) We’ll wait until we get there. It depends on our mood that day.\n\n     Remember the codes in front of each answer, and after arranging and combining them in order, it will represent your MBTI type!\n     For example, I like to be alone (I), like to be imaginative (N), like to look at logic first (T), and like to make decisions based on my mood (P), then I am the INTP type! Just choose the INTP Option directly!",MBTI_result:"I know your MBTI type, and our subsequent conversations will take your personality characteristics into consideration! If you want to retest, you can clear the history in the upper right corner and refresh the page! Your MBTI type is {MBTItype}."},zh:{how_do_you_feel_today:"你今天怎么样？",aphorisms_banner_tile:"心灵树洞",aphorisms_banner_subtitle:"认识你自己",clear_history:"清除历史",message_send:"发送",do_MBTI_test:"我还不知道你的性格特点，做个简单的MBTI测试吧！\n\n    ＊温馨提醒：若两种选项都符合，选择比较倾向的那一边会比较准确＊\n\n    1.你在下列哪种情况比较能获得能量？ \n    （I）独处，一个人追剧打电子游戏\n    （E）出去玩，或和朋友或家人相聚\n\n    2.当你学习新事物时，你倾向？\n    （N）天马行空，喜欢开放性思考\n    （S）依照经验，需要明确方向\n\n    3.当你在沟通时，你倾向？ \n    （T）先看这件事有没有合乎逻辑或公平性\n    （F）先确认对方感受，希望和谐相处\n\n    4.出国旅游之前，你通常会？\n    （J）列好每个行程，并按照计画进行\n    （P）去到那里再说，当天看心情决定\n\n    记好每个答案的前面代号，照顺序排列组合后，就是代表你的MBTI类型！\n    比如我喜欢独处（I），喜欢天马行空（N），喜欢先看逻辑（T），喜欢看心情决定（P），那我就是INTP类型！直接选择INTP选项即可！\n    ",MBTI_result:"我知道你的MBTI类型了，后面我们的对话会考虑到你的性格特点哦！如果想要重新测试，可以在右上角清除历史记录，然后刷新页面！你的MBTI类型是{MBTItype}。"}};const p=(0,r.o)({legacy:!1,locale:"en",fallbackLocale:"en",messages:c}),d=e=>((0,a.dD)("data-v-f8bddf78"),e=e(),(0,a.Cn)(),e),g={id:"aphorisms-banner"},m={class:"tile"},_={id:"aphorisms-banner-title"},y={id:"aphorisms-banner-subtitle"},h={id:"aphorisms-banner-right"},v=d((()=>(0,a._)("option",{value:"en"},"English",-1))),f=d((()=>(0,a._)("option",{value:"zh"},"中文",-1))),b=[v,f];var I=(0,a.aZ)({__name:"AphorismsBanner",props:{clearMessages:{type:Function}},setup(e){const{t:n}=(0,r.QT)(),t=(0,a.Fl)({get:()=>p.global.locale.value,set:e=>{p.global.locale.value=e}}),s=localStorage.getItem("language");function l(e){t.value=e.target.value,localStorage.setItem("language",t.value)}return t.value=s||"en",(e,n)=>((0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",m,[(0,a._)("span",_,(0,u.zw)(e.$t("aphorisms_banner_tile")),1),(0,a._)("span",y,(0,u.zw)(e.$t("aphorisms_banner_subtitle")),1)]),(0,a._)("div",h,[(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),onChange:l},b,544),[[o.bM,t.value]]),(0,a._)("button",{onClick:n[1]||(n[1]=(...n)=>e.clearMessages&&e.clearMessages(...n))},(0,u.zw)(e.$t("clear_history")),1)])]))}}),w=t(89);const T=(0,w.Z)(I,[["__scopeId","data-v-f8bddf78"]]);var k=T;const M={id:"message-list-container"},S={id:"message-list"},N={class:"message-style"},B=["innerHTML"],J={key:0,class:"MBTI-options"};var P=(0,a.aZ)({__name:"MessageList",props:{messages:{}},emits:["newMessage"],setup(e,{emit:n}){function t(e){return e.replace(/\n/g,"<br>")}(0,a.JJ)(i,l);const{t:c}=(0,r.QT)(),p=(0,s.iH)(!0);function d(e){const t=e.target;console.log(t.value),localStorage.setItem("MBTIresult",t.value),p.value=!1,n("newMessage",{message:i.symbol+c("MBTI_result",{MBTItype:localStorage.getItem("MBTIresult")}),style:"AI"})}return localStorage.getItem("MBTIresult")&&(p.value=!1),(e,n)=>((0,a.wg)(),(0,a.iD)("div",M,[(0,a._)("ul",S,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.messages,((e,n)=>((0,a.wg)(),(0,a.iD)("li",{key:n,class:(0,u.C_)(e.style)},[(0,a._)("span",N,(0,u.zw)(e.style)+":",1),(0,a._)("span",{class:"message-text",innerHTML:t(e.message)},null,8,B),e.message===(0,s.SU)(i).symbol+(0,s.SU)(c)("do_MBTI_test")?(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",J,[(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"INTJ",onClick:d}),(0,a.Uk)(" INTJ ")]),(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"INTP",onClick:d}),(0,a.Uk)(" INTP ")]),(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"INFJ",onClick:d}),(0,a.Uk)(" INFJ ")]),(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"INFP",onClick:d}),(0,a.Uk)(" INFP ")]),(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"ISTJ",onClick:d}),(0,a.Uk)(" ISTJ ")]),(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"ISTP",onClick:d}),(0,a.Uk)(" ISTP ")]),(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"ISFJ",onClick:d}),(0,a.Uk)(" ISFJ ")]),(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"ISFP",onClick:d}),(0,a.Uk)(" ISFP ")]),(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"ENTJ",onClick:d}),(0,a.Uk)(" ENTJ ")]),(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"ENTP",onClick:d}),(0,a.Uk)(" ENTP ")]),(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"ENFJ",onClick:d}),(0,a.Uk)(" ENFJ ")]),(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"ENFP",onClick:d}),(0,a.Uk)(" ENFP ")]),(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"ESTJ",onClick:d}),(0,a.Uk)(" ESTJ ")]),(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"ESTP",onClick:d}),(0,a.Uk)(" ESTP ")]),(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"ESFJ",onClick:d}),(0,a.Uk)(" ESFJ ")]),(0,a._)("label",null,[(0,a._)("input",{type:"radio",name:"option",value:"ESFP",onClick:d}),(0,a.Uk)(" ESFP ")])],512)),[[o.F8,p.value]]):(0,a.kq)("",!0)],2)))),128))])]))}});const C=(0,w.Z)(P,[["__scopeId","data-v-4254bbc6"]]);var F=C;const E=e=>((0,a.dD)("data-v-266dd3ac"),e=e(),(0,a.Cn)(),e),U={id:"message-send"},O=["onSubmit"],H=E((()=>(0,a._)("button",{type:"submit"},"Send",-1)));var j=(0,a.aZ)({__name:"MessageSend",props:{messages:{}},emits:["newMessage"],setup(e,{emit:n}){const t=e,r=(0,s.iH)("");function u(e,n){const t=e.map((e=>{const n=new Map;return n.set(e.style,e.message),Object.fromEntries(n)})),o=new Map;o.set("user_messages",t),n&&o.set("MBTI",n);const a={};for(const[s,l]of o.entries())a[s]=l;return JSON.stringify(a)}function c(e){const n=e.filter((e=>!e.message.startsWith(i.symbol)));return n}async function p(e,n){const t=u(c(e),n),o=await fetch("https://spirit-hole-api.df.r.appspot.com/psychological_counseling_v2",{method:"POST",headers:{"Content-Type":"application/json"},body:t});if(o.ok){const e=await o.json();return new Map(Object.entries(e))}return new Map}async function d(){n("newMessage",{message:r.value,style:"Human"}),r.value="Waiting";const e=await p(t.messages.slice(1,t.messages.length),localStorage.getItem("MBTIresult"));n("newMessage",{message:e.get("AI"),style:"AI"}),r.value=""}return(0,a.JJ)(i,l),(e,n)=>((0,a.wg)(),(0,a.iD)("div",U,[(0,a._)("form",{id:"message-form",onSubmit:(0,o.iM)(d,["prevent"])},[(0,a.wy)((0,a._)("input",{type:"text",id:"message-input","onUpdate:modelValue":n[0]||(n[0]=e=>r.value=e),required:""},null,512),[[o.nr,r.value]]),H],40,O)]))}});const W=(0,w.Z)(j,[["__scopeId","data-v-266dd3ac"]]);var x=W,A=(0,a.aZ)({__name:"App",setup(e){(0,a.JJ)(i,l);const{t:n}=(0,r.QT)(),t=(0,s.iH)([{style:"AI",message:n("how_do_you_feel_today")}]);function o(e){t.value.push(e),localStorage.setItem("historyMessages",JSON.stringify(t.value))}function u(){t.value.pop(),localStorage.setItem("historyMessages",JSON.stringify(t.value))}function c(){localStorage.removeItem("historyMessages"),localStorage.removeItem("MBTIresult")}function p(){t.value.length>=1&&"AI"==t.value[t.value.length-1].style&&(u(),p())}function d(){o({style:"AI",message:n("how_do_you_feel_today")});const e=localStorage.getItem("MBTIresult");e||o({style:"AI",message:i.symbol+n("do_MBTI_test")})}return(0,a.bv)((()=>{const e=localStorage.getItem("historyMessages");e&&(t.value=JSON.parse(e)),console.log(t.value),p(),d(),console.log(t.value)})),(e,n)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(k,{clearMessages:c}),(0,a.Wm)(F,{onNewMessage:o,messages:t.value},null,8,["messages"]),(0,a.Wm)(x,{onNewMessage:o,messages:t.value},null,8,["messages"])],64))}});const D=A;var Z=D;const z=(0,o.ri)(Z);z.use(p),z.mount("#app")}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var s=n[o]={exports:{}};return e[o].call(s.exports,s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(n,o,a,s){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],s=e[c][2];for(var i=!0,r=0;r<o.length;r++)(!1&s||l>=s)&&Object.keys(t.O).every((function(e){return t.O[e](o[r])}))?o.splice(r--,1):(i=!1,s<l&&(l=s));if(i){e.splice(c--,1);var u=a();void 0!==u&&(n=u)}}return n}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,a,s]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var a,s,l=o[0],i=o[1],r=o[2],u=0;if(l.some((function(n){return 0!==e[n]}))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(r)var c=r(t)}for(n&&n(o);u<l.length;u++)s=l[u],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(c)},o=self["webpackChunkspirit_hole_web"]=self["webpackChunkspirit_hole_web"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(4368)}));o=t.O(o)})();