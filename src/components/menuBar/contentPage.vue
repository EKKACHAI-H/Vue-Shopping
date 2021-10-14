<template>
    <div id="contentPage">
        <div style="position: relative">
            <img src="../../assets/image/bg-test.png" style="width: 100%; height: 550px;">
            <a-button class="btn-image-1 position-center" type="danger">
                สั่งซื้อสินค้า
            </a-button>
        </div>
        <div style="display: flex;">
            <div class="div-image-2">
                <img src="../../assets/image/bg-test-2.png" class="image-2" >
                <a-button class="btn-image-1 position-center" type="danger">
                    โปรโมชั่น
                </a-button>
            </div>
            <div class="div-image-2">
                <img src="../../assets/image/bg-test-2.png" class="image-2" >
                <a-button class="btn-image-1 position-center" type="danger">
                    โปรโมชั่น
                </a-button>
            </div>
            <div class="div-image-2">
                <img src="../../assets/image/bg-test-2.png" class="image-2" >
                <a-button class="btn-image-1 position-center" type="danger">
                    โปรโมชั่น
                </a-button>
            </div>
        </div>
        <div style="position: relative">
            <img src="../../assets/image/bg-test-3.png" style="width: 100%; height: 350px;">
            <a-button class="btn-image-1 position-center" type="danger">
                ดูเพิ่มเติม
            </a-button>
        </div>
        <div style="display: flex;">
            <div style="width: 50%; position: relative; padding: 120px 70px;">
                <div style="font-size: 20px; color: #396bc1; font-weight: bold; margin-bottom: 6px;">โปรโมชั่น</div>
                <div style="font-size: 16px; color: rgb(57, 107, 193); font-weight: bold; margin-bottom: 2px;">Lorem ipsum dolor sit amet</div>
                <div>aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa </div>
                <div>aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa </div>
                <a-button class="btn-radius" type="danger" style="margin-top: 30px;">
                    ดูรายละเอียด
                </a-button>
            </div>
            <div style="width: 50%; position: relative;">
                <div class="frame-promotion position-center">
                    <div class="inside-frame-promotion">
                        <div style="font-size: 18px;">สั่งซื่อกับเราครั้งแรก</div>
                        <div style="font-size: 16px;">ลดทันที</div>
                        <div style="font-size: 50px; margin-top: -13px;">10%</div>
                        <div style="font-size: 16px; margin-top: -8px;">พร้อมจัดส่งฟรี</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-me">
            <div class="width-about-me">
                <div style="font-size: 20px; font-weight: bold;">เกี่ยวกับเรา</div>
                <div style="font-size: 16px; margin: 4px 0 2px 0;">aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa</div>
                <div>aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa 
                </div>
                <div style="display: flex; padding: 40px 20px;">
                    <div style="width: 33.33%">
                        <div class="value-about-me">
                            <div class="position-center">
                                <div class="value-number">20</div>
                                <div class="value-unit">Years</div>
                            </div>
                        </div>
                        <div class="value-text-1">
                            Experience
                        </div>
                        <div class="value-text-2">
                            aaaaaaaaaaaa aaaaaaa
                        </div>
                        <div class="value-text-2">
                            aaaaaaaaaaaaaaaa
                        </div>
                    </div>
                    <div style="width: 33.33%">
                        <div class="value-about-me">
                            <div class="position-center">
                                <div class="value-number">10+</div>
                                <div class="value-unit">Country</div>
                            </div>
                        </div>
                        <div class="value-text-1">
                            Export
                        </div>
                        <div class="value-text-2">
                            aaaaaaaaaaaa aaaaaaa
                        </div>
                        <div class="value-text-2">
                            aaaaaaaaaaaaaaaa
                        </div>
                    </div>
                    <div style="width: 33.33%">
                        <div class="value-about-me">
                            <div class="position-center">
                                <div class="value-number">2K</div>
                                <div class="value-unit">Client</div>
                            </div>
                        </div>
                        <div class="value-text-1">
                            Client
                        </div>
                        <div class="value-text-2">
                            aaaaaaaaaaaa aaaaaaa
                        </div>
                        <div class="value-text-2">
                            aaaaaaaaaaaaaaaa
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "contentPage",
    data() {
        return {
            
        }
    },
    methods: {
        
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .btn-radius {
        border-radius: 16px;
    }
    .btn-image-1 {
        top: 80% !important; 
        border-radius: 16px;
    }
    .div-image-2 {
        width: 33.33%;
        position: relative;
    }
    .image-2 {
        width: 100%; 
        height: 200px;
        border: 1px solid;
    }
    .frame-promotion {
        width: 204px;
        height: 220px;
        border-radius: 8px;
        background-color: #a51010;
        padding: 10px;
    }
    .inside-frame-promotion {
        height: 100%;
        border-radius: 8px;
        border: 1px solid #a3a3a3;
        text-align: center;
        padding: 26px 0;
        color: white;
    }
    .about-me {
        text-align: -webkit-center;
        color: white;
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
    .width-about-me {
        width: 65%;
        padding: 20px 0;
    }
    .value-about-me {
        height: 100px;
        width: 100px;
        background-color: #fff;
        border-radius: 50%;
        position: relative;
        color: #204395;
        text-align: center;
    }
    .value-number {
        font-size: 34px;
        font-weight: bold;
    }
    .value-unit {
        font-size: 12px;
        margin-top: -11px;
    }
    .value-text-1 {
        font-size: 16px;
        margin: 12px 0 2px 0;
    }
    .value-text-2 {
        font-size: 14px;
    }
</style>