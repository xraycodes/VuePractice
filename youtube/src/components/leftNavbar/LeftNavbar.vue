<script setup>
import {ref} from 'vue'

const topMenu = ref(['Home', 'Shorts', 'Subscriptions'])
const middleMenu = ['Your channel','History','Your videos', 'Watch later','Show more']
const lowerMenu = ['Subscriptions']

</script>

<template>
        <div id="outer-container">
            <div id="topMenu">
                <div id="menuItemCSS" v-for="menu in topMenu">
                    <router-link :to="{ name:'Home' }">{{ menu }} </router-link>
                </div>
            </div>
            <hr>
            <div id="middleMenu">
                <div id="menuItemCSS" v-for="menu in middleMenu">
                    <a href="">{{ menu }}</a>
                </div>
            </div>
            <hr>
            <div id="lowerMenu">
                <div id="menuItemCSS" v-for="menu in lowerMenu">
                    <a href="">{{ menu }}</a>
                </div>
            </div>

        </div>  


</template>

<style scoped>


#outer-container {
    width: 15%;
    /* background-color: pink; */
    display: block;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
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

#lowerMenu {
    display: flex;
    justify-content: center;
}

#menuItemCSS {
    margin: 0px 10px 10px 10px
}

</style>