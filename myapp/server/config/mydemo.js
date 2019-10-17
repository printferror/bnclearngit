var mysql = require('mysql');
var connection = mysql.createConnection({
  // http://106.54.52.67:888/phpmyadmin_274e7e769305cb44/index.php
  host     : '106.54.52.67',
  user     : 'xuguodong',
  password : 'xuguodong',
  database : 'xuguodong'
});
module.exports = connection
