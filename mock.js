// 使用 Mock
var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
  // 首页所有列表贴吧数据
  'tiebaList|20-30': [
    {
      'list_id|+1': 1,
      'list_name': '@ctitle(1,6)',
      'level|1-15': 200,
      /*'describe': '@csentence()',*/
      // 贴吧内部的贴吧头像
      "head_img": "@image(90x90,@color)",
      'list_personNum|50-50000': 200,
      'list_postNum|50-5000000': 200,
      /*'classify|0-2': 200,*/
      'num': 1
    }
  ],
  // 首页第一类感兴趣的贴吧
  'interest|3': [
    {
      'in_id|+1': 1,
      'in_name': '@ctitle(1,6)',
      // 首页展示的大图
      "in_img": "@image(60x60,@color)",
      'in_personNum|50-50000': 200,
      'in_postNum|50-5000000': 200,
      'num': 1
    }
  ],
  // 首页第二类感兴趣的贴吧
  'interesttwo|3': [
    {
      'in_id|+1': 1,
      'in_name': '@ctitle(1,6)',
      // 首页展示的大图
      "in_img": "@image(60x60,@color)",
      'in_personNum|50-50000': 200,
      'in_postNum|50-5000000': 200,
      'num': 1
    }
  ],
  // 发现页贴吧第一类分类贴吧推荐
  'discoverOne|4': [
    {
      'dis_id|+1': 1,
      'dis_name': '@ctitle(1,6)',
      // 发现展示的小图
      "dis_img": "@image(32x32,@color)",
      'classify': 0,
      'num': 1
    }
  ],
  // 发现页贴吧第二类分类贴吧推荐
  'discoverTwo|4': [
    {
      'dis_id|+1': 1,
      'dis_name': '@ctitle(1,6)',
      // 发现页展示的小图
      "dis_img": "@image(32x32,@color)",
      'classify': 1,
      'num': 1
    }
  ],
  // 发现页贴吧展示分类
  'tiebaClassify': [
    {id:1,cla_name:'小众癖好'},
    {id:2,cla_name:'以棋会友'},
  ],
  // 发现页贴吧热议
  'tiebaHot|7': [
    {
      'hot_id|+1': 1,
      'hot_title': '@ctitle(8)',
      'num': 1
    }
  ],
  // 发现轮播图
  // 看帖页前三条热点新闻
  'tiebaHotNews|3': [
    {
      'hotNews_id|+1': 1,
      'hotNews_title': '@ctitle(10)',
      'hot_details':'@ctitle(16,30)',
      "hotNews_img": "@image(70x70,@color)",
      'num': 1
    }
  ],
  // 看帖页后30条榜单新闻
  'tiebaNews|30': [
    {
      'news_id|+1': 1,
      'news_title': '@ctitle(16)',
      'news_img1':"@image(98x98,@color)",
      'news_img2':"@image(98x98,@color)",
      'news_img3':"@image(98x98,@color)",
      'num': 1
    },
  ],
  //发现页最新动态
  'dynamic':[
    {
      'dynamic_id|+1':1,
      'dynamic_title':'@ctitle(16)',
      'dynamic_details':'@ctitle(20,40)',
      'dynamic_comment|1-99':200,
      'dynamic_like|1-99':200,
      'dynamic_name':'@ctitle(1,6)',
    }
  ],
  // 我关注的贴吧
  'favorite': []
})
// 写入到db.json
fs.writeFile('db.json', JSON.stringify(data, null, 4), function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("数据写入成功！");
});
