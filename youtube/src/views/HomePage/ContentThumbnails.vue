<script setup>
</script>

<template>
    <div id="outer-container">
        <router-link :to="{ name:'MJTrashTalk' }"><img id="thumbnails" src="../../assets/images/mjshoes.jpg" alt=""></router-link>
        <router-link :to="{ name:'JerseyNumbers' }"><img id="thumbnails" src="../../assets/images/jerseynumbers1.jpg" alt=""></router-link>
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