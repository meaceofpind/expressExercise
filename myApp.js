let express = require('express');
const res = require('express/lib/response');
let app = express();
let bodyParser = require('body-parser')
require('dotenv').config();
app.use(bodyParser.urlencoded({extended: false}));
app.use((req,res,next)=>{
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
})

publicPath = __dirname + "/public"
app.use("/public",express.static(publicPath));
indexPath = __dirname + '/views/index.html'
app.get("/",(req,res)=>{
    res.sendFile(indexPath);
});
app.get("/json", (req,res) =>{
    if(process.env.MESSAGE_STYLE == "uppercase")
        res.json({"message": "HELLO JSON"})
    else
        res.json({"message": "Hello json"});
})
app.get("/now",(req,res,next)=>{
    req.time=new Date().toString();
    next();
},(req,res)=>{
    res.json({"time":req.time});
})

app.get("/:word/echo",(req,res)=>{
    res.json({"echo":req.params.word});
})

app.get("/name",)

app.route("/name").get((req,res)=>{
    res.json({"name":req.query.first+" "+req.query.last});
}).post((req,res)=>{
    res.json({"name":req.body.first+" "+req.body.last});
})



































 module.exports = app;
