<template>
    <div id="menuButtom">
        <div class="main-page">
            <div class="tab-top">
                <label class="color-white position-text-header">
                    รับสมัครข้อมูลข่าวสารและโปรโมชั่น
                </label>
                <a-input v-model="searchData" style="width: 30%" addon-after="ส่ง" placeholder="อีเมล"/>
            </div>
            <div class="content-center">
                <div class="width-left-content">
                    <div style="text-align: center; padding: 40px;">
                        <div style="display: flex;">
                            <div style="width: 60%; text-align: left;">
                                <div>
                                    <img src="../assets/image/icon.jpg" style="width: 84px">
                                </div>
                                <div style="padding: 8px 0;">
                                    99/9 หมู่ 5 ซ.แก้วอินทร์ 14 ถ.เสาธงหิน อ.บางใหญ่ จ.นนทบุรี 11140
                                </div>
                                <div>
                                    <span>
                                        <img src="../assets/image/customerService.jpg" style="width: 34px">
                                    </span>
                                    <span style="padding-left: 16px;">02 150 1882</span>
                                </div>
                            </div>
                            <div style="width: 40%; text-align: left; border-left: 2px solid #2384c9; padding-left: 10%;">
                                <div class="font-sub-menu">หน้าหลัก</div>
                                <div class="font-sub-menu">สินค้า</div>
                                <div class="font-sub-menu">โปรโมชั่น</div>
                                <div class="font-sub-menu">เกี่ยวกับเรา</div>
                                <div class="font-sub-menu">ติดต่อเรา</div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="width-right-content">

                </div>
            </div>
            <div class="tab-bottom font-color-white">
                Copyright @2021 Kanittha Plastic Co, Ltd All right reserved 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "menuButtom",
    props: {
        msg: String,
    },
    data() {
        return {
            searchData: ""
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #menuButtom {
        padding-top: 277.17px;
    }
    .main-page {
        position: fixed; 
        bottom: 0;
        width: 100%;
    }
    .tab-top {
        width: 100%;
        background-color: #b33939;
        padding: 6px 0;
        text-align: center;
    }
    .tab-bottom {
        width: 100%;
        padding: 6px 0;
        text-align: center;
        background-image: -webkit-gradient( linear, right top, left top, color-stop(0, #0A92D1), color-stop(1, #204395));
        background-image: -o-linear-gradient(left, #0A92D1 0%, #204395 100%);
        background-image: -moz-linear-gradient(left, #0A92D1 0%, #204395 100%);
        background-image: -webkit-linear-gradient(left, #0A92D1 0%, #204395 100%);
        background-image: -ms-linear-gradient(left, #0A92D1 0%, #204395 100%);
        background-image: linear-gradient(to left, #0A92D1 0%, #204395 100%);
    }
    .color-white {
        color: white;
        padding-left: 16px;
        cursor: pointer;
    }
    .font-color-white {
        color: white;
    }
    .position-text-header {
        padding-right: 90px;
        vertical-align: -webkit-baseline-middle;
    }
    .content-center {
        display: flex;
    }
    .width-left-content {
        width: 35%;
        background-color: white;
    }
    .width-left-content-position {
        position: relative;
    }
    .width-right-content {
        width: 65%;
        background-color: white;
        -webkit-box-shadow: inset 6px 0px 8px 0px rgba(168,168,168,1);
        -moz-box-shadow: inset 6px 0px 8px 0px rgba(168,168,168,1);
        box-shadow: inset 6px 0px 8px 0px rgba(168,168,168,1);
    }
    .font-sub-menu {
        cursor: pointer;
    }
    .font-sub-menu:hover {
        color: #2384c9;
        font-weight: bold;
    }
</style>
