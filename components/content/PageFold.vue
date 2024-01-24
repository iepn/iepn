<script setup lang="ts">
const fold = ref(false)
</script>

<template>
  <div>
    <p style="cursor: pointer;font-weight: bold;color: #213fd6" @click="fold = !fold">
      #
    </p>
    <Transition>
      <main v-if="fold">
        <slot />
      </main>
    </Transition>
  </div>
</template>

<style scoped>
div {
  background: center no-repeat url("data:image/svg+xml,%3Csvg width='790' height='2' viewBox='0 0 790 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1H790' stroke='%23D8D8D8' stroke-dasharray='9 9'/%3E%3C/svg%3E%0A");
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>