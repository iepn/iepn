<script setup lang="ts">
import { computed } from "vue";

const currentPage_credit = ref<number>(1);
const itemsPerPage_credit = 5;

const { data: equalQuery_credit } = await useAsyncData("equal_credit", () => {
  return queryContent("credit/").where({ types: "CREDIT" }).find();
});

equalQuery_credit.value?.sort((a, b) => {
  const dateA = new Date(a.release_date).getTime();
  const dateB = new Date(b.release_date).getTime();
  return dateB - dateA;
});

const getCurrentPageData_credit = computed(() => {
  const startIndex = (currentPage_credit.value - 1) * itemsPerPage_credit;
  const endIndex = currentPage_credit.value * itemsPerPage_credit;
  return equalQuery_credit.value?.slice(startIndex, endIndex) || [];
});
</script>

<template>
  <main>
    <!-- security credit -->
    <div class="credit-layout">
      <div
        class="body-con-credit-main"
        v-for="all in getCurrentPageData_credit"
        :key="all.id"
      >
        <NuxtLink :to="all._path">
          <div class="credit-con_title">
            <img :src="all.platform" />
            <p>
              {{ all.title }}<br /><span style="font-weight: 300"
                >{{ all.vulnerability }} -
                <span style="font-size: small; font-weight: 300">{{
                  all.release_date
                }}</span></span
              >
            </p>
            <a :href="all.demo">SOURCE: {{ all.demo }}</a>
          </div>
          <div
            class="body-con-credit__img"
            :style="{ background: 'left no-repeat url(' + all.images + ')' }"
          ></div>
        </NuxtLink>
      </div>
    </div>
  </main>
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
  margin-top: 3vh;
}
.body-con-credit__img {
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 260px;
  border-radius: 7px;
  background-position: left bottom !important;
  background-size: cover !important;
}

/* security */
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

/* 添加 firstPage 类的样式，以设置第一页的特殊样式 */
.pagination-layout p.firstPage {
  color: #213ed4 !important;
}
.pagination-layout {
  cursor: pointer;
  display: block;
  line-height: 3px;
  margin-top: 50px;
}

.body-con-support svg {
  margin-top: 20px;
  height: 30px;
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
