# SSR 初探

SSR（Server Side Render）服务器渲染

> 渲染：页面形成的过程，html 文件，内容形成的过程

CSR（Client Side Render）客户端渲染

> 渲染：页面内容通过 js 执行形成

## 前端发展史

1. 静态页面阶段

> document（文档）

2. 服务器端渲染阶段

> js 刚刚出生的时候，要么做不了，要么做不好

> PHP smarty
> java JSP, volicity, freemaker
> python, jinja2

> 优点：
>
> 1.  前端压力小，直接渲染
> 2.  有利于 SEO（搜索引擎优化）（公域流量 VS 私域流量）
>
> 缺点：
>
> 1. 学习成本高
> 2. 开发成本高
> 3. 服务器压力大

利用模板修改页面

3. 客户端渲染（前后端分离）

> 浏览器越来越快，js 能做的事越来越多

> css3，html5，cssnext，es6、es7、es8...，设计模式，vue

> 优点：
>
> 1. 前后端分离，前端（UI+交互），后端（API+数据）
> 2. 体验好（native），SPA
>
> 缺点：
>
> 1. 首屏加载慢（落地页）
> 2. SEO 不好

4. 同构（Vue SSR，SSR + CSR）

nodejs，会 js 就可以开发服务端

> 缺点：服务端要跑一次，客户端也要渲染，浪费资源