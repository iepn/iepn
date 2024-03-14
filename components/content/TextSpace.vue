<script setup lang="ts">
defineProps(["info"]);
</script>

<template>
  <main v-if="info" id="info">
    <main v-html="info" />
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
</style>
