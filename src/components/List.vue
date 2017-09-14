<template>
  <div>
    <header class="region-head">
      我常逛的贴吧
      <a href="###" class="add-a" @click="TanCShow()" v-if="isEdit==true">添加</a>
      <a href="###" class="edit-a" @click="changeEdit()" v-if="isEdit==false">编辑</a>
      <a href="###" class="edit-a" @click="changeEdit()" v-if="isEdit==true">完成编辑</a>
    </header>
    <ul class="tieba-list" v-show="isAll==false">
      <a href="###" v-for="(item,index) in tiebaLists">
        <div>
          <i class="glyphicon glyphicon-remove" v-if="isEdit==true" @click="del(index)"></i>
          <div>{{item.list_name}}</div>
          <span>{{item.level}}</span>
        </div>
      </a>
    </ul>
    <!--弹窗-->
    <div class="out-tanChuang" v-show="isTanC==true">
      <div class="tanChuang">
        <div class="in-tanChuang">
          <div>
            <div class="glyphicon glyphicon-remove-circle" @click="TanCHidden()"></div>
            <span>添加我爱逛的吧</span></div>
          <div>
            <span>添加自己爱逛的吧 , 今后逛贴吧更便捷</span><br>
            <input type="text" v-model="addTb"><br>
            <button @click="add()">添加</button>
          </div>
        </div>
      </div>
    </div>
    <ul class="tieba-list-all" v-show="isAll==true">
      <a href="###" v-for="(item,index) in tiebaLists">
        <div>
          <i class="glyphicon glyphicon-remove" v-if="isEdit==true" @click="del(index)"></i>
          <div>{{item.list_name}}</div>
          <span>{{item.level}}</span>
        </div>
      </a>


    </ul>
    <div class="region-foot" @click="changeAll()">
      <div v-show="isAll==false"><span class="glyphicon glyphicon-menu-down"></span> 展开全部</div>
      <div v-show="isAll==true"><span class="glyphicon glyphicon-menu-up"></span> 收起部分</div>
    </div>
    <div style="width: 100%;height: 1rem;background-color: #FAFBFC"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isAll: false,
        isEdit: false,
        isTanC: false,
        tiebaLists: [
          {
            "list_id": 1,
            "list_name": "酸共极要好",
            "level": 1,
            "head_img": "http://dummyimage.com/90x90/f2a479",
            "list_personNum": 7146,
            "list_postNum": 3710172,
            "num": 1
          },
          {
            "list_id": 2,
            "list_name": "日行",
            "level": 1,
            "head_img": "http://dummyimage.com/90x90/8079f2",
            "list_personNum": 3929,
            "list_postNum": 19179,
            "num": 1
          },
          {
            "list_id": 3,
            "list_name": "广命风平",
            "level": 1,
            "head_img": "http://dummyimage.com/90x90/94f279",
            "list_personNum": 17353,
            "list_postNum": 521897,
            "num": 1
          },
          {
            "list_id": 4,
            "list_name": "备风林",
            "level": 1,
            "head_img": "http://dummyimage.com/90x90/f279b7",
            "list_personNum": 13934,
            "list_postNum": 456504,
            "num": 1
          },
          {
            "list_id": 5,
            "list_name": "厂事分",
            "level": 1,
            "head_img": "http://dummyimage.com/90x90/79dbf2",
            "list_personNum": 36359,
            "list_postNum": 4583847,
            "num": 1
          },
          {
            "list_id": 6,
            "list_name": "共照产积结",
            "level": 1,
            "head_img": "http://dummyimage.com/90x90/f2e579",
            "list_personNum": 8114,
            "list_postNum": 679061,
            "num": 1
          },
          {
            "list_id": 7,
            "list_name": "华青",
            "level": 1,
            "head_img": "http://dummyimage.com/90x90/c279f2",
            "list_personNum": 40310,
            "list_postNum": 2064310,
            "num": 1
          },
          {
            "list_id": 8,
            "list_name": "共接省",
            "level": 1,
            "head_img": "http://dummyimage.com/90x90/79f29f",
            "list_personNum": 44763,
            "list_postNum": 2129223,
            "num": 1
          },

        ],
        addTb: ""
      }
    },
    created() {
      var _this = this;
      var tiebalibiao
      // 获取所有的贴吧数据
      this.$http.get('http://localhost:8081/tiebaList')
        .then(function (data) {
          /*console.log(data)*/
          _this.tiebaList = data.data
        })
    },
    methods: {
      changeAll() {
        if (this.isAll == false) {
          this.isAll = true
        } else if (this.isAll == true) {
          this.isAll = false
        }
      },
      changeEdit() {
        if (this.isEdit == false) {
          this.isEdit = true
        } else if (this.isEdit == true) {
          this.isEdit = false
        }
      },
      TanCShow() {
        this.isTanC = true
      },
      TanCHidden() {
        this.isTanC = false
      },
      del(index) {
        this.tiebaLists.splice(index, 1)
      },
      add() {
        var obj = {
          list_name: this.addTb,
          level: 1
        }
        this.tiebaLists.push(obj)
      },

    }
  }
