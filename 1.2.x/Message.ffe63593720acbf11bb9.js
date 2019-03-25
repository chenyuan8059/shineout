(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[29],{1130:function(e,n,t){"use strict";t.r(n);var o=t(0),s=t.n(o),i=t(214),a=t(215),r=t(20),c=t(1131),l=t.n(c),u=t(1132),d=t.n(u),m=Object(r.b)(l.a,d.a),f=[{name:"1-base",title:Object(r.b)("基本用法 \n Message 封装了一组全局函数，方便在任意地方调用","Base \n Message has 6 static functions that are convenient to call anywhere。"),component:t(1133).default,rawText:t(1134)},{name:"2-duration",title:Object(r.b)("显示时长 \n 通过 duration 属性可以控制消息显示的时长，默认为3秒，设为 0 时，需要用户手动关闭","Duration \n Set duration property to control the duration of the message display. The default value is 3 seconds. \n When duration is set to 0, the message will not hide automatically."),component:t(1135).default,rawText:t(1136)},{name:"3-position",title:Object(r.b)("通知提醒 \n 设置 positoin 参数，修改显示位置。借此可以实现 Notification 的功能。","Notification \n Set position property to specify the pop-up layer location."),component:t(1137).default,rawText:t(1138)},{name:"4-close",title:Object(r.b)("关闭回调 \n onClose 属性处理消息关闭事件","Close \n Set onClose to handle close event."),component:t(1139).default,rawText:t(1140)}];n.default=Object(i.a)(function(e){return s.a.createElement(a.b,Object.assign({},e,{codes:void 0,source:m,examples:f}))})},1131:function(e,n){e.exports="# Message 消息\n\n<example />\n\n## API \nMessage 提供了一组方法供全局调用\n\nMessage.show(content, \\[duration], \\[options]) // 无样式\n\nMessage.info(content, \\[duration], \\[options])\n\nMessage.success(content, \\[duration], \\[options])\n\nMessage.warn(content, \\[duration], \\[options])\n\nMessage.error(content, \\[duration], \\[options])\n\nMessage.close() // 关闭所有消息\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| content | string\\|ReactElement | 必填 | 消息内容 |\n| duration | number | 3 | 消息持续时间，单位秒；如果设置为 0，必须手动关闭 |\n\n\n#### options\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| onClose | function | 无 | 关闭后回调事件 |\n| position | string | 'top' | 消息显示的位置，可选值 \\['top', 'middle', 'top-left', 'top-right', 'bottom-left', 'bottom-right'] |\n| title | string | - | 标题文字 |"},1132:function(e,n){e.exports="# Message\n\n<example />\n\n## API \nMessage provides a set of methods for global calls\n\nMessage.show(content, \\[duration], \\[options]) // no style\n\nMessage.info(content, \\[duration], \\[options])\n\nMessage.success(content, \\[duration], \\[options])\n\nMessage.warn(content, \\[duration], \\[options])\n\nMessage.error(content, \\[duration], \\[options])\n\nMessage.close() // Close all messages\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| content | string\\|ReactElement | required | The message content |\n| duration | number | 3 | Message duration, unit: s; If it is set to 0, it must be manually closed. |\n\n\n#### options\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| onClose | function | none | The callback function when the message is closed. |\n| position | string | 'top' | The position where the message display, options: \\['top', 'middle', 'top-left', 'top-right', 'bottom-left', 'bottom-right'] |\n| title | string | | title |"},1133:function(e,n,t){"use strict";t.r(n);var o=t(0),s=t.n(o),i=t(80),a=t(256);n.default=function(){return s.a.createElement("div",null,s.a.createElement(i.a,{onClick:function(){a.a.show("Some message.")}},"Show"),s.a.createElement(i.a,{onClick:function(){a.a.info("This is a message of info.")}},"Info"),s.a.createElement(i.a,{onClick:function(){a.a.success("This is a message of success.")}},"Success"),s.a.createElement(i.a,{onClick:function(){a.a.warn("This is a message of warning.")}},"Warn"),s.a.createElement(i.a,{onClick:function(){a.a.error("This is a message of error.")}},"Error"),s.a.createElement(i.a,{onClick:function(){a.a.close()}},"Close All"))}},1134:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- Message 封装了一组全局函数，方便在任意地方调用\n * en - Base\n *    -- Message has 6 static functions that are convenient to call anywhere。\n */\nimport React from 'react'\nimport { Button, Message } from 'shineout'\n\nexport default function() {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Message.show('Some message.')\n        }}\n      >\n        Show\n      </Button>\n      <Button\n        onClick={() => {\n          Message.info('This is a message of info.')\n        }}\n      >\n        Info\n      </Button>\n      <Button\n        onClick={() => {\n          Message.success('This is a message of success.')\n        }}\n      >\n        Success\n      </Button>\n      <Button\n        onClick={() => {\n          Message.warn('This is a message of warning.')\n        }}\n      >\n        Warn\n      </Button>\n      <Button\n        onClick={() => {\n          Message.error('This is a message of error.')\n        }}\n      >\n        Error\n      </Button>\n\n      <Button\n        onClick={() => {\n          Message.close()\n        }}\n      >\n        Close All\n      </Button>\n    </div>\n  )\n}\n"},1135:function(e,n,t){"use strict";t.r(n);var o=t(0),s=t.n(o),i=t(256),a=t(80),r=function(){return i.a.info("This message will close after 10 seconds.",10)},c=function(){return i.a.error("This message will not close utill click the close icon.",0)};n.default=function(){return s.a.createElement("div",null,s.a.createElement(a.a,{onClick:r},"duration 10 s."),s.a.createElement(a.a,{onClick:c},"duration 0 s."))}},1136:function(e,n){e.exports="/**\n * cn - 显示时长\n *    -- 通过 duration 属性可以控制消息显示的时长，默认为3秒，设为 0 时，需要用户手动关闭\n * en - Duration\n *    -- Set duration property to control the duration of the message display. The default value is 3 seconds.\n *    -- When duration is set to 0, the message will not hide automatically.\n */\nimport React from 'react'\nimport { Button, Message } from 'shineout'\n\nconst s10 = () => Message.info('This message will close after 10 seconds.', 10)\nconst s0 = () => Message.error('This message will not close utill click the close icon.', 0)\n\nexport default function() {\n  return (\n    <div>\n      <Button onClick={s10}>duration 10 s.</Button>\n      <Button onClick={s0}>duration 0 s.</Button>\n    </div>\n  )\n}\n"},1137:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var o=t(4),s=t(5),i=t(8),a=t(2),r=t(7),c=t(0),l=t.n(c),u=t(256),d=t(315),m=t(80),f=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(a.a)(t).call(this,e))).setPosition=function(e){return n.setState({position:e})},n.show=function(){u.a.info(l.a.createElement("div",{style:{width:240}},"some message."),3,{position:n.state.position,title:"notify title"})},n.state={position:"top-right"},n}return Object(r.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"position:",l.a.createElement(d.a,{keygen:!0,data:["top-left","top-right","bottom-left","bottom-right"],onChange:this.setPosition,value:this.state.position,width:200,style:{margin:"0 20px"}}),l.a.createElement(m.a,{onClick:this.show},"Show message."))}}]),t}(l.a.Component)},1138:function(e,n){e.exports="/**\n * cn - 通知提醒\n *    -- 设置 positoin 参数，修改显示位置。借此可以实现 Notification 的功能。\n * en - Notification\n *    -- Set position property to specify the pop-up layer location.\n */\nimport React from 'react'\nimport { Button, Message, Select } from 'shineout'\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = { position: 'top-right' }\n  }\n\n  setPosition = position => this.setState({ position })\n\n  show = () => {\n    Message.info(<div style={{ width: 240 }}>some message.</div>, 3, {\n      position: this.state.position,\n      title: 'notify title',\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        position:\n        <Select\n          keygen\n          data={['top-left', 'top-right', 'bottom-left', 'bottom-right']}\n          onChange={this.setPosition}\n          value={this.state.position}\n          width={200}\n          style={{ margin: '0 20px' }}\n        />\n        <Button onClick={this.show}>Show message.</Button>\n      </div>\n    )\n  }\n}\n"},1139:function(e,n,t){"use strict";t.r(n);var o=t(0),s=t.n(o),i=t(256),a=t(80);n.default=function(){return s.a.createElement(a.a,{onClick:function(){i.a.warn("Close this message will display another message.",0,{onClose:function(){i.a.info("You can close the message now.")}})}},"Close")}},1140:function(e,n){e.exports="/**\n * cn - 关闭回调\n *    -- onClose 属性处理消息关闭事件\n * en - Close\n *    -- Set onClose to handle close event.\n */\nimport React from 'react'\nimport { Button, Message } from 'shineout'\n\nexport default function() {\n  const close = () => {\n    Message.warn('Close this message will display another message.', 0, {\n      onClose: () => {\n        Message.info('You can close the message now.')\n      },\n    })\n  }\n\n  return <Button onClick={close}>Close</Button>\n}\n"},230:function(e,n,t){"use strict";var o=t(21),s=t(4),i=t(5),a=t(8),r=t(2),c=t(7),l=t(1),u=t(0),d=t.n(u),m=t(19),f=t(35),h=t(23),p=t(11),g=t(65),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(a.a)(this,Object(r.a)(t).call(this,e))).state={dismiss:0},n.bindRef=n.bindRef.bind(Object(l.a)(Object(l.a)(n))),n.dismiss=n.dismiss.bind(Object(l.a)(Object(l.a)(n))),n.handleClose=n.handleClose.bind(Object(l.a)(Object(l.a)(n))),n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.dismiss!==e.dismiss&&this.props.dismiss&&this.handleClose()}},{key:"bindRef",value:function(e){this.element=e}},{key:"dismiss",value:function(){var e=this.props.onClose;this.setState({dismiss:2}),"function"==typeof e&&e()}},{key:"handleClose",value:function(){var e=this;if(!(0<this.state.dismiss)){var n=this.props.duration;0<n?this.setState({dismiss:1},function(){setTimeout(e.dismiss,n)}):this.dismiss()}}},{key:"renderIcon",value:function(){var e=this.props.icon,n=this.props,t=n.type,o=n.iconSize;if("boolean"==typeof e&&(e=g.a[Object(f.a)(t)]),!e)return null;var s={width:o,height:o,marginRight:o/2};return d.a.createElement("div",{className:Object(p.a)("icon"),style:s},e)}},{key:"render",value:function(){var e=this.state.dismiss;if(2===e)return null;var n=this.props,t=n.children,o=n.className,s=n.type,i=n.onClose,a=this.renderIcon(),r=this.props.style,c=Object(p.a)("_",s,1===e&&"dismissed",i&&"with-close",a&&"with-icon");return o&&(c+=" ".concat(o)),d.a.createElement("div",{ref:this.bindRef,className:c,style:r},i&&d.a.createElement("a",{href:"javascript:;",className:Object(p.a)("close"),onClick:this.handleClose},g.a.Close),a,d.a.createElement("div",{className:Object(p.a)("content")},t))}}]),t}(m.b);b.defaultProps=Object(o.a)({},h.a,{duration:216,iconSize:14,type:"warning"}),b.displayName="ShineoutAlert",n.a=b},256:function(e,n,t){"use strict";var o=t(0),r=t.n(o),s=t(78),i=t.n(s),c=t(11),a=t(4),l=t(5),u=t(8),d=t(2),m=t(7),f=t(27),h=t(19),p=t(230),g=t(37),b=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={messages:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"addMessage",value:function(n){var e=this,t=Object(g.b)();this.setState(Object(f.a)(function(e){e.messages.push(Object.assign({id:t},n))})),0<n.duration&&setTimeout(function(){e.setState(Object(f.a)(function(e){e.messages.forEach(function(e){e.id===t&&(e.dismiss=!0)})}))},1e3*n.duration)}},{key:"removeMessage",value:function(n){var t,e=this.state.messages.filter(function(e){return e.id!==n||(e.onClose&&(t=e.onClose),!1)});0===e.length?this.props.onDestory():this.setState({messages:e}),t&&t()}},{key:"closeEvent",value:function(e,n){if(0===n)return this.removeMessage.bind(this,e)}},{key:"render",value:function(){var a=this;return[this.state.messages.map(function(e){var n=e.id,t=e.type,o=e.content,s=e.dismiss,i=e.title;return r.a.createElement("div",{key:n,className:Object(c.q)("item")},r.a.createElement(p.a,{className:Object(c.q)("msg"),dismiss:s,onClose:a.removeMessage.bind(a,n),icon:!0,iconSize:i?20:14,type:t},i&&r.a.createElement("h3",null,i),o))})]}}]),t}(h.b);b.displayName="ShineoutMessage";var v=b,y={},w={};function C(e){y[e]&&(i.a.unmountComponentAtNode(y[e]),document.body.removeChild(y[e]),delete y[e]),w[e]&&delete w[e]}function j(s){return new Promise(function(n){var e,t,o=w[s];o?n(o):i.a.render(r.a.createElement(v,{ref:function(e){w[s]=e,n(e)},onDestory:C.bind(null,s)}),(e=s,(t=document.createElement("div")).className=Object(c.q)("_",e),document.body.appendChild(t),y[e]=t))})}var M=function(r){return function(n){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=e.onClose,s=e.position,i=void 0===s?"top":s,a=e.title;j(i).then(function(e){e.addMessage({content:n,duration:t,type:r,onClose:o,title:a})})}};n.a={show:M("default"),success:M("success"),info:M("info"),warn:M("warning"),warning:M("warning"),danger:M("danger"),error:M("danger"),close:function(e){e?C(e):["top","middle","top-left","top-right","bottom-left","bottom-right"].forEach(function(e){C(e)})}}}}]);