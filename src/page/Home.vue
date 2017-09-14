<template>
  <div>
    <div class="search-bar">
      <form class="form-inline">
        <div class="form-group">
          <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
          <div class="input-group">
            <div class="input-group-addon"><span class="glyphicon glyphicon-search"></span></div>
            <input type="text" class="form-control" id="exampleInputAmount" placeholder="进吧,搜贴">
          </div>
        </div>
      </form>
    </div>
    <!-- list组件-->
    <list></list>
    <div class="interested-list" v-if="isTab==false">
      <div>您可能感兴趣的吧
        <i class="glyphicon glyphicon-eye-open" @click="changeShow()" v-show="isShow==true"></i>
        <i class="glyphicon glyphicon-eye-close" @click="changeShow()" v-show="isShow==false"></i>
        <i @click="ChangeTabTab()">换一换</i>
      </div>
      <a href="" v-for="(item,index) in interest" v-show="isShow==true">
        <div>
          <div style="height: 6rem">
            <img class="img-rounded" :src="item.in_img" alt="">
          </div>
          <div style="height: 6rem">
            <span>{{item.in_name}}吧</span><br>
            <p>关注 {{item.in_personNum}} 帖子 {{item.in_postNum}}</p>
            <p>最近热门关注</p>
          </div>
          <div style="height: 6rem">
            <button>关注</button>
          </div>
        </div>
      </a>
    </div>
    <div class="interested-list" v-if="isTab==true">
      <div>您可能感兴趣的吧
        <i class="glyphicon glyphicon-eye-open" @click="changeShow()" v-show="isShow==true"></i>
        <i class="glyphicon glyphicon-eye-close" @click="changeShow()" v-show="isShow==false"></i>
        <i @click="ChangeTabTab()">换一换</i>
      </div>
      <a href="" v-for="(item,index) in interesttwo" v-show="isShow==true">
        <div>
          <div style="height: 6rem">
            <img class="img-rounded" :src="item.in_img" alt="">
          </div>
          <div style="height: 6rem">
            <span>{{item.in_name}}吧</span><br>
            <p>关注 {{item.in_personNum}} 帖子 {{item.in_postNum}}</p>
            <p>最近热门关注</p>
          </div>
          <div style="height: 6rem">
            <button>关注</button>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
  import List from '@/components/List.vue'
  export default {
    name: 'app',
    components: {
      List
    },
    data() {
      return {
        interest: [],
        interesttwo: [],
        isShow:true,
        isTab:false,
      }
    },
    created() {
      var _this = this;
      // 获取所有感兴趣的贴吧数据
      this.$http.get('http://localhost:8081/interest')
        .then(function (data) {
          /*console.log(data)*/
          _this.interest = data.data
        })

      this.$http.get('http://localhost:8081/interesttwo')
        .then(function (data) {
          /*console.log(data)*/
          _this.interesttwo = data.data
        })
    },
    methods:{
      changeShow(){
        if (this.isShow==false){
          this.isShow=true
        }else if(this.isShow==true){
          this.isShow=false
        }
        /*console.log("asd")*/
      },
      ChangeTabTab(){
        if (this.isTab==false){
          this.isTab=true
        }else if(this.isTab==true){
          this.isTab=false
        }
      },
      add: function () {
        var obj = {
          action: this.todo,
          done: false
        }
        console.log("asd")
        this.item.push(obj)
      },
    }
  }
</script>
<style>
  a{
    text-decoration: none;
  }
  p {
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  .interested-list {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    overflow: hidden;
    border-bottom: .1rem solid #E1E3E6;
  }
  .interested-list > div {
    width: 100%;
    height: 2.7rem;
    line-height: 2.7rem;
    font-size: 1.3rem;
    color: #7A7C80;
  }

  .interested-list > a {
    width: 100%;
    height: 9.28rem;
  }

  .interested-list > a > div {
    width: 100%;
    height: 9.28rem;
    padding-top: 1rem;
    border-top: .1rem solid #E1E3E6;
    display: flex;
  }
  .interested-list > a > div > div:nth-child(1) {
    display: inline-block;
    margin: .6rem auto;
  }

  .interested-list > a > div > div:nth-child(2) {
    display: inline-block;
    margin: .7rem 1rem;
  }

  .interested-list > a > div > div:nth-child(2) > span {
    color: black;
    font-size: 1.5rem;
  }

  .interested-list > a > div > div:nth-child(2) > p:nth-child(3) {
    color: #999999;
    font-size: 1.3rem;
  }

  .interested-list > a > div > div:nth-child(2) > p:nth-child(4) {
    color: #CCD0DB;
    font-size: 1.3rem;
  }

  .interested-list > a > div > div > p {
    display: inline-block;

  }

  .interested-list > a > div > div > button {
    width: 5rem;
    height: 2.5rem;
    display: inline-block;
    background-color: #3385FF;
    border: none;
    border-radius: .2rem;
    font-size: 1.2rem;
    color: white;
    margin: 2.5rem auto;
  }

  .interested-list > div:nth-child(1) > i:nth-child(1) ,i:nth-child(2){
    display: inline-block;
    width: 1.5rem;
    height: 2.5rem;
    margin-top: .1rem;
    color: #D0D1D3;
  }

  .interested-list > div:nth-child(1) > i:nth-child(3) {
    color: #3385FF;
    float: right;
  }

  .search-bar {
    width: 100%;
    height: 4.5rem;
    background-color: #ECEEF0;
    line-height: 4.5rem;
    padding-top: .5rem;
  }

  .form-inline {
    width: 30rem;
    margin: 0 auto;
  }

  .form-control, .input-group-addon {
    border-radius: 0;
  }

  .input-group-addon {
    background-color: white;
  }

</style>
