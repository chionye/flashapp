const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(bodyParser.urlencoded({extended: true}));


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"delivery",
});

app.post("/controller/api/common/selectOneByColumn", (req, res)=>{
    console.log(req.body)
    // const table = req.body.table;
    // db.query(`SELECT * FROM ${table}`,(err, results)=>{
    //     if(err){
    //         res.status(500);
    //     }else{
    //         if (results.length > 0) {   
    //             res.send(results);
    //         }else{
    //             res.status(400);
    //         }   
    //     }
    // })
})

app.listen(8080, ()=>{console.log("connected")});