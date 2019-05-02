# vue ManagementMaster

> A minimal vue ManagementMaster with Element UI & axios & iconfont & permission control & lint

## Build Setup

```bash
# Clone project
git clone https://github.com/knowledges/ManagementMaster.git

# Install dependencies
npm install

# Serve with hot reload at localhost:9090
npm run dev

# Build for production with minification
npm run build

# Build for production and view the bundle analyzer report
npm run build --report
```

## 附件上传（图片）（H5 只是手机拍照直线展示图片、PC 流程不变）
# 图片展示功能 
# <p><img src="https://github.com/knowledges/ManagementMaster/blob/master/static/image/album.jpg" alt="相册" title="相册" /></p>
```bash
(https://github.com/knowledges/ManagementMaster/blob/master/static/image/album.jpg)
-----------------------------------------------------------------
|  参数  |      描述                 |  默认                      |
-----------------------------------------------------------------
| files |  数据集合                  | 图片url 对应的参数名为 image|
| index |  从第几个打开（下标0开始)   |  0                        |
-----------------------------------------------------------------
# TODO 缺少相片集功能
```
## 台历功能
## 表格功能（表格的编辑【input、radio、checkbox、select...】）
## 富文本框
## 数字动画
## tabview
## 树
## 地图
## 全局 notices // 暂时没有 


## IE报vuex requires a Promise polyfill in this browser

```bash
# Install dependencies
npm install babel-polyfill --save-dev

#update webpack.base.conf
# old
entry: {
  app: './src/main.js'
}
# new
entry: {
  app: ['babel-polyfill', './src/main.js']
}
```

## [vue-router] Duplicate named routes definition 

```bash
router 里不能有重复的name
```

## Disallow self-closing on HTML void elements

```bash
HTML自闭合(self-closing)标签：
<meta>标签:设置页面元信息的
<base>:设置网页所有链接的相对目录(如根目录)的
<br>:换行
<hr>:水平线
<img>:图像
<input>:表单元素
<col>:在表格table中定义一个或多个列的属性
<frame>:定义框架的一个窗口（已遗弃）
<link>:定义文档与外部资源的关系的链接
<area>: 标签定义图像映射内部的区域（图像映射指的是带有可点击区域的图像）。
<param>:元素允许您为插入 XHTML 文档的对象规定 run-time 设置，也就是说，此标签可为包含它的
<object> 或者<applet> 标签提供参数。
<embed>: HTML5 中新增的,标签定义了一个容器，用来嵌入外部应用或者互动程序（插件）。
<keygen>:该对象提供了一个安全的方式来验证用户。
<source>: 标签为媒体元素（比如 和 ）定义媒体资源。
```

## 地图警告chrome控制台报出警示问题 
       A Parser-blocking, cross site (i.e. different eTLD+1) script, http://api.map.baidu.com/getscript?v=2.0&ak=Kpjp7jddqVUhWK5VkrfNt3YNezY88NtR&services=&t=20170517145936, is invoked via document.write. The network request for this script MAY be blocked by the browser in this or a future page load due to poor network connectivity. If blocked in this page load, it will be confirmed in a subsequent console message.See https://www.chromestatus.com/feature/5718547946799104 for more details. 
       (anonymous) @ api:1 
```bash
将 api 替换 getscript
<script type="text/javascript" src="http://api.map.baidu.com/getscript?v=2.0&ak=myAK"></script>
```
## 热更新报错 Errors while compiling. Reload prevented.
```bash
组件里有热更新到导致的
```
##  Maximum call stack size exceeded
 ```
 组件里使用的name 和 模块中对于的name 是用一个导致的
 ```
