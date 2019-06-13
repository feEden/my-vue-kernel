import {CHANGE_COLLAPSE_STATE, CHANGE_MENU_STATE, CHANGE_NAV_STATE} from "../constant/index";

// 控制header菜单按钮的隐藏显示
const collapse = {
    state:{
        // 控制按钮
        control_state: false,
        // 头部菜单栏
        menu_state:true,
        // 报表的侧边栏
        nav_state:true
    },
    actions:{
        changeCollapseState({commit}, data){
            commit("changeCollapseState", data);
        },
        /* 改变头部菜单栏的状态 */
        changeMenuState({commit}, data){
            commit("changeMenuState",data);
        },
        /* 改变报表侧边栏的状态 */
        changeNavState({commit}, data){
            commit("changeNavState",data);
        }
    },
    mutations:{
        [CHANGE_COLLAPSE_STATE](state, {menu_state, control_state, nav_state}){
            state.control_state = control_state;
            state.menu_state = menu_state;
            state.nav_state = nav_state;
        },
        [CHANGE_MENU_STATE](state, data){
            state.menu_state = data;
        },
        [CHANGE_NAV_STATE](state, data){
            state.nav_state = data;
        }
    }
}

export default collapse;