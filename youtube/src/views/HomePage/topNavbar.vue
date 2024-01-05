<script setup>

</script>

<template>
     <div id="topNavbarContainer">
        <router-link :to="{ name:'Home'}"><img id="item1" src="../../assets/images/YTLogo.png" width="100px" height="40px"></router-link>
        <input id="item2" type="text" placeholder="Search">
        <div id="item3">
            <button><svg xmlns="http://www.w3.org/2000/svg" height="24" style="pointer-events: none; display: block; width: 100%; height: 100%;" viewBox="0 0 24 24" width="24" focusable="false"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path></svg></button>
        </div>
        <!-- <button id="item3"><svg xmlns="http://www.w3.org/2000/svg" height="24" style="pointer-events: none; display: block; width: 100%; height: 100%;" viewBox="0 0 24 24" width="24" focusable="false"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path></svg></button> -->
        <div id="item4">
            <button><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path></svg></button>
        </div>
       
        
    </div>

</template>

<style scoped>
/* input::placeholder {
    font-size: 18px;
} */

#topNavbarContainer{
    display:grid;
    /* grid-template-rows: 1fr 1fr 0.5fr 0.1fr; */
    grid-template-columns: 200px auto 0.1fr 0.05fr;
    /* background-color: black; */
    margin: 10px;
}

/* #topNavbarContainer {
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: aquamarine;
    height: 5vh;
    margin-bottom: 10px;
    width: 100%;
} */

#item1{
    margin-left: 50px;
}

#item2{
    width: 500px;
    border-radius: 10px;
    height: 3vh;
    border: 1px solid grey;
    margin-left: 250px;
}

#item3{
    display: flex;
    justify-content: flex-end;
    /* margin: 0px 10px; */
    /* margin-left: 200px; */
    /* width: 50px; */
    height: 3vh; 
}

#item4{
    display: flex;
    justify-content: flex-end;
    height: 3vh;
}


</style>
   