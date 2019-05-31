<template>
    <div class="login-wrap">
        <div class="login__bg-img">背景图</div>
        <div class="login__login-form">
            <p>登录表单</p>
            <router-link to="/dashboard">登录</router-link>
        </div>
    </div>
</template>
<style scoped>
    .login-wrap{
        height: inherit;
        display: grid;
        grid-template-columns: 9fr 3fr;
    }
    .login__bg-img, .login-form{
        height: inherit;
    }
    .login__login-form{
        min-width: 20rem;
        background-color: var(--dangerColor);
    }
</style>
