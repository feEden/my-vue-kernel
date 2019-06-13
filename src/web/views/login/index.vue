<template>
    <div class="login-wrap">
        <div class="login__bg-img"></div>
        <div class="login__form-box">
            <el-form :model="userForm" :rules="mapRules" ref="userForm" class="login__form">
                <div class="login__form-title">登录</div>
                <el-form-item prop="username">
                    <el-input
                        v-model="userForm.username"
                        auto-complete="off"
                        placeholder="账号"
                        size="small"
                    />
                </el-form-item>

                <el-form-item prop="password">
                    <el-input
                        v-model="userForm.passwd"
                        type="password"
                        auto-complete="off"
                        placeholder="密码"
                        size="small"
                        @keyup.enter.native="submitForm"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm()" class="login-btn">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        var validateName = (rule, value, callback) => {
            if (value == "") {
                callback(new Error("请输入用户名"));
            } else {
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else if (value.length < 5) {
                callback(new Error("密码长度必须大于6位"));
            } else {
                callback();
            }
        };

        return {
            userForm: {
                username: "",
                passwd: ""
            },
            mapRules: {
                username: [{ validator: validateName, trigger: "blur" }],
                passwd: [{ validator: validatePass, trigger: "blur" }]
            }
        };
    },
    methods: {
        submitForm() {
            this.$refs["userForm"].validate(valid => {
                this.$router.push({path:"/dashboard"});
                /* if (valid) {
                    alert(JSON.stringify(userForm));
                } else {
                    return false;
                } */
            });
        }
    }
};
</script>
<style scoped lang="postcss">
.login-wrap {
    height: inherit;
    display: grid;
    grid-template-columns: 9fr 3fr;
    background-color:var(--otherColor);
}
.login__bg-img{
    height: inherit;
    background: url("../../assets/images/bg.png") no-repeat;
}
.login__form-box {
    min-width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login__form{
    width: 80%;
    & .login__form-title{
        height: 3rem;
        line-height:3rem;
        text-align:center;
        font-size:1.5rem;
        color:var(--mainTextColor)
    }
    & .login-btn{
        width: 100%;
        font-size: var(--mdFSize)
    }
}
</style>
