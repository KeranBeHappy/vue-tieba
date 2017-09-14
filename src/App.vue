<template>
  <div id="app">
    <head-bar></head-bar>
    <!--<face-bar></face-bar>-->
    <router-view></router-view>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
  import HeadBar from '@/components/Header.vue'
  /*import FaceBar from '@/components/Face.vue'*/
  import FootBar from '@/components/Footer.vue'
export default {
  name: 'app',
  components:{
    HeadBar,
    FootBar,
    /*FaceBar*/
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
