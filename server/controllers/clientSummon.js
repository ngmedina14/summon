const mysql2 = require('mysql2'); // get the client
const dotenv = require('dotenv');
const bcrypt = require('bcrypt')

// setup hidden config for database
dotenv.config({path:'./.env'})

// create the connection to database
const db = mysql2.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
  });


  exports.addAppointment = ((req,res)=>{
    console.log(req.body);
    const { headCount, bookingDate, notes, latitude,longitude,user,location_name } = req.body;
    let appointment = {
      user_id: user,
      latitude:latitude,
      longitude:longitude,
      location:location_name,
      booking_date: bookingDate,
      head_count: headCount,
      notes: notes,
      status: 0,
    };
    db.query('insert into appointments set ?',
    appointment,
    (err,result)=>{
      if (err){console.log("db Add:"+err.message)
      res.status(422);
      res.json({"Error":"db Add:"+err.message})
    }
      else{
        res.status(200);
        res.json({"appointment_id":result.insertId})
      }})
  })

  exports.checkAppointment = ((req,res)=>{
    const appointment_id = req.params.appointment_id;
    db.query('select * from transactions where appointment_id = ?',appointment_id,
    (error,row)=>{
      if (error){console.log("check appointment:"+error.message)
      res.status(422);
      res.json({"Error":"check appointment:"+error.message})
    }

    if (row.length > 0){
        res.status(200);
        res.json({"result":row[0]})
      }else{
        res.status(422);
        res.json({"message":"still pending"})
      }
    })
  })

  exports.checkCompletedTransaction = ((req,res)=>{
    const transaction_id = req.params.transaction_id;
    db.query('select * from transactions where transaction_id = ? AND completed = 1',transaction_id,
    (error,row)=>{
      if (error){console.log("check transaction complition:"+error.message)
      res.status(422);
      res.json({"Error":"check transaction complition:"+error.message})
    }

    if (row.length > 0){
        res.status(200);
        res.json({"message":"transaction completed"})
      }else{
        res.status(422);
        res.json({"message":"still pending"})
      }
    })
  })

  exports.getHistory = ((req,res)=>{
    const user_id = req.params.user_id
    db.query('select u.first_name as client_fname, u.last_name as client_lname ,'+
    'a.latitude as client_lat, a.longitude as client_long, a.location, a.head_count, a.notes,a.booking_date,'+
    ' t.total_amount,	d.first_name as driver_fname, d.last_name as driver_lname, u.mobile as user_mobile,'+
    ' d.mobile, d.plate_number, v.name as vehicle, td.latitude as toda_lat, td.longitude as toda_long, td.location as toda_loc, t.transaction_id '+
    ' FROM summon.transactions t	inner join users u on t.user_id = u.user_id '+
    'inner join appointments a on t.appointment_id = a.appointment_id '+
    'inner join drivers d on t.driver_id = d.driver_id '+
    'inner join vehicles v on d.vehicle_id = v.vehicle_id '+
    'inner join todas td on td.toda_id = d.toda_id '+
    'where t.user_id = ?', user_id,
    (error,row)=>{
      if (error){console.log("get transaction:"+error.message)
      res.status(422);
      res.json({"Error":"get transaction:"+error.message})
      }
      if (row.length > 0){
          res.status(200);
          res.json({"result":row});
      }else{
        res.status(200);
        res.json({"message":"No Result"});
      }
    })
    })  