<template>
    <div class="layout-wrap">
        <nhd-header/>
        <div class="layout__main">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
    import nhdHeader from "./header";

    export default {
        components:{
            nhdHeader
        }
    }
</script>
<style scoped>
.layout-wrap{
    height: inherit;
    overflow: hidden;
}
    .layout__main{
        padding: 10px;
        overflow: hidden;
        overflow-y: auto;
    }
</style>
