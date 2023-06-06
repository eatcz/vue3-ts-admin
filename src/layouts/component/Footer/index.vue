<template>
  <footer class="footer_container">
    <div class="footer_center flex justify-center item-center">
      <a href="javascript:;">2023 © Eatcz-Admin By eatcz</a>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer_container {
  position: absolute;
  // left: $sidebar-deskop-width;
  bottom: 0;
  // width: calc(100% - $sidebar-deskop-width);
  width: 100%;
  height: $footer-height;
  background-color: $footer-bg-color;
  border-top: $primary-border-color;
  //   文字容器
  .footer_center {
    height: 100%;
    a {
      font-size: 14px;
      color: $primary-text-color;
    }
  }
}
</style>
