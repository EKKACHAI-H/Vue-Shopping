<template>
    <div id="menuTop">
        <div class="menu-bar">
            <div class="position-item">
                <div class="position-logo">
                    <router-link to="/">
                        <!-- <img src="../assets/image/dog_1.png" class="menu-logo"> -->
                        <label class="menu-logo position-center">HOME</label>
                    </router-link>
                </div>
                <div class="position-menu-1">
                    <div style="width: 100%; padding-top: 6px;">
                        <a-input v-model="searchData" style="width: 50%;">
                            <a-icon slot="addonAfter" type="search"/>
                        </a-input>
                        <span style="vertical-align: -webkit-baseline-middle;">
                            <label class="color-white"><a-icon type="heart" class="padding-icon-menu"/>รายการโปรด</label>
                            <label class="color-white"><a-icon type="shopping-cart" class="padding-icon-menu"/>ตะกร้าสินค้า</label>
                            <a-dropdown v-if="$store.state.login === false" class="color-white">
                                <a @click="e => e.preventDefault()">
                                    <a-icon type="user" class="padding-icon-menu"/> เข้าสู่ระบบ
                                </a>
                                <a-menu slot="overlay">
                                    <a-menu-item @click="onLogin('login')"><a-icon type="login" />เข้าสู่ระบบ</a-menu-item>
                                    <a-menu-item @click="onLogin('register')"><a-icon type="user-add" />สมัครสมาชิก</a-menu-item>
                                </a-menu>
                            </a-dropdown>
                            <label v-if="$store.state.login === true" class="color-white" @click="onLogOut()"><a-icon type="logout" class="padding-icon-menu"/>ออกจากระบบ</label>
                            <a-dropdown class="color-white">
                                <a @click="e => e.preventDefault()">
                                    {{useLanguage}} <a-icon type="down" />
                                </a>
                                <a-menu slot="overlay">
                                    <a-menu-item @click="useLanguage = 'TH'"><a-icon type="global" />TH</a-menu-item>
                                    <a-menu-item @click="useLanguage = 'EN'"><a-icon type="global" />EN</a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </span>
                    </div>
                    <div style="width: 100%; padding: 2px 0 6px;">
                        <label class="color-white">หน้าหลัก</label>
                        <label class="color-white">สินค้า</label>
                        <label class="color-white">ช็อปปิ้งออนไลน์</label>
                        <label class="color-white">ตัวแทนจำหน่าย</label>
                        <label class="color-white">จัดเช็ทสินค้า</label>
                        <label class="color-white">ค้นหาขนส่ง</label>
                        <label class="color-white">ซัพพลายเออร์</label>
                        <label class="color-white">บริการช่วยเหลือ</label>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="black-tab">
        </div>
    </div>
</template>

<script>
export default {
    name: "menuTop",
    props: {
        msg: String,
    },
    data() {
        return {
            searchData: "",
            useLanguage: 'TH'
        }
    },
    methods: {
        onLogin(flag) {
            if (flag === 'login') {
                if (this.$route.name !== 'login') {
                    this.$router.push('/login');
                }
                return
            }
            alert('ระบบยังไม้เปิดให้ใช้งานในขณะนี้')
            // this.$router.push('/register');
        },
        onLogOut() {
            this.$store.state.login = false;
            this.$router.push({name:'login'});
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .menu-bar {
        width: 100%;
        padding: 0 10%;
        background-image: -webkit-gradient(
            linear,
            right top,
            left top,
            color-stop(0, #0A92D1),
            color-stop(1, #204395)
        );
        background-image: -o-linear-gradient(left, #0A92D1 0%, #204395 100%);
        background-image: -moz-linear-gradient(left, #0A92D1 0%, #204395 100%);
        background-image: -webkit-linear-gradient(left, #0A92D1 0%, #204395 100%);
        background-image: -ms-linear-gradient(left, #0A92D1 0%, #204395 100%);
        background-image: linear-gradient(to left, #0A92D1 0%, #204395 100%);
    }
    
    .black-tab {
        background-color: black;
        height: 10px;
        width: 100%;
    }
    .position-item {
        display: flex;
    }
    .menu-logo {
        width: 30px;
        color: white;
        font-size: 44px;
        font-family: fantasy;
        cursor: pointer;
    }
    .position-logo {
        position: relative;
        width: 30%;
    }
    .position-menu-1 {
        width: 70%;
    }
    .color-white {
        color: white;
        padding-left: 16px;
        cursor: pointer;
    }
    .color-white:hover {
        -webkit-text-stroke-width: 0.2px;
        -webkit-text-stroke-color: white;
    }
    .padding-icon-menu {
        padding-right: 4px;
    }
</style>
