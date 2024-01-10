/*
 * @Author: sunguohui
 * @Date: 2024-01-06 17:10:54
 * @LastEditors: sunguohui
 * @LastEditTime: 2024-01-10 13:26:42
 * @FilePath: \vue3ye\vite.config.ts
 * @Description:
 */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { serveProxy } from './scripts/serveConfig';
import { getEnterPages, npmConfigPage } from './scripts/pagesConfig';
import compression from 'vite-plugin-compression'; // gzip/br 压缩


const getFileURLToPath = (url: string): string => {
  return fileURLToPath(new URL(url, import.meta.url));
};


const curpageSrc = getEnterPages();
const inputpage = {
  [npmConfigPage]: getFileURLToPath(curpageSrc)
};
console.log('🐯🐯 ~ file: vite.config.ts:26 ~ curpageSrc:', npmConfigPage);

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: getFileURLToPath('./public'), // 公共静态资源
  root: getFileURLToPath('./src/Project/bc_a_1'),
  base: '/h5_release_1/bc_a_1',
  envDir: getFileURLToPath('./'), // 用于加载 .env 文件的目录。可以是一个绝对路径，也可以是相对于项目根的路径。

  plugins: [
    vue(),
  ],

  resolve: {
    alias: {
      '@': getFileURLToPath('./src'),
      '@Project': getFileURLToPath(`./src/Project/${npmConfigPage}`)
    }
  },
  build: {
    outDir: getFileURLToPath(`dist/${npmConfigPage}`), // 指定输出路径
    emptyOutDir: true, // Vite 会在构建时清空该目
    assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求
    // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制
    // target: [ 'es2015' ],
    cssTarget: [ 'chrome52' ],
    // minify: 'esbuild',

    rollupOptions: {
      input: inputpage,
      output: {
        chunkFileNames: (id) => {
          let returnName = 'static/js/[name]-[hash].js';
          const noHashArr = [ 'yjaxios' ];
          if (noHashArr.includes(id.name)) {
            returnName = 'static/js/[name].js';
          }
          return returnName;
        },
        entryFileNames: 'static/js/entry/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        compact: true,
        // 拆分多个vendors
        manualChunks: {
          vue: [ 'vue', 'vant', '@vant/touch-emulator', 'vue-router', '@vueuse/core' ],
          yjaxios: [ 'yj-axios', 'crypto-js' ]
        },
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          // vue: 'qrcodeabc'
        }
      }
      // 确保外部化处理那些你不想打包进库的依赖
      // external: [
      //   '/h5_res_1/bc_shaoerbiancheng_1/res/1001/haibao.png'
      // ]
    }
  },
  // 跨域
  server: {
    // https: true,
    // 使用IP能访问
    host: true,
    port: 8082,
    // 热更新
    // hmr: true,
    // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,

    // 自定义代理规则
    proxy: serveProxy
  },
  // 预览设置
  preview: {
    host: true,
    port: 8081,
    strictPort: true,
    proxy: serveProxy
  }
});
