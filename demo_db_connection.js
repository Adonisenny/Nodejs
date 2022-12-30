
var express = require('express')
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydatabase5", function (err, result) {
        if (err) throw err;
        console.log("Database created");
      });
  });