<template>
    <div class="report__nav-wrap">
        <div class="trapezoid-wrap" @click="controlNav" :style="nav_state ? 'left: 10rem;' : 'left: 0'">
            <i :class="nav_state ? 'el-icon-arrow-left' : 'el-icon-arrow-right'" style="color:var(--navBgColor);position:relative;left:-15px"></i>
        </div>
        <div :style="nav_state ? 'width:10rem' : 'width:0' ">
            <slot name="report-nav"></slot>
        </div>
    </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
    computed:{
        ...mapGetters(["nav_state"])
    },
    methods:{
        controlNav(){
            this.$store.dispatch("changeNavState", !this.nav_state);
        }
    }
};
</script>

<style lang="postcss" scoped>
.report__nav-wrap {
    height: 100%;
    color: var(--otherColor);
    background-color: var(--navBgColor);
    & .trapezoid-wrap {
        position: absolute;
        top: calc(50% - 15px);
        height: 50px;
        border: 15px solid rgba(0, 0, 0, 0.1);
        border-top-color: transparent;
        border-bottom-color: transparent;
        border-right-width: 0;
        background-color:transparent;
    }
}
</style>
<style lang="postcss">
.report-layout {
    display: flex;
    height: 100%;
    margin: -10px;
    & .report-layout--content {
        padding: 10px;
    }
}
</style>

