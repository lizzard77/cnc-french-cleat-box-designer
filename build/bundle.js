var app=function(){"use strict";function n(){}function t(n,t){for(const e in t)n[e]=t[e];return n}function e(n){return n()}function r(){return Object.create(null)}function l(n){n.forEach(e)}function i(n){return"function"==typeof n}function o(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function c(t,...e){if(null==t)return n;const r=t.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function h(n){let t;return c(n,(n=>t=n))(),t}function u(n,t,e){n.$$.on_destroy.push(c(t,e))}function s(n,t,e=t){return n.set(e),t}function d(n,t){n.appendChild(t)}function a(n,t,e){n.insertBefore(t,e||null)}function f(n){n.parentNode.removeChild(n)}function p(n){return document.createElement(n)}function m(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function g(n){return document.createTextNode(n)}function w(){return g(" ")}function x(){return g("")}function v(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function y(n,t,e){null==e?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function b(n){return""===n?null:+n}function $(n,t){n.value=null==t?"":t}function k(n,t,e,r){n.style.setProperty(t,e,r?"important":"")}let C;function _(n){C=n}function S(n){(function(){if(!C)throw new Error("Function called outside component initialization");return C})().$$.after_update.push(n)}const M=[],B=[],E=[],A=[],L=Promise.resolve();let j=!1;function D(n){E.push(n)}let z=!1;const O=new Set;function N(){if(!z){z=!0;do{for(let n=0;n<M.length;n+=1){const t=M[n];_(t),R(t.$$)}for(_(null),M.length=0;B.length;)B.pop()();for(let n=0;n<E.length;n+=1){const t=E[n];O.has(t)||(O.add(t),t())}E.length=0}while(M.length);for(;A.length;)A.pop()();j=!1,z=!1,O.clear()}}function R(n){if(null!==n.fragment){n.update(),l(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(D)}}const T=new Set;let W;function H(){W={r:0,c:[],p:W}}function U(){W.r||l(W.c),W=W.p}function F(n,t){n&&n.i&&(T.delete(n),n.i(t))}function P(n,t,e,r){if(n&&n.o){if(T.has(n))return;T.add(n),W.c.push((()=>{T.delete(n),r&&(e&&n.d(1),r())})),n.o(t)}}function q(n){n&&n.c()}function V(n,t,r){const{fragment:o,on_mount:c,on_destroy:h,after_update:u}=n.$$;o&&o.m(t,r),D((()=>{const t=c.map(e).filter(i);h?h.push(...t):l(t),n.$$.on_mount=[]})),u.forEach(D)}function G(n,t){const e=n.$$;null!==e.fragment&&(l(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function I(n,t){-1===n.$$.dirty[0]&&(M.push(n),j||(j=!0,L.then(N)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function J(t,e,i,o,c,h,u=[-1]){const s=C;_(t);const d=e.props||{},a=t.$$={fragment:null,ctx:null,props:h,update:n,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:r(),dirty:u,skip_bound:!1};let p=!1;if(a.ctx=i?i(t,d,((n,e,...r)=>{const l=r.length?r[0]:e;return a.ctx&&c(a.ctx[n],a.ctx[n]=l)&&(!a.skip_bound&&a.bound[n]&&a.bound[n](l),p&&I(t,n)),e})):[],a.update(),p=!0,l(a.before_update),a.fragment=!!o&&o(a.ctx),e.target){if(e.hydrate){const n=function(n){return Array.from(n.childNodes)}(e.target);a.fragment&&a.fragment.l(n),n.forEach(f)}else a.fragment&&a.fragment.c();e.intro&&F(t.$$.fragment),V(t,e.target,e.anchor),N()}_(s)}class K{$destroy(){G(this,1),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const Q=[];function X(t,e=n){let r;const l=[];function i(n){if(o(t,n)&&(t=n,r)){const n=!Q.length;for(let n=0;n<l.length;n+=1){const e=l[n];e[1](),Q.push(e,t)}if(n){for(let n=0;n<Q.length;n+=2)Q[n][0](Q[n+1]);Q.length=0}}}return{set:i,update:function(n){i(n(t))},subscribe:function(o,c=n){const h=[o,c];return l.push(h),1===l.length&&(r=e(i)||n),o(t),()=>{const n=l.indexOf(h);-1!==n&&l.splice(n,1),0===l.length&&(r(),r=null)}}}}function Y(n,t="download.svg"){n.setAttribute("xmlns","http://www.w3.org/2000/svg");var e=n.outerHTML,r='<?xml version="1.0" standalone="no"?>\r\n',l="";"svg"!==n.tagName&&(r+='<svg fill-rule="evenodd" style="border: 1px solid silver; fill:none;stroke:black;stroke-width:0.5px;">',l="</svg>");var i=new Blob([r,e,l],{type:"image/svg+xml;charset=utf-8"}),o=URL.createObjectURL(i),c=document.createElement("a");c.download=t,c.href=o,c.download=t,c.setAttribute("download",t),document.body.appendChild(c),c.click(),setTimeout((function(){window.URL.revokeObjectURL(o)}),100)}function Z(n){let t,e;return{c(){t=m("path"),y(t,"d",e="M0,0 \r\n            l"+n[5]+",0 \r\n            l"+(2*n[8]+n[9]-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6]-2*n[8]-n[9])+" \r\n            l"+(n[4].depth-2*n[8]-n[9])+",0 \r\n            l0,"+(2*n[8]+n[9])+"\r\n            l"+-n[4].depth+",0\r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7])),k(t,"fill","white")},m(n,e){a(n,t,e)},p(n,r){1008&r&&e!==(e="M0,0 \r\n            l"+n[5]+",0 \r\n            l"+(2*n[8]+n[9]-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6]-2*n[8]-n[9])+" \r\n            l"+(n[4].depth-2*n[8]-n[9])+",0 \r\n            l0,"+(2*n[8]+n[9])+"\r\n            l"+-n[4].depth+",0\r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7]))&&y(t,"d",e)},d(n){n&&f(t)}}}function nn(n){let t,e;return{c(){t=m("path"),y(t,"d",e="M0,0  \r\n            l"+n[5]+",0 \r\n            l"+(n[4].depth-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6])+" \r\n            l-"+n[4].depth+",0 \r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7])),k(t,"fill","white")},m(n,e){a(n,t,e)},p(n,r){240&r&&e!==(e="M0,0  \r\n            l"+n[5]+",0 \r\n            l"+(n[4].depth-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6])+" \r\n            l-"+n[4].depth+",0 \r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7]))&&y(t,"d",e)},d(n){n&&f(t)}}}function tn(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[8]+n[9]),y(t,"y",r=n[7]+n[8]),y(t,"width",l=2*n[9]),y(t,"height",n[9]),k(t,"fill","red")},m(n,e){a(n,t,e)},p(n,i){800&i&&e!==(e=n[5]+n[8]+n[9])&&y(t,"x",e),384&i&&r!==(r=n[7]+n[8])&&y(t,"y",r),512&i&&l!==(l=2*n[9])&&y(t,"width",l),512&i&&y(t,"height",n[9])},d(n){n&&f(t)}}}function en(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[4].depth-n[8]-3*n[9]),y(t,"y",r=n[7]+n[8]),y(t,"width",l=2*n[9]),y(t,"height",n[9]),k(t,"fill","blue")},m(n,e){a(n,t,e)},p(n,i){816&i&&e!==(e=n[5]+n[4].depth-n[8]-3*n[9])&&y(t,"x",e),384&i&&r!==(r=n[7]+n[8])&&y(t,"y",r),512&i&&l!==(l=2*n[9])&&y(t,"width",l),512&i&&y(t,"height",n[9])},d(n){n&&f(t)}}}function rn(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[4].depth-n[8]-3*n[9]),y(t,"y",r=n[4].height-n[8]-n[9]),y(t,"width",l=2*n[9]),y(t,"height",n[9]),k(t,"fill","orange")},m(n,e){a(n,t,e)},p(n,i){816&i&&e!==(e=n[5]+n[4].depth-n[8]-3*n[9])&&y(t,"x",e),784&i&&r!==(r=n[4].height-n[8]-n[9])&&y(t,"y",r),512&i&&l!==(l=2*n[9])&&y(t,"width",l),512&i&&y(t,"height",n[9])},d(n){n&&f(t)}}}function ln(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[8]+n[9]),y(t,"y",r=n[4].height-n[8]-n[9]),y(t,"width",l=2*n[9]),y(t,"height",n[9]),k(t,"fill","green")},m(n,e){a(n,t,e)},p(n,i){800&i&&e!==(e=n[5]+n[8]+n[9])&&y(t,"x",e),784&i&&r!==(r=n[4].height-n[8]-n[9])&&y(t,"y",r),512&i&&l!==(l=2*n[9])&&y(t,"width",l),512&i&&y(t,"height",n[9])},d(n){n&&f(t)}}}function on(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[8]),y(t,"y",r=n[7]+n[8]+n[9]),y(t,"width",n[9]),y(t,"height",l=2*n[9]),k(t,"fill","red")},m(n,e){a(n,t,e)},p(n,i){288&i&&e!==(e=n[5]+n[8])&&y(t,"x",e),896&i&&r!==(r=n[7]+n[8]+n[9])&&y(t,"y",r),512&i&&y(t,"width",n[9]),512&i&&l!==(l=2*n[9])&&y(t,"height",l)},d(n){n&&f(t)}}}function cn(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[4].depth-n[9]-n[8]),y(t,"y",r=n[7]+n[8]+n[9]),y(t,"width",n[9]),y(t,"height",l=2*n[9]),k(t,"fill","blue")},m(n,e){a(n,t,e)},p(n,i){816&i&&e!==(e=n[5]+n[4].depth-n[9]-n[8])&&y(t,"x",e),896&i&&r!==(r=n[7]+n[8]+n[9])&&y(t,"y",r),512&i&&y(t,"width",n[9]),512&i&&l!==(l=2*n[9])&&y(t,"height",l)},d(n){n&&f(t)}}}function hn(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[4].depth-n[9]-n[8]),y(t,"y",r=n[4].height-n[8]-3*n[9]),y(t,"width",n[9]),y(t,"height",l=2*n[9]),k(t,"fill","orange")},m(n,e){a(n,t,e)},p(n,i){816&i&&e!==(e=n[5]+n[4].depth-n[9]-n[8])&&y(t,"x",e),784&i&&r!==(r=n[4].height-n[8]-3*n[9])&&y(t,"y",r),512&i&&y(t,"width",n[9]),512&i&&l!==(l=2*n[9])&&y(t,"height",l)},d(n){n&&f(t)}}}function un(n){let t,e,r,l;return{c(){t=m("rect"),y(t,"x",e=n[5]+n[8]),y(t,"y",r=n[4].height-n[8]-2*n[9]-n[9]),y(t,"width",n[9]),y(t,"height",l=2*n[9]),k(t,"fill","green")},m(n,e){a(n,t,e)},p(n,i){288&i&&e!==(e=n[5]+n[8])&&y(t,"x",e),784&i&&r!==(r=n[4].height-n[8]-2*n[9]-n[9])&&y(t,"y",r),512&i&&y(t,"width",n[9]),512&i&&l!==(l=2*n[9])&&y(t,"height",l)},d(n){n&&f(t)}}}function sn(t){let e,r,l,i,o,c,h,u,s,p,g,w,b,$;function k(n,t){return n[4].isClosed?nn:Z}let C=k(t),_=C(t),S=t[10].h1&&tn(t),M=t[10].h2&&en(t),B=t[10].h3&&rn(t),E=t[10].h4&&ln(t),A=t[10].v1&&on(t),L=t[10].v2&&cn(t),j=t[10].v3&&hn(t),D=t[10].v4&&un(t);return{c(){e=m("g"),r=m("g"),_.c(),l=x(),S&&S.c(),i=x(),M&&M.c(),o=x(),B&&B.c(),c=x(),E&&E.c(),h=x(),A&&A.c(),u=x(),L&&L.c(),s=x(),j&&j.c(),p=x(),D&&D.c(),y(r,"transform",g=t[0]?"scale(-1, 1)":""),y(e,"transform",w="translate("+(t[0]?2*t[1]-5:t[1])+" "+t[2]+")")},m(n,f){a(n,e,f),d(e,r),_.m(r,null),d(r,l),S&&S.m(r,null),d(r,i),M&&M.m(r,null),d(r,o),B&&B.m(r,null),d(r,c),E&&E.m(r,null),d(r,h),A&&A.m(r,null),d(r,u),L&&L.m(r,null),d(r,s),j&&j.m(r,null),d(r,p),D&&D.m(r,null),t[12](e),b||($=v(e,"click",t[11]),b=!0)},p(n,[t]){C===(C=k(n))&&_?_.p(n,t):(_.d(1),_=C(n),_&&(_.c(),_.m(r,l))),n[10].h1?S?S.p(n,t):(S=tn(n),S.c(),S.m(r,i)):S&&(S.d(1),S=null),n[10].h2?M?M.p(n,t):(M=en(n),M.c(),M.m(r,o)):M&&(M.d(1),M=null),n[10].h3?B?B.p(n,t):(B=rn(n),B.c(),B.m(r,c)):B&&(B.d(1),B=null),n[10].h4?E?E.p(n,t):(E=ln(n),E.c(),E.m(r,h)):E&&(E.d(1),E=null),n[10].v1?A?A.p(n,t):(A=on(n),A.c(),A.m(r,u)):A&&(A.d(1),A=null),n[10].v2?L?L.p(n,t):(L=cn(n),L.c(),L.m(r,s)):L&&(L.d(1),L=null),n[10].v3?j?j.p(n,t):(j=hn(n),j.c(),j.m(r,p)):j&&(j.d(1),j=null),n[10].v4?D?D.p(n,t):(D=un(n),D.c(),D.m(r,null)):D&&(D.d(1),D=null),1&t&&g!==(g=n[0]?"scale(-1, 1)":"")&&y(r,"transform",g),7&t&&w!==(w="translate("+(n[0]?2*n[1]-5:n[1])+" "+n[2]+")")&&y(e,"transform",w)},i:n,o:n,d(n){n&&f(e),_.d(),S&&S.d(),M&&M.d(),B&&B.d(),E&&E.d(),A&&A.d(),L&&L.d(),j&&j.d(),D&&D.d(),t[12](null),b=!1,$()}}}function dn(n,t,e){let r,l,i,o,c,h,s;u(n,Cn,(n=>e(4,r=n))),u(n,Sn,(n=>e(5,l=n))),u(n,_n,(n=>e(6,i=n))),u(n,Mn,(n=>e(7,o=n))),u(n,Bn,(n=>e(8,c=n))),u(n,kn,(n=>e(9,h=n))),u(n,En,(n=>e(10,s=n)));let d,{mirror:a=!1}=t,{x:f=0}=t,{y:p=0}=t;return n.$$set=n=>{"mirror"in n&&e(0,a=n.mirror),"x"in n&&e(1,f=n.x),"y"in n&&e(2,p=n.y)},[a,f,p,d,r,l,i,o,c,h,s,()=>Y(d,"SidePanel.svg"),function(n){B[n?"unshift":"push"]((()=>{d=n,e(3,d)}))}]}class an extends K{constructor(n){super(),J(this,n,dn,sn,o,{mirror:0,x:1,y:2})}}function fn(t){let e,r,l,i,o,c;return{c(){e=m("g"),r=m("path"),y(r,"d",l="M"+t[5]+",0 \r\n        l"+t[3]+",0\r\n        l0,"+(pn+t[5])+"\r\n\r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l0,"+(t[2]-2*(pn+3*t[5]))+"\r\n\r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l0,"+(pn+t[5])+"\r\n        l"+-t[3]+",0\r\n        l0,"+(-pn-t[5])+"\r\n\r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        l0,"+(-t[2]+2*(pn+3*t[5]))+"\r\n\r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        l0,"+(-pn-t[5])+"\r\n    "),k(r,"fill","white"),y(e,"transform",i="translate("+t[0]+" "+t[1]+")")},m(n,l){a(n,e,l),d(e,r),t[7](e),o||(c=v(e,"click",t[6]),o=!0)},p(n,[t]){44&t&&l!==(l="M"+n[5]+",0 \r\n        l"+n[3]+",0\r\n        l0,"+(pn+n[5])+"\r\n\r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l0,"+(n[2]-2*(pn+3*n[5]))+"\r\n\r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l0,"+(pn+n[5])+"\r\n        l"+-n[3]+",0\r\n        l0,"+(-pn-n[5])+"\r\n\r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        l0,"+(-n[2]+2*(pn+3*n[5]))+"\r\n\r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        l0,"+(-pn-n[5])+"\r\n    ")&&y(r,"d",l),3&t&&i!==(i="translate("+n[0]+" "+n[1]+")")&&y(e,"transform",i)},i:n,o:n,d(n){n&&f(e),t[7](null),o=!1,c()}}}let pn=7;function mn(n,t,e){let r,l;u(n,kn,(n=>e(5,r=n)));let{x:i=0}=t,{y:o=0}=t,{h:c=0}=t,{w:h=0}=t;return n.$$set=n=>{"x"in n&&e(0,i=n.x),"y"in n&&e(1,o=n.y),"h"in n&&e(2,c=n.h),"w"in n&&e(3,h=n.w)},[i,o,c,h,l,r,()=>Y(l,"Shelf.svg"),function(n){B[n?"unshift":"push"]((()=>{l=n,e(4,l)}))}]}class gn extends K{constructor(n){super(),J(this,n,mn,fn,o,{x:0,y:1,h:2,w:3})}}function wn(t){let e,r,l,i,o,c;return{c(){e=m("g"),r=m("path"),y(r,"d",l="M"+t[5]+",0 \r\n        l"+t[3]+",0\r\n        \r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l0,"+(t[2]-6*t[5]-t[6]-2*t[7])+"\r\n\r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l"+-t[3]+",0\r\n        \r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        l0,"+(-t[2]+(6*t[5]+t[6]+2*t[7]))+"\r\n\r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        \r\n    "),k(r,"fill","white"),y(e,"transform",i="translate("+t[0]+" "+t[1]+")")},m(n,l){a(n,e,l),d(e,r),t[9](e),o||(c=v(e,"click",t[8]),o=!0)},p(n,[t]){236&t&&l!==(l="M"+n[5]+",0 \r\n        l"+n[3]+",0\r\n        \r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l0,"+(n[2]-6*n[5]-n[6]-2*n[7])+"\r\n\r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l"+-n[3]+",0\r\n        \r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        l0,"+(-n[2]+(6*n[5]+n[6]+2*n[7]))+"\r\n\r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        \r\n    ")&&y(r,"d",l),3&t&&i!==(i="translate("+n[0]+" "+n[1]+")")&&y(e,"transform",i)},i:n,o:n,d(n){n&&f(e),t[9](null),o=!1,c()}}}function xn(n,t,e){let r,l,i,o;u(n,kn,(n=>e(5,r=n))),u(n,_n,(n=>e(6,l=n))),u(n,Bn,(n=>e(7,i=n)));let{x:c=0}=t,{y:h=0}=t,{w:s=0}=t,{h:d=0}=t;return n.$$set=n=>{"x"in n&&e(0,c=n.x),"y"in n&&e(1,h=n.y),"w"in n&&e(2,s=n.w),"h"in n&&e(3,d=n.h)},[c,h,s,d,o,r,l,i,()=>Y(o,"VerticalShelf.svg"),function(n){B[n?"unshift":"push"]((()=>{o=n,e(4,o)}))}]}class vn extends K{constructor(n){super(),J(this,n,xn,wn,o,{x:0,y:1,w:2,h:3})}}function yn(t){let e,r,l,i,o,c;return{c(){e=m("g"),r=m("path"),y(r,"d",l="M"+t[4]+",0 \r\n        l"+t[5].width+",0\r\n        l0,"+t[0]+"\r\n\r\n        l"+t[4]+",0\r\n        l0,"+2*t[4]+"\r\n        l"+-t[4]+",0\r\n\r\n        l0,"+t[0]+"\r\n        l"+-t[5].width+",0\r\n        l0,"+-t[0]+"\r\n\r\n        l"+-t[4]+",0\r\n        l0,"+2*-t[4]+"\r\n        l"+t[4]+",0\r\n\r\n        l0,"+-t[0]+"\r\n    "),k(r,"fill","white"),y(e,"transform",i="translate("+t[1]+" "+t[2]+")")},m(n,l){a(n,e,l),d(e,r),t[7](e),o||(c=v(e,"click",t[6]),o=!0)},p(n,[t]){49&t&&l!==(l="M"+n[4]+",0 \r\n        l"+n[5].width+",0\r\n        l0,"+n[0]+"\r\n\r\n        l"+n[4]+",0\r\n        l0,"+2*n[4]+"\r\n        l"+-n[4]+",0\r\n\r\n        l0,"+n[0]+"\r\n        l"+-n[5].width+",0\r\n        l0,"+-n[0]+"\r\n\r\n        l"+-n[4]+",0\r\n        l0,"+2*-n[4]+"\r\n        l"+n[4]+",0\r\n\r\n        l0,"+-n[0]+"\r\n    ")&&y(r,"d",l),6&t&&i!==(i="translate("+n[1]+" "+n[2]+")")&&y(e,"transform",i)},i:n,o:n,d(n){n&&f(e),t[7](null),o=!1,c()}}}function bn(n,t,e){let r,l,i;u(n,kn,(n=>e(4,r=n))),u(n,Cn,(n=>e(5,l=n)));let{randAbstand:o=7}=t,{x:c=0}=t,{y:h=0}=t;return n.$$set=n=>{"randAbstand"in n&&e(0,o=n.randAbstand),"x"in n&&e(1,c=n.x),"y"in n&&e(2,h=n.y)},[o,c,h,i,r,l,()=>Y(i,"Bar.svg"),function(n){B[n?"unshift":"push"]((()=>{i=n,e(3,i)}))}]}class $n extends K{constructor(n){super(),J(this,n,bn,yn,o,{randAbstand:0,x:1,y:2})}}const kn=X(9),Cn=X({width:100,height:150,depth:100,isClosed:!0}),_n=X(20),Sn=X(18),Mn=X(20),Bn=X(7),En=X({h1:!1,h2:!1,h3:!1,h4:!1,v1:!1,v2:!1,v3:!1,v4:!1});const An=function(){const{subscribe:n,set:t,update:e}=X({width:600,height:700});return{subscribe:n}}();const Ln=function(){const{subscribe:n,set:t,update:e}=X([]);return{subscribe:n,set:t,update:e,addSides:()=>{t([{name:"s1",x:0,y:0,w:0,component:an},{name:"s2",x:0,y:0,component:an,props:{mirror:!0}}]),En.set({h1:!1,h2:!1,h3:!1,h4:!1,v1:!1,v2:!1,v3:!1,v4:!1})},addShelf:(n,t,r,l)=>{e((e=>[...e,{name:r,props:{w:n,h:t},component:l?vn:gn}]))},addBar:(n,t)=>{e((n=>[...n,{name:t,component:$n}]))},getDimensions:()=>{let n=h(Ln);n.forEach((n=>{if(n.name){console.log("get "+n.name);var t=document.querySelector("#"+n.name);if(t){var e=t.getBoundingClientRect();!e||n.w===e.width&&n.h===e.height||(console.log("size of "+n.name+" is "+e.width+"/"+e.height),n.w=e.width,n.h=e.height)}}})),Ln.set(n)},reposition:()=>{let n=0,t=0,e=0;let r=h(An),l=h(Ln);l.forEach((l=>{l.w&&l.h&&(n+l.w+5>r.width&&(t+=e+5,n=0),l.x===n&&l.y===t||(l.x=n,l.y=t),console.log("move "+l.name+" to "+l.x+"/"+l.y),e=Math.max(e,l.h),n+=l.w+5)})),Ln.set(l)}}}();function jn(n,t,e){const r=n.slice();return r[34]=t[e],r}function Dn(n){let e,r,l,i;const o=[{name:n[34].name},n[34].props,{x:n[34].x||0},{y:n[34].y||0}];var c=n[34].component;function h(n){let e={};for(let n=0;n<o.length;n+=1)e=t(e,o[n]);return{props:e}}return c&&(r=new c(h())),{c(){e=m("g"),r&&q(r.$$.fragment),y(e,"id",l=n[34].name),y(e,"class","svelte-1nzgpjz")},m(n,t){a(n,e,t),r&&V(r,e,null),i=!0},p(n,t){const u=16384&t[0]?function(n,t){const e={},r={},l={$$scope:1};let i=n.length;for(;i--;){const o=n[i],c=t[i];if(c){for(const n in o)n in c||(r[n]=1);for(const n in c)l[n]||(e[n]=c[n],l[n]=1);n[i]=c}else for(const n in o)l[n]=1}for(const n in r)n in e||(e[n]=void 0);return e}(o,[{name:n[34].name},(s=n[34].props,"object"==typeof s&&null!==s?s:{}),{x:n[34].x||0},{y:n[34].y||0}]):{};var s;if(c!==(c=n[34].component)){if(r){H();const n=r;P(n.$$.fragment,1,0,(()=>{G(n,1)})),U()}c?(r=new c(h()),q(r.$$.fragment),F(r.$$.fragment,1),V(r,e,null)):r=null}else c&&r.$set(u);(!i||16384&t[0]&&l!==(l=n[34].name))&&y(e,"id",l)},i(n){i||(r&&F(r.$$.fragment,n),i=!0)},o(n){r&&P(r.$$.fragment,n),i=!1},d(n){n&&f(e),r&&G(r)}}}function zn(n){let t,e,r,i,o,c,h,u,s,x,C,_,S,M,B,E,A,L,j,D,z,O,N,R,T,W,q,V,G,I,J,K,Q,X,Y,Z,nn,tn,en,rn,ln,on,cn,hn,un,sn,dn,an,fn,pn,mn,gn,wn,xn,vn,yn,bn,$n,kn,Cn,_n,Sn,Mn,Bn,En=n[14],An=[];for(let t=0;t<En.length;t+=1)An[t]=Dn(jn(n,En,t));const Ln=n=>P(An[n],1,1,(()=>{An[n]=null}));return{c(){t=p("div"),e=p("div"),r=p("h3"),r.innerHTML="<b>Box Dimensions (mm)</b>",i=w(),o=p("nobr"),c=g("Width "),h=p("input"),u=g("\n        Depth "),s=p("input"),C=w(),_=p("br"),S=g("\n        Height "),M=p("input"),B=g("\n        Cleat "),E=p("input"),A=w(),L=p("div"),j=p("h3"),j.textContent="Shelves",D=w(),z=p("input"),O=g(" top\n        "),N=p("input"),R=g(" bottom\n        "),T=p("input"),W=g(" front\n        "),q=p("input"),V=g(" back\n        \n        "),G=p("h3"),G.textContent="Bars",I=w(),J=p("input"),K=g(" Back/top\n        "),Q=p("input"),X=g(" Front/top\n        "),Y=p("input"),Z=g(" Back/bottom\n        "),nn=p("input"),tn=g(" Front/bottom\n        \n        "),en=p("h3"),en.textContent="Sides",rn=w(),ln=p("input"),on=g(" closed sides (mandatory with front or top shelves)"),cn=w(),hn=p("div"),un=p("h3"),un.textContent="Workspace Dimensions (mm)",sn=g("\n        W "),dn=p("input"),an=g("\n        L "),fn=p("input"),pn=w(),mn=p("div"),gn=p("h3"),gn.textContent="Download SVG",wn=w(),xn=p("button"),xn.textContent="Download Workspace",vn=w(),yn=p("p"),yn.innerHTML="<i>Click individual parts to download separate files</i>",bn=w(),$n=p("div"),kn=m("svg");for(let n=0;n<An.length;n+=1)An[n].c();y(h,"type","number"),y(h,"min","0"),y(h,"max","500"),y(s,"type","number"),y(s,"min",x=2*n[10]+n[11]),y(s,"max","500"),y(M,"type","number"),y(M,"min","0"),y(M,"max","500"),y(E,"type","number"),y(E,"min","0"),y(E,"max","500"),y(z,"type","checkbox"),y(N,"type","checkbox"),y(T,"type","checkbox"),y(q,"type","checkbox"),y(J,"type","checkbox"),y(Q,"type","checkbox"),y(Y,"type","checkbox"),y(nn,"type","checkbox"),y(ln,"type","checkbox"),y(dn,"type","number"),y(dn,"min","0"),y(dn,"max","1000"),y(fn,"type","number"),y(fn,"min","0"),y(fn,"max","1000"),k(t,"display","flex"),k(t,"flex-direction","column"),k(t,"margin","1em"),y(kn,"width",Cn=n[13].width),y(kn,"height",_n=n[13].height),y(kn,"fill-rule","evenodd"),k(kn,"border","1px solid silver"),k(kn,"fill","none"),k(kn,"stroke","black"),k(kn,"stroke-width","0.5px"),y($n,"id","workspaces"),y($n,"class","svelte-1nzgpjz")},m(l,f){a(l,t,f),d(t,e),d(e,r),d(e,i),d(e,o),d(o,c),d(o,h),$(h,n[8].width),d(o,u),d(o,s),$(s,n[8].depth),d(o,C),d(o,_),d(o,S),d(o,M),$(M,n[8].height),d(o,B),d(o,E),$(E,n[12]),d(t,A),d(t,L),d(L,j),d(L,D),d(L,z),z.checked=n[0],d(L,O),d(L,N),N.checked=n[1],d(L,R),d(L,T),T.checked=n[2],d(L,W),d(L,q),q.checked=n[3],d(L,V),d(L,G),d(L,I),d(L,J),J.checked=n[4],d(L,K),d(L,Q),Q.checked=n[5],d(L,X),d(L,Y),Y.checked=n[6],d(L,Z),d(L,nn),nn.checked=n[7],d(L,tn),d(L,en),d(L,rn),d(L,ln),ln.checked=n[8].isClosed,d(L,on),d(t,cn),d(t,hn),d(hn,un),d(hn,sn),d(hn,dn),$(dn,n[13].width),d(hn,an),d(hn,fn),$(fn,n[13].height),d(t,pn),d(t,mn),d(mn,gn),d(mn,wn),d(mn,xn),d(mn,vn),d(mn,yn),a(l,bn,f),a(l,$n,f),d($n,kn);for(let n=0;n<An.length;n+=1)An[n].m(kn,null);n[33](kn),Sn=!0,Mn||(Bn=[v(h,"input",n[16]),v(s,"input",n[17]),v(M,"input",n[18]),v(E,"input",n[19]),v(z,"change",n[20]),v(N,"change",n[21]),v(T,"change",n[22]),v(q,"change",n[23]),v(J,"change",n[24]),v(Q,"change",n[25]),v(Y,"change",n[26]),v(nn,"change",n[27]),v(ln,"change",n[28]),v(dn,"input",n[29]),v(dn,"change",n[30]),v(fn,"input",n[31]),v(xn,"click",n[32])],Mn=!0)},p(n,t){if(256&t[0]&&b(h.value)!==n[8].width&&$(h,n[8].width),(!Sn||3072&t[0]&&x!==(x=2*n[10]+n[11]))&&y(s,"min",x),256&t[0]&&b(s.value)!==n[8].depth&&$(s,n[8].depth),256&t[0]&&b(M.value)!==n[8].height&&$(M,n[8].height),4096&t[0]&&b(E.value)!==n[12]&&$(E,n[12]),1&t[0]&&(z.checked=n[0]),2&t[0]&&(N.checked=n[1]),4&t[0]&&(T.checked=n[2]),8&t[0]&&(q.checked=n[3]),16&t[0]&&(J.checked=n[4]),32&t[0]&&(Q.checked=n[5]),64&t[0]&&(Y.checked=n[6]),128&t[0]&&(nn.checked=n[7]),256&t[0]&&(ln.checked=n[8].isClosed),8192&t[0]&&b(dn.value)!==n[13].width&&$(dn,n[13].width),8192&t[0]&&b(fn.value)!==n[13].height&&$(fn,n[13].height),16384&t[0]){let e;for(En=n[14],e=0;e<En.length;e+=1){const r=jn(n,En,e);An[e]?(An[e].p(r,t),F(An[e],1)):(An[e]=Dn(r),An[e].c(),F(An[e],1),An[e].m(kn,null))}for(H(),e=En.length;e<An.length;e+=1)Ln(e);U()}(!Sn||8192&t[0]&&Cn!==(Cn=n[13].width))&&y(kn,"width",Cn),(!Sn||8192&t[0]&&_n!==(_n=n[13].height))&&y(kn,"height",_n)},i(n){if(!Sn){for(let n=0;n<En.length;n+=1)F(An[n]);Sn=!0}},o(n){An=An.filter(Boolean);for(let n=0;n<An.length;n+=1)P(An[n]);Sn=!1},d(e){e&&f(t),e&&f(bn),e&&f($n),function(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}(An,e),n[33](null),Mn=!1,l(Bn)}}}function On(n,t,e){let r,l,i,o,c,h,d,a;u(n,Cn,(n=>e(8,r=n))),u(n,En,(n=>e(15,l=n))),u(n,Bn,(n=>e(10,i=n))),u(n,kn,(n=>e(11,o=n))),u(n,Sn,(n=>e(12,c=n))),u(n,An,(n=>e(13,h=n))),u(n,Ln,(n=>e(14,d=n)));let f=!0,p=!0,m=!0,g=!0,w=!1,x=!1,v=!1,y=!1;S((()=>{Ln.getDimensions(),Ln.reposition()}));return n.$$.update=()=>{33279&n.$$.dirty[0]&&(r.height<100&&(e(0,f=!1),e(2,m=!1),e(3,g=!1)),r.depth<100&&(e(0,f=!1),e(1,p=!1)),r.depth<50&&e(2,m=!1),Ln.addSides(),f&&(s(En,l.h1=!0,l),s(En,l.h2=!0,l),Ln.addShelf(r.depth,r.width,"top",!1)),p&&(s(En,l.h3=!0,l),s(En,l.h4=!0,l),Ln.addShelf(r.width,r.depth,"bottom",!1)),m&&(s(En,l.v2=!0,l),s(En,l.v3=!0,l),Ln.addShelf(r.height,r.width,"front",!0)),g&&(s(En,l.v1=!0,l),s(En,l.v4=!0,l),Ln.addShelf(r.height,r.width,"back",!0)),w&&(s(En,l.v1=!0,l),Ln.addBar(r.width,"tl")),x&&(s(En,l.v2=!0,l),Ln.addBar(r.width,"tr")),v&&(s(En,l.v4=!0,l),Ln.addBar(r.width,"br")),y&&(r.isClosed?s(En,l.v3=!0,l):s(En,l.h3=!0,l),Ln.addBar(r.width,"bl")),s(Cn,r.isClosed=l.h2||l.v2||l.v3||r.isClosed,r),Ln.getDimensions(),Ln.reposition())},[f,p,m,g,w,x,v,y,r,a,i,o,c,h,d,l,function(){r.width=b(this.value),Cn.set(r)},function(){r.depth=b(this.value),Cn.set(r)},function(){r.height=b(this.value),Cn.set(r)},function(){c=b(this.value),Sn.set(c)},function(){f=this.checked,e(0,f),e(8,r),e(1,p),e(2,m),e(3,g),e(4,w),e(5,x),e(6,v),e(7,y),e(15,l)},function(){p=this.checked,e(1,p),e(8,r),e(0,f),e(2,m),e(3,g),e(4,w),e(5,x),e(6,v),e(7,y),e(15,l)},function(){m=this.checked,e(2,m),e(8,r),e(0,f),e(1,p),e(3,g),e(4,w),e(5,x),e(6,v),e(7,y),e(15,l)},function(){g=this.checked,e(3,g),e(8,r),e(0,f),e(1,p),e(2,m),e(4,w),e(5,x),e(6,v),e(7,y),e(15,l)},function(){w=this.checked,e(4,w)},function(){x=this.checked,e(5,x)},function(){v=this.checked,e(6,v)},function(){y=this.checked,e(7,y)},function(){r.isClosed=this.checked,Cn.set(r)},function(){h.width=b(this.value),An.set(h)},n=>s(An,h={...h,width:n.target.value},h),function(){h.height=b(this.value),An.set(h)},n=>Y(a,"Workspace.svg"),function(n){B[n?"unshift":"push"]((()=>{a=n,e(9,a)}))}]}return new class extends K{constructor(n){super(),J(this,n,On,zn,o,{},[-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
