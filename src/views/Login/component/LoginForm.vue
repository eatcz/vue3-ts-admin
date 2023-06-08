<template>
  <div class="login_form flex item-center mx-auto">
    <header class="login_logo">
      <h3>Eatcz Admin</h3>
    </header>
    <el-form
      ref="ruleFormRef"
      :model="form"
      :rules="loginFormRules"
      label-width="120px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item prop="name">
        <el-input
          prefix-icon="UserFilled"
          size="large"
          v-model="form.account"
          placeholder="请输入账号"
        />
      </el-form-item>
      <el-form-item prop="name">
        <el-input
          type="password"
          :show-password="true"
          prefix-icon="Lock"
          size="large"
          v-model="form.password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item prop="name">
        <el-input
          prefix-icon="InfoFilled"
          size="large"
          v-model="form.verification_code"
          placeholder="请输入验证码"
        />
      </el-form-item>
    </el-form>
    <footer class="flex px-5 mt-5">
      <el-button type="default" size="large">重置</el-button>
      <el-button type="primary" size="large" @click="toLogin">登录</el-button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { userForm } from '../types/userForm.ts'
import { loginFormRules } from '@/config/rules.ts'
import { login } from '@/api/user'
let form = reactive<userForm>({
  account: import.meta.env.VITE_APP_LOGIN_ACCOUNT,
  password: import.meta.env.VITE_APP_LOGIN_PASSWORD,
  verification_code: import.meta.env.VITE_APP_LOGIN_VERIFICATION_CODE,
})

const toLogin = async () => {
  const res = await login(form)
  console.log(res)
}
</script>

<style lang="scss" scoped>
.login_form {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  flex-direction: column;
  width: 100%;
  max-height: 420px;
  padding: 20px;
  background-color: $primary-bg-color;
  box-shadow: $primary-shadow-color;
  border-radius: 10px;
  .login_logo {
    margin: 1.25rem /* 20/16 */;
    font-size: 22px;
    color: $login-logo-color;
  }
}

footer {
  width: 100%;
  gap: 1.25rem /* 20/16 */;
  justify-content: space-around;
}

@media screen and (min-width: 48rem /* 768/16 */) {
  .login_form {
    width: 80%;
  }
}
</style>
<style scoped>
.el-form {
  width: 100%;
}

:deep(.el-form-item__content) {
  width: 100%;
  margin-left: 0 !important;
}

:deep(.el-button) {
  flex: auto;
  border-radius: 20px;
}
</style>
