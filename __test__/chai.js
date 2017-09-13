(function(e){if(typeof exports=="object"&&typeof module!="undefined")module.exports=e();else if(typeof define=="function"&&define.amd)define([],e);else{var t;typeof window!="undefined"?t=window:typeof global!="undefined"?t=global:typeof self!="undefined"?t=self:t=this,t.chai=e()}})(function(){var e,t,n;return function r(e,t,n){function i(o,u){if(!t[o]){if(!e[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(s)return s(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=t[o]={exports:{}};e[o][0].call(l.exports,function(t){var n=e[o][1][t];return i(n?n:t)},l,l.exports,r,e,t,n)}return t[o].exports}var s=typeof require=="function"&&require;for(var o=0;o<n.length;o++)i(n[o]);return i}({1:[function(e,t,n){t.exports=e("./lib/chai")},{"./lib/chai":2}],2:[function(e,t,n){var r=[],n=t.exports={};n.version="3.5.0",n.AssertionError=e("assertion-error");var i=e("./chai/utils");n.use=function(e){return~r.indexOf(e)||(e(this,i),r.push(e)),this},n.util=i;var s=e("./chai/config");n.config=s;var o=e("./chai/assertion");n.use(o);var u=e("./chai/core/assertions");n.use(u);var a=e("./chai/interface/expect");n.use(a);var f=e("./chai/interface/should");n.use(f);var l=e("./chai/interface/assert");n.use(l)},{"./chai/assertion":3,"./chai/config":4,"./chai/core/assertions":5,"./chai/interface/assert":6,"./chai/interface/expect":7,"./chai/interface/should":8,"./chai/utils":22,"assertion-error":30}],3:[function(e,t,n){var r=e("./config");t.exports=function(e,t){function s(e,t,n){i(this,"ssfi",n||arguments.callee),i(this,"object",e),i(this,"message",t)}var n=e.AssertionError,i=t.flag;e.Assertion=s,Object.defineProperty(s,"includeStack",{get:function(){return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),r.includeStack},set:function(e){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),r.includeStack=e}}),Object.defineProperty(s,"showDiff",{get:function(){return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),r.showDiff},set:function(e){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),r.showDiff=e}}),s.addProperty=function(e,n){t.addProperty(this.prototype,e,n)},s.addMethod=function(e,n){t.addMethod(this.prototype,e,n)},s.addChainableMethod=function(e,n,r){t.addChainableMethod(this.prototype,e,n,r)},s.overwriteProperty=function(e,n){t.overwriteProperty(this.prototype,e,n)},s.overwriteMethod=function(e,n){t.overwriteMethod(this.prototype,e,n)},s.overwriteChainableMethod=function(e,n,r){t.overwriteChainableMethod(this.prototype,e,n,r)},s.prototype.assert=function(e,s,o,u,a,f){var l=t.test(this,arguments);!0!==f&&(f=!1),!0!==r.showDiff&&(f=!1);if(!l){var s=t.getMessage(this,arguments),c=t.getActual(this,arguments);throw new n(s,{actual:c,expected:u,showDiff:f},r.includeStack?this.assert:i(this,"ssfi"))}},Object.defineProperty(s.prototype,"_obj",{get:function(){return i(this,"object")},set:function(e){i(this,"object",e)}})}},{"./config":4}],4:[function(e,t,n){t.exports={includeStack:!1,showDiff:!0,truncateThreshold:40}},{}],5:[function(e,t,n){t.exports=function(e,t){function s(e,n){n&&i(this,"message",n),e=e.toLowerCase();var r=i(this,"object"),s=~["a","e","i","o","u"].indexOf(e.charAt(0))?"an ":"a ";this.assert(e===t.type(r),"expected #{this} to be "+s+e,"expected #{this} not to be "+s+e)}function o(){i(this,"contains",!0)}function u(e,r){t.expectTypes(this,["array","object","string"]),r&&i(this,"message",r);var s=i(this,"object"),o=!1;if(t.type(s)==="array"&&t.type(e)==="object"){for(var u in s)if(t.eql(s[u],e)){o=!0;break}}else if(t.type(e)==="object"){if(!i(this,"negate")){for(var a in e)(new n(s)).property(a,e[a]);return}var f={};for(var a in e)f[a]=s[a];o=t.eql(f,e)}else o=s!=undefined&&~s.indexOf(e);this.assert(o,"expected #{this} to include "+t.inspect(e),"expected #{this} to not include "+t.inspect(e))}function a(){var e=i(this,"object"),t=Object.prototype.toString.call(e);this.assert("[object Arguments]"===t,"expected #{this} to be arguments but got "+t,"expected #{this} to not be arguments")}function f(e,t){t&&i(this,"message",t);var n=i(this,"object");if(i(this,"deep"))return this.eql(e);this.assert(e===n,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",e,this._obj,!0)}function l(e,n){n&&i(this,"message",n),this.assert(t.eql(e,i(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",e,this._obj,!0)}function c(e,t){t&&i(this,"message",t);var r=i(this,"object");if(i(this,"doLength")){(new n(r,t)).to.have.property("length");var s=r.length;this.assert(s>e,"expected #{this} to have a length above #{exp} but got #{act}","expected #{this} to not have a length above #{exp}",e,s)}else this.assert(r>e,"expected #{this} to be above "+e,"expected #{this} to be at most "+e)}function h(e,t){t&&i(this,"message",t);var r=i(this,"object");if(i(this,"doLength")){(new n(r,t)).to.have.property("length");var s=r.length;this.assert(s>=e,"expected #{this} to have a length at least #{exp} but got #{act}","expected #{this} to have a length below #{exp}",e,s)}else this.assert(r>=e,"expected #{this} to be at least "+e,"expected #{this} to be below "+e)}function p(e,t){t&&i(this,"message",t);var r=i(this,"object");if(i(this,"doLength")){(new n(r,t)).to.have.property("length");var s=r.length;this.assert(s<e,"expected #{this} to have a length below #{exp} but got #{act}","expected #{this} to not have a length below #{exp}",e,s)}else this.assert(r<e,"expected #{this} to be below "+e,"expected #{this} to be at least "+e)}function d(e,t){t&&i(this,"message",t);var r=i(this,"object");if(i(this,"doLength")){(new n(r,t)).to.have.property("length");var s=r.length;this.assert(s<=e,"expected #{this} to have a length at most #{exp} but got #{act}","expected #{this} to have a length above #{exp}",e,s)}else this.assert(r<=e,"expected #{this} to be at most "+e,"expected #{this} to be above "+e)}function v(e,n){n&&i(this,"message",n);var r=t.getName(e);this.assert(i(this,"object")instanceof e,"expected #{this} to be an instance of "+r,"expected #{this} to not be an instance of "+r)}function m(e,n){n&&i(this,"message",n);var r=i(this,"object");this.assert(r.hasOwnProperty(e),"expected #{this} to have own property "+t.inspect(e),"expected #{this} to not have own property "+t.inspect(e))}function g(e,n,r){typeof n=="string"&&(r=n,n=null),r&&i(this,"message",r);var s=i(this,"object"),o=Object.getOwnPropertyDescriptor(Object(s),e);o&&n?this.assert(t.eql(n,o),"expected the own property descriptor for "+t.inspect(e)+" on #{this} to match "+t.inspect(n)+", got "+t.inspect(o),"expected the own property descriptor for "+t.inspect(e)+" on #{this} to not match "+t.inspect(n),n,o,!0):this.assert(o,"expected #{this} to have an own property descriptor for "+t.inspect(e),"expected #{this} to not have an own property descriptor for "+t.inspect(e)),i(this,"object",o)}function y(){i(this,"doLength",!0)}function b(e,t){t&&i(this,"message",t);var r=i(this,"object");(new n(r,t)).to.have.property("length");var s=r.length;this.assert(s==e,"expected #{this} to have a length of #{exp} but got #{act}","expected #{this} to not have a length of #{act}",e,s)}function w(e,t){t&&i(this,"message",t);var n=i(this,"object");this.assert(e.exec(n),"expected #{this} to match "+e,"expected #{this} not to match "+e)}function E(e){var n=i(this,"object"),r,s=!0,o="keys must be given single argument of Array|Object|String, or multiple String arguments";switch(t.type(e)){case"array":if(arguments.length>1)throw new Error(o);break;case"object":if(arguments.length>1)throw new Error(o);e=Object.keys(e);break;default:e=Array.prototype.slice.call(arguments)}if(!e.length)throw new Error("keys required");var u=Object.keys(n),a=e,f=e.length,l=i(this,"any"),c=i(this,"all");!l&&!c&&(c=!0);if(l){var h=a.filter(function(e){return~u.indexOf(e)});s=h.length>0}c&&(s=e.every(function(e){return~u.indexOf(e)}),!i(this,"negate")&&!i(this,"contains")&&(s=s&&e.length==u.length));if(f>1){e=e.map(function(e){return t.inspect(e)});var p=e.pop();c&&(r=e.join(", ")+", and "+p),l&&(r=e.join(", ")+", or "+p)}else r=t.inspect(e[0]);r=(f>1?"keys ":"key ")+r,r=(i(this,"contains")?"contain ":"have ")+r,this.assert(s,"expected #{this} to "+r,"expected #{this} to not "+r,a.slice(0).sort(),u.sort(),!0)}function S(e,r,s){s&&i(this,"message",s);var o=i(this,"object");(new n(o,s)).is.a("function");var u=!1,a=null,f=null,l=null;if(arguments.length===0)r=null,e=null;else if(e&&(e instanceof RegExp||"string"==typeof e))r=e,e=null;else if(e&&e instanceof Error)a=e,e=null,r=null;else if(typeof e=="function"){f=e.prototype.name;if(!f||f==="Error"&&e!==Error)f=e.name||(new e).name}else e=null;try{o()}catch(c){if(a)return this.assert(c===a,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}",a instanceof Error?a.toString():a,c instanceof Error?c.toString():c),i(this,"object",c),this;if(e){this.assert(c instanceof e,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp} but #{act} was thrown",f,c instanceof Error?c.toString():c);if(!r)return i(this,"object",c),this}var h="error"===t.type(c)&&"message"in c?c.message:""+c;if(h!=null&&r&&r instanceof RegExp)return this.assert(r.exec(h),"expected #{this} to throw error matching #{exp} but got #{act}","expected #{this} to throw error not matching #{exp}",r,h),i(this,"object",c),this;if(h!=null&&r&&"string"==typeof r)return this.assert(~h.indexOf(r),"expected #{this} to throw error including #{exp} but got #{act}","expected #{this} to throw error not including #{act}",r,h),i(this,"object",c),this;u=!0,l=c}var p="",d=f!==null?f:a?"#{exp}":"an error";u&&(p=" but #{act} was thrown"),this.assert(u===!0,"expected #{this} to throw "+d+p,"expected #{this} to not throw "+d+p,a instanceof Error?a.toString():a,l instanceof Error?l.toString():l),i(this,"object",l)}function x(e,n){n&&i(this,"message",n);var r=i(this,"object"),s=i(this,"itself"),o="function"===t.type(r)&&!s?r.prototype[e]:r[e];this.assert("function"==typeof o,"expected #{this} to respond to "+t.inspect(e),"expected #{this} to not respond to "+t.inspect(e))}function T(e,n){n&&i(this,"message",n);var r=i(this,"object"),s=e(r);this.assert(s,"expected #{this} to satisfy "+t.objDisplay(e),"expected #{this} to not satisfy"+t.objDisplay(e),this.negate?!1:!0,s)}function N(e,r,s){s&&i(this,"message",s);var o=i(this,"object");(new n(o,s)).is.a("number");if(t.type(e)!=="number"||t.type(r)!=="number")throw new Error("the arguments to closeTo or approximately must be numbers");this.assert(Math.abs(o-e)<=r,"expected #{this} to be close to "+e+" +/- "+r,"expected #{this} not to be close to "+e+" +/- "+r)}function C(e,t,n){return e.every(function(e){return n?t.some(function(t){return n(e,t)}):t.indexOf(e)!==-1})}function k(e,t){t&&i(this,"message",t);var r=i(this,"object");(new n(e)).to.be.an("array"),this.assert(e.indexOf(r)>-1,"expected #{this} to be one of #{exp}","expected #{this} to not be one of #{exp}",e,r)}function L(e,t,r){r&&i(this,"message",r);var s=i(this,"object");(new n(e,r)).to.have.property(t),(new n(s)).is.a("function");var o=e[t];s(),this.assert(o!==e[t],"expected ."+t+" to change","expected ."+t+" to not change")}function A(e,t,r){r&&i(this,"message",r);var s=i(this,"object");(new n(e,r)).to.have.property(t),(new n(s)).is.a("function");var o=e[t];s(),this.assert(e[t]-o>0,"expected ."+t+" to increase","expected ."+t+" to not increase")}function O(e,t,r){r&&i(this,"message",r);var s=i(this,"object");(new n(e,r)).to.have.property(t),(new n(s)).is.a("function");var o=e[t];s(),this.assert(e[t]-o<0,"expected ."+t+" to decrease","expected ."+t+" to not decrease")}var n=e.Assertion,r=Object.prototype.toString,i=t.flag;["to","be","been","is","and","has","have","with","that","which","at","of","same"].forEach(function(e){n.addProperty(e,function(){return this})}),n.addProperty("not",function(){i(this,"negate",!0)}),n.addProperty("deep",function(){i(this,"deep",!0)}),n.addProperty("any",function(){i(this,"any",!0),i(this,"all",!1)}),n.addProperty("all",function(){i(this,"all",!0),i(this,"any",!1)}),n.addChainableMethod("an",s),n.addChainableMethod("a",s),n.addChainableMethod("include",u,o),n.addChainableMethod("contain",u,o),n.addChainableMethod("contains",u,o),n.addChainableMethod("includes",u,o),n.addProperty("ok",function(){this.assert(i(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")}),n.addProperty("true",function(){this.assert(!0===i(this,"object"),"expected #{this} to be true","expected #{this} to be false",this.negate?!1:!0)}),n.addProperty("false",function(){this.assert(!1===i(this,"object"),"expected #{this} to be false","expected #{this} to be true",this.negate?!0:!1)}),n.addProperty("null",function(){this.assert(null===i(this,"object"),"expected #{this} to be null","expected #{this} not to be null")}),n.addProperty("undefined",function(){this.assert(undefined===i(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")}),n.addProperty("NaN",function(){this.assert(isNaN(i(this,"object")),"expected #{this} to be NaN","expected #{this} not to be NaN")}),n.addProperty("exist",function(){this.assert(null!=i(this,"object"),"expected #{this} to exist","expected #{this} to not exist")}),n.addProperty("empty",function(){var e=i(this,"object"),t=e;Array.isArray(e)||"string"==typeof object?t=e.length:typeof e=="object"&&(t=Object.keys(e).length),this.assert(!t,"expected #{this} to be empty","expected #{this} not to be empty")}),n.addProperty("arguments",a),n.addProperty("Arguments",a),n.addMethod("equal",f),n.addMethod("equals",f),n.addMethod("eq",f),n.addMethod("eql",l),n.addMethod("eqls",l),n.addMethod("above",c),n.addMethod("gt",c),n.addMethod("greaterThan",c),n.addMethod("least",h),n.addMethod("gte",h),n.addMethod("below",p),n.addMethod("lt",p),n.addMethod("lessThan",p),n.addMethod("most",d),n.addMethod("lte",d),n.addMethod("within",function(e,t,r){r&&i(this,"message",r);var s=i(this,"object"),o=e+".."+t;if(i(this,"doLength")){(new n(s,r)).to.have.property("length");var u=s.length;this.assert(u>=e&&u<=t,"expected #{this} to have a length within "+o,"expected #{this} to not have a length within "+o)}else this.assert(s>=e&&s<=t,"expected #{this} to be within "+o,"expected #{this} to not be within "+o)}),n.addMethod("instanceof",v),n.addMethod("instanceOf",v),n.addMethod("property",function(e,n,r){r&&i(this,"message",r);var s=!!i(this,"deep"),o=s?"deep property ":"property ",u=i(this,"negate"),a=i(this,"object"),f=s?t.getPathInfo(e,a):null,l=s?f.exists:t.hasProperty(e,a),c=s?f.value:a[e];if(u&&arguments.length>1){if(undefined===c)throw r=r!=null?r+": ":"",new Error(r+t.inspect(a)+" has no "+o+t.inspect(e))}else this.assert(l,"expected #{this} to have a "+o+t.inspect(e),"expected #{this} to not have "+o+t.inspect(e));arguments.length>1&&this.assert(n===c,"expected #{this} to have a "+o+t.inspect(e)+" of #{exp}, but got #{act}","expected #{this} to not have a "+o+t.inspect(e)+" of #{act}",n,c),i(this,"object",c)}),n.addMethod("ownProperty",m),n.addMethod("haveOwnProperty",m),n.addMethod("ownPropertyDescriptor",g),n.addMethod("haveOwnPropertyDescriptor",g),n.addChainableMethod("length",b,y),n.addMethod("lengthOf",b),n.addMethod("match",w),n.addMethod("matches",w),n.addMethod("string",function(e,r){r&&i(this,"message",r);var s=i(this,"object");(new n(s,r)).is.a("string"),this.assert(~s.indexOf(e),"expected #{this} to contain "+t.inspect(e),"expected #{this} to not contain "+t.inspect(e))}),n.addMethod("keys",E),n.addMethod("key",E),n.addMethod("throw",S),n.addMethod("throws",S),n.addMethod("Throw",S),n.addMethod("respondTo",x),n.addMethod("respondsTo",x),n.addProperty("itself",function(){i(this,"itself",!0)}),n.addMethod("satisfy",T),n.addMethod("satisfies",T),n.addMethod("closeTo",N),n.addMethod("approximately",N),n.addMethod("members",function(e,r){r&&i(this,"message",r);var s=i(this,"object");(new n(s)).to.be.an("array"),(new n(e)).to.be.an("array");var o=i(this,"deep")?t.eql:undefined;if(i(this,"contains"))return this.assert(C(e,s,o),"expected #{this} to be a superset of #{act}","expected #{this} to not be a superset of #{act}",s,e);this.assert(C(s,e,o)&&C(e,s,o),"expected #{this} to have the same members as #{act}","expected #{this} to not have the same members as #{act}",s,e)}),n.addMethod("oneOf",k),n.addChainableMethod("change",L),n.addChainableMethod("changes",L),n.addChainableMethod("increase",A),n.addChainableMethod("increases",A),n.addChainableMethod("decrease",O),n.addChainableMethod("decreases",O),n.addProperty("extensible",function(){var e=i(this,"object"),t;try{t=Object.isExtensible(e)}catch(n){if(!(n instanceof TypeError))throw n;t=!1}this.assert(t,"expected #{this} to be extensible","expected #{this} to not be extensible")}),n.addProperty("sealed",function(){var e=i(this,"object"),t;try{t=Object.isSealed(e)}catch(n){if(!(n instanceof TypeError))throw n;t=!0}this.assert(t,"expected #{this} to be sealed","expected #{this} to not be sealed")}),n.addProperty("frozen",function(){var e=i(this,"object"),t;try{t=Object.isFrozen(e)}catch(n){if(!(n instanceof TypeError))throw n;t=!0}this.assert(t,"expected #{this} to be frozen","expected #{this} to not be frozen")})}},{}],6:[function(e,t,n){t.exports=function(e,t){var n=e.Assertion,r=t.flag,i=e.assert=function(t,r){var i=new n(null,null,e.assert);i.assert(t,r,"[ negation message unavailable ]")};i.fail=function(t,n,r,s){throw r=r||"assert.fail()",new e.AssertionError(r,{actual:t,expected:n,operator:s},i.fail)},i.isOk=function(e,t){(new n(e,t)).is.ok},i.isNotOk=function(e,t){(new n(e,t)).is.not.ok},i.equal=function(e,t,s){var o=new n(e,s,i.equal);o.assert(t==r(o,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",t,e)},i.notEqual=function(e,t,s){var o=new n(e,s,i.notEqual);o.assert(t!=r(o,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",t,e)},i.strictEqual=function(e,t,r){(new n(e,r)).to.equal(t)},i.notStrictEqual=function(e,t,r){(new n(e,r)).to.not.equal(t)},i.deepEqual=function(e,t,r){(new n(e,r)).to.eql(t)},i.notDeepEqual=function(e,t,r){(new n(e,r)).to.not.eql(t)},i.isAbove=function(e,t,r){(new n(e,r)).to.be.above(t)},i.isAtLeast=function(e,t,r){(new n(e,r)).to.be.least(t)},i.isBelow=function(e,t,r){(new n(e,r)).to.be.below(t)},i.isAtMost=function(e,t,r){(new n(e,r)).to.be.most(t)},i.isTrue=function(e,t){(new n(e,t)).is["true"]},i.isNotTrue=function(e,t){(new n(e,t)).to.not.equal(!0)},i.isFalse=function(e,t){(new n(e,t)).is["false"]},i.isNotFalse=function(e,t){(new n(e,t)).to.not.equal(!1)},i.isNull=function(e,t){(new n(e,t)).to.equal(null)},i.isNotNull=function(e,t){(new n(e,t)).to.not.equal(null)},i.isNaN=function(e,t){(new n(e,t)).to.be.NaN},i.isNotNaN=function(e,t){(new n(e,t)).not.to.be.NaN},i.isUndefined=function(e,t){(new n(e,t)).to.equal(undefined)},i.isDefined=function(e,t){(new n(e,t)).to.not.equal(undefined)},i.isFunction=function(e,t){(new n(e,t)).to.be.a("function")},i.isNotFunction=function(e,t){(new n(e,t)).to.not.be.a("function")},i.isObject=function(e,t){(new n(e,t)).to.be.a("object")},i.isNotObject=function(e,t){(new n(e,t)).to.not.be.a("object")},i.isArray=function(e,t){(new n(e,t)).to.be.an("array")},i.isNotArray=function(e,t){(new n(e,t)).to.not.be.an("array")},i.isString=function(e,t){(new n(e,t)).to.be.a("string")},i.isNotString=function(e,t){(new n(e,t)).to.not.be.a("string")},i.isNumber=function(e,t){(new n(e,t)).to.be.a("number")},i.isNotNumber=function(e,t){(new n(e,t)).to.not.be.a("number")},i.isBoolean=function(e,t){(new n(e,t)).to.be.a("boolean")},i.isNotBoolean=function(e,t){(new n(e,t)).to.not.be.a("boolean")},i.typeOf=function(e,t,r){(new n(e,r)).to.be.a(t)},i.notTypeOf=function(e,t,r){(new n(e,r)).to.not.be.a(t)},i.instanceOf=function(e,t,r){(new n(e,r)).to.be.instanceOf(t)},i.notInstanceOf=function(e,t,r){(new n(e,r)).to.not.be.instanceOf(t)},i.include=function(e,t,r){(new n(e,r,i.include)).include(t)},i.notInclude=function(e,t,r){(new n(e,r,i.notInclude)).not.include(t)},i.match=function(e,t,r){(new n(e,r)).to.match(t)},i.notMatch=function(e,t,r){(new n(e,r)).to.not.match(t)},i.property=function(e,t,r){(new n(e,r)).to.have.property(t)},i.notProperty=function(e,t,r){(new n(e,r)).to.not.have.property(t)},i.deepProperty=function(e,t,r){(new n(e,r)).to.have.deep.property(t)},i.notDeepProperty=function(e,t,r){(new n(e,r)).to.not.have.deep.property(t)},i.propertyVal=function(e,t,r,i){(new n(e,i)).to.have.property(t,r)},i.propertyNotVal=function(e,t,r,i){(new n(e,i)).to.not.have.property(t,r)},i.deepPropertyVal=function(e,t,r,i){(new n(e,i)).to.have.deep.property(t,r)},i.deepPropertyNotVal=function(e,t,r,i){(new n(e,i)).to.not.have.deep.property(t,r)},i.lengthOf=function(e,t,r){(new n(e,r)).to.have.length(t)},i.throws=function(e,t,i,s){if("string"==typeof t||t instanceof RegExp)i=t,t=null;var o=(new n(e,s)).to.throw(t,i);return r(o,"object")},i.doesNotThrow=function(e,t,r){"string"==typeof t&&(r=t,t=null),(new n(e,r)).to.not.Throw(t)},i.operator=function(e,i,s,o){var u;switch(i){case"==":u=e==s;break;case"===":u=e===s;break;case">":u=e>s;break;case">=":u=e>=s;break;case"<":u=e<s;break;case"<=":u=e<=s;break;case"!=":u=e!=s;break;case"!==":u=e!==s;break;default:throw new Error('Invalid operator "'+i+'"')}var a=new n(u,o);a.assert(!0===r(a,"object"),"expected "+t.inspect(e)+" to be "+i+" "+t.inspect(s),"expected "+t.inspect(e)+" to not be "+i+" "+t.inspect(s))},i.closeTo=function(e,t,r,i){(new n(e,i)).to.be.closeTo(t,r)},i.approximately=function(e,t,r,i){(new n(e,i)).to.be.approximately(t,r)},i.sameMembers=function(e,t,r){(new n(e,r)).to.have.same.members(t)},i.sameDeepMembers=function(e,t,r){(new n(e,r)).to.have.same.deep.members(t)},i.includeMembers=function(e,t,r){(new n(e,r)).to.include.members(t)},i.includeDeepMembers=function(e,t,r){(new n(e,r)).to.include.deep.members(t)},i.oneOf=function(e,t,r){(new n(e,r)).to.be.oneOf(t)},i.changes=function(e,t,r){(new n(e)).to.change(t,r)},i.doesNotChange=function(e,t,r){(new n(e)).to.not.change(t,r)},i.increases=function(e,t,r){(new n(e)).to.increase(t,r)},i.doesNotIncrease=function(e,t,r){(new n(e)).to.not.increase(t,r)},i.decreases=function(e,t,r){(new n(e)).to.decrease(t,r)},i.doesNotDecrease=function(e,t,r){(new n(e)).to.not.decrease(t,r)},i.ifError=function(e){if(e)throw e},i.isExtensible=function(e,t){(new n(e,t)).to.be.extensible},i.isNotExtensible=function(e,t){(new n(e,t)).to.not.be.extensible},i.isSealed=function(e,t){(new n(e,t)).to.be.sealed},i.isNotSealed=function(e,t){(new n(e,t)).to.not.be.sealed},i.isFrozen=function(e,t){(new n(e,t)).to.be.frozen},i.isNotFrozen=function(e,t){(new n(e,t)).to.not.be.frozen},function s(e,t){return i[t]=i[e],s}("isOk","ok")("isNotOk","notOk")("throws","throw")("throws","Throw")("isExtensible","extensible")("isNotExtensible","notExtensible")("isSealed","sealed")("isNotSealed","notSealed")("isFrozen","frozen")("isNotFrozen","notFrozen")}},{}],7:[function(e,t,n){t.exports=function(e,t){e.expect=function(t,n){return new e.Assertion(t,n)},e.expect.fail=function(t,n,r,i){throw r=r||"expect.fail()",new e.AssertionError(r,{actual:t,expected:n,operator:i},e.expect.fail)}}},{}],8:[function(e,t,n){t.exports=function(e,t){function r(){function t(){return this instanceof String||this instanceof Number||this instanceof Boolean?new n(this.valueOf(),null,t):new n(this,null,t)}function r(e){Object.defineProperty(this,"should",{value:e,enumerable:!0,configurable:!0,writable:!0})}Object.defineProperty(Object.prototype,"should",{set:r,get:t,configurable:!0});var i={};return i.fail=function(t,n,r,s){throw r=r||"should.fail()",new e.AssertionError(r,{actual:t,expected:n,operator:s},i.fail)},i.equal=function(e,t,r){(new n(e,r)).to.equal(t)},i.Throw=function(e,t,r,i){(new n(e,i)).to.Throw(t,r)},i.exist=function(e,t){(new n(e,t)).to.exist},i.not={},i.not.equal=function(e,t,r){(new n(e,r)).to.not.equal(t)},i.not.Throw=function(e,t,r,i){(new n(e,i)).to.not.Throw(t,r)},i.not.exist=function(e,t){(new n(e,t)).to.not.exist},i["throw"]=i.Throw,i.not["throw"]=i.not.Throw,i}var n=e.Assertion;e.should=r,e.Should=r}},{}],9:[function(e,t,n){var r=e("./transferFlags"),i=e("./flag"),s=e("../config"),o="__proto__"in Object,u=/^(?:length|name|arguments|caller)$/,a=Function.prototype.call,f=Function.prototype.apply;t.exports=function(e,t,n,l){typeof l!="function"&&(l=function(){});var c={method:n,chainingBehavior:l};e.__methods||(e.__methods={}),e.__methods[t]=c,Object.defineProperty(e,t,{get:function(){c.chainingBehavior.call(this);var t=function h(){var e=i(this,"ssfi");e&&s.includeStack===!1&&i(this,"ssfi",h);var t=c.method.apply(this,arguments);return t===undefined?this:t};if(o){var n=t.__proto__=Object.create(this);n.call=a,n.apply=f}else{var l=Object.getOwnPropertyNames(e);l.forEach(function(n){if(!u.test(n)){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r)}})}return r(this,t),t},configurable:!0})}},{"../config":4,"./flag":13,"./transferFlags":29}],10:[function(e,t,n){var r=e("../config"),i=e("./flag");t.exports=function(e,t,n){e[t]=function(){var s=i(this,"ssfi");s&&r.includeStack===!1&&i(this,"ssfi",e[t]);var o=n.apply(this,arguments);return o===undefined?this:o}}},{"../config":4,"./flag":13}],11:[function(e,t,n){var r=e("../config"),i=e("./flag");t.exports=function(e,t,n){Object.defineProperty(e,t,{get:function s(){var e=i(this,"ssfi");e&&r.includeStack===!1&&i(this,"ssfi",s);var t=n.call(this);return t===undefined?this:t},configurable:!0})}},{"../config":4,"./flag":13}],12:[function(e,t,n){var r=e("assertion-error"),i=e("./flag"),s=e("type-detect");t.exports=function(e,t){var e=i(e,"object");t=t.map(function(e){return e.toLowerCase()}),t.sort();var n=t.map(function(e,n){var r=~["a","e","i","o","u"].indexOf(e.charAt(0))?"an":"a",i=t.length>1&&n===t.length-1?"or ":"";return i+r+" "+e}).join(", ");if(!t.some(function(t){return s(e)===t}))throw new r("object tested must be "+n+", but "+s(e)+" given")}},{"./flag":13,"assertion-error":30,"type-detect":35}],13:[function(e,t,n){t.exports=function(e,t,n){var r=e.__flags||(e.__flags=Object.create(null));if(arguments.length!==3)return r[t];r[t]=n}},{}],14:[function(e,t,n){t.exports=function(e,t){return t.length>4?t[4]:e._obj}},{}],15:[function(e,t,n){t.exports=function(t){var n=[];for(var r in t)n.push(r);return n}},{}],16:[function(e,t,n){var r=e("./flag"),i=e("./getActual"),s=e("./inspect"),o=e("./objDisplay");t.exports=function(e,t){var n=r(e,"negate"),s=r(e,"object"),u=t[3],a=i(e,t),f=n?t[2]:t[1],l=r(e,"message");return typeof f=="function"&&(f=f()),f=f||"",f=f.replace(/#\{this\}/g,function(){return o(s)}).replace(/#\{act\}/g,function(){return o(a)}).replace(/#\{exp\}/g,function(){return o(u)}),l?l+": "+f:f}},{"./flag":13,"./getActual":14,"./inspect":23,"./objDisplay":24}],17:[function(e,t,n){t.exports=function(e){if(e.name)return e.name;var t=/^\s?function ([^(]*)\(/.exec(e);return t&&t[1]?t[1]:""}},{}],18:[function(e,t,n){function i(e){var t=e.replace(/([^\\])\[/g,"$1.["),n=t.match(/(\\\.|[^.]+?)+/g);return n.map(function(e){var t=/^\[(\d+)\]$/,n=t.exec(e);return n?{i:parseFloat(n[1])}:{p:e.replace(/\\([.\[\]])/g,"$1")}})}function s(e,t,n){var r=t,i;n=n===undefined?e.length:n;for(var s=0,o=n;s<o;s++){var u=e[s];r?("undefined"!=typeof u.p?r=r[u.p]:"undefined"!=typeof u.i&&(r=r[u.i]),s==o-1&&(i=r)):i=undefined}return i}var r=e("./hasProperty");t.exports=function(t,n){var o=i(t),u=o[o.length-1],a={parent:o.length>1?s(o,n,o.length-1):n,name:u.p||u.i,value:s(o,n)};return a.exists=r(a.name,a.parent),a}},{"./hasProperty":21}],19:[function(e,t,n){var r=e("./getPathInfo");t.exports=function(e,t){var n=r(e,t);return n.value}},{"./getPathInfo":18}],20:[function(e,t,n){t.exports=function(t){function r(e){n.indexOf(e)===-1&&n.push(e)}var n=Object.getOwnPropertyNames(t),i=Object.getPrototypeOf(t);while(i!==null)Object.getOwnPropertyNames(i).forEach(r),i=Object.getPrototypeOf(i);return n}},{}],21:[function(e,t,n){var r=e("type-detect"),i={number:Number,string:String};t.exports=function(t,n){var s=r(n);return s==="null"||s==="undefined"?!1:(i[s]&&typeof n!="object"&&(n=new i[s](n)),t in n)}},{"type-detect":35}],22:[function(e,t,n){var n=t.exports={};n.test=e("./test"),n.type=e("type-detect"),n.expectTypes=e("./expectTypes"),n.getMessage=e("./getMessage"),n.getActual=e("./getActual"),n.inspect=e("./inspect"),n.objDisplay=e("./objDisplay"),n.flag=e("./flag"),n.transferFlags=e("./transferFlags"),n.eql=e("deep-eql"),n.getPathValue=e("./getPathValue"),n.getPathInfo=e("./getPathInfo"),n.hasProperty=e("./hasProperty"),n.getName=e("./getName"),n.addProperty=e("./addProperty"),n.addMethod=e("./addMethod"),n.overwriteProperty=e("./overwriteProperty"),n.overwriteMethod=e("./overwriteMethod"),n.addChainableMethod=e("./addChainableMethod"),n.overwriteChainableMethod=e("./overwriteChainableMethod")},{"./addChainableMethod":9,"./addMethod":10,"./addProperty":11,"./expectTypes":12,"./flag":13,"./getActual":14,"./getMessage":16,"./getName":17,"./getPathInfo":18,"./getPathValue":19,"./hasProperty":21,"./inspect":23,"./objDisplay":24,"./overwriteChainableMethod":25,"./overwriteMethod":26,"./overwriteProperty":27,"./test":28,"./transferFlags":29,"deep-eql":31,"type-detect":35}],23:[function(e,t,n){function o(e,t,n,r){var i={showHidden:t,seen:[],stylize:function(e){return e}};return a(i,e,typeof n=="undefined"?2:n)}function a(e,t,o){if(t&&typeof t.inspect=="function"&&t.inspect!==n.inspect&&(!t.constructor||t.constructor.prototype!==t)){var y=t.inspect(o);return typeof y!="string"&&(y=a(e,y,o)),y}var b=f(e,t);if(b)return b;if(u(t)){if("outerHTML"in t)return t.outerHTML;try{if(document.xmlVersion){var w=new XMLSerializer;return w.serializeToString(t)}var E="http://www.w3.org/1999/xhtml",S=document.createElementNS(E,"_");return S.appendChild(t.cloneNode(!1)),html=S.innerHTML.replace("><",">"+t.innerHTML+"<"),S.innerHTML="",html}catch(x){}}var T=s(t),N=e.showHidden?i(t):T;if(N.length===0||g(t)&&(N.length===1&&N[0]==="stack"||N.length===2&&N[0]==="description"&&N[1]==="stack")){if(typeof t=="function"){var C=r(t),k=C?": "+C:"";return e.stylize("[Function"+k+"]","special")}if(v(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(m(t))return e.stylize(Date.prototype.toUTCString.call(t),"date");if(g(t))return l(t)}var L="",A=!1,O=["{","}"];d(t)&&(A=!0,O=["[","]"]);if(typeof t=="function"){var C=r(t),k=C?": "+C:"";L=" [Function"+k+"]"}v(t)&&(L=" "+RegExp.prototype.toString.call(t)),m(t)&&(L=" "+Date.prototype.toUTCString.call(t));if(g(t))return l(t);if(N.length!==0||!!A&&t.length!=0){if(o<0)return v(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special");e.seen.push(t);var M;return A?M=c(e,t,o,T,N):M=N.map(function(n){return h(e,t,o,T,n,A)}),e.seen.pop(),p(M,L,O)}return O[0]+L+O[1]}function f(e,t){switch(typeof t){case"undefined":return e.stylize("undefined","undefined");case"string":var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string");case"number":if(t===0&&1/t===-Infinity)return e.stylize("-0","number");return e.stylize(""+t,"number");case"boolean":return e.stylize(""+t,"boolean")}if(t===null)return e.stylize("null","null")}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function c(e,t,n,r,i){var s=[];for(var o=0,u=t.length;o<u;++o)Object.prototype.hasOwnProperty.call(t,String(o))?s.push(h(e,t,n,r,String(o),!0)):s.push("");return i.forEach(function(i){i.match(/^\d+$/)||s.push(h(e,t,n,r,i,!0))}),s}function h(e,t,n,r,i,s){var o,u;t.__lookupGetter__&&(t.__lookupGetter__(i)?t.__lookupSetter__(i)?u=e.stylize("[Getter/Setter]","special"):u=e.stylize("[Getter]","special"):t.__lookupSetter__(i)&&(u=e.stylize("[Setter]","special"))),r.indexOf(i)<0&&(o="["+i+"]"),u||(e.seen.indexOf(t[i])<0?(n===null?u=a(e,t[i],null):u=a(e,t[i],n-1),u.indexOf("\n")>-1&&(s?u=u.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):u="\n"+u.split("\n").map(function(e){return"   "+e}).join("\n"))):u=e.stylize("[Circular]","special"));if(typeof o=="undefined"){if(s&&i.match(/^\d+$/))return u;o=JSON.stringify(""+i),o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+u}function p(e,t,n){var r=0,i=e.reduce(function(e,t){return r++,t.indexOf("\n")>=0&&r++,e+t.length+1},0);return i>60?n[0]+(t===""?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function d(e){return Array.isArray(e)||typeof e=="object"&&y(e)==="[object Array]"}function v(e){return typeof e=="object"&&
y(e)==="[object RegExp]"}function m(e){return typeof e=="object"&&y(e)==="[object Date]"}function g(e){return typeof e=="object"&&y(e)==="[object Error]"}function y(e){return Object.prototype.toString.call(e)}var r=e("./getName"),i=e("./getProperties"),s=e("./getEnumerableProperties");t.exports=o;var u=function(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e.nodeType===1&&typeof e.nodeName=="string"}},{"./getEnumerableProperties":15,"./getName":17,"./getProperties":20}],24:[function(e,t,n){var r=e("./inspect"),i=e("../config");t.exports=function(e){var t=r(e),n=Object.prototype.toString.call(e);if(i.truncateThreshold&&t.length>=i.truncateThreshold){if(n==="[object Function]")return!e.name||e.name===""?"[Function]":"[Function: "+e.name+"]";if(n==="[object Array]")return"[ Array("+e.length+") ]";if(n==="[object Object]"){var s=Object.keys(e),o=s.length>2?s.splice(0,2).join(", ")+", ...":s.join(", ");return"{ Object ("+o+") }"}return t}return t}},{"../config":4,"./inspect":23}],25:[function(e,t,n){t.exports=function(e,t,n,r){var i=e.__methods[t],s=i.chainingBehavior;i.chainingBehavior=function(){var e=r(s).call(this);return e===undefined?this:e};var o=i.method;i.method=function(){var e=n(o).apply(this,arguments);return e===undefined?this:e}}},{}],26:[function(e,t,n){t.exports=function(e,t,n){var r=e[t],i=function(){return this};r&&"function"==typeof r&&(i=r),e[t]=function(){var e=n(i).apply(this,arguments);return e===undefined?this:e}}},{}],27:[function(e,t,n){t.exports=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e,t),i=function(){};r&&"function"==typeof r.get&&(i=r.get),Object.defineProperty(e,t,{get:function(){var e=n(i).call(this);return e===undefined?this:e},configurable:!0})}},{}],28:[function(e,t,n){var r=e("./flag");t.exports=function(e,t){var n=r(e,"negate"),i=t[0];return n?!i:i}},{"./flag":13}],29:[function(e,t,n){t.exports=function(e,t,n){var r=e.__flags||(e.__flags=Object.create(null));t.__flags||(t.__flags=Object.create(null)),n=arguments.length===3?n:!0;for(var i in r)if(n||i!=="object"&&i!=="ssfi"&&i!="message")t.__flags[i]=r[i]}},{}],30:[function(e,t,n){function r(){function t(t,n){Object.keys(n).forEach(function(r){~e.indexOf(r)||(t[r]=n[r])})}var e=[].slice.call(arguments);return function(){var n=[].slice.call(arguments),r=0,i={};for(;r<n.length;r++)t(i,n[r]);return i}}function i(e,t,n){var i=r("name","message","stack","constructor","toJSON"),s=i(t||{});this.message=e||"Unspecified AssertionError",this.showDiff=!1;for(var o in s)this[o]=s[o];n=n||arguments.callee,n&&Error.captureStackTrace?Error.captureStackTrace(this,n):this.stack=(new Error).stack}t.exports=i,i.prototype=Object.create(Error.prototype),i.prototype.name="AssertionError",i.prototype.constructor=i,i.prototype.toJSON=function(e){var t=r("constructor","toJSON","stack"),n=t({name:this.name},this);return!1!==e&&this.stack&&(n.stack=this.stack),n}},{}],31:[function(e,t,n){t.exports=e("./lib/eql")},{"./lib/eql":32}],32:[function(e,t,n){function o(e,t,n){return u(e,t)?!0:"date"===r(e)?f(e,t):"regexp"===r(e)?l(e,t):i.isBuffer(e)?d(e,t):"arguments"===r(e)?c(e,t,n):a(e,t)?"object"!==r(e)&&"object"!==r(t)&&"array"!==r(e)&&"array"!==r(t)?u(e,t):m(e,t,n):!1}function u(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function a(e,t){return r(e)===r(t)}function f(e,t){return"date"!==r(t)?!1:u(e.getTime(),t.getTime())}function l(e,t){return"regexp"!==r(t)?!1:u(e.toString(),t.toString())}function c(e,t,n){return"arguments"!==r(t)?!1:(e=[].slice.call(e),t=[].slice.call(t),o(e,t,n))}function h(e){var t=[];for(var n in e)t.push(n);return t}function p(e,t){if(e.length!==t.length)return!1;var n=0,r=!0;for(;n<e.length;n++)if(e[n]!==t[n]){r=!1;break}return r}function d(e,t){return i.isBuffer(t)?p(e,t):!1}function v(e){return e!==null&&e!==undefined}function m(e,t,n){if(!v(e)||!v(t))return!1;if(e.prototype!==t.prototype)return!1;var r;if(n){for(r=0;r<n.length;r++)if(n[r][0]===e&&n[r][1]===t||n[r][0]===t&&n[r][1]===e)return!0}else n=[];try{var i=h(e),s=h(t)}catch(u){return!1}i.sort(),s.sort();if(!p(i,s))return!1;n.push([e,t]);var a;for(r=i.length-1;r>=0;r--){a=i[r];if(!o(e[a],t[a],n))return!1}return!0}var r=e("type-detect"),i;try{i=e("buffer").Buffer}catch(s){i={},i.isBuffer=function(){return!1}}t.exports=o},{buffer:undefined,"type-detect":33}],33:[function(e,t,n){t.exports=e("./lib/type")},{"./lib/type":34}],34:[function(e,t,n){function i(e){var t=Object.prototype.toString.call(e);return r[t]?r[t]:e===null?"null":e===undefined?"undefined":e===Object(e)?"object":typeof e}function s(){this.tests={}}var n=t.exports=i,r={"[object Array]":"array","[object RegExp]":"regexp","[object Function]":"function","[object Arguments]":"arguments","[object Date]":"date"};n.Library=s,s.prototype.of=i,s.prototype.define=function(e,t){return arguments.length===1?this.tests[e]:(this.tests[e]=t,this)},s.prototype.test=function(e,t){if(t===i(e))return!0;var n=this.tests[t];if(n&&"regexp"===i(n))return n.test(e);if(n&&"function"===i(n))return n(e);throw new ReferenceError('Type test "'+t+'" not defined or invalid.')}},{}],35:[function(e,t,n){arguments[4][33][0].apply(n,arguments)},{"./lib/type":36,dup:33}],36:[function(e,t,n){function i(e){var t=Object.prototype.toString.call(e).match(r)[1].toLowerCase();return typeof Promise=="function"&&e instanceof Promise?"promise":e===null?"null":e===undefined?"undefined":t}function s(){if(!(this instanceof s))return new s;this.tests={}}var n=t.exports=i,r=/^\[object (.*)\]$/;n.Library=s,s.prototype.of=i,s.prototype.define=function(e,t){return arguments.length===1?this.tests[e]:(this.tests[e]=t,this)},s.prototype.test=function(e,t){if(t===i(e))return!0;var n=this.tests[t];if(n&&"regexp"===i(n))return n.test(e);if(n&&"function"===i(n))return n(e);throw new ReferenceError('Type test "'+t+'" not defined or invalid.')}},{}]},{},[1])(1)});