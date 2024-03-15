<script setup>
import { defineProps } from "vue";
import axios from "axios";
const colorMode = useColorMode();

const props = defineProps({
  img: {
    type: String,
    default: "https://avatars.githubusercontent.com/u/57232813?v=4",
  },
  back: {
    type: String,
    default: "/fellow/back/iepn.png",
  },
  url: {
    type: String,
    default: "https://otvto.work/",
  },
  title: {
    type: String,
    default: "Iepn",
  },
  desc: {
    type: String,
    default: "I'M UNDERACHIEVER \ LOSER \ FAILURE \ DUD \ WASHOUT",
  },
});

const whiteList = ["https://feizhaojun.com/", "https://uzzju.com/"];

async function checkUrlAccessibility(url) {
  if (whiteList.includes(url)) {
    return true;
  }
  try {
    const response = await axios.head(url, {
      validateStatus: (status) => status < 400,
    });
    return response.status < 400;
  } catch (error) {
    console.error("Failed to fetch resource:", error);
    return false;
  }
}

// 检查所有资源并设置结果
const resourcesAccessible = ref(true);

async function verifyResources() {
  resourcesAccessible.value = (
    await Promise.all([
      checkUrlAccessibility(props.img),
      checkUrlAccessibility(props.back),
      checkUrlAccessibility(props.url),
    ])
  ).every(Boolean);

  return resourcesAccessible.value;
}

onMounted(verifyResources);
</script>

<template>
  <transition name="fade">
    <NuxtLink v-if="resourcesAccessible" :to="url" target="_blank">
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
    <div v-else style="display: none"></div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
.dark-mode .layout {
    mix-blend-mode: exclusion !important;
    opacity: 0.7;
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
.dark-mode .background {
  box-shadow: 0px 11px 14px 0px rgba(255, 255, 255 / 4%);
}
</style>
