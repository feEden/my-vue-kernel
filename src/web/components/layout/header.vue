<template>
    <div class="layout__header-wrap">
        <div
            :class="menu_state ? 'layout__header-collapse rotate--horizontal' : 'layout__header-collapse rotate--vertical'"
            @click="collapseMenu"
            v-if="control_state"
        >
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="layout__header-logo"></div>
        <div class="layout__header-function" v-show="menu_state">
            <nhd-dropDown icon="calendar" title="日期选择">
                <template slot="content">
                    <el-date-picker
                        v-model="selectDate"
                        type="date"
                        @change="changeHandler"
                        :editable="true"
                    />
                </template>
            </nhd-dropDown>
            <nhd-dropDown icon="factory" title="工厂信息">
                <template slot="content">
                    <el-popover width="18rem" trigger="click">
                        <el-button slot="reference">
                            <nhd-icon iconName="factory" style="margin-top:0.5rem;"/>
                        </el-button>
                        <div class="layout__header-function__factory-table">
                            <h5
                                style="border-bottom:1px solid #f3f3f3;padding-left:3px;height:var(--blgHeight);line-height:var(--blgHeight)"
                            >WatcherLive</h5>
                            <div class="machine--detail">
                                <div title="machine1" @click="changeMachine('machine1')">machine1</div>
                                <div title="machine2">machine2</div>
                                <div title="machine3">machine3</div>
                                <div title="machine4">machine4</div>
                                <div title="machine5">machine5</div>
                                <div title="machine6">machine6</div>
                                <div title="machine7">machine7</div>
                                <div title="machine8">machine8</div>
                                <div title="machine9">machine9</div>
                            </div>
                        </div>
                    </el-popover>
                </template>
            </nhd-dropDown>
            <nhd-dropDown icon="chart" title="图表选择">
                <template slot="content">
                    <el-select v-model="dropDownData_charting[0].value">
                        <el-option
                            v-for="item in dropDownData_charting"
                            :key="item.value + item.label"
                            :label="item.label"
                            :value="item.value"
                        >
                            <router-link :to="item.value">{{ item.label }}</router-link>
                        </el-option>
                    </el-select>
                </template>
            </nhd-dropDown>
            <nhd-dropDown icon="machine" title="设备配置">
                <template slot="content">
                    <el-select v-model="dropDownData_machine[0].value">
                        <el-option
                            v-for="item in dropDownData_machine"
                            :key="item.value + item.label"
                            :label="item.label"
                            :value="item.value"
                        >
                            <router-link :to="item.value">{{ item.label }}</router-link>
                        </el-option>
                    </el-select>
                </template>
            </nhd-dropDown>
            <nhd-dropDown icon="user" title="用户配置">
                <template slot="content">
                    <el-select v-model="dropDownData_user[0].value">
                        <el-option
                            v-for="item in dropDownData_user"
                            :key="item.value + item.label"
                            :label="item.label"
                            :value="item.value"
                        >
                            <router-link :to="item.value">{{ item.label }}</router-link>
                        </el-option>
                    </el-select>
                </template>
            </nhd-dropDown>
            <div class="layout__header-loginName" v-if="!control_state">新增鼎集团</div>
        </div>
    </div>
