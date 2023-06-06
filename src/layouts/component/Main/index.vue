<template>
  <main class="main_container">
    <RouterView></RouterView>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main_container {
  flex: 1;
  flex-basis: auto;
  padding: 1.25rem /* 20/16 */;
}
</style>