</script>
<style>
  .out-tanChuang {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    position: fixed;
    top: 0;
    z-index: 10;
  }

  .tanChuang {
    width: 28.2rem;
    height: 12.7em;
    margin-top: 23rem;
    margin-left: 2rem;
    background-color: #F2F2F2;
    border-radius: .5rem;
  }

  .in-tanChuang > div:nth-child(1) {
    line-height: 3.7rem;
    height: 3.7rem;
    border-bottom: .1rem dotted gray;
    text-indent: 2rem;
  }

  .in-tanChuang > div:nth-child(1) > div {
    float: right;
    color: white;
    font-size: 3rem;
    margin-right: -1.5rem;
    margin-top: -1.5rem;
  }

  .in-tanChuang > div:nth-child(1) > span {
    font-weight: bold;
    font-size: 1.6rem;
  }

  .in-tanChuang > div:nth-child(2) {
    margin-top: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .in-tanChuang > div:nth-child(2) > span {
    font-size: 1.2rem;
  }

  .in-tanChuang > div:nth-child(2) > input {
    margin-top: .5rem;
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
  }

  .in-tanChuang > div:nth-child(2) > button {
    margin-top: 1rem;
    margin-left: 3rem;
    color: white;
    width: 18.2rem;
    height: 2.6em;
    background-color: #3B89F6;
    border: 0;

  }

  a {
    color: #23527C;
  }

  .region-foot {
    width: 100%;
    height: 3.8rem;
    /*background-color: red;*/
    font-size: 1.3rem;
    color: #B5A8B4;
    text-align: center;
    line-height: 3.8rem;
  }

  .region-foot > span {
    width: 1.4rem;
    height: 1.4rem;
  }

  .tieba-list {
    width: 100%;
    display: flex;
    height: 20.4rem;
    flex-flow: row wrap;
    overflow: hidden;
    margin: 0;
  }

  .tieba-list > a {
    width: 14.8rem;
    height: 4.3rem;
    background-color: #EFF1F3;
    margin-top: .8rem;
    margin-left: .8rem;
    margin-right: .8rem;
    border: .1rem solid #EAEBEC;
    border-radius: .3rem;
  }

  .tieba-list > a:nth-child(2n) {
    margin-left: 0;
    margin-right: 0;
  }

  .tieba-list > a > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row;
    position: relative;
    text-align: center;
  }

  .tieba-list > a > div > div {
    position: absolute;
    left: 1rem;
    color: #000;
    line-height: 4.3rem;
  }

  .tieba-list > a > div > i {
    float: left;
    color: white;
    font-size: 1rem;
    border: .3rem solid #616263;
    border-radius: 50%;
    background-color: #616263;
    position: absolute;
    left: -.8rem;
    top: -.7rem;
  }

  .tieba-list-all > a > div > i {
    float: left;
    color: white;
    font-size: 1rem;
    border: .3rem solid #616263;
    border-radius: 50%;
    background-color: #616263;
    position: absolute;
    left: -.8rem;
    top: -.7rem;
  }

  .tieba-list > a > div > span {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    color: white;
    line-height: 2.3rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    background-image: url("../assets/img/tb_chengsedengji.png");
    background-repeat: no-repeat;
    background-size: 90% 80%;
    background-position: 50% 100%;
  }

  .tieba-list-all {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    overflow: hidden;
    margin: 0;
  }

  .tieba-list-all > a {
    width: 14.8rem;
    height: 4.3rem;
    background-color: #EFF1F3;
    margin-top: .8rem;
    margin-left: .8rem;
    margin-right: .8rem;
    border: .1rem solid #EAEBEC;
    border-radius: .3rem;
  }

  .tieba-list-all > a:nth-child(2n) {
    margin-left: 0;
    margin-right: 0;
  }

  .tieba-list-all > a > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row;
    position: relative;
    text-align: center;
  }

  .tieba-list-all > a > div > div {
    text-indent: 1rem;
    color: #000;
    line-height: 4.3rem;
  }

  .tieba-list-all > a > div > span {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    color: white;
    line-height: 2.3rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    background-image: url("../assets/img/tb_chengsedengji.png");
    background-repeat: no-repeat;
    background-size: 90% 80%;
    background-position: 50% 100%;
  }

  .region-head {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    height: 2.9rem;
    font-size: 1.2rem;
    line-height: 2.9rem;
    color: #B5A8B4;
    background-color: #F4F6F8;
    border-bottom: .1rem solid #EAEBEC;
  }

  .add-a {
    position: absolute;
    right: 6.5rem;
  }

  .edit-a {
    float: right;
  }
</style>
