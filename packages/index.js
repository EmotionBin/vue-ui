// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import locale from 'element-plus/es/locale/lang/zh-cn';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// 自定义组件
import MyButton from './button';

import '../styles/index.scss';

// 包的版本
import { version } from '../package.json';

// 存储组件列表
const components = {
  MyButton,
};

// 在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
const installComponents = (app) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  app.use(ElementPlus, {
    locale, // 语言设置
  });
  for (const key in components) {
    app.component(key, components[key]);
  }
};

// 通过 Vue.createApp() 创建的 app 实例
const install = (app) => {
  installComponents(app);
};

// 按需引入
export { MyButton };

export default {
  version,
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
};
