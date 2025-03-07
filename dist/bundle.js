import Ce,{useState as G}from"react";function Ee(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var C={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H;function ke(){if(H)return p;H=1;var t=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function v(a,r,s){var e=null;if(s!==void 0&&(e=""+s),r.key!==void 0&&(e=""+r.key),"key"in r){s={};for(var n in r)n!=="key"&&(s[n]=r[n])}else s=r;return r=s.ref,{$$typeof:t,type:a,key:e,ref:r!==void 0?r:null,props:s}}return p.Fragment=f,p.jsx=v,p.jsxs=v,p}var Q;function Se(){return Q||(Q=1,C.exports=ke()),C.exports}var i=Se(),E={},Z;function Le(){return Z||(Z=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});var f=Ce;function v(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach(function(l){if(l!=="default"){var o=Object.getOwnPropertyDescriptor(e,l);Object.defineProperty(n,l,o.get?o:{enumerable:!0,get:function(){return e[l]}})}}),n.default=e,Object.freeze(n)}var a=v(f);/*! *****************************************************************************
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
		***************************************************************************** */var r=function(){return r=Object.assign||function(n){for(var l,o=1,b=arguments.length;o<b;o++){l=arguments[o];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(n[d]=l[d])}return n},r.apply(this,arguments)},s=function(e){var n=e.bgColor,l=n===void 0?"#6a1b9a":n,o=e.height,b=o===void 0?"20px":o,d=e.width,K=d===void 0?"100%":d,k=e.borderRadius,ee=k===void 0?"50px":k,S=e.labelAlignment,u=S===void 0?"right":S,L=e.baseBgColor,te=L===void 0?"#e0e0de":L,N=e.labelColor,re=N===void 0?"#fff":N,O=e.labelSize,ne=O===void 0?"15px":O,P=e.isLabelVisible,ie=P===void 0?!0:P,A=e.dir,ae=A===void 0?"ltr":A,w=e.ariaValuemin,le=w===void 0?0:w,_=e.ariaValuemax,se=_===void 0?100:_,q=e.ariaValuetext,D=q===void 0?null:q,F=e.maxCompleted,oe=F===void 0?100:F,T=e.animateOnRender,j=T===void 0?!1:T,V=e.initCompletedOnAnimation,R=V===void 0?0:V,B=e.isIndeterminate,c=B===void 0?!1:B,h=e.completed,ue=e.margin,de=e.padding,ce=e.customLabelStyles,me=e.transitionDuration,fe=e.transitionTimingFunction,M=e.className,I=e.customLabel,J=e.barContainerClassName,W=e.completedClassName,x=e.labelClassName,ve=function(m){return m==="left"?"flex-start":m==="center"?"center":m==="right"?"flex-end":null},z=ve(u),$=typeof R=="number"?"".concat(R,"%"):R,pe=function(m,ye){if(m){var Y=Number(ye)/m;return Y>1?"100%":"".concat(Y*100,"%")}return $},y=pe(oe,h),X=a.useState($),be=X[0],he=X[1],xe={height:b,background:te,borderRadius:ee,padding:de,width:K,margin:ue,overflow:"hidden"},ge={height:b,width:c?"100%":j?be:y,background:l,transition:c?"none":"width ".concat(me||"1s"," ").concat(fe||"ease-in-out"),borderRadius:"inherit",display:"flex",alignItems:"center",justifyContent:u!=="outside"&&z?z:"normal",animation:c?"indeterminate 1.5s infinite linear":"none"},U=r({padding:u==="outside"?"0 0 0 5px":"5px",color:re,fontWeight:"bold",fontSize:ne,display:ie?"initial":"none"},ce),je={display:u==="outside"?"flex":"initial",alignItems:u==="outside"?"center":"initial"},Re=typeof h=="number"?"".concat(h,"%"):"".concat(h),g=I||Re;return a.useEffect(function(){j&&!c&&requestAnimationFrame(function(){return he(y)})},[y,j,c]),a.createElement("div",{style:M?void 0:je,className:M,dir:ae,role:"progressbar","aria-valuenow":c?void 0:parseFloat(g),"aria-valuemin":le,"aria-valuemax":se,"aria-valuetext":"".concat(D===null?g:D)},a.createElement("div",{style:J?void 0:xe,className:J},a.createElement("div",{style:W?void 0:ge,className:W},u!=="outside"&&a.createElement("span",{style:x?void 0:U,className:x},g))),u==="outside"&&a.createElement("span",{style:x?void 0:U,className:x},g),a.createElement("style",null,`
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
        `))};t.default=s}(E)),E}var Ne=Le();const Oe=Ee(Ne),Ae=()=>{const[t,f]=G(0),[v,a]=G(!1);return i.jsxs(i.Fragment,{children:[i.jsx("h1",{children:"Like Button Pq nois e pika e o restou e buraco"}),i.jsx("p",{children:"Like Button from Microservice UHULLL"}),i.jsx("p",{children:"Deu certo PRA caramba"}),i.jsx("p",{children:"Deu certo PRA caramba 2x"}),i.jsx("p",{children:"Deu certo PRA caramba 3x"}),i.jsx("br",{}),i.jsx("p",{children:"Deu certo PRA caramba 4x"}),i.jsx("p",{children:"Valeu adailton"}),i.jsxs("button",{onClick:()=>f(t+1),children:["React Likes: ",t]}),i.jsx(Oe,{completed:60})]})};export{Ae as default};
