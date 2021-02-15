const express = require("express");
const app = express();
const router=express.Router();
const connection = require('../../model/database');


connection.connect((err)=>{
    if(err)throw err;
    console.log("successfully connected");
})

//Q1//

router.get('/Q1',function(req,res){
    console.log("hii");
    connection.query('select * from exam_mark',(err,result)=>
    {
        console.log("got the values");
        res.render('Q1',{data:result});
    })
})

//Q2//

router.get('/Q2',function(req,res){
    console.log("hiii2");
    connection.query('select * from products_details where price >16000',(err,result)=>{
        console.log("got the values");
        res.render('Q2',{data:result});
    })
})

//Q3//

router.get('/Q3',function(req,res){
    console.log("hiii3");
    connection.query('select country,high,low from temperature',(err,result) => {
        console.log(result);
        res.render('Q3',{data:result});
    })
})

module.exports = router;