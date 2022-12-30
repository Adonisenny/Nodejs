var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "mydatabase2"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO myblog2 (title,snippet) VALUES ? ";
  var values =[
     
    ['i love you, you said you love me too','That is the way how I roll'],
        ['i do not love hate, you said you love me too','That is the what I am told'],
        ['call me when you need me','That is all you need to know']
  ];
  con.query(sql,[values], function (err, result) {
    if (err) throw err;
    console.log("no of record inserted " + result.affectedRows);
  });
});
