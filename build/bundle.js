var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function r(){return Object.create(null)}function l(t){t.forEach(e)}function i(t){return"function"==typeof t}function o(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function h(t){let n;return c(t,(t=>n=t))(),n}function u(t,n,e){t.$$.on_destroy.push(c(n,e))}function s(t,n,e=n){return t.set(e),n}function d(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function x(){return g(" ")}function w(){return g("")}function b(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function k(t){return""===t?null:+t}function y(t,n){t.value=null==n?"":n}function $(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}let C;function O(t){C=t}function F(t){(function(){if(!C)throw new Error("Function called outside component initialization");return C})().$$.after_update.push(t)}const S=[],_=[],M=[],B=[],E=Promise.resolve();let L=!1;function z(t){M.push(t)}let A=!1;const D=new Set;function j(){if(!A){A=!0;do{for(let t=0;t<S.length;t+=1){const n=S[t];O(n),H(n.$$)}for(O(null),S.length=0;_.length;)_.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];D.has(n)||(D.add(n),n())}M.length=0}while(S.length);for(;B.length;)B.pop()();L=!1,A=!1,D.clear()}}function H(t){if(null!==t.fragment){t.update(),l(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}const T=new Set;let N;function R(){N={r:0,c:[],p:N}}function W(){N.r||l(N.c),N=N.p}function U(t,n){t&&t.i&&(T.delete(t),t.i(n))}function G(t,n,e,r){if(t&&t.o){if(T.has(t))return;T.add(t),N.c.push((()=>{T.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function P(t){t&&t.c()}function V(t,n,r){const{fragment:o,on_mount:c,on_destroy:h,after_update:u}=t.$$;o&&o.m(n,r),z((()=>{const n=c.map(e).filter(i);h?h.push(...n):l(n),t.$$.on_mount=[]})),u.forEach(z)}function q(t,n){const e=t.$$;null!==e.fragment&&(l(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function I(t,n){-1===t.$$.dirty[0]&&(S.push(t),L||(L=!0,E.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function J(n,e,i,o,c,h,u=[-1]){const s=C;O(n);const d=e.props||{},a=n.$$={fragment:null,ctx:null,props:h,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:r(),dirty:u,skip_bound:!1};let p=!1;if(a.ctx=i?i(n,d,((t,e,...r)=>{const l=r.length?r[0]:e;return a.ctx&&c(a.ctx[t],a.ctx[t]=l)&&(!a.skip_bound&&a.bound[t]&&a.bound[t](l),p&&I(n,t)),e})):[],a.update(),p=!0,l(a.before_update),a.fragment=!!o&&o(a.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);a.fragment&&a.fragment.l(t),t.forEach(f)}else a.fragment&&a.fragment.c();e.intro&&U(n.$$.fragment),V(n,e.target,e.anchor),j()}O(s)}class K{$destroy(){q(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q=[];function X(n,e=t){let r;const l=[];function i(t){if(o(n,t)&&(n=t,r)){const t=!Q.length;for(let t=0;t<l.length;t+=1){const e=l[t];e[1](),Q.push(e,n)}if(t){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(o,c=t){const h=[o,c];return l.push(h),1===l.length&&(r=e(i)||t),o(n),()=>{const t=l.indexOf(h);-1!==t&&l.splice(t,1),0===l.length&&(r(),r=null)}}}}function Y(t,n="download.svg"){t.setAttribute("xmlns","http://www.w3.org/2000/svg");var e=t.outerHTML,r='<?xml version="1.0" standalone="no"?>\r\n',l="";"svg"!==t.tagName&&(r+='<svg fill-rule="evenodd" style="border: 1px solid silver; fill:none;stroke:black;stroke-width:0.5px;">',l="</svg>");var i=new Blob([r,e,l],{type:"image/svg+xml;charset=utf-8"}),o=URL.createObjectURL(i),c=document.createElement("a");c.download=n,c.href=o,c.download=n,c.setAttribute("download",n),document.body.appendChild(c),c.click(),setTimeout((function(){window.URL.revokeObjectURL(o)}),100)}function Z(t){let n,e;return{c(){n=m("path"),v(n,"d",e="M"+t[11]+",0 \r\n            l"+t[6]+",0 \r\n            l"+(2*t[15]+t[16]-t[13])+",0 \r\n            a"+t[13]+","+t[13]+" 0 0 1 "+t[13]+","+t[13]+" \r\n            l0,"+(t[12].height-t[13]-2*t[15]-t[16])+" \r\n            l"+(t[12].depth-2*t[15]-t[16])+",0 \r\n            l0,"+(2*t[15]+t[16])+"\r\n            l"+-t[12].depth+",0\r\n            "+t[9]+"\r\n            l0,-"+(t[12].height-t[14]-t[7]-8)+" \r\n            l 2 -2\r\n            a 3 3 0 0 0 -7 -5\r\n            l -2 2\r\n            l-"+(t[6]-7)+","+(t[6]-5)+" \r\n            l0,-"+(t[6]+t[14])),$(n,"fill",t[5]),$(n,"stroke-width","1px"),$(n,"stroke-color",t[4])},m(t,e){a(t,n,e)},p(t,r){129728&r&&e!==(e="M"+t[11]+",0 \r\n            l"+t[6]+",0 \r\n            l"+(2*t[15]+t[16]-t[13])+",0 \r\n            a"+t[13]+","+t[13]+" 0 0 1 "+t[13]+","+t[13]+" \r\n            l0,"+(t[12].height-t[13]-2*t[15]-t[16])+" \r\n            l"+(t[12].depth-2*t[15]-t[16])+",0 \r\n            l0,"+(2*t[15]+t[16])+"\r\n            l"+-t[12].depth+",0\r\n            "+t[9]+"\r\n            l0,-"+(t[12].height-t[14]-t[7]-8)+" \r\n            l 2 -2\r\n            a 3 3 0 0 0 -7 -5\r\n            l -2 2\r\n            l-"+(t[6]-7)+","+(t[6]-5)+" \r\n            l0,-"+(t[6]+t[14]))&&v(n,"d",e),32&r&&$(n,"fill",t[5]),16&r&&$(n,"stroke-color",t[4])},d(t){t&&f(n)}}}function tt(t){let n,e;return{c(){n=m("path"),v(n,"d",e="M"+t[11]+",0  \r\n            l"+t[6]+",0 \r\n            l"+(t[12].depth-t[13])+",0 \r\n            a"+t[13]+","+t[13]+" 0 0 1 "+t[13]+","+t[13]+" \r\n            l0,"+(t[12].height-t[13])+" \r\n            l-"+t[12].depth+",0 \r\n            "+t[9]+"\r\n            l0,-"+(t[12].height-t[14]-t[7]-8)+" \r\n            l 2 -2\r\n            a "+t[8]/2+" "+t[8]/2+" 0 0 0 -"+t[8]+" -"+t[8]/2+"\r\n            l -2 2\r\n            l-"+(t[6]-t[8])+","+(t[6]-t[8])+" \r\n            l0,-"+(t[6]+t[14]-2-t[8]/2)),$(n,"fill",t[5]),$(n,"stroke-width","1px"),$(n,"stroke-color",t[4])},m(t,e){a(t,n,e)},p(t,r){31680&r&&e!==(e="M"+t[11]+",0  \r\n            l"+t[6]+",0 \r\n            l"+(t[12].depth-t[13])+",0 \r\n            a"+t[13]+","+t[13]+" 0 0 1 "+t[13]+","+t[13]+" \r\n            l0,"+(t[12].height-t[13])+" \r\n            l-"+t[12].depth+",0 \r\n            "+t[9]+"\r\n            l0,-"+(t[12].height-t[14]-t[7]-8)+" \r\n            l 2 -2\r\n            a "+t[8]/2+" "+t[8]/2+" 0 0 0 -"+t[8]+" -"+t[8]/2+"\r\n            l -2 2\r\n            l-"+(t[6]-t[8])+","+(t[6]-t[8])+" \r\n            l0,-"+(t[6]+t[14]-2-t[8]/2))&&v(n,"d",e),32&r&&$(n,"fill",t[5]),16&r&&$(n,"stroke-color",t[4])},d(t){t&&f(n)}}}function nt(t){let n,e,r,l;return{c(){n=m("rect"),v(n,"x",e=t[11]+t[6]+t[15]+t[16]),v(n,"y",r=t[14]+t[15]-2),v(n,"width",l=2*t[16]),v(n,"height",t[16]),$(n,"fill",t[3]),$(n,"stroke-width","0")},m(t,e){a(t,n,e)},p(t,i){100416&i&&e!==(e=t[11]+t[6]+t[15]+t[16])&&v(n,"x",e),49152&i&&r!==(r=t[14]+t[15]-2)&&v(n,"y",r),65536&i&&l!==(l=2*t[16])&&v(n,"width",l),65536&i&&v(n,"height",t[16]),8&i&&$(n,"fill",t[3])},d(t){t&&f(n)}}}function et(t){let n,e,r,l;return{c(){n=m("rect"),v(n,"x",e=t[11]+t[6]+t[12].depth-t[15]-3*t[16]),v(n,"y",r=t[14]+t[15]-2),v(n,"width",l=2*t[16]),v(n,"height",t[16]),$(n,"fill",t[3]),$(n,"stroke-width","0")},m(t,e){a(t,n,e)},p(t,i){104512&i&&e!==(e=t[11]+t[6]+t[12].depth-t[15]-3*t[16])&&v(n,"x",e),49152&i&&r!==(r=t[14]+t[15]-2)&&v(n,"y",r),65536&i&&l!==(l=2*t[16])&&v(n,"width",l),65536&i&&v(n,"height",t[16]),8&i&&$(n,"fill",t[3])},d(t){t&&f(n)}}}function rt(t){let n,e,r,l;return{c(){n=m("rect"),v(n,"x",e=t[11]+t[6]+t[12].depth-t[15]-3*t[16]),v(n,"y",r=t[12].height-t[15]-t[16]),v(n,"width",l=2*t[16]),v(n,"height",t[16]),$(n,"fill",t[3]),$(n,"stroke-width","0")},m(t,e){a(t,n,e)},p(t,i){104512&i&&e!==(e=t[11]+t[6]+t[12].depth-t[15]-3*t[16])&&v(n,"x",e),102400&i&&r!==(r=t[12].height-t[15]-t[16])&&v(n,"y",r),65536&i&&l!==(l=2*t[16])&&v(n,"width",l),65536&i&&v(n,"height",t[16]),8&i&&$(n,"fill",t[3])},d(t){t&&f(n)}}}function lt(t){let n,e,r,l;return{c(){n=m("rect"),v(n,"x",e=t[11]+t[6]+t[15]+t[16]),v(n,"y",r=t[12].height-t[15]-t[16]),v(n,"width",l=2*t[16]),v(n,"height",t[16]),$(n,"fill",t[3]),$(n,"stroke-width","0")},m(t,e){a(t,n,e)},p(t,i){100416&i&&e!==(e=t[11]+t[6]+t[15]+t[16])&&v(n,"x",e),102400&i&&r!==(r=t[12].height-t[15]-t[16])&&v(n,"y",r),65536&i&&l!==(l=2*t[16])&&v(n,"width",l),65536&i&&v(n,"height",t[16]),8&i&&$(n,"fill",t[3])},d(t){t&&f(n)}}}function it(t){let n,e,r,l;return{c(){n=m("rect"),v(n,"x",e=t[11]+t[6]+t[15]),v(n,"y",r=t[14]+t[15]+t[16]-2),v(n,"width",t[16]),v(n,"height",l=2*t[16]),$(n,"fill",t[3]),$(n,"stroke-width","0")},m(t,e){a(t,n,e)},p(t,i){34880&i&&e!==(e=t[11]+t[6]+t[15])&&v(n,"x",e),114688&i&&r!==(r=t[14]+t[15]+t[16]-2)&&v(n,"y",r),65536&i&&v(n,"width",t[16]),65536&i&&l!==(l=2*t[16])&&v(n,"height",l),8&i&&$(n,"fill",t[3])},d(t){t&&f(n)}}}function ot(t){let n,e,r,l;return{c(){n=m("rect"),v(n,"x",e=t[11]+t[6]+t[12].depth-t[16]-t[15]),v(n,"y",r=t[14]+t[15]+t[16]-2),v(n,"width",t[16]),v(n,"height",l=2*t[16]),$(n,"fill",t[3]),$(n,"stroke-width","0")},m(t,e){a(t,n,e)},p(t,i){104512&i&&e!==(e=t[11]+t[6]+t[12].depth-t[16]-t[15])&&v(n,"x",e),114688&i&&r!==(r=t[14]+t[15]+t[16]-2)&&v(n,"y",r),65536&i&&v(n,"width",t[16]),65536&i&&l!==(l=2*t[16])&&v(n,"height",l),8&i&&$(n,"fill",t[3])},d(t){t&&f(n)}}}function ct(t){let n,e,r,l;return{c(){n=m("rect"),v(n,"x",e=t[11]+t[6]+t[12].depth-t[16]-t[15]),v(n,"y",r=t[12].height-t[15]-3*t[16]),v(n,"width",t[16]),v(n,"height",l=2*t[16]),$(n,"fill",t[3]),$(n,"stroke-width","0")},m(t,e){a(t,n,e)},p(t,i){104512&i&&e!==(e=t[11]+t[6]+t[12].depth-t[16]-t[15])&&v(n,"x",e),102400&i&&r!==(r=t[12].height-t[15]-3*t[16])&&v(n,"y",r),65536&i&&v(n,"width",t[16]),65536&i&&l!==(l=2*t[16])&&v(n,"height",l),8&i&&$(n,"fill",t[3])},d(t){t&&f(n)}}}function ht(t){let n,e,r,l;return{c(){n=m("rect"),v(n,"x",e=t[11]+t[6]+t[15]),v(n,"y",r=t[12].height-t[15]-2*t[16]-t[16]),v(n,"width",t[16]),v(n,"height",l=2*t[16]),$(n,"fill",t[3]),$(n,"stroke-width","0")},m(t,e){a(t,n,e)},p(t,i){34880&i&&e!==(e=t[11]+t[6]+t[15])&&v(n,"x",e),102400&i&&r!==(r=t[12].height-t[15]-2*t[16]-t[16])&&v(n,"y",r),65536&i&&v(n,"width",t[16]),65536&i&&l!==(l=2*t[16])&&v(n,"height",l),8&i&&$(n,"fill",t[3])},d(t){t&&f(n)}}}function ut(n){let e,r,l,i,o,c,h,u,s,p,g,x,k,y;function $(t,n){return t[12].isClosed?tt:Z}let C=$(n),O=C(n),F=n[17].h1&&nt(n),S=n[17].h2&&et(n),_=n[17].h3&&rt(n),M=n[17].h4&&lt(n),B=n[17].v1&&it(n),E=n[17].v2&&ot(n),L=n[17].v3&&ct(n),z=n[17].v4&&ht(n);return{c(){e=m("g"),r=m("g"),O.c(),l=w(),F&&F.c(),i=w(),S&&S.c(),o=w(),_&&_.c(),c=w(),M&&M.c(),h=w(),B&&B.c(),u=w(),E&&E.c(),s=w(),L&&L.c(),p=w(),z&&z.c(),v(r,"transform",g=n[0]?"scale(-1, 1)":""),v(e,"transform",x="translate("+(n[0]?2*n[1]-5:n[1])+" "+n[2]+")")},m(t,f){a(t,e,f),d(e,r),O.m(r,null),d(r,l),F&&F.m(r,null),d(r,i),S&&S.m(r,null),d(r,o),_&&_.m(r,null),d(r,c),M&&M.m(r,null),d(r,h),B&&B.m(r,null),d(r,u),E&&E.m(r,null),d(r,s),L&&L.m(r,null),d(r,p),z&&z.m(r,null),n[20](e),k||(y=b(e,"click",n[19]),k=!0)},p(t,[n]){C===(C=$(t))&&O?O.p(t,n):(O.d(1),O=C(t),O&&(O.c(),O.m(r,l))),t[17].h1?F?F.p(t,n):(F=nt(t),F.c(),F.m(r,i)):F&&(F.d(1),F=null),t[17].h2?S?S.p(t,n):(S=et(t),S.c(),S.m(r,o)):S&&(S.d(1),S=null),t[17].h3?_?_.p(t,n):(_=rt(t),_.c(),_.m(r,c)):_&&(_.d(1),_=null),t[17].h4?M?M.p(t,n):(M=lt(t),M.c(),M.m(r,h)):M&&(M.d(1),M=null),t[17].v1?B?B.p(t,n):(B=it(t),B.c(),B.m(r,u)):B&&(B.d(1),B=null),t[17].v2?E?E.p(t,n):(E=ot(t),E.c(),E.m(r,s)):E&&(E.d(1),E=null),t[17].v3?L?L.p(t,n):(L=ct(t),L.c(),L.m(r,p)):L&&(L.d(1),L=null),t[17].v4?z?z.p(t,n):(z=ht(t),z.c(),z.m(r,null)):z&&(z.d(1),z=null),1&n&&g!==(g=t[0]?"scale(-1, 1)":"")&&v(r,"transform",g),7&n&&x!==(x="translate("+(t[0]?2*t[1]-5:t[1])+" "+t[2]+")")&&v(e,"transform",x)},i:t,o:t,d(t){t&&f(e),O.d(),F&&F.d(),S&&S.d(),_&&_.d(),M&&M.d(),B&&B.d(),E&&E.d(),L&&L.d(),z&&z.d(),n[20](null),k=!1,y()}}}function st(t,n,e){let r,l,i,o,c,h,s,d,a,f;u(t,_t,(t=>e(18,r=t))),u(t,Ct,(t=>e(6,l=t))),u(t,St,(t=>e(7,i=t))),u(t,Bt,(t=>e(8,o=t))),u(t,yt,(t=>e(12,c=t))),u(t,$t,(t=>e(13,h=t))),u(t,Ot,(t=>e(14,s=t))),u(t,Ft,(t=>e(15,d=t))),u(t,kt,(t=>e(16,a=t))),u(t,Et,(t=>e(17,f=t)));let p,{mirror:m=!1}=n,{x:g=0}=n,{y:x=0}=n,w="",{pocketColor:b="#7F7F7F"}=n,{extCutOutline:v="#000000"}=n,{extCutFill:k="#000000"}=n,y=Math.max(0,r-l);return t.$$set=t=>{"mirror"in t&&e(0,m=t.mirror),"x"in t&&e(1,g=t.x),"y"in t&&e(2,x=t.y),"pocketColor"in t&&e(3,b=t.pocketColor),"extCutOutline"in t&&e(4,v=t.extCutOutline),"extCutFill"in t&&e(5,k=t.extCutFill)},t.$$.update=()=>{262592&t.$$.dirty&&(i&&r?(e(9,w=`l -${r},0 l 0,-${i} l ${r-o},0 a ${o/2} ${o/2} 0 0 0 ${o} 0`),e(11,y=Math.max(0,r-l))):(e(9,w=""),e(11,y=0)))},[m,g,x,b,v,k,l,i,o,w,p,y,c,h,s,d,a,f,r,()=>Y(p,"SidePanel.svg"),function(t){_[t?"unshift":"push"]((()=>{p=t,e(10,p)}))}]}class dt extends K{constructor(t){super(),J(this,t,st,ut,o,{mirror:0,x:1,y:2,pocketColor:3,extCutOutline:4,extCutFill:5})}}function at(n){let e,r,l,i,o,c;return{c(){e=m("g"),r=m("path"),v(r,"d",l="\r\n        m"+n[7]+",0\r\n        l"+n[2]+",0\r\n\r\n        l0,"+n[6]+" \r\n\r\n        a "+n[8]/2+" "+n[8]/2+" 0 0 0 0 "+n[8]+"\r\n        l"+n[7]+",0\r\n        l0,"+n[5]+"\r\n        l"+-n[7]+",0\r\n        a "+n[8]/2+" "+n[8]/2+" 0 0 0 0 "+n[8]+"\r\n\r\n        l0,"+n[10]+"\r\n\r\n        a "+n[8]/2+" "+n[8]/2+" 0 0 0 0 "+n[8]+"\r\n        l"+n[7]+",0\r\n        l0,"+n[5]+"\r\n        l"+-n[7]+",0\r\n        a "+n[8]/2+" "+n[8]/2+" 0 0 0 0 "+n[8]+"\r\n\r\n        l0,"+n[6]+"        \r\n        l"+-n[2]+",0\r\n        l0,"+-n[6]+"\r\n\r\n        a "+n[8]/2+" "+n[8]/2+" 0 0 0 0 "+-n[8]+"\r\n        l"+-n[7]+",0\r\n        l0,"+-n[5]+"\r\n        l"+n[7]+",0\r\n        a "+n[8]/2+" "+n[8]/2+" 0 0 0 0 "+-n[8]+"\r\n\r\n        l0,"+-n[10]+"\r\n\r\n        a "+n[8]/2+" "+n[8]/2+" 0 0 0 0 "+-n[8]+"\r\n        l"+-n[7]+",0\r\n        l0,"+-n[5]+"\r\n        l"+n[7]+",0\r\n        a "+n[8]/2+" "+n[8]/2+" 0 0 0 0 "+-n[8]+"\r\n\r\n        l0,"+-n[6]+"\r\n    "),$(r,"fill",n[4]),$(r,"stroke-width","1px"),$(r,"stroke-color",n[3]),v(e,"transform",i="translate("+n[0]+" "+n[1]+")")},m(t,l){a(t,e,l),d(e,r),n[14](e),o||(c=b(e,"click",n[13]),o=!0)},p(t,[n]){1508&n&&l!==(l="\r\n        m"+t[7]+",0\r\n        l"+t[2]+",0\r\n\r\n        l0,"+t[6]+" \r\n\r\n        a "+t[8]/2+" "+t[8]/2+" 0 0 0 0 "+t[8]+"\r\n        l"+t[7]+",0\r\n        l0,"+t[5]+"\r\n        l"+-t[7]+",0\r\n        a "+t[8]/2+" "+t[8]/2+" 0 0 0 0 "+t[8]+"\r\n\r\n        l0,"+t[10]+"\r\n\r\n        a "+t[8]/2+" "+t[8]/2+" 0 0 0 0 "+t[8]+"\r\n        l"+t[7]+",0\r\n        l0,"+t[5]+"\r\n        l"+-t[7]+",0\r\n        a "+t[8]/2+" "+t[8]/2+" 0 0 0 0 "+t[8]+"\r\n\r\n        l0,"+t[6]+"        \r\n        l"+-t[2]+",0\r\n        l0,"+-t[6]+"\r\n\r\n        a "+t[8]/2+" "+t[8]/2+" 0 0 0 0 "+-t[8]+"\r\n        l"+-t[7]+",0\r\n        l0,"+-t[5]+"\r\n        l"+t[7]+",0\r\n        a "+t[8]/2+" "+t[8]/2+" 0 0 0 0 "+-t[8]+"\r\n\r\n        l0,"+-t[10]+"\r\n\r\n        a "+t[8]/2+" "+t[8]/2+" 0 0 0 0 "+-t[8]+"\r\n        l"+-t[7]+",0\r\n        l0,"+-t[5]+"\r\n        l"+t[7]+",0\r\n        a "+t[8]/2+" "+t[8]/2+" 0 0 0 0 "+-t[8]+"\r\n\r\n        l0,"+-t[6]+"\r\n    ")&&v(r,"d",l),16&n&&$(r,"fill",t[4]),8&n&&$(r,"stroke-color",t[3]),3&n&&i!==(i="translate("+t[0]+" "+t[1]+")")&&v(e,"transform",i)},i:t,o:t,d(t){t&&f(e),n[14](null),o=!1,c()}}}function ft(t,n,e){let r,l,i,o;u(t,kt,(t=>e(7,r=t))),u(t,Ft,(t=>e(12,l=t))),u(t,Bt,(t=>e(8,i=t)));let{x:c=0}=n,{y:h=0}=n,{h:s=0}=n,{w:d=0}=n,{extCutOutline:a="#000000"}=n,{extCutFill:f="#000000"}=n,p=2*r,m=l+r-i,g=s-2*m-2*p-4*i;return t.$$set=t=>{"x"in t&&e(0,c=t.x),"y"in t&&e(1,h=t.y),"h"in t&&e(11,s=t.h),"w"in t&&e(2,d=t.w),"extCutOutline"in t&&e(3,a=t.extCutOutline),"extCutFill"in t&&e(4,f=t.extCutFill)},t.$$.update=()=>{6624&t.$$.dirty&&(e(5,p=2*r),e(6,m=l+r-i),e(10,g=s-2*m-2*p-4*i))},[c,h,d,a,f,p,m,r,i,o,g,s,l,()=>Y(o,"Shelf.svg"),function(t){_[t?"unshift":"push"]((()=>{o=t,e(9,o)}))}]}class pt extends K{constructor(t){super(),J(this,t,ft,at,o,{x:0,y:1,h:11,w:2,extCutOutline:3,extCutFill:4})}}function mt(n){let e,r,l,i,o,c;return{c(){e=m("g"),r=m("path"),v(r,"d",l="\r\n        M"+n[6]+",0 \r\n        l"+n[2]+",0\r\n        \r\n        l"+n[6]+",0\r\n        l0,"+n[5]+"\r\n        l"+-n[6]+",0\r\n        a "+n[7]/2+" "+n[7]/2+" 0 0 0 0 "+n[7]+"\r\n\r\n        l0,"+n[9]+"\r\n\r\n        a "+n[7]/2+" "+n[7]/2+" 0 0 0 0 "+n[7]+"\r\n        l"+n[6]+",0\r\n        l0,"+n[5]+"\r\n        l"+-n[6]+",0\r\n        \r\n        l"+-n[2]+",0\r\n        \r\n        l"+-n[6]+",0\r\n        l0,"+-n[5]+"\r\n        l"+n[6]+",0\r\n        a "+n[7]/2+" "+n[7]/2+" 0 0 0 0 "+-n[7]+"\r\n\r\n        l0,"+-n[9]+"\r\n\r\n        a "+n[7]/2+" "+n[7]/2+" 0 0 0 0 "+-n[7]+"\r\n        l"+-n[6]+",0\r\n        l0,"+-n[5]+"\r\n        l"+n[6]+",0\r\n        \r\n        \r\n    "),$(r,"fill",n[4]),$(r,"stroke-width","1px"),$(r,"stroke-color",n[3]),v(e,"transform",i="translate("+n[0]+" "+n[1]+")")},m(t,l){a(t,e,l),d(e,r),n[12](e),o||(c=b(e,"click",n[11]),o=!0)},p(t,[n]){740&n&&l!==(l="\r\n        M"+t[6]+",0 \r\n        l"+t[2]+",0\r\n        \r\n        l"+t[6]+",0\r\n        l0,"+t[5]+"\r\n        l"+-t[6]+",0\r\n        a "+t[7]/2+" "+t[7]/2+" 0 0 0 0 "+t[7]+"\r\n\r\n        l0,"+t[9]+"\r\n\r\n        a "+t[7]/2+" "+t[7]/2+" 0 0 0 0 "+t[7]+"\r\n        l"+t[6]+",0\r\n        l0,"+t[5]+"\r\n        l"+-t[6]+",0\r\n        \r\n        l"+-t[2]+",0\r\n        \r\n        l"+-t[6]+",0\r\n        l0,"+-t[5]+"\r\n        l"+t[6]+",0\r\n        a "+t[7]/2+" "+t[7]/2+" 0 0 0 0 "+-t[7]+"\r\n\r\n        l0,"+-t[9]+"\r\n\r\n        a "+t[7]/2+" "+t[7]/2+" 0 0 0 0 "+-t[7]+"\r\n        l"+-t[6]+",0\r\n        l0,"+-t[5]+"\r\n        l"+t[6]+",0\r\n        \r\n        \r\n    ")&&v(r,"d",l),16&n&&$(r,"fill",t[4]),8&n&&$(r,"stroke-color",t[3]),3&n&&i!==(i="translate("+t[0]+" "+t[1]+")")&&v(e,"transform",i)},i:t,o:t,d(t){t&&f(e),n[12](null),o=!1,c()}}}function gt(t,n,e){let r,l,i;u(t,kt,(t=>e(6,r=t))),u(t,Bt,(t=>e(7,l=t)));let{x:o=0}=n,{y:c=0}=n,{w:h=0}=n,{h:s=0}=n,{extCutOutline:d="#000000"}=n,{extCutFill:a="#000000"}=n,f=2*r,p=s-2*f-2*l;return t.$$set=t=>{"x"in t&&e(0,o=t.x),"y"in t&&e(1,c=t.y),"w"in t&&e(10,h=t.w),"h"in t&&e(2,s=t.h),"extCutOutline"in t&&e(3,d=t.extCutOutline),"extCutFill"in t&&e(4,a=t.extCutFill)},t.$$.update=()=>{228&t.$$.dirty&&(e(5,f=2*r),e(9,p=s-2*f-2*l))},[o,c,s,d,a,f,r,l,i,p,h,()=>Y(i,"VerticalShelf.svg"),function(t){_[t?"unshift":"push"]((()=>{i=t,e(8,i)}))}]}class xt extends K{constructor(t){super(),J(this,t,gt,mt,o,{x:0,y:1,w:10,h:2,extCutOutline:3,extCutFill:4})}}function wt(n){let e,r,l,i,o,c;return{c(){e=m("g"),r=m("path"),v(r,"d",l="M"+n[6]+",0 \r\n        l"+n[7].width+",0\r\n        l0,"+n[0]+"\r\n\r\n        a "+n[8]/2+" "+n[8]/2+" 0 0 0 0 "+n[8]+"\r\n        l"+n[6]+",0\r\n        l0,"+2*n[6]+"\r\n        l"+-n[6]+",0\r\n        a "+n[8]/2+" "+n[8]/2+" 0 0 0 0 "+n[8]+"\r\n\r\n        l0,"+n[0]+"\r\n        l"+-n[7].width+",0\r\n        l0,"+-n[0]+"\r\n\r\n        a "+n[8]/2+" "+n[8]/2+" 0 0 0 0 "+-n[8]+"\r\n        l"+-n[6]+",0\r\n        l0,"+2*-n[6]+"\r\n        l"+n[6]+",0\r\n        a "+n[8]/2+" "+n[8]/2+" 0 0 0 0 "+-n[8]+"\r\n\r\n        l0,"+-n[0]+"\r\n    "),$(r,"fill",n[4]),$(r,"stroke-width","1px"),$(r,"stroke-color",n[3]),v(e,"transform",i="translate("+n[1]+" "+n[2]+")")},m(t,l){a(t,e,l),d(e,r),n[10](e),o||(c=b(e,"click",n[9]),o=!0)},p(t,[n]){449&n&&l!==(l="M"+t[6]+",0 \r\n        l"+t[7].width+",0\r\n        l0,"+t[0]+"\r\n\r\n        a "+t[8]/2+" "+t[8]/2+" 0 0 0 0 "+t[8]+"\r\n        l"+t[6]+",0\r\n        l0,"+2*t[6]+"\r\n        l"+-t[6]+",0\r\n        a "+t[8]/2+" "+t[8]/2+" 0 0 0 0 "+t[8]+"\r\n\r\n        l0,"+t[0]+"\r\n        l"+-t[7].width+",0\r\n        l0,"+-t[0]+"\r\n\r\n        a "+t[8]/2+" "+t[8]/2+" 0 0 0 0 "+-t[8]+"\r\n        l"+-t[6]+",0\r\n        l0,"+2*-t[6]+"\r\n        l"+t[6]+",0\r\n        a "+t[8]/2+" "+t[8]/2+" 0 0 0 0 "+-t[8]+"\r\n\r\n        l0,"+-t[0]+"\r\n    ")&&v(r,"d",l),16&n&&$(r,"fill",t[4]),8&n&&$(r,"stroke-color",t[3]),6&n&&i!==(i="translate("+t[1]+" "+t[2]+")")&&v(e,"transform",i)},i:t,o:t,d(t){t&&f(e),n[10](null),o=!1,c()}}}function bt(t,n,e){let r,l,i,o;u(t,kt,(t=>e(6,r=t))),u(t,yt,(t=>e(7,l=t))),u(t,Bt,(t=>e(8,i=t)));let{randAbstand:c=7}=n,{x:h=0}=n,{y:s=0}=n,{extCutOutline:d="#000000"}=n,{extCutFill:a="#000000"}=n;return t.$$set=t=>{"randAbstand"in t&&e(0,c=t.randAbstand),"x"in t&&e(1,h=t.x),"y"in t&&e(2,s=t.y),"extCutOutline"in t&&e(3,d=t.extCutOutline),"extCutFill"in t&&e(4,a=t.extCutFill)},[c,h,s,d,a,o,r,l,i,()=>Y(o,"Bar.svg"),function(t){_[t?"unshift":"push"]((()=>{o=t,e(5,o)}))}]}class vt extends K{constructor(t){super(),J(this,t,bt,wt,o,{randAbstand:0,x:1,y:2,extCutOutline:3,extCutFill:4})}}const kt=X(9),yt=X({width:100,height:150,depth:100,isClosed:!0}),$t=X(20),Ct=X(18),Ot=X(20),Ft=X(7),St=X(20),_t=X(18),Mt=X(5),Bt=X(6),Et=X({h1:!1,h2:!1,h3:!1,h4:!1,v1:!1,v2:!1,v3:!1,v4:!1});const Lt=function(){const{subscribe:t,set:n,update:e}=X({width:600,height:700});return{subscribe:t}}();const zt=function(){const{subscribe:t,set:n,update:e}=X([]);return{subscribe:t,set:n,update:e,addSides:()=>{n([{name:"s1",x:0,y:0,w:0,component:dt},{name:"s2",x:0,y:0,component:dt,props:{mirror:!0}}]),Et.set({h1:!1,h2:!1,h3:!1,h4:!1,v1:!1,v2:!1,v3:!1,v4:!1})},addShelf:(t,n,r,l)=>{e((e=>[...e,{name:r,props:{w:t,h:n},component:l?xt:pt}]))},addBar:(t,n)=>{e((t=>[...t,{name:n,component:vt}]))},getDimensions:()=>{let t=h(zt);t.forEach((t=>{if(t.name){console.log("get "+t.name);var n=document.querySelector("#"+t.name);if(n){var e=n.getBoundingClientRect();!e||t.w===e.width&&t.h===e.height||(console.log("size of "+t.name+" is "+e.width+"/"+e.height),t.w=e.width,t.h=e.height)}}})),zt.set(t)},reposition:()=>{let t=0,n=0,e=0;const r=h(Mt);let l=h(Lt),i=h(zt);i.forEach((i=>{i.w&&i.h&&(t+i.w+r>l.width&&(n+=e+r,t=0),i.x===t&&i.y===n||(i.x=t,i.y=n),console.log("move "+i.name+" to "+i.x+"/"+i.y),e=Math.max(e,i.h),t+=i.w+r)})),zt.set(i)}}}();function At(t,n,e){const r=t.slice();return r[43]=n[e],r}function Dt(t){let e,r,l,i;const o=[{name:t[43].name},t[43].props,{x:t[43].x||0},{y:t[43].y||0}];var c=t[43].component;function h(t){let e={};for(let t=0;t<o.length;t+=1)e=n(e,o[t]);return{props:e}}return c&&(r=new c(h())),{c(){e=m("g"),r&&P(r.$$.fragment),v(e,"id",l=t[43].name),v(e,"class","svelte-1nzgpjz")},m(t,n){a(t,e,n),r&&V(r,e,null),i=!0},p(t,n){const u=262144&n[0]?function(t,n){const e={},r={},l={$$scope:1};let i=t.length;for(;i--;){const o=t[i],c=n[i];if(c){for(const t in o)t in c||(r[t]=1);for(const t in c)l[t]||(e[t]=c[t],l[t]=1);t[i]=c}else for(const t in o)l[t]=1}for(const t in r)t in e||(e[t]=void 0);return e}(o,[{name:t[43].name},(s=t[43].props,"object"==typeof s&&null!==s?s:{}),{x:t[43].x||0},{y:t[43].y||0}]):{};var s;if(c!==(c=t[43].component)){if(r){R();const t=r;G(t.$$.fragment,1,0,(()=>{q(t,1)})),W()}c?(r=new c(h()),P(r.$$.fragment),U(r.$$.fragment,1),V(r,e,null)):r=null}else c&&r.$set(u);(!i||262144&n[0]&&l!==(l=t[43].name))&&v(e,"id",l)},i(t){i||(r&&U(r.$$.fragment,t),i=!0)},o(t){r&&G(r.$$.fragment,t),i=!1},d(t){t&&f(e),r&&q(r)}}}function jt(t){let n,e,r,i,o,c,h,u,s,w,C,O,F,S,_,M,B,E,L,z,A,D,j,H,T,N,P,V,q,I,J,K,Q,X,Y,Z,tt,nt,et,rt,lt,it,ot,ct,ht,ut,st,dt,at,ft,pt,mt,gt,xt,wt,bt,vt,kt,yt,$t,Ct,Ot,Ft,St,_t,Mt,Bt,Et,Lt,zt,jt,Ht,Tt,Nt,Rt,Wt,Ut,Gt,Pt,Vt,qt,It,Jt,Kt,Qt,Xt,Yt,Zt,tn,nn,en,rn,ln,on,cn=t[18],hn=[];for(let n=0;n<cn.length;n+=1)hn[n]=Dt(At(t,cn,n));const un=t=>G(hn[t],1,1,(()=>{hn[t]=null}));return{c(){n=p("div"),e=p("div"),r=p("h3"),r.innerHTML="<b>Box Dimensions (mm)</b>",i=x(),o=p("nobr"),c=g("Width "),h=p("input"),u=p("br"),s=g("\n        Depth "),w=p("input"),O=p("br"),F=g("\n        Height "),S=p("input"),_=x(),M=p("div"),B=p("h3"),B.innerHTML="<b>Base Dimensions (mm)</b>",E=g("            \n        Material thickness "),L=p("input"),z=p("br"),A=g("\n        Cutter diameter "),D=p("input"),j=p("br"),H=g("\n        Cleat thickness "),T=p("input"),N=p("br"),P=g("\n        Support part H: "),V=p("input"),q=g(" D: "),I=p("input"),J=p("br"),K=x(),Q=p("i"),Q.textContent="(Set to 0 to disable)",X=p("br"),Y=x(),Z=p("div"),tt=p("h3"),tt.textContent="Shelves",nt=x(),et=p("input"),rt=g(" top\n        "),lt=p("input"),it=g(" bottom"),ot=p("br"),ct=x(),ht=p("input"),ut=g(" front\n        "),st=p("input"),dt=g(" back\n        \n        "),at=p("h3"),at.textContent="Bars",ft=x(),pt=p("input"),mt=g(" Back/top\n        "),gt=p("input"),xt=g(" Front/top"),wt=p("br"),bt=x(),vt=p("input"),kt=g(" Back/bottom\n        "),yt=p("input"),$t=g(" Front/bottom\n        \n        "),Ct=p("h3"),Ct.textContent="Sides",Ot=x(),Ft=p("input"),St=g(" closed sides"),_t=p("br"),Mt=x(),Bt=p("i"),Bt.textContent="(mandatory with front or top shelves)",Et=x(),Lt=p("div"),zt=p("h3"),zt.textContent="Workspace Dimensions (mm)",jt=g("\n        W "),Ht=p("input"),Tt=g("\n        L "),Nt=p("input"),Rt=p("br"),Wt=g("\n        Gap "),Ut=p("input"),Gt=x(),Pt=p("div"),Vt=p("h3"),Vt.textContent="Download SVG",qt=x(),It=p("button"),It.textContent="Download Workspace",Jt=x(),Kt=p("p"),Kt.innerHTML="<i>Click individual parts to download separate files</i>",Qt=x(),Xt=p("div"),Xt.innerHTML='Open Source - <a href="https://github.com/lizzard77/cnc-french-cleat-box-designer/blob/master/LICENSE">MIT License</a><br/> \n        <a href="https://github.com/lizzard77/cnc-french-cleat-box-designer">Visit project on GitHub</a>',Yt=x(),Zt=p("div"),tn=m("svg");for(let t=0;t<hn.length;t+=1)hn[t].c();v(h,"type","number"),v(h,"min","0"),v(h,"max","500"),v(w,"type","number"),v(w,"min",C=2*t[10]+t[11]),v(w,"max","500"),v(S,"type","number"),v(S,"min","0"),v(S,"max","500"),v(L,"type","number"),v(L,"min","0"),v(L,"max","500"),v(D,"type","number"),v(D,"min","0"),v(D,"max","30"),v(T,"type","number"),v(T,"min","0"),v(T,"max","500"),v(V,"type","number"),v(V,"min","0"),v(V,"max","500"),v(I,"type","number"),v(I,"min","0"),v(I,"max","500"),v(et,"type","checkbox"),v(lt,"type","checkbox"),v(ht,"type","checkbox"),v(st,"type","checkbox"),v(pt,"type","checkbox"),v(gt,"type","checkbox"),v(vt,"type","checkbox"),v(yt,"type","checkbox"),v(Ft,"type","checkbox"),v(Ht,"type","number"),v(Ht,"min","0"),v(Ht,"max","1000"),v(Nt,"type","number"),v(Nt,"min","0"),v(Nt,"max","1000"),v(Ut,"type","number"),v(Ut,"min","0"),v(Ut,"max","500"),$(Xt,"font-style","italic"),$(Xt,"font-size","smaller"),$(n,"display","flex"),$(n,"flex-direction","column"),$(n,"margin","1em"),v(tn,"width",nn=t[16].width+"mm"),v(tn,"height",en=t[16].height+"mm"),v(tn,"fill-rule","evenodd"),$(tn,"border","1px solid silver"),$(tn,"fill","none"),$(tn,"stroke","black"),$(tn,"stroke-width","0.5px"),v(Zt,"id","workspaces"),v(Zt,"class","svelte-1nzgpjz")},m(l,f){a(l,n,f),d(n,e),d(e,r),d(e,i),d(e,o),d(o,c),d(o,h),y(h,t[8].width),d(o,u),d(o,s),d(o,w),y(w,t[8].depth),d(o,O),d(o,F),d(o,S),y(S,t[8].height),d(n,_),d(n,M),d(M,B),d(M,E),d(M,L),y(L,t[11]),d(M,z),d(M,A),d(M,D),y(D,t[12]),d(M,j),d(M,H),d(M,T),y(T,t[13]),d(M,N),d(M,P),d(M,V),y(V,t[14]),d(M,q),d(M,I),y(I,t[15]),d(M,J),d(M,K),d(M,Q),d(M,X),d(n,Y),d(n,Z),d(Z,tt),d(Z,nt),d(Z,et),et.checked=t[0],d(Z,rt),d(Z,lt),lt.checked=t[1],d(Z,it),d(Z,ot),d(Z,ct),d(Z,ht),ht.checked=t[2],d(Z,ut),d(Z,st),st.checked=t[3],d(Z,dt),d(Z,at),d(Z,ft),d(Z,pt),pt.checked=t[4],d(Z,mt),d(Z,gt),gt.checked=t[5],d(Z,xt),d(Z,wt),d(Z,bt),d(Z,vt),vt.checked=t[6],d(Z,kt),d(Z,yt),yt.checked=t[7],d(Z,$t),d(Z,Ct),d(Z,Ot),d(Z,Ft),Ft.checked=t[8].isClosed,d(Z,St),d(Z,_t),d(Z,Mt),d(Z,Bt),d(n,Et),d(n,Lt),d(Lt,zt),d(Lt,jt),d(Lt,Ht),y(Ht,t[16].width),d(Lt,Tt),d(Lt,Nt),y(Nt,t[16].height),d(Lt,Rt),d(Lt,Wt),d(Lt,Ut),y(Ut,t[17]),d(n,Gt),d(n,Pt),d(Pt,Vt),d(Pt,qt),d(Pt,It),d(Pt,Jt),d(Pt,Kt),d(n,Qt),d(n,Xt),a(l,Yt,f),a(l,Zt,f),d(Zt,tn);for(let t=0;t<hn.length;t+=1)hn[t].m(tn,null);t[42](tn),rn=!0,ln||(on=[b(h,"input",t[20]),b(w,"input",t[21]),b(S,"input",t[22]),b(L,"input",t[23]),b(D,"input",t[24]),b(T,"input",t[25]),b(V,"input",t[26]),b(I,"input",t[27]),b(et,"change",t[28]),b(lt,"change",t[29]),b(ht,"change",t[30]),b(st,"change",t[31]),b(pt,"change",t[32]),b(gt,"change",t[33]),b(vt,"change",t[34]),b(yt,"change",t[35]),b(Ft,"change",t[36]),b(Ht,"input",t[37]),b(Ht,"change",t[38]),b(Nt,"input",t[39]),b(Ut,"input",t[40]),b(It,"click",t[41])],ln=!0)},p(t,n){if(256&n[0]&&k(h.value)!==t[8].width&&y(h,t[8].width),(!rn||3072&n[0]&&C!==(C=2*t[10]+t[11]))&&v(w,"min",C),256&n[0]&&k(w.value)!==t[8].depth&&y(w,t[8].depth),256&n[0]&&k(S.value)!==t[8].height&&y(S,t[8].height),2048&n[0]&&k(L.value)!==t[11]&&y(L,t[11]),4096&n[0]&&k(D.value)!==t[12]&&y(D,t[12]),8192&n[0]&&k(T.value)!==t[13]&&y(T,t[13]),16384&n[0]&&k(V.value)!==t[14]&&y(V,t[14]),32768&n[0]&&k(I.value)!==t[15]&&y(I,t[15]),1&n[0]&&(et.checked=t[0]),2&n[0]&&(lt.checked=t[1]),4&n[0]&&(ht.checked=t[2]),8&n[0]&&(st.checked=t[3]),16&n[0]&&(pt.checked=t[4]),32&n[0]&&(gt.checked=t[5]),64&n[0]&&(vt.checked=t[6]),128&n[0]&&(yt.checked=t[7]),256&n[0]&&(Ft.checked=t[8].isClosed),65536&n[0]&&k(Ht.value)!==t[16].width&&y(Ht,t[16].width),65536&n[0]&&k(Nt.value)!==t[16].height&&y(Nt,t[16].height),131072&n[0]&&k(Ut.value)!==t[17]&&y(Ut,t[17]),262144&n[0]){let e;for(cn=t[18],e=0;e<cn.length;e+=1){const r=At(t,cn,e);hn[e]?(hn[e].p(r,n),U(hn[e],1)):(hn[e]=Dt(r),hn[e].c(),U(hn[e],1),hn[e].m(tn,null))}for(R(),e=cn.length;e<hn.length;e+=1)un(e);W()}(!rn||65536&n[0]&&nn!==(nn=t[16].width+"mm"))&&v(tn,"width",nn),(!rn||65536&n[0]&&en!==(en=t[16].height+"mm"))&&v(tn,"height",en)},i(t){if(!rn){for(let t=0;t<cn.length;t+=1)U(hn[t]);rn=!0}},o(t){hn=hn.filter(Boolean);for(let t=0;t<hn.length;t+=1)G(hn[t]);rn=!1},d(e){e&&f(n),e&&f(Yt),e&&f(Zt),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(hn,e),t[42](null),ln=!1,l(on)}}}function Ht(t,n,e){let r,l,i,o,c,h,d,a,f,p,m,g;u(t,yt,(t=>e(8,r=t))),u(t,Et,(t=>e(19,l=t))),u(t,Ft,(t=>e(10,i=t))),u(t,kt,(t=>e(11,o=t))),u(t,Bt,(t=>e(12,c=t))),u(t,Ct,(t=>e(13,h=t))),u(t,St,(t=>e(14,d=t))),u(t,_t,(t=>e(15,a=t))),u(t,Lt,(t=>e(16,f=t))),u(t,Mt,(t=>e(17,p=t))),u(t,zt,(t=>e(18,m=t)));let x=!0,w=!0,b=!0,v=!0,y=!1,$=!1,C=!1,O=!1;F((()=>{zt.getDimensions(),zt.reposition()}));return t.$$.update=()=>{524799&t.$$.dirty[0]&&(r.height<100&&(e(0,x=!1),e(2,b=!1),e(3,v=!1)),r.depth<100&&(e(0,x=!1),e(1,w=!1)),r.depth<50&&e(2,b=!1),zt.addSides(),x&&(s(Et,l.h1=!0,l),s(Et,l.h2=!0,l),zt.addShelf(r.width,r.depth,"top",!1)),w&&(s(Et,l.h3=!0,l),s(Et,l.h4=!0,l),zt.addShelf(r.width,r.depth,"bottom",!1)),b&&(s(Et,l.v2=!0,l),s(Et,l.v3=!0,l),zt.addShelf(r.height,r.width,"front",!0)),v&&(s(Et,l.v1=!0,l),s(Et,l.v4=!0,l),zt.addShelf(r.height,r.width,"back",!0)),y&&(s(Et,l.v1=!0,l),zt.addBar(r.width,"tl")),$&&(s(Et,l.v2=!0,l),zt.addBar(r.width,"tr")),C&&(s(Et,l.v4=!0,l),zt.addBar(r.width,"br")),O&&(r.isClosed?s(Et,l.v3=!0,l):s(Et,l.h3=!0,l),zt.addBar(r.width,"bl")),s(yt,r.isClosed=l.h2||l.v2||l.v3||r.isClosed,r),zt.getDimensions(),zt.reposition())},[x,w,b,v,y,$,C,O,r,g,i,o,c,h,d,a,f,p,m,l,function(){r.width=k(this.value),yt.set(r)},function(){r.depth=k(this.value),yt.set(r)},function(){r.height=k(this.value),yt.set(r)},function(){o=k(this.value),kt.set(o)},function(){c=k(this.value),Bt.set(c)},function(){h=k(this.value),Ct.set(h)},function(){d=k(this.value),St.set(d)},function(){a=k(this.value),_t.set(a)},function(){x=this.checked,e(0,x),e(8,r),e(1,w),e(2,b),e(3,v),e(4,y),e(5,$),e(6,C),e(7,O),e(19,l)},function(){w=this.checked,e(1,w),e(8,r),e(0,x),e(2,b),e(3,v),e(4,y),e(5,$),e(6,C),e(7,O),e(19,l)},function(){b=this.checked,e(2,b),e(8,r),e(0,x),e(1,w),e(3,v),e(4,y),e(5,$),e(6,C),e(7,O),e(19,l)},function(){v=this.checked,e(3,v),e(8,r),e(0,x),e(1,w),e(2,b),e(4,y),e(5,$),e(6,C),e(7,O),e(19,l)},function(){y=this.checked,e(4,y)},function(){$=this.checked,e(5,$)},function(){C=this.checked,e(6,C)},function(){O=this.checked,e(7,O)},function(){r.isClosed=this.checked,yt.set(r)},function(){f.width=k(this.value),Lt.set(f)},t=>s(Lt,f={...f,width:t.target.value},f),function(){f.height=k(this.value),Lt.set(f)},function(){p=k(this.value),Mt.set(p)},t=>Y(g,"Workspace.svg"),function(t){_[t?"unshift":"push"]((()=>{g=t,e(9,g)}))}]}return new class extends K{constructor(t){super(),J(this,t,Ht,jt,o,{},[-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
