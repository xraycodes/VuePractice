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

.leftNavbarClass {
    display:inline;
    width: 100px;
    margin-left: 50px;
}

/* #containerForLeftNavbarAndThumbnails { */
    /* display:flex; */
    /* background-color: red; */
    /* justify-content: space-around; */
/* } */

</style>