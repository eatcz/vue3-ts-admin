<template>
  <div class="sidebar_logo flex justify-center item-center">
    <a class="logo" href="javascript:;">
      <img src="@/assets/images/logo.webp" alt="" />
    </a>
    <span class="title" v-show="!collapse">Eatcz Admin</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGlobalStore } from '@/store/modules/global'
const globalStore = useGlobalStore()
const collapse = computed(() => globalStore.isCollapse)
</script>

<style lang="scss" scoped>
.sidebar_logo {
  height: $header-height;
  border-bottom: $primary-border-color;
  .logo {
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    font-size: 18px;
  }
}
</style>
