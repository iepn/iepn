<script setup lang="ts">
const { info, img } = defineProps<{ info: string; img: string | undefined }>();
</script>

<template>
  <main class="page-tips-main">
    <img v-if="img" :src="'/images/info/' + img + '.png'" />
    <p id="info">{{ info }}</p>
  </main>
</template>

<style scoped>
#info {
  font-size: small;
  margin-top: 5px;
  margin-bottom: 5px;
}
main {
  color: #8e8e8e;
  text-align: justify;
  margin-top: 12px;
  margin-bottom: 12px;
}

/* img+desc */
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
  margin-top: 19px;
  margin-bottom: 19px;
  display: flex;
  flex-direction: column;
}
</style>
