var express = require('express');
var router = express.Router();

var mysql = require('../config/mydemo')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("success")
});

//发布文章
// 参数id title summary content author date
// 接口名称:subAticle
// 方法：post
router.post('/subArticle', function(req, res, next) {
  console.log(req.body)
  var data=[
    req.body.id,
    req.body.title,
    req.body.summary,
    req.body.content,
    req.body.author,
    req.body.date
  ]
  var sql= `insert mydemo (id,title,summary,content,author,date) value (?,?,?,?,?,?)`
  // 连接
  mysql.query(sql,data,(err,rows) => {
    if(err){
      throw err
    } else{
      res.send("success")
    }
    
  })
  // res.send(data)
});

module.exports = router;
