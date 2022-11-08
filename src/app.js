const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require("./db/connection");
const collectionName = require("../src/models/schema");
const port = process.env.PORT || 5000;

///////////////////////////////////////////////////////////
const staticPath = path.join("__dirname", "../public");
const viewsPath = path.join("__dirname", "../templates/views")
const partialsPath = path.join("__dirname" , "../templates/partials");
/////////////////////////////////////////////////////////////////

app.set("view engine", "hbs");
app.set("views" , viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticPath));

app.get("/", (req , res)=>{
    res.render("index");
 })

app.get("/home", (req , res)=>{
   res.render("index");
})

app.get("/webdesign", (req , res)=>{
    res.render("webdesigning");
})

app.get("/webDevelopment", (req , res)=>{
    res.render("webDevelopment");
})

app.get("/graphicDesigning", (req , res)=>{
    res.render("graphicDesigning");
})

app.get("/about", (req , res)=>{
    res.render("about");
})


app.post("/contact", async(req, res)=>{
    try{
        const userData = new collectionName(req.body);
        await userData.save();
        res.status(201).render("index");
    }catch(error){
        res.send(error);
    }
})

app.listen(port , (err)=>{
    console.log(`server is running at port not ${port}`);
})