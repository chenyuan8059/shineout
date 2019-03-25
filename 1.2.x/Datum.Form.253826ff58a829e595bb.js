(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[17],{1e3:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(214),o=t(215),l=t(263),i=t(20),u=t(1001),s=t.n(u),f=t(1002),m=t.n(f),d=Object(i.b)(s.a,m.a),v=[];l.a.start(),l.a.setType("example"),t(1003);var h=l.a.end(),b={example:{text:t(1004),log:h.example}};n.default=Object(r.a)(function(e){return c.a.createElement(o.b,Object.assign({},e,{codes:b,source:d,examples:v}))})},1001:function(e,n){e.exports='# Data.Form 表单数据处理\n\nForm 表单数据处理辅助类，用来收集和分发数据到输入组件。\n\n## 示例\n\n<code name="example" />\n\n实际使用见 [Form](#/components/Form)\n\n## 初始化参数\n\n### removeUndefined *boolean*\n\n是否移除值为 undefined 的数据，默认值为 true。\n\n### onChange *function(data)*\n\n值变化时回调函数。\n\n### value *object*\n\n初始值\n\n## 函数\n\n### getValue *function():object*\n获取当前表单所有对象值。\n\n### setValue *function(object)*\n设置值。新的值会替代当前值。\n\n### set *fuction(name, value)*\n设置数据。\n\n### get *fuction(name)*\n获取单个字段值。\n\n### validateFields *function(names)*\n校验指定字段。names为字段名称数组。\n\n### validateClear *function()*\n清除校验结果。'},1002:function(e,n){e.exports='# Data.Form\n\nThe auxiliary class of Form that process data for collecting and distributing data to input components.\n\n## Example\n\n<code name="example" />\n\n<br />\n\nSee the example use in [Form](#/components/Form)\n\n## Arguments\n\n### removeUndefined *boolean*\n\nWhether to remove the data whose value is undefined. The default value is true.\n\n### onChange *function(data)*\n\nThe callback function when the value is changing.\n\n### value *object*\n\nThe initial value.\n\n## Methods\n\n### getValue *function():object*\nGet all values of the current form.\n\n### setValue *function(object)*\nSet new value, will replace the current value。\n\n### set *fuction(name, value)*\nSet the value specified by name.\n\n### get *fuction(name)*\nGet a single field value.\n\n### validateFields *function(names)*\nVerify specified fields.\n\n### validateClear *function()*\nClear the validate result.'},1003:function(e,n,t){"use strict";t.r(n);var a=new(t(66).a.Form);a.setValue({email:"test@123.com",name:{lastName:"Potter"},favors:["red","yellow"]}),a.set("age",20),a.set("name.firstName","Harry"),console.log(a.get("age")),console.log(a.get("name")),console.log(a.get("name.firstName")),console.log(a.get("name.lastName")),console.log(a.get("favors[1]")),a.set("favors[2]","blue"),console.log(a.get("favors")),console.log(a.getValue())},1004:function(e,n){e.exports="import { Datum } from 'shineout'\n\nconst datum = new Datum.Form()\n\ndatum.setValue({ email: 'test@123.com', name: { lastName: 'Potter' }, favors: ['red', 'yellow'] })\ndatum.set('age', 20)\ndatum.set('name.firstName', 'Harry')\nconsole.log(datum.get('age'))\nconsole.log(datum.get('name'))\nconsole.log(datum.get('name.firstName'))\nconsole.log(datum.get('name.lastName'))\nconsole.log(datum.get('favors[1]'))\ndatum.set('favors[2]', 'blue')\nconsole.log(datum.get('favors'))\nconsole.log(datum.getValue())\n"},214:function(e,n,t){"use strict";var i=t(29),u=t(0),s=t.n(u),f=t(220),m=t(72),d=t(25);n.a=function(l){return function(){var e=Object(u.useState)(""),n=Object(i.a)(e,2),a=n[0],c=n[1],t=Object(u.useState)([]),r=Object(i.a)(t,1)[0],o=Object(u.useCallback)(function(e){e.forEach(function(e){r.push(e)})},[]);Object(u.useEffect)(function(){var e=function(){var t=document.documentElement.scrollTop,e=r.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var n=document.querySelector("#".concat(e.id));n&&n.offsetTop<=t&&(a=e.id)}),c(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return s.a.createElement("div",{className:Object(d.f)("_")},s.a.createElement(l,{onHeadingSetted:o}),s.a.createElement(f.a,{className:Object(d.f)("sticky"),top:50},s.a.createElement("div",{className:Object(d.f)("nav")},r.map(function(e,n){var t=e.children.filter(function(e){return"string"==typeof e});return s.a.createElement("a",{key:n,className:Object(d.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===m.a.location.search.indexOf("?example="))m.a.push("".concat(m.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var n=document.getElementById(e);n&&n.scrollIntoView()}}.bind(null,e.id)},t)}))))}}},215:function(e,n,t){"use strict";var S=t(0),T=t.n(S),s=t(15),C=t(29),a=t(221),f=t.n(a),m=t(37),F=t(25),d=t(20),c=t(14),o=t.n(c),r=t(222),l=t.n(r),H=(t(223),function(e){var n=e.language,t=void 0===n?"lang-jsx":n,a=e.onHighLight,c=e.value,r=Object(S.useRef)(null);return Object(S.useEffect)(function(){var e=r.current;l.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),T.a.createElement("pre",{ref:r,className:o()(t||"lang-jsx",Object(F.a)("pre"))},T.a.createElement("code",null,c))}),V=t(76),i=t(67),u=t(4),v=t(5),h=t(8),b=t(2),g=t(7),p=t(19),j=t(216),D=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={ready:!1},n.placeholderRef=function(e){n.placeholder=e},n}return Object(g.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(j.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(j.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,n=this.props,t=n.children,a=n.placeholder;return e?t:T.a.createElement("span",{ref:this.placeholderRef},a)}}]),t}(p.b),P=t(75),L=t(72),R=T.a.createElement("div",{className:Object(F.a)("placeholder")},T.a.createElement(i.a,null));function O(e){var n=e.component,t=e.id,a=e.name,c=e.rawText,r=e.title,o=Object(S.useRef)(null),l=Object(S.useState)(!1),i=Object(C.a)(l,2),u=i[0],s=i[1],f=Object(S.useState)(),m=Object(C.a)(f,2),d=m[0],v=m[1],h=Object(S.useState)(),b=Object(C.a)(h,1)[0],g=function e(n,t,a){o.current.style.height="".concat(n*(t-1),"px"),1<t&&setTimeout(function(){e(n,t-1,a)},16),a&&(document.documentElement.scrollTop-=n)};Object(S.useEffect)(function(){if(o.current)if(u)o.current.style.height="".concat(d,"px");else{var e=d%15;0<e&&g(e,1,b),g((d-e)/15,15,b)}},[u]);var p=function(e){s(!u),b=e},j=function(e){return T.a.createElement("a",{href:"javascript:;",className:Object(F.a)("toggle"),onClick:p.bind(null,e)},T.a.createElement(P.a,{name:u?"code-close":"code"}))},O=c.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),E=L.a.location.search,y="?example=";if(0===E.indexOf(y)&&(E=E.replace(y,""),a.indexOf(E)<0))return null;var x=r.split("\n"),w=Object(V.a)(x),k=w[0],N=w.slice(1);return k&&(k=k.trim()),T.a.createElement(S.Fragment,null,k&&T.a.createElement("h3",{key:"0",id:t},k),T.a.createElement(D,{placeholder:R},T.a.createElement("div",{className:Object(F.a)("_",u&&"showcode")},T.a.createElement("div",{className:Object(F.a)("body")},Object(S.createElement)(n)),0<r.length&&T.a.createElement("div",{className:Object(F.a)("desc")},N.map(function(e,n){return T.a.createElement("div",{key:n,dangerouslySetInnerHTML:{__html:e}})}),j(!1)),T.a.createElement("div",{ref:o,className:Object(F.a)("code")},T.a.createElement(H,{onHighLight:function(e){v(e)},onClose:p,value:O}),j(!0)))))}O.defaultProps={rawText:""};var E=function(e){var n=e.children,t=Object(S.useState)(!1),a=Object(C.a)(t,2),c=a[0],r=a[1],o=n.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),l=c?"pre":"div";return T.a.createElement("div",{onClick:function(){r(!c)},className:Object(F.e)("console")},T.a.createElement(l,null,o))};E.defaultProps={children:[]};var y=E;function x(e){var n=e.children;return T.a.createElement("table",{className:"doc-api-table"},n)}x.defaultProps={};var w=x,k=/^<code name="([\w|-]+)" /,N=/^<example name="([\w|-]+)"/;function _(e){var n=e.onHeadingSetted,r=e.codes,o=e.examples,t=e.source,a=Object(S.useState)([]),c=Object(C.a)(a,1)[0],l=Object(S.useState)({}),i=Object(C.a)(l,1)[0];Object(S.useEffect)(function(){n&&n(c)},[]);var u=function(e){c.push(e)};return c=[],T.a.createElement(f.a,{className:Object(F.e)("_"),source:t,renderers:{code:H,heading:function(e){var n=e.level,t=e.children,a="".concat(n,"-").concat(t[0]),c="h".concat(n);if("object"==typeof t[0])return T.a.createElement(c,null,t);if(!i[a]){var r="heading-".concat(Object(m.b)());2!==n&&3!==n||u({id:r,level:n,children:t}),i[a]=T.a.createElement(c,{id:r},t)}return i[a]},html:function(e){if("<example />"===e.value)return function(){if(i.examples)return i.examples;if(!o)return T.a.createElement("div",null);var e=Object(d.b)("示例","Example"),n="heading-".concat(Object(m.b)());return u({id:n,level:2,children:[e]}),i.examples=[T.a.createElement("h2",{key:"h",id:n},e)].concat(Object(s.a)(o.map(function(e,n){if(/\d+-/.test(e.name)){var t="heading-".concat(e.name),a=e.title.split("\n"),c=Object(C.a)(a,1)[0];return u({id:t,level:3,children:[c]}),T.a.createElement(O,Object.assign({key:n,id:t},e,{lazy:2<n}))}}))),i.examples}();var n=e.value.match(N);if(n)return function(n){var e="example-".concat(n);if(!i[e]){var t=(o||[]).find(function(e){return e.name===n});i[e]=t?T.a.createElement(O,t):null}return i[e]}(n[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return T.a.createElement("br",null);var t,a,c=e.value.match(k);return c?(t=c[1],(a=r[t])?[T.a.createElement(H,{key:"cb",value:a.text})].concat(Object(s.a)(a.log.map(function(e,n){return T.a.createElement(y,{key:n},e)}))):(console.error("Code ".concat(t," not existed")),null)):null},table:w,link:function(e){var n=e.href.indexOf(!1)?"_blank":void 0;return T.a.createElement("a",{href:e.href,target:n},e.children)}}})}_.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var I=t(74),z=t(214);t.d(n,"a",function(){return M});var B,J=((B=function(e){var n=Object(S.useState)(e.source),t=Object(C.a)(n,2),a=t[0],c=t[1];return Object(S.useEffect)(function(){e.loader&&e.loader().then(function(e){c(e.default)})},[]),a?T.a.createElement(_,Object.assign({},e,{source:a})):T.a.createElement(I.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(S.memo)(B));n.b=J;function M(n){return Object(z.a)(function(e){return T.a.createElement(J,Object.assign({},e,{loader:n}))})}},216:function(e,n,t){"use strict";t.d(n,"a",function(){return s}),t.d(n,"b",function(){return f});var a=t(218),c=t(37),r=t(64),o={},l=null,i=!1,u=r.b.height;function s(e){var n=e.element.getBoundingClientRect();if(n.bottom<0||n.top>u){var t=Object(c.b)();return o[t]=e,t}return e.render(),null}function f(e){e&&delete o[e]}document.addEventListener("scroll",function(){l&&clearTimeout(l),l=setTimeout(function(){i||(i=!0,Object.keys(o).forEach(function(e){var n=o[e],t=n.element,a=n.render,c=t.getBoundingClientRect();c.bottom<0||c.top>u||(delete o[e],a())}),i=!1),l=null},80)},a.a)},263:function(e,n,t){"use strict";var a=t(4),c=t(5),r=window.console,o=function(){function e(){Object(a.a)(this,e),this.logs={default:[]},this.current=this.logs.default}return Object(c.a)(e,[{key:"setType",value:function(e){this.logs[e]||(this.logs[e]=[]),this.current=this.logs[e]}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var a=n.map(function(e){return"".concat((n=e,JSON.stringify(n,function(e,n){return"function"==typeof n?"fn#fn".concat(n.toString(),"fn#fn"):n},2)));var n});this.current.push(a)}}]),e}();n.a={start:function(){window.console=new o},setType:function(e){window.console.setType(e)},end:function(){var e=window.console.logs;return window.console=r,e}}}}]);