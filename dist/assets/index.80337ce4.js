import{g as dr}from"./base.12718b58.js";var gr=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),n=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var o=42;e[t]=o;for(t in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var a=Object.getOwnPropertySymbols(e);if(a.length!==1||a[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var i=Object.getOwnPropertyDescriptor(e,t);if(i.value!==o||i.enumerable!==!0)return!1}return!0},We=typeof Symbol!="undefined"&&Symbol,mr=gr,hr=function(){return typeof We!="function"||typeof Symbol!="function"||typeof We("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:mr()},Sr="Function.prototype.bind called on incompatible ",se=Array.prototype.slice,br=Object.prototype.toString,Or="[object Function]",Ar=function(e){var t=this;if(typeof t!="function"||br.call(t)!==Or)throw new TypeError(Sr+t);for(var n=se.call(arguments,1),o,a=function(){if(this instanceof o){var c=t.apply(this,n.concat(se.call(arguments)));return Object(c)===c?c:this}else return t.apply(e,n.concat(se.call(arguments)))},i=Math.max(0,t.length-n.length),f=[],u=0;u<i;u++)f.push("$"+u);if(o=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")(a),t.prototype){var l=function(){};l.prototype=t.prototype,o.prototype=new l,l.prototype=null}return o},wr=Ar,Re=Function.prototype.bind||wr,Pr=Re,Er=Pr.call(Function.call,Object.prototype.hasOwnProperty),y,V=SyntaxError,er=Function,H=TypeError,ve=function(r){try{return er('"use strict"; return ('+r+").constructor;")()}catch{}},_=Object.getOwnPropertyDescriptor;if(_)try{_({},"")}catch{_=null}var de=function(){throw new H},xr=_?function(){try{return arguments.callee,de}catch{try{return _(arguments,"callee").get}catch{return de}}}():de,k=hr(),I=Object.getPrototypeOf||function(r){return r.__proto__},z={},$r=typeof Uint8Array=="undefined"?y:I(Uint8Array),Q={"%AggregateError%":typeof AggregateError=="undefined"?y:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer=="undefined"?y:ArrayBuffer,"%ArrayIteratorPrototype%":k?I([][Symbol.iterator]()):y,"%AsyncFromSyncIteratorPrototype%":y,"%AsyncFunction%":z,"%AsyncGenerator%":z,"%AsyncGeneratorFunction%":z,"%AsyncIteratorPrototype%":z,"%Atomics%":typeof Atomics=="undefined"?y:Atomics,"%BigInt%":typeof BigInt=="undefined"?y:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView=="undefined"?y:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array=="undefined"?y:Float32Array,"%Float64Array%":typeof Float64Array=="undefined"?y:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry=="undefined"?y:FinalizationRegistry,"%Function%":er,"%GeneratorFunction%":z,"%Int8Array%":typeof Int8Array=="undefined"?y:Int8Array,"%Int16Array%":typeof Int16Array=="undefined"?y:Int16Array,"%Int32Array%":typeof Int32Array=="undefined"?y:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":k?I(I([][Symbol.iterator]())):y,"%JSON%":typeof JSON=="object"?JSON:y,"%Map%":typeof Map=="undefined"?y:Map,"%MapIteratorPrototype%":typeof Map=="undefined"||!k?y:I(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise=="undefined"?y:Promise,"%Proxy%":typeof Proxy=="undefined"?y:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect=="undefined"?y:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set=="undefined"?y:Set,"%SetIteratorPrototype%":typeof Set=="undefined"||!k?y:I(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer=="undefined"?y:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":k?I(""[Symbol.iterator]()):y,"%Symbol%":k?Symbol:y,"%SyntaxError%":V,"%ThrowTypeError%":xr,"%TypedArray%":$r,"%TypeError%":H,"%Uint8Array%":typeof Uint8Array=="undefined"?y:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray=="undefined"?y:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array=="undefined"?y:Uint16Array,"%Uint32Array%":typeof Uint32Array=="undefined"?y:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap=="undefined"?y:WeakMap,"%WeakRef%":typeof WeakRef=="undefined"?y:WeakRef,"%WeakSet%":typeof WeakSet=="undefined"?y:WeakSet},Fr=function r(e){var t;if(e==="%AsyncFunction%")t=ve("async function () {}");else if(e==="%GeneratorFunction%")t=ve("function* () {}");else if(e==="%AsyncGeneratorFunction%")t=ve("async function* () {}");else if(e==="%AsyncGenerator%"){var n=r("%AsyncGeneratorFunction%");n&&(t=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var o=r("%AsyncGenerator%");o&&(t=I(o.prototype))}return Q[e]=t,t},Le={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},re=Re,le=Er,Ir=re.call(Function.call,Array.prototype.concat),Rr=re.call(Function.apply,Array.prototype.splice),Ge=re.call(Function.call,String.prototype.replace),ue=re.call(Function.call,String.prototype.slice),Nr=re.call(Function.call,RegExp.prototype.exec),Mr=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Dr=/\\(\\)?/g,Tr=function(e){var t=ue(e,0,1),n=ue(e,-1);if(t==="%"&&n!=="%")throw new V("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&t!=="%")throw new V("invalid intrinsic syntax, expected opening `%`");var o=[];return Ge(e,Mr,function(a,i,f,u){o[o.length]=f?Ge(u,Dr,"$1"):i||a}),o},Br=function(e,t){var n=e,o;if(le(Le,n)&&(o=Le[n],n="%"+o[0]+"%"),le(Q,n)){var a=Q[n];if(a===z&&(a=Fr(n)),typeof a=="undefined"&&!t)throw new H("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:o,name:n,value:a}}throw new V("intrinsic "+e+" does not exist!")},Ne=function(e,t){if(typeof e!="string"||e.length===0)throw new H("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new H('"allowMissing" argument must be a boolean');if(Nr(/^%?[^%]*%?$/g,e)===null)throw new V("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=Tr(e),o=n.length>0?n[0]:"",a=Br("%"+o+"%",t),i=a.name,f=a.value,u=!1,l=a.alias;l&&(o=l[0],Rr(n,Ir([0,1],l)));for(var c=1,v=!0;c<n.length;c+=1){var p=n[c],d=ue(p,0,1),g=ue(p,-1);if((d==='"'||d==="'"||d==="`"||g==='"'||g==="'"||g==="`")&&d!==g)throw new V("property names with quotes must have matching quotes");if((p==="constructor"||!v)&&(u=!0),o+="."+p,i="%"+o+"%",le(Q,i))f=Q[i];else if(f!=null){if(!(p in f)){if(!t)throw new H("base intrinsic for "+e+" exists, but the property is not available.");return}if(_&&c+1>=n.length){var b=_(f,p);v=!!b,v&&"get"in b&&!("originalValue"in b.get)?f=b.get:f=f[p]}else v=le(f,p),f=f[p];v&&!u&&(Q[i]=f)}}return f},rr={exports:{}};(function(r){var e=Re,t=Ne,n=t("%Function.prototype.apply%"),o=t("%Function.prototype.call%"),a=t("%Reflect.apply%",!0)||e.call(o,n),i=t("%Object.getOwnPropertyDescriptor%",!0),f=t("%Object.defineProperty%",!0),u=t("%Math.max%");if(f)try{f({},"a",{value:1})}catch{f=null}r.exports=function(v){var p=a(e,o,arguments);if(i&&f){var d=i(p,"length");d.configurable&&f(p,"length",{value:1+u(0,v.length-(arguments.length-1))})}return p};var l=function(){return a(e,n,arguments)};f?f(r.exports,"apply",{value:l}):r.exports.apply=l})(rr);var tr=Ne,nr=rr.exports,Cr=nr(tr("String.prototype.indexOf")),_r=function(e,t){var n=tr(e,!!t);return typeof n=="function"&&Cr(e,".prototype.")>-1?nr(n):n},Ur={},Wr=Object.freeze(Object.defineProperty({__proto__:null,default:Ur},Symbol.toStringTag,{value:"Module"})),Lr=dr(Wr),Me=typeof Map=="function"&&Map.prototype,ge=Object.getOwnPropertyDescriptor&&Me?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,ce=Me&&ge&&typeof ge.get=="function"?ge.get:null,Gr=Me&&Map.prototype.forEach,De=typeof Set=="function"&&Set.prototype,me=Object.getOwnPropertyDescriptor&&De?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,pe=De&&me&&typeof me.get=="function"?me.get:null,kr=De&&Set.prototype.forEach,zr=typeof WeakMap=="function"&&WeakMap.prototype,X=zr?WeakMap.prototype.has:null,Hr=typeof WeakSet=="function"&&WeakSet.prototype,Z=Hr?WeakSet.prototype.has:null,Qr=typeof WeakRef=="function"&&WeakRef.prototype,ke=Qr?WeakRef.prototype.deref:null,Vr=Boolean.prototype.valueOf,qr=Object.prototype.toString,Jr=Function.prototype.toString,Kr=String.prototype.match,Te=String.prototype.slice,N=String.prototype.replace,jr=String.prototype.toUpperCase,ze=String.prototype.toLowerCase,ar=RegExp.prototype.test,He=Array.prototype.concat,P=Array.prototype.join,Yr=Array.prototype.slice,Qe=Math.floor,we=typeof BigInt=="function"?BigInt.prototype.valueOf:null,he=Object.getOwnPropertySymbols,Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,q=typeof Symbol=="function"&&typeof Symbol.iterator=="object",S=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===q?"object":"symbol")?Symbol.toStringTag:null,or=Object.prototype.propertyIsEnumerable,Ve=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(r){return r.__proto__}:null);function qe(r,e){if(r===1/0||r===-1/0||r!==r||r&&r>-1e3&&r<1e3||ar.call(/e/,e))return e;var t=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof r=="number"){var n=r<0?-Qe(-r):Qe(r);if(n!==r){var o=String(n),a=Te.call(e,o.length+1);return N.call(o,t,"$&_")+"."+N.call(N.call(a,/([0-9]{3})/g,"$&_"),/_$/,"")}}return N.call(e,t,"$&_")}var Ee=Lr,Je=Ee.custom,Ke=fr(Je)?Je:null,Xr=function r(e,t,n,o){var a=t||{};if(R(a,"quoteStyle")&&a.quoteStyle!=="single"&&a.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(R(a,"maxStringLength")&&(typeof a.maxStringLength=="number"?a.maxStringLength<0&&a.maxStringLength!==1/0:a.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var i=R(a,"customInspect")?a.customInspect:!0;if(typeof i!="boolean"&&i!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(R(a,"indent")&&a.indent!==null&&a.indent!=="	"&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(R(a,"numericSeparator")&&typeof a.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var f=a.numericSeparator;if(typeof e=="undefined")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return ur(e,a);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var u=String(e);return f?qe(e,u):u}if(typeof e=="bigint"){var l=String(e)+"n";return f?qe(e,l):l}var c=typeof a.depth=="undefined"?5:a.depth;if(typeof n=="undefined"&&(n=0),n>=c&&c>0&&typeof e=="object")return xe(e)?"[Array]":"[Object]";var v=gt(a,n);if(typeof o=="undefined")o=[];else if(lr(o,e)>=0)return"[Circular]";function p(A,O,ne){if(O&&(o=Yr.call(o),o.push(O)),ne){var ae={depth:a.depth};return R(a,"quoteStyle")&&(ae.quoteStyle=a.quoteStyle),r(A,ae,n+1,o)}return r(A,a,n+1,o)}if(typeof e=="function"&&!je(e)){var d=ft(e),g=oe(e,p);return"[Function"+(d?": "+d:" (anonymous)")+"]"+(g.length>0?" { "+P.call(g,", ")+" }":"")}if(fr(e)){var b=q?N.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):Pe.call(e);return typeof e=="object"&&!q?Y(b):b}if(st(e)){for(var s="<"+ze.call(String(e.nodeName)),$=e.attributes||[],E=0;E<$.length;E++)s+=" "+$[E].name+"="+ir(Zr($[E].value),"double",a);return s+=">",e.childNodes&&e.childNodes.length&&(s+="..."),s+="</"+ze.call(String(e.nodeName))+">",s}if(xe(e)){if(e.length===0)return"[]";var U=oe(e,p);return v&&!dt(U)?"["+$e(U,v)+"]":"[ "+P.call(U,", ")+" ]"}if(rt(e)){var W=oe(e,p);return!("cause"in Error.prototype)&&"cause"in e&&!or.call(e,"cause")?"{ ["+String(e)+"] "+P.call(He.call("[cause]: "+p(e.cause),W),", ")+" }":W.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+P.call(W,", ")+" }"}if(typeof e=="object"&&i){if(Ke&&typeof e[Ke]=="function"&&Ee)return Ee(e,{depth:c-n});if(i!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(lt(e)){var j=[];return Gr.call(e,function(A,O){j.push(p(O,e,!0)+" => "+p(A,e))}),Ye("Map",ce.call(e),j,v)}if(pt(e)){var L=[];return kr.call(e,function(A){L.push(p(A,e))}),Ye("Set",pe.call(e),L,v)}if(ut(e))return Se("WeakMap");if(yt(e))return Se("WeakSet");if(ct(e))return Se("WeakRef");if(nt(e))return Y(p(Number(e)));if(ot(e))return Y(p(we.call(e)));if(at(e))return Y(Vr.call(e));if(tt(e))return Y(p(String(e)));if(!et(e)&&!je(e)){var G=oe(e,p),D=Ve?Ve(e)===Object.prototype:e instanceof Object||e.constructor===Object,T=e instanceof Object?"":"null prototype",F=!D&&S&&Object(e)===e&&S in e?Te.call(M(e),8,-1):T?"Object":"",te=D||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",B=te+(F||T?"["+P.call(He.call([],F||[],T||[]),": ")+"] ":"");return G.length===0?B+"{}":v?B+"{"+$e(G,v)+"}":B+"{ "+P.call(G,", ")+" }"}return String(e)};function ir(r,e,t){var n=(t.quoteStyle||e)==="double"?'"':"'";return n+r+n}function Zr(r){return N.call(String(r),/"/g,"&quot;")}function xe(r){return M(r)==="[object Array]"&&(!S||!(typeof r=="object"&&S in r))}function et(r){return M(r)==="[object Date]"&&(!S||!(typeof r=="object"&&S in r))}function je(r){return M(r)==="[object RegExp]"&&(!S||!(typeof r=="object"&&S in r))}function rt(r){return M(r)==="[object Error]"&&(!S||!(typeof r=="object"&&S in r))}function tt(r){return M(r)==="[object String]"&&(!S||!(typeof r=="object"&&S in r))}function nt(r){return M(r)==="[object Number]"&&(!S||!(typeof r=="object"&&S in r))}function at(r){return M(r)==="[object Boolean]"&&(!S||!(typeof r=="object"&&S in r))}function fr(r){if(q)return r&&typeof r=="object"&&r instanceof Symbol;if(typeof r=="symbol")return!0;if(!r||typeof r!="object"||!Pe)return!1;try{return Pe.call(r),!0}catch{}return!1}function ot(r){if(!r||typeof r!="object"||!we)return!1;try{return we.call(r),!0}catch{}return!1}var it=Object.prototype.hasOwnProperty||function(r){return r in this};function R(r,e){return it.call(r,e)}function M(r){return qr.call(r)}function ft(r){if(r.name)return r.name;var e=Kr.call(Jr.call(r),/^function\s*([\w$]+)/);return e?e[1]:null}function lr(r,e){if(r.indexOf)return r.indexOf(e);for(var t=0,n=r.length;t<n;t++)if(r[t]===e)return t;return-1}function lt(r){if(!ce||!r||typeof r!="object")return!1;try{ce.call(r);try{pe.call(r)}catch{return!0}return r instanceof Map}catch{}return!1}function ut(r){if(!X||!r||typeof r!="object")return!1;try{X.call(r,X);try{Z.call(r,Z)}catch{return!0}return r instanceof WeakMap}catch{}return!1}function ct(r){if(!ke||!r||typeof r!="object")return!1;try{return ke.call(r),!0}catch{}return!1}function pt(r){if(!pe||!r||typeof r!="object")return!1;try{pe.call(r);try{ce.call(r)}catch{return!0}return r instanceof Set}catch{}return!1}function yt(r){if(!Z||!r||typeof r!="object")return!1;try{Z.call(r,Z);try{X.call(r,X)}catch{return!0}return r instanceof WeakSet}catch{}return!1}function st(r){return!r||typeof r!="object"?!1:typeof HTMLElement!="undefined"&&r instanceof HTMLElement?!0:typeof r.nodeName=="string"&&typeof r.getAttribute=="function"}function ur(r,e){if(r.length>e.maxStringLength){var t=r.length-e.maxStringLength,n="... "+t+" more character"+(t>1?"s":"");return ur(Te.call(r,0,e.maxStringLength),e)+n}var o=N.call(N.call(r,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,vt);return ir(o,"single",e)}function vt(r){var e=r.charCodeAt(0),t={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return t?"\\"+t:"\\x"+(e<16?"0":"")+jr.call(e.toString(16))}function Y(r){return"Object("+r+")"}function Se(r){return r+" { ? }"}function Ye(r,e,t,n){var o=n?$e(t,n):P.call(t,", ");return r+" ("+e+") {"+o+"}"}function dt(r){for(var e=0;e<r.length;e++)if(lr(r[e],`
`)>=0)return!1;return!0}function gt(r,e){var t;if(r.indent==="	")t="	";else if(typeof r.indent=="number"&&r.indent>0)t=P.call(Array(r.indent+1)," ");else return null;return{base:t,prev:P.call(Array(e+1),t)}}function $e(r,e){if(r.length===0)return"";var t=`
`+e.prev+e.base;return t+P.call(r,","+t)+`
`+e.prev}function oe(r,e){var t=xe(r),n=[];if(t){n.length=r.length;for(var o=0;o<r.length;o++)n[o]=R(r,o)?e(r[o],r):""}var a=typeof he=="function"?he(r):[],i;if(q){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=a[f]}for(var u in r)!R(r,u)||t&&String(Number(u))===u&&u<r.length||q&&i["$"+u]instanceof Symbol||(ar.call(/[^\w$]/,u)?n.push(e(u,r)+": "+e(r[u],r)):n.push(u+": "+e(r[u],r)));if(typeof he=="function")for(var l=0;l<a.length;l++)or.call(r,a[l])&&n.push("["+e(a[l])+"]: "+e(r[a[l]],r));return n}var Be=Ne,K=_r,mt=Xr,ht=Be("%TypeError%"),ie=Be("%WeakMap%",!0),fe=Be("%Map%",!0),St=K("WeakMap.prototype.get",!0),bt=K("WeakMap.prototype.set",!0),Ot=K("WeakMap.prototype.has",!0),At=K("Map.prototype.get",!0),wt=K("Map.prototype.set",!0),Pt=K("Map.prototype.has",!0),Ce=function(r,e){for(var t=r,n;(n=t.next)!==null;t=n)if(n.key===e)return t.next=n.next,n.next=r.next,r.next=n,n},Et=function(r,e){var t=Ce(r,e);return t&&t.value},xt=function(r,e,t){var n=Ce(r,e);n?n.value=t:r.next={key:e,next:r.next,value:t}},$t=function(r,e){return!!Ce(r,e)},Ft=function(){var e,t,n,o={assert:function(a){if(!o.has(a))throw new ht("Side channel does not contain "+mt(a))},get:function(a){if(ie&&a&&(typeof a=="object"||typeof a=="function")){if(e)return St(e,a)}else if(fe){if(t)return At(t,a)}else if(n)return Et(n,a)},has:function(a){if(ie&&a&&(typeof a=="object"||typeof a=="function")){if(e)return Ot(e,a)}else if(fe){if(t)return Pt(t,a)}else if(n)return $t(n,a);return!1},set:function(a,i){ie&&a&&(typeof a=="object"||typeof a=="function")?(e||(e=new ie),bt(e,a,i)):fe?(t||(t=new fe),wt(t,a,i)):(n||(n={key:{},next:null}),xt(n,a,i))}};return o},It=String.prototype.replace,Rt=/%20/g,be={RFC1738:"RFC1738",RFC3986:"RFC3986"},_e={default:be.RFC3986,formatters:{RFC1738:function(r){return It.call(r,Rt,"+")},RFC3986:function(r){return String(r)}},RFC1738:be.RFC1738,RFC3986:be.RFC3986},Nt=_e,Oe=Object.prototype.hasOwnProperty,C=Array.isArray,w=function(){for(var r=[],e=0;e<256;++e)r.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return r}(),Mt=function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(C(n)){for(var o=[],a=0;a<n.length;++a)typeof n[a]!="undefined"&&o.push(n[a]);t.obj[t.prop]=o}}},cr=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)typeof e[o]!="undefined"&&(n[o]=e[o]);return n},Dt=function r(e,t,n){if(!t)return e;if(typeof t!="object"){if(C(e))e.push(t);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!Oe.call(Object.prototype,t))&&(e[t]=!0);else return[e,t];return e}if(!e||typeof e!="object")return[e].concat(t);var o=e;return C(e)&&!C(t)&&(o=cr(e,n)),C(e)&&C(t)?(t.forEach(function(a,i){if(Oe.call(e,i)){var f=e[i];f&&typeof f=="object"&&a&&typeof a=="object"?e[i]=r(f,a,n):e.push(a)}else e[i]=a}),e):Object.keys(t).reduce(function(a,i){var f=t[i];return Oe.call(a,i)?a[i]=r(a[i],f,n):a[i]=f,a},o)},Tt=function(e,t){return Object.keys(t).reduce(function(n,o){return n[o]=t[o],n},e)},Bt=function(r,e,t){var n=r.replace(/\+/g," ");if(t==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},Ct=function(e,t,n,o,a){if(e.length===0)return e;var i=e;if(typeof e=="symbol"?i=Symbol.prototype.toString.call(e):typeof e!="string"&&(i=String(e)),n==="iso-8859-1")return escape(i).replace(/%u[0-9a-f]{4}/gi,function(c){return"%26%23"+parseInt(c.slice(2),16)+"%3B"});for(var f="",u=0;u<i.length;++u){var l=i.charCodeAt(u);if(l===45||l===46||l===95||l===126||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||a===Nt.RFC1738&&(l===40||l===41)){f+=i.charAt(u);continue}if(l<128){f=f+w[l];continue}if(l<2048){f=f+(w[192|l>>6]+w[128|l&63]);continue}if(l<55296||l>=57344){f=f+(w[224|l>>12]+w[128|l>>6&63]+w[128|l&63]);continue}u+=1,l=65536+((l&1023)<<10|i.charCodeAt(u)&1023),f+=w[240|l>>18]+w[128|l>>12&63]+w[128|l>>6&63]+w[128|l&63]}return f},_t=function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],o=0;o<t.length;++o)for(var a=t[o],i=a.obj[a.prop],f=Object.keys(i),u=0;u<f.length;++u){var l=f[u],c=i[l];typeof c=="object"&&c!==null&&n.indexOf(c)===-1&&(t.push({obj:i,prop:l}),n.push(c))}return Mt(t),e},Ut=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},Wt=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},Lt=function(e,t){return[].concat(e,t)},Gt=function(e,t){if(C(e)){for(var n=[],o=0;o<e.length;o+=1)n.push(t(e[o]));return n}return t(e)},pr={arrayToObject:cr,assign:Tt,combine:Lt,compact:_t,decode:Bt,encode:Ct,isBuffer:Wt,isRegExp:Ut,maybeMap:Gt,merge:Dt},yr=Ft,Fe=pr,ee=_e,kt=Object.prototype.hasOwnProperty,Xe={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},x=Array.isArray,zt=String.prototype.split,Ht=Array.prototype.push,sr=function(r,e){Ht.apply(r,x(e)?e:[e])},Qt=Date.prototype.toISOString,Ze=ee.default,h={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:Fe.encode,encodeValuesOnly:!1,format:Ze,formatter:ee.formatters[Ze],indices:!1,serializeDate:function(e){return Qt.call(e)},skipNulls:!1,strictNullHandling:!1},Vt=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},Ae={},qt=function r(e,t,n,o,a,i,f,u,l,c,v,p,d,g,b){for(var s=e,$=b,E=0,U=!1;($=$.get(Ae))!==void 0&&!U;){var W=$.get(e);if(E+=1,typeof W!="undefined"){if(W===E)throw new RangeError("Cyclic object value");U=!0}typeof $.get(Ae)=="undefined"&&(E=0)}if(typeof f=="function"?s=f(t,s):s instanceof Date?s=c(s):n==="comma"&&x(s)&&(s=Fe.maybeMap(s,function(ye){return ye instanceof Date?c(ye):ye})),s===null){if(o)return i&&!d?i(t,h.encoder,g,"key",v):t;s=""}if(Vt(s)||Fe.isBuffer(s)){if(i){var j=d?t:i(t,h.encoder,g,"key",v);if(n==="comma"&&d){for(var L=zt.call(String(s),","),G="",D=0;D<L.length;++D)G+=(D===0?"":",")+p(i(L[D],h.encoder,g,"value",v));return[p(j)+(x(s)&&L.length===1?"[]":"")+"="+G]}return[p(j)+"="+p(i(s,h.encoder,g,"value",v))]}return[p(t)+"="+p(String(s))]}var T=[];if(typeof s=="undefined")return T;var F;if(n==="comma"&&x(s))F=[{value:s.length>0?s.join(",")||null:void 0}];else if(x(f))F=f;else{var te=Object.keys(s);F=u?te.sort(u):te}for(var B=n==="comma"&&x(s)&&s.length===1?t+"[]":t,A=0;A<F.length;++A){var O=F[A],ne=typeof O=="object"&&typeof O.value!="undefined"?O.value:s[O];if(!(a&&ne===null)){var ae=x(s)?typeof n=="function"?n(B,O):B:B+(l?"."+O:"["+O+"]");b.set(e,E);var Ue=yr();Ue.set(Ae,b),sr(T,r(ne,ae,n,o,a,i,f,u,l,c,v,p,d,g,Ue))}}return T},Jt=function(e){if(!e)return h;if(e.encoder!==null&&typeof e.encoder!="undefined"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var t=e.charset||h.charset;if(typeof e.charset!="undefined"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=ee.default;if(typeof e.format!="undefined"){if(!kt.call(ee.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var o=ee.formatters[n],a=h.filter;return(typeof e.filter=="function"||x(e.filter))&&(a=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:h.addQueryPrefix,allowDots:typeof e.allowDots=="undefined"?h.allowDots:!!e.allowDots,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:h.charsetSentinel,delimiter:typeof e.delimiter=="undefined"?h.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:h.encode,encoder:typeof e.encoder=="function"?e.encoder:h.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:h.encodeValuesOnly,filter:a,format:n,formatter:o,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:h.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:h.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:h.strictNullHandling}},Kt=function(r,e){var t=r,n=Jt(e),o,a;typeof n.filter=="function"?(a=n.filter,t=a("",t)):x(n.filter)&&(a=n.filter,o=a);var i=[];if(typeof t!="object"||t===null)return"";var f;e&&e.arrayFormat in Xe?f=e.arrayFormat:e&&"indices"in e?f=e.indices?"indices":"repeat":f="indices";var u=Xe[f];o||(o=Object.keys(t)),n.sort&&o.sort(n.sort);for(var l=yr(),c=0;c<o.length;++c){var v=o[c];n.skipNulls&&t[v]===null||sr(i,qt(t[v],v,u,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,l))}var p=i.join(n.delimiter),d=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?d+="utf8=%26%2310003%3B&":d+="utf8=%E2%9C%93&"),p.length>0?d+p:""},J=pr,Ie=Object.prototype.hasOwnProperty,jt=Array.isArray,m={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:J.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Yt=function(r){return r.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},vr=function(r,e){return r&&typeof r=="string"&&e.comma&&r.indexOf(",")>-1?r.split(","):r},Xt="utf8=%26%2310003%3B",Zt="utf8=%E2%9C%93",en=function(e,t){var n={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,i=o.split(t.delimiter,a),f=-1,u,l=t.charset;if(t.charsetSentinel)for(u=0;u<i.length;++u)i[u].indexOf("utf8=")===0&&(i[u]===Zt?l="utf-8":i[u]===Xt&&(l="iso-8859-1"),f=u,u=i.length);for(u=0;u<i.length;++u)if(u!==f){var c=i[u],v=c.indexOf("]="),p=v===-1?c.indexOf("="):v+1,d,g;p===-1?(d=t.decoder(c,m.decoder,l,"key"),g=t.strictNullHandling?null:""):(d=t.decoder(c.slice(0,p),m.decoder,l,"key"),g=J.maybeMap(vr(c.slice(p+1),t),function(b){return t.decoder(b,m.decoder,l,"value")})),g&&t.interpretNumericEntities&&l==="iso-8859-1"&&(g=Yt(g)),c.indexOf("[]=")>-1&&(g=jt(g)?[g]:g),Ie.call(n,d)?n[d]=J.combine(n[d],g):n[d]=g}return n},rn=function(r,e,t,n){for(var o=n?e:vr(e,t),a=r.length-1;a>=0;--a){var i,f=r[a];if(f==="[]"&&t.parseArrays)i=[].concat(o);else{i=t.plainObjects?Object.create(null):{};var u=f.charAt(0)==="["&&f.charAt(f.length-1)==="]"?f.slice(1,-1):f,l=parseInt(u,10);!t.parseArrays&&u===""?i={0:o}:!isNaN(l)&&f!==u&&String(l)===u&&l>=0&&t.parseArrays&&l<=t.arrayLimit?(i=[],i[l]=o):u!=="__proto__"&&(i[u]=o)}o=i}return o},tn=function(e,t,n,o){if(!!e){var a=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,f=/(\[[^[\]]*])/g,u=n.depth>0&&i.exec(a),l=u?a.slice(0,u.index):a,c=[];if(l){if(!n.plainObjects&&Ie.call(Object.prototype,l)&&!n.allowPrototypes)return;c.push(l)}for(var v=0;n.depth>0&&(u=f.exec(a))!==null&&v<n.depth;){if(v+=1,!n.plainObjects&&Ie.call(Object.prototype,u[1].slice(1,-1))&&!n.allowPrototypes)return;c.push(u[1])}return u&&c.push("["+a.slice(u.index)+"]"),rn(c,t,n,o)}},nn=function(e){if(!e)return m;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset!="undefined"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=typeof e.charset=="undefined"?m.charset:e.charset;return{allowDots:typeof e.allowDots=="undefined"?m.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:m.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:m.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:m.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:m.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:m.comma,decoder:typeof e.decoder=="function"?e.decoder:m.decoder,delimiter:typeof e.delimiter=="string"||J.isRegExp(e.delimiter)?e.delimiter:m.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:m.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:m.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:m.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:m.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:m.strictNullHandling}},an=function(r,e){var t=nn(e);if(r===""||r===null||typeof r=="undefined")return t.plainObjects?Object.create(null):{};for(var n=typeof r=="string"?en(r,t):r,o=t.plainObjects?Object.create(null):{},a=Object.keys(n),i=0;i<a.length;++i){var f=a[i],u=tn(f,n[f],t,typeof r=="string");o=J.merge(o,u,t)}return t.allowSparse===!0?o:J.compact(o)},on=Kt,fn=an,ln=_e,cn={formats:ln,parse:fn,stringify:on};export{cn as l};