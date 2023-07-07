/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1157],{13:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.s16=e.s8=e.nu64be=e.u48be=e.u40be=e.u32be=e.u24be=e.u16be=e.nu64=e.u48=e.u40=e.u32=e.u24=e.u16=e.u8=e.offset=e.greedy=e.Constant=e.UTF8=e.CString=e.Blob=e.Boolean=e.BitField=e.BitStructure=e.VariantLayout=e.Union=e.UnionLayoutDiscriminator=e.UnionDiscriminator=e.Structure=e.Sequence=e.DoubleBE=e.Double=e.FloatBE=e.Float=e.NearInt64BE=e.NearInt64=e.NearUInt64BE=e.NearUInt64=e.IntBE=e.Int=e.UIntBE=e.UInt=e.OffsetLayout=e.GreedyCount=e.ExternalLayout=e.bindConstructorLayout=e.nameWithProperty=e.Layout=e.uint8ArrayToBuffer=e.checkUint8Array=void 0,e.constant=e.utf8=e.cstr=e.blob=e.unionLayoutDiscriminator=e.union=e.seq=e.bits=e.struct=e.f64be=e.f64=e.f32be=e.f32=e.ns64be=e.s48be=e.s40be=e.s32be=e.s24be=e.s16be=e.ns64=e.s48=e.s40=e.s32=e.s24=void 0;const n=r(20);function o(b){if(!(b instanceof Uint8Array))throw new TypeError("b must be a Uint8Array")}function c(b){return o(b),n.Buffer.from(b.buffer,b.byteOffset,b.length)}e.checkUint8Array=o,e.uint8ArrayToBuffer=c;class d{constructor(span,t){if(!Number.isInteger(span))throw new TypeError("span must be an integer");this.span=span,this.property=t}makeDestinationObject(){return{}}getSpan(b,t){if(0>this.span)throw new RangeError("indeterminate span");return this.span}replicate(t){const e=Object.create(this.constructor.prototype);return Object.assign(e,this),e.property=t,e}fromArray(t){}}function h(t,e){return e.property?t+"["+e.property+"]":t}e.Layout=d,e.nameWithProperty=h,e.bindConstructorLayout=function(t,e){if("function"!=typeof t)throw new TypeError("Class must be constructor");if(Object.prototype.hasOwnProperty.call(t,"layout_"))throw new Error("Class is already bound to a layout");if(!(e&&e instanceof d))throw new TypeError("layout must be a Layout");if(Object.prototype.hasOwnProperty.call(e,"boundConstructor_"))throw new Error("layout is already bound to a constructor");t.layout_=e,e.boundConstructor_=t,e.makeDestinationObject=()=>new t,Object.defineProperty(t.prototype,"encode",{value(b,t){return e.encode(this,b,t)},writable:!0}),Object.defineProperty(t,"decode",{value:(b,t)=>e.decode(b,t),writable:!0})};class l extends d{isCount(){throw new Error("ExternalLayout is abstract")}}e.ExternalLayout=l;class f extends l{constructor(t=1,e){if(!Number.isInteger(t)||0>=t)throw new TypeError("elementSpan must be a (positive) integer");super(-1,e),this.elementSpan=t}isCount(){return!0}decode(b,t=0){o(b);const e=b.length-t;return Math.floor(e/this.elementSpan)}encode(t,b,e){return 0}}e.GreedyCount=f;class y extends l{constructor(t,e=0,r){if(!(t instanceof d))throw new TypeError("layout must be a Layout");if(!Number.isInteger(e))throw new TypeError("offset must be integer or undefined");super(t.span,r||t.property),this.layout=t,this.offset=e}isCount(){return this.layout instanceof w||this.layout instanceof m}decode(b,t=0){return this.layout.decode(b,t+this.offset)}encode(t,b,e=0){return this.layout.encode(t,b,e+this.offset)}}e.OffsetLayout=y;class w extends d{constructor(span,t){if(super(span,t),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(b,t=0){return c(b).readUIntLE(t,this.span)}encode(t,b,e=0){return c(b).writeUIntLE(t,e,this.span),this.span}}e.UInt=w;class m extends d{constructor(span,t){if(super(span,t),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(b,t=0){return c(b).readUIntBE(t,this.span)}encode(t,b,e=0){return c(b).writeUIntBE(t,e,this.span),this.span}}e.UIntBE=m;class E extends d{constructor(span,t){if(super(span,t),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(b,t=0){return c(b).readIntLE(t,this.span)}encode(t,b,e=0){return c(b).writeIntLE(t,e,this.span),this.span}}e.Int=E;class x extends d{constructor(span,t){if(super(span,t),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(b,t=0){return c(b).readIntBE(t,this.span)}encode(t,b,e=0){return c(b).writeIntBE(t,e,this.span),this.span}}e.IntBE=x;const L=Math.pow(2,32);function v(t){const e=Math.floor(t/L);return{hi32:e,lo32:t-e*L}}function S(t,e){return t*L+e}class I extends d{constructor(t){super(8,t)}decode(b,t=0){const e=c(b),r=e.readUInt32LE(t);return S(e.readUInt32LE(t+4),r)}encode(t,b,e=0){const r=v(t),n=c(b);return n.writeUInt32LE(r.lo32,e),n.writeUInt32LE(r.hi32,e+4),8}}e.NearUInt64=I;class B extends d{constructor(t){super(8,t)}decode(b,t=0){const e=c(b);return S(e.readUInt32BE(t),e.readUInt32BE(t+4))}encode(t,b,e=0){const r=v(t),n=c(b);return n.writeUInt32BE(r.hi32,e),n.writeUInt32BE(r.lo32,e+4),8}}e.NearUInt64BE=B;class U extends d{constructor(t){super(8,t)}decode(b,t=0){const e=c(b),r=e.readUInt32LE(t);return S(e.readInt32LE(t+4),r)}encode(t,b,e=0){const r=v(t),n=c(b);return n.writeUInt32LE(r.lo32,e),n.writeInt32LE(r.hi32,e+4),8}}e.NearInt64=U;class D extends d{constructor(t){super(8,t)}decode(b,t=0){const e=c(b);return S(e.readInt32BE(t),e.readUInt32BE(t+4))}encode(t,b,e=0){const r=v(t),n=c(b);return n.writeInt32BE(r.hi32,e),n.writeUInt32BE(r.lo32,e+4),8}}e.NearInt64BE=D;class T extends d{constructor(t){super(4,t)}decode(b,t=0){return c(b).readFloatLE(t)}encode(t,b,e=0){return c(b).writeFloatLE(t,e),4}}e.Float=T;class O extends d{constructor(t){super(4,t)}decode(b,t=0){return c(b).readFloatBE(t)}encode(t,b,e=0){return c(b).writeFloatBE(t,e),4}}e.FloatBE=O;class k extends d{constructor(t){super(8,t)}decode(b,t=0){return c(b).readDoubleLE(t)}encode(t,b,e=0){return c(b).writeDoubleLE(t,e),8}}e.Double=k;class P extends d{constructor(t){super(8,t)}decode(b,t=0){return c(b).readDoubleBE(t)}encode(t,b,e=0){return c(b).writeDoubleBE(t,e),8}}e.DoubleBE=P;class j extends d{constructor(t,e,r){if(!(t instanceof d))throw new TypeError("elementLayout must be a Layout");if(!(e instanceof l&&e.isCount()||Number.isInteger(e)&&0<=e))throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");let span=-1;!(e instanceof l)&&0<t.span&&(span=e*t.span),super(span,r),this.elementLayout=t,this.count=e}getSpan(b,t=0){if(0<=this.span)return this.span;let span=0,e=this.count;if(e instanceof l&&(e=e.decode(b,t)),0<this.elementLayout.span)span=e*this.elementLayout.span;else{let r=0;for(;r<e;)span+=this.elementLayout.getSpan(b,t+span),++r}return span}decode(b,t=0){const e=[];let i=0,r=this.count;for(r instanceof l&&(r=r.decode(b,t));i<r;)e.push(this.elementLayout.decode(b,t)),t+=this.elementLayout.getSpan(b,t),i+=1;return e}encode(t,b,e=0){const r=this.elementLayout,span=t.reduce(((span,t)=>span+r.encode(t,b,e+span)),0);return this.count instanceof l&&this.count.encode(t.length,b,e),span}}e.Sequence=j;class C extends d{constructor(t,e,r){if(!Array.isArray(t)||!t.reduce(((t,e)=>t&&e instanceof d),!0))throw new TypeError("fields must be array of Layout instances");"boolean"==typeof e&&void 0===r&&(r=e,e=void 0);for(const e of t)if(0>e.span&&void 0===e.property)throw new Error("fields cannot contain unnamed variable-length layout");let span=-1;try{span=t.reduce(((span,t)=>span+t.getSpan()),0)}catch(t){}super(span,e),this.fields=t,this.decodePrefixes=!!r}getSpan(b,t=0){if(0<=this.span)return this.span;let span=0;try{span=this.fields.reduce(((span,e)=>{const r=e.getSpan(b,t);return t+=r,span+r}),0)}catch(t){throw new RangeError("indeterminate span")}return span}decode(b,t=0){o(b);const e=this.makeDestinationObject();for(const r of this.fields)if(void 0!==r.property&&(e[r.property]=r.decode(b,t)),t+=r.getSpan(b,t),this.decodePrefixes&&b.length===t)break;return e}encode(t,b,e=0){const r=e;let n=0,o=0;for(const r of this.fields){let span=r.span;if(o=0<span?span:0,void 0!==r.property){const n=t[r.property];void 0!==n&&(o=r.encode(n,b,e),0>span&&(span=r.getSpan(b,e)))}n=e,e+=span}return n+o-r}fromArray(t){const e=this.makeDestinationObject();for(const r of this.fields)void 0!==r.property&&0<t.length&&(e[r.property]=t.shift());return e}layoutFor(t){if("string"!=typeof t)throw new TypeError("property must be string");for(const e of this.fields)if(e.property===t)return e}offsetOf(t){if("string"!=typeof t)throw new TypeError("property must be string");let e=0;for(const r of this.fields){if(r.property===t)return e;0>r.span?e=-1:0<=e&&(e+=r.span)}}}e.Structure=C;class V{constructor(t){this.property=t}decode(b,t){throw new Error("UnionDiscriminator is abstract")}encode(t,b,e){throw new Error("UnionDiscriminator is abstract")}}e.UnionDiscriminator=V;class N extends V{constructor(t,e){if(!(t instanceof l&&t.isCount()))throw new TypeError("layout must be an unsigned integer ExternalLayout");super(e||t.property||"variant"),this.layout=t}decode(b,t){return this.layout.decode(b,t)}encode(t,b,e){return this.layout.encode(t,b,e)}}e.UnionLayoutDiscriminator=N;class A extends d{constructor(t,e,r){let n;if(t instanceof w||t instanceof m)n=new N(new y(t));else if(t instanceof l&&t.isCount())n=new N(t);else{if(!(t instanceof V))throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");n=t}if(void 0===e&&(e=null),!(null===e||e instanceof d))throw new TypeError("defaultLayout must be null or a Layout");if(null!==e){if(0>e.span)throw new Error("defaultLayout must have constant span");void 0===e.property&&(e=e.replicate("content"))}let span=-1;e&&(span=e.span,0<=span&&(t instanceof w||t instanceof m)&&(span+=n.layout.span)),super(span,r),this.discriminator=n,this.usesPrefixDiscriminator=t instanceof w||t instanceof m,this.defaultLayout=e,this.registry={};let o=this.defaultGetSourceVariant.bind(this);this.getSourceVariant=function(t){return o(t)},this.configGetSourceVariant=function(t){o=t.bind(this)}}getSpan(b,t=0){if(0<=this.span)return this.span;const e=this.getVariant(b,t);if(!e)throw new Error("unable to determine span for unrecognized variant");return e.getSpan(b,t)}defaultGetSourceVariant(t){if(Object.prototype.hasOwnProperty.call(t,this.discriminator.property)){if(this.defaultLayout&&this.defaultLayout.property&&Object.prototype.hasOwnProperty.call(t,this.defaultLayout.property))return;const e=this.registry[t[this.discriminator.property]];if(e&&(!e.layout||e.property&&Object.prototype.hasOwnProperty.call(t,e.property)))return e}else for(const e in this.registry){const r=this.registry[e];if(r.property&&Object.prototype.hasOwnProperty.call(t,r.property))return r}throw new Error("unable to infer src variant")}decode(b,t=0){let e;const r=this.discriminator,n=r.decode(b,t),o=this.registry[n];if(void 0===o){const o=this.defaultLayout;let c=0;this.usesPrefixDiscriminator&&(c=r.layout.span),e=this.makeDestinationObject(),e[r.property]=n,e[o.property]=o.decode(b,t+c)}else e=o.decode(b,t);return e}encode(t,b,e=0){const r=this.getSourceVariant(t);if(void 0===r){const r=this.discriminator,n=this.defaultLayout;let o=0;return this.usesPrefixDiscriminator&&(o=r.layout.span),r.encode(t[r.property],b,e),o+n.encode(t[n.property],b,e+o)}return r.encode(t,b,e)}addVariant(t,e,r){const n=new F(this,t,e,r);return this.registry[t]=n,n}getVariant(t,e=0){let r;return r=t instanceof Uint8Array?this.discriminator.decode(t,e):t,this.registry[r]}}e.Union=A;class F extends d{constructor(t,e,r,n){if(!(t instanceof A))throw new TypeError("union must be a Union");if(!Number.isInteger(e)||0>e)throw new TypeError("variant must be a (non-negative) integer");if("string"==typeof r&&void 0===n&&(n=r,r=null),r){if(!(r instanceof d))throw new TypeError("layout must be a Layout");if(null!==t.defaultLayout&&0<=r.span&&r.span>t.defaultLayout.span)throw new Error("variant span exceeds span of containing union");if("string"!=typeof n)throw new TypeError("variant must have a String property")}let span=t.span;0>t.span&&(span=r?r.span:0,0<=span&&t.usesPrefixDiscriminator&&(span+=t.discriminator.layout.span)),super(span,n),this.union=t,this.variant=e,this.layout=r||null}getSpan(b,t=0){if(0<=this.span)return this.span;let e=0;this.union.usesPrefixDiscriminator&&(e=this.union.discriminator.layout.span);let span=0;return this.layout&&(span=this.layout.getSpan(b,t+e)),e+span}decode(b,t=0){const e=this.makeDestinationObject();if(this!==this.union.getVariant(b,t))throw new Error("variant mismatch");let r=0;return this.union.usesPrefixDiscriminator&&(r=this.union.discriminator.layout.span),this.layout?e[this.property]=this.layout.decode(b,t+r):this.property?e[this.property]=!0:this.union.usesPrefixDiscriminator&&(e[this.union.discriminator.property]=this.variant),e}encode(t,b,e=0){let r=0;if(this.union.usesPrefixDiscriminator&&(r=this.union.discriminator.layout.span),this.layout&&!Object.prototype.hasOwnProperty.call(t,this.property))throw new TypeError("variant lacks property "+this.property);this.union.discriminator.encode(this.variant,b,e);let span=r;if(this.layout&&(this.layout.encode(t[this.property],b,e+r),span+=this.layout.getSpan(b,e+r),0<=this.union.span&&span>this.union.span))throw new Error("encoded variant overruns containing union");return span}fromArray(t){if(this.layout)return this.layout.fromArray(t)}}function _(t){return 0>t&&(t+=4294967296),t}e.VariantLayout=F;class M extends d{constructor(t,e,r){if(!(t instanceof w||t instanceof m))throw new TypeError("word must be a UInt or UIntBE layout");if("string"==typeof e&&void 0===r&&(r=e,e=!1),4<t.span)throw new RangeError("word cannot exceed 32 bits");super(t.span,r),this.word=t,this.msb=!!e,this.fields=[];let n=0;this._packedSetValue=function(t){return n=_(t),this},this._packedGetValue=function(){return n}}decode(b,t=0){const e=this.makeDestinationObject(),r=this.word.decode(b,t);this._packedSetValue(r);for(const t of this.fields)void 0!==t.property&&(e[t.property]=t.decode(b));return e}encode(t,b,e=0){const r=this.word.decode(b,e);this._packedSetValue(r);for(const e of this.fields)if(void 0!==e.property){const r=t[e.property];void 0!==r&&e.encode(r)}return this.word.encode(this._packedGetValue(),b,e)}addField(t,e){const r=new R(this,t,e);return this.fields.push(r),r}addBoolean(t){const e=new G(this,t);return this.fields.push(e),e}fieldFor(t){if("string"!=typeof t)throw new TypeError("property must be string");for(const e of this.fields)if(e.property===t)return e}}e.BitStructure=M;class R{constructor(t,e,r){if(!(t instanceof M))throw new TypeError("container must be a BitStructure");if(!Number.isInteger(e)||0>=e)throw new TypeError("bits must be positive integer");const n=8*t.span,o=t.fields.reduce(((t,e)=>t+e.bits),0);if(e+o>n)throw new Error("bits too long for span remainder ("+(n-o)+" of "+n+" remain)");this.container=t,this.bits=e,this.valueMask=(1<<e)-1,32===e&&(this.valueMask=4294967295),this.start=o,this.container.msb&&(this.start=n-o-e),this.wordMask=_(this.valueMask<<this.start),this.property=r}decode(b,t){return _(this.container._packedGetValue()&this.wordMask)>>>this.start}encode(t){if("number"!=typeof t||!Number.isInteger(t)||t!==_(t&this.valueMask))throw new TypeError(h("BitField.encode",this)+" value must be integer not exceeding "+this.valueMask);const e=this.container._packedGetValue(),r=_(t<<this.start);this.container._packedSetValue(_(e&~this.wordMask)|r)}}e.BitField=R;class G extends R{constructor(t,e){super(t,1,e)}decode(b,t){return!!super.decode(b,t)}encode(t){"boolean"==typeof t&&(t=+t),super.encode(t)}}e.Boolean=G;class J extends d{constructor(t,e){if(!(t instanceof l&&t.isCount()||Number.isInteger(t)&&0<=t))throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");let span=-1;t instanceof l||(span=t),super(span,e),this.length=t}getSpan(b,t){let span=this.span;return 0>span&&(span=this.length.decode(b,t)),span}decode(b,t=0){let span=this.span;return 0>span&&(span=this.length.decode(b,t)),c(b).slice(t,t+span)}encode(t,b,e){let span=this.length;if(this.length instanceof l&&(span=t.length),!(t instanceof Uint8Array&&span===t.length))throw new TypeError(h("Blob.encode",this)+" requires (length "+span+") Uint8Array as src");if(e+span>b.length)throw new RangeError("encoding overruns Uint8Array");const r=c(t);return c(b).write(r.toString("hex"),e,span,"hex"),this.length instanceof l&&this.length.encode(span,b,e),span}}e.Blob=J;class W extends d{constructor(t){super(-1,t)}getSpan(b,t=0){o(b);let e=t;for(;e<b.length&&0!==b[e];)e+=1;return 1+e-t}decode(b,t=0){const span=this.getSpan(b,t);return c(b).slice(t,t+span-1).toString("utf-8")}encode(t,b,e=0){"string"!=typeof t&&(t=String(t));const r=n.Buffer.from(t,"utf8"),span=r.length;if(e+span>b.length)throw new RangeError("encoding overruns Buffer");const o=c(b);return r.copy(o,e),o[e+span]=0,span+1}}e.CString=W;class z extends d{constructor(t,e){if("string"==typeof t&&void 0===e&&(e=t,t=void 0),void 0===t)t=-1;else if(!Number.isInteger(t))throw new TypeError("maxSpan must be an integer");super(-1,e),this.maxSpan=t}getSpan(b,t=0){return o(b),b.length-t}decode(b,t=0){const span=this.getSpan(b,t);if(0<=this.maxSpan&&this.maxSpan<span)throw new RangeError("text length exceeds maxSpan");return c(b).slice(t,t+span).toString("utf-8")}encode(t,b,e=0){"string"!=typeof t&&(t=String(t));const r=n.Buffer.from(t,"utf8"),span=r.length;if(0<=this.maxSpan&&this.maxSpan<span)throw new RangeError("text length exceeds maxSpan");if(e+span>b.length)throw new RangeError("encoding overruns Buffer");return r.copy(c(b),e),span}}e.UTF8=z;class H extends d{constructor(t,e){super(0,e),this.value=t}decode(b,t){return this.value}encode(t,b,e){return 0}}e.Constant=H,e.greedy=(t,e)=>new f(t,e),e.offset=(t,e,r)=>new y(t,e,r),e.u8=t=>new w(1,t),e.u16=t=>new w(2,t),e.u24=t=>new w(3,t),e.u32=t=>new w(4,t),e.u40=t=>new w(5,t),e.u48=t=>new w(6,t),e.nu64=t=>new I(t),e.u16be=t=>new m(2,t),e.u24be=t=>new m(3,t),e.u32be=t=>new m(4,t),e.u40be=t=>new m(5,t),e.u48be=t=>new m(6,t),e.nu64be=t=>new B(t),e.s8=t=>new E(1,t),e.s16=t=>new E(2,t),e.s24=t=>new E(3,t),e.s32=t=>new E(4,t),e.s40=t=>new E(5,t),e.s48=t=>new E(6,t),e.ns64=t=>new U(t),e.s16be=t=>new x(2,t),e.s24be=t=>new x(3,t),e.s32be=t=>new x(4,t),e.s40be=t=>new x(5,t),e.s48be=t=>new x(6,t),e.ns64be=t=>new D(t),e.f32=t=>new T(t),e.f32be=t=>new O(t),e.f64=t=>new k(t),e.f64be=t=>new P(t),e.struct=(t,e,r)=>new C(t,e,r),e.bits=(t,e,r)=>new M(t,e,r),e.seq=(t,e,r)=>new j(t,e,r),e.union=(t,e,r)=>new A(t,e,r),e.unionLayoutDiscriminator=(t,e)=>new N(t,e),e.blob=(t,e)=>new J(t,e),e.cstr=t=>new W(t),e.utf8=(t,e)=>new z(t,e),e.constant=(t,e)=>new H(t,e)}}]);