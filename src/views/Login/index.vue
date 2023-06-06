<template>
  <div class="w-full h-screen login_container bg-sky-500">
    <!-- 头部 -->
    <header class="bg-gray-800 h-1/5"></header>
    <!-- 主体 -->
    <main
      class="flex items-center justify-end bg-gray-500 h-4/5 px-5 lg:px-[75px]"
    >
      <!-- 登录盒子 -->
      <div
        class="w-full bg-white rounded-lg login_wrapper lg:min-w-[650px] h-4/5 lg:max-h-[538px] :lg:h-1/2 lg:w-1/3 px-10 py-[70px]"
      >
        <!-- 登录表单 -->
        <el-form
          ref="formRef"
          :model="form"
          class="demo-form"
          label-width="80px"
        >
          <el-form-item label="用户名" prop="pass">
            <el-input v-model="form.account" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              v-model="form.password"
              type="password"
              autocomplete="off"
            />
          </el-form-item>

          <footer class="w-full">
            <el-button type="primary" @click="submit">登录</el-button>
          </footer>
        </el-form>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// 表单数据
let form = reactive({
  account: '',
  password: '',
})
// 登录
const submit = (): void => {
  console.log(form)
}
</script>

<style lang="scss" scoped></style>

<style scoped>
/* 设置label */
:deep(.el-form-item__label) {
  justify-content: start;
}

/* 设置输入框间距 */
:deep(.el-form-item) {
  margin-top: 3.5rem /* 56/16 */;
}
/* 设置按钮 */
:deep(.el-button) {
  width: 100%;
  background-color: var(--el-color-primary);
}
</style>
