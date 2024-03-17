<script setup lang="ts">
defineProps(["info", "img"]);
</script>

<template>
  <main v-if="info" id="page-tips-main">
    <img v-if="img" :src="'/images/info/' + img + '.png'" />
    <main v-html="info" />
  </main>
</template>

<style scoped>
#page-tips-main {
  font-size: small;
  margin-top: 1px;
  margin-bottom: 1px;
}
main {
  color: #8e8e8e;
  text-align: justify;
  margin-top: 1px;
  margin-bottom: 1px;
}

#page-tips-main img {
  width: 100% !important;
  margin-bottom: 5px;
}
#page-tips-main video {
  width: 100% !important;
  margin-bottom: 5px;
}
#page-tips-main div {
  width: 100% !important;
  margin-bottom: 5px;
}
#page-tips-main {
  color: #b6b6b6;
  font-size: small;
  display: flex;
  flex-direction: column;
}
</style>
