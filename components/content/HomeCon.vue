<script setup lang="ts">
import { ref, computed } from 'vue';

const currentPage = ref<number>(1);
const itemsPerPage = 5;

/**
 * !: Generate output Error
 * TODO: Change Split vue file
 */
// const { data: equalQuery } = await useAsyncData("equal", () => {
//   if (props.pages === 'security') {
//     return queryContent("work/").where({ types: 'SECURITY' }).find();
//   } else if (props.pages === 'credit') {
//     return queryContent("credit/").where({ types: 'CREDIT' }).find();
//   } else {
//     return queryContent("work/").find();
//   }
// });

const { data: equalQuery } = await useAsyncData("equal", () => {
  // 返回 /more 目录下的数据，也可以（.where({ director: 'Hayao Miyazaki' }) 来进行过滤）
  return queryContent("work/").find();
});

// 排序
equalQuery.value?.sort((a, b) => {
  const dateA = new Date(a.release_date).getTime();
  const dateB = new Date(b.release_date).getTime();
  return dateB - dateA;
});

// 计算总页数
const totalPages = Math.ceil(equalQuery.value?.length / itemsPerPage);

// 分页逻辑
const paginate = (page: number) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const getCurrentPageData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = currentPage.value * itemsPerPage;
  return equalQuery.value?.slice(startIndex, endIndex) || [];
});

// fix generate page show error
const getAllData = computed(() => {
  return equalQuery.value || [];
});
</script>

<template>
<!-- Fix output error -->
  <div v-for="all in getAllData" :key="all.id" style="display: none;">
    <NuxtLink :to="all._path" />
  </div>
  <!-- True output -->
  <!-- <div v-if="props.pages !== 'credit'" class="column body-content-layout"> -->
  <div class="column body-content-layout">
    <div class="body-con-main" v-if="equalQuery" v-for="all in getCurrentPageData" :key="all.id">
      <ul class="body-con-main_title">
        <li class="body-con-main_title__top"></li>
        <li style="color: #000000;font-weight: bold">{{ all.title }}</li>
        <li>{{ all.types }}</li>
        <li>{{  all.release_date }}</li>
      </ul>
      <p>{{ all._PATH }}</p>
      <NuxtLink :to="all._path"><div class="body-con-main__img" :style="{ background: 'left no-repeat url(' + all.images + ')' }"></div></NuxtLink>
        <div id="auther">
          <a :href="all.demo" target="_blank">{{ all.demo }}</a>
          <p>BY: {{ all.director }}</p>
        </div>
    </div>
    <div class="pagination-layout">
      <div id="pageto">
        <p @click="paginate(currentPage - 1)"
             :style="{ display: currentPage === 1 ? 'none' : 'inline-block' }"
        >PREV</p>
        <p @click="paginate(currentPage + 1)"
           :style="{ display: currentPage === totalPages ? 'none' : 'inline-block' }"
        >NEXT</p>
        <p>PAGE: {{ currentPage }}</p>
      </div>
      <div id="pagenum">
        <div v-for="page in totalPages" :key="page">
          <p style="color: #cfcfcf;" @click="paginate(page)" :class="{ active: page === currentPage, firstPage: page === currentPage }">{{ page }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- security credit -->
  <!-- <div v-if="props.pages === 'credit'" class="credit-layout">
    <div class="body-con-credit-main" v-if="equalQuery" v-for="all in getCurrentPageData" :key="all.id">
      <NuxtLink :to="all._path">
      <div class="credit-con_title">
        <img :src="all.platform" />
        <p>{{ all.title }}<br><span style="font-weight: 300;">{{ all.vulnerability }} - <span style="font-size: small;font-weight: 300;">{{ all.release_date }}</span></span></p>
        <a :href="all.demo">SOURCE: {{ all.demo }}</a>
      </div>
        <div class="body-con-credit__img" :style="{ background: 'left no-repeat url(' + all.images + ')' }">
        </div>
      </NuxtLink>
    </div>
  </div> -->
</template>

<style scoped>
.body-con-credit-main {
    transition: transform 0.3s ease, opacity 0.3s ease;
}
.body-con-credit-main:hover {
    transform: scale(1.02);
    opacity: 0.9;
}
.credit-con_title {
    position: absolute;
    padding: 23px;
    padding-top: 45px;
    max-width: 440px;
    text-align: inherit;
}
.credit-con_title p {
    font-weight: bold;
    font-size: 16px;
}
.credit-con_title span {
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
}
.credit-con_title a {
    text-transform: uppercase;
    font-size: small;
    color: #ffffff5c;
    mix-blend-mode: exclusion;
}
.credit-layout {
    margin-top: -10px;
}
.body-con-credit__img {
  width: 100% ;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 260px;
  border-radius: 7px;
  background-position: left bottom !important;
  background-size: cover !important;
}

/* security */
.pagination-layout p.active {
  font-weight: bold;
}
#pageto {
  display: flex;
  font-weight: bold;
}
#pageto p {
  margin-right: 20px;
  color: #cfcfcf;
}
#pagenum {
  display: flex;
}
#pagenum div {
  margin-right: 10px;
}
/* 添加 firstPage 类的样式，以设置第一页的特殊样式 */
.pagination-layout p.firstPage {
  color: #213ED4 !important;
}
.pagination-layout {
  cursor: pointer;
  display: block;
  line-height: 3px;
  margin-top: 50px;
}
#auther {
  line-height: 12px;
  text-transform: uppercase;
}
.body-con-support svg {
  margin-top: 20px;
  height: 30px;
}
#auther a {
  color: #9C9C9C;
  word-break: break-all;
  line-height: initial;
}

.body-con-main {
  padding-top: 20px;
}
.body-con-main__img {
  width: 100% ;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 753px;
  background-position: center bottom !important;
  background-size: cover !important;
  transition: transform 0.3s ease;
}
.body-con-main__img:hover {
    transform: scale(1.02);
}
@media screen and (min-width: 2000px) {
  .body-con-main__img {
    height: 1053px;
  }
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

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  color: #9C9C9C;
}
</style>
