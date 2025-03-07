import je,{useState as G}from"react";function Ee(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var j={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H;function ke(){if(H)return p;H=1;var t=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function v(i,r,l){var e=null;if(l!==void 0&&(e=""+l),r.key!==void 0&&(e=""+r.key),"key"in r){l={};for(var n in r)n!=="key"&&(l[n]=r[n])}else l=r;return r=l.ref,{$$typeof:t,type:i,key:e,ref:r!==void 0?r:null,props:l}}return p.Fragment=f,p.jsx=v,p.jsxs=v,p}var Q;function Se(){return Q||(Q=1,j.exports=ke()),j.exports}var u=Se(),E={},Z;function Ne(){return Z||(Z=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});var f=je;function v(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach(function(a){if(a!=="default"){var s=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(n,a,s.get?s:{enumerable:!0,get:function(){return e[a]}})}}),n.default=e,Object.freeze(n)}var i=v(f);/*! *****************************************************************************
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
		***************************************************************************** */var r=function(){return r=Object.assign||function(n){for(var a,s=1,b=arguments.length;s<b;s++){a=arguments[s];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(n[d]=a[d])}return n},r.apply(this,arguments)},l=function(e){var n=e.bgColor,a=n===void 0?"#6a1b9a":n,s=e.height,b=s===void 0?"20px":s,d=e.width,K=d===void 0?"100%":d,k=e.borderRadius,ee=k===void 0?"50px":k,S=e.labelAlignment,o=S===void 0?"right":S,N=e.baseBgColor,te=N===void 0?"#e0e0de":N,O=e.labelColor,re=O===void 0?"#fff":O,L=e.labelSize,ne=L===void 0?"15px":L,w=e.isLabelVisible,ie=w===void 0?!0:w,A=e.dir,ae=A===void 0?"ltr":A,P=e.ariaValuemin,le=P===void 0?0:P,_=e.ariaValuemax,se=_===void 0?100:_,q=e.ariaValuetext,F=q===void 0?null:q,D=e.maxCompleted,oe=D===void 0?100:D,T=e.animateOnRender,y=T===void 0?!1:T,V=e.initCompletedOnAnimation,R=V===void 0?0:V,B=e.isIndeterminate,c=B===void 0?!1:B,h=e.completed,ue=e.margin,de=e.padding,ce=e.customLabelStyles,me=e.transitionDuration,fe=e.transitionTimingFunction,M=e.className,I=e.customLabel,J=e.barContainerClassName,W=e.completedClassName,g=e.labelClassName,ve=function(m){return m==="left"?"flex-start":m==="center"?"center":m==="right"?"flex-end":null},z=ve(o),$=typeof R=="number"?"".concat(R,"%"):R,pe=function(m,Ce){if(m){var Y=Number(Ce)/m;return Y>1?"100%":"".concat(Y*100,"%")}return $},C=pe(oe,h),X=i.useState($),be=X[0],he=X[1],ge={height:b,background:te,borderRadius:ee,padding:de,width:K,margin:ue,overflow:"hidden"},xe={height:b,width:c?"100%":y?be:C,background:a,transition:c?"none":"width ".concat(me||"1s"," ").concat(fe||"ease-in-out"),borderRadius:"inherit",display:"flex",alignItems:"center",justifyContent:o!=="outside"&&z?z:"normal",animation:c?"indeterminate 1.5s infinite linear":"none"},U=r({padding:o==="outside"?"0 0 0 5px":"5px",color:re,fontWeight:"bold",fontSize:ne,display:ie?"initial":"none"},ce),ye={display:o==="outside"?"flex":"initial",alignItems:o==="outside"?"center":"initial"},Re=typeof h=="number"?"".concat(h,"%"):"".concat(h),x=I||Re;return i.useEffect(function(){y&&!c&&requestAnimationFrame(function(){return he(C)})},[C,y,c]),i.createElement("div",{style:M?void 0:ye,className:M,dir:ae,role:"progressbar","aria-valuenow":c?void 0:parseFloat(x),"aria-valuemin":le,"aria-valuemax":se,"aria-valuetext":"".concat(F===null?x:F)},i.createElement("div",{style:J?void 0:ge,className:J},i.createElement("div",{style:W?void 0:xe,className:W},o!=="outside"&&i.createElement("span",{style:g?void 0:U,className:g},x))),o==="outside"&&i.createElement("span",{style:g?void 0:U,className:g},x),i.createElement("style",null,`
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
        `))};t.default=l}(E)),E}var Oe=Ne();const Le=Ee(Oe),Ae=()=>{const[t,f]=G(0),[v,i]=G(!1);return u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"Like Button from Microservice UHULLL"}),u.jsx("p",{children:"Deu certo PRA caramba"}),u.jsx("p",{children:"Deu certo PRA caramba 2x"}),u.jsxs("button",{onClick:()=>f(t+1),children:["React Likes: ",t]}),u.jsx(Le,{completed:60})]})};export{Ae as default};
