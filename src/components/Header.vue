<template>
  <div>
    <header class="header-head">
      <div>
        <router-link to="###">
          <div style="line-height: 3.2rem">{{headName}}</div>
        </router-link>
        <router-link to="###"><span class="glyphicon glyphicon-bell"></span></router-link>
        <router-link to="###"><span class="glyphicon glyphicon-search"></span></router-link>
      </div>
    </header>
    <div ref="nav">
      <nav v-bind:class="active" @click.prevent>
        <router-link to="/" class="one"><span @click="changeC('one')">进吧</span></router-link>
        <router-link to="/News" class="two"><span @click="changeC('two')">看贴</span></router-link>
        <router-link to="/Discovery" class="three"><span @click="changeC('three')">发现</span></router-link>
        <router-link to="/Mine" class="four"><span @click="changeC('four')">我</span></router-link>
      </nav>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 'one',
        headName:"百度贴吧",
      }
    },
    methods: {
      changeC: function (str) {
        this.active = str
      }
    },
    mounted() {
      window.addEventListener('scroll', () => {
        let excNavHeight = (window.innerHeight || document.documentElement.clientHeight) * 0.1
        /*console.log('excNavHeight', excNavHeight, 'document.body.scrollTop', document.body.scrollTop)*/
        if (document.body.scrollTop > excNavHeight) {
          this.$refs.nav.className = 'fixed'
        }
        else {
          this.$refs.nav.className = ''
        }
      })
    }
  }
</script>
<style>
  a:active {
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  .fixed {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 4.7rem;
    background-color: white;
    display: flex;
    flex-flow: row;
    color: white;
    border-bottom: .2rem solid #DBDBDB;
  }

  nav {
    width: 100%;
    height: 4.7rem;
    background-color: #FAFBFC;
    display: flex;
    flex-flow: row;
    color: white;
    /*border-bottom: .2rem solid #DBDBDB;*/
  }

  nav > a {
    line-height: 4.7rem;
    text-align: center;
    width: 25%;
    height: 100%;
    color: #97989A;
  }

  nav > a > span {
    width: 100%;
    height: 100%;
    display: inline-block;
  }

  nav.one .one,
  nav.two .two,
  nav.three .three,
  nav.four .four {
    color: #3385FF;
    text-decoration: none;
    border-bottom: .3rem solid #3385FF;
  }

  .header-head {
    width: 100%;
    height: 4.5rem;
    background-color: #262B42;
  }

  .header-head > div > a:nth-child(1) {
    color: #C5CEDB;
    text-decoration: none;
  }

  .header-head > div > a:nth-child(1) > div {
    font-size: 1.8rem;
    width: 12.2rem;
    height: 2.8rem;
    display: inline-block;
    padding: 0;
    margin-left: 1rem;
    text-indent: 3.5rem;
    line-height: 3.5rem;
    background-image: url("../assets/img/tb_logo.png");
    background-repeat: no-repeat;
    background-size: 21% 92%;
    background-position: 0 .1rem;
  }

  .header-head > div > a:nth-child(2) {
    margin-left: 10.5rem;
  }

  .header-head > div > a:nth-child(3) {
    margin-left: 2rem;
  }

  .header-head > div > a > span {
    color: #C5CEDB;
    font-size: 2rem;
    line-height: 4.5rem;
  }
</style>
