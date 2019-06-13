<template>
    <div class="icon-wrap">
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="getIconName"></use>
        </svg>
    </div>
</template>
<script>
/**
 * 该组件是一格图标组件，接受一格图标名参数
 *    iconName，使用该组件，传图标的名字就行
 *    如#icon-index  传index即可
 *    图标采用的是阿里的矢量图标Symbol格式
 */
export default {
    props: {
        iconName: {
        type: String,
            required: true
        }
    },
    computed: {
        getIconName() {
            return "#icon-" + this.iconName;
        }
    }
};
</script>
<style scoped>
    .icon-wrap{
        height: 2.5rem;
        width: 2.5rem;
        display: inline-block;
    }
    .icon {
        width: 1.5rem;
        height: 1.5rem;
        fill: currentColor;
        overflow: hidden;
    }
</style>
