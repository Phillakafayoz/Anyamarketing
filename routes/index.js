const express = require("express")
const router = express.Router()
var api_key = '448784ad0ac9c5ec292343094b90f2bb-468bde97-e30e9d76';
var domain = 'sandbox3dc8f04b83e8459e95d1c9b3ae77947f.mailgun.org';
const mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });
const flash = require("connect-flash")

router.get("/", (req, res) => {
    res.render("index")
})
router.get("/about", (req, res) => {
    res.render("about")
})
router.get("/author", (req, res) => {
    res.render("author")
})
router.get("/blog", (req, res) => {
    res.render("blog")
})
router.get("/coming-soon", (req, res) => {
    res.render("coming-soon")
})
router.get("/services", (req, res) => {
    res.render("services")
})
router.get("/top-seller", (req, res) => {
    res.render("top-seller")
})
//get contact
router.get("/contact", (req, res) => {
    res.render("contact")
})
//post contact
router.post("/contact", (req, res) => {
    const data = {
        to: 'fayoz9876@gmail.com',
        from: req.body.email,       
        subject: req.body.subject,
        text: req.body.message,
        
    };
    mailgun.messages().send(data, function (error, body) {
        if (error) {
            console.log(error);
            
        }
        console.log(body);
               
    });
    res.redirect("/")


   


})



module.exports = router