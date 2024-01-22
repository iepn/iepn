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
      温馨提示 (点击）
    </p>
        <p>本文或本博客（HTTPS://MEMBER.ACM.ORG/~RHYMEQ）内容不针对任何个人和厂商，如果您觉得阅读后，对您产生了一定的伤害；包括但<b>不限于心里不适、焦虑、心情烦躁等。</b></p>
        <p>对您感到非常抱歉，还请您理解作者本人患有严重的抑郁症、自闭症、臆想症，是一个 UNDERACHIEVER \ LOSER \ FAILURE \ DUD \ WASHOUT 标签集大成者。</p>
        <p>假设您是一位专业的读者但不限于网络安全从业者、自由职业、程序员\工程师、公司领导、运维、区块链开发、运营、设计师及受过高等教育的高素质人群，甚至是创业者、CEO，请您理解：</p>
        <p><b>不是所有人都很您一样优秀。</b>如果您感觉本文有极强的错误，如写作手法、基本的语言逻辑、措辞、语法、名词、描述等涉及到语文、九年义务教育漏网之鱼、甚至是 code 逻辑、设计规格、思维逻辑、写作严谨等问题<a href="https://github.com/iepn/iepn" style="font-weight: bold;">可点此对本文进行编辑。</a></p>
  </div>
</template>

<style scoped>
 div {
   margin-top: 30px;
   border-radius: 7px;
   margin-bottom: 22px;
 }
 div p {
   color: #d8d8d8 !important;
 }
 div a {
   color: #d8d8d8 !important;
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