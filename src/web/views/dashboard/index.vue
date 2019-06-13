<template>
    <div class="dashboard-wrap">
        <div class="dashboard__header">
            <nhd-icon iconName="dashboard"/>
            <span>Dashboard</span>
        </div>
        <div class="dashboard__content">
            <div class="dashboard__content-part">
                <div class="dashboard__content-part__name">我的产品</div>
                <div class="dashboard__content-part__function">
                    <div
                        class="dashboard__content-part__function-part"
                        @click="routerLinkTo('/home')"
                    >
                        <div>
                            <nhd-icon
                                iconName="watchline"
                                class="dashbord-icon"
                                style=" transform: rotate(-90deg);"
                            />
                            <div>WatchLive</div>
                        </div>
                    </div>
                    <div
                        class="dashboard__content-part__function-part"
                    >
                        <div>
                            <nhd-icon
                                iconName="narrative"
                                class="dashbord-icon"
                            />
                            <div>Narrative</div>
                        </div>
                    </div>
                </div>
                <div class="dashboard__content-part__name">管理</div>
                <div class="dashboard__content-part__function">
                     <div class="dashboard__content-part__function-part">
                        <div>
                            <nhd-icon iconName="admin" class="dashbord-icon"/>
                            <div>Administration</div>
                        </div>
                    </div>
                    <div class="dashboard__content-part__function-part">
                        <div>
                            <nhd-icon iconName="account" class="dashbord-icon"/>
                            <div>My Account</div>
                        </div>
                    </div>
                    <div class="dashboard__content-part__function-part" @click="routerLinkTo('/support')">
                        <div>
                            <nhd-icon iconName="support" class="dashbord-icon"/>
                            <div>Support Center</div>
                        </div>
                    </div>
                </div>
                <div class="dashboard__content-part__name">其他</div>
                <div class="dashboard__content-part__function">
                    <div class="dashboard__content-part__function-part">
                        <div>
                            <nhd-icon iconName="notifications" class="dashbord-icon"/>
                            <div>Notifications</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        routerLinkTo(path) {
            this.$router.push({ path });
        }
    }
};
</script>
<style scoped lang="postcss">
.dashboard-wrap {
    height: inherit;
}
.dashboard__header {
    position: relative;
    height: var(--blgHeight);
    line-height: var(--blgHeight);
    background-color: var(--otherColor);
}
.dashboard__header > span {
    position: absolute;
    top: 0;
    left: 2rem;
}
.dashboard__content {
    padding: 10px;
    height: calc(100% - var(--blgHeight));
    background: url("../../assets/images/bg.png") no-repeat;
}
.dashboard__content-part__name {
    height: var(--lgHeight);
    line-height: var(--lgHeight);
    font-size: var(--lgFSize);
    color: var(--otherTextColor);
}
.dashboard__content-part__function {
    display: flex;
}
.dashboard__content-part__function-part {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
    height: 7rem;
    margin: 0 10px;
    min-width: 6rem;
    min-height: 6rem;
    border-radius: 5px;
    background-color: var(--otherColor);
    cursor: pointer;
    text-align: center;
    box-shadow: 0 0 20px var(--subTextColor);
}
</style>
<style lang="postcss">
.dashboard__header .icon {
    width: 1rem;
    height: 1rem;
    margin: 0.75rem;
    box-sizing: border-box;
}
.dashbord-icon {
    & .icon {
        width: 2.5rem;
        height: 2.5rem;
    }
}
</style>

