const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db;
var q;

MongoClient.connect('mongodb://localhost:27017/RestaurantInventory', (err, database) => 
{
    if(err) return console.log(err)
    db = database.db('RestaurantInventory')
    app.listen(5000, () => 
    {
        console.log('Listening at port number 5000')
    })
})


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req,res)=>
{
    db.collection('kitchen').find().toArray((err,result)=>
    {
        if(err) return console.log(err)
    res.render('homepage.ejs', {data: result})
    })
})
app.get('/create', (req,res)=>
{
    res.render('add.ejs')
})

app.get('/updatequantity', (req,res)=>
{
    res.render('update.ejs')
})

app.get('/deleteitem', (req,res)=>
{
    res.render('delete.ejs')
})

app.post('/AddData', (req,res)=>
{
    db.collection('kitchen').save(req.body, (err, result)=>
    {
        if(err) return console.log(err)
    res.redirect('/')
    })
})

app.post('/update', (req,res)=>
{
    db.collection('kitchen').find().toArray((err,result) => 
    {
        if(err)
            return console.log(err)
        for(var i=0;i<result.length;i++)
        {
            if(result[i].ItemID==req.body.ID)
            {
                q = result[i].Quantity
                break
            }
         }

        db.collection('kitchen').findOneAndUpdate({ItemID: req.body.ID}, 
        {
            $set: {Quantity: parseInt(q) + parseInt(req.body.Quantity)}}, {sort: {_id: -1}},
            (err, result) => 
            {
                if(err)
                    return res.send(err)
                console.log(req.body.ID+' Quantity updated')
                res.redirect('/')
            })  
    })
})
app.post('/delete', (req,res) => {
    db.collection('kitchen').findOneAndDelete({ItemID: req.body.ID}, (err,result)=>{
        if(err)
            return console.log(err)
        res.redirect('/')
    })
})

