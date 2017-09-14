<template>
  <div>
    <a href="###" v-for="(item,index) in tiebaHotNews">
      <div class="hot-news">
        <img :src="item.hotNews_img" alt="">
        <p>{{item.hotNews_title}}<span class="head-hot">头条</span></p>
        <p>{{item.hot_details}}</p>
      </div>
    </a>
    <a href="###" v-for="(item,index) in tiebaNews">
      <div class="ranking-news">
        <p>{{item.news_title}}<span class="head-hot">头条</span></p>
        <div>
          <img :src="item.news_img1" alt="">
          <img :src="item.news_img2" alt="">
          <img :src="item.news_img3" alt="">
        </div>
      </div>
    </a>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tiebaHotNews: [],
        tiebaNews: [],
      }
    },
    created() {
      var _this = this;
      // 获取前3条热点新闻
      this.$http.get('http://localhost:8081/tiebaHotNews')
        .then(function (data) {
          /*console.log(data)*/
          _this.tiebaHotNews = data.data
        })
      // 获取后30条新闻
      this.$http.get('http://localhost:8081/tiebaNews')
        .then(function (data) {
          /*console.log(data)*/
          _this.tiebaNews = data.data
        })
    }
  }
</script>
<style>
  a:active {
    text-decoration: none;
  }
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
  template > div > a:nth-child(1) {
    line-height: 8.5rem;
  }
  .ranking-news {
    width: 100%;
    height: 14.1rem;
    padding: 1rem;
    border-bottom: .1rem solid #E1E3E6;
  }
  .ranking-news > div {
    width: 100%;
    height: 9.8rem;
    display: flex;
    margin-top: .5rem;
  }
  .ranking-news > div>img{
    height: 98.5%;
    margin-right: .5rem;
  }
  .ranking-news>p{
    color: black;
    font-size: 1.6rem;
  }
  .hot-news {
    width: 100%;
    height: 7.8rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: .6rem;
    border-bottom: .1rem solid #E1E3E6;
  }

  .head-hot {
    font-size: 1.3rem;
    border: .1rem solid #4dab8b;
    border-radius: .2rem;
    color: #4dab8b;
    float: right;
  }

  .hot-news > img {
    display: inline-block;
  }

  .hot-news > p {
    margin-top: .5rem;
    display: inline-block;
    float: right;
    padding-left: .7rem;
  }

  .hot-news > p:nth-child(2) {
    font-size: 1.6rem;
    color: black;
    width: 22.9rem;
    height: 2.8rem;
  }

  .hot-news > p:nth-child(3) {
    width: 22.9rem;
    height: 4rem;
    margin-top: -4rem;
    font-size: 1.4rem;
    color: #CCD0DB;
  }
</style>
