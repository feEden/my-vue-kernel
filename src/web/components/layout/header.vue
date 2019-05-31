<template>
  <div class="layout__header-wrap">
    <div class="layout__header-logo"></div>
    <div class="layout__header-function">
      <nhd-dropDown icon="calendar" title="日期选择">
        <template slot="content">
          <el-date-picker v-model="selectDate" type="date" @change="changeHandler"/>
        </template>
      </nhd-dropDown>
      <nhd-dropDown icon="factory" title="工厂信息"></nhd-dropDown>
      <nhd-dropDown icon="chart" title="图表选择">
        <template slot="content">
          <el-select v-model="dropDownData_charting[0].value">
            <el-option
              v-for="item in dropDownData_charting"
              :key="item.value"
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
              :key="item.value"
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
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            <router-link :to="item.value">{{ item.label }}</router-link>
            </el-option>
          </el-select>
        </template>
      </nhd-dropDown>
    </div>
    <div class="layout__header-loginName">新增鼎集团</div>
  </div>
</template>
<script>
import nhdDropDown from "@/components/element-ui/dropDown";

export default {
  components: {
    nhdDropDown
  },
  data() {
    return {
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
          value: "/logout"
        }
      ]
    };
  },
  methods: {
    changeHandler(date) {
      alert(date);
    }
  }
};
</script>

<style scoped>
.layout__header-wrap {
  display: grid;
  grid-template-columns: 10rem calc(100% - 15rem) 5rem;
  grid-template-areas: "logo . function";
  place-content: space-between;
  height: var(--blgHeight);
  line-height: var(--blgHeight);
  background-color: #3b3f4f;
  color: var(--otherTextColor);
}
.layout__header-logo {
  height: inherit;
  line-height: inherit;
  background: url("../../assets/images/logo.png") no-repeat center;
  background-size: 90% 60%;
}
.layout__header-function {
  display: flex;
  justify-content: flex-end;
}
</style>
