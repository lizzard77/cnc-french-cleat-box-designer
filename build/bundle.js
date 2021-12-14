var app=function(){"use strict";function n(){}function t(n,t){for(const e in t)n[e]=t[e];return n}function e(n){return n()}function r(){return Object.create(null)}function l(n){n.forEach(e)}function i(n){return"function"==typeof n}function o(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function c(t,...e){if(null==t)return n;const r=t.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function h(n){let t;return c(n,(n=>t=n))(),t}function u(n,t,e){n.$$.on_destroy.push(c(t,e))}function s(n,t,e=t){return n.set(e),t}function d(n,t){n.appendChild(t)}function a(n,t,e){n.insertBefore(t,e||null)}function f(n){n.parentNode.removeChild(n)}function p(n){return document.createElement(n)}function m(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function g(n){return document.createTextNode(n)}function w(){return g(" ")}function x(){return g("")}function v(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function y(n,t,e){null==e?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function b(n){return""===n?null:+n}function k(n,t){n.value=null==t?"":t}function $(n,t,e,r){n.style.setProperty(t,e,r?"important":"")}let C;function _(n){C=n}function S(n){(function(){if(!C)throw new Error("Function called outside component initialization");return C})().$$.after_update.push(n)}const M=[],B=[],E=[],A=[],L=Promise.resolve();let j=!1;function D(n){E.push(n)}let z=!1;const O=new Set;function N(){if(!z){z=!0;do{for(let n=0;n<M.length;n+=1){const t=M[n];_(t),R(t.$$)}for(_(null),M.length=0;B.length;)B.pop()();for(let n=0;n<E.length;n+=1){const t=E[n];O.has(t)||(O.add(t),t())}E.length=0}while(M.length);for(;A.length;)A.pop()();j=!1,z=!1,O.clear()}}function R(n){if(null!==n.fragment){n.update(),l(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(D)}}const T=new Set;let W;function H(){W={r:0,c:[],p:W}}function U(){W.r||l(W.c),W=W.p}function F(n,t){n&&n.i&&(T.delete(n),n.i(t))}function P(n,t,e,r){if(n&&n.o){if(T.has(n))return;T.add(n),W.c.push((()=>{T.delete(n),r&&(e&&n.d(1),r())})),n.o(t)}}function q(n){n&&n.c()}function V(n,t,r){const{fragment:o,on_mount:c,on_destroy:h,after_update:u}=n.$$;o&&o.m(t,r),D((()=>{const t=c.map(e).filter(i);h?h.push(...t):l(t),n.$$.on_mount=[]})),u.forEach(D)}function G(n,t){const e=n.$$;null!==e.fragment&&(l(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function I(n,t){-1===n.$$.dirty[0]&&(M.push(n),j||(j=!0,L.then(N)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function J(t,e,i,o,c,h,u=[-1]){const s=C;_(t);const d=e.props||{},a=t.$$={fragment:null,ctx:null,props:h,update:n,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:r(),dirty:u,skip_bound:!1};let p=!1;if(a.ctx=i?i(t,d,((n,e,...r)=>{const l=r.length?r[0]:e;return a.ctx&&c(a.ctx[n],a.ctx[n]=l)&&(!a.skip_bound&&a.bound[n]&&a.bound[n](l),p&&I(t,n)),e})):[],a.update(),p=!0,l(a.before_update),a.fragment=!!o&&o(a.ctx),e.target){if(e.hydrate){const n=function(n){return Array.from(n.childNodes)}(e.target);a.fragment&&a.fragment.l(n),n.forEach(f)}else a.fragment&&a.fragment.c();e.intro&&F(t.$$.fragment),V(t,e.target,e.anchor),N()}_(s)}class K{$destroy(){G(this,1),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const Q=[];function X(t,e=n){let r;const l=[];function i(n){if(o(t,n)&&(t=n,r)){const n=!Q.length;for(let n=0;n<l.length;n+=1){const e=l[n];e[1](),Q.push(e,t)}if(n){for(let n=0;n<Q.length;n+=2)Q[n][0](Q[n+1]);Q.length=0}}}return{set:i,update:function(n){i(n(t))},subscribe:function(o,c=n){const h=[o,c];return l.push(h),1===l.length&&(r=e(i)||n),o(t),()=>{const n=l.indexOf(h);-1!==n&&l.splice(n,1),0===l.length&&(r(),r=null)}}}}function Y(n,t="download.svg"){n.setAttribute("xmlns","http://www.w3.org/2000/svg");var e=n.outerHTML,r='<?xml version="1.0" standalone="no"?>\r\n',l="";"svg"!==n.tagName&&(r+='<svg fill-rule="evenodd" style="border: 1px solid silver; fill:none;stroke:black;stroke-width:0.5px;">',l="</svg>");var i=new Blob([r,e,l],{type:"image/svg+xml;charset=utf-8"}),o=URL.createObjectURL(i),c=document.createElement("a");c.download=t,c.href=o,c.download=t,c.setAttribute("download",t),document.body.appendChild(c),c.click(),setTimeout((function(){window.URL.revokeObjectURL(o)}),100)}function Z(n){let t,e;return{c(){t=m("path"),y(t,"d",e="M0,0 \r\n            l"+n[5]+",0 \r\n            l"+(2*n[8]+n[9]-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6]-2*n[8]-n[9])+" \r\n            l"+(n[4].depth-2*n[8]-n[9])+",0 \r\n            l0,"+(2*n[8]+n[9])+"\r\n            l"+-n[4].depth+",0\r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7])),$(t,"fill","white")},m(n,e){a(n,t,e)},p(n,r){1008&r&&e!==(e="M0,0 \r\n            l"+n[5]+",0 \r\n            l"+(2*n[8]+n[9]-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6]-2*n[8]-n[9])+" \r\n            l"+(n[4].depth-2*n[8]-n[9])+",0 \r\n            l0,"+(2*n[8]+n[9])+"\r\n            l"+-n[4].depth+",0\r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7]))&&y(t,"d",e)},d(n){n&&f(t)}}}function nn(n){let t,e;return{c(){t=m("path"),y(t,"d",e="M0,0  \r\n            l"+n[5]+",0 \r\n            l"+(n[4].depth-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6])+" \r\n            l-"+n[4].depth+",0 \r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7])),$(t,"fill","white")},m(n,e){a(n,t,e)},p(n,r){240&r&&e!==(e="M0,0  \r\n            l"+n[5]+",0 \r\n            l"+(n[4].depth-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6])+" \r\n            l-"+n[4].depth+",0 \r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7]))&&y(t,"d",e)},d(n){n&&f(t)}}}function tn(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[8]+n[9]),y(t,"y",r=n[7]+n[8]),y(t,"width",l=2*n[9]),y(t,"height",n[9]),$(t,"fill","red")},m(n,e){a(n,t,e)},p(n,i){800&i&&e!==(e=n[5]+n[8]+n[9])&&y(t,"x",e),384&i&&r!==(r=n[7]+n[8])&&y(t,"y",r),512&i&&l!==(l=2*n[9])&&y(t,"width",l),512&i&&y(t,"height",n[9])},d(n){n&&f(t)}}}function en(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[4].depth-n[8]-3*n[9]),y(t,"y",r=n[7]+n[8]),y(t,"width",l=2*n[9]),y(t,"height",n[9]),$(t,"fill","blue")},m(n,e){a(n,t,e)},p(n,i){816&i&&e!==(e=n[5]+n[4].depth-n[8]-3*n[9])&&y(t,"x",e),384&i&&r!==(r=n[7]+n[8])&&y(t,"y",r),512&i&&l!==(l=2*n[9])&&y(t,"width",l),512&i&&y(t,"height",n[9])},d(n){n&&f(t)}}}function rn(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[4].depth-n[8]-3*n[9]),y(t,"y",r=n[4].height-n[8]-n[9]),y(t,"width",l=2*n[9]),y(t,"height",n[9]),$(t,"fill","orange")},m(n,e){a(n,t,e)},p(n,i){816&i&&e!==(e=n[5]+n[4].depth-n[8]-3*n[9])&&y(t,"x",e),784&i&&r!==(r=n[4].height-n[8]-n[9])&&y(t,"y",r),512&i&&l!==(l=2*n[9])&&y(t,"width",l),512&i&&y(t,"height",n[9])},d(n){n&&f(t)}}}function ln(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[8]+n[9]),y(t,"y",r=n[4].height-n[8]-n[9]),y(t,"width",l=2*n[9]),y(t,"height",n[9]),$(t,"fill","green")},m(n,e){a(n,t,e)},p(n,i){800&i&&e!==(e=n[5]+n[8]+n[9])&&y(t,"x",e),784&i&&r!==(r=n[4].height-n[8]-n[9])&&y(t,"y",r),512&i&&l!==(l=2*n[9])&&y(t,"width",l),512&i&&y(t,"height",n[9])},d(n){n&&f(t)}}}function on(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[8]),y(t,"y",r=n[7]+n[8]+n[9]),y(t,"width",n[9]),y(t,"height",l=2*n[9]),$(t,"fill","red")},m(n,e){a(n,t,e)},p(n,i){288&i&&e!==(e=n[5]+n[8])&&y(t,"x",e),896&i&&r!==(r=n[7]+n[8]+n[9])&&y(t,"y",r),512&i&&y(t,"width",n[9]),512&i&&l!==(l=2*n[9])&&y(t,"height",l)},d(n){n&&f(t)}}}function cn(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[4].depth-n[9]-n[8]),y(t,"y",r=n[7]+n[8]+n[9]),y(t,"width",n[9]),y(t,"height",l=2*n[9]),$(t,"fill","blue")},m(n,e){a(n,t,e)},p(n,i){816&i&&e!==(e=n[5]+n[4].depth-n[9]-n[8])&&y(t,"x",e),896&i&&r!==(r=n[7]+n[8]+n[9])&&y(t,"y",r),512&i&&y(t,"width",n[9]),512&i&&l!==(l=2*n[9])&&y(t,"height",l)},d(n){n&&f(t)}}}function hn(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[4].depth-n[9]-n[8]),y(t,"y",r=n[4].height-n[8]-3*n[9]),y(t,"width",n[9]),y(t,"height",l=2*n[9]),$(t,"fill","orange")},m(n,e){a(n,t,e)},p(n,i){816&i&&e!==(e=n[5]+n[4].depth-n[9]-n[8])&&y(t,"x",e),784&i&&r!==(r=n[4].height-n[8]-3*n[9])&&y(t,"y",r),512&i&&y(t,"width",n[9]),512&i&&l!==(l=2*n[9])&&y(t,"height",l)},d(n){n&&f(t)}}}function un(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[8]),y(t,"y",r=n[4].height-n[8]-2*n[9]-n[9]),y(t,"width",n[9]),y(t,"height",l=2*n[9]),$(t,"fill","green")},m(n,e){a(n,t,e)},p(n,i){288&i&&e!==(e=n[5]+n[8])&&y(t,"x",e),784&i&&r!==(r=n[4].height-n[8]-2*n[9]-n[9])&&y(t,"y",r),512&i&&y(t,"width",n[9]),512&i&&l!==(l=2*n[9])&&y(t,"height",l)},d(n){n&&f(t)}}}function sn(t){let e,r,l,i,o,c,h,u,s,p,g,w,b,k;function $(n,t){return n[4].isClosed?nn:Z}let C=$(t),_=C(t),S=t[10].h1&&tn(t),M=t[10].h2&&en(t),B=t[10].h3&&rn(t),E=t[10].h4&&ln(t),A=t[10].v1&&on(t),L=t[10].v2&&cn(t),j=t[10].v3&&hn(t),D=t[10].v4&&un(t);return{c(){e=m("g"),r=m("g"),_.c(),l=x(),S&&S.c(),i=x(),M&&M.c(),o=x(),B&&B.c(),c=x(),E&&E.c(),h=x(),A&&A.c(),u=x(),L&&L.c(),s=x(),j&&j.c(),p=x(),D&&D.c(),y(r,"transform",g=t[0]?"scale(-1, 1)":""),y(e,"transform",w="translate("+(t[0]?2*t[1]-5:t[1])+" "+t[2]+")")},m(n,f){a(n,e,f),d(e,r),_.m(r,null),d(r,l),S&&S.m(r,null),d(r,i),M&&M.m(r,null),d(r,o),B&&B.m(r,null),d(r,c),E&&E.m(r,null),d(r,h),A&&A.m(r,null),d(r,u),L&&L.m(r,null),d(r,s),j&&j.m(r,null),d(r,p),D&&D.m(r,null),t[12](e),b||(k=v(e,"click",t[11]),b=!0)},p(n,[t]){C===(C=$(n))&&_?_.p(n,t):(_.d(1),_=C(n),_&&(_.c(),_.m(r,l))),n[10].h1?S?S.p(n,t):(S=tn(n),S.c(),S.m(r,i)):S&&(S.d(1),S=null),n[10].h2?M?M.p(n,t):(M=en(n),M.c(),M.m(r,o)):M&&(M.d(1),M=null),n[10].h3?B?B.p(n,t):(B=rn(n),B.c(),B.m(r,c)):B&&(B.d(1),B=null),n[10].h4?E?E.p(n,t):(E=ln(n),E.c(),E.m(r,h)):E&&(E.d(1),E=null),n[10].v1?A?A.p(n,t):(A=on(n),A.c(),A.m(r,u)):A&&(A.d(1),A=null),n[10].v2?L?L.p(n,t):(L=cn(n),L.c(),L.m(r,s)):L&&(L.d(1),L=null),n[10].v3?j?j.p(n,t):(j=hn(n),j.c(),j.m(r,p)):j&&(j.d(1),j=null),n[10].v4?D?D.p(n,t):(D=un(n),D.c(),D.m(r,null)):D&&(D.d(1),D=null),1&t&&g!==(g=n[0]?"scale(-1, 1)":"")&&y(r,"transform",g),7&t&&w!==(w="translate("+(n[0]?2*n[1]-5:n[1])+" "+n[2]+")")&&y(e,"transform",w)},i:n,o:n,d(n){n&&f(e),_.d(),S&&S.d(),M&&M.d(),B&&B.d(),E&&E.d(),A&&A.d(),L&&L.d(),j&&j.d(),D&&D.d(),t[12](null),b=!1,k()}}}function dn(n,t,e){let r,l,i,o,c,h,s;u(n,Cn,(n=>e(4,r=n))),u(n,Sn,(n=>e(5,l=n))),u(n,_n,(n=>e(6,i=n))),u(n,Mn,(n=>e(7,o=n))),u(n,Bn,(n=>e(8,c=n))),u(n,$n,(n=>e(9,h=n))),u(n,En,(n=>e(10,s=n)));let d,{mirror:a=!1}=t,{x:f=0}=t,{y:p=0}=t;return n.$$set=n=>{"mirror"in n&&e(0,a=n.mirror),"x"in n&&e(1,f=n.x),"y"in n&&e(2,p=n.y)},[a,f,p,d,r,l,i,o,c,h,s,()=>Y(d,"SidePanel.svg"),function(n){B[n?"unshift":"push"]((()=>{d=n,e(3,d)}))}]}class an extends K{constructor(n){super(),J(this,n,dn,sn,o,{mirror:0,x:1,y:2})}}function fn(t){let e,r,l,i,o,c;return{c(){e=m("g"),r=m("path"),y(r,"d",l="M"+t[5]+",0 \r\n        l"+t[3]+",0\r\n        l0,"+(pn+t[5])+"\r\n\r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l0,"+(t[2]-2*(pn+3*t[5]))+"\r\n\r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l0,"+(pn+t[5])+"\r\n        l"+-t[3]+",0\r\n        l0,"+(-pn-t[5])+"\r\n\r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        l0,"+(-t[2]+2*(pn+3*t[5]))+"\r\n\r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        l0,"+(-pn-t[5])+"\r\n    "),$(r,"fill","white"),y(e,"transform",i="translate("+t[0]+" "+t[1]+")")},m(n,l){a(n,e,l),d(e,r),t[7](e),o||(c=v(e,"click",t[6]),o=!0)},p(n,[t]){44&t&&l!==(l="M"+n[5]+",0 \r\n        l"+n[3]+",0\r\n        l0,"+(pn+n[5])+"\r\n\r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l0,"+(n[2]-2*(pn+3*n[5]))+"\r\n\r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l0,"+(pn+n[5])+"\r\n        l"+-n[3]+",0\r\n        l0,"+(-pn-n[5])+"\r\n\r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        l0,"+(-n[2]+2*(pn+3*n[5]))+"\r\n\r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        l0,"+(-pn-n[5])+"\r\n    ")&&y(r,"d",l),3&t&&i!==(i="translate("+n[0]+" "+n[1]+")")&&y(e,"transform",i)},i:n,o:n,d(n){n&&f(e),t[7](null),o=!1,c()}}}let pn=7;function mn(n,t,e){let r,l;u(n,$n,(n=>e(5,r=n)));let{x:i=0}=t,{y:o=0}=t,{h:c=0}=t,{w:h=0}=t;return n.$$set=n=>{"x"in n&&e(0,i=n.x),"y"in n&&e(1,o=n.y),"h"in n&&e(2,c=n.h),"w"in n&&e(3,h=n.w)},[i,o,c,h,l,r,()=>Y(l,"Shelf.svg"),function(n){B[n?"unshift":"push"]((()=>{l=n,e(4,l)}))}]}class gn extends K{constructor(n){super(),J(this,n,mn,fn,o,{x:0,y:1,h:2,w:3})}}function wn(t){let e,r,l,i,o,c;return{c(){e=m("g"),r=m("path"),y(r,"d",l="M"+t[5]+",0 \r\n        l"+t[3]+",0\r\n        \r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l0,"+(t[2]-6*t[5]-t[6]-2*t[7])+"\r\n\r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l"+-t[3]+",0\r\n        \r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        l0,"+(-t[2]+(6*t[5]+t[6]+2*t[7]))+"\r\n\r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        \r\n    "),$(r,"fill","white"),y(e,"transform",i="translate("+t[0]+" "+t[1]+")")},m(n,l){a(n,e,l),d(e,r),t[9](e),o||(c=v(e,"click",t[8]),o=!0)},p(n,[t]){236&t&&l!==(l="M"+n[5]+",0 \r\n        l"+n[3]+",0\r\n        \r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l0,"+(n[2]-6*n[5]-n[6]-2*n[7])+"\r\n\r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l"+-n[3]+",0\r\n        \r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        l0,"+(-n[2]+(6*n[5]+n[6]+2*n[7]))+"\r\n\r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        \r\n    ")&&y(r,"d",l),3&t&&i!==(i="translate("+n[0]+" "+n[1]+")")&&y(e,"transform",i)},i:n,o:n,d(n){n&&f(e),t[9](null),o=!1,c()}}}function xn(n,t,e){let r,l,i,o;u(n,$n,(n=>e(5,r=n))),u(n,_n,(n=>e(6,l=n))),u(n,Bn,(n=>e(7,i=n)));let{x:c=0}=t,{y:h=0}=t,{w:s=0}=t,{h:d=0}=t;return n.$$set=n=>{"x"in n&&e(0,c=n.x),"y"in n&&e(1,h=n.y),"w"in n&&e(2,s=n.w),"h"in n&&e(3,d=n.h)},[c,h,s,d,o,r,l,i,()=>Y(o,"VerticalShelf.svg"),function(n){B[n?"unshift":"push"]((()=>{o=n,e(4,o)}))}]}class vn extends K{constructor(n){super(),J(this,n,xn,wn,o,{x:0,y:1,w:2,h:3})}}function yn(t){let e,r,l,i,o,c;return{c(){e=m("g"),r=m("path"),y(r,"d",l="M"+t[4]+",0 \r\n        l"+t[5].width+",0\r\n        l0,"+t[0]+"\r\n\r\n        l"+t[4]+",0\r\n        l0,"+2*t[4]+"\r\n        l"+-t[4]+",0\r\n\r\n        l0,"+t[0]+"\r\n        l"+-t[5].width+",0\r\n        l0,"+-t[0]+"\r\n\r\n        l"+-t[4]+",0\r\n        l0,"+2*-t[4]+"\r\n        l"+t[4]+",0\r\n\r\n        l0,"+-t[0]+"\r\n    "),$(r,"fill","white"),y(e,"transform",i="translate("+t[1]+" "+t[2]+")")},m(n,l){a(n,e,l),d(e,r),t[7](e),o||(c=v(e,"click",t[6]),o=!0)},p(n,[t]){49&t&&l!==(l="M"+n[4]+",0 \r\n        l"+n[5].width+",0\r\n        l0,"+n[0]+"\r\n\r\n        l"+n[4]+",0\r\n        l0,"+2*n[4]+"\r\n        l"+-n[4]+",0\r\n\r\n        l0,"+n[0]+"\r\n        l"+-n[5].width+",0\r\n        l0,"+-n[0]+"\r\n\r\n        l"+-n[4]+",0\r\n        l0,"+2*-n[4]+"\r\n        l"+n[4]+",0\r\n\r\n        l0,"+-n[0]+"\r\n    ")&&y(r,"d",l),6&t&&i!==(i="translate("+n[1]+" "+n[2]+")")&&y(e,"transform",i)},i:n,o:n,d(n){n&&f(e),t[7](null),o=!1,c()}}}function bn(n,t,e){let r,l,i;u(n,$n,(n=>e(4,r=n))),u(n,Cn,(n=>e(5,l=n)));let{randAbstand:o=7}=t,{x:c=0}=t,{y:h=0}=t;return n.$$set=n=>{"randAbstand"in n&&e(0,o=n.randAbstand),"x"in n&&e(1,c=n.x),"y"in n&&e(2,h=n.y)},[o,c,h,i,r,l,()=>Y(i,"Bar.svg"),function(n){B[n?"unshift":"push"]((()=>{i=n,e(3,i)}))}]}class kn extends K{constructor(n){super(),J(this,n,bn,yn,o,{randAbstand:0,x:1,y:2})}}const $n=X(9),Cn=X({width:100,height:150,depth:100,isClosed:!0}),_n=X(20),Sn=X(18),Mn=X(20),Bn=X(7),En=X({h1:!1,h2:!1,h3:!1,h4:!1,v1:!1,v2:!1,v3:!1,v4:!1});const An=function(){const{subscribe:n,set:t,update:e}=X({width:600,height:700});return{subscribe:n}}();const Ln=function(){const{subscribe:n,set:t,update:e}=X([]);return{subscribe:n,set:t,update:e,addSides:()=>{t([{name:"s1",x:0,y:0,w:0,component:an},{name:"s2",x:0,y:0,component:an,props:{mirror:!0}}]),En.set({h1:!1,h2:!1,h3:!1,h4:!1,v1:!1,v2:!1,v3:!1,v4:!1})},addShelf:(n,t,r,l)=>{e((e=>[...e,{name:r,props:{w:n,h:t},component:l?vn:gn}]))},addBar:(n,t)=>{e((n=>[...n,{name:t,component:kn}]))},getDimensions:()=>{let n=h(Ln);n.forEach((n=>{if(n.name){console.log("get "+n.name);var t=document.querySelector("#"+n.name);if(t){var e=t.getBoundingClientRect();!e||n.w===e.width&&n.h===e.height||(console.log("size of "+n.name+" is "+e.width+"/"+e.height),n.w=e.width,n.h=e.height)}}})),Ln.set(n)},reposition:()=>{let n=0,t=0,e=0;let r=h(An),l=h(Ln);l.forEach((l=>{l.w&&l.h&&(n+l.w+5>r.width&&(t+=e+5,n=0),l.x===n&&l.y===t||(l.x=n,l.y=t),console.log("move "+l.name+" to "+l.x+"/"+l.y),e=Math.max(e,l.h),n+=l.w+5)})),Ln.set(l)}}}();function jn(n,t,e){const r=n.slice();return r[35]=t[e],r}function Dn(n){let e,r,l,i;const o=[{name:n[35].name},n[35].props,{x:n[35].x||0},{y:n[35].y||0}];var c=n[35].component;function h(n){let e={};for(let n=0;n<o.length;n+=1)e=t(e,o[n]);return{props:e}}return c&&(r=new c(h())),{c(){e=m("g"),r&&q(r.$$.fragment),y(e,"id",l=n[35].name),y(e,"class","svelte-1nzgpjz")},m(n,t){a(n,e,t),r&&V(r,e,null),i=!0},p(n,t){const u=16384&t[0]?function(n,t){const e={},r={},l={$$scope:1};let i=n.length;for(;i--;){const o=n[i],c=t[i];if(c){for(const n in o)n in c||(r[n]=1);for(const n in c)l[n]||(e[n]=c[n],l[n]=1);n[i]=c}else for(const n in o)l[n]=1}for(const n in r)n in e||(e[n]=void 0);return e}(o,[{name:n[35].name},(s=n[35].props,"object"==typeof s&&null!==s?s:{}),{x:n[35].x||0},{y:n[35].y||0}]):{};var s;if(c!==(c=n[35].component)){if(r){H();const n=r;P(n.$$.fragment,1,0,(()=>{G(n,1)})),U()}c?(r=new c(h()),q(r.$$.fragment),F(r.$$.fragment,1),V(r,e,null)):r=null}else c&&r.$set(u);(!i||16384&t[0]&&l!==(l=n[35].name))&&y(e,"id",l)},i(n){i||(r&&F(r.$$.fragment,n),i=!0)},o(n){r&&P(r.$$.fragment,n),i=!1},d(n){n&&f(e),r&&G(r)}}}function zn(n){let t,e,r,i,o,c,h,u,s,x,C,_,S,M,B,E,A,L,j,D,z,O,N,R,T,W,q,V,G,I,J,K,Q,X,Y,Z,nn,tn,en,rn,ln,on,cn,hn,un,sn,dn,an,fn,pn,mn,gn,wn,xn,vn,yn,bn,kn,$n,Cn,_n,Sn,Mn,Bn,En,An,Ln,zn,On=n[14],Nn=[];for(let t=0;t<On.length;t+=1)Nn[t]=Dn(jn(n,On,t));const Rn=n=>P(Nn[n],1,1,(()=>{Nn[n]=null}));return{c(){t=p("div"),e=p("div"),r=p("h3"),r.innerHTML="<b>Box Dimensions (mm)</b>",i=w(),o=p("nobr"),c=g("Width "),h=p("input"),u=g("\n        Depth "),s=p("input"),C=w(),_=p("br"),S=g("\n        Height "),M=p("input"),B=g("\n        Cleat "),E=p("input"),A=w(),L=p("br"),j=g("\n        Material thickness "),D=p("input"),z=w(),O=p("div"),N=p("h3"),N.textContent="Shelves",R=w(),T=p("input"),W=g(" top\n        "),q=p("input"),V=g(" bottom\n        "),G=p("input"),I=g(" front\n        "),J=p("input"),K=g(" back\n        \n        "),Q=p("h3"),Q.textContent="Bars",X=w(),Y=p("input"),Z=g(" Back/top\n        "),nn=p("input"),tn=g(" Front/top\n        "),en=p("input"),rn=g(" Back/bottom\n        "),ln=p("input"),on=g(" Front/bottom\n        \n        "),cn=p("h3"),cn.textContent="Sides",hn=w(),un=p("input"),sn=g(" closed sides (mandatory with front or top shelves)"),dn=w(),an=p("div"),fn=p("h3"),fn.textContent="Workspace Dimensions (mm)",pn=g("\n        W "),mn=p("input"),gn=g("\n        L "),wn=p("input"),xn=w(),vn=p("div"),yn=p("h3"),yn.textContent="Download SVG",bn=w(),kn=p("button"),kn.textContent="Download Workspace",$n=w(),Cn=p("p"),Cn.innerHTML="<i>Click individual parts to download separate files</i>",_n=w(),Sn=p("div"),Mn=m("svg");for(let n=0;n<Nn.length;n+=1)Nn[n].c();y(h,"type","number"),y(h,"min","0"),y(h,"max","500"),y(s,"type","number"),y(s,"min",x=2*n[10]+n[11]),y(s,"max","500"),y(M,"type","number"),y(M,"min","0"),y(M,"max","500"),y(E,"type","number"),y(E,"min","0"),y(E,"max","500"),y(D,"type","number"),y(D,"min","0"),y(D,"max","500"),y(T,"type","checkbox"),y(q,"type","checkbox"),y(G,"type","checkbox"),y(J,"type","checkbox"),y(Y,"type","checkbox"),y(nn,"type","checkbox"),y(en,"type","checkbox"),y(ln,"type","checkbox"),y(un,"type","checkbox"),y(mn,"type","number"),y(mn,"min","0"),y(mn,"max","1000"),y(wn,"type","number"),y(wn,"min","0"),y(wn,"max","1000"),$(t,"display","flex"),$(t,"flex-direction","column"),$(t,"margin","1em"),y(Mn,"width",Bn=n[13].width),y(Mn,"height",En=n[13].height),y(Mn,"fill-rule","evenodd"),$(Mn,"border","1px solid silver"),$(Mn,"fill","none"),$(Mn,"stroke","black"),$(Mn,"stroke-width","0.5px"),y(Sn,"id","workspaces"),y(Sn,"class","svelte-1nzgpjz")},m(l,f){a(l,t,f),d(t,e),d(e,r),d(e,i),d(e,o),d(o,c),d(o,h),k(h,n[8].width),d(o,u),d(o,s),k(s,n[8].depth),d(o,C),d(o,_),d(o,S),d(o,M),k(M,n[8].height),d(o,B),d(o,E),k(E,n[12]),d(o,A),d(o,L),d(o,j),d(o,D),k(D,n[11]),d(t,z),d(t,O),d(O,N),d(O,R),d(O,T),T.checked=n[0],d(O,W),d(O,q),q.checked=n[1],d(O,V),d(O,G),G.checked=n[2],d(O,I),d(O,J),J.checked=n[3],d(O,K),d(O,Q),d(O,X),d(O,Y),Y.checked=n[4],d(O,Z),d(O,nn),nn.checked=n[5],d(O,tn),d(O,en),en.checked=n[6],d(O,rn),d(O,ln),ln.checked=n[7],d(O,on),d(O,cn),d(O,hn),d(O,un),un.checked=n[8].isClosed,d(O,sn),d(t,dn),d(t,an),d(an,fn),d(an,pn),d(an,mn),k(mn,n[13].width),d(an,gn),d(an,wn),k(wn,n[13].height),d(t,xn),d(t,vn),d(vn,yn),d(vn,bn),d(vn,kn),d(vn,$n),d(vn,Cn),a(l,_n,f),a(l,Sn,f),d(Sn,Mn);for(let n=0;n<Nn.length;n+=1)Nn[n].m(Mn,null);n[34](Mn),An=!0,Ln||(zn=[v(h,"input",n[16]),v(s,"input",n[17]),v(M,"input",n[18]),v(E,"input",n[19]),v(D,"input",n[20]),v(T,"change",n[21]),v(q,"change",n[22]),v(G,"change",n[23]),v(J,"change",n[24]),v(Y,"change",n[25]),v(nn,"change",n[26]),v(en,"change",n[27]),v(ln,"change",n[28]),v(un,"change",n[29]),v(mn,"input",n[30]),v(mn,"change",n[31]),v(wn,"input",n[32]),v(kn,"click",n[33])],Ln=!0)},p(n,t){if(256&t[0]&&b(h.value)!==n[8].width&&k(h,n[8].width),(!An||3072&t[0]&&x!==(x=2*n[10]+n[11]))&&y(s,"min",x),256&t[0]&&b(s.value)!==n[8].depth&&k(s,n[8].depth),256&t[0]&&b(M.value)!==n[8].height&&k(M,n[8].height),4096&t[0]&&b(E.value)!==n[12]&&k(E,n[12]),2048&t[0]&&b(D.value)!==n[11]&&k(D,n[11]),1&t[0]&&(T.checked=n[0]),2&t[0]&&(q.checked=n[1]),4&t[0]&&(G.checked=n[2]),8&t[0]&&(J.checked=n[3]),16&t[0]&&(Y.checked=n[4]),32&t[0]&&(nn.checked=n[5]),64&t[0]&&(en.checked=n[6]),128&t[0]&&(ln.checked=n[7]),256&t[0]&&(un.checked=n[8].isClosed),8192&t[0]&&b(mn.value)!==n[13].width&&k(mn,n[13].width),8192&t[0]&&b(wn.value)!==n[13].height&&k(wn,n[13].height),16384&t[0]){let e;for(On=n[14],e=0;e<On.length;e+=1){const r=jn(n,On,e);Nn[e]?(Nn[e].p(r,t),F(Nn[e],1)):(Nn[e]=Dn(r),Nn[e].c(),F(Nn[e],1),Nn[e].m(Mn,null))}for(H(),e=On.length;e<Nn.length;e+=1)Rn(e);U()}(!An||8192&t[0]&&Bn!==(Bn=n[13].width))&&y(Mn,"width",Bn),(!An||8192&t[0]&&En!==(En=n[13].height))&&y(Mn,"height",En)},i(n){if(!An){for(let n=0;n<On.length;n+=1)F(Nn[n]);An=!0}},o(n){Nn=Nn.filter(Boolean);for(let n=0;n<Nn.length;n+=1)P(Nn[n]);An=!1},d(e){e&&f(t),e&&f(_n),e&&f(Sn),function(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}(Nn,e),n[34](null),Ln=!1,l(zn)}}}function On(n,t,e){let r,l,i,o,c,h,d,a;u(n,Cn,(n=>e(8,r=n))),u(n,En,(n=>e(15,l=n))),u(n,Bn,(n=>e(10,i=n))),u(n,$n,(n=>e(11,o=n))),u(n,Sn,(n=>e(12,c=n))),u(n,An,(n=>e(13,h=n))),u(n,Ln,(n=>e(14,d=n)));let f=!0,p=!0,m=!0,g=!0,w=!1,x=!1,v=!1,y=!1;S((()=>{Ln.getDimensions(),Ln.reposition()}));return n.$$.update=()=>{33279&n.$$.dirty[0]&&(r.height<100&&(e(0,f=!1),e(2,m=!1),e(3,g=!1)),r.depth<100&&(e(0,f=!1),e(1,p=!1)),r.depth<50&&e(2,m=!1),Ln.addSides(),f&&(s(En,l.h1=!0,l),s(En,l.h2=!0,l),Ln.addShelf(r.depth,r.width,"top",!1)),p&&(s(En,l.h3=!0,l),s(En,l.h4=!0,l),Ln.addShelf(r.width,r.depth,"bottom",!1)),m&&(s(En,l.v2=!0,l),s(En,l.v3=!0,l),Ln.addShelf(r.height,r.width,"front",!0)),g&&(s(En,l.v1=!0,l),s(En,l.v4=!0,l),Ln.addShelf(r.height,r.width,"back",!0)),w&&(s(En,l.v1=!0,l),Ln.addBar(r.width,"tl")),x&&(s(En,l.v2=!0,l),Ln.addBar(r.width,"tr")),v&&(s(En,l.v4=!0,l),Ln.addBar(r.width,"br")),y&&(r.isClosed?s(En,l.v3=!0,l):s(En,l.h3=!0,l),Ln.addBar(r.width,"bl")),s(Cn,r.isClosed=l.h2||l.v2||l.v3||r.isClosed,r),Ln.getDimensions(),Ln.reposition())},[f,p,m,g,w,x,v,y,r,a,i,o,c,h,d,l,function(){r.width=b(this.value),Cn.set(r)},function(){r.depth=b(this.value),Cn.set(r)},function(){r.height=b(this.value),Cn.set(r)},function(){c=b(this.value),Sn.set(c)},function(){o=b(this.value),$n.set(o)},function(){f=this.checked,e(0,f),e(8,r),e(1,p),e(2,m),e(3,g),e(4,w),e(5,x),e(6,v),e(7,y),e(15,l)},function(){p=this.checked,e(1,p),e(8,r),e(0,f),e(2,m),e(3,g),e(4,w),e(5,x),e(6,v),e(7,y),e(15,l)},function(){m=this.checked,e(2,m),e(8,r),e(0,f),e(1,p),e(3,g),e(4,w),e(5,x),e(6,v),e(7,y),e(15,l)},function(){g=this.checked,e(3,g),e(8,r),e(0,f),e(1,p),e(2,m),e(4,w),e(5,x),e(6,v),e(7,y),e(15,l)},function(){w=this.checked,e(4,w)},function(){x=this.checked,e(5,x)},function(){v=this.checked,e(6,v)},function(){y=this.checked,e(7,y)},function(){r.isClosed=this.checked,Cn.set(r)},function(){h.width=b(this.value),An.set(h)},n=>s(An,h={...h,width:n.target.value},h),function(){h.height=b(this.value),An.set(h)},n=>Y(a,"Workspace.svg"),function(n){B[n?"unshift":"push"]((()=>{a=n,e(9,a)}))}]}return new class extends K{constructor(n){super(),J(this,n,On,zn,o,{},[-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
