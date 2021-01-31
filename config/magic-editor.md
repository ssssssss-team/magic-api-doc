---
sidebarDepth: 3
---

# magic-editor配置

## 完整示例配置
```js
{
    baseURL: 'http://localhost:9999/magic/web', //必填
    serverURL: 'http://localhost:9999/',    // 必填
    title: 'magic-api',
    defaultTheme: 'default',
    header: {
        skin: true,
        document: true,
        repo: true,
        qqGroup: true
    },
    request: {
        beforeSend: function (config) {
            console.log('请求设置', cofnig);
            return config;
        }
    ,
        onError: function (err) {
            console.log('请求出错');
            return Promise.reject(err)
        }
    ,
    },
    response: {
        onSuccess: function(resp){console.log('请求成功',resp);return resp;},
        onError: function(err){console.log('请求出错');return Promise.reject(err)},
    },
    themes: {
        skinName: { // 自定义皮肤， 以下配置参数复制自 dark 皮肤
            editor : {  // editor部分参考monaco-editor的皮肤设置
                base: 'vs-dark',
                rules: [
                    { foreground: 'A9B7C6' },
                    { token: 'keywords', foreground: 'CC7832',fontStyle : 'bold'},
                    { token: 'keyword', foreground: 'CC7832',fontStyle : 'bold'},
                    { token: 'number', foreground: '6897BB' },
                    { token: 'string', foreground: '6A8759',fontStyle : 'bold' },
                    { token: 'string.sql', foreground: '6A8759'},
                    { token: 'key', foreground: '9876AA' },
                    { token: 'string.key.json', foreground: '9876AA' },
                    { token: 'string.value.json', foreground: '6A8759' },
                    { token: 'keyword.json', foreground: '6897BB' },
                    { token: 'operator.sql', foreground: 'CC7832',fontStyle : 'bold'},
                    { token: 'string.invalid', foreground: '008000' ,background : 'FFCCCC'},
                    { token: 'string.escape.invalid', foreground: '008000' ,background : 'FFCCCC'},
                    { token: 'string.escape', foreground: '000080',fontStyle : 'bold'},
                    { token: 'comment', foreground: '808080'},
                    { token: 'comment.doc', foreground: '629755'},
                    { token: 'string.escape', foreground: 'CC7832'}
                ],
                colors: {
                    'editor.background': '#2B2B2B',
                    'editorLineNumber.foreground': '#999999',	//行号的颜色
                    'editorGutter.background' : '#313335',	//行号背景色
                    'editor.lineHighlightBackground' : '#323232',	//光标所在行的颜色
                    'dropdown.background' : '#3C3F41',	//右键菜单
                    'dropdown.foreground' : '#BBBBBB',	//右键菜单文字颜色
                    'list.activeSelectionBackground': '#4B6EAF',	//右键菜单悬浮背景色
                    'list.activeSelectionForeground' : '#FFFFFF',	//右键菜单悬浮文字颜色
                }
            },
            styles : {  // css变量控制
                'background' : '#3C3F41',
                'toolbox-background' : '#3C3F41',
                'middle-background' : '#313335',
                'middle-border' : '#323232',
                'selected-background' : '#323232',
                'hover-background' : '#353739',
                'selected-color' : '#fff',
                'color' : '#bbb',
                'icon-color' : '#AFB1B3',
                'header-title-color': '#bbb',
                'header-version-color' : '#999',
                'header-default-color' : '#AFB1B3',
                'button-hover-background' : '#2D2F30',
                'border-color': '#323232',
                'toolbox-list-label-color' : '#bbb',
                'toolbox-list-span-color':'#787878',
                'toolbox-border-color' : '#323232',
                'toolbox-list-hover-background' : '#0D293E',
                'toolbox-border-right-color' : '#555555',
                'footer-border-color' : '#323232',
                'tab-bar-border-color' : '#323232',
                'input-border-color' : '#646464',
                'input-border-foucs-color' : '#3D6185',
                'input-background' : '#45494A',
                'empty-background' : '#282828',
                'empty-key-color' : '#489DF6',
                'empty-color' : '#A0A0A0',
                'dialog-border-color' : '#282828',
                'dialog-shadow-color' : '#151515',
                'dialog-button-hover-background' : '#365880',
                'dialog-button-hover-border-color' : '#43688C',
                'dialog-button-background' : '#4C5052',
                'dialog-button-border' : '#5E6060',
                'table-col-border-color' : '#333638',
                'table-row-border-color' : '#333638',
                'table-hover-background' : '#4B6EAF',
                'debug-line-background' : '#2D6099',
                'breakpoints-background' : '#C75450',
                'breakpoint-line-background' : '#3a2323',
                'table-even-background' : '#414547',
                'button-disabled-background' : '#5A5A5A',
                'select-background' : '#3C3F41',
                'select-hover-background' : '#3C3F41',
                    'select-option-background'
            :
                '#3C3F41',
                    'select-option-hover-background'
            :
                '#4B6EAF',
                    'select-inputable-background'
            :
                '#45494a',
                    'select-inputable-border'
            :
                'transparent',
                    'toolbox-list-header-icon-color'
            :
                '#AFB1B3'
            }
        }
    }
}
```

### 在后台配置

在后台配置需要配置属性`magic-api.editor-config` 如：`magic-api.editor-config=classpath:./magic-editor-config.js`

文件内容如下：

```js
var MAGIC_EDITOR_CONFIG = {
    title: 'test',
    header: {
        skin: false,    // 屏蔽皮肤按钮
        document: false,    // 屏蔽文档按钮
        repo: false,    // 屏蔽gitee和github
        qqGroup: false  // 屏蔽加入QQ群
    }
    // 其它配置参考本页中其它配置项
}
```

### iframe中配置

在`iframe`中引用和在后台类似，需要在页面中定义变量`MAGIC_EDITOR_CONFIG`即可

## baseURL

- 类型: `String`
  `UI`对应的后台服务地址，默认为当前路径,如:`http://localhost:9999/magic/web`

## serverURL

- 类型: `String`
  接口实际请求路径,默认为当前路径，如:`http://localhost:9999/`

## title
- 类型: `String`
编辑器显示的标题，默认值为`magic-api`

## defaultTheme
- 类型: `String`
编辑器的默认皮肤，默认值为`default`，内置有`default`和`dark`

## header
- 类型: `Object`
编辑器的`header`显示控制

### skin
- 类型: `Boolean`
显示控制皮肤按钮，默认值为`true`

### document
- 类型: `Boolean`
显示帮助文档按钮，默认值为`true`

### repo
- 类型: `Boolean`
显示`Gitee`、`Github`按钮，默认值为`true`

### qqGroup
- 类型: `Boolean`
显示控制皮肤按钮，默认值为`true`

## request
- 类型: `Object`
请求拦截器设置

### beforeSend
- 类型: `Function`
请求之前回调方法
`beforeSend: (config) => config`

### onError
- 类型: `Function`
请求出错回调方法
`onError: (err) => Promise.reject(err)`


## response
- 类型: `Object`
请求响应拦截器设置

### onSuccess
- 类型: `Function`
请求成功回调方法
`onSuccess: (resp) => resp`

### onError
- 类型: `Function`
请求出错回调方法
`onError: (err) => Promise.reject(err)`

