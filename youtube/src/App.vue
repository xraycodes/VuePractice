<script setup>
import {} from 'vue'

import topNavbar from './components/topNavbar/topNavbar.vue';
import LeftNavbar from './components/leftNavbar/LeftNavbar.vue'
import ContentThumbnails from './components/ContentThumbnails.vue';

</script>

<template>
    <topNavbar/> 

    <div id="containerForLeftNavbarAndThumbnails">
        <LeftNavbar/>
        <ContentThumbnails/>
    </div>


<RouterView />
</template>

<style scoped>

#containerForLeftNavbarAndThumbnails {
    display:flex;
    /* background-color: red; */
    justify-content: space-around;
}

</style>