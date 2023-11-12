import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const pathResolve = (path) => resolve(__dirname, path);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置别名
    alias: {
      '@': pathResolve('packages'),
    },
    // 导入时想要省略的扩展名列表。
    extensions: ['.js', '.json', '.vue'],
  },
  build: {
    // 这里不设置也是默认dist
    outDir: 'dist',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: pathResolve('packages'),
      name: 'vue-ui',
      fileName: 'vue-ui',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'element-plus'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
        },
      },
    },
  },
});
