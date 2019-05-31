import Vue from "vue";
import "./assets/stylesheets/layout.css";
import router from "./routes/index";
import store from "./vuex/index";
import App from "./components/App.vue";

// 导入字体图标
import icon from "./assets/icon/iconfont";

// 开启调试模式
Vue.config.devtools = true;

Vue.use(icon);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");