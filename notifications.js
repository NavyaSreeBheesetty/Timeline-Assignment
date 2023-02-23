// npm install nodemailer

const express=require("express")
const app=express()
const fs=require('fs')

const nodemailer = require('nodemailer');
 app.use(express.urlencoded({ extended: true }))

 app.use('/', express.static("view"))



    let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: '319114110007@andhrauniversity.edu.in',
        pass: 'jtuclmcvewxlmfjd'
    }
});



app.post('/getData', (req, res) => {
    // debugger
    setTimeout(3000,()=>{
    let mailOptions = {
        from: '319114110007@andhrauniversity.edu.in',
        to: 'navyasree2805@gmail.com',
        subject: 'Subject of your email',
        text: 'Content of your email'
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
// });
    })

//  app.post('/getData',(req,res)=>{




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
// }) 
app.get('/getapi',(req,res)=>{
    fs.readFile('./task.json','utf8',function(err,data){
        if(err) throw err;
        var obj=JSON.parse(data)
        res.send(obj)
    });
})


})





app.listen(4001,(req,res)=>{
    console.log("Hello I am server")
})












// const nodemailer = require('nodemailer');

// // create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: '319114110007@andhrauniversity.edu.in',
//         pass: 'jtuclmcvewxlmfjd'
//     }
// });


// app.post('/getData', (req, res) => {
//     // extract form data from request body
//     const { task,time } = req.body;  //here task and time are names in the form 

//     // create email message
//     let mailOptions = {
//         from: '319114110007@andhrauniversity.edu.in',
//         to: 'navyasree2805@gmail.com',
//         subject: 'New message from your website',
//         text: `Task: ${task}}\nTime: ${time}`
//     };

//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             res.status(500).send('Error sending email');
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.status(200).send('Email sent successfully');
//         }
//     });
// });



// {/* <form action="/submit-form" method="post">
//     <label for="name">Name:</label>
//     <input type="text" id="name" name="name" required>
//     <br>
//     <label for="email">Email:</label>
//     <input type="email" id="email" name="email" required>
//     <br>
//     <label for="message">Message:</label>
//     <textarea id="message" name="message" required></textarea>
//     <br>
//     <button type="submit">Submit</button>
// </form> */}




//server.js code


// const express = require('express')
// const fs=require('fs')
// const app = express()
// // let date;
// // let time;

// app.use(express.urlencoded({ extended: true }))

// app.use('/', express.static("view"))

//  app.post('/getData', (req, res) => {

//     debugger
//     task=req.body
//     console.log(req.body)
//     let iDate=   (req.body.time.substring(2,10))
//     let iTime=  (req.body.time.substring(11))
//     let min= (req.body.time.substring(14))
//     let totalTime
//             if(parseFloat(iTime)>12)
//             {
//                 iTime=parseFloat(iTime)-12
//                  totalTime=(iTime+":"+min+"PM")
//             }
//             else{
//                 totalTime=(iTime+"AM")
//             }
           
//         totalDateTime=iDate+" "+totalTime
//         console.log(totalDateTime)
//         // console.log(typeof(totalDateTime))
//         req.body.totalDateTime=totalDateTime
//         console.log(req.body)

     
//     // res.send(req.body)
//     fs.readFile('./task.json', 'utf8', function (err, data) {
//         if (err) throw err;

//         var obj = JSON.parse(data)

//         obj.tasks.push(task)
//         // obj.sort(function (a, b) {
//         //     return a.time.localeCompare(b.time);
//         //   });
        
       
        
//         obj = JSON.stringify(obj)
//         fs.writeFile('./task.json', obj, function (err) {
//             if (err) throw err;
//         });
//         res.redirect('/')
//     });
// }) 
// app.get('/getapi',(req,res)=>{
//     fs.readFile('./task.json','utf8',function(err,data){
//         if(err) throw err;
//         var obj=JSON.parse(data)
//         res.send(obj)
//     });
// })
// app.listen(3000, (req, res) => {
//     console.log("listening on port http://localhost:3000")
// })























// app.post('/getData', (req, res) => {
//     const nodemailer = require('nodemailer');
   
// create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     service: 'smtp.gmail.com',
//         port:465,
//         secure:true,
//     auth: {
//         user: '319114110007@andhrauniversity.edu.in',
//         pass: 'jtuclmcvewxlmfjd'
//     }
// });

//     // extract form data from request body
//     // const { task,time } = req.body;  //here task and time are names in the form 

//     // create email message
//     let mailOptions = {
//         from: '319114110007@andhrauniversity.edu.in',
//         to: 'navyasree2805@gmail.com',
//         subject: 'New message from your website',
//         // text: `Task: ${task}}\nTime: ${time}`
//         text:`Hello Bheesetty Navya Sree a new time and task is added`
//     };

//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             res.status(500).send('Error sending email');
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.status(200).send('Email sent successfully');
//         }
//     });
// });

// app.listen(8000, (req, res) => {
//     console.log("listening on port http://localhost:8000")
// })