<template>
  <nav v-bind:class="active" @click.prevent>
    <router-link to="/" class="one"><span @click="changeC('one')">进吧</span></router-link>
    <router-link to="/News" class="two"><span @click="changeC('two')">看贴</span></router-link>
    <router-link to="/Discovery" class="three"><span @click="changeC('three')">发现</span></router-link>
    <router-link to="/Mine" class="four"><span @click="changeC('four')">我</span></router-link>
  </nav>
</template>
<script>
  export default{
    data(){
      return{
        active:'one'
      }
    },
    methods:{
      changeC:function(str){
        this.active= str
      }
    }
  }
</script>
<style>
  a{
    text-decoration: none;
  }
  a:active{
    text-decoration: none;

  }
  nav {
    width: 100%;
    height: 4.7rem;
    background-color: #FCFDFF;
    display: flex;
    flex-flow: row;
    color: white;
    border-bottom: .2rem solid #DBDBDB;
  }
  nav>a{
    line-height: 4.5rem;
    text-align: center;
    width: 25%;
    height: 100%;
    color: #97989A;
  }
  nav>a>span{
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  nav.one .one,
  nav.two .two,
  nav.three .three,
  nav.four .four{
    color: #3385FF;
    text-decoration: none;
    border-bottom: .3rem solid #3385FF;
  }
</style>

