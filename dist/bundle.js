import je,{useState as G}from"react";function Ee(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var j={exports:{}},v={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H;function ke(){if(H)return v;H=1;var t=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function f(i,n,l){var e=null;if(l!==void 0&&(e=""+l),n.key!==void 0&&(e=""+n.key),"key"in n){l={};for(var r in n)r!=="key"&&(l[r]=n[r])}else l=n;return n=l.ref,{$$typeof:t,type:i,key:e,ref:n!==void 0?n:null,props:l}}return v.Fragment=m,v.jsx=f,v.jsxs=f,v}var Q;function Se(){return Q||(Q=1,j.exports=ke()),j.exports}var p=Se(),E={},Z;function Ne(){return Z||(Z=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});var m=je;function f(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach(function(a){if(a!=="default"){var s=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(r,a,s.get?s:{enumerable:!0,get:function(){return e[a]}})}}),r.default=e,Object.freeze(r)}var i=f(m);/*! *****************************************************************************
		Copyright (c) Microsoft Corporation.

		Permission to use, copy, modify, and/or distribute this software for any
		purpose with or without fee is hereby granted.

		THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
		REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
		AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
		INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
		LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
		OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
		PERFORMANCE OF THIS SOFTWARE.
		***************************************************************************** */var n=function(){return n=Object.assign||function(r){for(var a,s=1,b=arguments.length;s<b;s++){a=arguments[s];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(r[u]=a[u])}return r},n.apply(this,arguments)},l=function(e){var r=e.bgColor,a=r===void 0?"#6a1b9a":r,s=e.height,b=s===void 0?"20px":s,u=e.width,K=u===void 0?"100%":u,k=e.borderRadius,ee=k===void 0?"50px":k,S=e.labelAlignment,o=S===void 0?"right":S,N=e.baseBgColor,te=N===void 0?"#e0e0de":N,O=e.labelColor,ne=O===void 0?"#fff":O,L=e.labelSize,re=L===void 0?"15px":L,w=e.isLabelVisible,ie=w===void 0?!0:w,_=e.dir,ae=_===void 0?"ltr":_,A=e.ariaValuemin,le=A===void 0?0:A,P=e.ariaValuemax,se=P===void 0?100:P,q=e.ariaValuetext,F=q===void 0?null:q,T=e.maxCompleted,oe=T===void 0?100:T,V=e.animateOnRender,y=V===void 0?!1:V,B=e.initCompletedOnAnimation,C=B===void 0?0:B,D=e.isIndeterminate,d=D===void 0?!1:D,g=e.completed,ue=e.margin,de=e.padding,ce=e.customLabelStyles,me=e.transitionDuration,fe=e.transitionTimingFunction,M=e.className,I=e.customLabel,J=e.barContainerClassName,W=e.completedClassName,h=e.labelClassName,ve=function(c){return c==="left"?"flex-start":c==="center"?"center":c==="right"?"flex-end":null},z=ve(o),$=typeof C=="number"?"".concat(C,"%"):C,pe=function(c,Re){if(c){var Y=Number(Re)/c;return Y>1?"100%":"".concat(Y*100,"%")}return $},R=pe(oe,g),X=i.useState($),be=X[0],ge=X[1],he={height:b,background:te,borderRadius:ee,padding:de,width:K,margin:ue,overflow:"hidden"},xe={height:b,width:d?"100%":y?be:R,background:a,transition:d?"none":"width ".concat(me||"1s"," ").concat(fe||"ease-in-out"),borderRadius:"inherit",display:"flex",alignItems:"center",justifyContent:o!=="outside"&&z?z:"normal",animation:d?"indeterminate 1.5s infinite linear":"none"},U=n({padding:o==="outside"?"0 0 0 5px":"5px",color:ne,fontWeight:"bold",fontSize:re,display:ie?"initial":"none"},ce),ye={display:o==="outside"?"flex":"initial",alignItems:o==="outside"?"center":"initial"},Ce=typeof g=="number"?"".concat(g,"%"):"".concat(g),x=I||Ce;return i.useEffect(function(){y&&!d&&requestAnimationFrame(function(){return ge(R)})},[R,y,d]),i.createElement("div",{style:M?void 0:ye,className:M,dir:ae,role:"progressbar","aria-valuenow":d?void 0:parseFloat(x),"aria-valuemin":le,"aria-valuemax":se,"aria-valuetext":"".concat(F===null?x:F)},i.createElement("div",{style:J?void 0:he,className:J},i.createElement("div",{style:W?void 0:xe,className:W},o!=="outside"&&i.createElement("span",{style:h?void 0:U,className:h},x))),o==="outside"&&i.createElement("span",{style:h?void 0:U,className:h},x),i.createElement("style",null,`
          @keyframes indeterminate {
            0% {
              width: 30%;
              transform: translateX(-50%);
            }
            50% {
              width: 30%;
              transform: translateX(250%);
            }
            100% {
              width: 30%;
              transform: translateX(-50%);
            }
          }
        `))};t.default=l}(E)),E}var Oe=Ne();const Le=Ee(Oe),_e=()=>{const[t,m]=G(0),[f,i]=G(!1);return p.jsxs(p.Fragment,{children:[p.jsx("p",{children:"Like Button from Microservice UHULLL"}),p.jsxs("button",{onClick:()=>m(t+1),children:["React Likes: ",t]}),p.jsx(Le,{completed:60})]})};export{_e as default};
