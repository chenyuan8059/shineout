(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[16],{576:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(214),l=n(215),i=n(20),u=n(577),m=n.n(u),s=n(578),c=n.n(s),d=Object(i.b)(m.a,c.a),f=[{name:"01-base",title:Object(i.b)("基本用法 \n 最基本的用法","Base \n The basic usage"),component:n(579).default,rawText:n(589)},{name:"02-format",title:Object(i.b)("格式化 \n 传入值可为 日期对象，时间戳，字符串，通过format 属性可以定义返回值的格式","Format \n The format attribute defines the format of the return value"),component:n(590).default,rawText:n(591)},{name:"03-size",title:Object(i.b)("尺寸 \n 内置了三种尺寸，small、default、large","Size \n There are three built-in size: small、default、large."),component:n(592).default,rawText:n(593)},{name:"05-week",title:Object(i.b)("选择星期 \n 设置 type 为 week，选择星期","Week Mode \n Set type to be week to select week."),component:n(594).default,rawText:n(595)},{name:"06-month",title:Object(i.b)("选择月 \n 设置 type 为 month，选择月","Month Mode \n Set type to be month to select month."),component:n(596).default,rawText:n(597)},{name:"07-time",title:Object(i.b)("选择时间 \n 设置 type 为 time，选择时间，根据 format 自动加载相应的选择列","Time Mode \n Set type to be time to select time and automatically load the corresponding selection column according to the format property."),component:n(598).default,rawText:n(599)},{name:"08-datetime",title:Object(i.b)("选择日期时间 \n 设置 type 为 datetime，选择日期 + 时间","Datetime Mode \n Set type to be datetime to select date and time."),component:n(600).default,rawText:n(601)},{name:"09-range-date",title:Object(i.b)("选择范围 \n 设置 range 属性可以选择范围，输入和返回的 value 为长度为 2 的数组","Range \n Set the range property to select range, the input value and return value is an array of length 2."),component:n(602).default,rawText:n(603)},{name:"10-disabled",title:Object(i.b)("禁用 \n disabled 为 true 时，禁用整个日期选择","Disabled \n When the disabled is true, disable all the date selection."),component:n(604).default,rawText:n(605)},{name:"11-disabled",title:Object(i.b)(" \n disabled 为函数时，禁用返回为true的选项"," \n When the disabled is a function, disbale the option that the function to return true."),component:n(606).default,rawText:n(607)},{name:"12-inputable",title:Object(i.b)("可输入 \n 设置 inputable 使日期可输入","Inputable \n Set inputable to true, you can change the value by input"),component:n(608).default,rawText:n(609)},{name:"13-absolute",title:Object(i.b)("绝对定位 \n 如果选项弹出层的父容器被遮挡，可以设置 absolute 属性使弹出选项在单独层中渲染。（非必要情况下不建议）","Absolute \n If the parent container of the pop-up layer is occluded, you can set the absolute property to make the pop-up options rendered in a separate layer. (not recommended if not necessary)"),component:n(610).default,rawText:n(611)}];t.default=Object(o.a)(function(e){return r.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:d,examples:f}))})},577:function(e,t){e.exports="# DatePicker *日期选择*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| clearable | bool | true | 是否可清空 |\n| defaultValue | string \\| number \\| Date \\| array | 无 | 默认值。如果 defaultValue 和 format 类型不一致，会执行一次 format，并触发 onChange 事件返回 format 后的值 |\n| disabled | bool \\| function | false | 如果 disabled 为 true，禁用全部选项，如果 disabled 为函数，根据函数反回结果禁用选项 |\n| format | string | | 不同type对应的默认值<br />'date': 'yyyy-MM-dd'<br />'time': 'HH:mm:ss'<br />'week': 'yyyy WW'<br />'month': 'yyyy-MM'<br />'datetime': 'yyyy-MM-dd HH:mm:ss' |\n| onChange | function(d) | | 值改变回调函数 |\n| placeholder | string \\| array | 无 | 占位文字<br />range 属性不为空时，为长度为2的数组 |\n| range | bool \\| number | 无 | 范围跨度，单位 **秒**，<br />为 true 时表示不限制选择范围。 |\n| style | object | 无 | 最外层扩展样式 |\n| type | string | 'date' | 可选值为 \\['date', 'time', 'datetime', 'month', 'week'] |\n| value | string \\| number \\| Date \\| array | 无 | 值。为 string 时，需要和 format 属性匹配。<br />range 属性为 true 时，值为长度为2的数组 |\n| defaultTime | string | 无 | 选择日期时默认的时间, 格式为: 'HH:mm:ss' |\n| absolute | bool | false | 为 true 时，选项弹出层在 DOM 中独立 render |\n\n\n### Format\n\n常用的 format 格式如下，更多见 [UTS #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)\n\n| 格式 | 说明 | 示例 |\n| --- | --- | --- |\n|\tM\t| 月 | 1, 2, ..., 12 |\n| MM | 月（补0）| 01, 02, ..., 12 |\n| Q | 季度 | 1, 2, 3, 4 |\n| d | 日 |\t1, 2, ..., 31\n| dd | 日（补0） |\t01, 02, ..., 31 |\n| W | 周 | 1, 2, ..., 53 |\n| WW | 周（补0）| 01, 02, ..., 53 |\n| yy | 年 | 00, 01, ..., 99 |\n| yyyy | 完整年 | 1900, 1901, ..., 2099 |\n| a | AM/PM | AM, PM |\n| H | 小时 | 0, 1, ... 23 |\n| HH | 小时（补0） | 00, 01, ... 23 |\n| h | 小时（12小时制） | 1, 2, ..., 12 |\n| hh | 小时（12小时制，补0） | 01, 02, ..., 12 |\n| m | 分钟 | 0, 1, ..., 59 |\n| mm | 分钟（补0） | 00, 01, ..., 59 |\n| s | 秒 | 0, 1, ..., 59 |\n| ss | 秒（补0） | 00, 01, ..., 59 |\n| SSS | 毫秒 | 000, 001, ..., 999 |\n| Z | 时区 | -01:00, +00:00, ... +12:00 |\n| t | 时间戳（秒） |\t512969520 |\n| T | 时间戳（毫秒） | 512969520900 |\n"},578:function(e,t){e.exports="# Datepicker\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | - | extend className |\n| clearable | bool | true | \bwhether it can be cleared |\n| defaultValue | string \\| number \\| Date \\| array | - | default |\n| disabled | bool \\| function | false | When the value is true, disabled all options; When the value is function, disable the options that this function returns true. |\n| format | string | | default values for different types: <br />'date': 'yyyy-MM-dd'<br />'time': 'HH:mm:ss'<br />'week': 'yyyy WW'<br />'month': 'yyyy-MM'<br />'datetime': 'yyyy-MM-dd HH:mm:ss' |\n| onChange | function(d) | | a callback when the value is changing |\n| placeholder | string \\| array | - | placeholder text<br />When the range property is not empty, it is an array of length 2. |\n| range | bool \\| number | - | range span，unit: **second**，<br />When it is true, selection scope is not limited. |\n| style | object | - | Container element style |\n| type | string | 'date' | options:  \\['date', 'time', 'datetime', 'month', 'week'] |\n| value | string \\| number \\| Date \\| array | - | When the value is string, it needs to match the format attribute. <br /> When the range property is true, the value is an array of length 2. |\n| defaultTime | string | - | Default time when selecting a date, the format is: 'HH:mm:ss' |\n| absolute | bool | false | When it is true, the pop-up layer of option append into document.body. |\n\n\n### Format\n\nThe commonly used format is as follows\n\n| format | Description | example |\n| --- | --- | --- |\n|\tM\t| month | 1, 2, ..., 12 |\n| MM | month(fill up 0) | 01, 02, ..., 12 |\n| Q | quarter | 1, 2, 3, 4 |\n| d | day |\t1, 2, ..., 31\n| dd | day(fill up 0) |\t01, 02, ..., 31 |\n| W | week | 1, 2, ..., 53 |\n| WW | week(fill up 0) | 01, 02, ..., 53 |\n| yy | year | 00, 01, ..., 99 |\n| yyyy | full year | 1900, 1901, ..., 2099 |\n| a | AM/PM | AM, PM |\n| H | hour | 0, 1, ... 23 |\n| HH | hour(fill up 0) | 00, 01, ... 23 |\n| h | hour（12 hours system） | 1, 2, ..., 12 |\n| hh | hour（12 hours system,补0） | 01, 02, ..., 12 |\n| m | minute | 0, 1, ..., 59 |\n| mm | minute(fill up 0) | 00, 01, ..., 59 |\n| s | second | 0, 1, ..., 59 |\n| ss | second(fill up 0) | 00, 01, ..., 59 |\n| SSS | ms | 000, 001, ..., 999 |\n| Z | Time Zone | -01:00, +00:00, ... +12:00 |\n| t | Time stamp(s) |\t512969520 |\n| T | Time stamp(ms) | 512969520900 |\n"},579:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1329);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{type:"datetime"}))}},589:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 最基本的用法\n * en - Base\n *    -- The basic usage\n */\nimport React from 'react'\nimport { DatePicker } from 'shineout'\n\nexport default function() {\n  return (\n    <div>\n      <DatePicker type=\"datetime\"  />\n    </div>\n  )\n}\n"},590:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var a=n(41),r=n(4),o=n(5),l=n(8),i=n(2),u=n(7),m=n(1),s=n(0),c=n.n(s),d=n(1329),f=n(211),p=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(l.a)(this,Object(i.a)(n).call(this,e))).state={format:"yyyy-M-d HH:mm",value:new Date},t.handleFormatChange=t.handleChange.bind(Object(m.a)(Object(m.a)(t)),"format"),t.handleValueChange=t.handleChange.bind(Object(m.a)(Object(m.a)(t)),"value"),t}return Object(u.a)(n,e),Object(o.a)(n,[{key:"handleChange",value:function(e,t){this.setState(Object(a.a)({},e,t))}},{key:"render",value:function(){var e=this.state.format;return c.a.createElement("div",null,c.a.createElement(d.a,{placeholder:"format date",type:"datetime",style:{marginRight:12},format:e,value:this.state.value,onChange:this.handleValueChange}),c.a.createElement(f.a,{width:200,value:e,onChange:this.handleFormatChange}))}}]),n}(s.Component)},591:function(e,t){e.exports="/**\n * cn - 格式化\n *    -- 传入值可为 日期对象，时间戳，字符串，通过format 属性可以定义返回值的格式\n * en - Format\n *    -- The format attribute defines the format of the return value\n */\nimport React, { Component } from 'react'\nimport { DatePicker, Input } from 'shineout'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { format: 'yyyy-M-d HH:mm', value: new Date() }\n    this.handleFormatChange = this.handleChange.bind(this, 'format')\n    this.handleValueChange = this.handleChange.bind(this, 'value')\n  }\n\n  handleChange(type, value) {\n    this.setState({ [type]: value })\n  }\n\n  render() {\n    const { format } = this.state\n\n    return (\n      <div>\n        <DatePicker\n          placeholder=\"format date\"\n          type=\"datetime\"\n          style={{ marginRight: 12 }}\n          format={format}\n          value={this.state.value}\n          onChange={this.handleValueChange}\n        />\n\n        <Input width={200} value={format} onChange={this.handleFormatChange} />\n      </div>\n    )\n  }\n}\n"},592:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1329);t.default=function(){return r.a.createElement("div",null,["small","default","large"].map(function(e){return r.a.createElement("div",{key:e,style:{marginBottom:12}},r.a.createElement(o.a,{size:e,type:"datetime",style:{marginRight:12},defaultValue:Date.now()}),r.a.createElement(o.a,{size:e,style:{marginRight:12},defaultValue:Date.now()}),r.a.createElement(o.a,{size:e,type:"time",defaultValue:"12:12:12"}))}))}},593:function(e,t){e.exports="/**\n * cn - 尺寸\n *    -- 内置了三种尺寸，small、default、large\n * en - Size\n *    -- There are three built-in size: small、default、large.\n */\nimport React from 'react'\nimport { DatePicker } from 'shineout'\n\nexport default function() {\n  return (\n    <div>\n      {['small', 'default', 'large'].map(size => (\n        <div key={size} style={{ marginBottom: 12 }}>\n          <DatePicker size={size} type=\"datetime\" style={{ marginRight: 12 }} defaultValue={Date.now()} />\n          <DatePicker size={size} style={{ marginRight: 12 }} defaultValue={Date.now()} />\n          <DatePicker size={size} type=\"time\" defaultValue=\"12:12:12\" />\n        </div>\n      ))}\n    </div>\n  )\n}\n"},594:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1329);t.default=function(){return r.a.createElement(o.a,{type:"week",format:"yyyy wWW",defaultValue:Date.now()})}},595:function(e,t){e.exports="/**\n * cn - 选择星期\n *    -- 设置 type 为 week，选择星期\n * en - Week Mode\n *    -- Set type to be week to select week.\n */\nimport React from 'react'\nimport { DatePicker } from 'shineout'\n\nexport default function() {\n  return <DatePicker type=\"week\" format=\"yyyy wWW\" defaultValue={Date.now()} />\n}\n"},596:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1329);t.default=function(){return r.a.createElement(o.a,{type:"month",defaultValue:Date.now()})}},597:function(e,t){e.exports="/**\n * cn - 选择月\n *    -- 设置 type 为 month，选择月\n * en - Month Mode\n *    -- Set type to be month to select month.\n */\nimport React from 'react'\nimport { DatePicker } from 'shineout'\n\nexport default function() {\n  return <DatePicker type=\"month\" defaultValue={Date.now()} />\n}\n"},598:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1329),l={marginRight:12};t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{style:l,type:"time",defaultValue:Date.now()}),r.a.createElement(o.a,{style:l,type:"time",format:"HH:mm",defaultValue:Date.now()}),r.a.createElement(o.a,{style:l,type:"time",format:"hh:mm a",defaultValue:Date.now()}))}},599:function(e,t){e.exports='/**\n * cn - 选择时间\n *    -- 设置 type 为 time，选择时间，根据 format 自动加载相应的选择列\n * en - Time Mode\n *    -- Set type to be time to select time and automatically load the corresponding selection column according to the format property.\n */\nimport React from \'react\'\nimport { DatePicker } from \'shineout\'\n\nconst style = { marginRight: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <DatePicker style={style} type="time" defaultValue={Date.now()} />\n      <DatePicker style={style} type="time" format="HH:mm" defaultValue={Date.now()} />\n      <DatePicker style={style} type="time" format="hh:mm a" defaultValue={Date.now()} />\n    </div>\n  )\n}\n'},600:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1329);t.default=function(){return r.a.createElement(o.a,{type:"datetime",defaultValue:Date.now()})}},601:function(e,t){e.exports="/**\n * cn - 选择日期时间\n *    -- 设置 type 为 datetime，选择日期 + 时间\n * en - Datetime Mode\n *    -- Set type to be datetime to select date and time.\n */\nimport React from 'react'\nimport { DatePicker } from 'shineout'\n\nexport default function() {\n  return <DatePicker type=\"datetime\" defaultValue={Date.now()} />\n}\n"},602:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1329),l={marginBottom:12};t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{range:864e3,style:l,defaultValue:["2018-05-25","2018-06-05"]}),r.a.createElement("br",null),r.a.createElement(o.a,{range:864e4,onChange:function(e){return console.log(e)},type:"month",style:l,placeholder:["first month","last-month"]}),r.a.createElement("br",null),r.a.createElement(o.a,{range:21600,type:"time",format:"HH:mm",style:l}),r.a.createElement("br",null),r.a.createElement(o.a,{range:!0,type:"datetime",style:l,onChange:function(e){return console.log(e)}}),r.a.createElement("br",null),r.a.createElement(o.a,{range:!0,type:"datetime",defaultTime:["02:33:33","14:33:33"],onChange:function(e){return console.log(e)}}))}},603:function(e,t){e.exports="/**\n * cn - 选择范围\n *    -- 设置 range 属性可以选择范围，输入和返回的 value 为长度为 2 的数组\n * en - Range\n *    --Set the range property to select range, the input value and return value is an array of length 2.\n */\nimport React from 'react'\nimport { DatePicker } from 'shineout'\n\nconst style = { marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <DatePicker range={86400 * 10} style={style} defaultValue={['2018-05-25', '2018-06-05']} />\n      <br />\n      <DatePicker\n        range={86400 * 100}\n        onChange={v => console.log(v)}\n        type=\"month\"\n        style={style}\n        placeholder={['first month', 'last-month']}\n      />\n      <br />\n      <DatePicker range={3600 * 6} type=\"time\" format=\"HH:mm\" style={style} />\n      <br />\n      <DatePicker range type=\"datetime\" style={style} onChange={d => console.log(d)} />\n      <br />\n      <DatePicker range type=\"datetime\" defaultTime={['02:33:33', '14:33:33']} onChange={d => console.log(d)} />\n    </div>\n  )\n}\n"},604:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1329);t.default=function(){return r.a.createElement(o.a,{disabled:!0,defaultValue:Date.now()})}},605:function(e,t){e.exports="/**\n * cn - 禁用\n *    -- disabled 为 true 时，禁用整个日期选择\n * en - Disabled\n *    -- When the disabled is true, disable all the date selection.\n */\nimport React from 'react'\nimport { DatePicker } from 'shineout'\n\nexport default function() {\n  return <DatePicker disabled defaultValue={Date.now()} />\n}\n"},606:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1329),l=Date.now()-1e3;t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{disabled:function(e){return e.getTime()<=l},type:"datetime",style:{marginRight:12},defaultValue:Date.now()}),r.a.createElement(o.a,{disabled:function(e){return 15<e.getHours()},type:"time",defaultValue:"12:12:12"}))}},607:function(e,t){e.exports='/**\n * cn -\n *    -- disabled 为函数时，禁用返回为true的选项\n * en -\n *    -- When the disabled is a function, disbale the option that the function to return true.\n */\nimport React from \'react\'\nimport { DatePicker } from \'shineout\'\n\n// minisecond\nconst today = Date.now() - 1000\n\nexport default function() {\n  return (\n    <div>\n      <DatePicker\n        disabled={d => d.getTime() <= today}\n        type="datetime"\n        style={{ marginRight: 12 }}\n        defaultValue={Date.now()}\n      />\n\n      <DatePicker\n        disabled={d => {\n          if (d.getHours() > 15) return true\n          return false\n        }}\n        type="time"\n        defaultValue="12:12:12"\n      />\n    </div>\n  )\n}\n'},608:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1329);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{placeholder:"Input date",inputable:!0,style:{marginRight:12}}),r.a.createElement(o.a,{type:"datetime",inputable:!0,defaultValue:new Date}),r.a.createElement("br",null),r.a.createElement(o.a,{range:!0,inputable:!0,defaultValue:[Date.now()-864e6,new Date],style:{marginTop:12}}))}},609:function(e,t){e.exports="/**\n * cn - 可输入\n *    -- 设置 inputable 使日期可输入\n * en - Inputable\n *    -- Set inputable to true, you can change the value by input\n */\nimport React from 'react'\nimport { DatePicker } from 'shineout'\n\nexport default function() {\n  return (\n    <div>\n      <DatePicker placeholder=\"Input date\" inputable style={{ marginRight: 12 }} />\n\n      <DatePicker type=\"datetime\" inputable defaultValue={new Date()} />\n\n      <br />\n\n      <DatePicker range inputable defaultValue={[Date.now() - 864000000, new Date()]} style={{ marginTop: 12 }} />\n    </div>\n  )\n}\n"},610:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1329);t.default=function(){return r.a.createElement("div",{style:{padding:10,height:150,overflow:"hidden"}},r.a.createElement(o.a,{type:"datetime",absolute:!0,defaultValue:new Date,style:{marginBottom:8}}),r.a.createElement("br",null),r.a.createElement(o.a,{inputable:!0,absolute:!0,range:!0,defaultValue:["2018-05-25","2018-06-05"],style:{marginBottom:8}}),r.a.createElement("br",null),r.a.createElement(o.a,{absolute:!0,type:"time",defaultValue:Date.now()}))}},611:function(e,t){e.exports="/**\n * cn - 绝对定位\n *    -- 如果选项弹出层的父容器被遮挡，可以设置 absolute 属性使弹出选项在单独层中渲染。（非必要情况下不建议）\n * en - Absolute\n *    -- If the parent container of the pop-up layer is occluded, you can set the absolute property to make the pop-up options rendered in a separate layer. (not recommended if not necessary)\n */\nimport React from 'react'\nimport { DatePicker } from 'shineout'\n\nexport default function() {\n  return (\n    <div style={{ padding: 10, height: 150, overflow: 'hidden' }}>\n      <DatePicker type=\"datetime\" absolute defaultValue={new Date()} style={{ marginBottom: 8 }} />\n      <br />\n      <DatePicker inputable absolute range defaultValue={['2018-05-25', '2018-06-05']} style={{ marginBottom: 8 }} />\n      <br />\n      <DatePicker absolute type=\"time\" defaultValue={Date.now()} />\n    </div>\n  )\n}\n"}}]);