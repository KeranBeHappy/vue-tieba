<template>
  <div>
    <div class="keywords-title">
      <div><router-link to="###">小众癖好<span class="glyphicon glyphicon-menu-right"></span></router-link></div>
      <div>
        <ul>
          <router-link to="###"  v-for="(item,index) in discoverOne">
            <img class="img-rounded" :src="item.dis_img" alt="">
            <span>{{item.dis_name}}吧</span>
          </router-link>
        </ul>
      </div>
      <div></div>
    </div>
    <div class="keywords-title">
      <div><router-link to="###">以棋会友<span class="glyphicon glyphicon-menu-right"></span></router-link></div>
      <div>
        <ul>
          <router-link to="###"  v-for="(item,index) in discoverTwo">
            <img class="img-rounded" :src="item.dis_img" alt="">
            <span>{{item.dis_name}}吧</span>
          </router-link>
        </ul>
      </div>
      <div></div>
    </div>
    <div class="list-more">
      <router-link to="###">浏览更多吧单</router-link>
      <router-link to="###">查看全部吧分类</router-link>
    </div>
  </div>
</template>
<style>
  a{
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
  .list-more{
    width: 100%;
    height: 3.5rem;
    display: flex;
    flex-flow: wrap;
    border-bottom: .1rem solid rgba(0,0,0,.2);
  }
  .list-more>a{
    width: 50%;
    margin-top: .5rem;
    margin-bottom: .5rem;
    display: inline-block;
    border-right: .1rem solid #EBEDF0;
    text-align: center;
    line-height: 2.5rem;
    font-size: 1.2rem;
    color: #075CB1;
  }
  .list-more>a:nth-child(2){
    border-right: none;
  }
  .keywords-title{
    width: 100%;
    height: 15.8rem;
  }
  .keywords-title>div:nth-child(1){
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 100%;
    height: 4.26rem;
    line-height: 4.26rem ;
    font-size: 1.6rem;
    border-bottom: .1rem solid #EBEDF0;
  }
  .keywords-title>div:nth-child(1)>a>span{
    float: right;
    margin-top: 1rem;
    color: #EBEDF0;
  }
  .keywords-title>div:nth-child(2){
    border-bottom: .1rem solid rgba(0,0,0,.2);
  }
  .keywords-title>div:nth-child(2)>ul{
    width: 100%;
    height:10rem;
    display: flex;
    flex-flow: wrap;
  }
  .keywords-title>div:nth-child(2)>ul>a{
    text-indent: 1.5rem;
    line-height: 4rem;
    width: 50%;
    margin-top: .5rem;
    margin-bottom: .5rem;
    height: 4rem;
    display: inline-block;
    border-right: .1rem solid #EBEDF0;
  }
  .keywords-title>div:nth-child(2)>ul>a:nth-child(2n){
    border-right: none;
  }
  .keywords-title>div:nth-child(3){
    width: 100%;
    height: 1.5rem;
    background-color: #EBEDF0;
  }
</style>
<script>
  export default{
    data(){
      return{
        discoverOne:[],
        discoverTwo:[],
      }
    },
    created() {
      var _this = this;
      // 获取一类
      this.$http.get('http://localhost:8081/discoverOne')
        .then(function (data) {
          /*console.log(data)*/
          _this.discoverOne = data.data
        })
      // 获取二类
      this.$http.get('http://localhost:8081/discoverTwo')
        .then(function (data) {
          /*console.log(data)*/
          _this.discoverTwo = data.data
        })
    },
  }
</script>
