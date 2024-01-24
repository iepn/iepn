
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
  currentMonthImage.value = `${currentMonth}`; // 假设图片名称为月份.jpg
};

// 使用 useAsyncData 函数发起异步请求
const { data: equalQuery } = await useAsyncData("equal", () => {
  // 返回 /more 目录下的数据，也可以（.where({ director: 'Hayao Miyazaki' }) 来进行过滤）
  return queryContent("work/").find();
});
</script>

<template>
  <div class="body-content">

    <div class="columns">
      <div class="column body-con-nav">
        <!--        日历及导航-->
        <div class="body-content-fixed">
          <div>
            <div class="body-about-click">
              <a href="/" style="color: #9C9C9C">HOME</a>
            </div>
            <calendar :moon="currentMonthImage" />
          </div>
          <div>
            <ul class="body-con-cal_nav">
              <li>about</li>
              <li>design</li>
              <li>develop</li>
              <li>research</li>
              <li>security</li>
              <li>friendly link</li>
            </ul>
            <a href="https://www.cloudflare.com/" class="body-con-support">
              <svg xmlns="http://www.w3.org/2000/svg" width="110" fill="none" viewBox="0 0 204 30" style="width: 110px;"><g clip-path="url(#a)"><path fill="#FBAD41" d="M52.688 13.028c-.22 0-.437.008-.654.015a.297.297 0 0 0-.102.024.365.365 0 0 0-.236.255l-.93 3.249c-.401 1.397-.252 2.687.422 3.634.618.876 1.646 1.39 2.894 1.45l5.045.306c.15.008.28.08.359.199a.492.492 0 0 1 .051.434.64.64 0 0 1-.547.426l-5.242.306c-2.848.132-5.912 2.456-6.987 5.29l-.378 1a.28.28 0 0 0 .248.382h18.054a.48.48 0 0 0 .464-.35 13.12 13.12 0 0 0 .48-3.54c0-7.22-5.789-13.072-12.933-13.072"></path><path fill="#000" d="M85.519 18.886h2.99v8.249h5.218v2.647h-8.208V18.886ZM96.819 24.365v-.032c0-3.13 2.493-5.665 5.821-5.665 3.327 0 5.789 2.508 5.789 5.633v.032c0 3.129-2.493 5.665-5.821 5.665s-5.79-2.505-5.79-5.633Zm8.562 0v-.032c0-1.573-1.123-2.942-2.773-2.942-1.65 0-2.725 1.337-2.725 2.91v.032c0 1.572 1.122 2.942 2.757 2.942 1.634 0 2.741-1.338 2.741-2.91ZM112.086 25.003V18.89h3.033v6.055c0 1.572.783 2.317 1.985 2.317 1.201 0 1.985-.717 1.985-2.242v-6.134h3.032v6.039c0 3.519-1.985 5.056-5.049 5.056s-4.99-1.573-4.99-4.98M126.694 18.889h4.159c3.848 0 6.081 2.241 6.081 5.382v.032c0 3.14-2.265 5.477-6.144 5.477h-4.096V18.886v.004Zm4.202 8.216c1.788 0 2.97-.995 2.97-2.754v-.032c0-1.744-1.185-2.755-2.97-2.755h-1.217v5.541h1.217ZM141.277 18.886h8.621v2.648h-5.636v1.85h5.096v2.505h-5.096v3.893h-2.985V18.886ZM154.054 18.886h2.989v8.249h5.219v2.647h-8.208V18.886ZM170.067 18.809h2.878l4.589 10.971h-3.202l-.788-1.946h-4.159l-.768 1.946h-3.143l4.589-10.971h.004Zm2.619 6.676-1.202-3.097-1.217 3.097h2.419ZM181.383 18.889h5.096c1.647 0 2.789.438 3.509 1.182.635.621.954 1.465.954 2.536v.032c0 1.664-.879 2.77-2.218 3.344l2.572 3.797h-3.45l-2.17-3.3h-1.308v3.3h-2.989V18.886l.004.004Zm4.959 5.23c1.016 0 1.602-.497 1.602-1.29v-.031c0-.856-.614-1.29-1.618-1.29h-1.954v2.616h1.973l-.003-.004ZM195.253 18.886h8.669v2.568h-5.711v1.648h5.175v2.384h-5.175v1.728h5.79v2.568h-8.748V18.886ZM78.976 25.642c-.418.956-1.3 1.633-2.47 1.633-1.63 0-2.756-1.37-2.756-2.942V24.3c0-1.573 1.094-2.91 2.725-2.91 1.229 0 2.166.764 2.564 1.807h3.147c-.505-2.591-2.757-4.53-5.683-4.53-3.324 0-5.821 2.536-5.821 5.665v.032c0 3.129 2.461 5.633 5.79 5.633 2.843 0 5.068-1.864 5.655-4.36h-3.155l.004.004Z"></path><path fill="#F6821F" d="m44.808 29.578.334-1.175c.402-1.397.253-2.687-.42-3.634-.62-.876-1.647-1.39-2.896-1.45l-23.665-.306a.467.467 0 0 1-.374-.199.492.492 0 0 1-.052-.434.64.64 0 0 1 .552-.426l23.886-.306c2.836-.131 5.9-2.456 6.975-5.29l1.362-3.6a.914.914 0 0 0 .04-.477C48.998 5.259 42.79 0 35.368 0c-6.842 0-12.647 4.462-14.73 10.665a6.92 6.92 0 0 0-4.911-1.374c-3.28.33-5.92 3.002-6.246 6.318a7.148 7.148 0 0 0 .18 2.472c-5.36.16-9.66 4.598-9.66 10.052 0 .493.035.979.106 1.453a.46.46 0 0 0 .457.402h43.704a.57.57 0 0 0 .54-.418"></path></g><defs><clipPath id="a"><path fill="#FFF" d="M0 0h204v30H0z"></path></clipPath></defs></svg>
            </a>
          </div>
        </div>
      </div>
      <ul class="body-con-show-on">
        <li style="display: flex;">
          <a href="javascript:history.go(-1)">
            <svg width="9" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 11.5L12 21" stroke="#213ED4" stroke-width="3.5"/>
            </svg>
          </a>
        </li>
        <li>About</li>
        <li>friendly link</li>
      </ul>
      <div class="column is-two-thirds body-content-layout">
        <main class="body-con-main">
          <ContentDoc id="article" />
        </main>
      </div>
    </div>
  </div>
