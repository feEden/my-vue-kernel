import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import collapse from "./module/collapse";
import getters from "./getters";

const store = new Vuex.Store({
    modules: {
        collapse
    },
    getters,
    // 默认存储在locastroage
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })]
});

export default store;