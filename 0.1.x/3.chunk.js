webpackJsonp([3],{151:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=(n(1),n(9)),a=n(10);function c(e){return r.a.createElement("svg",{viewBox:"0 0 1024 1024"},r.a.createElement("path",{d:e}))}var s="M512 0C232 0 5 226.64 4.97250989 506.66666667s226.99620754 507.02749011 507.02749011 507.02749011 507.02749011-226.99620754 507.02749011-507.02749011S792.03128257-0.36082344 512-0.36082344zM701.01984777 685.92623566c-22.86694019 22.84158802-59.9052983 22.84158802-82.74688632 0l-96.51268267-96.51268267-96.51268266 96.51268267c-22.86694019 22.84158802-59.9052983 22.84158802-82.74688632 0-22.84158802-22.86694019-22.84158802-59.9052983 0-82.74688632L439.01339246 506.66666667l-96.53803365-96.51268267c-22.84158802-22.86694019-22.84158802-59.9052983 0-82.74688632 22.86694019-22.84158802 59.9052983-22.84158802 82.74688632 0l96.51268267 96.51268267 96.51268266-96.51268267c22.86694019-22.84158802 59.9052983-22.86694019 82.74688633 0 22.84158802 22.86694019 22.84158802 59.9052983 0 82.74688632L604.48181413 506.66666667l96.53803364 96.51268267C723.86143696 626.04628952 723.88678795 663.08464763 701.01984777 685.92623566z",l={close:c("M602.512147 511.99738l402.747939-402.747939a63.999673 63.999673 0 0 0-90.509537-90.509537L512.00261 421.487843 109.254671 18.749904a63.999673 63.999673 0 0 0-90.509537 90.509537L421.493073 511.99738 18.755134 914.745319a63.999673 63.999673 0 0 0 90.509537 90.509537L512.00261 602.506917l402.747939 402.747939a63.999673 63.999673 0 0 0 90.509537-90.509537z"),danger:c(s),error:c(s),info:c("M512 1024c282.771 0 512-229.23 512-512s-229.23-512-512-512-512 229.23-512 512 229.23 512 512 512zM432 256c0-44.183 35.817-80 80-80s80 35.817 80 80v31.999c0 44.183-35.817 80-80 80s-80-35.817-80-80v-31.999zM431.999 512c0-44.183 35.817-80 80-80s80 35.817 80 80v256c0 44.183-35.817 80-80 80s-80-35.817-80-80v-256z"),success:c("M874 150C674.09-50 349.91-50 150 150s-200 524.09 0 724 524.09 200 724 0 200-524.09 0-724zM760.57 440.57l-256 256a80 80 0 0 1-113.14 0l-128-128a80 80 0 0 1 113.14-113.14L448 526.86l199.43-199.43a80 80 0 0 1 113.14 113.14z"),warning:c("M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m80 768a80 80 0 0 1-160 0v-32a80 80 0 0 1 160 0v32z m0-256a80 80 0 0 1-160 0V256a80 80 0 0 1 160 0v256z")},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={dismiss:0},n.bindRef=n.bindRef.bind(n),n.dismiss=n.dismiss.bind(n),n.handleClose=n.handleClose.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["PureComponent"]),u(t,[{key:"bindRef",value:function(e){this.element=e}},{key:"dismiss",value:function(){var e=this.props.onClose;this.setState({dismiss:2}),"function"==typeof e&&e()}},{key:"handleClose",value:function(){var e=this;if(!(this.state.dismiss>0)){var t=this.props.duration;t>0?this.setState({dismiss:1},function(){setTimeout(e.dismiss,t)}):this.dismiss()}}},{key:"renderIcon",value:function(){var e=this.props.icon,t=this.props,n=t.type,o=t.iconSize;if("boolean"==typeof e&&(e=l[n]),!e)return null;var i=o>0?{width:o,height:o}:void 0;return r.a.createElement("div",{className:Object(a.a)("icon"),style:i},e)}},{key:"render",value:function(){var e=this.state.dismiss;if(2===e)return null;var t=this.props,n=t.children,o=t.className,i=t.type,c=t.iconSize,s=t.onClose,u=this.renderIcon(),f=this.props.style,p=Object(a.a)("_",i,1===e&&"dismissed",u&&"with-icon");return o&&(p+=" "+o),u&&c>0&&(f=Object.assign({},f,{paddingLeft:c+25})),r.a.createElement("div",{ref:this.bindRef,className:p,style:f},s&&r.a.createElement("a",{href:"javascript:;",className:Object(a.a)("close"),onClick:this.handleClose},l.close),u,n)}}]),t}();f.defaultProps=Object.assign({},i.a,{duration:216,iconSize:0,type:"warning"});t.a=f},190:function(e,t){e.exports="# Sticky *附着*\n\n类似于 position: sticky，在屏幕滚动时，保持元素在屏幕可见区域内。\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| bottom | number | 无 | 距离底部多少偏移量触发 |\n| className | string | 无 | 扩展className |\n| style | object | 无 | 扩展样式。\b触发浮动后的默认zIndex为900，修改style的zIndex来改变。 |\n| target | string \\| HTMLElement | 无 | 附着的目标，默认为document.body。可以传入HTMLElement或者css selector，target 必须为 Sticky 组件的祖先节点 |\n| top | number | 无 | 距离顶部多少偏移量触发 |\n\n<example />"},191:function(e,t){e.exports="# Sticky\n\n## API\n\n\n<example />"},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(45),r=n(151),i=n(0),a=n.n(i);t.default=function(){return a.a.createElement(o.a,{top:20},a.a.createElement(r.a,{onClose:!0},a.a.createElement("h3",null,"Some content."),"Sticky 20px to top."))}},193:function(e,t){e.exports="/**\n * cn - 附着在顶部 20px\n * en - Sticky 20px to top\n */\nimport React from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nexport default function () {\n  return (\n    <Sticky top={20}>\n      <Alert onClose>\n        <h3>Some content.</h3>\n        Sticky 20px to top.\n      </Alert>\n    </Sticky>\n  )\n}\n"},194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(45),r=n(151),i=n(0),a=n.n(i),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),c(t,[{key:"componentDidMount",value:function(){this.element.scrollTop=400}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{id:"sticky_element",ref:function(t){e.element=t},style:{position:"relative",height:400,overflow:"auto"}},a.a.createElement("div",{style:{height:1600,background:"#f2f2f2"}},a.a.createElement("div",{style:{height:600}},"Some text."),a.a.createElement(o.a,{top:0,bottom:0,target:"#sticky_element"},a.a.createElement(r.a,{style:{marginBottom:0},type:"info"},"Sticky to element"))))}}]),t}();t.default=s},195:function(e,t){e.exports="/**\n * cn - 附着在元素内\n * en - Sticky to element\n */\nimport React, { PureComponent } from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nexport default class extends PureComponent {\n  componentDidMount() {\n    this.element.scrollTop = 400\n  }\n\n  render() {\n    return (\n      <div\n        id=\"sticky_element\"\n        ref={(el) => { this.element = el }}\n        style={{ position: 'relative', height: 400, overflow: 'auto' }}\n      >\n        <div style={{ height: 1600, background: '#f2f2f2' }}>\n          <div style={{ height: 600 }}>Some text.</div>\n          <Sticky top={0} bottom={0} target=\"#sticky_element\">\n            <Alert style={{ marginBottom: 0 }} type=\"info\">Sticky to element</Alert>\n          </Sticky>\n        </div>\n      </div>\n    )\n  }\n}\n"},196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(45),r=n(151),i=n(0),a=n.n(i);t.default=function(){return a.a.createElement(o.a,{bottom:0},a.a.createElement(r.a,{style:{marginBottom:0},onClose:!0},"Sticky at bottom."))}},197:function(e,t){e.exports="/**\n * cn - 附着在底部\n * en - Sticky to bottom\n */\nimport React from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nexport default function () {\n  return (\n    <Sticky bottom={0}>\n      <Alert style={{ marginBottom: 0 }} onClose>\n        Sticky at bottom.\n      </Alert>\n    </Sticky>\n  )\n}\n"},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(27),a=n(26),c=n(16),s=n(190),l=n.n(s),u=n(191),f=n.n(u),p=Object(c.a)(l.a,f.a),m=[{title:Object(c.a)("附着在顶部 20px","Sticky 20px to top"),component:n(192).default,rawText:n(193)},{title:Object(c.a)("附着在元素内","Sticky to element"),component:n(194).default,rawText:n(195)},{title:Object(c.a)("附着在底部","Sticky to bottom"),component:n(196).default,rawText:n(197)}];t.default=Object(i.a)(function(e){return r.a.createElement(a.b,Object.assign({},e,{source:p,examples:m}))})}});