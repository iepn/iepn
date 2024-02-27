<script setup lang="ts">
import { ref, onMounted } from "vue";

const currentMonthImage = ref<string>("");

onMounted(() => {
  fetchQuote();
});

const currentUrl = ref<string>("");

onMounted(() => {
  currentUrl.value = window.location.href;
});

const isCurrentPage = (paths: string[]) => {
  return paths.some((path) => currentUrl.value.includes(path));
};
const isHomePage = () => {
  return currentUrl.value.endsWith("/");
};

const quote = ref("");
const author = ref("");

const fetchQuote = async () => {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    quote.value = data.content;
    author.value = data.author;
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="body-content">
    <div class="columns">
      <div class="column body-con-nav">
        <!--        日历及导航-->
        <div class="body-content-fixed">
          <div>
            <div class="body-about-click">
              <a
                href="/"
                style="color: #9c9c9c"
                :class="{ 'active-link': isHomePage() }"
                >HOME</a
              >
            </div>
            <!-- INFO -->
            <div class="about-slug__layout">
              <p class="typewriter slug-home_layout">
                Full-stack development, Security, and Design.
              </p>
              <small style="opacity: 0.65">{{ quote }} - {{ author }}</small>
            </div>
          </div>
          <!-- INFO END -->
          <div class="body-con-cal_nav__layout">
            <ul class="body-con-cal_nav">
              <li>
                <NuxtLink to="/about" activeClass="active-link">about</NuxtLink>
              </li>
              <li>des</li>
              <li>dev</li>
              <li>res</li>
              <li>
                <NuxtLink
                  to="/security"
                  :class="{
                    'active-link': isCurrentPage(['/security', '/credit']),
                  }"
                  external
                  >sec</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/link-exchange" activeClass="active-link"
                  >Link</NuxtLink
                >
              </li>
            </ul>
            <div class="body-con-support">
              <a href="https://github.com/iepn"
                ><img src="/images/logo/git.svg"
              /></a>
              <a href="https://hackerone.com/iepn"
                ><img src="/images/logo/h1.svg"
              /></a>
              <a href="https://www.behance.net/rhymeq"
                ><img src="/images/logo/be.svg"
              /></a>
              <a href="https://www.researchgate.net/profile/Rhyme-Qing"
                ><img src="/images/logo/res.svg"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <ul class="body-con-show-on">
        <li style="display: flex">
          <a href="/">
            <svg
              width="9"
              viewBox="0 0 14 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L3 11.5L12 21"
                stroke="#213ED4"
                stroke-width="3.5"
              />
            </svg>
          </a>
        </li>
        <li>
          <NuxtLink to="/about" activeClass="active-link">About</NuxtLink>
        </li>
        <li>
          <nuxt-link to="/link-exchange" activeClass="active-link"
            >Link exchange</nuxt-link
          >
        </li>
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
.body-con-support {
  display: flex;
  align-items: center;
}
.body-con-support a img {
  margin-right: 3px;
  margin-top: 16px;
  width: 25px;
}
.body-con-cal_nav__layout {
  margin-top: 30px;
}
.about-slug__layout {
  width: min-content;
}
.active-link {
  color: #1345ff !important;
  font-weight: bold;
}
span.katex-html {
  display: none;
}
#article p a {
  color: #b4b4b4 !important;
}
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
  color: #9c9c9c;
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
    color: #213ed4;
    z-index: 999999999;
    transform: translate(0, -50%);
    box-shadow: 0px 3px 19px 0px rgb(212 212 212);
  }
  .body-con-show-on li {
    margin-left: 12px;
  }
}
.body-content-fixed {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
  top: 1px;
  padding: 1vw;
  position: fixed;
  z-index: 1;
  /* padding: 30px; */
  margin-left: -8vw;
  /* box-shadow: 0px 0px 14px 30px rgba(178, 178, 178, 0.25); */
  box-shadow: 46px 0 30px rgb(70 93 255 / 3%);
}
.body-con-cal_nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  text-transform: capitalize;
  color: #9c9c9c;
  font-size: small;
}
.body-con-cal_nav li {
  margin-right: 5px;
}
.body-con-cal_nav li a {
  color: #9c9c9c;
}
ul li a:hover {
  transition: 0.1s ease;
  color: #213ed4;
  font-weight: bold;
}
::selection {
  background: #213ed4;
  color: #fff;
}

::-moz-selection {
  background: #213ed4;
  color: #fff;
}

::-webkit-selection {
  background: #213ed4;
  color: #fff;
}
</style>
