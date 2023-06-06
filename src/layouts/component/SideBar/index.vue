<template>
  <aside class="layout_sidebar" :style="{ width: innerWidth }">
    <component :is="useStore.isShowSideLogo ? Logo : ''"></component>
    <el-scrollbar>
      <el-menu default-active="2" class="el-menu-vertical-demo" router>
        <component :is="Menu" :menuLists="menuLists"></component>
      </el-menu>
    </el-scrollbar>
  </aside>
</template>

<script setup lang="ts">
import Logo from './component/Logo.vue'
import Menu from './component/Menu.vue'
import { computed } from 'vue'
import { useGlobalStore } from '@/store/modules/global'
import { useUserStore } from '@/store/modules/user'
// userstore
const userStore = useUserStore()
// 菜单列表
const menuLists = computed(() => userStore.menus)
// globalstore
const useStore = useGlobalStore()
// 自定义侧边栏宽度
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
