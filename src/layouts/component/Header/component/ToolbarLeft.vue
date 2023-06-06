<template>
  <div class="toolbar_container flex item-center">
    <el-icon class="pointer mr-5" :size="20" @click="changeCollapse">
      <Fold v-if="!useStore.isCollapse" />
      <Expand v-else />
    </el-icon>
    <component :is="Breadcrumb"></component>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './Breadcrumb.vue'
import { useGlobalStore } from '@/store/modules/global'
const useStore = useGlobalStore()
const changeCollapse = () => (useStore.isCollapse = !useStore.isCollapse)
</script>

<style lang="scss" scoped></style>
