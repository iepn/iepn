<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
body {
  background-color: #fff;
}
@media screen and (min-width: 1024px) {
    .column {
        padding: 0px !important;
    }
}
@media screen and (max-width: 1024px) {
    .column {
        padding: 0.45rem !important;
    }
}
.dark-mode body {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow: auto;
  mix-blend-mode: exclusion;
  background-color: rgb(255 255 255);
}
::-webkit-scrollbar {
  width: 0px;
  background-color: transparent;
}
.dark-mode hr {
    background-color: #eaeaea;
}
.dark-mode .body-con-main__img, .slides, #page-tips-main {
    opacity: 0.7;
}
</style>