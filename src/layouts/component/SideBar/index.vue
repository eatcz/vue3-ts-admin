<template>
  <aside class="layout_sidebar" :style="{ width: innerWidth }">
    <component :is="globalStore.isShowSideLogo ? Logo : ''"></component>
    <el-scrollbar>
      <el-menu
        class="el-menu-vertical-demo"
        router
        :default-active="route.path"
        :collapse="globalStore.isCollapse"
        active-text-color="#0f79da"
      >
        <component :is="Menu" :menuLists="menuLists"></component>
      </el-menu>
    </el-scrollbar>
  </aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
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
const globalStore = useGlobalStore()
// 自定义侧边栏宽度
const innerWidth = computed(() => {
  return globalStore.isCollapse ? '65px' : '200px'
})
// 获取路由对象
const route = useRoute()
console.log(route.path)
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
