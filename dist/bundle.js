!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}({"./app/App.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.history=void 0;var o=c(n("./node_modules/react/index.js")),r=n("./node_modules/react-router-dom/es/index.js"),i=n("./node_modules/mobx-react/index.module.js"),a=c(n("./node_modules/history/createBrowserHistory.js")),s=c(n("./app/stores/Public.js")),u=c(n("./app/views/HomePage.js"));function c(e){return e&&e.__esModule?e:{default:e}}var l=t.history=(0,a.default)(),d={pub:new s.default};t.default=function(){return o.default.createElement(i.Provider,d,o.default.createElement(r.Router,{history:l},o.default.createElement(r.Route,{path:"/",component:u.default})))}},"./app/index.js":function(e,t,n){"use strict";var o=s(n("./node_modules/react/index.js")),r=n("./node_modules/react-dom/index.js"),i=n("./node_modules/react-hot-loader/index.js");n("./node_modules/semantic-ui-css/semantic.min.css"),n("./app/styles/public.css"),n("./app/styles/public.scss");var a=s(n("./app/App.js"));function s(e){return e&&e.__esModule?e:{default:e}}(0,r.render)(o.default.createElement(i.AppContainer,null,o.default.createElement(a.default,null)),document.getElementById("root"))},"./app/stores/Public.js":function(e,t,n){"use strict";var o,r,i,a,s,u,c,l;Object.defineProperty(t,"__esModule",{value:!0});var d=n("./node_modules/mobx/lib/mobx.module.js");function f(e,t,n,o){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(o):void 0})}function p(e,t,n,o,r){var i={};return Object.keys(o).forEach(function(e){i[e]=o[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce(function(n,o){return o(e,t,n)||n},i),r&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(r):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var m=n("electron").shell,h=n("electron").ipcRenderer,v=(r=p((o=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"state",r,this),f(this,"setPassword",i,this),f(this,"checkPassword",a,this),f(this,"setSettingPage",s,this),f(this,"openExternalLink",u,this),f(this,"setActiveItem",c,this),f(this,"toggleNavActivate",l,this),h.on("public_password-read_replay",function(e,n){console.log(n),n.result?t.state.password=n.result:t.state.settingPage=!0})}).prototype,"state",[d.observable],{enumerable:!0,initializer:function(){return{activeItem:"install",navActivate:!0,settingPage:!1,password:"",total:["install","startup","clean","info"]}}}),i=p(o.prototype,"setPassword",[d.action],{enumerable:!0,initializer:function(){var e=this;return function(t){h.send("public_password",{action:"set",password:t}),e.state.password=t}}}),a=p(o.prototype,"checkPassword",[d.action],{enumerable:!0,initializer:function(){return function(){h.send("public_password",{action:"read"})}}}),s=p(o.prototype,"setSettingPage",[d.action],{enumerable:!0,initializer:function(){var e=this;return function(t){e.state.settingPage=t}}}),u=p(o.prototype,"openExternalLink",[d.action],{enumerable:!0,initializer:function(){return function(e){m.openExternal(e)}}}),c=p(o.prototype,"setActiveItem",[d.action],{enumerable:!0,initializer:function(){var e=this;return function(t){e.state.activeItem=t}}}),l=p(o.prototype,"toggleNavActivate",[d.action],{enumerable:!0,initializer:function(){var e=this;return function(){e.state.navActivate=!e.state.navActivate}}}),o);t.default=v},"./app/styles/public.css":function(e,t){},"./app/styles/public.scss":function(e,t){},"./app/views/HomePage.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n("./node_modules/react/index.js"),u=p(s),c=n("./node_modules/mobx-react/index.module.js"),l=(n("./node_modules/semantic-ui-react/dist/es/index.js"),p(n("./node_modules/prop-types/index.js"))),d=n("./node_modules/react-router-dom/es/index.js"),f=p(n("./app/views/startup/StartupPage.js"));function p(e){return e&&e.__esModule?e:{default:e}}var m=n("./resources sync recursive .*");m.keys().map(m);var h=(0,c.inject)("pub")(o=(0,c.observer)((i=r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n.lastActiveItem=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),a(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.match;return u.default.createElement("div",{className:"container-router"},"HomePage",u.default.createElement("p",null,u.default.createElement(d.Link,{to:"/startup"},"startup")),u.default.createElement("div",null,u.default.createElement(d.Route,{path:e.path+"startup",component:f.default})))}}]),t}(),r.propTypes={pub:l.default.object.isRequired,location:l.default.object.isRequired,match:l.default.object.isRequired},o=i))||o)||o;h.propTypes={},t.default=h},"./app/views/startup/StartupPage.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=l(n("./node_modules/react/index.js")),u=n("./node_modules/mobx-react/index.module.js"),c=l(n("./node_modules/prop-types/index.js"));n("./node_modules/semantic-ui-react/dist/es/index.js");function l(e){return e&&e.__esModule?e:{default:e}}n("./app/views/startup/startup.css");var d=(0,u.inject)("pub")(o=(0,u.observer)((i=r=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),a(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.default.createElement("div",null,"startup")}}]),t}(),r.propTypes={startup:c.default.object.isRequired,location:c.default.object.isRequired},o=i))||o)||o;t.default=d},"./app/views/startup/startup.css":function(e,t){},"./node_modules/history/DOMUtils.js":function(e,t,n){"use strict";t.__esModule=!0;t.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),t.addEventListener=function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},t.removeEventListener=function(e,t,n){return e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},t.getConfirmation=function(e,t){return t(window.confirm(e))},t.supportsHistory=function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},t.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},t.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},t.isExtraneousPopstateEvent=function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")}},"./node_modules/history/LocationUtils.js":function(e,t,n){"use strict";t.__esModule=!0,t.locationsAreEqual=t.createLocation=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=s(n("./node_modules/resolve-pathname/index.js")),i=s(n("./node_modules/value-equal/index.js")),a=n("./node_modules/history/PathUtils.js");function s(e){return e&&e.__esModule?e:{default:e}}t.createLocation=function(e,t,n,i){var s=void 0;"string"==typeof e?(s=(0,a.parsePath)(e)).state=t:(void 0===(s=o({},e)).pathname&&(s.pathname=""),s.search?"?"!==s.search.charAt(0)&&(s.search="?"+s.search):s.search="",s.hash?"#"!==s.hash.charAt(0)&&(s.hash="#"+s.hash):s.hash="",void 0!==t&&void 0===s.state&&(s.state=t));try{s.pathname=decodeURI(s.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+s.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(s.key=n),i?s.pathname?"/"!==s.pathname.charAt(0)&&(s.pathname=(0,r.default)(s.pathname,i.pathname)):s.pathname=i.pathname:s.pathname||(s.pathname="/"),s},t.locationsAreEqual=function(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&(0,i.default)(e.state,t.state)}},"./node_modules/history/PathUtils.js":function(e,t,n){"use strict";t.__esModule=!0;t.addLeadingSlash=function(e){return"/"===e.charAt(0)?e:"/"+e},t.stripLeadingSlash=function(e){return"/"===e.charAt(0)?e.substr(1):e};var o=t.hasBasename=function(e,t){return new RegExp("^"+t+"(\\/|\\?|#|$)","i").test(e)};t.stripBasename=function(e,t){return o(e,t)?e.substr(t.length):e},t.stripTrailingSlash=function(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e},t.parsePath=function(e){var t=e||"/",n="",o="",r=t.indexOf("#");-1!==r&&(o=t.substr(r),t=t.substr(0,r));var i=t.indexOf("?");return-1!==i&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===n?"":n,hash:"#"===o?"":o}},t.createPath=function(e){var t=e.pathname,n=e.search,o=e.hash,r=t||"/";return n&&"?"!==n&&(r+="?"===n.charAt(0)?n:"?"+n),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:"#"+o),r}},"./node_modules/history/createBrowserHistory.js":function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.__esModule=!0;var r="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":o(e)},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=f(n("./node_modules/history/node_modules/warning/browser.js")),s=f(n("./node_modules/invariant/browser.js")),u=n("./node_modules/history/LocationUtils.js"),c=n("./node_modules/history/PathUtils.js"),l=f(n("./node_modules/history/createTransitionManager.js")),d=n("./node_modules/history/DOMUtils.js");function f(e){return e&&e.__esModule?e:{default:e}}var p=function(){try{return window.history.state||{}}catch(e){return{}}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,s.default)(d.canUseDOM,"Browser history needs a DOM");var t=window.history,n=(0,d.supportsHistory)(),o=!(0,d.supportsPopStateOnHashChange)(),f=e.forceRefresh,m=void 0!==f&&f,h=e.getUserConfirmation,v=void 0===h?d.getConfirmation:h,y=e.keyLength,b=void 0===y?6:y,_=e.basename?(0,c.stripTrailingSlash)((0,c.addLeadingSlash)(e.basename)):"",w=function(e){var t=e||{},n=t.key,o=t.state,r=window.location,i=r.pathname+r.search+r.hash;return(0,a.default)(!_||(0,c.hasBasename)(i,_),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+i+'" to begin with "'+_+'".'),_&&(i=(0,c.stripBasename)(i,_)),(0,u.createLocation)(i,o,n)},j=function(){return Math.random().toString(36).substr(2,b)},g=(0,l.default)(),x=function(e){i(z,e),z.length=t.length,g.notifyListeners(z.location,z.action)},O=function(e){(0,d.isExtraneousPopstateEvent)(e)||S(w(e.state))},P=function(){S(w(p()))},E=!1,S=function(e){E?(E=!1,x()):g.confirmTransitionTo(e,"POP",v,function(t){t?x({action:"POP",location:e}):k(e)})},k=function(e){var t=z.location,n=L.indexOf(t.key);-1===n&&(n=0);var o=L.indexOf(e.key);-1===o&&(o=0);var r=n-o;r&&(E=!0,T(r))},M=w(p()),L=[M.key],A=function(e){return _+(0,c.createPath)(e)},T=function(e){t.go(e)},C=0,R=function(e){1===(C+=e)?((0,d.addEventListener)(window,"popstate",O),o&&(0,d.addEventListener)(window,"hashchange",P)):0===C&&((0,d.removeEventListener)(window,"popstate",O),o&&(0,d.removeEventListener)(window,"hashchange",P))},U=!1,z={length:t.length,action:"POP",location:M,createHref:A,push:function(e,o){(0,a.default)(!("object"===(void 0===e?"undefined":r(e))&&void 0!==e.state&&void 0!==o),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var i=(0,u.createLocation)(e,o,j(),z.location);g.confirmTransitionTo(i,"PUSH",v,function(e){if(e){var o=A(i),r=i.key,s=i.state;if(n)if(t.pushState({key:r,state:s},null,o),m)window.location.href=o;else{var u=L.indexOf(z.location.key),c=L.slice(0,-1===u?0:u+1);c.push(i.key),L=c,x({action:"PUSH",location:i})}else(0,a.default)(void 0===s,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=o}})},replace:function(e,o){(0,a.default)(!("object"===(void 0===e?"undefined":r(e))&&void 0!==e.state&&void 0!==o),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var i=(0,u.createLocation)(e,o,j(),z.location);g.confirmTransitionTo(i,"REPLACE",v,function(e){if(e){var o=A(i),r=i.key,s=i.state;if(n)if(t.replaceState({key:r,state:s},null,o),m)window.location.replace(o);else{var u=L.indexOf(z.location.key);-1!==u&&(L[u]=i.key),x({action:"REPLACE",location:i})}else(0,a.default)(void 0===s,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(o)}})},go:T,goBack:function(){return T(-1)},goForward:function(){return T(1)},block:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=g.setPrompt(e);return U||(R(1),U=!0),function(){return U&&(U=!1,R(-1)),t()}},listen:function(e){var t=g.appendListener(e);return R(1),function(){R(-1),t()}}};return z}},"./node_modules/history/createTransitionManager.js":function(e,t,n){"use strict";t.__esModule=!0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/history/node_modules/warning/browser.js"));t.default=function(){var e=null,t=[];return{setPrompt:function(t){return(0,o.default)(null==e,"A history supports only one prompt at a time"),e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,i){if(null!=e){var a="function"==typeof e?e(t,n):e;"string"==typeof a?"function"==typeof r?r(a,i):((0,o.default)(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==a)}else i(!0)},appendListener:function(e){var n=!0,o=function(){n&&e.apply(void 0,arguments)};return t.push(o),function(){n=!1,t=t.filter(function(e){return e!==o})}},notifyListeners:function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];t.forEach(function(e){return e.apply(void 0,n)})}}}},"./node_modules/history/node_modules/warning/browser.js":function(e,t,n){e.exports=n("dll-reference vendor_45cc4e9479b9aa87a870")("./node_modules/history/node_modules/warning/browser.js")},"./node_modules/invariant/browser.js":function(e,t,n){e.exports=n("dll-reference vendor_45cc4e9479b9aa87a870")("./node_modules/invariant/browser.js")},"./node_modules/mobx-react/index.module.js":function(e,t,n){e.exports=n("dll-reference vendor_45cc4e9479b9aa87a870")("./node_modules/mobx-react/index.module.js")},"./node_modules/mobx/lib/mobx.module.js":function(e,t,n){e.exports=n("dll-reference vendor_45cc4e9479b9aa87a870")("./node_modules/mobx/lib/mobx.module.js")},"./node_modules/prop-types/index.js":function(e,t,n){e.exports=n("dll-reference vendor_45cc4e9479b9aa87a870")("./node_modules/prop-types/index.js")},"./node_modules/react-dom/index.js":function(e,t,n){e.exports=n("dll-reference vendor_45cc4e9479b9aa87a870")("./node_modules/react-dom/index.js")},"./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&"object"==(void 0===e?"undefined":o(e))&&"default"in e?e.default:e}(n("./node_modules/react/index.js")),i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t},s=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.Children.only(this.props.children)},t}(r.Component);t.AppContainer=s,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e}},"./node_modules/react-hot-loader/index.js":function(e,t,n){"use strict";e.exports=n("./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js")},"./node_modules/react-router-dom/es/index.js":function(e,t,n){e.exports=n("dll-reference vendor_45cc4e9479b9aa87a870")("./node_modules/react-router-dom/es/index.js")},"./node_modules/react/index.js":function(e,t,n){e.exports=n("dll-reference vendor_45cc4e9479b9aa87a870")("./node_modules/react/index.js")},"./node_modules/resolve-pathname/index.js":function(e,t,n){e.exports=n("dll-reference vendor_45cc4e9479b9aa87a870")("./node_modules/resolve-pathname/index.js")},"./node_modules/semantic-ui-css/semantic.min.css":function(e,t){},"./node_modules/semantic-ui-react/dist/es/index.js":function(e,t,n){e.exports=n("dll-reference vendor_45cc4e9479b9aa87a870")("./node_modules/semantic-ui-react/dist/es/index.js")},"./node_modules/value-equal/index.js":function(e,t,n){e.exports=n("dll-reference vendor_45cc4e9479b9aa87a870")("./node_modules/value-equal/index.js")},"./resources sync recursive .*":function(e,t,n){var o={"./icon.icns":"./resources/icon.icns","./icon.ico":"./resources/icon.ico","./icon.png":"./resources/icon.png"};function r(e){var t=i(e);return n(t)}function i(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="./resources sync recursive .*"},"./resources/icon.icns":function(e,t,n){e.exports=n.p+"resources/icon.icns"},"./resources/icon.ico":function(e,t,n){e.exports=n.p+"resources/icon.ico"},"./resources/icon.png":function(e,t,n){e.exports=n.p+"resources/icon.png"},0:function(e,t,n){e.exports=n("./app/index.js")},"dll-reference vendor_45cc4e9479b9aa87a870":function(e,t){e.exports=vendor_45cc4e9479b9aa87a870},electron:function(e,t){e.exports=require("electron")}});