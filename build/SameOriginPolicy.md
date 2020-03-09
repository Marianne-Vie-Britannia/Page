### 同源策略

先看看MDN的[解释](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy):

**同源策略**限制了从同一个源加载的`文档`或`脚本`如何与来自另一个源的`资源`进行交互.

* 通常允许*跨域写操作（Cross-origin writes）。*

  * 链接（links）

  * 重定向

  * 表单提交。

* 通常允许*跨域资源嵌入（Cross-origin embedding）*

  * <script>标签嵌入跨域脚本。语法错误信息只能在同源脚本中捕捉到。

  *  <link>标签嵌入CSS。

  * <img>嵌入图片。支持的图片格式包括PNG,JPEG,GIF,BMP,SVG,...

  * <video> <audio>嵌入多媒体资源。

  * <object>插件，可用于加载PDF。

  * @font-face 引入的字体。一些浏览器允许跨域字体（ cross-origin fonts），一些需要同源字体（same-origin fonts）。

  * <iframe>载入的任何资源。站点可以使用X-Frame-Options消息头来阻止这种形式的跨域交互。

同源策略不允许XMLHttpRequest生成的跨域http请求通讯。

以上有些无聊，讲个故事吧！

假设Ayesha想听Nio的秘密，Ayesha在这个过程中得到了Nio的秘密，没有任何代价，但是Nio的秘密却暴露了。所以同源策略保护Nio的信息不会被Ayesha听去。

解决方案：

1. Access-Control-Allow-Origin

`https://www.w3.org/TR/cors/` 定义了客户端进行客户端跨域请求的机制。

用上面Ayesha&Nio例子来说就是Nio返回一个 response，头部写着 `Access-Control-Allow-Origin: Ayesha` , 表示Ayesha可以听Nio的回复。Ayesha浏览器接到回复后，确认现在的域在白名单里，再发送真正的请求。

举个`express.js`的例子

```javscript

let options = {
  setHeaders: function (res, path, stat) {
    res.set('Access-Control-Allow-Origin', '*')
  }
}
app.use(express.static('public',options));

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

```

2. document.domain

据说两个页面将domain设置成相同的值之后就可以相互读取属性，但是这也太不安全了。恶意页面可以把domain设置成要攻击的页面，瞬间可以拿到cookie。站长还没有试过，但是可以在本地试一下！

3. window.postMessage()

配合window.onmessage事件监听器可以得到消息的内容。
