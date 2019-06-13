<template>
    <div class="charting__shift-report-wrap report-layout">
        <nhd-nav>
            <template slot="report-nav">这里放置不同页面的导航</template>
        </nhd-nav>
        <div class="charting__custome-report--content report-layout--content">shift report</div>
    </div>
</template>
<script>
import nhdNav from "@/components/custom/nav";

export default {
    components: {
        nhdNav
    }
};
</script>