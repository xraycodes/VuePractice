<script setup>
import {} from 'vue'

import topNavbar from './topNavbar.vue';
import LeftNavbar from './LeftNavbar.vue';

import ContentThumbnails from './ContentThumbnails.vue';

</script>

<template>
     
    <topNavbar/> 

    <div id="containerForLeftNavbarAndThumbnails">
        <LeftNavbar class="leftNavbarClass"/>
        <ContentThumbnails/>
    </div>

</template>

<style scoped>

.leftNavbarClass{
    grid-column-start: 1;
    grid-column-end: 2;
    
}

#containerForLeftNavbarAndThumbnails {
    display:grid;
    grid-template-columns: 0.5fr auto; 
    /* background-color: red; */
    /* justify-content: space-evenly;  */
    gap: 30px;
}

</style>