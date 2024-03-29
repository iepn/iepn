---
"title": 江雪联合实验室銮音项目
"description": "江雪之前已经成立和组建了一个虹霓实验室，但由于虹霓主要专注于天演计算、分析等方面的项目和边缘领域，因此将一些辅助性的项目划分给了銮音。銮音的名字取自《说文》中的:人君乘车四马四镳八銮，铃象鸾，鸟声，和则敬也。"
"director": "RHYME.Q"
"types": "RESEARCH"
"release_date": 2023.12.25
"demo": "https://gateway.luanyin.jiangxue.org/"
"images": "/images/pages/tianyan/tianyan-home.png"
---

::page-img
---
title: 江雪联合实验室銮音项目
img: tianyan/ty-0,tianyan/ty-1,tianyan/ty-2
---
::

江雪之前已经成立和组建了一个虹霓实验室，但由于虹霓主要专注于天演计算、分析等方面的项目和边缘领域，因此将一些辅助性的项目划分给了銮音。銮音的名字取自《说文》中的 "人君乘车四马四镳八銮，铃象鸾，鸟声，和则敬也。"。

因此，銮音这个名字非常符合江雪的调性，所以很搭配一起使用。而为什么叫实验室，也就是 LAB，这个词并不是为了好看或者听起来很牛逼才这么叫的。

而是说之后，随着天演，也就是虹霓逐渐步入正轨，可以为江雪的各个项目提供支持，并进行各种计算和模拟；主要目的是提供一些佐证资料。

加上 LAB 之后，表明拿得出来的东西都是经过推敲、严谨、无懈可击、完美的！而不是随便做出来的。

目前銮音负责的项目主要是声学方面的研究和应用，主要包括模拟、测算、构建等，也就是说可以通过声音进行环境的模拟和建模，并实时反馈。

通过计算出主要或需要的参数，进行系统的分析和统计的综合架构，主要用于特殊领域的分析和画像。

最近，剑桥的研究团队和合作者巧妙地利用了上述方式，即虚拟实验室，在这篇论文中被称为 SDLs（Distributed Self-Driving Laboratories，分布式自动驾驶实验室 / 分布式自主实验室）刊登在 [Nature Journal](https://www.nature.com/articles/s41467-023-44599-9)。


::text-space
---
img: 1/1
info: 图源 1 | From Platform to Knowledge Graph:Distributed Self-Driving Laboratories <br/> https://como.ceb.cam.ac.uk/media/preprints/c4e-preprint-310.pdf
---
::

这和天演虹霓实验室的做法类似，通过大量的计算资源将物理实验室设备进行虚拟仿真，已达到云上开展研究和设计，同时实时共享数据可让其合作者实时观察进度和操作。

::text-space
---
img: 1/2
info: 图源 2 | 江雪虹霓实验室：为江雪和其附属团队和项目及其合作者提供计算资源和实验环境的计算平台 https://gateway.hongni-lab.jiangxue.org/
---
::

当然江雪的某些研究领域不像是生物、化学、物理那样需要什么样的器材和设备，江雪的主要项目更侧重计算机网络、科学等方面，因此我们只是将计算资源以及网络、环境仿真和模拟等。

::text-space
---
img: 1/3
info: 图源 3 | 根据科学家的目标请求触发自主工作流，作为在知识图谱中传播信息。https://como.ceb.cam.ac.uk/media/preprints/c4e-preprint-310.pdf
---
::

像是图 3 这种直接在关系图里直接通过描述词然后让 ROG Agent 直接执行和调用的，还是很新颖的。江雪目前更多的是通过 Code 模块化的预设命令完成这种操作。感觉很像 [obsidian](https://obsidian.md/) 的知识图谱，通过这种方式呈现的效果感觉比看状态、日志的效果更加直观。

目前，虹霓通常的架构基本上都是通过 [Neo4j](https://neo4j.com/) 存储和查询关系比较方便，查询速度也很快，再加上 [Vertx Framework](https://vertx.io/docs/) 非常适合计算数据庞大且需要经常查询的计算结果。 但存在一个问题，就是说这些数据拥有较强的关联性且庞大的数据，存在较高的可攻击性，且任何一个节点的修改，性能上存在较高的资源浪费。

未来也许可能通过 Myung 解决这些问题。

:page-tips

