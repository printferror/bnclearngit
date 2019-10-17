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


//文章展示
// 接口名称:getAticle
// 方法：get
router.get('/getArticle', function(req, res, next) {
  var sql= `select * from mydemo`
  // 连接
  mysql.query(sql,(err,rows) => {
    if(err){
      throw err
    } else if(rows){
      res.send(rows)
    }else{
      res.send({
        success:'服务端错误',
        code:500
      })
    }
  })
});


//修改文章
// 参数id title summary content author date
// 接口名称:gaiAticle
// 方法：post
router.post('/gaiArticle', function(req, res, next) {
  var data=[
    req.body.title,
    req.body.summary,
    req.body.content,
    req.body.author,
    req.body.date,
    req.body.id
  ]
  var sql= `update mydemo set title = ?,summary = ?,content = ?,author = ?,date = ?  where id = ?`
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


//删除文章
// 参数id title summary content author date
// 接口名称:delAticle
// 方法：delete
router.delete('/delArticle', function(req, res, next) {
  var data=[
    req.body.id
  ]
  var sql= `delete from mydemo where id = ?`
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
