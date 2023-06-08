// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// // import { viteMockServe } from 'vite-plugin-mock'
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     // 配置自定义svg图标
//     createSvgIconsPlugin({
//       iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
//       symbolId: 'icon-[dir]-[name]',
//     }),
//     // 配置mock
//     // viteMockServe({
//     //   // localEnabled:
//     // }),
//   ],
//   // 配置别名
//   resolve: {
//     alias: {
//       '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
//     },
//   },
//   // 配置scss变量
//   css: {
//     preprocessorOptions: {
//       scss: {
//         javascriptEnabled: true,
//         additionalData: '@import "./src/styles/variable.scss";',
//       },
//     },
//   },
// })
// import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
export default ({ command }) => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        localEnabled: command === 'serve',
      }),
      // 配置自定义svg图标
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    //   // 配置别名
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    //   // 配置scss变量
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  }
}
