<template>
  <!-- 递归遍历路由 -->
  <!-- 如果没有子路由 -->
  <template v-for="item in props.menuLists" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item v-if="!item.meta!.hidden" :index="item.path">
        <el-icon><setting /></el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </template>

    <!-- 如果只有一个子路由 -->
    <el-menu-item
      v-if="item.children && item.children.length == 1"
      :index="item.children[0].path"
    >
      <el-icon><setting /></el-icon>
      <template #title>
        <span>{{ item.children[0].meta!.title }}</span>
      </template>
    </el-menu-item>
    <!-- 如果有子路由并且大于等于2个 -->
    <el-sub-menu v-if="item.children && item.children.length > 1" index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.meta!.title }}</span>
      </template>
      <Menus :menuLists="item.children" />
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
const props = defineProps({
  menuLists: {
    type: Array<RouteRecordRaw>,
    default: [],
  },
})
</script>

<script lang="ts">
export default {
  name: 'Menus',
}
</script>

<style scoped>
.el-menu-item.is-active {
  color: var(--el-menu-active-color) !important;
  background-color: #e7f2fb !important;
}
</style>
