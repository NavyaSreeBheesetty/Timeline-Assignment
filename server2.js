const express = require('express')
const fs=require('fs')
const app = express()
// let date;
// let time;
admin=[{"username":"Navya","password":"Navya@2805",
    "tasks": [
      {
        "time": "2023-02-21T10:30",
        "task": "Team call",
        "totalDateTime": "23-02-21 10:30AM"
      },
      {
        "time": "2023-02-21T11:00",
        "task": "Assignment",
        "totalDateTime": "23-02-21 11:00AM"
      },
      {
        "time": "2023-02-21T14:00",
        "task": "project",
        "totalDateTime": "23-02-21 2:00PM"
      },
      {
        "time": "2023-02-21T18:00",
        "task": "project review",
        "totalDateTime": "23-02-21 6:00PM"
      }
    ]
  }]

app.use(express.urlencoded({ extended: true }))

// app.use('/', express.static("view"))
app.get('/',(req,res)=>{
    res.sendFile('C:/Users/user/OneDrive/Desktop/TIMELINE/user.html')
})

app.post("/getUser",(req,res)=>{
    if(req.body.username==admin[0].username)
    {
        if(req.body.password===admin[0].password)
        {
           res.redirect('./view')
        }
        else{
            res.send("Incorrect password")
        }
    }
    else{
        res.send("incorrect username")
    }    
})

app.post('/getData',(req,res)=>{
  // admin[0]["tasks"].push(req.body)
  // res.send(admin[0]["tasks"])
  
  task=req.body
  console.log(req.body)
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
      console.log(req.body)
})


app.use('/view',express.static('./view'))
app.listen(9000,(req,res)=>
{
    console.log("Server running on port 9000")
})