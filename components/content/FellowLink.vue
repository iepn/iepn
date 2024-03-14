<script setup>
import { defineProps } from "vue";

const props = defineProps({
  img: {
    type: String,
    default: "",
  },
  back: {
    type: String,
  },
  url: {
    type: String,
    default: "https://www.behance.net/rhymeq",
  },
  title: {
    type: String,
    default: "N/A",
  },
  desc: {
    type: String,
    default: "N/A",
  },
});
</script>

<template>
  <NuxtLink :to="url" target="_blank">
    <main class="layout">
      <div class="background" :style="`background-image: url(${back})`">
        <main class="back-layout">
          <img :src="img" />
          <div class="desc">
            <p id="title">{{ title }}</p>
            <p>{{ desc }}</p>
          </div>
        </main>
      </div>
    </main>
  </NuxtLink>
</template>

<style scoped>
.desc {
  line-height: 1;
  display: block;
  height: 100%;
  margin-top: 12px;
  background: white;
  padding: 2vw;
}
.desc #title {
  color: #343434 !important;
  padding: 0;
  margin: 0;
  font-size: larger;
  font-weight: 500;
}
.layout {
  margin-bottom: 4vh;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.layout:hover {
    transform: scale(0.98);
}
.back-layout {
  z-index: 3;
  position: inherit;
}
img {
  width: 11vh;
  border-radius: 159px;
  border: 5px solid #ffffff;
  position: relative;
  /* left: 1vw; */
  top: 3.4vw;
  margin: 1vw;
}
.background {
  height: 100%;
  background-size: cover;
  box-shadow: 0px 11px 14px 0px rgb(0 0 0 / 4%);
}
</style>
