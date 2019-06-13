<template>
     <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="pageCode"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="total"
        background
        class="pager"
    />
</template>
<script>
    export default {
        props:{
            pageSize:{
                type: Number,
                default: 10
            },
            total: {
                type: Number,
                default: 0
            }
        },
        data(){
            return {
                pageCode: 1
            }
        },
        methods:{
            handleCurrentChange(pc){
                this.$emit("currPageChangeHandle", pc);
            }
        }
    }
</script>
<style>
    .el-pagination{
        font-weight: 400
    }
    .el-pagination.is-background .btn-next, 
    .el-pagination.is-background .btn-prev, 
    .el-pagination.is-background .el-pager li{
        background: #fff;
        border: 1px solid #e9e9e9;    
    }
    .el-pagination.is-background .btn-next, 
    .el-pagination.is-background .btn-prev, 
    .el-pagination.is-background .el-pager li{
        min-width: 28px;
        border-radius: 2px;
        height: 28px;
        line-height: 28px;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        color: rgba(77,85,89,1);
        background: #fff;
        border-color: rgba(0, 193, 222, 1);
    }   
    .el-pagination.is-background .el-pager li:hover{
        color: rgba(0, 193, 222, 1);
    }
</style>
