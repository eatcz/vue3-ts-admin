<template>
  <el-switch
    v-model="open"
    class="mt-2"
    style="margin-left: 24px"
    inline-prompt
    :active-icon="Sunny"
    :inactive-icon="Moon"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { Moon, Sunny } from '@element-plus/icons-vue'
const open: Ref<boolean> = ref(false)
</script>

<style scoped></style>
