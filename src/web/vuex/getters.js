const getters = {
    /* 控制按钮的状态 */
    control_state:state => state.collapse.control_state,
    /* 头部菜单栏的状态 */
    menu_state:state => state.collapse.menu_state,
    /* 报表侧边栏的状态 */
    nav_state:state => state.collapse.nav_state
}

export default getters;