</template>

<style>
#article p {
  color: #8e8e8e;
  text-align: justify;
  margin-top: 12px;
  margin-bottom: 12px;
}
#article h1 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 22px;
  color: #000;
  margin-left: 26px;
}
#article iframe {
  width: 100% !important;
  height: 316px;
}
.body-con-show-on {
  display: none;
}
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


.body-content {
  width: 45%;
  margin: 0 auto;
}
@media screen and (max-width: 1024px) {
  .body-content {
    width: 60%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 768px) {
  .body-content {
    width: 70%;
    margin: 0 auto;
  }
  #article p {
    color: #8e8e8e;
    text-align: left;
    margin-top: 12px;
    margin-bottom: 12px;
  }
}
@media screen and (max-width: 600px) {
  .body-content {
    width: 90%;
    margin: 0 auto;
  }

}
.body-about-click {
  color: #9C9C9C;
  font-size: 15px;
  margin-bottom: 12px;
}
@media screen and (max-width: 1440px) {
  .body-con-nav {
    display: none;
  }
  .body-content-layout {
    flex: auto !important;
  }
  .body-con-show-on {
    display: flex;
    margin-top: 10px;
    background: #ffffff;
    position: fixed;
    top: 50%;
    margin-left: -20px;
    width: auto;
    padding: 10px;
    font-weight: bold;
    color: #213ED4;
    z-index: 999999999;
    transform: translate(0, -50%);
    box-shadow: 0px 3px 19px 0px rgb(212 212 212);
  }
  .body-con-show-on li {
    margin-left: 12px;
  }
}
.body-con-nav img {
}
.body-content-fixed {
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  color: #9C9C9C;
}
</style>
