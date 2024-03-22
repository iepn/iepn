<script setup lang="ts">
import { ref, onMounted } from "vue";

const selectedTab = ref("security");

const selectTab = (tab: string) => {
  selectedTab.value = tab;
};

const currentPage = ref<number>(1);
const itemsPerPage = 5;

const { data: equalQuerySec } = await useAsyncData("equal_sec", () => {
  return queryContent("work/").where({ types: "SECURITY" }).find();
});

// 排序
equalQuerySec.value?.sort((a, b) => {
  const dateA = new Date(a.release_date).getTime();
  const dateB = new Date(b.release_date).getTime();
  return dateB - dateA;
});

// 计算总页数
const totalPages = Math.ceil(equalQuerySec.value?.length / itemsPerPage);

// 分页逻辑
const paginate = (page: number) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const getCurrentPageData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = currentPage.value * itemsPerPage;
  return equalQuerySec.value?.slice(startIndex, endIndex) || [];
});

// fix generate page show error
const getAllData = computed(() => {
  return equalQuerySec.value || [];
});

const currentUrl = ref<string>("");

onMounted(() => {
  currentUrl.value = window.location.href;
});

const isCurrentPage = (path: string) => {
  return currentUrl.value.includes(path);
};
</script>
<template>
  <main>
    <div class="view-sec_layout">
      <div>
        <page-img title="Security"/>
      </div>
    </div>
    <div :key="selectedTab" v-show="true" :id="selectedTab">
      <div class="column body-content-layout">
        <div
          class="body-con-main"
          v-if="equalQuerySec"
          v-for="alls in getCurrentPageData"
          :key="alls.id"
        >
          <ul class="body-con-main_title">
            <li class="body-con-main_title__top"></li>
            <li style="color: #000000; font-weight: bold">{{ alls.title }}</li>
            <li>{{ alls.types }}</li>
            <li>{{ alls.release_date }}</li>
          </ul>
          <p>{{ alls._PATH }}</p>
          <NuxtLink :to="alls._path"
            ><div
              class="body-con-main__img"
              :style="{ background: 'left no-repeat url(' + alls.images + ')' }"
            ></div
          ></NuxtLink>
          <div id="auther">
            <a :href="alls.demo" target="_blank">{{ alls.demo }}</a>
            <p>BY: {{ alls.director }}</p>
          </div>
        </div>
        <view-credit />
        <div class="pagination-layout" :style="{ display: currentPage === 1 ? 'none' : 'inline-block' }">
          <div id="pageto">
            <p
              @click="paginate(currentPage - 1)"
              :style="{ display: currentPage === 1 ? 'none' : 'inline-block' }"
            >
              PREV
            </p>
            <p
              @click="paginate(currentPage + 1)"
              :style="{
                display: currentPage === totalPages ? 'none' : 'inline-block',
              }"
            >
              NEXT
            </p>
            <p>PAGE: {{ currentPage }}</p>
          </div>
          <div id="pagenum">
            <div v-for="page in totalPages" :key="page">
              <p
                style="color: #cfcfcf"
                @click="paginate(page)"
                :class="{
                  active: page === currentPage,
                  firstPage: page === currentPage,
                }"
              >
                {{ page }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.view-sec_layout {
  display: flex;
  align-items: center;
}
.view-sec_button {
  text-orientation: upright;
  padding: 0px;
  margin: 0px;
  line-height: normal;
  display: flex;
}
.view-sec_button p {
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 10px;
  padding: 0px;
  margin-right: 3px;
  color: #8a8a8a !important;
}
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
  color: #213ed4 !important;
}
.pagination-layout {
  cursor: pointer;
  display: block;
  line-height: 3px;
  margin-top: 3vh;
  margin-bottom: 3vh;
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
  color: #9c9c9c;
  word-break: break-all;
  line-height: initial;
}

.body-con-main {
  padding-top: 20px;
}
.body-con-main__img {
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 753px;
  background-position: left bottom !important;
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
  color: #9c9c9c;
}
</style>
