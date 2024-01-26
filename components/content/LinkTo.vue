<script setup lang="ts">

</script>

<template>
  <ul id="linkTo">
    <slot />
  </ul>
</template>

<style>
#linkTo li {
   margin-right: 9px;
 }
#linkTo {
   display: flex;
   margin-top: 30px;
 }
</style>