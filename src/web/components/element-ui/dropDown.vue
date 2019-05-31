<template>
  <div class="dropDown-wrap">
    <nhd-icon :iconName="icon" class="dropDown_icon"/>
    <slot name="content"></slot>
  </div>
</template>
<script>
import nhdIcon from "@/components/custom/icon";

export default {
  props: {
    icon: {
      type: String,
      require: true
    }
  },
  components: {
    nhdIcon
  }
};
</script>
<style>
.dropDown-wrap {
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0.5rem;
}
.dropDown-wrap .el-select, .dropDown-wrap .el-date-editor.el-input, 
.el-date-editor.el-input__inner {
  width: 2.5rem;
  height: inherit;
  position: relative;
  top: -2.5rem;
}
.dropDown-wrap .el-input__inner {
  border: none;
  border-radius: 0;
  color: transparent;
  background-color: transparent;
}
.dropDown-wrap .el-select .el-input__inner::placeholder {
  color: transparent;
}
.dropDown-wrap .el-input__prefix,
.el-input__suffix {
  top: 9999px;
}
.dropDown_icon {
  position: relative;
  top: 0.5rem;
  left: 0.5rem;
}
.el-popper[x-placement^="bottom"] .popper__arrow::after {
  margin-left: -25px;
}
.el-date-table th, .el-date-table td{
  border: none;
  text-align: center;
}
.dropDown-wrap .el-input--prefix .el-input__inner,.dropDown-wrap .el-input--suffix .el-input__inner{
  padding: 0;
}
</style>