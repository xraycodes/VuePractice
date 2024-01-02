<script setup>
</script>

<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

    <div id="outer-container">
        <div class="videos-container">
            <router-link :to="{ name:'MJTrashTalk' }"><img id="thumbnails" src="../../assets/images/mjshoes.jpg" alt=""></router-link>
            <p class="videoTitle">This Is Why You Don't Make Fun Of MJ's Shoes(Concord 11s)</p>
        </div>
        <div class="videos-container">
            <router-link :to="{ name:'JerseyNumbers' }"><img id="thumbnails" src="../../assets/images/jerseynumbers1.jpg" alt=""></router-link>
            <p class="videoTitle">Stories Behind Jersey Numbers of NBA Superstars</p>
        </div>


        <img id="thumbnails" src="../../assets/images/IMG_305882.jpg" alt="">
        <img id="thumbnails" src="../../assets/images/IMG_305882.jpg" alt="">
        <img id="thumbnails" src="../../assets/images/IMG_305882.jpg" alt="">
        <img id="thumbnails" src="../../assets/images/IMG_305882.jpg" alt="">
        <img id="thumbnails" src="../../assets/images/IMG_305882.jpg" alt="">
        
    </div>
 

</template>

<style scoped>

.videos-container {
    width: 330px;
    /* flex-basis: 500px; */
    flex-direction: column;
    display: flex;
    margin: 0;
    flex-wrap: wrap;
    /* justify-content:space-between;
    align-items: center; */
    /* border: 10px; */
    /* background-color: aqua; */
}
#outer-container{
    /* background-color: aqua; */
    display: flex;
    /* justify-content: flex-start; */
    flex-wrap: wrap;
    gap:10px;
}
#thumbnails {
    display: inline-block;
    width: 330px;
    height: 200px;
    border-radius: 10px;
}

.videoTitle {
    margin-top:0px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
}

</style>