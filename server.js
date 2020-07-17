require("dotenv").config();
const express = require("express")
const app = express()
const indexRouter = require("./routes/index")
const bodyParser = require("body-parser") 
const session = require('express-session');
const flash = require('connect-flash');



app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());



app.use("/", indexRouter)






app.listen(process.env.PORT || 3000)
