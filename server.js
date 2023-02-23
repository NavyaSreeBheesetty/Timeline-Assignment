const express = require('express')
const fs=require('fs')
const app = express()
// let date;
// let time;

app.use(express.urlencoded({ extended: true }))

app.use('/', express.static("view"))


app.post('/getData', (req, res) => {
//debugger
    task=req.body
   
    //  if(req.body.hour=="12")
    // {
    let iDate=   (req.body.time.substring(2,10))
    let iTime=  (req.body.time.substring(11))
    let min= (req.body.time.substring(14))
    let totalTime
            if(parseFloat(iTime)>12)
            {
                iTime=parseFloat(iTime)-12
                 totalTime=(iTime+":"+min+"PM")
            }
            else{
                totalTime=(iTime+"AM")
            }
           
        totalDateTime=iDate+" "+totalTime
        console.log(totalDateTime)
        // console.log(typeof(totalDateTime))
        req.body.totalDateTime=totalDateTime
        // console.log(req.body)

        //  }
    // res.send(req.body)
    fs.readFile('./task.json', 'utf8', function (err, data) {
        if (err) throw err;

        var obj = JSON.parse(data)

        obj.tasks.push(task)
        // obj.sort(function (a, b) {
        //     return a.time.localeCompare(b.time);
        //   });
        
       
        
        obj = JSON.stringify(obj)
        fs.writeFile('./task.json', obj, function (err) {
            if (err) throw err;
        });
        res.redirect('/')
    });
}) 
app.get('/getapi',(req,res)=>{
    fs.readFile('./task.json','utf8',function(err,data){
        if(err) throw err;
        var obj=JSON.parse(data)
        res.send(obj)
    });
})
app.listen(2000, (req, res) => {
    console.log("listening on port http://localhost:2000")
})

