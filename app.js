//1. Depenencies
const express = require('express');
const expressionSession = require('express-session');
const path = require('path');

//2. Instantiations
const app = express();
const port = 4000;

//3.Configurations
//set up templating engine to pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


//4. Middleware
app.use(express.static(path.join(__dirname,'public')));
//To parse URL encoded data
app.use(express.urlencoded({extended:false}));//very important
app.use(
    expressionSession({
        secret:"My app secrets",
        resave: false,
        saveUninitialized:false,
    })
);

// 5.Routes
app.use('/',require('./routes/index'))
app.use('/',require('./routes/login'))
app.use('/',require('./routes/password'))
app.use('/',require('./routes/dashboard'))
app.use('/',require('./routes/messages'))

//second last code 
app.use((req,res)=>{
    res.status(404).send("Oops, route not found.")
});

//last piece of code
app.listen(port, ()=> console.log(`Listening on my port ${port}`))