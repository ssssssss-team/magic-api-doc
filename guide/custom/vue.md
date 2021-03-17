# 在Vue中使用

## 安装组件
`npm install --save magic-editor`或`npm i --save magic-editor`
## 引用组件
```html
<template>
  <div id="app">
    <!-- 引入magic-editor组件 -->
    <magic-editor :config="config"/>
  </div>
</template>

<script>
// 引入组件
import MagicEditor from 'magic-editor'
// 引入样式
import 'magic-editor/dist/magic-editor.css'

export default {
  name: 'App',
  components: {
	MagicEditor
  },
  data(){
    return {
      config:{
        baseURL: 'http://localhost:9999/magic/web',    //配置后台服务
        serverURL: 'http://localhost:9999/'    //配置接口实际路径
        // 其它配置请参考文档
      }
    }
  }
}
</script>

<style>
html,body,#app {
  width: 100%;
  height:100%;
  margin:0;
  padding:0
}
</style>
```
## 注意事项

需要的注意的是，这种引入方式，后台同样需要配置`magic-api.web`，但可以不需要`magic-editor`的`jar`，可以在pom中排除掉
```xml
<dependency>
    <groupId>org.ssssssss</groupId>
    <artifactId>magic-api-spring-boot-starter</artifactId>
    <version>magic-api-lastest-version</version>
    <exclusions>
        <exclusion>
            <groupId>org.ssssssss</groupId>
            <artifactId>magic-editor</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

