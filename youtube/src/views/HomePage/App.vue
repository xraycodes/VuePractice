<script setup>
import {} from 'vue'

import topNavbar from './topNavbar/topNavbar.vue';
import LeftNavbar from './leftNavbar/LeftNavbar.vue'
import ContentThumbnails from './ContentThumbnails.vue';

</script>

<template>
    <topNavbar/> 

    <div id="containerForLeftNavbarAndThumbnails">
        <LeftNavbar/>
        <ContentThumbnails/>
    </div>

</template>

<style scoped>

#containerForLeftNavbarAndThumbnails {
    display:flex;
    /* background-color: red; */
    justify-content: space-around;
}

</style>