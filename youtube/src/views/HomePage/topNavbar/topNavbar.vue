<script setup>

</script>

<template>
     <div id="topNavbarContainer">
        <router-link :to="{ name:'Home'}"><img id="item1" src="../../../assets/images/YTLogo.png" width="100px" height="40px"></router-link>
        <input id="item2" type="text" placeholder="Search">
        <button id="item3">Upload</button>
        <button id="item4">Bell</button>
    </div>

</template>

<style scoped>
/* input::placeholder {
    font-size: 18px;
} */

#topNavbarContainer {
    display:flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: aquamarine; */
    height: 5vh;
    margin-bottom: 10px;
    width: 100%;
}

#item1{
    margin-left: 50px;
}

#item2{
    flex-basis: 550px;
    /* align-self: center; */
    border-radius: 10px;
    height: 3vh;
    /* flex-grow: 2; */
    /* margin-left: 600px; */
    border: 1px solid grey;
    align-self: flex-end;
}

#item3{
    /* margin-left: 900px; */
}

#item4{
    /* margin-right: 10px; */
}


</style>
   