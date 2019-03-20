(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(1)),o=i(n(3));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,c(t).call(this,e))}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r.default.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.props.start&&this.schedule()}},{key:"componentDidUpdate",value:function(e){e.start===this.props.start&&e.duration===this.props.duration||(clearTimeout(this.timeout),this.props.start&&this.schedule())}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"schedule",value:function(){var e=this;this.timeout=setTimeout(function(){e.props.onTrigger&&e.props.onTrigger()},this.props.duration)}},{key:"render",value:function(){return!1}}])&&l(n.prototype,o),i&&l(n,i),t}();t.default=function(e){var t=e.delay;return r.default.createElement(o.default.Consumer,null,function(e){return r.default.createElement(f,{duration:t,onTrigger:function(){return e.scrollTo(function(e){return e.index})},start:!e.scrolling})})}},102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return e.reduce(function(n,r,o){var i=t.call(e,r,o);return i>n.score?{index:o,score:i}:n},{index:-1,score:-1/0}).index}},103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1)),o=a(n(104)),i=a(n(22));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){function t(e,n){var r,a,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,u=c(t).call(this,e,n),(r=!u||"object"!==l(u)&&"function"!==typeof u?f(a):u).handlePointerOver=(0,o.default)(r.handlePointerOver.bind(f(f(r))),300),r.handleScroll=r.handleScroll.bind(f(f(r))),r.emitScroll=(0,i.default)(function(e,t,n){r.props.onScroll&&r.props.onScroll({initial:e,fraction:t,width:n})}),r}var n,a,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r.default.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props.target;e&&(e.addEventListener("pointerover",this.handlePointerOver,{passive:!0}),e.addEventListener("scroll",this.handleScroll,{passive:!0}),this.emitInitialScrollEvent(e))}},{key:"componentDidUpdate",value:function(e){if(e.target!==this.props.target){var t=e.target,n=this.props.target;t&&(t.removeEventListener("pointerover",this.handlePointerOver),t.removeEventListener("scroll",this.handleScroll)),n&&(n.addEventListener("pointerover",this.handlePointerOver,{passive:!0}),n.addEventListener("scroll",this.handleScroll,{passive:!0}),this.emitInitialScrollEvent(n))}}},{key:"emitInitialScrollEvent",value:function(e,t){var n=this;t||e.scrollWidth!==e.offsetWidth||setTimeout(function(){return n.emitInitialScrollEvent(e,!0)}),this.handleScroll({target:e},!0)}},{key:"componentWillUnmount",value:function(){var e=this.props.target;e&&e.removeEventListener("scroll",this.handleScroll)}},{key:"handlePointerOver",value:function(){var e=this.props.target;this.handleScroll({target:e})}},{key:"handleScroll",value:function(e){var t=e.target,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.offsetWidth,o=t.scrollLeft,i=t.scrollWidth;this.emitScroll(n,"".concat(i===r?0:o/(i-r)*100,"%"),"".concat(r/i*100,"%"))}},{key:"render",value:function(){return!1}}])&&u(n.prototype,a),d&&u(n,d),t}();t.default=d},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n,r=0;return function(){var o=arguments;n||(n=function(e,t){if(t>0)return setTimeout(e,t);e()}(function(){n=null,r=Date.now(),e.apply(null,o)},t+r-Date.now()))}}},105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(1))&&r.__esModule?r:{default:r};function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){var n=Math.sign(t-e),r=e+Math.sqrt(Math.abs(t-e))*n;return n>0?Math.min(t,r):Math.max(t,r)}var f=function(e){function t(e,n){var r,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(r=!(a=l(t).call(this,e,n))||"object"!==i(a)&&"function"!==typeof a?c(o):a).handleCancelAnimation=r.handleCancelAnimation.bind(c(c(r))),r}var n,r,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o.default.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props.target;e&&(this.addEventListeners(e),this.animate("scrollLeft",e.scrollLeft,this.props.scrollLeft,1))}},{key:"componentDidUpdate",value:function(e){var t=e.scrollLeft!==this.props.scrollLeft,n=e.target!==this.props.target;n&&(this.removeEventListeners(e.target),this.addEventListeners(this.props.target)),(t||n)&&this.props.target&&this.animate("scrollLeft",this.props.target.scrollLeft,this.props.scrollLeft,1)}},{key:"componentWillUnmount",value:function(){this.removeEventListeners(this.props.target),cancelAnimationFrame(this.animator)}},{key:"addEventListeners",value:function(e){e&&e.addEventListener("pointerdown",this.handleCancelAnimation,{passive:!0})}},{key:"removeEventListeners",value:function(e){e&&e.removeEventListener("pointerdown",this.handleCancelAnimation)}},{key:"animate",value:function(e,t,n,r){var o=this,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Date.now();"number"===typeof n&&(cancelAnimationFrame(this.animator),this.animator=requestAnimationFrame(function(){var a=o.props.target;if(a){var l=function(e,t,n,r){for(var o=e,i=0;i<r;i++)o=n(o,t);return o}(t,n,s,(Date.now()-i)/5);Math.abs(n-l)<.5&&(l=n),a[e]=l,n===l?o.props.onEnd&&o.props.onEnd(!0):o.animate(e,t,n,r+1,i)}}))}},{key:"handleCancelAnimation",value:function(){cancelAnimationFrame(this.animator),this.props.onEnd&&this.props.onEnd(!1)}},{key:"render",value:function(){return!1}}])&&a(n.prototype,r),f&&a(n,f),t}();t.default=f},106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(1))&&r.__esModule?r:{default:r};function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,u(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.default.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.arg,n=e.fn;n&&n(t)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.arg,r=t.fn;(n!==e.arg||r!==e.fn)&&r(n)}},{key:"render",value:function(){return!1}}])&&a(n.prototype,r),i&&a(n,i),t}();t.default=s},107:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(28),a=n.n(i),l=(n(40),n(29)),u=n(30),c=n(32),s=n(31),f=n(33),d=n(8),m=n(34),p=n(10),h=n(2),v=n.n(h),b=Object(p.css)({maxWidth:948}),y=Object(p.css)({width:200}),g=Object(h.createBasicStyleSet)({autoHide:!1}),E=Object(m.a)({},g,{scrollBarHandler:g.scrollBarHandler+" "+Object(p.css)({backgroundColor:"Red"})});function O(){return Math.random().toString(36).substr(2,5)}var j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).handleRandomKeyClick=n.handleRandomKeyClick.bind(Object(d.a)(Object(d.a)(n))),n.state={key:O()},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleRandomKeyClick",value:function(){this.setState(function(){return{key:O()}})}},{key:"render",value:function(){var e=this.state.key;return o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("button",{onClick:this.handleRandomKeyClick},"Re-create component")),o.a.createElement("p",null,"Qui ad aute ipsum occaecat labore nostrud veniam ea Lorem proident esse cillum excepteur nulla. Minim pariatur deserunt consectetur adipisicing dolor velit occaecat velit ullamco aliquip. Eu incididunt velit ipsum ad voluptate amet irure ut nostrud nostrud culpa ullamco dolore. Et eiusmod eiusmod ad excepteur sunt. Veniam ipsum eiusmod tempor in."),o.a.createElement("p",null,"Ut incididunt labore elit deserunt ullamco consequat duis id proident eu aute. Ut ea do id magna id officia consequat aliqua ex qui deserunt anim nisi. Ipsum enim laboris anim ipsum deserunt ut occaecat qui. Do mollit reprehenderit proident sunt excepteur aliqua est ut qui exercitation aliquip consequat duis enim."),o.a.createElement("p",null,"Ut anim commodo nisi cillum tempor. Cillum adipisicing velit exercitation pariatur dolor exercitation mollit deserunt eiusmod ad id sit voluptate. Sit nulla et deserunt consequat culpa aliquip adipisicing. Velit ea id et id occaecat proident proident aliqua nostrud reprehenderit do aliqua. Irure nisi irure excepteur in eiusmod adipisicing nisi consectetur consectetur sit."),o.a.createElement("p",null,"Dolore ad sit voluptate esse exercitation cupidatat. Commodo excepteur sunt magna do sunt fugiat laboris non in Lorem proident aliqua tempor. Exercitation est ad laborum eu elit commodo dolore. Enim sint quis do incididunt duis minim veniam Lorem mollit ex nostrud deserunt. Pariatur fugiat sint eiusmod voluptate officia."),o.a.createElement("p",null,"In elit anim elit ea ex. Voluptate qui id laborum sit duis officia enim est velit sunt do. Amet aliqua occaecat laboris pariatur. Veniam eu reprehenderit ea esse officia esse dolor laborum deserunt. Laboris occaecat et aute nostrud consequat amet elit adipisicing non nostrud minim id voluptate sunt. Qui consequat veniam occaecat veniam dolor ex consequat. Ullamco elit ad commodo consequat ullamco magna aliqua nulla deserunt officia reprehenderit irure."),!!e&&o.a.createElement(v.a,{height:316,key:"".concat(e,"-a")},o.a.createElement("img",{alt:"Cat 01",src:"image/01.jpg"}),o.a.createElement("img",{alt:"Cat 02",src:"image/02.jpg"}),o.a.createElement("img",{alt:"Cat 03",src:"image/03.jpg"}),o.a.createElement("img",{alt:"Cat 04",src:"image/04.jpg"}),o.a.createElement("img",{alt:"Cat 05",src:"image/05.jpg"}),o.a.createElement("img",{alt:"Cat 06",src:"image/06.jpg"}),o.a.createElement("img",{alt:"Cat 07",src:"image/07.jpg"}),o.a.createElement("img",{alt:"Cat 08",src:"image/08.jpg"}),o.a.createElement("img",{alt:"Cat 09",src:"image/09.jpg"}),o.a.createElement("img",{alt:"Cat 10",src:"image/10.jpg"}),o.a.createElement("img",{alt:"Cat 11",src:"image/11.jpg"})),!!e&&o.a.createElement(v.a,{className:b+"",height:316,key:"".concat(e,"-b")},o.a.createElement("img",{alt:"Cat 01",src:"image/01.jpg"}),o.a.createElement("img",{alt:"Cat 02",src:"image/02.jpg"})),!!e&&o.a.createElement(v.a,{autoCenter:!1,autoHide:!1,height:316,key:"".concat(e,"-c"),leftFlipperText:"L",rightFlipperText:"R",styleSet:E},o.a.createElement("img",{alt:"Cat 01",src:"image/01.jpg"}),o.a.createElement("img",{alt:"Cat 02",src:"image/02.jpg"}),o.a.createElement("img",{alt:"Cat 03",src:"image/03.jpg"}),o.a.createElement("img",{alt:"Cat 04",src:"image/04.jpg"}),o.a.createElement("img",{alt:"Cat 05",src:"image/05.jpg"}),o.a.createElement("img",{alt:"Cat 06",src:"image/06.jpg"}),o.a.createElement("img",{alt:"Cat 07",src:"image/07.jpg"}),o.a.createElement("img",{alt:"Cat 08",src:"image/08.jpg"}),o.a.createElement("img",{alt:"Cat 09",src:"image/09.jpg"}),o.a.createElement("img",{alt:"Cat 10",src:"image/10.jpg"}),o.a.createElement("img",{alt:"Cat 11",src:"image/11.jpg"})),!!e&&o.a.createElement(v.a,{key:"".concat(e,"-d")}),!!e&&o.a.createElement(v.a,{key:"".concat(e,"-e")},o.a.createElement("ol",{className:y},o.a.createElement("li",null,"A"),o.a.createElement("li",null,"B"),o.a.createElement("li",null,"C")),o.a.createElement("ol",{className:y},o.a.createElement("li",null,"A"),o.a.createElement("li",null,"B"),o.a.createElement("li",null,"C")),o.a.createElement("ol",{className:y},o.a.createElement("li",null,"A"),o.a.createElement("li",null,"B"),o.a.createElement("li",null,"C")),o.a.createElement("ol",{className:y},o.a.createElement("li",null,"A"),o.a.createElement("li",null,"B"),o.a.createElement("li",null,"C")),o.a.createElement("ol",{className:y},o.a.createElement("li",null,"A"),o.a.createElement("li",null,"B"),o.a.createElement("li",null,"C")),o.a.createElement("ol",{className:y},o.a.createElement("li",null,"A"),o.a.createElement("li",null,"B"),o.a.createElement("li",null,"C")),o.a.createElement("ol",{className:y},o.a.createElement("li",null,"A"),o.a.createElement("li",null,"B"),o.a.createElement("li",null,"C"))),!!e&&o.a.createElement(v.a,{key:"".concat(e,"-f")},o.a.createElement("ul",{className:y},o.a.createElement("li",null,"A"),o.a.createElement("li",null,"B"),o.a.createElement("li",null,"C")),o.a.createElement("ul",{className:y},o.a.createElement("li",null,"A"),o.a.createElement("li",null,"B"),o.a.createElement("li",null,"C")),o.a.createElement("ul",{className:y},o.a.createElement("li",null,"A"),o.a.createElement("li",null,"B"),o.a.createElement("li",null,"C")),o.a.createElement("ul",{className:y},o.a.createElement("li",null,"A"),o.a.createElement("li",null,"B"),o.a.createElement("li",null,"C")),o.a.createElement("ul",{className:y},o.a.createElement("li",null,"A"),o.a.createElement("li",null,"B"),o.a.createElement("li",null,"C")),o.a.createElement("ul",{className:y},o.a.createElement("li",null,"A"),o.a.createElement("li",null,"B"),o.a.createElement("li",null,"C"))),o.a.createElement("p",null,"Deserunt mollit elit laborum quis commodo magna. Nulla ad amet pariatur exercitation sint dolore. Mollit in in duis deserunt dolore anim. Qui fugiat in sit ut do voluptate ipsum nostrud. Ad culpa officia sunt enim. Adipisicing ut dolore commodo fugiat. Do Lorem occaecat nisi nulla fugiat consectetur exercitation est sit et laborum."),o.a.createElement("p",null,"Sunt nostrud amet commodo consectetur culpa incididunt voluptate. Mollit tempor tempor nostrud ad non excepteur reprehenderit ea. Cillum mollit reprehenderit mollit minim eiusmod deserunt reprehenderit. Sit cupidatat laborum dolore et magna duis Lorem aute sint fugiat sunt sunt. Sit non nostrud aliquip et nisi ad ullamco aute proident enim sit sit consectetur velit. Enim excepteur voluptate culpa anim laborum commodo eu excepteur."),o.a.createElement("p",null,"Mollit fugiat proident consectetur excepteur mollit. Commodo ipsum laboris dolor voluptate amet eu amet excepteur quis incididunt quis veniam. Laborum anim ex nisi consectetur commodo adipisicing elit minim cillum fugiat. Id non amet adipisicing non ipsum pariatur. Ad mollit ea culpa enim nostrud exercitation occaecat velit aute esse. Reprehenderit sint et duis veniam excepteur duis irure aliquip amet. Deserunt ullamco incididunt Lorem excepteur est ea ipsum."),o.a.createElement("p",null,"Excepteur et culpa fugiat occaecat labore cillum commodo aute aliqua est occaecat incididunt commodo voluptate. Non cillum aliquip duis voluptate mollit irure in. Cillum cupidatat voluptate ullamco eiusmod amet officia laboris commodo occaecat."),o.a.createElement("p",null,"Minim sint tempor ipsum aute. Consequat est ipsum esse commodo dolore adipisicing. Occaecat commodo cillum ut magna cupidatat reprehenderit nisi. Non consequat aliqua adipisicing sit eiusmod ipsum occaecat. Deserunt consectetur deserunt laborum magna dolor duis ut."))}}]),t}(o.a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a.a.render(o.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-film",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-film","/service-worker.js");S?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):w(e)})}}()},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Composer",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Context",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"createBasicStyleSet",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Dots",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"FilmStrip",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Flipper",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ScrollBar",{enumerable:!0,get:function(){return s.default}}),t.default=void 0;var r=f(n(70)),o=f(n(20)),i=f(n(3)),a=f(n(23)),l=f(n(24)),u=f(n(25)),c=f(n(26)),s=f(n(27));function f(e){return e&&e.__esModule?e:{default:e}}var d=r.default;if(t.default=d,document&&document.head){var m=document.createElement("meta");m.setAttribute("name","react-film"),m.setAttribute("content","version=".concat("1.2.1-master.3a1f25d")),document.head.appendChild(m)}},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(1)),o=c(n(102)),i=c(n(3)),a=c(n(21)),l=c(n(103)),u=c(n(105));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){d(e,t,n[t])})}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){if(e){var n=t||e.scrollLeft,r=e.children[0].children,i=n+e.offsetWidth/2,a=(0,o.default)([].slice.call(r),function(e){var t=e.offsetLeft+e.offsetWidth/2;return 1/Math.abs(i-t)});if(~a){var l=r[a],u=l.offsetLeft+l.offsetWidth/2,c=a+(i-u)/l.offsetWidth;return(c%1>.99||c%1<.01)&&(c=Math.round(c)),{index:0===n?0:n>=e.scrollWidth-e.offsetWidth?r.length-1:Math.round(c),indexFraction:c,items:r,current:e}}}}var y=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=p(t).call(this,e),(n=!o||"object"!==s(o)&&"function"!==typeof o?v(r):o).handleScroll=n.handleScroll.bind(v(v(n))),n.handleScrollToEnd=n.handleScrollToEnd.bind(v(v(n))),n.state={filmStrip:null,scrollLeft:null,context:{numItems:0,scrollBarPercentage:"0%",scrollBarWidth:"0%",scrolling:!1,scrollTo:function(e){n.setState(function(t){var n=b(t.filmStrip,t.scrollLeft);if(n){var r=n.index,o=n.indexFraction,i=e({index:r,indexFraction:o});if("number"===typeof i)return{scrollLeft:function(e,t){if(e){var n=e.children[0].children,r=n[Math.max(0,Math.min(n.length-1,t))];if(r)return r.offsetLeft+r.offsetWidth/2-e.offsetWidth/2}}(t.filmStrip,i)}}})},scrollOneLeft:function(){n.state.context.scrollTo(function(e){var t=e.indexFraction;return Math.ceil(t)-1})},scrollOneRight:function(){n.state.context.scrollTo(function(e){var t=e.indexFraction;return Math.floor(t)+1})}},internalContext:{_setFilmStripRef:function(e){return n.setState(function(){return{filmStrip:e}})},_setNumItems:function(e){n.setState(function(t){return{context:f({},t.context,{numItems:e})}})}}},n}var n,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r.default.Component),n=t,(o=[{key:"componentWillUnmount",value:function(){clearTimeout(this.scrollTimeout)}},{key:"handleScroll",value:function(e){var t=this,n=e.fraction,r=e.initial,o=e.width;this.setState(function(e){var t=e.context,i=b(e.filmStrip,e.scrollLeft);if(i)return{context:f({},t,{index:i.index,indexFraction:i.indexFraction,scrolling:!r,scrollBarPercentage:n,scrollBarWidth:o})}}),r||(clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout(function(){t.setState(function(e){return{context:f({},e.context,{scrolling:!1})}})},500))}},{key:"handleScrollToEnd",value:function(){this.setState(function(){return{scrollLeft:null}})}},{key:"render",value:function(){var e=this.state;return r.default.createElement(a.default.Provider,{value:e.internalContext},r.default.createElement(i.default.Provider,{value:e.context},this.props.children,!!e.filmStrip&&r.default.createElement(l.default,{onScroll:this.handleScroll,target:e.filmStrip}),"number"===typeof e.scrollLeft&&!!e.filmStrip&&r.default.createElement(u.default,{onEnd:this.handleScrollToEnd,scrollLeft:e.scrollLeft,target:e.filmStrip})))}}])&&m(n.prototype,o),c&&m(n,c),t}();t.default=y},21:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n(1))&&r.__esModule?r:{default:r}).default.createContext({_setFilmStripRef:function(){return 0},_setNumItems:function(){return 0}});t.default=o},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=null,n=null;return function(){return t&&t.length===arguments.length&&![].some.call(arguments,function(e,n){return e!==t[n]})||(t=[].slice.call(arguments),n=e.apply(null,arguments)),n}}},23:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.autoHide,n=void 0===t||t,d=e.dotBoxSize,g=void 0===d?a:d,E=e.dotSize,O=void 0===E?l:E,j=e.flipperBoxWidth,S=void 0===j?s:j,w=e.flipperSize,_=void 0===w?f:w,C=e.scrollBarHeight,x=void 0===C?h:C,P=e.scrollBarMargin,k=void 0===P?v:P,M={carousel:"",dotsBox:u({height:g}),dotsItem:c({boxSize:g,size:O}),leftFlipper:m({boxWidth:S,size:_}),rightFlipper:p({boxWidth:S,size:_}),scrollBarBox:b({height:x,margin:k}),scrollBarHandler:y({height:x,margin:k})};if(n){var B,L={position:"absolute",top:0,transitionDelay:"1s",transitionDuration:"300ms"};M.leftFlipper=(0,r.css)(M.leftFlipper,{"& > div.slider":o({},L,{left:-50,transitionProperty:"left"}),"&:focus > div.slider":{left:0,transitionDelay:"0s"}}),M.rightFlipper=(0,r.css)(M.rightFlipper,{"& > div.slider":o({},L,{right:-50,transitionProperty:"right"}),"&:focus > div.slider":{right:0,transitionDelay:"0s"}}),M.scrollBarBox=(0,r.css)(M.scrollBarBox,{bottom:-30,transitionDelay:"1s",transitionDuration:"300ms",transitionProperty:"bottom"}),M.carousel=(0,r.css)({"&:hover, &.scrolling":(B={},i(B,"& .".concat(M.scrollBarBox+"",", & .").concat(M.leftFlipper+""," > div.slider, & .").concat(M.rightFlipper+""," > div.slider"),{transitionDelay:"0s"}),i(B,"& .".concat(M.scrollBarBox+""),{bottom:0}),i(B,"& .".concat(M.leftFlipper+""," > div.slider"),{left:0}),i(B,"& .".concat(M.rightFlipper+""," > div.slider"),{right:0}),B)})}return M};var r=n(4);function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=20,l=6,u=function(e){var t=e.height;return(0,r.css)({alignItems:"center",bottom:0,height:t,justifyContent:"center",width:"100%"})},c=function(e){var t=e.boxSize,n=e.size;return(0,r.css)({alignItems:"center",display:"flex",height:t,justifyContent:"center",width:t,"& > input":{cursor:"pointer",height:"100%",left:0,margin:0,opacity:0,position:"absolute",top:0,width:"100%"},"& > div":{background:"rgba(0, 0, 0, .2)",borderRadius:n/2,height:n,width:n},"&:hover > div, & > input:focus + div":{background:"rgba(0, 0, 0, .4)"},"& > input:active + div":{background:"rgba(0, 0, 0, .8)"},"& > input:checked:not(:active) + div":{background:"rgba(0, 0, 0, .6)"}})},s=60,f=40,d=function(e){var t=e.boxWidth,n=e.size;return(0,r.css)({background:"Transparent",cursor:"pointer",height:"100%",position:"absolute",top:0,width:t,"& > div.slider":{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",position:"absolute",top:0,width:"100%","& > div":{backgroundColor:"rgba(0, 0, 0, .6)",borderRadius:"50%",color:"rgba(255, 255, 255, .6)",fontFamily:["Consolas","monospace"].map(function(e){return"'".concat(e,"'")}).join(", "),fontSize:16,height:n,lineHeight:"".concat(n,"px"),transitionProperty:"background-color",transitionDuration:"100ms",width:n}},"&:hover, &:focus":{"& > div.slider > div":{backgroundColor:"rgba(0, 0, 0, .8)",color:"rgba(255, 255, 255, .8)",transitionDuration:0}},"&:active > div.slider > div":{backgroundColor:"Black",color:"White",transitionDuration:0}})},m=function(e){return(0,r.css)({left:0,"& > div.slider":{left:0}},d(e))},p=function(e){return(0,r.css)({right:0,"& > div.slider":{right:0}},d(e))},h=8,v=4,b=function(e){e.height;var t=e.margin;return(0,r.css)({bottom:0,padding:t,position:"absolute",transitionDelay:"1s",transitionDuration:"300ms",transitionProperty:"bottom",width:"100%"})},y=function(e){var t=e.height;e.margin;return(0,r.css)({backdropFilter:"blur(4px)",background:"rgba(255, 255, 255, .4)",borderRadius:t/2,height:t})}},24:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(4),o=l(n(7)),i=l(n(1)),a=l(n(3));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=(0,r.css)({display:"flex",listStyleType:"none",margin:0,padding:0}),h=(0,r.css)({position:"relative","& > input":{cursor:"pointer",height:"100%",left:0,margin:0,opacity:0,position:"absolute",top:0,width:"100%"}}),v=function(e){var t=e.children,n=e.className,r=e.index,a=e.itemClassName,l=e.numItems,u=e.scrollTo;return i.default.createElement("ul",{className:(0,o.default)(p+"",(n||"")+"")},new Array(l).fill().map(function(e,n){return i.default.createElement(b,{"aria-label":n+1,checked:n===r,className:a,index:n,key:n,scrollTo:u},t)}))},b=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=f(t).call(this,e))||"object"!==c(o)&&"function"!==typeof o?m(r):o).handleChange=n.handleChange.bind(m(m(n))),n.handleKeyPress=n.handleKeyPress.bind(m(m(n))),n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,i.default.Component),n=t,(r=[{key:"handleChange",value:function(){var e=this;this.props.scrollTo(function(){return e.props.index})}},{key:"handleKeyPress",value:function(e){var t=e.keyCode;13!==t&&32!==t||(e.preventDefault(),e.stopPropagation(),this.handleChange())}},{key:"render",value:function(){var e=this.props,t=e["aria-label"],n=e.checked,r=e.children,a=e.className;return i.default.createElement("li",{className:(0,o.default)(h+"",(a||"")+"")},i.default.createElement("input",{"aria-label":t,"aria-pressed":n,checked:n,onChange:this.handleChange,onKeyPress:this.handleKeyPress,role:"button",type:"checkbox"}),r&&r())}}])&&s(n.prototype,r),a&&s(n,a),t}();t.default=function(e){return i.default.createElement(a.default.Consumer,null,function(t){var n=t.index,r=t.numItems,o=t.scrollTo;return i.default.createElement(v,u({index:n,numItems:r,scrollTo:o},e))})}},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(4),o=u(n(7)),i=u(n(1)),a=u(n(106)),l=u(n(21));function u(e){return e&&e.__esModule?e:{default:e}}var c=(0,r.css)({MsOverflowStyle:"none",overflowX:"scroll",overflowY:"hidden",touchAction:"manipulation",WebkitOverflowScrolling:"touch","&::-webkit-scrollbar":{display:"none"},"& > ul":{display:"flex",listStyleType:"none",margin:0,padding:0}});t.default=function(e){return i.default.createElement(l.default.Consumer,null,function(t){var n=t._setFilmStripRef,r=t._setNumItems;return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:(0,o.default)(c+"",e.className),ref:n},i.default.createElement("ul",null,i.default.Children.map(e.children,function(e){return i.default.createElement("li",null,e)}))),i.default.createElement(a.default,{arg:i.default.Children.count(e.children),fn:r}))})}},26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(4),o=l(n(7)),i=l(n(1)),a=l(n(3));function l(e){return e&&e.__esModule?e:{default:e}}var u=(0,r.css)({border:0,outline:0,touchAction:"none"});t.default=function(e){var t=e["aria-label"],n=e.children,r=e.className,l=e.mode;return i.default.createElement(a.default.Consumer,null,function(e){return i.default.createElement("button",{"aria-label":t||("left"===l?"left":"right"),className:(0,o.default)(u+"",r),onClick:"left"===l?e.scrollOneLeft:e.scrollOneRight,type:"button"},i.default.createElement("div",{className:"slider"},n))})}},27:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(4),o=l(n(7)),i=l(n(1)),a=l(n(3));function l(e){return e&&e.__esModule?e:{default:e}}var u=(0,r.css)({boxSizing:"border-box"});t.default=function(e){var t=e.className,n=e.handlerClassName;return i.default.createElement(a.default.Consumer,null,function(e){var r=e.scrollBarPercentage,a=e.scrollBarWidth;return i.default.createElement("div",{className:(0,o.default)(u+"",t)},i.default.createElement("div",{className:n,style:{marginLeft:"".concat((1-parseFloat(a)/100)*parseFloat(r),"%"),width:a}}))})}},3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n(1))&&r.__esModule?r:{default:r}).default.createContext({numItems:0,scrollBarPercentage:"0%",scrollBarWidth:"0%",scrolling:!1,scrollOneLeft:function(){return 0},scrollOneRight:function(){return 0},scrollTo:function(){return 0}});t.default=o},35:function(e,t,n){e.exports=n(107)},40:function(e,t,n){},70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(4),o=h(n(7)),i=h(n(1)),a=h(n(101)),l=h(n(20)),u=h(n(3)),c=h(n(23)),s=h(n(24)),f=h(n(25)),d=h(n(26)),m=h(n(22)),p=h(n(27));function h(e){return e&&e.__esModule?e:{default:e}}function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=(0,r.css)({overflow:"hidden",position:"relative"}),S=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=g(this,E(t).call(this,e))).createHeightStyle=(0,m.default)(function(e){return{height:e}}),n.createBasicStyleSet=(0,m.default)(function(e){var t=e.autoHide;return(0,c.default)({autoHide:t})}),n}var n,r,h;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,i.default.Component),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){b(e,t,n[t])})}return e}({},this.createBasicStyleSet(t),t.styleSet||{}),r=n.carousel,c=n.dotsBox,m=n.dotsItem,h=n.leftFlipper,v=n.rightFlipper,y=n.scrollBarBox,g=n.scrollBarHandler,E=t.leftFlipperText,O=void 0===E?"<":E,S=t.rightFlipperText,w=void 0===S?">":S,_=t.showDots,C=void 0===_||_,x=t.showFlipper,P=void 0===x||x,k=t.showScrollBar,M=void 0===k||k;return i.default.createElement(l.default,null,i.default.createElement(u.default.Consumer,null,function(n){var a=n.numItems,l=n.scrollBarWidth,u=n.scrolling;return i.default.createElement("div",{className:t.className},i.default.createElement("div",{className:(0,o.default)(j+"",{scrolling:u},r+""),style:e.createHeightStyle(t.height)},!!a&&"100%"!==l&&!!P&&i.default.createElement(d.default,{className:h+"",mode:"left"},i.default.createElement("div",null,O)),i.default.createElement(f.default,null,t.children),!!a&&"100%"!==l&&!!P&&i.default.createElement(d.default,{className:v+"",mode:"right"},i.default.createElement("div",null,w)),!!a&&"100%"!==l&&!!M&&i.default.createElement(p.default,{className:y+"",handlerClassName:g+""})),!!a&&"100%"!==l&&!!C&&i.default.createElement(s.default,{className:c+"",itemClassName:m+""},function(){return i.default.createElement("div",null)}))}),!1!==t.autoCenter&&i.default.createElement(a.default,null))}}])&&y(n.prototype,r),h&&y(n,h),t}();t.default=S}},[[35,2,1]]]);
//# sourceMappingURL=main.9f9f52d8.chunk.js.map