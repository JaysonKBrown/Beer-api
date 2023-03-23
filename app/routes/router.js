const express = require('express')
const router = express.Router()

router.use(express.static("public"))

const stoutsRoutes = require('./api/stoutsRoutes')
router.use('/stouts', stoutsRoutes)

const aleRoutes = require('./api/aleRoutes')
router.use('/ale', aleRoutes)


router.get('/', (req,res)=>{
    res.render('pages/home', {
        title: 'Home',
        name: 'Coding is a Lager Fun',
    })
})
// Build a home page

router.get('*', (req,res)=> {
    if (req.url == '/favicon/ico') {
        res.end()
    } else {
        res.render('pages/404', {
            title: '404 Error',
            name: '404 Error'
        })
    }
})
// Build an error page 

module.exports = router