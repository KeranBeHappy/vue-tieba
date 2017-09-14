<template>
  <div>
    <!-- 引入轮播图组件-->
    <banner></banner>
    <header class="header-heated-debate"><span>贴吧热议</span></header>
    <div class="heated-debate">
      <ul>
        <router-link to="###" v-for="(item,index) in tiebaHot">{{item.hot_title}}</router-link>
        <router-link to="###" style="color: #075CB1">更多热议 ></router-link>
      </ul>
    </div>
    <header class="header-heated-debate"><span>精选吧单</span></header>
    <!-- 引入推荐吧单组件-->
    <recommend></recommend>
    <header class="header-heated-debate"><span>最新动态</span></header>
    <!-- 引入动态组件-->
    <dynamic></dynamic>
  </div>
</template>
<style>
  @import url("../assets/css/swiper-3.4.2.min.css");
  a{
    color: black;
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
  ul{
    margin: 0;
  }
  html,body{
    width: 100%;
    height: 100%;

  }
  .heated-debate{
    width: 100%;
    height: 16.6rem;
    padding-left: 1.5rem;
    display: flex;
    border-bottom: .1rem solid rgba(0,0,0,.2);
  }
  .heated-debate>ul>a{
    width: 45%;
    height: 4.16rem;
    display: inline-block;
    font-size: 1.4rem;
    line-height: 4.16rem;
  }
  .header-heated-debate{
    width: 100%;
    height: 3.76rem;
    background-color: #EBEDF0;
    line-height: 3.76rem;
  }
  .header-heated-debate>span{
    margin-left: 1.5rem;
  }

</style>
<script>
  /*import SlideShow from '@/components/Slideshow.vue'*/
  import Recommend from '@/components/Recommend.vue'
  import Banner from '@/components/Banner.vue'
  import Dynamic from '@/components/Dynamic.vue'

  export default{
    components: {
      Recommend,
      Banner,
      Dynamic
    },
    data(){
      return{
        tiebaHot: [],
      }
    },
    created() {
      var _this = this;
      // 获取七条贴吧热议
      this.$http.get('http://localhost:8081/tiebaHot')
        .then(function (data) {
          /*console.log(data)*/
          _this.tiebaHot = data.data
        })
    },
  }
</script>
