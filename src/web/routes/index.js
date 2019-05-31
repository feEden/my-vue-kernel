import VueRouter from "vue-router";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:"/",
            redirect:"/login"
        },
        {
            path: "/login",
            name: "login",
            component: resolve => require(["../views/login"], resolve),
            meta: {
                keepAlive: true,
                isCategory: false
            }
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: resolve => require(["../views/dashboard/index"], resolve),
            meta: {
                keepAlive: true,
                isCategory: false
            }
        },
        {
            path: "/home",
            component: resolve => require(["../components/layout/index"], resolve),
            children:[
                {
                    path: "/home",
                    name: "home",
                    component: resolve => require(["../views/home/index.vue"], resolve),
                    meta: {
                        keepAlive: true,
                        isCategory: false
                    }
                },
                {
                    /* 导出excell */
                    path: "/charting/export-csv",
                    name: "csvexport",
                    component: resolve => require(["../views/charting/csv-export.vue"], resolve),
                    meta: {
                        keepAlive: true,
                        isCategory: false
                    }
                },
                {
                    /* 自定义报表 */
                    path: "/charting/custom-report",
                    name: "suctopmreport",
                    component: resolve => require(["../views/charting/custom-report.vue"], resolve),
                    meta: {
                        keepAlive: true,
                        isCategory: false
                    }
                },
                {
                    /* 轮换报表 */
                    path: "/charting/shift-report",
                    name: "shiftreport",
                    component: resolve => require(["../views/charting/shift-report.vue"], resolve),
                    meta: {
                        keepAlive: true,
                        isCategory: false
                    }
                },
                {
                    /* 全局设置 */
                    path: "/machine/global-setting",
                    name: "globalsetting",
                    component: resolve => require(["../views/machine/global-setting.vue"], resolve),
                    meta: {
                        keepAlive: true,
                        isCategory: false
                    }
                },
                {
                    /* kpi配置 */
                    path: "/machine/kpi-builder",
                    name: "kpibuilder",
                    component: resolve => require(["../views/machine/kpi-builder.vue"], resolve),
                    meta: {
                        keepAlive: true,
                        isCategory: false
                    }
                },
                {
                    /* 机器设备管理 */
                    path: "/machine/manage-machine",
                    name: "managemachine",
                    component: resolve => require(["../views/machine/manage-machine.vue"], resolve),
                    meta: {
                        keepAlive: true,
                        isCategory: false
                    }
                },
                {
                    /* shift管理 */
                    path: "/machine/manage-shift",
                    name: "manageshift",
                    component: resolve => require(["../views/machine/manage-shift.vue"], resolve),
                    meta: {
                        keepAlive: true,
                        isCategory: false
                    }
                },
                {
                    /*  */
                    path: "/summaries",
                    name: "summaries",
                    component: resolve => require(["../views/summaries/index.vue"], resolve),
                    meta: {
                        keepAlive: true,
                        isCategory: false
                    }
                },
                {
                    /* 技术支持 */
                    path: "/support",
                    name: "support",
                    component: resolve => require(["../views/support/index.vue"], resolve),
                    meta: {
                        keepAlive: true,
                        isCategory: false
                    }
                },
            ]
        }
    ]
})

export default router;