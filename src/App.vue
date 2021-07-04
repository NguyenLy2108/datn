<template>  
  <!-- <Login /> -->
  <Home />  
  <router-view />
  <div id="content">
    <!-- <Lop /> -->
  </div>
</template>

<script>
// import Login from './components/Login.vue'
import Home from './components/Home.vue'
// import Lop from "./components/Lop.vue"

export default {
  name: 'App',
  components: {
    // Login,
    Home, 
    // Lop,
  }
}
</script>

<style>
#content {
  padding-left: 260px;
  padding-top:2px;
  padding-right: 10px;
  padding-bottom: 10px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#content {
  width: 100%;
  position: relative;
  margin-right: 0;
}
</style>
