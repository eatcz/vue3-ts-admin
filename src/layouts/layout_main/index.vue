<template>
  <div class="layout_main flex">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../component/Header/index.vue'
import Main from '../component/Main/index.vue'
import Footer from '../component/Footer/index.vue'
</script>

<style lang="scss" scoped>
.layout_main {
  position: relative;
  flex-direction: column;
  // flex: 1;
  // flex-basis: auto;
  // position: fixed;
  // top: 0;
  // left: $sidebar-deskop-width;
  width: 100%;
  min-height: 100vh;
  padding-bottom: $footer-height;
}
</style>
