const express = require('express')

const Blockchain = require('../blockchain')
const bodyParser = require('body-parser')

const app = express()
const bc = new Blockchain();

const HTTP_PORT = process.env.HTTP_PORT || 3001

app.get('/blocks',(req,res)=>{
    res.json(bc.chain)
})
app.use(bodyParser.json())

app.post('/mine',(req,res)=>{
    const block = bc.addBlock(req.body.data);
    console.log(`New block added: ${block.toString()}`)
    // res.redirect('/blocks')
    res.json({note: "Block added successfully", block})
})


app.listen(HTTP_PORT,()=> console.log(`Listening on port ${HTTP_PORT}`))
