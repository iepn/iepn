<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 设置 ref 变量存储当前月份的图片路径
const currentMonthImage = ref<string>("");

// 在组件挂载时调用方法设置当前月份的图片路径
onMounted(() => {
  setCurrentMonthImage();
});

// 获取当前月份
const setCurrentMonthImage = () => {
  const currentMonth = new Date().getMonth() + 1; // 注意：getMonth 返回的是 0 到 11，所以要加 1
  currentMonthImage.value = `/images/calendar/${currentMonth}.webp`; // 假设图片名称为月份.jpg
};

// 使用 useAsyncData 函数发起异步请求
const { data: equalQuery } = await useAsyncData("equal", () => {
  // 返回 /more 目录下的数据，也可以（.where({ director: 'Hayao Miyazaki' }) 来进行过滤）
  return queryContent("work/").find();
});
</script>

<template>
  <div class="column  body-content-layout">
    <div class="body-con-main" v-if="equalQuery" v-for="all in equalQuery.slice(0, 5)" :key="all.id">
      <ul class="body-con-main_title">
        <li class="body-con-main_title__top"></li>
        <li style="color: #000000;font-weight: bold">{{ all.title }}</li>
        <li>{{ all.types }}</li>
        <li>{{  all.release_date }}</li>
      </ul>
      <p>{{ all._PATH }}</p>
      <NuxtLink :to="all._path"><div class="body-con-main__img" :style="{ background: 'center no-repeat url(' + all.images + ')' }"></div></NuxtLink>
      <a :href="all.demo" target="_blank">{{ all.demo }}</a>
      <p>BY: {{ all.director }}</p>
    </div>
  </div>
</template>

<style scoped>

.body-con-support svg {
  margin-top: 20px;
  height: 30px;
}
a {
  color: #000000;
}
.body-con-main {
  padding-top: 20px;
}
.body-con-main__img {
  width: 100% ;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 753px;
  background-size: cover !important;
}
.body-con-main_title {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.body-con-main_title__top {
  height: 10px;
  display: block;
  /* background-repeat: repeat-x; */
  width: 70px;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='75' height='4' viewBox='0 0 75 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 2H75' stroke='%23213ED4' stroke-width='3'/%3E%3C/svg%3E%0A");
}



@media screen and (max-width: 600px) {
  .body-con-main__img {
    height: 443px;
  }
}

@media screen and (max-width: 1440px) {
  .body-content-layout {
    flex: auto !important;
  }
  .body-con-show-on li {
    margin-left: 12px;
  }
}
.body-con-nav img {
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  color: #9C9C9C;
}
</style>
