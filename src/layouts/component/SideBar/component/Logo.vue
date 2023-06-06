<template>
  <div class="sidebar_logo flex justify-center item-center">
    <a class="logo" href="javascript:;">
      <img src="@/assets/images/logo.webp" alt="" />
    </a>
    <h3 class="title">Eatcz Admin</h3>
  </div>
</template>

<script setup lang="ts"></script>

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
