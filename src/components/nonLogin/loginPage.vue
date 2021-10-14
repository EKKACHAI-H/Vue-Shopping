<template>
    <div id="login">
        <div style="display: flex;">
            <div style="width: 30%">
                <div class="text-userpassword-top-input">Username/Email</div>
                <div class="div-input-login">
                    <a-input 
                        v-model="username" 
                        placeholder="รหัสสมาชิก/อีเมล" 
                        :class="'input-login ' + (validate.username || validate.passWrong ? 'error-a-input' : '')"
                        @focus="validateInput('username', 'passWrong')"
                        @change="validateInput('username', 'passWrong')"
                        @blur="validateInput('username', 'passWrong')"
                        @keypress.native="eventEnterLogin" 
                        ref="inputUsername"
                    ></a-input>
                    <span v-if="validate.username" class="validate-text">กรุณากรอกรหัสสมาชิก/อีเมล</span>
                </div>
                <div class="text-userpassword-top-input">Password</div>
                <div class="div-input-login">
                    <a-input-password
                        v-model="password" 
                        placeholder="Password" 
                        :class="'input-login ' + (validate.password || validate.passWrong ? 'error-a-password-input' : '')"
                        @focus="validateInput('password', 'passWrong')"
                        @change="validateInput('password', 'passWrong')"
                        @blur="validateInput('password', 'passWrong')"
                        @keypress.native="eventEnterLogin" 
                        ref="inputPassword"
                    ></a-input-password>
                    <span v-if="validate.password" class="validate-text">กรุณากรอก Password</span>
                    <span v-if="validate.passWrong" class="validate-text">รหัสสมาชิก/อีเมล หรือ Password ไม่ถูกต้อง</span>
                </div>
                <div class="text-forget-password">
                    <label @click="forgetPassword">ลืมรหัสผ่าน ?</label>
                </div>
                <div class="div-btn-login">
                    <a-button class="btn-login" @click="loginUser()">เข้าสู่ระบบ</a-button>
                </div>
            </div>
            <div style="width: 15%"></div>
            <div style="width: 55%; position: relative">
                <div class="text-new-register">สมัครสมาชิกใหม่</div>
                <div style="text-align: -webkit-center;">
                    <div class="div-facebook">FACEBOOK</div>
                    <div class="div-google">Sign In</div>
                    <div class="text-by-order">กรณีไม่ได้สมัครสมาชิกกรุณาใส่เลขที่ใบสั่งซื้อ / ใบเสนอราคา / สินค้า By Order</div>
                    <div class="div-by-order">
                        <span class="span-by-order"><a-input placeholder="เลขที่ใบสั่งซื้อ / ใบเสนอราคา" style="width: 210px;" class="input-by-order"/></span>
                        <span class="span-by-order"><a-input placeholder="กรุณากรอกเบอร์โทร" style="width: 190px;" class="input-by-order"/></span>
                        <span class="span-by-order"><a-button class="btn-check input-by-order">ตรวจสอบ</a-button></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            username: "",
            password: "",
            validate: {
                username: false,
                password: false,
                passWrong: false
            },
            // trackLogin: {
            //     username: false,
            //     password: false,
            // }
        }
    },
    methods: {
        loginUser() {
            // username
            // password
            let status = false;
            this.validate.passWrong = false;
            if (!this.username) {
                status = true;
                this.$refs['inputUsername'].focus();
                this.validate.username = true;
            }
            if (!this.password) {
                status = true;
                if (this.username) {
                    this.$refs['inputPassword'].focus();
                }
                this.validate.password = true;
            }
            if (!status) {
                if (this.username === 'uusernname' && this.password === 'p@ssw0rd') {
                    this.$store.state.login = true;
                    this.$router.push({name:'Main'});
                    return
                }
                this.$refs['inputUsername'].focus();
                this.validate.passWrong = true;
            }
        },
        eventEnterLogin(e) {
            // when press 'enter' ,it will login
            if (e.keyCode === 13) {
                this.loginUser();
            }
        },
        forgetPassword() {
            alert('ระบบยังไม้เปิดให้ใช้งานในขณะนี้')
        },
        validateInput(input, password) {
            this.validate[input] = false;
            this.validate[password] = false;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .text-userpassword-top-input {
        font-weight: bold;
        padding-bottom: 8px;
    }
    .div-input-login {
        position: relative;
        padding-bottom: 16px;
    }
    .input-login {
        width: 100%;
    }
    .validate-text {
        color: red;
        font-size: 12px;
        position: absolute; 
        bottom: -4px; 
        left: 0;
    }
    .text-forget-password {
        padding-top: 6px;
        text-align: right;
    }
    .text-forget-password label {
        cursor: pointer;
    }
    .text-forget-password label:hover{
        color: black;
    }
    .div-btn-login {
        text-align: center; 
        padding-top: 18px;
    }
    .btn-login {
        text-align: center;
        padding: 0 30px;
        background-color: rgb(0, 143, 0) !important;
        color: white !important;
    }
    .text-new-register {
        text-align: right;
        padding-bottom: 14px;
    }
    .div-facebook {
        width: 250px;
        background-color: #166fe5;
        color: white;
        font-weight: bold;
        padding: 5px;
        text-align: center;
        border-radius: 4px;
        cursor: pointer;
    }
    .div-google {
        width: 250px;
        font-weight: bold;
        padding: 5px;
        text-align: center;
        border-radius: 4px;
        cursor: pointer;
        -webkit-box-shadow: 0px 5px 5px 0px rgba(230,230,230,1);
        -moz-box-shadow: 0px 5px 5px 0px rgba(230,230,230,1);
        box-shadow: 0px 5px 5px 0px rgba(230,230,230,1);
    }
    .text-by-order {
        font-size: 12px;
        padding-top: 28px;
    }
    .span-by-order {
        padding: 0 5px;
    }
    .btn-check {
        background-color: #786e6e !important;
        color: #ffffffa6 !important;
    }
    .input-by-order {
        margin-top: 10px;
    }
</style>
