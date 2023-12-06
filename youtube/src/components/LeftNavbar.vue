<script setup>
const topMenu = ['Home', 'Shorts', 'Subscriptions']
const middleMenu = ['Your channel','History','Your videos', 'Watch later','Show more']
const lowerMenu = ['Subscriptions']

</script>

<template>
    <div id="outer-container">
        <div id="topMenu">
            <div v-for="menu in topMenu">{{ menu }}</div>
        </div>
        <hr>

        <div id="middleMenu">
            <div v-for="menu in middleMenu">{{ menu }}</div>
        </div>
    
    

    </div>


</template>

<style>

#outer-container {
    width: 15%;
    background-color: pink;
}
#topMenu {
    display:flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* background-color: red;; */

}

#middleMenu {
    display: flex;
    flex-direction:column;
    align-items: center;
}

</style>