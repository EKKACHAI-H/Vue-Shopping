<template>
    <div id="mainNonLogin">
        <div class="header-main">
            {{$route.params.path === 'pathLogin' ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}}
        </div>
        <div class="content-main">
            <loginPage v-if="$route.params.path === 'pathLogin'" />
            <registerPage v-else />
        </div>
    </div>
</template>

<script>

import loginPage from "@/components/nonLogin/loginPage.vue";
import registerPage from "@/components/nonLogin/registerPage.vue";

export default {
    name: "mainNonLogin",
    components: {
        loginPage,
        registerPage,
    },
    data() {
        return {
            
        }
    },
    methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #mainNonLogin {
        padding: 50px 15%;
    }
    .header-main {
        width: 100%;
        background-color: #5081dd;
        color: white;
        padding: 10px;
        padding-left: 22px;
    }
    .content-main {
        padding: 50px 40px;
    }
</style>
