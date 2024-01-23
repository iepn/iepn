<template>
<!--
 <div>
    <p style="font-weight: bold;color: #213fd6;display: flex;align-items: center;cursor: pointer;" @click="tips = !tips">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.49999 18.0833C10.456 18.0833 12.2268 17.2905 13.5087 16.0087C14.7905 14.7268 15.5833 12.956 15.5833 11C15.5833 9.04401 14.7905 7.27318 13.5087 5.99133C12.2268 4.7095 10.456 3.91667 8.49999 3.91667C6.544 3.91667 4.77316 4.7095 3.49132 5.99133C2.20949 7.27318 1.41666 9.04401 1.41666 11C1.41666 12.956 2.20949 14.7268 3.49132 16.0087C4.77316 17.2905 6.544 18.0833 8.49999 18.0833Z" stroke="#213ED4" stroke-width="1.5" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.50001 6.39583C8.98901 6.39583 9.38543 6.79225 9.38543 7.28124C9.38543 7.77024 8.98901 8.16666 8.50001 8.16666C8.01101 8.16666 7.61459 7.77024 7.61459 7.28124C7.61459 6.79225 8.01101 6.39583 8.50001 6.39583Z" fill="#213ED4"/>
        <path d="M8.67708 14.5417V9.58333H8.32292H7.96875" stroke="#213ED4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.4375 14.5417H9.91667" stroke="#213ED4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      温馨提示 (点击）
    </p>
   <Transition>
      <main v-if="tips">
        <p>本文或本博客（HTTPS://MEMBER.ACM.ORG/~RHYMEQ）内容不针对任何个人和厂商，如果您觉得阅读后，对您产生了一定的伤害；包括但<b>不限于心里不适、焦虑、心情烦躁等。</b></p>
        <p>对您感到非常抱歉，还请您理解作者本人患有严重的抑郁症、自闭症、臆想症，是一个 UNDERACHIEVER \ LOSER \ FAILURE \ DUD \ WASHOUT 标签集大成者。</p>
        <p>假设您是一位专业的读者但不限于网络安全从业者、自由职业、程序员\工程师、公司领导、运维、区块链开发、运营、设计师及受过高等教育的高素质人群，甚至是创业者、CEO，请您理解：</p>
        <p><b>不是所有人都很您一样优秀。</b>如果您感觉本文有极强的错误，如写作手法、基本的语言逻辑、措辞、语法、名词、描述等涉及到语文、九年义务教育漏网之鱼、甚至是 code 逻辑、设计规格、思维逻辑、写作严谨等问题<a href="https://github.com/iepn/iepn" style="font-weight: bold;color: #213fd6;">可对本文进行编辑。</a></p>
      </main>
   </Transition>
 </div>
 -->
  <div>
    <hr />
    <p style="font-weight: bold;">
      温馨提示
    </p>
        <p>本文或本博客（HTTPS://MEMBER.ACM.ORG/~RHYMEQ）内容不针对任何个人和厂商。如果您觉得阅读后对您产生了一定的伤害，包括但<b>不限于心理不适、焦虑、心情烦躁等。</b></p>
        <p>对此，我（泛指：BLOG 实际作者、网站运营者）感到非常抱歉，还请您理解作者本人患有严重的抑郁症、自闭症、臆想症，是一个 UNDERACHIEVER \ LOSER \ FAILURE \ DUD \ WASHOUT 标签集大成者。</p>
        <p>假设您是一位专业的读者，但不限于网络安全从业者、自由职业者、程序员 \ 工程师、公司领导、运维、区块链开发、测试、运营、设计师及受过高等教育的高素质人群，甚至是创业者、CEO；</p>
        <p>又或者您不认为或不承认自己接受过与高等教育类似的学习经历，对本文持有严重的怀疑态度，以及严谨性、专业性、可信度（在此泛指没有您认为的专业的机构、媒体、受过备案的平台转发、公众号、论坛或报道的相关文章）等，请您理解：</p>
        <p><b>不是所有人都像您一样优秀。</b>如果您感觉本文存在严重的错误，如写作手法、基本的语言逻辑、措辞、语法、名词、描述等涉及到语文、九年义务教育漏网之鱼、甚至是 code 逻辑、设计规格、思维逻辑、写作严谨等问题<a href="https://github.com/iepn/iepn" style="font-weight: bold;">请点击此处对本文进行编辑。</a></p>
        <p>如果您感觉上面几条问题是您阅读后的真实感受，我感到非常抱歉。在此之后，我一定会提升社交能力、语言表达能力、人际交流能力、心理活动观察、专业技术（各类）、结构思考力、系统思考、结构共同能力、结构领导力等一系列涉及 "结构" 的能力。同时，深度学习《礼记》、《诗经》等能提升文学能力，阅读传统文化的古今中外享誉世界的名著，如《简爱》、《小王子》、《论语》、《钢铁是怎样炼成的》、《曾国藩家书》、《物种起源》等。</p>
        <p>如果您觉得本文、本网站中的数字媒体资源，如图片、视频、文字或符号（Unicode 规范中存在的标准化符号），可能存在或怀疑是西方（泛指西方国家、西方文化区、西洋；又或者欧洲、北美洲、澳大拉西亚国家）文化、科学技术入侵等问题、疑虑等。</p>
        <p>对此，本人感到非常抱歉，未来将尽可能通过信创新势力（信息技术科技创新）技术架构，如 Spring Cloud Alibaba、ArkTS、GaussDB、达梦数据库、Unity Operating System、CEC-IDE 等（不一一列举）。</p>
        <p>并且，本网站会尽可能更新、维护和引进新的、更加现代化且快速的敏感词处理、过滤工具。如果您有推荐的产品或相关方面的建议，欢迎联系。</p>
    <p style="font-weight: bold;cursor: pointer;margin-top: 30px;">
      联系作者 | 法律声明 | 道德准则 <br>
      <p>Designed, Developed, and Written by Rhyme.Q ❄️<br>Copyright © 2013 - 2024 RHYME Q. All Rights Reserved. 韵清 版权所有</p>
    </p>
  </div>
</template>

<style scoped>
 div {
   margin-top: 30px;
   border-radius: 7px;
   margin-bottom: 22px;
   font-size: small;
 }
 div p {
   color: #aeaeae !important;
 }
 div a {
   color: #aeaeae !important;
 }
 .v-enter-active,
 .v-leave-active {
   transition: opacity 0.5s ease;
 }

 .v-enter-from,
 .v-leave-to {
   opacity: 0;
 }
</style>

<script setup lang="ts">
const tips = ref(false)
</script>