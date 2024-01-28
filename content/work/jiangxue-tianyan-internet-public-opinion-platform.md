---
"title": 江雪天演舆情分析项目
"description": "在谈及 舆情 之前、我相信有很多人会脸色一变觉得这种类似的分析项目就是普通的数据抓取和分析，甚至是直接看社交平台（含短视频平台）的数据进行反馈。"
"director": "RHYME.Q"
"types": "RESEARCH"
"release_date": 2023.08.25
"demo": "https://gateway.tianyan.jiangxue.org/"
"images": "/images/pages/tianyan-opinion/1.png"
---
# 江雪天演舆情分析项目

:page-back

::page-img
<div class="slider">
  <div class="slides">
      <img src="/images/pages/tianyan-opinion/1.png">
      <img src="/images/pages/tianyan-opinion/4.png">
      <img src="/images/pages/tianyan-opinion/2.png">
      <img src="/images/pages/tianyan-opinion/3.png">
  </div>
</div>
::

在谈及 "舆情" 之前，我相信很多人会在听到这种类似的分析项目时脸色一变，觉得这只是普通的数据抓取和分析，甚至认为是直接看社交平台（包括短视频平台）的数据反馈。

更有甚者可能会将其与 APT 等一系列解释联系起来，这当然是 "合理" 的，因为所有类似冲突或事件都可以由某个 APT 组织去进行 "引导和策划"。而目前比较专业的领域和大规模学术级应用，更多的是由 Google 的 GDELT 项目提供支持。

PS：注意这与像 Shodan 一类的资产搜索引擎不同，上述类项目针对的是更加全面的显示数据模拟和综合计算。而此类项目仅仅是针对互联网上的资产进行抓取和分析，当然。

之后像是 Shodan 这类资产搜索引擎是否能关联成资产模拟、资产预判和仿真等，我就不言而喻了，也许有蛋糕可图，我相信他们也会侧重这一方向，比如换个词，叫 "网络空间测绘"。

回到舆情中，我们会发现舆情的 English 的解释有公众情绪\意见(Public sentiment)、公众意见(Public opinion)等，综合可进行舆论导向（Direction Of Public Opinion）、事件的模拟和计算。

而目前能单从含义诠释这种需求的，更多的是流量高度集中的 Google，因此 Google 的 GDELT 项目经常作为社会科学等领域的较权威数据来源。

::img-tips
<img src="/images/info/3/1.png" >
图源 1 | 京畿研究院利用 GDELT 分析 1990~2020 年之间的韩中纠纷趋势：A Time Series Analysis of the Dynamics of Korea-China Relations with GDELT Data
이성우, 민소영. (2022). 사건계수자료(GDELT)를 활용한 한 · 중 양자관계 역학 분석. 경기연구원. http://doi.org/10.18107/japs.2022.29.3.002
::

而在中文互联网流量大量集中的百度、腾讯、阿里等厂商，分别有自己的一套分析方式。但无法像 GDELT 那样拥有世界大部分国家的数据流向，且充分完整。前者大多是输出结果，且人工修饰较为严重。

但好消息是，自从字节跳动的抖音、bilibili、小红书、微博、快手、百度、微信等大流量聚集的社交、图媒体平台，逐渐让某些热点和历史数据也能成为某个领域的分析资料。因此也促成了很多类似这方面的舆情、数据分析平台的诞生。

可惜的是，样本和衡量因素不多导致无法呈现真实世界生活，更多的是包装出来的效果所进行引导和牵制，产生了互联网世界和现实世界落差过大的奇怪因素。

往往采用这类舆情、大数据分析平台的单位和机构所作出的决策无法满足真实需求，从而诞生矛盾和不当的决策出现。

::img-tips
<img src="/images/info/3/2.png" >
图源 2 | IENN Events 2023：Network Cross-Synchronization:Distributed Network Hierarchical Transmission,Jump Network
http://ienn.org/TY.2.2.14314.90563/1
::

因此，在 IENN 2023 中，我分享了未来天演的规划和架构设计，以及全新的设计体系和底层设计架构。以避免天演出现上述的问题，将侧重点放在了存储和计算中。

如果要对个体间进行分析，最好的方式就是让其还未知道的情况进行分析。从这种单向的方式可以获取到较为高质量的元数据，从而不被非个体和环境进行引导和左右。

::img-tips
<img src="/images/info/3/3.png" >
图源 2 | IENN Events 2023：Network Cross-Synchronization:Distributed Network Hierarchical Transmission,Jump Network
http://ienn.org/TY.2.2.14314.90563/1
::

之后，天演主要会兼顾舆情和数据分析的同时，结合空间测绘来进行主动信息分析，提前将事态进行分析和演算的目的。因此，天演之后的格言是："DETECT"、"PROTECT" 即侦查、和保护。

自从看了 [RAYKITE 光起源](https://www.raykite.com/) 发布会之后，我惊叹于 [Ventuz Tech](https://www.ventuz.com/) 的大规模应用。阿里曾经想通过 Unity 去驱动数据可视化大屏，但落地效果并不是很理想（比较卡顿）但通过 Ventuz 做出来的效果非常 niubility 给力（可能是 Unreal Engine 独天得厚的特性吧） 。

::page-fold
有时候真的挺崩溃的，有 Tencent 这么厉害的势力，基本上让人看不到希望。
::

所以之后天演也将刨除现在的技术架构，将数据之间的传输和存储独立于基础交换方式，以更好的和 Ventuz 构建数据之间的传递。（主要是设计资源比较花时间）

:page-tips

