<template>
  <aside class="layout_sidebar" :style="{ width: innerWidth }">
    <component :is="useStore.isShowSideLogo ? Logo : ''"></component>
    <el-scrollbar>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <component :is="Menu"></component>
      </el-menu>
    </el-scrollbar>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGlobalStore } from '@/store/modules/global'
import Logo from './component/Logo.vue'
import Menu from './component/Menu.vue'
const useStore = useGlobalStore()
const innerWidth = computed(() => {
  return useStore.isCollapse ? '80px' : '200px'
})
</script>

<style lang="scss" scoped>
.layout_sidebar {
  flex-shrink: 0;
  width: $sidebar-deskop-width;
  height: 100vh;
  background-color: $sidebar-bg-color;
  border-right: $primary-border-color;
  transition: all 0.3s;
  overflow: hidden;
}
</style>
<style scoped>
.el-menu {
  border-right: none;
}

:deep(.el-scrollbar) {
  height: calc(100% - 55px);
}
</style>
