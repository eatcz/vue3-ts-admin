<template>
  <div class="login_container p-5">
    <div class="login_wrapper p-5">
      <div class="theme_bar flex">
        <Switch />
      </div>
      <div class="grid login">
        <div class="login_pic"></div>
        <component :is="LoginForm"></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Switch from '@/components/Switch/index.vue'
import LoginForm from './component/LoginForm.vue'
</script>

<style lang="scss" scoped>
.login_container {
  height: 100vh;
  background-color: #eee;
  background: $login-bg-img no-repeat center;
  background-size: 100% 100%;
  // 登录盒子
  .login_wrapper {
    width: 100%;
    height: 100%;
    background-color: rgba($color: #fff, $alpha: 0.8);
    border-radius: 10px;
  }
  // 主题模式切换
  .theme_bar {
    width: 100%;
    min-height: 2.5rem /* 40/16 */;
    justify-content: end;
  }
  // 图片
}

.login_pic {
  display: none;
  margin-right: 10px;
  max-width: 800px;
  // background: url('@/assets/images/login_left.png') no-repeat center;
  // background-size: cover;
}

// 登录
.login {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  height: 94%;
}

@media screen and (min-width: 48rem /* 768/16 */) {
  .login {
    grid-template-columns: repeat(2, 1fr);
  }
  .login_pic {
    display: block;
  }
}
</style>
