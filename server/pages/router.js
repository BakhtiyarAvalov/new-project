const express = require('express')
const router = express.Router();


router.get('/', async(req, res) =>{
    res.render("login.ejs")
})

router.get('/login', (req, res)=>{
    res.render("login.ejs")
})

router.get('/register', (req, res)=>{
    res.render("register.ejs")
})

router.get('/profile/:id', async(req, res)=>{

    // if(user){
    //     res.render("profile.ejs")
    // }else{
    //     res.redirect('/not-found')
    // }
});

router.get('/new', async(req, res)=>{
    res.render("new.ejs")
})

router.get('/edit/:id', async(req, res)=>{
    res.render("edit.ejs")
})

router.get('/not-found', (req, res)=>{
    res.render("notFound.ejs")
})

router.get('/detail/:id', async(req, res)=>{
    res.render("detail.ejs")
})

module.exports = router