</template>
<script>
import nhdDropDown from "../element-ui/dropDown";
import { mapGetters } from "vuex";
export default {
    components: {
        nhdDropDown
    },
    data() {
        return {
            showTableList: false,
            selectDate: new Date(),
            dropDownData_date: "",
            dropDownData_factory: [],
            dropDownData_charting: [
                {
                    label: "Custom Report",
                    value: "/charting/custom-report"
                },
                {
                    label: "Export CSV-Excel",
                    value: "/charting/export-csv"
                },
                {
                    label: "Shift Report",
                    value: "/charting/shift-report"
                },
                {
                    label: "summaries",
                    value: "/summaries"
                },
                {
                    label: "watchLive",
                    value: "/home"
                }
            ],
            dropDownData_machine: [
                {
                    label: "Manage Machine Profile",
                    value: "/machine/manage-machine"
                },
                {
                    label: "Manage Shifts",
                    value: "/machine/manage-shift"
                },
                {
                    label: "global Setting",
                    value: "/machine/global-setting"
                },
                {
                    label: "KPI Builder",
                    value: "/machine/kpi-builder"
                }
            ],
            dropDownData_user: [
                {
                    label: "Feedback And Support",
                    value: "/support"
                },
                {
                    label: "Dashboard",
                    value: "/dashboard"
                },
                {
                    label: "Logout",
                    value: "/login"
                }
            ]
        };
    },
    mounted() {
        let that = this;
        // 当前的屏幕宽度
        const clientWidth = document.body.clientWidth;

        // 进来就是手机屏
        if (clientWidth <= 768) {
            that.$store.dispatch("changeCollapseState", {
                menu_state: false,
                control_state: true,
                nav_state: false
            });
        }
        //监控窗口的变化 echart做自适应
        window.addEventListener("resize", function() {
            const clientWidth = document.body.clientWidth;
            // 获取窗口宽度 如果是手机屏幕 隐藏导航栏图标，显示控制按钮
            if (clientWidth <= 768) {
                that.$store.dispatch("changeCollapseState", {
                    menu_state: false,
                    control_state: true,
                    nav_state: false
                });
            } else {
                that.$store.dispatch("changeCollapseState", {
                    menu_state: true,
                    control_state: false,
                    nav_state: true
                });
            }
        });
    },
    computed: {
        ...mapGetters(["control_state", "menu_state"])
    },
    methods: {
        changeHandler(date) {
            alert(date);
        },
        collapseMenu() {
            this.$store.dispatch("changeMenuState", !this.menu_state);
        },
        // 选择机器
        changeMachine(machineName) {
            console.log(machineName);
        }
    },
    destroyed() {
        window.removeEventListener("resize", () => {});
    }
};
</script>

<style scoped lang="postcss">
.layout__header-wrap {
    position: relative;
    display: grid;
    grid-template-rows: repeat(2, 100%);
    grid-template-columns: 10rem calc(100% - 12.5rem) 2.5rem;
    grid-template-areas:
        "logo function function"
        "hidden hidden hidden";
    place-content: space-between;
    height: var(--blgHeight);
    line-height: var(--blgHeight);
    background-color: #3b3f4f;
    color: var(--otherTextColor);
    & .layout__header-logo {
        height: inherit;
        line-height: inherit;
        background: url("../../assets/images/logo.png") no-repeat center;
        background-size: 90% 60%;
    }
    & .layout__header-function {
        display: flex;
        justify-content: flex-end;
        grid-area: function;
        margin-right: 10px;
    }
    & .layout__header-collapse {
        position: absolute;
        top: 0;
        right: 0;
        width: 1.5rem;
        height: 1.5rem;
        margin: 0.5rem;
        cursor: pointer;
        border: 1px solid var(--otherColor);
        border-radius: 50%;
        transform: rotate(90deg);
        & > div {
            height: 80%;
            margin-top: 22%;
            & > div {
                margin: 3px;
                border: 1px solid var(--otherColor);
                margin: 0.2rem;
            }
        }
    }
    & .rotate--vertical {
        animation: toVertical 5ms forwards ease-in-out;
    }
    & .rotate--horizontal {
        animation: toHorizontal 5ms forwards ease-in-out;
    }
}
@keyframes toVertical {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(90deg);
    }
}
@keyframes toHorizontal {
    from {
        transform: rotate(90deg);
    }
    to {
        transform: rotate(0deg);
    }
}
.layout__header-function__factory-table {
    width: 18rem;
    & .machine--detail {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        & > div {
            margin: 2px;
            border: 1px solid #f3f3f3;
            border-radius: 5px;
            text-align: center;
            cursor: pointer;
            height: var(--blgHeight);
            line-height: var(--blgHeight);
            &:hover {
                background-color: var(--bgColor);
            }
        }
    }
}
</style>
<style lang="postcss">
.layout__header-wrap {
    & .el-popover {
        padding: 0;
    }
    & .el-button {
        position: relative;
        top: -2.6rem;
        height: var(--blgHeight) !important;
        line-height: var(--blgHeight) !important;
        background-color: var(--navBgColor);
        border: 0;
        padding: 0;
        margin: 0;
    }
}
</style>
