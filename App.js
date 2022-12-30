
const express = require('express');
const morgan = require('morgan');
// const mongoose = require('mongoose')
const { dirname } = require('path');
let mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydatabase7", function (err, result) {
        if (err) throw err;
        console.log("Database created");
      });
  });


const app = express()
//connect to mongo db
// const dburi = 'mongodb+srv://Node-phil:Genuine1@cluster0.lhbenjf.mongodb.net/?retryWrites=true&w=majority'
// mongoose.connect(dburi)
// .then((result) => console.log('connected to db'))
// .catch((err) => console.log(err))


app.set('view engine','ejs')
app.listen(3001);
//middleware and static file
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
// app.get('/', (req,res) => {
//     res.sendFile('./views/index.html',root:__dirname})
// }
// )
// app.get('/aboutMe', (req,res) => {
//     res.sendFile('./views/aboutMe.html',{root:__dirname})
    
// }
// )
// app.use((req,res) => {
//     res.status(404).sendFile('./views/404.html',{root:__dirname})
    
// }
// )


app.get('/', (req,res) => {
    const blogs = [
        {title:'i love you, you said you love me too',snippet:'That is the way how I roll'},
        {title:'i do not love hate, you said you love me too',snippet:'That is the what I am told'},
        {title:'call me when you need me',snippet:'That is all you need to know'}
    ];
    res.render('index', {title:'Home',blogs})
}
)
app.get('/aboutMe', (req,res) => {
    res.render('aboutMe',{title:'aboutMe'})
    
}
)
app.get('/blogs/create',(req,res)=> {
    res.render('create',{title:'create'})
})
app.use((req,res) => {
    res.status(404).render('404',{title:'404'})
    
}
)