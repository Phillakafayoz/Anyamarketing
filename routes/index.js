const express = require("express")
const router = express.Router()
const api_key = process.env.API_KEY
const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox60261319f1d64f4a9cafd0820f22ec41.mailgun.org';
const mg = mailgun({apiKey: api_key, domain: DOMAIN});

router.get("/", (req, res) => {
    res.render("index")
})
router.get("/rus", (req, res) => {
    res.render("index_rus")
})
router.get("/about", (req, res) => {
    res.render("about")
})
router.get("/about_rus", (req, res) => {
    res.render("about_rus")
})
router.get("/author", (req, res) => {
    res.render("author")
})
router.get("/author_rus", (req, res) => {
    res.render("author_rus")
})
router.get("/blog", (req, res) => {
    res.render("blog")
})
router.get("/blog_rus", (req, res) => {
    res.render("blog_rus")
})
router.get("/coming-soon", (req, res) => {
    res.render("coming-soon")
})
router.get("/coming-soon_rus", (req, res) => {
    res.render("coming-soon_rus")
})
router.get("/services", (req, res) => {
    res.render("services")
})
router.get("/services_rus", (req, res) => {
    res.render("services_rus")
})
//get contact
router.get("/contact", (req, res) => {
    res.render("contact")
})
router.get("/contact_rus", (req, res) => {
    res.render("contact_rus")
})

//post contact
router.post("/contact", (req, res) => {
    const data = {
        to: 'fayozbokhodirov@gmail.com',
        from: req.body.email,       
        subject: req.body.subject,
        text: req.body.message,
        
    };
    mg.messages().send(data, function (error, body) {
        if(error){
            console.log(error);
            
        }
        console.log(body);
    });
 
    res.redirect("/")
})
//post contact
router.post("/contact_rus", (req, res) => {
    const data = {
        to: 'fayozbokhodirov@gmail.com',
        from: req.body.email,       
        subject: req.body.subject,
        text: req.body.message,
        
    };
    mg.messages().send(data, function (error, body) {
        if(error){
            console.log(error);
            
        }
        console.log(body);
    });
 
    res.redirect("/")
})



module.exports = router