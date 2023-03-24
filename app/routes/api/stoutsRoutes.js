const express = require('express')
const router = express.Router()

const axios = require('axios')
const url = 'https://api.sampleapis.com/beers/stouts'
const brew = 'stouts'
let count

router.get('/', (req,res)=> {
    axios.get(url).then(data => {
        // console.log(data.data)
        const beers = data.data
        count = beers.length
        // console.log(data)
        res.render('pages/beers', {
            title: 'Stouts',
            name: 'All of our Stouts',
            beers,
            brew,
            count
        })
    })
})

router.get('/:id', (req,res)=> {
    const id = req.params.id

    axios.get(`${url}/${id}`).then(data => {
        const beer = data.data
        res.render('pages/beer-single', {
            title: `${beer.name}`,
            name: `${beer.name}`,
            beer,
            brew,
            count
        })
    })
})

module.exports = router