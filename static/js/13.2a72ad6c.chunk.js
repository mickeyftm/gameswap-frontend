(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[13],{666:function(e,t,n){"use strict";var c=n(12),r=n(0),a=n(674),i=n(36);t.a=function(e){var t=e.value,n=e.decimals,u=e.fontSize,s=void 0===u?"40px":u,o=e.prefix,j=Object(a.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),b=j.countUp,l=j.update,f=Object(r.useRef)(l);return Object(r.useEffect)((function(){f.current(t)}),[t,f]),Object(c.jsxs)(i.B,{bold:!0,fontSize:s,children:[o,b]})}},675:function(e,t,n){"use strict";n.d(t,"c",(function(){return x})),n.d(t,"b",(function(){return p}));var c=n(4),r=n.n(c),a=n(15),i=n(20),u=n(0),s=n(13),o=n.n(s),j=n(66),b=n(183),l=n(85),f=n(682),O=n(39),d=n(131),x=function(){var e=Object(d.a)().slowRefresh,t=Object(u.useState)(),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(u.useEffect)((function(){function e(){return(e=Object(a.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.a)(b,Object(O.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,s(new o.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c},p=function(e){var t=Object(u.useState)(new o.a(0)),n=Object(i.a)(t,2),c=n[0],s=n[1],j=Object(d.a)().slowRefresh;return Object(u.useEffect)((function(){(function(){var e=Object(a.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.a)(b,Object(O.a)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,s(new o.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e,j]),c};t.a=function(e){var t=Object(u.useState)(new o.a(0)),n=Object(i.a)(t,2),c=n[0],s=n[1],b=Object(j.m)(),l=b.account,O=b.ethereum,x=Object(d.a)().fastRefresh;return Object(u.useEffect)((function(){l&&O&&function(){var t=Object(a.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.b)(O,e,l);case 2:n=t.sent,s(new o.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[l,O,e,x]),c}},784:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return se}));var c=n(12),r=n(50),a=n(0),i=n(3),u=n(36),s=n(171),o=n(177),j=n(4),b=n.n(j),l=n(15),f=n(20),O=n(66),d=n(13),x=n.n(d),p=n(678),h=n(16),m=n(30),g=n(39),v=n(74),w=n(689),S=n(131),k=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(O.m)().account,i=Object(S.a)().fastRefresh;return Object(a.useEffect)((function(){r&&function(){var e=Object(l.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.a.map((function(e){return{address:Object(g.d)(),name:"pendingEgg",params:[e.pid,r]}})),e.next=3,Object(m.a)(v,t);case 3:n=e.sent,a=w.a.map((function(e,t){return Object(h.a)(Object(h.a)({},e),{},{balance:new x.a(n[t])})})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},z=n(679),y=n(666),B=function(e){var t=e.earningsSum,n=Object(s.a)();return Object(O.m)().account?Object(c.jsx)(y.a,{value:t}):Object(c.jsx)(u.B,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},E=function(e){var t=e.cakeBalance,n=Object(s.a)();return Object(O.m)().account?Object(c.jsx)(y.a,{value:t,fontSize:"24px"}):Object(c.jsx)(u.B,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},G=n(108),N=n(675),R=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(O.m)().account,i=Object(S.a)().fastRefresh;return Object(a.useEffect)((function(){r&&function(){var e=Object(l.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.a.map((function(e){return{address:Object(g.d)(),name:"pendingEgg",params:[e.pid,r]}})),e.next=3,Object(m.a)(v,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},C=n(663);function T(){var e=Object(r.a)(["\n  margin-top: 24px;\n"]);return T=function(){return e},e}function F(){var e=Object(r.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return F=function(){return e},e}function H(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n"]);return H=function(){return e},e}function L(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n"]);return L=function(){return e},e}function $(){var e=Object(r.a)(["\n  background-image: url('/images/egg/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]);return $=function(){return e},e}var D=Object(i.e)(u.h)($()),P=i.e.div(L()),Q=i.e.img(H()),W=i.e.div(F(),(function(e){return e.theme.colors.textSubtle})),A=i.e.div(T()),J=function(){var e=Object(a.useState)(!1),t=Object(f.a)(e,2),n=t[0],r=t[1],i=Object(O.m)().account,o=Object(s.a)(),j=k(),d=Object(C.a)(Object(N.a)(Object(g.a)())),h=Object(G.g)().toNumber(),m=R().reduce((function(e,t){return e+new x.a(t).div(new x.a(10).pow(18)).toNumber()}),0),v=j.filter((function(e){return e.balance.toNumber()>0})),w=Object(p.a)(v.map((function(e){return e.pid}))).onReward,S=Object(a.useCallback)(Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,w();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,r(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[w]);return Object(c.jsx)(D,{children:Object(c.jsxs)(u.i,{children:[Object(c.jsx)(u.n,{size:"xl",mb:"24px",children:o(542,"Farms & Staking")}),Object(c.jsx)(Q,{src:"/images/egg/2.png",alt:"cake logo",width:64,height:64}),Object(c.jsxs)(P,{children:[Object(c.jsx)(W,{children:o(544,"EGG to Harvest")}),Object(c.jsx)(B,{earningsSum:m}),Object(c.jsxs)(W,{children:["~$",(h*m).toFixed(2)]})]}),Object(c.jsxs)(P,{children:[Object(c.jsx)(W,{children:o(546,"EGG in Wallet")}),Object(c.jsx)(E,{cakeBalance:d}),Object(c.jsxs)(W,{children:["~$",(h*d).toFixed(2)]})]}),Object(c.jsx)(A,{children:i?Object(c.jsx)(u.d,{id:"harvest-all",disabled:v.length<=0||n,onClick:S,fullWidth:!0,children:n?o(548,"Collecting EGG"):o(999,"Harvest all (".concat(v.length,")"))}):Object(c.jsx)(z.a,{fullWidth:!0})})]})})},M=n(667);function U(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return U=function(){return e},e}function V(){var e=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return V=function(){return e},e}var q=Object(i.e)(u.h)(V()),I=i.e.div(U()),K=function(){var e=Object(s.a)(),t=Object(N.c)(),n=Object(N.b)(Object(g.a)()),r=Object(G.c)(),a=Object(G.g)(),i=t?t.minus(n):new M.a(0),o=Object(C.a)(i),j=a.times(i),b=0;return r&&r[0]&&r[0].eggPerBlock&&(b=new M.a(r[0].eggPerBlock).div(new M.a(10).pow(18)).toNumber()),Object(c.jsx)(q,{children:Object(c.jsxs)(u.i,{children:[Object(c.jsx)(u.n,{size:"xl",mb:"24px",children:e(534,"Egg Stats")}),Object(c.jsxs)(I,{children:[Object(c.jsx)(u.B,{fontSize:"14px",children:e(10005,"Market Cap")}),Object(c.jsx)(y.a,{fontSize:"14px",value:Object(C.a)(j),decimals:0,prefix:"$"})]}),Object(c.jsxs)(I,{children:[Object(c.jsx)(u.B,{fontSize:"14px",children:e(536,"Total Minted")}),t&&Object(c.jsx)(y.a,{fontSize:"14px",value:Object(C.a)(t),decimals:0})]}),Object(c.jsxs)(I,{children:[Object(c.jsx)(u.B,{fontSize:"14px",children:e(538,"Total Burned")}),Object(c.jsx)(y.a,{fontSize:"14px",value:Object(C.a)(n),decimals:0})]}),Object(c.jsxs)(I,{children:[Object(c.jsx)(u.B,{fontSize:"14px",children:e(10004,"Circulating Supply")}),o&&Object(c.jsx)(y.a,{fontSize:"14px",value:o,decimals:0})]}),Object(c.jsxs)(I,{children:[Object(c.jsx)(u.B,{fontSize:"14px",children:e(540,"New EGG/block")}),Object(c.jsx)(u.B,{bold:!0,fontSize:"14px",children:b})]})]})})};function X(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]);return X=function(){return e},e}var Y=Object(i.e)(u.h)(X()),Z=function(){var e=Object(s.a)(),t=Object(G.h)();return Object(c.jsx)(Y,{children:Object(c.jsxs)(u.i,{children:[Object(c.jsx)(u.n,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(y.a,{value:t.toNumber(),prefix:"$",decimals:2}),Object(c.jsx)(u.B,{color:"textSubtle",children:e(999,"Across all Farms and Pools")})]})]})})},_=n(777);function ee(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return ee=function(){return e},e}function te(){var e=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return te=function(){return e},e}var ne=Object(i.e)(u.h)(te()),ce=(i.e.div(ee()),function(){var e=Object(s.a)();return Object(c.jsx)(ne,{children:Object(c.jsxs)(u.i,{children:[Object(c.jsx)(u.n,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(c.jsx)(_.a,{dataSource:{sourceType:"profile",screenName:"financeswap"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})});function re(){var e=Object(r.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);return re=function(){return e},e}function ae(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n  }\n"]);return ae=function(){return e},e}var ie=i.e.div(ae(),(function(e){return e.theme.mediaQueries.lg})),ue=Object(i.e)(u.b)(re(),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),se=function(){Object(s.a)();return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(ie,{children:Object(c.jsx)("img",{src:"/images/Title Bar.png",alt:"cake logo",width:950,height:225})}),Object(c.jsx)("div",{children:Object(c.jsxs)(ue,{children:[Object(c.jsx)(J,{}),Object(c.jsx)(ce,{}),Object(c.jsx)(K,{}),Object(c.jsx)(Z,{})]})})]})}}}]);
//# sourceMappingURL=13.2a72ad6c.chunk.js.map