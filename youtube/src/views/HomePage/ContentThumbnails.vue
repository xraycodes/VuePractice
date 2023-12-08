<script setup>
</script>

<template>
    <div id="outer-container">
        <a href="../../views/YourChannel/index.vue"><img id="thumbnails" src="../../assets/images/IMG_305882.jpg" alt=""></a>
        <img id="thumbnails" src="../../assets/images/IMG_305882.jpg" alt="">
        <img id="thumbnails" src="../../assets/images/IMG_305882.jpg" alt="">
        <img id="thumbnails" src="../../assets/images/IMG_305882.jpg" alt="">
        <img id="thumbnails" src="../../assets/images/IMG_305882.jpg" alt="">
        <img id="thumbnails" src="../../assets/images/IMG_305882.jpg" alt="">
        <img id="thumbnails" src="../../assets/images/IMG_305882.jpg" alt="">
        
    </div>
 

</template>

<style scoped>
#outer-container{
    /* background-color: aqua; */
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
#thumbnails {
    display: inline-block;
    width: 330px;
    height: 200px;
    margin: 0px 8px 10px 10px
}

</style>