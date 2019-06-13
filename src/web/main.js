import Vue from "vue";
import "./assets/stylesheets/layout.css";
import router from "./routes/index";
import store from "./vuex/index";
import App from "./components/App.vue";
// mixin
import wResizeMixin from "./mixin/index";
// 导入字体图标
import icon from "./assets/icon/iconfont";
//字体图标组件
import nhdIcon from "@/components/custom/icon";

// 开启调试模式
//Vue.config.devtools = true;

Vue.use(icon);

// 注册全局组件
Vue.component("nhdIcon", nhdIcon);

new Vue({
    router,
    store,
    mixins:[wResizeMixin],
    render: h => h(App),
}).$mount("#app");