<template>
  <div class="layout_container flex">
    <component :is="SideBar"></component>
    <component :is="LayoutMain"></component>
  </div>
</template>

<script setup lang="ts">
import SideBar from './component/SideBar/index.vue'
import LayoutMain from './layout_main/index.vue'
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  min-width: 680px;
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>
