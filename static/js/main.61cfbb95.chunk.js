(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){e.exports={main:"SignUp_main__3P8KM",title:"SignUp_title__15QF2","text-content":"SignUp_text-content__327kk",countdown:"SignUp_countdown__114TL",form:"SignUp_form__2q5vi"}},13:function(e,t,n){e.exports={container:"App_container__1MQN3","bg-signup":"App_bg-signup__2m1s3","home-container":"App_home-container__30eXC","signup-container":"App_signup-container__3OUlb"}},18:function(e,t,n){e.exports={header:"Header_header__2fIN1",logo:"Header_logo__21Rn4"}},20:function(e,t,n){e.exports={button:"Button_button__2j_YQ"}},27:function(e,t,n){},3:function(e,t,n){e.exports={form:"Form_form__nNAoZ","input-container":"Form_input-container__Vz0pd","input-name":"Form_input-name__9SzHs","input-email":"Form_input-email__2uSzE","input-phone":"Form_input-phone__vp0CJ","input-company":"Form_input-company__3vizj","cross-icon":"Form_cross-icon__3F2KR","current-plan":"Form_current-plan__1K6-1",arrow:"Form_arrow__XGD6T","invalid-input":"Form_invalid-input__1kXhE","select-plan":"Form_select-plan__1AMCL",button:"Form_button__1bBNF","plan-options":"Form_plan-options__34Muy",plan:"Form_plan__1aZUW"}},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(19),i=n.n(s),r=(n(27),n(8)),o=n.n(r),l=n(9),p=n.n(l),u=n(20),j=n.n(u),d=n(0);var m=function(e){return Object(d.jsx)("button",{className:"".concat(j.a.button," ").concat(e.className),onClick:e.onClick,children:e.text})};var b=function(e){var t=e.planType,n=e.planPrice,a=e.planText,c=e.planListFeatures,s="".concat(p.a.card," ").concat("Pro"===t?p.a["plan-type-pro"]:"");return Object(d.jsxs)("section",{className:s,children:[Object(d.jsx)("h2",{className:p.a["plan-type"],children:t}),Object(d.jsx)("h1",{className:p.a["plan-price"],children:n}),Object(d.jsx)("p",{className:p.a["plan-text"],children:a}),Object(d.jsxs)("ul",{className:p.a["plan-list-features"],children:[Object(d.jsx)("li",{children:c.first}),Object(d.jsx)("li",{children:c.second}),Object(d.jsx)("li",{children:c.third})]}),Object(d.jsx)(m,{text:"Try for Free",className:p.a.button})]})},_=[{planType:"Basic",planPrice:"Free",planText:"Up to 5 users for free",planListFeatures:{first:"Basic document collaboration",second:"2 gb storage",third:"Great security and support"}},{planType:"Pro",planPrice:"$9.99",planText:"Per user, billed monthly",planListFeatures:{first:"All essential integrations",second:"50 gb storage",third:"More control and insights"}},{planType:"Ultimate",planPrice:"$19.99",planText:"Per user, billed monthly",planListFeatures:{first:"Robust work management",second:"100 gb storage",third:"VIP support"}}],x=n(7),h=n(4),O=n.n(h),f=n(2),g=4089374e3,v=1e3,N=6e4,y=36e5,F=24*y;var k=function(e){var t=e.needButton,n=Object(f.f)(),c=Object(a.useState)(47),s=Object(x.a)(c,2),i=s[0],r=s[1],o=Object(a.useState)(7),l=Object(x.a)(o,2),p=l[0],u=l[1],j=Object(a.useState)(56),b=Object(x.a)(j,2),_=b[0],h=b[1],k=Object(a.useState)(14),w=Object(x.a)(k,2),C=w[0],P=w[1];return Object(a.useEffect)((function(){var e=setInterval((function(){g-=v;var t=Math.floor(g/F),n=Math.floor(g%F/y),a=Math.floor(g%y/N),c=Math.floor(g%N/v);g<0?clearInterval(e):(r(t),u(n),h(a),P(c))}),1e3);return function(){clearInterval(e)}}),[]),Object(d.jsxs)("section",{className:"".concat(O.a["countdown-container"]," ").concat(!t&&O.a["sign-up"]),children:[Object(d.jsxs)("h3",{children:["Coming ",Object(d.jsx)("span",{children:"4 Nov 2020"})]}),Object(d.jsxs)("div",{className:O.a["countdown-timer"],children:[Object(d.jsxs)("div",{className:O.a["countdown-square"],children:[Object(d.jsx)("p",{className:O.a.number,children:i}),Object(d.jsx)("p",{className:O.a.text,children:"Days"})]}),Object(d.jsxs)("div",{className:O.a["countdown-square"],children:[Object(d.jsx)("p",{className:O.a.number,children:p<10?"0".concat(p):p}),Object(d.jsx)("p",{className:O.a.text,children:"Hours"})]}),Object(d.jsxs)("div",{className:O.a["countdown-square"],children:[Object(d.jsx)("p",{className:O.a.number,children:_}),Object(d.jsx)("p",{className:O.a.text,children:"Min"})]}),Object(d.jsxs)("div",{className:O.a["countdown-square"],children:[Object(d.jsx)("p",{className:O.a.number,children:C<10?"0".concat(C):C}),Object(d.jsx)("p",{className:O.a.text,children:"Sec"})]})]}),t&&Object(d.jsx)(m,{text:"Get Started",className:O.a.button,onClick:function(){n.push("/signup")}})]})},w=n(18),C=n.n(w);var P=function(){var e=Object(f.f)();return Object(d.jsx)("header",{className:C.a.header,children:Object(d.jsx)("img",{className:C.a.logo,src:"./assets/shared/logo.svg",alt:"logo",onClick:function(){e.push("/")}})})};var S=function(){var e=Object(f.f)();return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(P,{}),Object(d.jsxs)("main",{className:o.a.main,children:[Object(d.jsxs)("section",{className:o.a["first-section"],children:[Object(d.jsx)("img",{className:o.a.charts,src:"./assets/home/illustration-charts.svg",alt:"illustration charts"}),Object(d.jsxs)("div",{className:o.a["section-text"],children:[Object(d.jsx)("h1",{className:o.a.title,children:"A simple solution to complex tasks is coming soon"}),Object(d.jsx)("p",{className:o.a["text-content"],children:"Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity."}),Object(d.jsx)(m,{text:"Get Started",className:o.a.button,onClick:function(){e.push("/signup")}})]})]}),Object(d.jsx)("section",{className:o.a["cards-container"],children:_.map((function(e,t){return Object(d.jsx)(b,{planType:e.planType,planPrice:e.planPrice,planText:e.planText,planListFeatures:e.planListFeatures},t)}))}),Object(d.jsx)(k,{needButton:!0})]})]})},T=n(3),B=n.n(T);var U=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(!1),c=Object(x.a)(n,2),s=c[0],i=c[1],r=Object(a.useState)(!1),o=Object(x.a)(r,2),l=o[0],p=o[1],u=Object(a.useState)(!1),j=Object(x.a)(u,2),b=j[0],_=j[1],h=Object(a.useState)({name:"Basic Pack",price:"Free"}),O=Object(x.a)(h,2),f=O[0],g=O[1],v=function(e){g(e),_(!1)},N=b?B.a.arrow:"";return Object(d.jsxs)("form",{className:B.a.form,onSubmit:function(n){n.preventDefault(),function(){var n,a,c=null===(n=e.current)||void 0===n?void 0:n.value,s=null===(a=t.current)||void 0===a?void 0:a.value;""===(null===c||void 0===c?void 0:c.trim())?i(!0):i(!1),(null===s||void 0===s?void 0:s.includes("@"))?p(!1):p(!0)}()},noValidate:!0,children:[Object(d.jsxs)("div",{className:"".concat(B.a["input-container"]," ").concat(s&&B.a["invalid-input"]),children:[Object(d.jsx)("input",{type:"text","aria-label":"name",placeholder:"Name",className:B.a["input-name"],ref:e}),s&&Object(d.jsx)("img",{src:"./assets/sign-up/icon-cross.svg",alt:"cross icon",className:B.a["cross-icon"]})]}),Object(d.jsxs)("div",{className:"".concat(B.a["input-container"]," ").concat(l&&B.a["invalid-input"]),children:[Object(d.jsx)("input",{type:"email","aria-label":"email",placeholder:"Email Address",className:B.a["input-email"],ref:t}),l&&Object(d.jsx)("img",{src:"./assets/sign-up/icon-cross.svg",alt:"cross icon",className:B.a["cross-icon"]})]}),Object(d.jsxs)("div",{className:B.a["select-plan"],children:[Object(d.jsxs)("div",{className:B.a["current-plan"],onClick:function(){_((function(e){return!e}))},children:[Object(d.jsxs)("p",{children:[f.name," ",Object(d.jsx)("span",{children:f.price})]}),Object(d.jsx)("img",{src:"./assets/sign-up/icon-arrow-down.svg",alt:"arrow",className:N})]}),b&&Object(d.jsxs)("div",{className:B.a["plan-options"],children:[Object(d.jsxs)("div",{className:B.a.plan,onClick:function(){return v({name:"Basic Pack",price:"Free"})},children:[Object(d.jsxs)("p",{children:["Basic Pack ",Object(d.jsx)("span",{children:"Free"})]}),"Basic Pack"===f.name&&Object(d.jsx)("img",{src:"./assets/sign-up/icon-check.svg",alt:"check icon"})]}),Object(d.jsxs)("div",{className:B.a.plan,onClick:function(){return v({name:"Pro Pack",price:"$9.99"})},children:[Object(d.jsxs)("p",{children:["Pro Pack ",Object(d.jsx)("span",{children:"$9.99"})]}),"Pro Pack"===f.name&&Object(d.jsx)("img",{src:"./assets/sign-up/icon-check.svg",alt:"check icon"})]}),Object(d.jsxs)("div",{className:B.a.plan,onClick:function(){return v({name:"Ultimate Pack",price:"$19.99"})},children:[Object(d.jsxs)("p",{children:["Ultimate Pack ",Object(d.jsx)("span",{children:"$19.99"})]}),"Ultimate Pack"===f.name&&Object(d.jsx)("img",{src:"./assets/sign-up/icon-check.svg",alt:"check icon"})]})]})]}),Object(d.jsx)("input",{type:"phone","aria-label":"phone",placeholder:"Phone Number",className:B.a["input-phone"]}),Object(d.jsx)("input",{type:"text","aria-label":"company",placeholder:"Company",className:B.a["input-company"]}),Object(d.jsx)(m,{text:"Get on the list",className:B.a.button})]})},H=n(11),L=n.n(H);var M=function(){return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(P,{}),Object(d.jsxs)("main",{className:L.a.main,children:[Object(d.jsx)("h1",{className:L.a.title,children:"Work smarter. Save time."}),Object(d.jsx)("p",{className:L.a["text-content"],children:"Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon."}),Object(d.jsx)("div",{className:L.a.countdown,children:Object(d.jsx)(k,{needButton:!1})}),Object(d.jsx)("div",{className:L.a.form,children:Object(d.jsx)(U,{})})]})]})},A=n(13),E=n.n(A);var G=function(){var e=Object(f.g)(),t="".concat(E.a.container," ").concat("/signup"===e.pathname&&E.a["bg-signup"]);return Object(d.jsx)("div",{className:t,children:Object(d.jsxs)(f.c,{children:[Object(d.jsx)(f.a,{path:"/",exact:!0,children:Object(d.jsx)("div",{className:E.a["home-container"],children:Object(d.jsx)(S,{})})}),Object(d.jsx)(f.a,{path:"/signup",children:Object(d.jsx)("div",{className:E.a["signup-container"],children:Object(d.jsx)(M,{})})})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},I=n(10);i.a.render(Object(d.jsx)(I.a,{children:Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(G,{})})}),document.getElementById("root")),q()},4:function(e,t,n){e.exports={"countdown-container":"Countdown_countdown-container__VcAi0","countdown-timer":"Countdown_countdown-timer__WMSfF","countdown-square":"Countdown_countdown-square__37jBc",number:"Countdown_number__3cT4r",text:"Countdown_text__13Gxy",button:"Countdown_button__uUJEs","sign-up":"Countdown_sign-up__98fn_"}},8:function(e,t,n){e.exports={main:"Home_main__2gLGf",charts:"Home_charts__eZKg9",title:"Home_title__2hEH8","text-content":"Home_text-content__1Bwo5",button:"Home_button__2R6aP","cards-container":"Home_cards-container__2rpFd","first-section":"Home_first-section__2LToh","section-text":"Home_section-text__KjYUX"}},9:function(e,t,n){e.exports={card:"Card_card__10yt9","plan-type":"Card_plan-type__eSUXH","plan-price":"Card_plan-price__2CB1y","plan-text":"Card_plan-text__2j4N5","plan-list-features":"Card_plan-list-features__3g3je",button:"Card_button__3YjSf","plan-type-pro":"Card_plan-type-pro__2F1V-"}}},[[37,1,2]]]);
//# sourceMappingURL=main.61cfbb95.chunk.js.map