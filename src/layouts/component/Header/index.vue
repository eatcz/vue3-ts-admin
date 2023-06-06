<template>
  <header class="layout_header flex item-center px-5">
    <!-- 头部工具栏 -->
    <component :is="ToolbarLeft"></component>
  </header>
</template>

<script setup lang="ts">
import ToolbarLeft from './component/ToolbarLeft.vue'
</script>

<style lang="scss" scoped>
.layout_header {
  width: 100%;
  height: $header-height;
  background-color: $header-bg-color;
  border-bottom: $primary-border-color;
}
</style>
