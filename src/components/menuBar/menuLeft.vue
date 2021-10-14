<template>
    <div id="menuLeft">
        <a-menu mode="vertical" @click="handleClick">
            <a-menu-item key="1">
                <a-icon type="calendar" />
                ส้นค้าใหม่
            </a-menu-item>
            <a-menu-item key="2">
                <a-icon type="calendar" />
                แก้วพลาสติก
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="calendar" />
                ผ้า
            </a-menu-item>
            <a-menu-item key="4">
                <a-icon type="calendar" />
                ถ้วยกระดาษ
            </a-menu-item>
            <a-menu-item key="5">
                <a-icon type="calendar" />
                หลอด
            </a-menu-item>
            <a-menu-item key="6">
                <a-icon type="calendar" />
                โฟม
            </a-menu-item>
            <a-menu-item key="7">
                <a-icon type="calendar" />
                ชุดกล่องเบนโตะ
            </a-menu-item>
            <a-menu-item key="8">
                <a-icon type="calendar" />
                กล่องพับใส
            </a-menu-item>
            <a-menu-item key="9">
                <a-icon type="calendar" />
                ชุดกล่องอาหารไมโครเวฟ
            </a-menu-item>
            <a-menu-item key="10">
                <a-icon type="calendar" />
                กล่องเบเกอรี่
            </a-menu-item>
            <a-menu-item key="11">
                <a-icon type="calendar" />
                ช้อน
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
export default {
    name: "menuLeft",
    methods: {
        handleClick(e) {
        console.log('click ', e);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
