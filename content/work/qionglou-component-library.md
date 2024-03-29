---
"title": 琼楼组件库设计
"description": "说实话我与前端的接触并不多，如果说最多的无非是小学时对拥有一台服务器、域名和论坛的盲目追崇。当时的 Xiuno BBS 还火极一时（因为安装很方便，就是那种无脑下一步即可的），之后接触到了 WordPress、 Discuz x!、z-blog、MediaWiki 但都没有我喜欢的。"
"director": "RHYME.Q, Zloyalty"
"types": "DEVELOP"
"release_date": 2023.04.22
"demo": "https://qionglou.jiangxue.org/"
"images": "/images/pages/qionglou/1.png"
---

::page-img
---
title: 琼楼组件库设计
img: qionglou/2,qionglou/3
---
::

说实话我与前端的接触并不多，如果说最多的无非是小学时对拥有一台服务器、域名和论坛的盲目追崇。当时的 Xiuno BBS 还火极一时（因为安装很方便，就是那种无脑下一步即可的），之后接触到了 WordPress、 Discuz x!、z-blog、MediaWiki 但都没有我喜欢的。

甚至好像还误打误撞混进了站长圈，感觉一个一个年龄都好大，还接触到了云服务厂商的代理们（比如什么小鸟云什么的，网站什么的好像都是那一套模板，至今我都不知道有这么多人弄云服务代理）。

::text-space
---
info: "* 可惜，Xiuno BBS 在 2020 年 7 月关闭了，留下一句话：‘国内什么时候有真正的开源环境了再见！’，当时我不太理解，甚至有些疑惑，现在或许我理解了。"
---
::

混到站长群（群主是烧饼）之后，就是那个头像是个小孩子的烧饼，当时他好像在开发一个论坛框架，也有人在用。之后在一个云厂商代理的测试页面中看到了 ThinkPHP 的角标。

（当时感觉很好看，然后我就把这个角标 copy 到了我自己项目中，改了个 Logo 和颜色以及名字。然后你点开那个角标就会看到各种参数信息的样子）

::text-space
---
info: "* 那时候 ThinkPHP 的官网还好丑，一股传销、广告推广站的模样。好多年过去了现在官网竟然更新座右铭为：'大道至简' 也是蛮有趣的，但和 Laraver 相比感觉后者真的是 Code Art，确实很艺术，但 PHP 的技术栈属实是雅俗共赏。"
---
::

后来慢慢长大了，在这个期间折腾过 Raspberry Pi、Linux（几个发行版折腾了个变最终归宿是 Mac，但 Arch 和大蜥蜴是用户体验挺不错的，我也不知道为什么用 ubuntu\debian 的 apt-get 安装依赖总是有可能把系统删了）

从 JSP 过渡到 Spring -> Spring Boot（当过度到 Spring Boot 时，感觉确实名不虚传，比单个 Spring 配置要智能得多），之后也尝试体验了 Spring Cloud 以及 HashiCorp 家的 Consul 服务中心（在此之前我确实没见过像是 Nacos 这种完全不用动脑的）

Hashicorp 家的 Vagrant 很好用（很像是 Docker，但是又不是 Docker，用来搭建虚拟机很舒服）

之所以想写一个组件库，可能大概是我比较懒，然后有想追求自己设计稿的设计去完成其样式，但当时的 CSS 库感觉比较傻，然后刚好在 Laraver 中看到了 Vue

（因为 Laraver 中是可以写 Vue Code 的，所以你可想而知 Vue Code+ PHP Code 结合是什么样的）

所以就去看了 Vue，在此期间也搜刮了下 Node.js，给 expressjs、vue 提交过 pr（很开心都被合并了）

::text-space
---
img: 6/1
info: 图源 1 | 我还收获到了 Vue 的小贴纸，感谢 @lingsi
---
::

（其实这是琼楼的第二版本设计，第一版本的设计太丑了拿不出手）

在琼楼第二版本中使用到了 Spline 进行设计（可以理解为 Three.js 的可视化版本，原谅我懒的打开 blender 设置一堆环境和场景及材质再导到 Three.js 中），所以你可以在首页里体验到游戏交互（比如 ASWD 移动和空格跳跃、鼠标改动摄像头视角等这些基础的）

::text-space
---
info: <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/910284429?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Untitled"></iframe></div>图源 2 | 通过 Spline 设计的琼楼场景搭建 https://qionglou.jiangxue.org/
---
::

之所以将组件库命名为琼楼，可能更大的一部分取自苏轼的《水调歌头》："我欲乘风归去，又恐琼楼玉宇，高处不胜寒。"

::text-space
---
info: "*诗句大意：我想凭借着风力回到天上去看一看，又担心美玉砌成的楼宇太高了，我经受不住寒冷。 https://so.gushiwen.cn/mingju/juv_2440a90a8220.aspx"
---
::

很契合江雪目前的状态，每个项目都很高端且深入基础，但任何一个项目拿出来后都是一个青春的凋谢，历经十年的付出也许在人家看来仅仅是一个笑话。

所以在这个情况下，琼楼可以作为前端开发基础组件库，以独特的设计和可解耦使用的方式，完成江雪的各样设计和结合 GSAP 动画交互效果的综合性组件库。

而选择 Vue 的原因可能是其生态看着很雅俗共赏，有较大的空间（也许未来在 Vue 组件库写的差不多的时候，支持下 HTMX）

::text-space
---
img: 6/3
info: the difference between HTMX and React Server Components. @angelo_fallaria
---
::

目前琼楼还处于试错阶段（也就是随时可能会有较大的改变）即现在的组件也许会被推翻重来（本来琼楼官网打算在琼楼写的差不多之后在进行开发的，但还是为了怕遗忘一些组件参数，先用 vitepress 对付了一下，之后再用琼楼的组件去开发官网。）

::text-space
---
img: 6/4
info: 图源 4 | 琼楼组件库 V3 文档移动端设计稿（基础，未含 Code 演示、Script、Template 分块等功能。ps:等上线的时候肯定是有的）
---
::

至于后面组件库的主题编辑器、和主题商店，虽然有这个计划也完成了设计，但真正上线可能要看天意。因为设计是设计，设计需要考虑到组件目前发展的程度和实用性和观赏性，所以目前的设计可能在组件库下一次更新的时候，都会被丢弃。

::text-space
---
info: "*当初在 Zloyalty 还未构建好打包的时候认认真真的把他那个丑死的按钮写成了很好看的样子，结果在下一次重构打包的时候，他那个丑死的按钮样式又把我那个已经初具雏形的按钮组件给夺舍了。这让我意识到了一个问题，就是说好看的他并不一定能用，不好看的也许会经久不衰，所以可能未来琼楼的组件库主打一个只加一个 border: 1px solid #DADADA"
---
::

（感觉用 Rive 画出来的动效比我用 AE 弄得效果都好）

:page-tips

