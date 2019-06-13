<template>
    <el-dialog
        :width="width"
        :visible="visible"
        :modal="modal"
        :close-on-click-modal="closeOnClickModal"
        :show-close="showClose"
        :center="center"
        @close="close"
    >
        
        <slot name="dialog-content"></slot>

    </el-dialog>
</template>
<script>
    export default {
        props:{
            width:{
                type: String,
                default: '20rem'
            },
            visible:{
                type: Boolean,
                default: false
            },
            modal:{
                type: Boolean,
                default: true
            },
            //是否可以点击modal关闭dialog
            closeOnClickModal:{
                type: Boolean,
                default: false
            },
            //是否显示关闭按钮
            showClose:{
                type: Boolean,
                default: false
            },
            // title/footer 部分是否居中
            center:{
                type: Boolean,
                default: true
            }
        },
        methods: {
            close(){
                this.$emit('closeDialog');
            }
        },
    }   
</script>
<style>
    .el-dialog{
        width: 100%;
        box-sizing: border-box;
    }
    .el-dialog .el-dialog__header{
        padding: 0
    }
    .el-dialog .el-dialog__body{
        font-size: 0.7rem;
        padding: 0;
    }
    .el-dialog--center{
        border-radius: 0.5rem;
    }
</style>

