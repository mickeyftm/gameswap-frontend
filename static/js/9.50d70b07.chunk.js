(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[9],{669:function(e,n,t){"use strict";t.d(n,"a",(function(){return O}));var r=t(50),c=t(12),a=t(0),o=t.n(a),i=t(3);function s(){var e=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"]);return s=function(){return e},e}var u=i.e.div(s(),(function(e){return e.size}),(function(e){return e.size})),b=function(e){var n,t=e.size,r=void 0===t?"md":t,o=Object(a.useContext)(i.a).spacing;switch(r){case"lg":n=o[6];break;case"sm":n=o[2];break;case"md":default:n=o[4]}return Object(c.jsx)(u,{size:n})};function l(){var e=Object(r.a)(["\n  flex: 1;\n  text-align: center;\n"]);return l=function(){return e},e}function j(){var e=Object(r.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"]);return j=function(){return e},e}var d=i.e.div(j(),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),x=i.e.div(l()),O=function(e){var n=e.children,t=o.a.Children.toArray(n).length;return Object(c.jsx)(d,{children:o.a.Children.map(n,(function(e,n){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x,{children:e}),n<t-1&&Object(c.jsx)(b,{})]})}))})}},671:function(e,n,t){"use strict";t.d(n,"a",(function(){return w}));var r=t(50),c=t(12),a=(t(0),t(3)),o=t(667),i=t(36),s=t(171);function u(){var e=Object(r.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);return u=function(){return e},e}function b(){var e=Object(r.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"]);return b=function(){return e},e}var l=a.e.div(b(),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),j=a.e.input(u(),(function(e){return e.theme.colors.primary})),d=function(e){var n=e.endAdornment,t=e.onChange,r=e.placeholder,a=e.startAdornment,o=e.value;return Object(c.jsxs)(l,{children:[!!a&&a,Object(c.jsx)(j,{placeholder:r,value:o,onChange:t}),!!n&&n]})};function x(){var e=Object(r.a)(["\n  color: ",";\n  font-weight: 700;\n"]);return x=function(){return e},e}function O(){var e=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);return O=function(){return e},e}function f(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n"]);return f=function(){return e},e}function p(){var e=Object(r.a)(["\n  width: ","px;\n"]);return p=function(){return e},e}function m(){var e=Object(r.a)([""]);return m=function(){return e},e}var h=a.e.div(m()),v=a.e.div(p(),(function(e){return e.theme.spacing[3]})),k=a.e.div(f()),g=a.e.div(O(),(function(e){return e.theme.colors.primary})),y=a.e.span(x(),(function(e){return e.theme.colors.primary})),w=function(e){var n=e.max,t=e.symbol,r=e.onChange,a=e.onSelectMax,u=e.value,b=e.depositFeeBP,l=void 0===b?0:b,j=Object(s.a)();return Object(c.jsxs)(h,{children:[Object(c.jsxs)(g,{children:[n.toLocaleString()," ",t," ",j(526,"Available")]}),Object(c.jsx)(d,{endAdornment:Object(c.jsxs)(k,{children:[Object(c.jsx)(y,{children:t}),Object(c.jsx)(v,{}),Object(c.jsx)("div",{children:Object(c.jsx)(i.d,{size:"sm",onClick:a,children:j(452,"Max")})})]}),onChange:r,placeholder:"0",value:u}),l>0?Object(c.jsxs)(g,{children:[j(10001,"Deposit Fee"),": ",new o.a(u||0).times(l/1e4).toString()," ",t]}):null]})}},676:function(e,n,t){"use strict";t.d(n,"c",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s})),t.d(n,"d",(function(){return a}));var r=t(12),c=(t(0),t(36)),a=function(){return Object(r.jsx)(c.A,{variant:"success",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"No Fees"})},o=function(){return Object(r.jsx)(c.A,{variant:"secondary",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"Core"})},i=function(){return Object(r.jsx)(c.A,{variant:"textSubtle",outline:!0,startIcon:Object(r.jsx)(c.l,{}),children:"Community"})},s=function(){return Object(r.jsx)(c.A,{variant:"binance",outline:!0,startIcon:Object(r.jsx)(c.c,{}),children:"Binance"})}},677:function(e,n,t){"use strict";t.d(n,"b",(function(){return j}));var r=t(4),c=t.n(r),a=t(15),o=t(0),i=t(66),s=t(56),u=t(129),b=t(665),l=t(664),j=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(s.b)(),r=Object(i.m)(),j=r.account,d=Object(l.d)(),x=Object(l.e)(e),O=Object(o.useCallback)(function(){var r=Object(a.a)(c.a.mark((function r(a){return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==e){r.next=5;break}return r.next=3,Object(b.i)(d,0,a,j);case 3:r.next=12;break;case 5:if(!n){r.next=10;break}return r.next=8,Object(b.e)(x,a,j);case 8:r.next=12;break;case 10:return r.next=12,Object(b.d)(x,a,j);case 12:t(Object(u.g)(e,j)),t(Object(u.e)(e,j));case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[j,t,n,d,x,e]);return{onStake:O}};n.a=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.d)();return{onStake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.i)(r,e,o,t);case 2:i=c.sent,n(Object(u.a)(t)),console.info(i);case 5:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r,e])}}},683:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(667);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new r.a(1);var c=new r.a(10512e3)},684:function(e,n,t){"use strict";var r=t(50);function c(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]);return c=function(){return e},e}var a=t(3).e.div(c());n.a=a},685:function(e,n,t){"use strict";t.d(n,"a",(function(){return j})),t.d(n,"b",(function(){return d}));var r=t(4),c=t.n(r),a=t(15),o=t(0),i=t(66),s=(t(673),t(56)),u=t(129),b=t(665),l=t(664),j=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.d)();return{onApprove:Object(o.useCallback)(Object(a.a)(c.a.mark((function a(){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(b.a)(e,r,t);case 3:return o=c.sent,n(Object(u.a)(t)),c.abrupt("return",o);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[t,n,e,r])}},d=function(e,n){var t=Object(s.b)(),r=Object(i.m)().account,j=Object(l.e)(n);return{onApprove:Object(o.useCallback)(Object(a.a)(c.a.mark((function a(){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(b.a)(e,j,r);case 3:return o=c.sent,t(Object(u.d)(n,r)),c.abrupt("return",o);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[r,t,e,j,n])}}},686:function(e,n,t){"use strict";t.d(n,"b",(function(){return d}));var r=t(4),c=t.n(r),a=t(15),o=t(0),i=t(66),s=t(56),u=t(129),b=t(665),l=t(664),j=[5,6,3,1,22,23],d=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.d)(),d=Object(l.e)(e),x=j.includes(e);return{onUnstake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i,s,l;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(0!==e){c.next=7;break}return c.next=3,Object(b.j)(r,0,o,t);case 3:i=c.sent,console.info(i),c.next=18;break;case 7:if(!x){c.next=14;break}return c.next=10,Object(b.c)(d,o,t);case 10:s=c.sent,console.info(s),c.next=18;break;case 14:return c.next=16,Object(b.f)(d,o,t);case 16:l=c.sent,console.info(l);case 18:n(Object(u.g)(e,t)),n(Object(u.e)(e,t)),n(Object(u.f)(e,t));case 21:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,x,r,d,e])}};n.a=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.d)();return{onUnstake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.j)(r,e,o,t);case 2:i=c.sent,n(Object(u.a)(t)),console.info(i);case 5:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r,e])}}},783:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Le}));var r=t(12),c=t(16),a=t(20),o=t(0),i=t(27),s=t(56),u=t(13),b=t.n(u),l=t(66),j=t(36),d=t(683),x=t(684),O=t(177),f=t(108),p=t(131),m=t(129),h=t(37),v=t(171),k=t(50),g=t(3);function y(){var e=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"]);return y=function(){return e},e}var w=g.e.div(y(),(function(e){return e.theme.colors.primary})),S=function(e){var n=e.onClick,t=e.expanded;return Object(r.jsxs)(w,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return n()},children:[Object(r.jsx)(j.B,{color:"primary",bold:!0,children:t?"Hide":"Details"}),t?Object(r.jsx)(j.k,{}):Object(r.jsx)(j.j,{})]})};S.defaultProps={expanded:!1};var C=S,T=function(e){var n=e.quoteTokenAdresses,t=e.quoteTokenSymbol,r=e.tokenAddresses,c="BNB"===t?"ETH":n[56],a=r[56];return"".concat(c,"/").concat(a)};function B(){var e=Object(k.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"]);return B=function(){return e},e}function A(){var e=Object(k.a)(["\n  margin-top: 24px;\n"]);return A=function(){return e},e}var P=g.e.div(A()),I=Object(g.e)(j.r)(B(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),D=function(e){var n=e.isTokenOnly,t=e.bscScanAddress,c=e.removed,a=e.totalValueFormated,o=e.lpLabel,i=e.quoteTokenAdresses,s=e.quoteTokenSymbol,u=e.tokenAddresses,b=Object(v.a)(),l=T({quoteTokenAdresses:i,quoteTokenSymbol:s,tokenAddresses:u});return Object(r.jsxs)(P,{children:[Object(r.jsxs)(j.m,{justifyContent:"space-between",children:[Object(r.jsxs)(j.B,{children:[b(316,"Stake"),":"]}),Object(r.jsx)(I,{href:n?"https://exchange.goosedefi.com/#/swap/".concat(u[56]):"https://exchange.goosedefi.com/#/add/".concat(l),children:o})]}),!c&&Object(r.jsxs)(j.m,{justifyContent:"space-between",children:[Object(r.jsxs)(j.B,{children:[b(23,"Total Liquidity"),":"]}),Object(r.jsx)(j.B,{children:a})]}),Object(r.jsx)(j.m,{justifyContent:"flex-start",children:Object(r.jsx)(j.q,{external:!0,href:t,bold:!1,children:b(356,"View on BscScan")})})]})},q=t(676);function F(){var e=Object(k.a)(["\n  margin-left: 4px;\n"]);return F=function(){return e},e}function z(){var e=Object(k.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]);return z=function(){return e},e}var E=Object(g.e)(j.m)(z()),L=Object(g.e)(j.A)(F()),G=function(e){var n=e.lpLabel,t=e.multiplier,c=(e.risk,e.farmImage),a=e.tokenSymbol,o=e.depositFee;return Object(r.jsxs)(E,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(r.jsx)(j.p,{src:"/images/farms/".concat(c,".png"),alt:a,width:64,height:64}),Object(r.jsxs)(j.m,{flexDirection:"column",alignItems:"flex-end",children:[Object(r.jsx)(j.n,{mb:"4px",children:n}),Object(r.jsxs)(j.m,{justifyContent:"center",children:[0===o?Object(r.jsx)(q.d,{}):null,Object(r.jsx)(L,{variant:"secondary",children:t})]})]})]})},N=t(4),M=t.n(N),Q=t(15),R=t(682),H=t(679),U=t(685),W=t(677),V=t(686),X=t(663),J=t(669),$=t(671),_=function(e){var n=e.max,t=e.onConfirm,c=e.onDismiss,i=e.tokenName,s=void 0===i?"":i,u=e.depositFeeBP,b=void 0===u?0:u,l=Object(o.useState)(""),d=Object(a.a)(l,2),x=d[0],O=d[1],f=Object(o.useState)(!1),p=Object(a.a)(f,2),m=p[0],h=p[1],k=Object(v.a)(),g=Object(o.useMemo)((function(){return Object(X.b)(n)}),[n]),y=Object(o.useCallback)((function(e){O(e.currentTarget.value)}),[O]),w=Object(o.useCallback)((function(){O(g)}),[g,O]);return Object(r.jsxs)(j.v,{title:"".concat(k(316,"Deposit")," ").concat(s," Tokens"),onDismiss:c,children:[Object(r.jsx)($.a,{value:x,onSelectMax:w,onChange:y,max:g,symbol:s,depositFeeBP:b}),Object(r.jsxs)(J.a,{children:[Object(r.jsx)(j.d,{variant:"secondary",onClick:c,children:k(462,"Cancel")}),Object(r.jsx)(j.d,{disabled:m,onClick:Object(Q.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,t(x);case 3:h(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:m?k(488,"Pending Confirmation"):k(464,"Confirm")})]})]})},K=function(e){var n=e.onConfirm,t=e.onDismiss,c=e.max,i=e.tokenName,s=void 0===i?"":i,u=Object(o.useState)(""),b=Object(a.a)(u,2),l=b[0],d=b[1],x=Object(o.useState)(!1),O=Object(a.a)(x,2),f=O[0],p=O[1],m=Object(v.a)(),h=Object(o.useMemo)((function(){return Object(X.b)(c)}),[c]),k=Object(o.useCallback)((function(e){d(e.currentTarget.value)}),[d]),g=Object(o.useCallback)((function(){d(h)}),[h,d]);return Object(r.jsxs)(j.v,{title:"Withdraw ".concat(s),onDismiss:t,children:[Object(r.jsx)($.a,{onSelectMax:g,onChange:k,value:l,max:h,symbol:s}),Object(r.jsxs)(J.a,{children:[Object(r.jsx)(j.d,{variant:"secondary",onClick:t,children:m(462,"Cancel")}),Object(r.jsx)(j.d,{disabled:f,onClick:Object(Q.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,n(l);case 3:p(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:f?m(488,"Pending Confirmation"):m(464,"Confirm")})]})]})};function Y(){var e=Object(k.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]);return Y=function(){return e},e}var Z=g.e.div(Y()),ee=function(e){var n=e.stakedBalance,t=e.tokenBalance,c=e.tokenName,o=e.pid,i=e.depositFeeBP,s=Object(v.a)(),u=Object(W.a)(o).onStake,b=Object(V.a)(o).onUnstake,l=Object(X.a)(n),d=l.toLocaleString(),x=Object(j.F)(Object(r.jsx)(_,{max:t,onConfirm:u,tokenName:c,depositFeeBP:i})),O=Object(a.a)(x,1)[0],f=Object(j.F)(Object(r.jsx)(K,{max:n,onConfirm:b,tokenName:c})),p=Object(a.a)(f,1)[0];return Object(r.jsxs)(j.m,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(j.n,{color:0===l?"textDisabled":"text",children:d}),0===l?Object(r.jsx)(j.d,{onClick:O,children:s(999,"Stake")}):Object(r.jsxs)(Z,{children:[Object(r.jsx)(j.o,{variant:"tertiary",onClick:p,mr:"6px",children:Object(r.jsx)(j.u,{color:"primary"})}),Object(r.jsx)(j.o,{variant:"tertiary",onClick:O,children:Object(r.jsx)(j.a,{color:"primary"})})]})]})},ne=t(678);function te(){var e=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]);return te=function(){return e},e}var re=g.e.div(te()),ce=function(e){var n=e.earnings,t=e.pid,c=Object(v.a)(),i=Object(o.useState)(!1),s=Object(a.a)(i,2),u=s[0],b=s[1],l=Object(ne.b)(t).onReward,d=Object(W.a)(t).onStake,x=Object(X.a)(n),O=x.toLocaleString();return Object(r.jsxs)(j.m,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(j.n,{color:0===x?"textDisabled":"text",children:O}),Object(r.jsxs)(re,{children:[12===t?Object(r.jsx)(j.d,{disabled:0===x||u,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(Q.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,d(x.toString());case 3:b(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Compound")}):null,Object(r.jsx)(j.d,{disabled:0===x||u,onClick:Object(Q.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,l();case 3:b(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})]})};function ae(){var e=Object(k.a)(["\n  padding-top: 16px;\n"]);return ae=function(){return e},e}var oe=g.e.div(ae()),ie=function(e){var n=e.farm,t=e.ethereum,c=e.account,i=Object(v.a)(),s=Object(o.useState)(!1),u=Object(a.a)(s,2),b=u[0],l=u[1],d=Object(f.a)(n.pid),x=d.pid,O=d.lpAddresses,p=d.tokenAddresses,m=d.isTokenOnly,h=d.depositFeeBP,k=Object(f.b)(x),g=k.allowance,y=k.tokenBalance,w=k.stakedBalance,S=k.earnings,C=O[56],T=p[56],B=n.lpSymbol.toUpperCase(),A=c&&g&&g.isGreaterThan(0),P=Object(o.useMemo)((function(){return m?Object(R.a)(t,T):Object(R.a)(t,C)}),[t,C,T,m]),I=Object(U.a)(P).onApprove,D=Object(o.useCallback)(Object(Q.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,I();case 4:l(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[I]);return Object(r.jsxs)(oe,{children:[Object(r.jsxs)(j.m,{children:[Object(r.jsx)(j.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"EGG"}),Object(r.jsx)(j.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:i(999,"Earned")})]}),Object(r.jsx)(ce,{earnings:S,pid:x}),Object(r.jsxs)(j.m,{children:[Object(r.jsx)(j.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:B}),Object(r.jsx)(j.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:i(999,"Staked")})]}),c?A?Object(r.jsx)(ee,{stakedBalance:w,tokenBalance:y,tokenName:B,pid:x,depositFeeBP:h}):Object(r.jsx)(j.d,{mt:"8px",fullWidth:!0,disabled:b,onClick:D,children:i(999,"Approve Contract")}):Object(r.jsx)(H.a,{mt:"8px",fullWidth:!0})]})},se=function(e){var n,t=e.numberOfDays,r=e.farmApy/100,c=t/365,a=1e3/e.cakePrice,o=a*Math.pow(1+r/365,365*c);return n=o-a,Math.round(100*n)/100},ue=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)};function be(){var e=Object(k.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]);return be=function(){return e},e}function le(){var e=Object(k.a)(["\n  margin-bottom: '10px';\n"]);return le=function(){return e},e}function je(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]);return je=function(){return e},e}var de=g.e.div(je()),xe=g.e.div(le()),Oe=Object(g.e)(j.B)(be()),fe=function(e){var n=e.onDismiss,t=e.lpLabel,c=e.quoteTokenAdresses,a=e.quoteTokenSymbol,o=e.tokenAddresses,i=e.cakePrice,s=e.apy,u=Object(v.a)(),l=T({quoteTokenAdresses:c,quoteTokenSymbol:a,tokenAddresses:o}),d=s.times(new b.a(100)).toNumber(),x=1e3/i.toNumber(),O=se({numberOfDays:1,farmApy:d,cakePrice:i}),f=se({numberOfDays:7,farmApy:d,cakePrice:i}),p=se({numberOfDays:30,farmApy:d,cakePrice:i}),m=se({numberOfDays:365,farmApy:d,cakePrice:i});return Object(r.jsxs)(j.v,{title:"ROI",onDismiss:n,children:[Object(r.jsxs)(de,{children:[Object(r.jsx)(xe,{children:Object(r.jsx)(j.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"Timeframe")})}),Object(r.jsx)(xe,{children:Object(r.jsx)(j.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"ROI")})}),Object(r.jsx)(xe,{children:Object(r.jsx)(j.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"EGG per $1000")})}),Object(r.jsx)(xe,{children:Object(r.jsx)(j.B,{children:"1d"})}),Object(r.jsx)(xe,{children:Object(r.jsxs)(j.B,{children:[ue({amountEarned:O,amountInvested:x}),"%"]})}),Object(r.jsx)(xe,{children:Object(r.jsx)(j.B,{children:O})}),Object(r.jsx)(xe,{children:Object(r.jsx)(j.B,{children:"7d"})}),Object(r.jsx)(xe,{children:Object(r.jsxs)(j.B,{children:[ue({amountEarned:f,amountInvested:x}),"%"]})}),Object(r.jsx)(xe,{children:Object(r.jsx)(j.B,{children:f})}),Object(r.jsx)(xe,{children:Object(r.jsx)(j.B,{children:"30d"})}),Object(r.jsx)(xe,{children:Object(r.jsxs)(j.B,{children:[ue({amountEarned:p,amountInvested:x}),"%"]})}),Object(r.jsx)(xe,{children:Object(r.jsx)(j.B,{children:p})}),Object(r.jsx)(xe,{children:Object(r.jsx)(j.B,{children:"365d(APY)"})}),Object(r.jsx)(xe,{children:Object(r.jsxs)(j.B,{children:[ue({amountEarned:m,amountInvested:x}),"%"]})}),Object(r.jsx)(xe,{children:Object(r.jsx)(j.B,{children:m})})]}),Object(r.jsx)(Oe,{fontSize:"12px",color:"textSubtle",children:u(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(r.jsx)(j.m,{justifyContent:"center",children:Object(r.jsxs)(j.r,{href:"https://exchange.pancakeswap.finance/#/add/".concat(l),children:[u(999,"Get")," ",t]})})]})},pe=function(e){var n=e.lpLabel,t=e.quoteTokenAdresses,c=e.quoteTokenSymbol,o=e.tokenAddresses,i=e.cakePrice,s=e.apy,u=Object(j.F)(Object(r.jsx)(fe,{lpLabel:n,quoteTokenAdresses:t,quoteTokenSymbol:c,tokenAddresses:o,cakePrice:i,apy:s})),b=Object(a.a)(u,1)[0];return Object(r.jsx)(j.o,{onClick:b,variant:"text",size:"sm",ml:"4px",children:Object(r.jsx)(j.g,{})})};function me(){var e=Object(k.a)(["\n  height: ",";\n  overflow: hidden;\n"]);return me=function(){return e},e}function he(){var e=Object(k.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"]);return he=function(){return e},e}function ve(){var e=Object(k.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"]);return ve=function(){return e},e}function ke(){var e=Object(k.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]);return ke=function(){return e},e}function ge(){var e=Object(k.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]);return ge=function(){return e},e}var ye=Object(g.f)(ge()),we=g.e.div(ke(),ye),Se=g.e.div(ve(),(function(e){return e.theme.card.background})),Ce=g.e.div(he(),(function(e){return e.theme.colors.borderColor})),Te=g.e.div(me(),(function(e){return e.expanded?"100%":"0px"})),Be=function(e){var n=e.farm,t=e.removed,c=e.cakePrice,i=e.bnbPrice,s=e.ethereum,u=e.account,l=Object(v.a)(),d=Object(o.useState)(!1),x=Object(a.a)(d,2),O=x[0],f=x[1],p=n.isTokenOnly?n.tokenSymbol.toLowerCase():"".concat(n.tokenSymbol.toLowerCase(),"-").concat(n.quoteTokenSymbol.toLowerCase()),m=Object(o.useMemo)((function(){return n.lpTotalInQuoteToken?n.quoteTokenSymbol===h.b.BNB?i.times(n.lpTotalInQuoteToken):n.quoteTokenSymbol===h.b.CAKE?c.times(n.lpTotalInQuoteToken):n.lpTotalInQuoteToken:null}),[i,c,n.lpTotalInQuoteToken,n.quoteTokenSymbol]),k=m?"$".concat(Number(m).toLocaleString(void 0,{maximumFractionDigits:0})):"-",g=n.lpSymbol,y=n.apy&&n.apy.times(new b.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),w=n.quoteTokenAdresses,S=n.quoteTokenSymbol,T=n.tokenAddresses,B=n.risk;return Object(r.jsxs)(Se,{children:["EGG"===n.tokenSymbol&&Object(r.jsx)(we,{}),Object(r.jsx)(G,{lpLabel:g,multiplier:n.multiplier,risk:B,depositFee:n.depositFeeBP,farmImage:p,tokenSymbol:n.tokenSymbol}),!t&&Object(r.jsxs)(j.m,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsxs)(j.B,{children:[l(352,"APR"),":"]}),Object(r.jsx)(j.B,{bold:!0,style:{display:"flex",alignItems:"center"},children:n.apy?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(pe,{lpLabel:g,quoteTokenAdresses:w,quoteTokenSymbol:S,tokenAddresses:T,cakePrice:c,apy:n.apy}),y,"%"]}):Object(r.jsx)(j.y,{height:24,width:80})})]}),Object(r.jsxs)(j.m,{justifyContent:"space-between",children:[Object(r.jsxs)(j.B,{children:[l(318,"Earn"),":"]}),Object(r.jsx)(j.B,{bold:!0,children:"EGG"})]}),Object(r.jsxs)(j.m,{justifyContent:"space-between",children:[Object(r.jsxs)(j.B,{style:{fontSize:"24px"},children:[l(10001,"Deposit Fee"),":"]}),Object(r.jsxs)(j.B,{bold:!0,style:{fontSize:"24px"},children:[n.depositFeeBP/100,"%"]})]}),Object(r.jsx)(ie,{farm:n,ethereum:s,account:u}),Object(r.jsx)(Ce,{}),Object(r.jsx)(C,{onClick:function(){return f(!O)},expanded:O}),Object(r.jsx)(Te,{expanded:O,children:Object(r.jsx)(D,{removed:t,isTokenOnly:n.isTokenOnly,bscScanAddress:n.isTokenOnly?"https://bscscan.com/token/".concat(n.tokenAddresses[56]):"https://bscscan.com/token/".concat(n.lpAddresses[56]),totalValueFormated:k,lpLabel:g,quoteTokenAdresses:w,quoteTokenSymbol:S,tokenAddresses:T})})]})},Ae=t(69);function Pe(){var e=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"]);return Pe=function(){return e},e}function Ie(){var e=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]);return Ie=function(){return e},e}var De=function(e){var n=e.stakedOnly,t=e.setStakedOnly,c=Object(i.g)(),a=c.url,o=c.isExact,s=Object(v.a)();return Object(r.jsxs)(qe,{children:[Object(r.jsxs)(Fe,{children:[Object(r.jsx)(j.C,{checked:n,onChange:function(){return t(!n)}}),Object(r.jsxs)(j.B,{children:[" ",s(699,"Staked only")]})]}),Object(r.jsxs)(j.e,{activeIndex:o?0:1,size:"sm",variant:"subtle",children:[Object(r.jsx)(j.f,{as:Ae.b,to:"".concat(a),children:s(698,"Active")}),Object(r.jsx)(j.f,{as:Ae.b,to:"".concat(a,"/history"),children:s(700,"Inactive")})]})]})},qe=g.e.div(Ie()),Fe=g.e.div(Pe(),j.B);function ze(){var e=Object(k.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"]);return ze=function(){return e},e}var Ee=g.e.div(ze(),(function(e){return e.theme.colors.textSubtle})),Le=function(e){var n=Object(i.g)().path,t=Object(v.a)(),u=Object(f.c)(),k=Object(f.g)(),g=Object(f.f)(),y=Object(l.m)(),w=y.account,S=y.ethereum,C=e.tokenMode,T=Object(s.b)(),B=Object(p.a)().fastRefresh;Object(o.useEffect)((function(){w&&T(Object(m.a)(w))}),[w,T,B]);var A=Object(o.useState)(!1),P=Object(a.a)(A,2),I=P[0],D=P[1],q=u.filter((function(e){return!!e.isTokenOnly===!!C&&"0X"!==e.multiplier})),F=u.filter((function(e){return!!e.isTokenOnly===!!C&&"0X"===e.multiplier})),z=q.filter((function(e){return e.userData&&new b.a(e.userData.stakedBalance).isGreaterThan(0)})),E=Object(o.useCallback)((function(e,n){return e.map((function(e){var n=new b.a(e.eggPerBlock||1).times(new b.a(e.poolWeight)).div(new b.a(10).pow(18)).times(d.a),t=k.times(n),r=new b.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===h.b.BNB&&(r=r.times(g)),r.comparedTo(0)>0&&(t=t.div(r)),Object(c.a)(Object(c.a)({},e),{},{apy:t})})).map((function(e){return Object(r.jsx)(Be,{farm:e,removed:n,bnbPrice:g,cakePrice:k,ethereum:S,account:w},e.pid)}))}),[g,w,k,S]);return Object(r.jsxs)(O.a,{children:[Object(r.jsx)(j.n,{as:"h1",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:C?t(10002,"Stake tokens to earn EGG"):t(320,"Stake LP tokens to earn EGG")}),Object(r.jsx)(j.n,{as:"h2",color:"secondary",mb:"50px",style:{textAlign:"center"},children:t(1e4,"Deposit Fee will be used to buyback EGG")}),Object(r.jsx)(De,{stakedOnly:I,setStakedOnly:D}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Ee,{}),Object(r.jsxs)(x.a,{children:[Object(r.jsx)(i.a,{exact:!0,path:"".concat(n),children:E(I?z:q,!1)}),Object(r.jsx)(i.a,{exact:!0,path:"".concat(n,"/history"),children:E(F,!0)})]})]}),Object(r.jsx)(j.p,{src:"/images/egg/8.png",alt:"illustration",width:1352,height:587,responsive:!0})]})}}}]);
//# sourceMappingURL=9.50d70b07.chunk.js.map