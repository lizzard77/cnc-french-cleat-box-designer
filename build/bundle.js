var app=function(){"use strict";function n(){}function t(n,t){for(const e in t)n[e]=t[e];return n}function e(n){return n()}function r(){return Object.create(null)}function i(n){n.forEach(e)}function l(n){return"function"==typeof n}function o(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function c(t,...e){if(null==t)return n;const r=t.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function h(n){let t;return c(n,(n=>t=n))(),t}function u(n,t,e){n.$$.on_destroy.push(c(t,e))}function s(n,t,e=t){return n.set(e),t}function d(n,t){n.appendChild(t)}function a(n,t,e){n.insertBefore(t,e||null)}function f(n){n.parentNode.removeChild(n)}function p(n){return document.createElement(n)}function m(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function g(n){return document.createTextNode(n)}function w(){return g(" ")}function x(){return g("")}function b(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function v(n,t,e){null==e?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function y(n){return""===n?null:+n}function k(n,t){n.value=null==t?"":t}function $(n,t,e,r){n.style.setProperty(t,e,r?"important":"")}let C;function _(n){C=n}function S(n){(function(){if(!C)throw new Error("Function called outside component initialization");return C})().$$.after_update.push(n)}const M=[],B=[],E=[],L=[],z=Promise.resolve();let A=!1;function j(n){E.push(n)}let D=!1;const O=new Set;function T(){if(!D){D=!0;do{for(let n=0;n<M.length;n+=1){const t=M[n];_(t),H(t.$$)}for(_(null),M.length=0;B.length;)B.pop()();for(let n=0;n<E.length;n+=1){const t=E[n];O.has(t)||(O.add(t),t())}E.length=0}while(M.length);for(;L.length;)L.pop()();A=!1,D=!1,O.clear()}}function H(n){if(null!==n.fragment){n.update(),i(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(j)}}const N=new Set;let R;function W(){R={r:0,c:[],p:R}}function U(){R.r||i(R.c),R=R.p}function F(n,t){n&&n.i&&(N.delete(n),n.i(t))}function P(n,t,e,r){if(n&&n.o){if(N.has(n))return;N.add(n),R.c.push((()=>{N.delete(n),r&&(e&&n.d(1),r())})),n.o(t)}}function V(n){n&&n.c()}function q(n,t,r){const{fragment:o,on_mount:c,on_destroy:h,after_update:u}=n.$$;o&&o.m(t,r),j((()=>{const t=c.map(e).filter(l);h?h.push(...t):i(t),n.$$.on_mount=[]})),u.forEach(j)}function G(n,t){const e=n.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function I(n,t){-1===n.$$.dirty[0]&&(M.push(n),A||(A=!0,z.then(T)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function J(t,e,l,o,c,h,u=[-1]){const s=C;_(t);const d=e.props||{},a=t.$$={fragment:null,ctx:null,props:h,update:n,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:r(),dirty:u,skip_bound:!1};let p=!1;if(a.ctx=l?l(t,d,((n,e,...r)=>{const i=r.length?r[0]:e;return a.ctx&&c(a.ctx[n],a.ctx[n]=i)&&(!a.skip_bound&&a.bound[n]&&a.bound[n](i),p&&I(t,n)),e})):[],a.update(),p=!0,i(a.before_update),a.fragment=!!o&&o(a.ctx),e.target){if(e.hydrate){const n=function(n){return Array.from(n.childNodes)}(e.target);a.fragment&&a.fragment.l(n),n.forEach(f)}else a.fragment&&a.fragment.c();e.intro&&F(t.$$.fragment),q(t,e.target,e.anchor),T()}_(s)}class K{$destroy(){G(this,1),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const Q=[];function X(t,e=n){let r;const i=[];function l(n){if(o(t,n)&&(t=n,r)){const n=!Q.length;for(let n=0;n<i.length;n+=1){const e=i[n];e[1](),Q.push(e,t)}if(n){for(let n=0;n<Q.length;n+=2)Q[n][0](Q[n+1]);Q.length=0}}}return{set:l,update:function(n){l(n(t))},subscribe:function(o,c=n){const h=[o,c];return i.push(h),1===i.length&&(r=e(l)||n),o(t),()=>{const n=i.indexOf(h);-1!==n&&i.splice(n,1),0===i.length&&(r(),r=null)}}}}function Y(n,t="download.svg"){n.setAttribute("xmlns","http://www.w3.org/2000/svg");var e=n.outerHTML,r='<?xml version="1.0" standalone="no"?>\r\n',i="";"svg"!==n.tagName&&(r+='<svg fill-rule="evenodd" style="border: 1px solid silver; fill:none;stroke:black;stroke-width:0.5px;">',i="</svg>");var l=new Blob([r,e,i],{type:"image/svg+xml;charset=utf-8"}),o=URL.createObjectURL(l),c=document.createElement("a");c.download=t,c.href=o,c.download=t,c.setAttribute("download",t),document.body.appendChild(c),c.click(),setTimeout((function(){window.URL.revokeObjectURL(o)}),100)}function Z(n){let t,e;return{c(){t=m("path"),v(t,"d",e="M0,0 \r\n            l"+n[5]+",0 \r\n            l"+(2*n[8]+n[9]-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6]-2*n[8]-n[9])+" \r\n            l"+(n[4].depth-2*n[8]-n[9])+",0 \r\n            l0,"+(2*n[8]+n[9])+"\r\n            l"+-n[4].depth+",0\r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7])),$(t,"fill","white")},m(n,e){a(n,t,e)},p(n,r){1008&r&&e!==(e="M0,0 \r\n            l"+n[5]+",0 \r\n            l"+(2*n[8]+n[9]-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6]-2*n[8]-n[9])+" \r\n            l"+(n[4].depth-2*n[8]-n[9])+",0 \r\n            l0,"+(2*n[8]+n[9])+"\r\n            l"+-n[4].depth+",0\r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7]))&&v(t,"d",e)},d(n){n&&f(t)}}}function nn(n){let t,e;return{c(){t=m("path"),v(t,"d",e="M0,0  \r\n            l"+n[5]+",0 \r\n            l"+(n[4].depth-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6])+" \r\n            l-"+n[4].depth+",0 \r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7])),$(t,"fill","white")},m(n,e){a(n,t,e)},p(n,r){240&r&&e!==(e="M0,0  \r\n            l"+n[5]+",0 \r\n            l"+(n[4].depth-n[6])+",0 \r\n            a"+n[6]+","+n[6]+" 0 0 1 "+n[6]+","+n[6]+" \r\n            l0,"+(n[4].height-n[6])+" \r\n            l-"+n[4].depth+",0 \r\n            l0,-"+(n[4].height-n[7])+" \r\n            l-"+n[5]+","+n[5]+" \r\n            l0,-"+(n[5]+n[7]))&&v(t,"d",e)},d(n){n&&f(t)}}}function tn(n){let t,e,r,i;return{c(){t=m("rect"),v(t,"x",e=n[5]+n[8]+n[9]),v(t,"y",r=n[7]+n[8]),v(t,"width",i=2*n[9]),v(t,"height",n[9]),$(t,"fill","red")},m(n,e){a(n,t,e)},p(n,l){800&l&&e!==(e=n[5]+n[8]+n[9])&&v(t,"x",e),384&l&&r!==(r=n[7]+n[8])&&v(t,"y",r),512&l&&i!==(i=2*n[9])&&v(t,"width",i),512&l&&v(t,"height",n[9])},d(n){n&&f(t)}}}function en(n){let t,e,r,i;return{c(){t=m("rect"),v(t,"x",e=n[5]+n[4].depth-n[8]-3*n[9]),v(t,"y",r=n[7]+n[8]),v(t,"width",i=2*n[9]),v(t,"height",n[9]),$(t,"fill","blue")},m(n,e){a(n,t,e)},p(n,l){816&l&&e!==(e=n[5]+n[4].depth-n[8]-3*n[9])&&v(t,"x",e),384&l&&r!==(r=n[7]+n[8])&&v(t,"y",r),512&l&&i!==(i=2*n[9])&&v(t,"width",i),512&l&&v(t,"height",n[9])},d(n){n&&f(t)}}}function rn(n){let t,e,r,i;return{c(){t=m("rect"),v(t,"x",e=n[5]+n[4].depth-n[8]-3*n[9]),v(t,"y",r=n[4].height-n[8]-n[9]),v(t,"width",i=2*n[9]),v(t,"height",n[9]),$(t,"fill","orange")},m(n,e){a(n,t,e)},p(n,l){816&l&&e!==(e=n[5]+n[4].depth-n[8]-3*n[9])&&v(t,"x",e),784&l&&r!==(r=n[4].height-n[8]-n[9])&&v(t,"y",r),512&l&&i!==(i=2*n[9])&&v(t,"width",i),512&l&&v(t,"height",n[9])},d(n){n&&f(t)}}}function ln(n){let t,e,r,i;return{c(){t=m("rect"),v(t,"x",e=n[5]+n[8]+n[9]),v(t,"y",r=n[4].height-n[8]-n[9]),v(t,"width",i=2*n[9]),v(t,"height",n[9]),$(t,"fill","green")},m(n,e){a(n,t,e)},p(n,l){800&l&&e!==(e=n[5]+n[8]+n[9])&&v(t,"x",e),784&l&&r!==(r=n[4].height-n[8]-n[9])&&v(t,"y",r),512&l&&i!==(i=2*n[9])&&v(t,"width",i),512&l&&v(t,"height",n[9])},d(n){n&&f(t)}}}function on(n){let t,e,r,i;return{c(){t=m("rect"),v(t,"x",e=n[5]+n[8]),v(t,"y",r=n[7]+n[8]+n[9]),v(t,"width",n[9]),v(t,"height",i=2*n[9]),$(t,"fill","red")},m(n,e){a(n,t,e)},p(n,l){288&l&&e!==(e=n[5]+n[8])&&v(t,"x",e),896&l&&r!==(r=n[7]+n[8]+n[9])&&v(t,"y",r),512&l&&v(t,"width",n[9]),512&l&&i!==(i=2*n[9])&&v(t,"height",i)},d(n){n&&f(t)}}}function cn(n){let t,e,r,i;return{c(){t=m("rect"),v(t,"x",e=n[5]+n[4].depth-n[9]-n[8]),v(t,"y",r=n[7]+n[8]+n[9]),v(t,"width",n[9]),v(t,"height",i=2*n[9]),$(t,"fill","blue")},m(n,e){a(n,t,e)},p(n,l){816&l&&e!==(e=n[5]+n[4].depth-n[9]-n[8])&&v(t,"x",e),896&l&&r!==(r=n[7]+n[8]+n[9])&&v(t,"y",r),512&l&&v(t,"width",n[9]),512&l&&i!==(i=2*n[9])&&v(t,"height",i)},d(n){n&&f(t)}}}function hn(n){let t,e,r,i;return{c(){t=m("rect"),v(t,"x",e=n[5]+n[4].depth-n[9]-n[8]),v(t,"y",r=n[4].height-n[8]-3*n[9]),v(t,"width",n[9]),v(t,"height",i=2*n[9]),$(t,"fill","orange")},m(n,e){a(n,t,e)},p(n,l){816&l&&e!==(e=n[5]+n[4].depth-n[9]-n[8])&&v(t,"x",e),784&l&&r!==(r=n[4].height-n[8]-3*n[9])&&v(t,"y",r),512&l&&v(t,"width",n[9]),512&l&&i!==(i=2*n[9])&&v(t,"height",i)},d(n){n&&f(t)}}}function un(n){let t,e,r,i;return{c(){t=m("rect"),v(t,"x",e=n[5]+n[8]),v(t,"y",r=n[4].height-n[8]-2*n[9]-n[9]),v(t,"width",n[9]),v(t,"height",i=2*n[9]),$(t,"fill","green")},m(n,e){a(n,t,e)},p(n,l){288&l&&e!==(e=n[5]+n[8])&&v(t,"x",e),784&l&&r!==(r=n[4].height-n[8]-2*n[9]-n[9])&&v(t,"y",r),512&l&&v(t,"width",n[9]),512&l&&i!==(i=2*n[9])&&v(t,"height",i)},d(n){n&&f(t)}}}function sn(t){let e,r,i,l,o,c,h,u,s,p,g,w,y,k;function $(n,t){return n[4].isClosed?nn:Z}let C=$(t),_=C(t),S=t[10].h1&&tn(t),M=t[10].h2&&en(t),B=t[10].h3&&rn(t),E=t[10].h4&&ln(t),L=t[10].v1&&on(t),z=t[10].v2&&cn(t),A=t[10].v3&&hn(t),j=t[10].v4&&un(t);return{c(){e=m("g"),r=m("g"),_.c(),i=x(),S&&S.c(),l=x(),M&&M.c(),o=x(),B&&B.c(),c=x(),E&&E.c(),h=x(),L&&L.c(),u=x(),z&&z.c(),s=x(),A&&A.c(),p=x(),j&&j.c(),v(r,"transform",g=t[0]?"scale(-1, 1)":""),v(e,"transform",w="translate("+(t[0]?2*t[1]-5:t[1])+" "+t[2]+")")},m(n,f){a(n,e,f),d(e,r),_.m(r,null),d(r,i),S&&S.m(r,null),d(r,l),M&&M.m(r,null),d(r,o),B&&B.m(r,null),d(r,c),E&&E.m(r,null),d(r,h),L&&L.m(r,null),d(r,u),z&&z.m(r,null),d(r,s),A&&A.m(r,null),d(r,p),j&&j.m(r,null),t[12](e),y||(k=b(e,"click",t[11]),y=!0)},p(n,[t]){C===(C=$(n))&&_?_.p(n,t):(_.d(1),_=C(n),_&&(_.c(),_.m(r,i))),n[10].h1?S?S.p(n,t):(S=tn(n),S.c(),S.m(r,l)):S&&(S.d(1),S=null),n[10].h2?M?M.p(n,t):(M=en(n),M.c(),M.m(r,o)):M&&(M.d(1),M=null),n[10].h3?B?B.p(n,t):(B=rn(n),B.c(),B.m(r,c)):B&&(B.d(1),B=null),n[10].h4?E?E.p(n,t):(E=ln(n),E.c(),E.m(r,h)):E&&(E.d(1),E=null),n[10].v1?L?L.p(n,t):(L=on(n),L.c(),L.m(r,u)):L&&(L.d(1),L=null),n[10].v2?z?z.p(n,t):(z=cn(n),z.c(),z.m(r,s)):z&&(z.d(1),z=null),n[10].v3?A?A.p(n,t):(A=hn(n),A.c(),A.m(r,p)):A&&(A.d(1),A=null),n[10].v4?j?j.p(n,t):(j=un(n),j.c(),j.m(r,null)):j&&(j.d(1),j=null),1&t&&g!==(g=n[0]?"scale(-1, 1)":"")&&v(r,"transform",g),7&t&&w!==(w="translate("+(n[0]?2*n[1]-5:n[1])+" "+n[2]+")")&&v(e,"transform",w)},i:n,o:n,d(n){n&&f(e),_.d(),S&&S.d(),M&&M.d(),B&&B.d(),E&&E.d(),L&&L.d(),z&&z.d(),A&&A.d(),j&&j.d(),t[12](null),y=!1,k()}}}function dn(n,t,e){let r,i,l,o,c,h,s;u(n,Cn,(n=>e(4,r=n))),u(n,Sn,(n=>e(5,i=n))),u(n,_n,(n=>e(6,l=n))),u(n,Mn,(n=>e(7,o=n))),u(n,Bn,(n=>e(8,c=n))),u(n,$n,(n=>e(9,h=n))),u(n,En,(n=>e(10,s=n)));let d,{mirror:a=!1}=t,{x:f=0}=t,{y:p=0}=t;return n.$$set=n=>{"mirror"in n&&e(0,a=n.mirror),"x"in n&&e(1,f=n.x),"y"in n&&e(2,p=n.y)},[a,f,p,d,r,i,l,o,c,h,s,()=>Y(d,"SidePanel.svg"),function(n){B[n?"unshift":"push"]((()=>{d=n,e(3,d)}))}]}class an extends K{constructor(n){super(),J(this,n,dn,sn,o,{mirror:0,x:1,y:2})}}function fn(t){let e,r,i,l,o,c;return{c(){e=m("g"),r=m("path"),v(r,"d",i="M"+t[5]+",0 \r\n        l"+t[3]+",0\r\n        l0,"+(pn+t[5])+"\r\n\r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l0,"+(t[2]-2*(pn+3*t[5]))+"\r\n\r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l0,"+(pn+t[5])+"\r\n        l"+-t[3]+",0\r\n        l0,"+(-pn-t[5])+"\r\n\r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        l0,"+(-t[2]+2*(pn+3*t[5]))+"\r\n\r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        l0,"+(-pn-t[5])+"\r\n    "),$(r,"fill","white"),v(e,"transform",l="translate("+t[0]+" "+t[1]+")")},m(n,i){a(n,e,i),d(e,r),t[7](e),o||(c=b(e,"click",t[6]),o=!0)},p(n,[t]){44&t&&i!==(i="M"+n[5]+",0 \r\n        l"+n[3]+",0\r\n        l0,"+(pn+n[5])+"\r\n\r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l0,"+(n[2]-2*(pn+3*n[5]))+"\r\n\r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l0,"+(pn+n[5])+"\r\n        l"+-n[3]+",0\r\n        l0,"+(-pn-n[5])+"\r\n\r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        l0,"+(-n[2]+2*(pn+3*n[5]))+"\r\n\r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        l0,"+(-pn-n[5])+"\r\n    ")&&v(r,"d",i),3&t&&l!==(l="translate("+n[0]+" "+n[1]+")")&&v(e,"transform",l)},i:n,o:n,d(n){n&&f(e),t[7](null),o=!1,c()}}}let pn=7;function mn(n,t,e){let r,i;u(n,$n,(n=>e(5,r=n)));let{x:l=0}=t,{y:o=0}=t,{h:c=0}=t,{w:h=0}=t;return n.$$set=n=>{"x"in n&&e(0,l=n.x),"y"in n&&e(1,o=n.y),"h"in n&&e(2,c=n.h),"w"in n&&e(3,h=n.w)},[l,o,c,h,i,r,()=>Y(i,"Shelf.svg"),function(n){B[n?"unshift":"push"]((()=>{i=n,e(4,i)}))}]}class gn extends K{constructor(n){super(),J(this,n,mn,fn,o,{x:0,y:1,h:2,w:3})}}function wn(t){let e,r,i,l,o,c;return{c(){e=m("g"),r=m("path"),v(r,"d",i="M"+t[5]+",0 \r\n        l"+t[3]+",0\r\n        \r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l0,"+(t[2]-6*t[5]-t[6]-2*t[7])+"\r\n\r\n        l"+t[5]+",0\r\n        l0,"+2*t[5]+"\r\n        l"+-t[5]+",0\r\n\r\n        l"+-t[3]+",0\r\n        \r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        l0,"+(-t[2]+(6*t[5]+t[6]+2*t[7]))+"\r\n\r\n        l"+-t[5]+",0\r\n        l0,"+2*-t[5]+"\r\n        l"+t[5]+",0\r\n\r\n        \r\n    "),$(r,"fill","white"),v(e,"transform",l="translate("+t[0]+" "+t[1]+")")},m(n,i){a(n,e,i),d(e,r),t[9](e),o||(c=b(e,"click",t[8]),o=!0)},p(n,[t]){236&t&&i!==(i="M"+n[5]+",0 \r\n        l"+n[3]+",0\r\n        \r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l0,"+(n[2]-6*n[5]-n[6]-2*n[7])+"\r\n\r\n        l"+n[5]+",0\r\n        l0,"+2*n[5]+"\r\n        l"+-n[5]+",0\r\n\r\n        l"+-n[3]+",0\r\n        \r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        l0,"+(-n[2]+(6*n[5]+n[6]+2*n[7]))+"\r\n\r\n        l"+-n[5]+",0\r\n        l0,"+2*-n[5]+"\r\n        l"+n[5]+",0\r\n\r\n        \r\n    ")&&v(r,"d",i),3&t&&l!==(l="translate("+n[0]+" "+n[1]+")")&&v(e,"transform",l)},i:n,o:n,d(n){n&&f(e),t[9](null),o=!1,c()}}}function xn(n,t,e){let r,i,l,o;u(n,$n,(n=>e(5,r=n))),u(n,_n,(n=>e(6,i=n))),u(n,Bn,(n=>e(7,l=n)));let{x:c=0}=t,{y:h=0}=t,{w:s=0}=t,{h:d=0}=t;return n.$$set=n=>{"x"in n&&e(0,c=n.x),"y"in n&&e(1,h=n.y),"w"in n&&e(2,s=n.w),"h"in n&&e(3,d=n.h)},[c,h,s,d,o,r,i,l,()=>Y(o,"VerticalShelf.svg"),function(n){B[n?"unshift":"push"]((()=>{o=n,e(4,o)}))}]}class bn extends K{constructor(n){super(),J(this,n,xn,wn,o,{x:0,y:1,w:2,h:3})}}function vn(t){let e,r,i,l,o,c;return{c(){e=m("g"),r=m("path"),v(r,"d",i="M"+t[4]+",0 \r\n        l"+t[5].width+",0\r\n        l0,"+t[0]+"\r\n\r\n        l"+t[4]+",0\r\n        l0,"+2*t[4]+"\r\n        l"+-t[4]+",0\r\n\r\n        l0,"+t[0]+"\r\n        l"+-t[5].width+",0\r\n        l0,"+-t[0]+"\r\n\r\n        l"+-t[4]+",0\r\n        l0,"+2*-t[4]+"\r\n        l"+t[4]+",0\r\n\r\n        l0,"+-t[0]+"\r\n    "),$(r,"fill","white"),v(e,"transform",l="translate("+t[1]+" "+t[2]+")")},m(n,i){a(n,e,i),d(e,r),t[7](e),o||(c=b(e,"click",t[6]),o=!0)},p(n,[t]){49&t&&i!==(i="M"+n[4]+",0 \r\n        l"+n[5].width+",0\r\n        l0,"+n[0]+"\r\n\r\n        l"+n[4]+",0\r\n        l0,"+2*n[4]+"\r\n        l"+-n[4]+",0\r\n\r\n        l0,"+n[0]+"\r\n        l"+-n[5].width+",0\r\n        l0,"+-n[0]+"\r\n\r\n        l"+-n[4]+",0\r\n        l0,"+2*-n[4]+"\r\n        l"+n[4]+",0\r\n\r\n        l0,"+-n[0]+"\r\n    ")&&v(r,"d",i),6&t&&l!==(l="translate("+n[1]+" "+n[2]+")")&&v(e,"transform",l)},i:n,o:n,d(n){n&&f(e),t[7](null),o=!1,c()}}}function yn(n,t,e){let r,i,l;u(n,$n,(n=>e(4,r=n))),u(n,Cn,(n=>e(5,i=n)));let{randAbstand:o=7}=t,{x:c=0}=t,{y:h=0}=t;return n.$$set=n=>{"randAbstand"in n&&e(0,o=n.randAbstand),"x"in n&&e(1,c=n.x),"y"in n&&e(2,h=n.y)},[o,c,h,l,r,i,()=>Y(l,"Bar.svg"),function(n){B[n?"unshift":"push"]((()=>{l=n,e(3,l)}))}]}class kn extends K{constructor(n){super(),J(this,n,yn,vn,o,{randAbstand:0,x:1,y:2})}}const $n=X(9),Cn=X({width:100,height:150,depth:100,isClosed:!0}),_n=X(20),Sn=X(18),Mn=X(20),Bn=X(7),En=X({h1:!1,h2:!1,h3:!1,h4:!1,v1:!1,v2:!1,v3:!1,v4:!1});const Ln=function(){const{subscribe:n,set:t,update:e}=X({width:600,height:700});return{subscribe:n}}();const zn=function(){const{subscribe:n,set:t,update:e}=X([]);return{subscribe:n,set:t,update:e,addSides:()=>{t([{name:"s1",x:0,y:0,w:0,component:an},{name:"s2",x:0,y:0,component:an,props:{mirror:!0}}]),En.set({h1:!1,h2:!1,h3:!1,h4:!1,v1:!1,v2:!1,v3:!1,v4:!1})},addShelf:(n,t,r,i)=>{e((e=>[...e,{name:r,props:{w:n,h:t},component:i?bn:gn}]))},addBar:(n,t)=>{e((n=>[...n,{name:t,component:kn}]))},getDimensions:()=>{let n=h(zn);n.forEach((n=>{if(n.name){console.log("get "+n.name);var t=document.querySelector("#"+n.name);if(t){var e=t.getBoundingClientRect();!e||n.w===e.width&&n.h===e.height||(console.log("size of "+n.name+" is "+e.width+"/"+e.height),n.w=e.width,n.h=e.height)}}})),zn.set(n)},reposition:()=>{let n=0,t=0,e=0;let r=h(Ln),i=h(zn);i.forEach((i=>{i.w&&i.h&&(n+i.w+5>r.width&&(t+=e+5,n=0),i.x===n&&i.y===t||(i.x=n,i.y=t),console.log("move "+i.name+" to "+i.x+"/"+i.y),e=Math.max(e,i.h),n+=i.w+5)})),zn.set(i)}}}();function An(n,t,e){const r=n.slice();return r[35]=t[e],r}function jn(n){let e,r,i,l;const o=[{name:n[35].name},n[35].props,{x:n[35].x||0},{y:n[35].y||0}];var c=n[35].component;function h(n){let e={};for(let n=0;n<o.length;n+=1)e=t(e,o[n]);return{props:e}}return c&&(r=new c(h())),{c(){e=m("g"),r&&V(r.$$.fragment),v(e,"id",i=n[35].name),v(e,"class","svelte-1nzgpjz")},m(n,t){a(n,e,t),r&&q(r,e,null),l=!0},p(n,t){const u=16384&t[0]?function(n,t){const e={},r={},i={$$scope:1};let l=n.length;for(;l--;){const o=n[l],c=t[l];if(c){for(const n in o)n in c||(r[n]=1);for(const n in c)i[n]||(e[n]=c[n],i[n]=1);n[l]=c}else for(const n in o)i[n]=1}for(const n in r)n in e||(e[n]=void 0);return e}(o,[{name:n[35].name},(s=n[35].props,"object"==typeof s&&null!==s?s:{}),{x:n[35].x||0},{y:n[35].y||0}]):{};var s;if(c!==(c=n[35].component)){if(r){W();const n=r;P(n.$$.fragment,1,0,(()=>{G(n,1)})),U()}c?(r=new c(h()),V(r.$$.fragment),F(r.$$.fragment,1),q(r,e,null)):r=null}else c&&r.$set(u);(!l||16384&t[0]&&i!==(i=n[35].name))&&v(e,"id",i)},i(n){l||(r&&F(r.$$.fragment,n),l=!0)},o(n){r&&P(r.$$.fragment,n),l=!1},d(n){n&&f(e),r&&G(r)}}}function Dn(n){let t,e,r,l,o,c,h,u,s,x,C,_,S,M,B,E,L,z,A,j,D,O,T,H,N,R,V,q,G,I,J,K,Q,X,Y,Z,nn,tn,en,rn,ln,on,cn,hn,un,sn,dn,an,fn,pn,mn,gn,wn,xn,bn,vn,yn,kn,$n,Cn,_n,Sn,Mn,Bn,En,Ln,zn,Dn,On,Tn,Hn=n[14],Nn=[];for(let t=0;t<Hn.length;t+=1)Nn[t]=jn(An(n,Hn,t));const Rn=n=>P(Nn[n],1,1,(()=>{Nn[n]=null}));return{c(){t=p("div"),e=p("div"),r=p("h3"),r.innerHTML="<b>Box Dimensions (mm)</b>",l=w(),o=p("nobr"),c=g("Width "),h=p("input"),u=g("\n        Depth "),s=p("input"),C=w(),_=p("br"),S=g("\n        Height "),M=p("input"),B=g("\n        Cleat "),E=p("input"),L=w(),z=p("br"),A=g("\n        Material thickness "),j=p("input"),D=w(),O=p("div"),T=p("h3"),T.textContent="Shelves",H=w(),N=p("input"),R=g(" top\n        "),V=p("input"),q=g(" bottom\n        "),G=p("input"),I=g(" front\n        "),J=p("input"),K=g(" back\n        \n        "),Q=p("h3"),Q.textContent="Bars",X=w(),Y=p("input"),Z=g(" Back/top\n        "),nn=p("input"),tn=g(" Front/top\n        "),en=p("input"),rn=g(" Back/bottom\n        "),ln=p("input"),on=g(" Front/bottom\n        \n        "),cn=p("h3"),cn.textContent="Sides",hn=w(),un=p("input"),sn=g(" closed sides (mandatory with front or top shelves)"),dn=w(),an=p("div"),fn=p("h3"),fn.textContent="Workspace Dimensions (mm)",pn=g("\n        W "),mn=p("input"),gn=g("\n        L "),wn=p("input"),xn=w(),bn=p("div"),vn=p("h3"),vn.textContent="Download SVG",yn=w(),kn=p("button"),kn.textContent="Download Workspace",$n=w(),Cn=p("p"),Cn.innerHTML="<i>Click individual parts to download separate files</i>",_n=w(),Sn=p("div"),Sn.innerHTML='Open Source - <a href="https://github.com/lizzard77/cnc-french-cleat-box-designer/blob/master/LICENSE">MIT License</a>&gt;<br/> \n        <a href="https://github.com/lizzard77/cnc-french-cleat-box-designer">Visit project on GitHub</a>',Mn=w(),Bn=p("div"),En=m("svg");for(let n=0;n<Nn.length;n+=1)Nn[n].c();v(h,"type","number"),v(h,"min","0"),v(h,"max","500"),v(s,"type","number"),v(s,"min",x=2*n[10]+n[11]),v(s,"max","500"),v(M,"type","number"),v(M,"min","0"),v(M,"max","500"),v(E,"type","number"),v(E,"min","0"),v(E,"max","500"),v(j,"type","number"),v(j,"min","0"),v(j,"max","500"),v(N,"type","checkbox"),v(V,"type","checkbox"),v(G,"type","checkbox"),v(J,"type","checkbox"),v(Y,"type","checkbox"),v(nn,"type","checkbox"),v(en,"type","checkbox"),v(ln,"type","checkbox"),v(un,"type","checkbox"),v(mn,"type","number"),v(mn,"min","0"),v(mn,"max","1000"),v(wn,"type","number"),v(wn,"min","0"),v(wn,"max","1000"),$(Sn,"font-style","italic"),$(Sn,"font-size","smaller"),$(t,"display","flex"),$(t,"flex-direction","column"),$(t,"margin","1em"),v(En,"width",Ln=n[13].width),v(En,"height",zn=n[13].height),v(En,"fill-rule","evenodd"),$(En,"border","1px solid silver"),$(En,"fill","none"),$(En,"stroke","black"),$(En,"stroke-width","0.5px"),v(Bn,"id","workspaces"),v(Bn,"class","svelte-1nzgpjz")},m(i,f){a(i,t,f),d(t,e),d(e,r),d(e,l),d(e,o),d(o,c),d(o,h),k(h,n[8].width),d(o,u),d(o,s),k(s,n[8].depth),d(o,C),d(o,_),d(o,S),d(o,M),k(M,n[8].height),d(o,B),d(o,E),k(E,n[12]),d(o,L),d(o,z),d(o,A),d(o,j),k(j,n[11]),d(t,D),d(t,O),d(O,T),d(O,H),d(O,N),N.checked=n[0],d(O,R),d(O,V),V.checked=n[1],d(O,q),d(O,G),G.checked=n[2],d(O,I),d(O,J),J.checked=n[3],d(O,K),d(O,Q),d(O,X),d(O,Y),Y.checked=n[4],d(O,Z),d(O,nn),nn.checked=n[5],d(O,tn),d(O,en),en.checked=n[6],d(O,rn),d(O,ln),ln.checked=n[7],d(O,on),d(O,cn),d(O,hn),d(O,un),un.checked=n[8].isClosed,d(O,sn),d(t,dn),d(t,an),d(an,fn),d(an,pn),d(an,mn),k(mn,n[13].width),d(an,gn),d(an,wn),k(wn,n[13].height),d(t,xn),d(t,bn),d(bn,vn),d(bn,yn),d(bn,kn),d(bn,$n),d(bn,Cn),d(t,_n),d(t,Sn),a(i,Mn,f),a(i,Bn,f),d(Bn,En);for(let n=0;n<Nn.length;n+=1)Nn[n].m(En,null);n[34](En),Dn=!0,On||(Tn=[b(h,"input",n[16]),b(s,"input",n[17]),b(M,"input",n[18]),b(E,"input",n[19]),b(j,"input",n[20]),b(N,"change",n[21]),b(V,"change",n[22]),b(G,"change",n[23]),b(J,"change",n[24]),b(Y,"change",n[25]),b(nn,"change",n[26]),b(en,"change",n[27]),b(ln,"change",n[28]),b(un,"change",n[29]),b(mn,"input",n[30]),b(mn,"change",n[31]),b(wn,"input",n[32]),b(kn,"click",n[33])],On=!0)},p(n,t){if(256&t[0]&&y(h.value)!==n[8].width&&k(h,n[8].width),(!Dn||3072&t[0]&&x!==(x=2*n[10]+n[11]))&&v(s,"min",x),256&t[0]&&y(s.value)!==n[8].depth&&k(s,n[8].depth),256&t[0]&&y(M.value)!==n[8].height&&k(M,n[8].height),4096&t[0]&&y(E.value)!==n[12]&&k(E,n[12]),2048&t[0]&&y(j.value)!==n[11]&&k(j,n[11]),1&t[0]&&(N.checked=n[0]),2&t[0]&&(V.checked=n[1]),4&t[0]&&(G.checked=n[2]),8&t[0]&&(J.checked=n[3]),16&t[0]&&(Y.checked=n[4]),32&t[0]&&(nn.checked=n[5]),64&t[0]&&(en.checked=n[6]),128&t[0]&&(ln.checked=n[7]),256&t[0]&&(un.checked=n[8].isClosed),8192&t[0]&&y(mn.value)!==n[13].width&&k(mn,n[13].width),8192&t[0]&&y(wn.value)!==n[13].height&&k(wn,n[13].height),16384&t[0]){let e;for(Hn=n[14],e=0;e<Hn.length;e+=1){const r=An(n,Hn,e);Nn[e]?(Nn[e].p(r,t),F(Nn[e],1)):(Nn[e]=jn(r),Nn[e].c(),F(Nn[e],1),Nn[e].m(En,null))}for(W(),e=Hn.length;e<Nn.length;e+=1)Rn(e);U()}(!Dn||8192&t[0]&&Ln!==(Ln=n[13].width))&&v(En,"width",Ln),(!Dn||8192&t[0]&&zn!==(zn=n[13].height))&&v(En,"height",zn)},i(n){if(!Dn){for(let n=0;n<Hn.length;n+=1)F(Nn[n]);Dn=!0}},o(n){Nn=Nn.filter(Boolean);for(let n=0;n<Nn.length;n+=1)P(Nn[n]);Dn=!1},d(e){e&&f(t),e&&f(Mn),e&&f(Bn),function(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}(Nn,e),n[34](null),On=!1,i(Tn)}}}function On(n,t,e){let r,i,l,o,c,h,d,a;u(n,Cn,(n=>e(8,r=n))),u(n,En,(n=>e(15,i=n))),u(n,Bn,(n=>e(10,l=n))),u(n,$n,(n=>e(11,o=n))),u(n,Sn,(n=>e(12,c=n))),u(n,Ln,(n=>e(13,h=n))),u(n,zn,(n=>e(14,d=n)));let f=!0,p=!0,m=!0,g=!0,w=!1,x=!1,b=!1,v=!1;S((()=>{zn.getDimensions(),zn.reposition()}));return n.$$.update=()=>{33279&n.$$.dirty[0]&&(r.height<100&&(e(0,f=!1),e(2,m=!1),e(3,g=!1)),r.depth<100&&(e(0,f=!1),e(1,p=!1)),r.depth<50&&e(2,m=!1),zn.addSides(),f&&(s(En,i.h1=!0,i),s(En,i.h2=!0,i),zn.addShelf(r.depth,r.width,"top",!1)),p&&(s(En,i.h3=!0,i),s(En,i.h4=!0,i),zn.addShelf(r.width,r.depth,"bottom",!1)),m&&(s(En,i.v2=!0,i),s(En,i.v3=!0,i),zn.addShelf(r.height,r.width,"front",!0)),g&&(s(En,i.v1=!0,i),s(En,i.v4=!0,i),zn.addShelf(r.height,r.width,"back",!0)),w&&(s(En,i.v1=!0,i),zn.addBar(r.width,"tl")),x&&(s(En,i.v2=!0,i),zn.addBar(r.width,"tr")),b&&(s(En,i.v4=!0,i),zn.addBar(r.width,"br")),v&&(r.isClosed?s(En,i.v3=!0,i):s(En,i.h3=!0,i),zn.addBar(r.width,"bl")),s(Cn,r.isClosed=i.h2||i.v2||i.v3||r.isClosed,r),zn.getDimensions(),zn.reposition())},[f,p,m,g,w,x,b,v,r,a,l,o,c,h,d,i,function(){r.width=y(this.value),Cn.set(r)},function(){r.depth=y(this.value),Cn.set(r)},function(){r.height=y(this.value),Cn.set(r)},function(){c=y(this.value),Sn.set(c)},function(){o=y(this.value),$n.set(o)},function(){f=this.checked,e(0,f),e(8,r),e(1,p),e(2,m),e(3,g),e(4,w),e(5,x),e(6,b),e(7,v),e(15,i)},function(){p=this.checked,e(1,p),e(8,r),e(0,f),e(2,m),e(3,g),e(4,w),e(5,x),e(6,b),e(7,v),e(15,i)},function(){m=this.checked,e(2,m),e(8,r),e(0,f),e(1,p),e(3,g),e(4,w),e(5,x),e(6,b),e(7,v),e(15,i)},function(){g=this.checked,e(3,g),e(8,r),e(0,f),e(1,p),e(2,m),e(4,w),e(5,x),e(6,b),e(7,v),e(15,i)},function(){w=this.checked,e(4,w)},function(){x=this.checked,e(5,x)},function(){b=this.checked,e(6,b)},function(){v=this.checked,e(7,v)},function(){r.isClosed=this.checked,Cn.set(r)},function(){h.width=y(this.value),Ln.set(h)},n=>s(Ln,h={...h,width:n.target.value},h),function(){h.height=y(this.value),Ln.set(h)},n=>Y(a,"Workspace.svg"),function(n){B[n?"unshift":"push"]((()=>{a=n,e(9,a)}))}]}return new class extends K{constructor(n){super(),J(this,n,On,Dn,o,{},[-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
