(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0b42":function(t,e,r){var n=r("da84"),o=r("e8b5"),i=r("68ee"),a=r("861d"),c=r("b622"),u=c("species"),s=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,i(e)&&(e===s||o(e.prototype))?e=void 0:a(e)&&(e=e[u],null===e&&(e=void 0))),void 0===e?s:e}},"0f6b":function(t,e,r){},"14d4":function(t,e,r){"use strict";r("9740")},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("785a"),a=r("17c2"),c=r("9112"),u=function(t){if(t&&t.forEach!==a)try{c(t,"forEach",a)}catch(e){t.forEach=a}};for(var s in o)o[s]&&u(n[s]&&n[s].prototype);u(i)},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"33d0":function(t,e,r){},4265:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o={key:0},i={class:"blog"},a=["src","alt"],c={class:"blog-details"},u={key:1};function s(t,e,r,s,l,f){return l.blog?(Object(n["t"])(),Object(n["f"])("div",o,[Object(n["g"])("div",i,[Object(n["g"])("img",{class:"blog-image neu-border",src:l.blog.img,alt:l.blog.title},null,8,a),Object(n["g"])("div",c,[Object(n["g"])("h2",null,Object(n["C"])(l.blog.title),1),Object(n["g"])("h4",null,Object(n["C"])(l.blog.author_name)+" - "+Object(n["C"])(l.blog.date),1),Object(n["g"])("p",null,Object(n["C"])(l.blog.body),1)])])])):(Object(n["t"])(),Object(n["f"])("div",u,"Loading the blog..."))}var l=r("1da1"),f=(r("96cf"),r("d3b7"),r("b0c0"),{props:["id"],data:function(){return{blog:null}},mounted:function(){var t=this;fetch("https://generic-blog-api.herokuapp.com/posts/"+this.id,{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){return t.json()})).then(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.blog=r,e.next=3,fetch("https://generic-blog-api.herokuapp.com/users/"+r.author,{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){return t.json()})).then((function(e){t.blog.author_name=e.name}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),h=(r("6e11"),r("6b0d")),d=r.n(h);const p=d()(f,[["render",s]]);e["default"]=p},5418:function(t,e,r){"use strict";r("e0c9")},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"6e11":function(t,e,r){"use strict";r("33d0")},"73cf":function(t,e,r){"use strict";r.r(e);r("b0c0");var n=r("7a23"),o=Object(n["g"])("h2",{class:"form-heading"},"Register",-1),i=Object(n["g"])("button",{type:"submit",class:"form-btn neu-border"},"Sign up",-1),a=Object(n["i"])(" Already a member? "),c=Object(n["i"])("Sign in");function u(t,e,r,u,s,l){var f=Object(n["A"])("router-link");return Object(n["t"])(),Object(n["f"])("form",{onSubmit:e[4]||(e[4]=Object(n["I"])((function(){return l.register&&l.register.apply(l,arguments)}),["prevent"])),class:"form neu-border"},[o,Object(n["H"])(Object(n["g"])("input",{class:"form-input neu-border-inset",type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return s.name=t}),placeholder:"Name",required:""},null,512),[[n["E"],s.name]]),Object(n["H"])(Object(n["g"])("input",{class:"form-input neu-border-inset",type:"email","onUpdate:modelValue":e[1]||(e[1]=function(t){return s.email=t}),placeholder:"Email",required:""},null,512),[[n["E"],s.email]]),Object(n["H"])(Object(n["g"])("input",{class:"form-input neu-border-inset",type:"text","onUpdate:modelValue":e[2]||(e[2]=function(t){return s.contact=t}),placeholder:"Contact Number",required:""},null,512),[[n["E"],s.contact]]),Object(n["H"])(Object(n["g"])("input",{class:"form-input neu-border-inset",type:"password","onUpdate:modelValue":e[3]||(e[3]=function(t){return s.password=t}),placeholder:"Password",required:""},null,512),[[n["E"],s.password]]),i,Object(n["g"])("p",null,[a,Object(n["j"])(f,{to:{name:"Login"}},{default:Object(n["G"])((function(){return[c]})),_:1})])],32)}r("d3b7"),r("e9c4");var s={data:function(){return{name:"",email:"",contact:"",password:""}},methods:{register:function(){var t=this;fetch("https://generic-blog-api.herokuapp.com/users",{method:"POST",body:JSON.stringify({name:this.name,email:this.email,contact:this.contact,password:this.password}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(e){alert("User registered"),localStorage.setItem("jwt",e.jwt),t.$router.push({name:"Blogs"})})).catch((function(t){alert(t)}))}}},l=(r("bf9c"),r("6b0d")),f=r.n(l);const h=f()(s,[["render",u]]);e["default"]=h},"81af":function(t,e,r){},"8cf7":function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o={key:0},i=Object(n["g"])("h2",null,"Blogs",-1),a={key:0,class:"blogs-container"},c=["src","alt"],u={key:1};function s(t,e,r,s,l,f){var h=Object(n["A"])("router-link");return l.blogs?(Object(n["t"])(),Object(n["f"])("div",o,[i,l.blogs?(Object(n["t"])(),Object(n["f"])("div",a,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(l.blogs,(function(t){return Object(n["t"])(),Object(n["d"])(h,{key:t._id,to:{name:"BlogDetails",params:{id:t._id}}},{default:Object(n["G"])((function(){return[Object(n["g"])("img",{src:t.img,alt:t.title},null,8,c),Object(n["i"])(" "+Object(n["C"])(t.author_name),1)]})),_:2},1032,["to"])})),128))])):Object(n["e"])("",!0)])):(Object(n["t"])(),Object(n["f"])("div",u,"Loading blogs..."))}var l=r("1da1"),f=(r("96cf"),r("d3b7"),r("159b"),r("b0c0"),{data:function(){return{blogs:null}},mounted:function(){var t=this;localStorage.getItem("jwt")?fetch("https://generic-blog-api.herokuapp.com/posts",{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){return t.json()})).then((function(e){t.blogs=e,t.blogs.forEach(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://generic-blog-api.herokuapp.com/users/"+e.author,{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){return t.json()})).then((function(t){e.author_name=t.name}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})).catch((function(t){alert("User not logged in")})):(alert("User not logged in"),this.$router.push({name:"Login"}))}}),h=(r("5418"),r("6b0d")),d=r.n(h);const p=d()(f,[["render",s]]);e["default"]=p},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=L(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",b={};function g(){}function m(){}function y(){}var v={};u(v,i,(function(){return this}));var j=Object.getPrototypeOf,O=j&&j(j(F([])));O&&O!==r&&n.call(O,i)&&(v=O);var w=y.prototype=g.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function L(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return U()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===b)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===b)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return b;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function F(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:U}}function U(){return{value:e,done:!0}}return m.prototype=y,u(w,"constructor",y),u(y,"constructor",m),m.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=F,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},9740:function(t,e,r){},"9bc7":function(t,e,r){"use strict";r("81af")},a55b:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o=Object(n["g"])("h2",{class:"form-heading"},"Login",-1),i=Object(n["g"])("button",{type:"submit",class:"form-btn neu-border"},"Sign in",-1),a=Object(n["i"])(" Not a member? "),c=Object(n["i"])("Create an account");function u(t,e,r,u,s,l){var f=Object(n["A"])("router-link");return Object(n["t"])(),Object(n["f"])("form",{onSubmit:e[2]||(e[2]=Object(n["I"])((function(){return l.login&&l.login.apply(l,arguments)}),["prevent"])),class:"form neu-border"},[o,Object(n["H"])(Object(n["g"])("input",{class:"form-input neu-border-inset",type:"email","onUpdate:modelValue":e[0]||(e[0]=function(t){return s.email=t}),placeholder:"Email"},null,512),[[n["E"],s.email]]),Object(n["H"])(Object(n["g"])("input",{class:"form-input neu-border-inset",type:"password","onUpdate:modelValue":e[1]||(e[1]=function(t){return s.password=t}),placeholder:"Password"},null,512),[[n["E"],s.password]]),i,Object(n["g"])("p",null,[a,Object(n["j"])(f,{to:{name:"Register"}},{default:Object(n["G"])((function(){return[c]})),_:1})])],32)}r("d3b7"),r("e9c4");var s={data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;fetch("https://generic-blog-api.herokuapp.com/users",{method:"PATCH",body:JSON.stringify({email:this.email,password:this.password}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(e){localStorage.setItem("jwt",e.jwt),alert("User logged in"),t.$router.push({name:"Blogs"})})).catch((function(t){alert(t)}))}}},l=(r("9bc7"),r("6b0d")),f=r.n(l);const h=f()(s,[["render",u]]);e["default"]=h},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){return 1},1)}))}},b0c0:function(t,e,r){var n=r("83ab"),o=r("5e77").EXISTS,i=r("e330"),a=r("9bf2").f,c=Function.prototype,u=i(c.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=i(s.exec),f="name";n&&!o&&a(c,f,{configurable:!0,get:function(){try{return l(s,u(this))[1]}catch(t){return""}}})},b727:function(t,e,r){var n=r("0366"),o=r("e330"),i=r("44ad"),a=r("7b0b"),c=r("07fa"),u=r("65f0"),s=o([].push),l=function(t){var e=1==t,r=2==t,o=3==t,l=4==t,f=6==t,h=7==t,d=5==t||f;return function(p,b,g,m){for(var y,v,j=a(p),O=i(j),w=n(b,g),x=c(O),E=0,L=m||u,S=e?L(p,x):r||h?L(p,0):void 0;x>E;E++)if((d||E in O)&&(y=O[E],v=w(y,E,j),t))if(e)S[E]=v;else if(v)switch(t){case 3:return!0;case 5:return y;case 6:return E;case 2:s(S,y)}else switch(t){case 4:return!1;case 7:s(S,y)}return f?-1:o||l?l:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b951:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o=Object(n["g"])("h2",{class:"form-heading"},"Create a blog",-1),i=Object(n["g"])("button",{type:"submit",class:"form-btn neu-border"},"Create Blog",-1);function a(t,e,r,a,c,u){return Object(n["t"])(),Object(n["f"])("form",{onSubmit:e[3]||(e[3]=Object(n["I"])((function(){return u.createBlog&&u.createBlog.apply(u,arguments)}),["prevent"])),class:"form neu-border"},[o,Object(n["H"])(Object(n["g"])("input",{class:"form-input neu-border-inset",type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.title=t}),placeholder:"Title",required:""},null,512),[[n["E"],c.title]]),Object(n["H"])(Object(n["g"])("input",{class:"form-input neu-border-inset",type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.img=t}),placeholder:"Blog Image",required:""},null,512),[[n["E"],c.img]]),Object(n["H"])(Object(n["g"])("textarea",{class:"form-input neu-border-inset",type:"text","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.body=t}),placeholder:"Body",required:""},null,512),[[n["E"],c.body]]),i],32)}r("d3b7"),r("e9c4");var c={data:function(){return{title:"",body:"",img:""}},methods:{createBlog:function(){var t=this;if(!localStorage.getItem("jwt"))return alert("User not logged in"),this.$router.push({name:"Login"});fetch("https://generic-blog-api.herokuapp.com/posts",{method:"POST",body:JSON.stringify({title:this.title,body:this.body,img:this.img}),headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){return t.json()})).then((function(e){alert("Post Created"),t.$router.push({name:"Blogs"})})).catch((function(t){alert(t)}))}}},u=(r("14d4"),r("6b0d")),s=r.n(u);const l=s()(c,[["render",a]]);e["default"]=l},bf9c:function(t,e,r){"use strict";r("0f6b")},e0c9:function(t,e,r){},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},e9c4:function(t,e,r){var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("2ba4"),c=r("e330"),u=r("d039"),s=o.Array,l=i("JSON","stringify"),f=c(/./.exec),h=c("".charAt),d=c("".charCodeAt),p=c("".replace),b=c(1..toString),g=/[\uD800-\uDFFF]/g,m=/^[\uD800-\uDBFF]$/,y=/^[\uDC00-\uDFFF]$/,v=function(t,e,r){var n=h(r,e-1),o=h(r,e+1);return f(m,t)&&!f(y,o)||f(y,t)&&!f(m,n)?"\\u"+b(d(t,0),16):t},j=u((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&n({target:"JSON",stat:!0,forced:j},{stringify:function(t,e,r){for(var n=0,o=arguments.length,i=s(o);n<o;n++)i[n]=arguments[n];var c=a(l,null,i);return"string"==typeof c?p(c,g,v):c}})},f820:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o={class:"about"},i=Object(n["g"])("h1",null,"This is an about page",-1),a=[i];function c(t,e){return Object(n["t"])(),Object(n["f"])("div",o,a)}var u=r("6b0d"),s=r.n(u);const l={},f=s()(l,[["render",c]]);e["default"]=f}}]);
//# sourceMappingURL=about.ef98d8ec.js.map