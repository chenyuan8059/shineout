(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[33],{1177:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(214),l=n(215),i=n(20),s=n(1178),o=n.n(s),u=n(1179),d=n.n(u),m=Object(i.b)(o.a,d.a),f=[{name:"1-base",title:Object(i.b)("基本用法 \n 基础的进度条","Base \n Basic progress bar"),component:n(1180).default,rawText:n(1181)},{name:"2-type",title:Object(i.b)("样式 \n 内置了四种样式，通过 type 来调用","Type \n There are 4 built-in style."),component:n(1182).default,rawText:n(1183)},{name:"3-color",title:Object(i.b)(" \n 通过 color 使用自定义颜色","Color \n Use custom colors."),component:n(1184).default,rawText:n(1185)},{name:"4-circle",title:Object(i.b)("圆形 \n 设置 shape 为 'circle'，显示为环形进度条","Circle \n Set the shape property to circle to display circular progress bar."),component:n(1186).default,rawText:n(1187)},{name:"5-size",title:Object(i.b)("大小 \n 通过 size 或 style 来控制大小 \n 通过 strokeWidth 属性来控制线框宽度","Size \n Set size(circle) or style(line) property to change the size."),component:n(1188).default,rawText:n(1189)},{name:"6-animation",title:Object(i.b)("动态示例 \n value 变更时动画效果演示","Animation \n The animation for changing value."),component:n(1190).default,rawText:n(1191)}];t.default=Object(c.a)(function(e){return r.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:m,examples:f}))})},1178:function(e,t){e.exports="# Progress *进度条*\n\n<example />\n\n## API \n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | string | '#e9ecef' | 背景色 |\n| className | string | - | 扩展className |\n| children | string \\| ReactElement | - | 附加内容 |\n| color | string | primary | 前景色 |\n| shape | string | 'line' | 样式，可选值为 \\['line', 'circle'] |\n| size | number | 100 | 进度条大小，仅对 circle 有效 |\n| strokeWidth | number | 8 | 线框宽度 |\n| style | object | 无 | 最外层扩展样式 |\n| type | string | 无 | 内置配色，可选值为，\\['success', 'info', 'warning', 'danger'] |\n| value | number | 0 | 百分比值，0 <= value <= 100 |"},1179:function(e,t){e.exports="# Progress\n\n<example />\n\n## API \n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| background | string | '#e9ecef' | Background color |\n| className | string | - | Extend className |\n| children | string \\| ReactElement | - | Content |\n| color | string | primary | Foreground color |\n| shape | string | 'line' | Options:  \\['line', 'circle'] |\n| size | number | 100 | The width and height of 'circle' shape. |\n| strokeWidth | number | 8 | The width of the stroke |\n| style | object | - | Container element style |\n| type | string | - | Built-in color, options: \\['success', 'info', 'warning', 'danger'] |\n| value | number | 0 | Percentage, 0 <= value <= 100 |"},1180:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(257);t.default=function(){return r.a.createElement("div",{style:{width:400}},r.a.createElement(c.a,{value:50}),r.a.createElement("br",null),r.a.createElement(c.a,{value:50},"50%"))}},1181:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 基础的进度条\n * en - Base\n *    -- Basic progress bar\n */\nimport React from 'react'\nimport { Progress } from 'shineout'\n\nexport default function() {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress value={50} />\n      <br />\n      <Progress value={50}>50%</Progress>\n    </div>\n  )\n}\n"},1182:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(257);t.default=function(){return r.a.createElement("div",{style:{width:400}},r.a.createElement(c.a,{value:100,type:"success"}),r.a.createElement("br",null),r.a.createElement(c.a,{value:90,type:"info"}),r.a.createElement("br",null),r.a.createElement(c.a,{value:80,type:"warning"}),r.a.createElement("br",null),r.a.createElement(c.a,{value:70,type:"danger"}))}},1183:function(e,t){e.exports='/**\n * cn - 样式\n *    -- 内置了四种样式，通过 type 来调用\n * en - Type\n *    -- There are 4 built-in style.\n */\nimport React from \'react\'\nimport { Progress } from \'shineout\'\n\nexport default function() {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress value={100} type="success" />\n      <br />\n      <Progress value={90} type="info" />\n      <br />\n      <Progress value={80} type="warning" />\n      <br />\n      <Progress value={70} type="danger" />\n    </div>\n  )\n}\n'},1184:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(257);t.default=function(){return r.a.createElement("div",{style:{width:400}},r.a.createElement(c.a,{value:60,color:"#531dab"}),r.a.createElement("br",null),r.a.createElement(c.a,{value:50,color:"linear-gradient(45deg, #ffadd2 25%, #eb2f96 25%, #eb2f96 50%, #ffadd2 50%, #ffadd2 75%, #eb2f96 75%, #eb2f96)"}))}},1185:function(e,t){e.exports="/**\n * cn -\n *    -- 通过 color 使用自定义颜色\n * en - Color\n *    -- Use custom colors.\n */\nimport React from 'react'\nimport { Progress } from 'shineout'\n\nexport default function() {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress value={60} color=\"#531dab\" />\n      <br />\n      <Progress\n        value={50}\n        color=\"linear-gradient(45deg, #ffadd2 25%, #eb2f96 25%, #eb2f96 50%, #ffadd2 50%, #ffadd2 75%, #eb2f96 75%, #eb2f96)\"\n      />\n    </div>\n  )\n}\n"},1186:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(257);t.default=function(){return r.a.createElement("div",null,r.a.createElement(c.a,{shape:"circle",style:{marginRight:20},value:30}),r.a.createElement(c.a,{shape:"circle",style:{marginRight:20},value:70},"70%"),r.a.createElement(c.a,{shape:"circle",type:"success",style:{marginRight:20},value:100},"Success"),r.a.createElement(c.a,{shape:"circle",strokeLinecap:"butt",color:"#531dab",value:70}))}},1187:function(e,t){e.exports='/**\n * cn - 圆形\n *    -- 设置 shape 为 \'circle\'，显示为环形进度条\n * en - Circle\n *    -- Set the shape property to circle to display circular progress bar.\n */\nimport React from \'react\'\nimport { Progress } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Progress shape="circle" style={{ marginRight: 20 }} value={30} />\n\n      <Progress shape="circle" style={{ marginRight: 20 }} value={70}>\n        70%\n      </Progress>\n\n      <Progress shape="circle" type="success" style={{ marginRight: 20 }} value={100}>\n        Success\n      </Progress>\n\n      <Progress shape="circle" strokeLinecap="butt" color="#531dab" value={70} />\n    </div>\n  )\n}\n'},1188:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(257);t.default=function(){return r.a.createElement("div",null,r.a.createElement(c.a,{style:{width:120},strokeWidth:3,value:30}),r.a.createElement("br",null),r.a.createElement(c.a,{shape:"circle",size:50,strokeWidth:6,style:{marginRight:20},value:70}),r.a.createElement(c.a,{shape:"circle",type:"warning",style:{marginRight:20,width:70,height:70},value:70},"70%"),r.a.createElement(c.a,{shape:"circle",type:"success",value:100},"Success"))}},1189:function(e,t){e.exports='/**\n * cn - 大小\n *    -- 通过 size 或 style 来控制大小\n *    -- 通过 strokeWidth 属性来控制线框宽度\n * en - Size\n *    -- Set size(circle) or style(line) property to change the size.\n */\nimport React from \'react\'\nimport { Progress } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Progress style={{ width: 120 }} strokeWidth={3} value={30} />\n\n      <br />\n\n      <Progress shape="circle" size={50} strokeWidth={6} style={{ marginRight: 20 }} value={70} />\n\n      <Progress shape="circle" type="warning" style={{ marginRight: 20, width: 70, height: 70 }} value={70}>\n        70%\n      </Progress>\n\n      <Progress shape="circle" type="success" value={100}>\n        Success\n      </Progress>\n    </div>\n  )\n}\n'},1190:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var a=n(4),r=n(5),c=n(8),l=n(2),i=n(7),s=n(0),o=n.n(s),u=n(257),d=n(80),m=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(c.a)(this,Object(l.a)(n).call(this,e))).handleClick=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:t.state.value;100<=(e+=12*Math.random())?(e=100,t.setState({value:e})):t.setState({value:e},function(){setTimeout(t.handleClick,320)})},t.state={value:0},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.state.value;return o.a.createElement("div",null,o.a.createElement(u.a,{style:{width:400},value:e},o.a.createElement("div",{style:{width:50}},e.toFixed(0))),o.a.createElement("br",null),o.a.createElement(u.a,{shape:"circle",type:"success",value:e},e.toFixed(0),"%"),o.a.createElement(d.a,{style:{marginLeft:80},onClick:this.handleClick.bind(this,0)},"Start"))}}]),n}(s.Component)},1191:function(e,t){e.exports="/**\n * cn - 动态示例\n *    -- value 变更时动画效果演示\n * en - Animation\n *    -- The animation for changing value.\n */\nimport React, { Component } from 'react'\nimport { Button, Progress } from 'shineout'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { value: 0 }\n  }\n\n  handleClick = (value = this.state.value) => {\n    value += Math.random() * 12\n    if (value >= 100) {\n      value = 100\n      this.setState({ value })\n    } else {\n      this.setState({ value }, () => {\n        setTimeout(this.handleClick, 320)\n      })\n    }\n  }\n\n  render() {\n    const { value } = this.state\n\n    return (\n      <div>\n        <Progress style={{ width: 400 }} value={value}>\n          <div style={{ width: 50 }}>{value.toFixed(0)}</div>\n        </Progress>\n\n        <br />\n\n        <Progress shape=\"circle\" type=\"success\" value={value}>\n          {value.toFixed(0)}%\n        </Progress>\n\n        <Button style={{ marginLeft: 80 }} onClick={this.handleClick.bind(this, 0)}>\n          Start\n        </Button>\n      </div>\n    )\n  }\n}\n"},214:function(e,t,n){"use strict";var s=n(29),o=n(0),u=n.n(o),d=n(220),m=n(72),f=n(25);t.a=function(i){return function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],n=Object(o.useState)([]),c=Object(s.a)(n,1)[0],l=Object(o.useCallback)(function(e){e.forEach(function(e){c.push(e)})},[]);Object(o.useEffect)(function(){var e=function(){var n=document.documentElement.scrollTop,e=c.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),r(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return u.a.createElement("div",{className:Object(f.f)("_")},u.a.createElement(i,{onHeadingSetted:l}),u.a.createElement(d.a,{className:Object(f.f)("sticky"),top:50},u.a.createElement("div",{className:Object(f.f)("nav")},c.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return u.a.createElement("a",{key:t,className:Object(f.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===m.a.location.search.indexOf("?example="))m.a.push("".concat(m.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},215:function(e,t,n){"use strict";var S=n(0),N=n.n(S),u=n(15),R=n(29),a=n(221),d=n.n(a),m=n(37),T=n(25),f=n(20),r=n(14),l=n.n(r),c=n(222),i=n.n(c),C=(n(223),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,r=e.value,c=Object(S.useRef)(null);return Object(S.useEffect)(function(){var e=c.current;i.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),N.a.createElement("pre",{ref:c,className:l()(n||"lang-jsx",Object(T.a)("pre"))},N.a.createElement("code",null,r))}),z=n(76),s=n(67),o=n(4),h=n(5),v=n(8),p=n(2),b=n(7),g=n(19),y=n(216),W=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(v.a)(this,Object(p.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(b.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(y.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(y.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:N.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(g.b),B=n(75),L=n(72),H=N.a.createElement("div",{className:Object(T.a)("placeholder")},N.a.createElement(s.a,null));function E(e){var t=e.component,n=e.id,a=e.name,r=e.rawText,c=e.title,l=Object(S.useRef)(null),i=Object(S.useState)(!1),s=Object(R.a)(i,2),o=s[0],u=s[1],d=Object(S.useState)(),m=Object(R.a)(d,2),f=m[0],h=m[1],v=Object(S.useState)(),p=Object(R.a)(v,1)[0],b=function e(t,n,a){l.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(S.useEffect)(function(){if(l.current)if(o)l.current.style.height="".concat(f,"px");else{var e=f%15;0<e&&b(e,1,p),b((f-e)/15,15,p)}},[o]);var g=function(e){u(!o),p=e},y=function(e){return N.a.createElement("a",{href:"javascript:;",className:Object(T.a)("toggle"),onClick:g.bind(null,e)},N.a.createElement(B.a,{name:o?"code-close":"code"}))},E=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),j=L.a.location.search,O="?example=";if(0===j.indexOf(O)&&(j=j.replace(O,""),a.indexOf(j)<0))return null;var k=c.split("\n"),x=Object(z.a)(k),P=x[0],w=x.slice(1);return P&&(P=P.trim()),N.a.createElement(S.Fragment,null,P&&N.a.createElement("h3",{key:"0",id:n},P),N.a.createElement(W,{placeholder:H},N.a.createElement("div",{className:Object(T.a)("_",o&&"showcode")},N.a.createElement("div",{className:Object(T.a)("body")},Object(S.createElement)(t)),0<c.length&&N.a.createElement("div",{className:Object(T.a)("desc")},w.map(function(e,t){return N.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),y(!1)),N.a.createElement("div",{ref:l,className:Object(T.a)("code")},N.a.createElement(C,{onHighLight:function(e){h(e)},onClose:g,value:E}),y(!0)))))}E.defaultProps={rawText:""};var j=function(e){var t=e.children,n=Object(S.useState)(!1),a=Object(R.a)(n,2),r=a[0],c=a[1],l=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),i=r?"pre":"div";return N.a.createElement("div",{onClick:function(){c(!r)},className:Object(T.e)("console")},N.a.createElement(i,null,l))};j.defaultProps={children:[]};var O=j;function k(e){var t=e.children;return N.a.createElement("table",{className:"doc-api-table"},t)}k.defaultProps={};var x=k,P=/^<code name="([\w|-]+)" /,w=/^<example name="([\w|-]+)"/;function I(e){var t=e.onHeadingSetted,c=e.codes,l=e.examples,n=e.source,a=Object(S.useState)([]),r=Object(R.a)(a,1)[0],i=Object(S.useState)({}),s=Object(R.a)(i,1)[0];Object(S.useEffect)(function(){t&&t(r)},[]);var o=function(e){r.push(e)};return r=[],N.a.createElement(d.a,{className:Object(T.e)("_"),source:n,renderers:{code:C,heading:function(e){var t=e.level,n=e.children,a="".concat(t,"-").concat(n[0]),r="h".concat(t);if("object"==typeof n[0])return N.a.createElement(r,null,n);if(!s[a]){var c="heading-".concat(Object(m.b)());2!==t&&3!==t||o({id:c,level:t,children:n}),s[a]=N.a.createElement(r,{id:c},n)}return s[a]},html:function(e){if("<example />"===e.value)return function(){if(s.examples)return s.examples;if(!l)return N.a.createElement("div",null);var e=Object(f.b)("示例","Example"),t="heading-".concat(Object(m.b)());return o({id:t,level:2,children:[e]}),s.examples=[N.a.createElement("h2",{key:"h",id:t},e)].concat(Object(u.a)(l.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),r=Object(R.a)(a,1)[0];return o({id:n,level:3,children:[r]}),N.a.createElement(E,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),s.examples}();var t=e.value.match(w);if(t)return function(t){var e="example-".concat(t);if(!s[e]){var n=(l||[]).find(function(e){return e.name===t});s[e]=n?N.a.createElement(E,n):null}return s[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return N.a.createElement("br",null);var n,a,r=e.value.match(P);return r?(n=r[1],(a=c[n])?[N.a.createElement(C,{key:"cb",value:a.text})].concat(Object(u.a)(a.log.map(function(e,t){return N.a.createElement(O,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:x,link:function(e){var t=e.href.indexOf(!1)?"_blank":void 0;return N.a.createElement("a",{href:e.href,target:t},e.children)}}})}I.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var D=n(74),F=n(214);n.d(t,"a",function(){return A});var M,_=((M=function(e){var t=Object(S.useState)(e.source),n=Object(R.a)(t,2),a=n[0],r=n[1];return Object(S.useEffect)(function(){e.loader&&e.loader().then(function(e){r(e.default)})},[]),a?N.a.createElement(I,Object.assign({},e,{source:a})):N.a.createElement(D.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(S.memo)(M));t.b=_;function A(t){return Object(F.a)(function(e){return N.a.createElement(_,Object.assign({},e,{loader:t}))})}},216:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return d});var a=n(218),r=n(37),c=n(64),l={},i=null,s=!1,o=c.b.height;function u(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>o){var n=Object(r.b)();return l[n]=e,n}return e.render(),null}function d(e){e&&delete l[e]}document.addEventListener("scroll",function(){i&&clearTimeout(i),i=setTimeout(function(){s||(s=!0,Object.keys(l).forEach(function(e){var t=l[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>o||(delete l[e],a())}),s=!1),i=null},80)},a.a)},257:function(e,t,n){"use strict";var a=n(0),h=n.n(a),r=n(14),v=n.n(r),p=n(11);function c(e){var t=e.children,n=e.strokeWidth,a=e.type,r=e.value,c=e.color,l=e.style,i=e.background,s=v()(Object(p.u)("line",a),e.className),o={background:c,backgroundSize:"1em 1em",width:"".concat(r/100*100,"%"),borderRadius:n/2};return h.a.createElement("div",{className:s,style:l},h.a.createElement("div",{className:Object(p.u)("background"),style:{height:n,background:i,borderRadius:n/2}},h.a.createElement("div",{className:Object(p.u)("front"),style:o})),void 0!==t&&h.a.createElement("div",{className:Object(p.u)("content")},t))}c.defaultProps={strokeWidth:8};var l=c;function i(e){var t=e.children,n=e.strokeWidth,a=e.type,r=e.color,c=e.size,l=e.value,i=e.background,s=e.strokeLinecap,o=v()(Object(p.u)("circle",a),e.className),u=100-Math.ceil(2*n/c*100),d=2*Math.PI*u,m=[d*(l/100),d*(1-l/100)],f=Object.assign({width:c,height:c},e.style);return h.a.createElement("div",{className:o,style:f},h.a.createElement("svg",{viewBox:"0 0 200 200"},h.a.createElement("circle",{className:Object(p.u)("background"),cx:"100",cy:"100",r:u,strokeWidth:2*n,fill:"transparent",style:{stroke:i}}),0<l&&h.a.createElement("circle",{className:Object(p.u)("front"),cx:"100",cy:"100",r:u,fill:"transparent",style:{stroke:r},strokeDasharray:m,strokeLinecap:s,strokeWidth:2*n})),t&&h.a.createElement("div",{className:Object(p.u)("content")},t))}i.defaultProps={strokeLinecap:"round",strokeWidth:8,size:100};var s=i;function o(e){switch(e.shape){case"circle":return h.a.createElement(s,e);default:return h.a.createElement(l,e)}}o.defaultProps={shape:"line"},o.displayName="ShineoutProgress";t.a=o}}]);