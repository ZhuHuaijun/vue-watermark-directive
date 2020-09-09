### 安装

使用npm安装

```js
npm install vue-watermark-directive --save
```

使用yarn安装
```js
yarn add vue-watermark-directive --save
```

### 使用

在应用初始化时，安装插件。

```js
import Vue from 'vue'
import watermark from 'vue-watermark-directive'

Vue.config.productionTip = false
Vue.use(watermark)
...
```

这里也支持使用第二个参数来配置插件。

```js
import Vue from 'vue'
import vueWatermark from 'vue-watermark-directive'

const DEFAULT_CONFIG = {
  zIndex: 1000,
  font: '16px microsoft yahei',
  color: 'rgba(0,0,0,0.05)',
  content: 'Hello World',
  rotate: 20,
  width: 100,
  height: 100,
  repeat: true
}

Vue.config.productionTip = false
Vue.use(vueWatermark, DEFAULT_CONFIG)
...
```

在使用vue模版中就可以使用`v-watermark`指令了。
支持直接绑定字符串，也可以传入自定义的配置。

使用字符串：

```html
<div
  class="container"
  v-watermark="'ABC'">
</div>
```

使用自定义配置:

```html
<div
  class="container"
  v-watermark="{
      content: 'ABC'
    }">
</div>
```

可配置字段

|字段|功能|
|-|-|
|zIndex|设置z-index|
|color|水印颜色|
|font|水印字体|
|content|设置水印内容|
|rotate|设置水印旋转角度|
|width|设置宽度|
|height|设置高度|
|repeat|设置是否重复|
