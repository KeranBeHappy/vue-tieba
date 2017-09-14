<template>
  <div>
    <footer class="home-footer">
      <div>
        <a href="###">反馈</a>
        <span>|</span>
        <a href="###">注销</a>
      </div>
      <div>
        <a href="###">电脑版</a>
        <span>|</span>
        <a href="###">极速版</a>
        <span>|</span>
        <a href="###" style="color: red">客户端 <span style="position:absolute;display:inline-block;font-size: 1rem;font-style: italic">new</span></a>
      </div>
      <div>
        ©2017 Baidu
        <a href="###">使用百度前必读</a>
      </div>
    </footer>
  </div>
</template>
<style>
  a:active {
    text-decoration: none;
  }
  a{
    text-decoration: none;
  }
  p,div{
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  .home-footer{
    width: 100%;
    height: 15.2rem;
    padding-top: 1rem;
    padding-bottom: 5rem;
    background-color: #FAFBFC;
  }
  .home-footer>div{
    text-align: center;
  }
  .home-footer>div:nth-child(1)>span{
    color: #C4E3F8;
    font-size: 1.2rem;
    line-height: 1.44rem;
  }
  .home-footer>div:nth-child(2)>span{
    color: #C4E3F8;
    font-size: 1.2rem;
    line-height: 1.44rem;
  }
  .home-footer>div:nth-child(1)>a{
    color: black;
    font-size: 1.3rem;
    width: 2.6rem;
    height: 1.44rem;
    margin-top: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .home-footer>div:nth-child(2){
    margin-top: 1rem;
  }
  .home-footer>div:nth-child(2)>a{
    color: black;
    font-size: 1.3rem;
    width: 3.9rem;
    height: 1.44rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .home-footer>div:nth-child(3){
    color: black;
    font-size: 1.3rem;
    height: 2.8rem;
    margin-top: 1rem;
  }
  .home-footer>div:nth-child(3)>a{
    color: black;
    font-size: 1.3rem;
    width: 9.1rem;
    height: 1.44rem;
  }
</style>
