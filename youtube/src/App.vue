<script setup>
import {} from 'vue'

import LeftNavbar from './components/LeftNavbar.vue'
import ContentThumbnails from './components/ContentThumbnails.vue';
</script>

<template>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="flexbox-container">
        <img src="./assets/images/YTLogo.png" width="70" height="40">
    <input type="text" placeholder="Search">
    <button>Upload</button>
    <button>Bell</button>
    </div>

    <div id="cont">
        <LeftNavbar/>
        <ContentThumbnails/>
    </div>
</body>
</html>

</template>

<style scoped>

#cont {
    display:flex;
    /* background-color: red; */
    justify-content: space-around;
}

.flexbox-container {
    display:flex;
    justify-content: space-between;
    align-items: center;
    align-content: flex-start;
    margin: 0 0 20px 0;
    /* background-color: aqua; */
}

</style>