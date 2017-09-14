<template>
  <div>
    <router-link class="user-info" to="/UserInfo">
      <div>
        <img class="img-circle" src="../assets/img/tieba_touxiang.jpg" alt="">
      </div>
      <div>
        <p>用户名</p>
        <p style="display: inline-block;color: #97989A;">个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍</p>
      </div>
      <span class="glyphicon glyphicon-menu-right"></span>
    </router-link>
    <ul class="user-item">
      <router-link to="###">
        <img src="../assets/img/tieba_shoucang.png" alt="">
        <span>我的收藏</span>
      </router-link>
      <router-link to="###">
        <img src="../assets/img/tieba_tdou.png" alt="">
        <span>我的T豆</span>
      </router-link>
      <router-link to="###">
        <img src="../assets/img/tieba_fankui.png" alt="">
        <span>意见反馈</span>
      </router-link>
      <router-link to="###">
        <img src="../assets/img/tieba_anquan.png" alt="">
        <span>账号安全</span>
      </router-link>
      <router-link to="###">
        <img src="../assets/img/tieba_tuichu.png" alt="">
        <span>退出登录</span>
      </router-link>
    </ul>
  </div>
</template>
<style>
  .user-item {
    margin-top: -.6rem;
    width: 100%;
    height: 27.3rem;
    display: flex;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    flex-flow: column;
  }

  .user-item > a > img {
    width: 2.8rem;
    height: 2.8rem;
    margin-right: 1rem;
  }

  .user-item > a {
    height: 20%;
    line-height: 5.46rem;
    border-bottom: .1rem solid #EBEDF0;
    font-size: 1.6rem;
  }

  .user-info {
    display: inline-block;
    width: 32rem;
    height: 10rem;
    padding: 1.5rem;
    border-bottom: .1rem solid #EBEDF0;
  }

  .user-info > div {
    width: 7rem;
    height: 7rem;
    float: left;
  }

  .user-info > div > img {
    width: 100%;
    height: 100%;
  }

  .user-info > div:nth-child(2) {
    margin-top: 1rem;
    margin-left: 1rem;
    width: 67%;
    height: 5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .user-info > div:nth-child(2) > p:nth-child(1) {
    font-size: 1.9rem;
  }

  .user-info > span {
    float: right;
    line-height: 7rem;
    font-size: 1.4rem;
  }
</style>
