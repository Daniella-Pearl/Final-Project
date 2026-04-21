const express = require('express');
const expressSession = require('express-session');
const path = require('path')

//installations
const app = express()
const port = 4000;

// parse url encoded data
app.use(express.urlencoded({extended:false})); //very important
app.use(
    expressSession({
        secret:"My secrets",
        resave: false,
        saveUninitialized: false,
    })
);

//static files
app.use(express.static(path.join(__dirname,'public')))


app.use("/about", (req, res, next) => {
  console.log("A new request received at " + Date.now());
  next();
});


//serving html files
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/html/landingPage.html")
})

app.get('/register',(req,res)=>{
    res.sendFile(__dirname + "/html/register.html")
})

app.post('/register',(req,res)=>{
    console.log(req.body)
})

app.get("/customer",(req,res)=>{
    res.sendFile(__dirname + "/html/newCustomer.html")
});
app.post("/customer",(req,res)=>{
    console.log(req.body)
})


//second last piece of code
app.get((req,res)=>{
    res.status(404).send("Error, page not found")
});

//last chunk of code
app.listen(port,()=>console.log(`Listening on port ${port}`));