<template>
    <div class="dashboard-wrap">
        <div class="dashboard__header">Dashboard</div>
        <div class="dashboard__content">
            <div class="dashboard__content-part">
                <div class="dashboard__content-part__name">我的产品</div>
                <div class="dashboard__content-part__function">
                    <div class="dashboard__content-part__function-part">
                        <router-link to="/home">产品一</router-link>
                    </div>
                    <div class="dashboard__content-part__function-part">产品二</div>
                </div>
                <div class="dashboard__content-part__name">我的产品</div>
                <div class="dashboard__content-part__function">
                    <div class="dashboard__content-part__function-part">产品一</div>
                    <div class="dashboard__content-part__function-part">产品二</div>
                </div>
                <div class="dashboard__content-part__name">我的产品</div>
                <div class="dashboard__content-part__function">
                    <div class="dashboard__content-part__function-part">产品一</div>
                    <div class="dashboard__content-part__function-part">产品二</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .dashboard-wrap{
        height: inherit;
    }
    .dashboard__header{
        height: var(--blgHeight);
        line-height: var(--blgHeight);
        background-color:var(--otherColor);
    }
    .dashboard__content{
        padding: 10px;
        height: calc(100% - var(--blgHeight));
        background-color: var(--successColor);
    }
    .dashboard__content-part__name{
        height: var(--lgHeight);
        line-height: var(--lgHeight);
        font-size: var(--lgFSize);
        color: var(--otherTextColor);
    }
    .dashboard__content-part__function{
        display: grid;
        grid-template-columns: repeat(12, 7rem);
        place-content:space-between;
    }
    .dashboard__content-part__function-part{
        min-width: 6rem;
        height: 7rem;
        border-radius: 5px;
        background-color: var(--otherColor);
    }
</style>
