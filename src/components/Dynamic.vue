<template>
  <div>
    <div class="dynamic-box" v-for="(item,index) in dynamic">
      <div class="top-box">
        <h4>{{item.dynamic_title}}</h4>
        <span>{{item.dynamic_details}}</span>
      </div>
      <div class="down-box">
        <span>{{item.dynamic_name}}吧</span>
        <span @click="changLike()">{{item.dynamic_like}}</span>
        <span>{{item.dynamic_comment}}</span>
      </div>
    </div>
    <router-link class="look-all" to="###">查看全部</router-link>
  </div>
</template>
<style>
  .look-all{
    display: inline-block;
    width: 100%;
    height: 3.8rem;
    border-top: .1rem solid #EBEDF0;
    font-size: 1.2rem;
    color: #075CB1;
    line-height: 3.8rem;
    text-align: center;
    border-bottom: .1rem solid rgba(0,0,0,.2);
  }
  .dynamic-box{
    width: 100%;
    height: 11.9rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .top-box{
    width: 100%;
    height: 8.4rem;
    border-bottom: .1rem solid #EBEDF0;
  }
  .top-box>span{
    color: #7A7C80;
  }
  .down-box{
    width: 100%;
    height: 3.46rem;
    line-height: 3.46rem;
    position: relative;
  }
  .down-box>span{
    font-size: 1.26rem;
    color: #ABAEB2;
  }
  .down-box>span:nth-child(2){
    text-indent: 2rem;
    width: 3.535rem;
    height: 100%;
    display: inline-block;
    background-image: url("../assets/img/tieba_dianzan1.png");
    background-size: 50% 50%;
    background-repeat:no-repeat;
    background-position: 0 .8rem;
    position: absolute;
    right: 4.5rem;
  }
  .down-box>span:nth-child(3){
    text-indent: 2rem;
    width: 3.535rem;
    height: 100%;
    display: inline-block;
    background-image: url("../assets/img/tieba_pinglun.png");
    background-size: 50% 50%;
    background-repeat:no-repeat;
    background-position: 0 .8rem;
    position: absolute;
    right: 0;
  }
</style>
<script>
  export default{
    data(){
      return{
        dynamic:[]
      }
    },
    created() {
      var _this = this;
      // 获取所有感兴趣的贴吧数据
      this.$http.get('http://localhost:8081/dynamic')
        .then(function (data) {
          /*console.log(data)*/
          _this.dynamic = data.data
        })
    },
    methods:{
      changLike(){

      }
    }
  }
</script>
