var app=function(){"use strict";function n(){}function t(n,t){for(const e in t)n[e]=t[e];return n}function e(n){return n()}function r(){return Object.create(null)}function l(n){n.forEach(e)}function i(n){return"function"==typeof n}function c(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function o(t,...e){if(null==t)return n;const r=t.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function h(n){let t;return o(n,(n=>t=n))(),t}function u(n,t,e){n.$$.on_destroy.push(o(t,e))}function d(n,t,e=t){return n.set(e),t}function s(n,t){n.appendChild(t)}function a(n,t,e){n.insertBefore(t,e||null)}function f(n){n.parentNode.removeChild(n)}function p(n){return document.createElement(n)}function g(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function m(n){return document.createTextNode(n)}function w(){return m(" ")}function y(){return m("")}function x(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function b(n,t,e){null==e?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function v(n){return""===n?null:+n}function $(n,t){n.value=null==t?"":t}function k(n,t,e,r){n.style.setProperty(t,e,r?"important":"")}let _;function C(n){_=n}function S(n){(function(){if(!_)throw new Error("Function called outside component initialization");return _})().$$.after_update.push(n)}const M=[],E=[],B=[],A=[],L=Promise.resolve();let j=!1;function z(n){B.push(n)}let D=!1;const O=new Set;function R(){if(!D){D=!0;do{for(let n=0;n<M.length;n+=1){const t=M[n];C(t),W(t.$$)}for(C(null),M.length=0;E.length;)E.pop()();for(let n=0;n<B.length;n+=1){const t=B[n];O.has(t)||(O.add(t),t())}B.length=0}while(M.length);for(;A.length;)A.pop()();j=!1,D=!1,O.clear()}}function W(n){if(null!==n.fragment){n.update(),l(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(z)}}const N=new Set;let T;function U(){T={r:0,c:[],p:T}}function H(){T.r||l(T.c),T=T.p}function P(n,t){n&&n.i&&(N.delete(n),n.i(t))}function q(n,t,e,r){if(n&&n.o){if(N.has(n))return;N.add(n),T.c.push((()=>{N.delete(n),r&&(e&&n.d(1),r())})),n.o(t)}}function F(n){n&&n.c()}function V(n,t,r){const{fragment:c,on_mount:o,on_destroy:h,after_update:u}=n.$$;c&&c.m(t,r),z((()=>{const t=o.map(e).filter(i);h?h.push(...t):l(t),n.$$.on_mount=[]})),u.forEach(z)}function G(n,t){const e=n.$$;null!==e.fragment&&(l(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function I(n,t){-1===n.$$.dirty[0]&&(M.push(n),j||(j=!0,L.then(R)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function J(t,e,i,c,o,h,u=[-1]){const d=_;C(t);const s=e.props||{},a=t.$$={fragment:null,ctx:null,props:h,update:n,not_equal:o,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:r(),dirty:u,skip_bound:!1};let p=!1;if(a.ctx=i?i(t,s,((n,e,...r)=>{const l=r.length?r[0]:e;return a.ctx&&o(a.ctx[n],a.ctx[n]=l)&&(!a.skip_bound&&a.bound[n]&&a.bound[n](l),p&&I(t,n)),e})):[],a.update(),p=!0,l(a.before_update),a.fragment=!!c&&c(a.ctx),e.target){if(e.hydrate){const n=function(n){return Array.from(n.childNodes)}(e.target);a.fragment&&a.fragment.l(n),n.forEach(f)}else a.fragment&&a.fragment.c();e.intro&&P(t.$$.fragment),V(t,e.target,e.anchor),R()}C(d)}class K{$destroy(){G(this,1),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const Q=[];function X(t,e=n){let r;const l=[];function i(n){if(c(t,n)&&(t=n,r)){const n=!Q.length;for(let n=0;n<l.length;n+=1){const e=l[n];e[1](),Q.push(e,t)}if(n){for(let n=0;n<Q.length;n+=2)Q[n][0](Q[n+1]);Q.length=0}}}return{set:i,update:function(n){i(n(t))},subscribe:function(c,o=n){const h=[c,o];return l.push(h),1===l.length&&(r=e(i)||n),c(t),()=>{const n=l.indexOf(h);-1!==n&&l.splice(n,1),0===l.length&&(r(),r=null)}}}}function Y(n,t="download.svg"){n.setAttribute("xmlns","http://www.w3.org/2000/svg");var e=n.outerHTML,r=new Blob(['<?xml version="1.0" standalone="no"?>\r\n',e],{type:"image/svg+xml;charset=utf-8"}),l=URL.createObjectURL(r),i=document.createElement("a");i.download=t,i.href=l,i.download=t,i.setAttribute("download",t),document.body.appendChild(i),i.click(),setTimeout((function(){window.URL.revokeObjectURL(l)}),100)}function Z(n){let t,e;return{c(){t=g("path"),b(t,"d",e="M0,0 \r\n            l"+n[5]+",0 \r\n            l"+(2*n[8]+n[9]-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6]-2*n[8]-n[9])+" \r\n            l"+(n[4].depth-2*n[8]-n[9])+",0 \r\n            l0,"+(2*n[8]+n[9])+"\r\n            l"+-n[4].depth+",0\r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7])),k(t,"fill","white")},m(n,e){a(n,t,e)},p(n,r){1008&r&&e!==(e="M0,0 \r\n            l"+n[5]+",0 \r\n            l"+(2*n[8]+n[9]-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6]-2*n[8]-n[9])+" \r\n            l"+(n[4].depth-2*n[8]-n[9])+",0 \r\n            l0,"+(2*n[8]+n[9])+"\r\n            l"+-n[4].depth+",0\r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7]))&&b(t,"d",e)},d(n){n&&f(t)}}}function nn(n){let t,e;return{c(){t=g("path"),b(t,"d",e="M0,0  \r\n            l"+n[5]+",0 \r\n            l"+(n[4].depth-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6])+" \r\n            l-"+n[4].depth+",0 \r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7])),k(t,"fill","white")},m(n,e){a(n,t,e)},p(n,r){240&r&&e!==(e="M0,0  \r\n            l"+n[5]+",0 \r\n            l"+(n[4].depth-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6])+" \r\n            l-"+n[4].depth+",0 \r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7]))&&b(t,"d",e)},d(n){n&&f(t)}}}function tn(n){let t,e,r,l;return{c(){t=g("rect"),b(t,"x",e=n[5]+n[8]+n[9]),b(t,"y",r=n[7]+n[8]),b(t,"width",l=2*n[9]),b(t,"height",n[9]),k(t,"fill","red")},m(n,e){a(n,t,e)},p(n,i){800&i&&e!==(e=n[5]+n[8]+n[9])&&b(t,"x",e),384&i&&r!==(r=n[7]+n[8])&&b(t,"y",r),512&i&&l!==(l=2*n[9])&&b(t,"width",l),512&i&&b(t,"height",n[9])},d(n){n&&f(t)}}}function en(n){let t,e,r,l;return{c(){t=g("rect"),b(t,"x",e=n[5]+n[4].depth-n[8]-3*n[9]),b(t,"y",r=n[7]+n[8]),b(t,"width",l=2*n[9]),b(t,"height",n[9]),k(t,"fill","blue")},m(n,e){a(n,t,e)},p(n,i){816&i&&e!==(e=n[5]+n[4].depth-n[8]-3*n[9])&&b(t,"x",e),384&i&&r!==(r=n[7]+n[8])&&b(t,"y",r),512&i&&l!==(l=2*n[9])&&b(t,"width",l),512&i&&b(t,"height",n[9])},d(n){n&&f(t)}}}function rn(n){let t,e,r,l;return{c(){t=g("rect"),b(t,"x",e=n[5]+n[4].depth-n[8]-3*n[9]),b(t,"y",r=n[4].height-n[8]-n[9]),b(t,"width",l=2*n[9]),b(t,"height",n[9]),k(t,"fill","orange")},m(n,e){a(n,t,e)},p(n,i){816&i&&e!==(e=n[5]+n[4].depth-n[8]-3*n[9])&&b(t,"x",e),784&i&&r!==(r=n[4].height-n[8]-n[9])&&b(t,"y",r),512&i&&l!==(l=2*n[9])&&b(t,"width",l),512&i&&b(t,"height",n[9])},d(n){n&&f(t)}}}function ln(n){let t,e,r,l;return{c(){t=g("rect"),b(t,"x",e=n[5]+n[8]+n[9]),b(t,"y",r=n[4].height-n[8]-n[9]),b(t,"width",l=2*n[9]),b(t,"height",n[9]),k(t,"fill","green")},m(n,e){a(n,t,e)},p(n,i){800&i&&e!==(e=n[5]+n[8]+n[9])&&b(t,"x",e),784&i&&r!==(r=n[4].height-n[8]-n[9])&&b(t,"y",r),512&i&&l!==(l=2*n[9])&&b(t,"width",l),512&i&&b(t,"height",n[9])},d(n){n&&f(t)}}}function cn(n){let t,e,r,l;return{c(){t=g("rect"),b(t,"x",e=n[5]+n[8]),b(t,"y",r=n[7]+n[8]+n[9]),b(t,"width",n[9]),b(t,"height",l=2*n[9]),k(t,"fill","red")},m(n,e){a(n,t,e)},p(n,i){288&i&&e!==(e=n[5]+n[8])&&b(t,"x",e),896&i&&r!==(r=n[7]+n[8]+n[9])&&b(t,"y",r),512&i&&b(t,"width",n[9]),512&i&&l!==(l=2*n[9])&&b(t,"height",l)},d(n){n&&f(t)}}}function on(n){let t,e,r,l;return{c(){t=g("rect"),b(t,"x",e=n[5]+n[4].depth-n[9]-n[8]),b(t,"y",r=n[7]+n[8]+n[9]),b(t,"width",n[9]),b(t,"height",l=2*n[9]),k(t,"fill","blue")},m(n,e){a(n,t,e)},p(n,i){816&i&&e!==(e=n[5]+n[4].depth-n[9]-n[8])&&b(t,"x",e),896&i&&r!==(r=n[7]+n[8]+n[9])&&b(t,"y",r),512&i&&b(t,"width",n[9]),512&i&&l!==(l=2*n[9])&&b(t,"height",l)},d(n){n&&f(t)}}}function hn(n){let t,e,r,l;return{c(){t=g("rect"),b(t,"x",e=n[5]+n[4].depth-n[9]-n[8]),b(t,"y",r=n[4].height-n[8]-3*n[9]),b(t,"width",n[9]),b(t,"height",l=2*n[9]),k(t,"fill","orange")},m(n,e){a(n,t,e)},p(n,i){816&i&&e!==(e=n[5]+n[4].depth-n[9]-n[8])&&b(t,"x",e),784&i&&r!==(r=n[4].height-n[8]-3*n[9])&&b(t,"y",r),512&i&&b(t,"width",n[9]),512&i&&l!==(l=2*n[9])&&b(t,"height",l)},d(n){n&&f(t)}}}function un(n){let t,e,r,l;return{c(){t=g("rect"),b(t,"x",e=n[5]+n[8]),b(t,"y",r=n[4].height-n[8]-2*n[9]-n[9]),b(t,"width",n[9]),b(t,"height",l=2*n[9]),k(t,"fill","green")},m(n,e){a(n,t,e)},p(n,i){288&i&&e!==(e=n[5]+n[8])&&b(t,"x",e),784&i&&r!==(r=n[4].height-n[8]-2*n[9]-n[9])&&b(t,"y",r),512&i&&b(t,"width",n[9]),512&i&&l!==(l=2*n[9])&&b(t,"height",l)},d(n){n&&f(t)}}}function dn(t){let e,r,l,i,c,o,h,u,d,p,m,w,v,$;function k(n,t){return n[4].isClosed?nn:Z}let _=k(t),C=_(t),S=t[10].h1&&tn(t),M=t[10].h2&&en(t),E=t[10].h3&&rn(t),B=t[10].h4&&ln(t),A=t[10].v1&&cn(t),L=t[10].v2&&on(t),j=t[10].v3&&hn(t),z=t[10].v4&&un(t);return{c(){e=g("g"),r=g("g"),C.c(),l=y(),S&&S.c(),i=y(),M&&M.c(),c=y(),E&&E.c(),o=y(),B&&B.c(),h=y(),A&&A.c(),u=y(),L&&L.c(),d=y(),j&&j.c(),p=y(),z&&z.c(),b(r,"transform",m=t[0]?"scale(-1, 1)":""),b(e,"transform",w="translate("+(t[0]?2*t[1]-5:t[1])+" "+t[2]+")")},m(n,f){a(n,e,f),s(e,r),C.m(r,null),s(r,l),S&&S.m(r,null),s(r,i),M&&M.m(r,null),s(r,c),E&&E.m(r,null),s(r,o),B&&B.m(r,null),s(r,h),A&&A.m(r,null),s(r,u),L&&L.m(r,null),s(r,d),j&&j.m(r,null),s(r,p),z&&z.m(r,null),t[12](e),v||($=x(e,"click",t[11]),v=!0)},p(n,[t]){_===(_=k(n))&&C?C.p(n,t):(C.d(1),C=_(n),C&&(C.c(),C.m(r,l))),n[10].h1?S?S.p(n,t):(S=tn(n),S.c(),S.m(r,i)):S&&(S.d(1),S=null),n[10].h2?M?M.p(n,t):(M=en(n),M.c(),M.m(r,c)):M&&(M.d(1),M=null),n[10].h3?E?E.p(n,t):(E=rn(n),E.c(),E.m(r,o)):E&&(E.d(1),E=null),n[10].h4?B?B.p(n,t):(B=ln(n),B.c(),B.m(r,h)):B&&(B.d(1),B=null),n[10].v1?A?A.p(n,t):(A=cn(n),A.c(),A.m(r,u)):A&&(A.d(1),A=null),n[10].v2?L?L.p(n,t):(L=on(n),L.c(),L.m(r,d)):L&&(L.d(1),L=null),n[10].v3?j?j.p(n,t):(j=hn(n),j.c(),j.m(r,p)):j&&(j.d(1),j=null),n[10].v4?z?z.p(n,t):(z=un(n),z.c(),z.m(r,null)):z&&(z.d(1),z=null),1&t&&m!==(m=n[0]?"scale(-1, 1)":"")&&b(r,"transform",m),7&t&&w!==(w="translate("+(n[0]?2*n[1]-5:n[1])+" "+n[2]+")")&&b(e,"transform",w)},i:n,o:n,d(n){n&&f(e),C.d(),S&&S.d(),M&&M.d(),E&&E.d(),B&&B.d(),A&&A.d(),L&&L.d(),j&&j.d(),z&&z.d(),t[12](null),v=!1,$()}}}function sn(n,t,e){let r,l,i,c,o,h,d;u(n,_n,(n=>e(4,r=n))),u(n,Sn,(n=>e(5,l=n))),u(n,Cn,(n=>e(6,i=n))),u(n,Mn,(n=>e(7,c=n))),u(n,En,(n=>e(8,o=n))),u(n,kn,(n=>e(9,h=n))),u(n,Bn,(n=>e(10,d=n)));let s,{mirror:a=!1}=t,{x:f=0}=t,{y:p=0}=t;return n.$$set=n=>{"mirror"in n&&e(0,a=n.mirror),"x"in n&&e(1,f=n.x),"y"in n&&e(2,p=n.y)},[a,f,p,s,r,l,i,c,o,h,d,()=>Y(s,"SidePanel.svg"),function(n){E[n?"unshift":"push"]((()=>{s=n,e(3,s)}))}]}class an extends K{constructor(n){super(),J(this,n,sn,dn,c,{mirror:0,x:1,y:2})}}function fn(t){let e,r,l,i,c,o;return{c(){e=g("g"),r=g("path"),b(r,"d",l="M"+t[5]+",0 \r\n        l"+t[3]+",0\r\n        l0,"+(pn+t[5])+"\r\n\r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l0,"+(t[2]-2*(pn+3*t[5]))+"\r\n\r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l0,"+(pn+t[5])+"\r\n        l"+-t[3]+",0\r\n        l0,"+(-pn-t[5])+"\r\n\r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        l0,"+(-t[2]+2*(pn+3*t[5]))+"\r\n\r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        l0,"+(-pn-t[5])+"\r\n    "),k(r,"fill","white"),b(e,"transform",i="translate("+t[0]+" "+t[1]+")")},m(n,l){a(n,e,l),s(e,r),t[7](e),c||(o=x(e,"click",t[6]),c=!0)},p(n,[t]){44&t&&l!==(l="M"+n[5]+",0 \r\n        l"+n[3]+",0\r\n        l0,"+(pn+n[5])+"\r\n\r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l0,"+(n[2]-2*(pn+3*n[5]))+"\r\n\r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l0,"+(pn+n[5])+"\r\n        l"+-n[3]+",0\r\n        l0,"+(-pn-n[5])+"\r\n\r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        l0,"+(-n[2]+2*(pn+3*n[5]))+"\r\n\r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        l0,"+(-pn-n[5])+"\r\n    ")&&b(r,"d",l),3&t&&i!==(i="translate("+n[0]+" "+n[1]+")")&&b(e,"transform",i)},i:n,o:n,d(n){n&&f(e),t[7](null),c=!1,o()}}}let pn=7;function gn(n,t,e){let r,l;u(n,kn,(n=>e(5,r=n)));let{x:i=0}=t,{y:c=0}=t,{h:o=0}=t,{w:h=0}=t;return n.$$set=n=>{"x"in n&&e(0,i=n.x),"y"in n&&e(1,c=n.y),"h"in n&&e(2,o=n.h),"w"in n&&e(3,h=n.w)},[i,c,o,h,l,r,()=>Y(l,"Shelf.svg"),function(n){E[n?"unshift":"push"]((()=>{l=n,e(4,l)}))}]}class mn extends K{constructor(n){super(),J(this,n,gn,fn,c,{x:0,y:1,h:2,w:3})}}function wn(t){let e,r,l,i,c,o;return{c(){e=g("g"),r=g("path"),b(r,"d",l="M"+t[5]+",0 \r\n        l"+t[3]+",0\r\n        \r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l0,"+(t[2]-6*t[5]-t[6]-2*t[7])+"\r\n\r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l"+-t[3]+",0\r\n        \r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        l0,"+(-t[2]+(6*t[5]+t[6]+2*t[7]))+"\r\n\r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        \r\n    "),k(r,"fill","white"),b(e,"transform",i="translate("+t[0]+" "+t[1]+")")},m(n,l){a(n,e,l),s(e,r),t[9](e),c||(o=x(e,"click",t[8]),c=!0)},p(n,[t]){236&t&&l!==(l="M"+n[5]+",0 \r\n        l"+n[3]+",0\r\n        \r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l0,"+(n[2]-6*n[5]-n[6]-2*n[7])+"\r\n\r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l"+-n[3]+",0\r\n        \r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        l0,"+(-n[2]+(6*n[5]+n[6]+2*n[7]))+"\r\n\r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        \r\n    ")&&b(r,"d",l),3&t&&i!==(i="translate("+n[0]+" "+n[1]+")")&&b(e,"transform",i)},i:n,o:n,d(n){n&&f(e),t[9](null),c=!1,o()}}}function yn(n,t,e){let r,l,i,c;u(n,kn,(n=>e(5,r=n))),u(n,Cn,(n=>e(6,l=n))),u(n,En,(n=>e(7,i=n)));let{x:o=0}=t,{y:h=0}=t,{w:d=0}=t,{h:s=0}=t;return n.$$set=n=>{"x"in n&&e(0,o=n.x),"y"in n&&e(1,h=n.y),"w"in n&&e(2,d=n.w),"h"in n&&e(3,s=n.h)},[o,h,d,s,c,r,l,i,()=>Y(c,"VerticalShelf.svg"),function(n){E[n?"unshift":"push"]((()=>{c=n,e(4,c)}))}]}class xn extends K{constructor(n){super(),J(this,n,yn,wn,c,{x:0,y:1,w:2,h:3})}}function bn(t){let e,r,l,i,c,o;return{c(){e=g("g"),r=g("path"),b(r,"d",l="M"+t[4]+",0 \r\n        l"+t[5].width+",0\r\n        l0,"+t[0]+"\r\n\r\n        l"+t[4]+",0\r\n        l0,"+2*t[4]+"\r\n        l"+-t[4]+",0\r\n\r\n        l0,"+t[0]+"\r\n        l"+-t[5].width+",0\r\n        l0,"+-t[0]+"\r\n\r\n        l"+-t[4]+",0\r\n        l0,"+2*-t[4]+"\r\n        l"+t[4]+",0\r\n\r\n        l0,"+-t[0]+"\r\n    "),k(r,"fill","white"),b(e,"transform",i="translate("+t[1]+" "+t[2]+")")},m(n,l){a(n,e,l),s(e,r),t[7](e),c||(o=x(e,"click",t[6]),c=!0)},p(n,[t]){49&t&&l!==(l="M"+n[4]+",0 \r\n        l"+n[5].width+",0\r\n        l0,"+n[0]+"\r\n\r\n        l"+n[4]+",0\r\n        l0,"+2*n[4]+"\r\n        l"+-n[4]+",0\r\n\r\n        l0,"+n[0]+"\r\n        l"+-n[5].width+",0\r\n        l0,"+-n[0]+"\r\n\r\n        l"+-n[4]+",0\r\n        l0,"+2*-n[4]+"\r\n        l"+n[4]+",0\r\n\r\n        l0,"+-n[0]+"\r\n    ")&&b(r,"d",l),6&t&&i!==(i="translate("+n[1]+" "+n[2]+")")&&b(e,"transform",i)},i:n,o:n,d(n){n&&f(e),t[7](null),c=!1,o()}}}function vn(n,t,e){let r,l,i;u(n,kn,(n=>e(4,r=n))),u(n,_n,(n=>e(5,l=n)));let{randAbstand:c=7}=t,{x:o=0}=t,{y:h=0}=t;return n.$$set=n=>{"randAbstand"in n&&e(0,c=n.randAbstand),"x"in n&&e(1,o=n.x),"y"in n&&e(2,h=n.y)},[c,o,h,i,r,l,()=>Y(i,"Bar.svg"),function(n){E[n?"unshift":"push"]((()=>{i=n,e(3,i)}))}]}class $n extends K{constructor(n){super(),J(this,n,vn,bn,c,{randAbstand:0,x:1,y:2})}}const kn=X(9),_n=X({width:100,height:150,depth:100,isClosed:!0}),Cn=X(20),Sn=X(18),Mn=X(20),En=X(7),Bn=X({h1:!1,h2:!1,h3:!1,h4:!1,v1:!1,v2:!1,v3:!1,v4:!1});const An=function(){const{subscribe:n,set:t,update:e}=X({width:600,height:700});return{subscribe:n}}();const Ln=function(){const{subscribe:n,set:t,update:e}=X([]);return{subscribe:n,set:t,update:e,addSides:()=>{t([{name:"s1",x:0,y:0,w:0,component:an},{name:"s2",x:0,y:0,component:an,props:{mirror:!0}}]),Bn.set({h1:!1,h2:!1,h3:!1,h4:!1,v1:!1,v2:!1,v3:!1,v4:!1})},addShelf:(n,t,r,l)=>{e((e=>[...e,{name:r,props:{w:n,h:t},component:l?xn:mn}]))},addBar:(n,t)=>{e((n=>[...n,{name:t,component:$n}]))},getDimensions:()=>{let n=h(Ln);n.forEach((n=>{if(n.name){console.log("get "+n.name);var t=document.querySelector("#"+n.name);if(t){var e=t.getBoundingClientRect();!e||n.w===e.width&&n.h===e.height||(console.log("size of "+n.name+" is "+e.width+"/"+e.height),n.w=e.width,n.h=e.height)}}})),Ln.set(n)},reposition:()=>{let n=0,t=0,e=0;let r=h(An),l=h(Ln);l.forEach((l=>{l.w&&l.h&&(n+l.w+5>r.width&&(t+=e+5,n=0),l.x===n&&l.y===t||(l.x=n,l.y=t),console.log("move "+l.name+" to "+l.x+"/"+l.y),e=Math.max(e,l.h),n+=l.w+5)})),Ln.set(l)}}}();function jn(n,t,e){const r=n.slice();return r[34]=t[e],r}function zn(n){let e,r,l,i;const c=[{name:n[34].name},n[34].props,{x:n[34].x||0},{y:n[34].y||0}];var o=n[34].component;function h(n){let e={};for(let n=0;n<c.length;n+=1)e=t(e,c[n]);return{props:e}}return o&&(r=new o(h())),{c(){e=g("g"),r&&F(r.$$.fragment),b(e,"id",l=n[34].name),b(e,"class","svelte-1nzgpjz")},m(n,t){a(n,e,t),r&&V(r,e,null),i=!0},p(n,t){const u=16384&t[0]?function(n,t){const e={},r={},l={$$scope:1};let i=n.length;for(;i--;){const c=n[i],o=t[i];if(o){for(const n in c)n in o||(r[n]=1);for(const n in o)l[n]||(e[n]=o[n],l[n]=1);n[i]=o}else for(const n in c)l[n]=1}for(const n in r)n in e||(e[n]=void 0);return e}(c,[{name:n[34].name},(d=n[34].props,"object"==typeof d&&null!==d?d:{}),{x:n[34].x||0},{y:n[34].y||0}]):{};var d;if(o!==(o=n[34].component)){if(r){U();const n=r;q(n.$$.fragment,1,0,(()=>{G(n,1)})),H()}o?(r=new o(h()),F(r.$$.fragment),P(r.$$.fragment,1),V(r,e,null)):r=null}else o&&r.$set(u);(!i||16384&t[0]&&l!==(l=n[34].name))&&b(e,"id",l)},i(n){i||(r&&P(r.$$.fragment,n),i=!0)},o(n){r&&q(r.$$.fragment,n),i=!1},d(n){n&&f(e),r&&G(r)}}}function Dn(n){let t,e,r,i,c,o,h,u,d,y,_,C,S,M,E,B,A,L,j,z,D,O,R,W,N,T,F,V,G,I,J,K,Q,X,Y,Z,nn,tn,en,rn,ln,cn,on,hn,un,dn,sn,an,fn,pn,gn,mn,wn,yn,xn,bn,vn,$n,kn,_n,Cn,Sn,Mn,En,Bn=n[14],An=[];for(let t=0;t<Bn.length;t+=1)An[t]=zn(jn(n,Bn,t));const Ln=n=>q(An[n],1,1,(()=>{An[n]=null}));return{c(){t=p("div"),e=p("div"),r=m("Workspace"),i=p("br"),c=m(" \n        W "),o=p("input"),h=m("\n        L "),u=p("input"),d=w(),y=p("div"),_=m("Dimensions"),C=p("br"),S=w(),M=p("nobr"),E=m("W "),B=p("input"),A=m("\n        D "),L=p("input"),z=m("\n        H "),D=p("input"),O=m("\n        Cleat "),R=p("input"),W=w(),N=p("div"),T=m("Shelves"),F=p("br"),V=w(),G=p("input"),I=m(" top\n        "),J=p("input"),K=m(" bottom\n        "),Q=p("input"),X=m(" front\n        "),Y=p("input"),Z=m(" back\n        "),nn=p("br"),tn=m("\n        Bars"),en=p("br"),rn=w(),ln=p("input"),cn=m(" tl\n        "),on=p("input"),hn=m(" tr\n        "),un=p("input"),dn=m(" bl\n        "),sn=p("input"),an=m(" br\n        "),fn=p("br"),pn=w(),gn=p("input"),mn=m(" closed sides"),wn=w(),yn=p("button"),yn.textContent="Download Workspace",xn=w(),bn=p("p"),bn.innerHTML="<i>Click individual parts to download separate files</i>",vn=w(),$n=p("div"),kn=g("svg");for(let n=0;n<An.length;n+=1)An[n].c();b(o,"type","number"),b(o,"min","0"),b(o,"max","1000"),b(u,"type","number"),b(u,"min","0"),b(u,"max","1000"),b(B,"type","number"),b(B,"min","0"),b(B,"max","500"),b(L,"type","number"),b(L,"min",j=2*n[11]+n[12]),b(L,"max","500"),b(D,"type","number"),b(D,"min","0"),b(D,"max","500"),b(R,"type","number"),b(R,"min","0"),b(R,"max","500"),b(G,"type","checkbox"),b(J,"type","checkbox"),b(Q,"type","checkbox"),b(Y,"type","checkbox"),b(ln,"type","checkbox"),b(on,"type","checkbox"),b(un,"type","checkbox"),b(sn,"type","checkbox"),b(gn,"type","checkbox"),k(t,"display","flex"),k(t,"flex-direction","column"),k(t,"margin","1em"),b(kn,"width",_n=n[10].width),b(kn,"height",Cn=n[10].height),b(kn,"fill-rule","evenodd"),k(kn,"border","1px solid silver"),k(kn,"fill","none"),k(kn,"stroke","black"),k(kn,"stroke-width","0.5px"),b($n,"id","workspaces"),b($n,"class","svelte-1nzgpjz")},m(l,f){a(l,t,f),s(t,e),s(e,r),s(e,i),s(e,c),s(e,o),$(o,n[10].width),s(e,h),s(e,u),$(u,n[10].height),s(t,d),s(t,y),s(y,_),s(y,C),s(y,S),s(y,M),s(M,E),s(M,B),$(B,n[8].width),s(M,A),s(M,L),$(L,n[8].depth),s(M,z),s(M,D),$(D,n[8].height),s(M,O),s(M,R),$(R,n[13]),s(t,W),s(t,N),s(N,T),s(N,F),s(N,V),s(N,G),G.checked=n[0],s(N,I),s(N,J),J.checked=n[1],s(N,K),s(N,Q),Q.checked=n[2],s(N,X),s(N,Y),Y.checked=n[3],s(N,Z),s(N,nn),s(N,tn),s(N,en),s(N,rn),s(N,ln),ln.checked=n[4],s(N,cn),s(N,on),on.checked=n[5],s(N,hn),s(N,un),un.checked=n[6],s(N,dn),s(N,sn),sn.checked=n[7],s(N,an),s(N,fn),s(N,pn),s(N,gn),gn.checked=n[8].isClosed,s(N,mn),s(t,wn),s(t,yn),s(t,xn),s(t,bn),a(l,vn,f),a(l,$n,f),s($n,kn);for(let n=0;n<An.length;n+=1)An[n].m(kn,null);n[33](kn),Sn=!0,Mn||(En=[x(o,"input",n[16]),x(o,"change",n[17]),x(u,"input",n[18]),x(B,"input",n[19]),x(L,"input",n[20]),x(D,"input",n[21]),x(R,"input",n[22]),x(G,"change",n[23]),x(J,"change",n[24]),x(Q,"change",n[25]),x(Y,"change",n[26]),x(ln,"change",n[27]),x(on,"change",n[28]),x(un,"change",n[29]),x(sn,"change",n[30]),x(gn,"change",n[31]),x(yn,"click",n[32])],Mn=!0)},p(n,t){if(1024&t[0]&&v(o.value)!==n[10].width&&$(o,n[10].width),1024&t[0]&&v(u.value)!==n[10].height&&$(u,n[10].height),256&t[0]&&v(B.value)!==n[8].width&&$(B,n[8].width),(!Sn||6144&t[0]&&j!==(j=2*n[11]+n[12]))&&b(L,"min",j),256&t[0]&&v(L.value)!==n[8].depth&&$(L,n[8].depth),256&t[0]&&v(D.value)!==n[8].height&&$(D,n[8].height),8192&t[0]&&v(R.value)!==n[13]&&$(R,n[13]),1&t[0]&&(G.checked=n[0]),2&t[0]&&(J.checked=n[1]),4&t[0]&&(Q.checked=n[2]),8&t[0]&&(Y.checked=n[3]),16&t[0]&&(ln.checked=n[4]),32&t[0]&&(on.checked=n[5]),64&t[0]&&(un.checked=n[6]),128&t[0]&&(sn.checked=n[7]),256&t[0]&&(gn.checked=n[8].isClosed),16384&t[0]){let e;for(Bn=n[14],e=0;e<Bn.length;e+=1){const r=jn(n,Bn,e);An[e]?(An[e].p(r,t),P(An[e],1)):(An[e]=zn(r),An[e].c(),P(An[e],1),An[e].m(kn,null))}for(U(),e=Bn.length;e<An.length;e+=1)Ln(e);H()}(!Sn||1024&t[0]&&_n!==(_n=n[10].width))&&b(kn,"width",_n),(!Sn||1024&t[0]&&Cn!==(Cn=n[10].height))&&b(kn,"height",Cn)},i(n){if(!Sn){for(let n=0;n<Bn.length;n+=1)P(An[n]);Sn=!0}},o(n){An=An.filter(Boolean);for(let n=0;n<An.length;n+=1)q(An[n]);Sn=!1},d(e){e&&f(t),e&&f(vn),e&&f($n),function(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}(An,e),n[33](null),Mn=!1,l(En)}}}function On(n,t,e){let r,l,i,c,o,h,s,a;u(n,_n,(n=>e(8,r=n))),u(n,Bn,(n=>e(15,l=n))),u(n,An,(n=>e(10,i=n))),u(n,En,(n=>e(11,c=n))),u(n,kn,(n=>e(12,o=n))),u(n,Sn,(n=>e(13,h=n))),u(n,Ln,(n=>e(14,s=n)));let f=!0,p=!0,g=!0,m=!0,w=!1,y=!1,x=!1,b=!1;S((()=>{Ln.getDimensions(),Ln.reposition()}));return n.$$.update=()=>{33279&n.$$.dirty[0]&&(r.height<100&&(e(0,f=!1),e(2,g=!1),e(3,m=!1)),r.depth<100&&(e(0,f=!1),e(1,p=!1)),r.depth<50&&e(2,g=!1),Ln.addSides(),f&&(d(Bn,l.h1=!0,l),d(Bn,l.h2=!0,l),Ln.addShelf(r.depth,r.width,"top",!1)),p&&(d(Bn,l.h3=!0,l),d(Bn,l.h4=!0,l),Ln.addShelf(r.width,r.depth,"bottom",!1)),g&&(d(Bn,l.v2=!0,l),d(Bn,l.v3=!0,l),Ln.addShelf(r.height,r.width,"front",!0)),m&&(d(Bn,l.v1=!0,l),d(Bn,l.v4=!0,l),Ln.addShelf(r.height,r.width,"back",!0)),w&&(d(Bn,l.v1=!0,l),Ln.addBar(r.width,"tl")),y&&(d(Bn,l.v2=!0,l),Ln.addBar(r.width,"tr")),x&&(d(Bn,l.v4=!0,l),Ln.addBar(r.width,"br")),b&&(r.isClosed?d(Bn,l.v3=!0,l):d(Bn,l.h3=!0,l),Ln.addBar(r.width,"bl")),d(_n,r.isClosed=l.h2||l.v2||l.h1||l.v3||r.isClosed,r),Ln.getDimensions(),Ln.reposition())},[f,p,g,m,w,y,x,b,r,a,i,c,o,h,s,l,function(){i.width=v(this.value),An.set(i)},n=>d(An,i={...i,width:n.target.value},i),function(){i.height=v(this.value),An.set(i)},function(){r.width=v(this.value),_n.set(r)},function(){r.depth=v(this.value),_n.set(r)},function(){r.height=v(this.value),_n.set(r)},function(){h=v(this.value),Sn.set(h)},function(){f=this.checked,e(0,f),e(8,r),e(1,p),e(2,g),e(3,m),e(4,w),e(5,y),e(6,x),e(7,b),e(15,l)},function(){p=this.checked,e(1,p),e(8,r),e(0,f),e(2,g),e(3,m),e(4,w),e(5,y),e(6,x),e(7,b),e(15,l)},function(){g=this.checked,e(2,g),e(8,r),e(0,f),e(1,p),e(3,m),e(4,w),e(5,y),e(6,x),e(7,b),e(15,l)},function(){m=this.checked,e(3,m),e(8,r),e(0,f),e(1,p),e(2,g),e(4,w),e(5,y),e(6,x),e(7,b),e(15,l)},function(){w=this.checked,e(4,w)},function(){y=this.checked,e(5,y)},function(){x=this.checked,e(6,x)},function(){b=this.checked,e(7,b)},function(){r.isClosed=this.checked,_n.set(r)},n=>Y(a,"Workspace.svg"),function(n){E[n?"unshift":"push"]((()=>{a=n,e(9,a)}))}]}return new class extends K{constructor(n){super(),J(this,n,On,Dn,c,{},[-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
