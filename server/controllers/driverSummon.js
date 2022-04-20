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


  exports.addTransaction = ((req,res)=>{
    console.log(req.body);
    const { appointment_id, user_id, driver_id, total_amount } = req.body;
    let transaction = {
      appointment_id: appointment_id,
      user_id: user_id,
      driver_id: driver_id,
      total_amount: total_amount
    };
    db.query('insert into transactions set ?',
    transaction,
    (err,result)=>{
      if (err){console.log("add transaction:"+err.message);
      res.status(422);
      res.json({"Error":"add transaction:"+err.message});
    }
      else{
        res.status(200);
        res.json({"transaction_id":result.insertId});
      }})
  })

  exports.pickUpAppointment = (req,res)=>{
    const {appointment_id} = req.body;
    db.query('update appointments set status = 1 where appointment_id = ?',appointment_id,
    (error)=>{ 
      if (error){console.log("update appointment:"+error.message);
      res.status(422);
      res.json({"error":"update appointment:"+error.message});
    }else{
      res.status(200);
      res.json({"message":"successfully updated appointment_id:"+appointment_id});
    }})
  }

  exports.cancelAppointment = (req,res)=>{
    const {appointment_id} = req.body;
    db.query('update appointments set status = 2 where appointment_id = ?',appointment_id,
    (error)=>{ 
      if (error){console.log("cancel appointment:"+error.message);
      res.status(422);
      res.json({"error":"cancel appointment:"+error.message});
    }else{
      res.status(200);
      res.json({"message":"successfully cancel the appointment_id:"+appointment_id});
    }})
  }

  exports.completeTransaction = (req,res)=>{
    const {transaction_id} = req.body;
    db.query('update transactions set completed = 1 where transaction_id = ?',transaction_id,
    (error)=>{ 
      if (error){console.log("complete transaction:"+error.message);
      res.status(422);
      res.json({"error":"complete transaction:"+error.message});
    }else{
      res.status(200);
      res.json({"message":"transaction complete transaction_id:"+transaction_id});
    }})
  }

  exports.checkAppointment = ((req,res)=>{
    const appointment_id = req.params.appointment_id
    db.query('select * from appointments where status = 0 AND appointment_id=?',appointment_id,
    (error,row)=>{
      if (error){console.log("check appointment:"+error.message)
      res.status(422);
      res.json({"Error":"check appointment:"+error.message})
    }

    if (row.length > 0){
      console.log('here')
        res.status(200);
        res.json({"result":row})
      }else{
        res.status(200);
        res.json({"message":"No Result"})
      }
    })
    })

  exports.getAppointment = ((req,res)=>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var dd1 = String(today.getDate()+1).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;
    tomorrow = yyyy + '/' + mm + '/' + dd1;
    db.query('select * from appointments where status = 0 AND booking_date >=?',today,
    (error,row)=>{
      if (error){console.log("check appointment:"+error.message)
      res.status(422);
      res.json({"Error":"get appointment:"+error.message})
    }

    if (row.length > 0){
        res.status(200);
        res.json({"result":row})
      }else{
        res.status(200);
        res.json({"message":"No Result"})
      }
    })
    })
  
    exports.getAdvanceAppointment = ((req,res)=>{
      var today = new Date();
      var dd1 = String(today.getDate()+1).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
  
      tomorrow = yyyy + '/' + mm + '/' + dd1;
      db.query('select * from appointments where status = 0 AND booking_date >=?',[tomorrow],
      (error,row)=>{
        if (error){console.log("check appointment:"+error.message)
        res.status(422);
        res.json({"Error":"get appointment:"+error.message})
      }
  
      if (row.length > 0){
          res.status(200);
          res.json({"result":row})
        }else{
          res.status(200);
          res.json({"message":"No Result"})
        }
      })
      })

  exports.getUser = ((req,res)=>{
    const user_id = req.params.user_id
    db.query('select * from users where user_id=?',user_id,
    (error,row)=>{
      if (error){console.log("get user:"+error.message)
      res.status(422);
      res.json({"Error":"get user:"+error.message})
    }

    if (row.length > 0){
        res.status(200);
        res.json({"result":row[0]})
      }else{
        res.status(422);
        res.json({"message":"No Result"})
      }
    })
    })

    exports.getToda = ((req,res)=>{
      const toda_id = req.params.toda_id
      db.query('select * from todas where toda_id=?', toda_id,
      (error,row)=>{
        if (error){console.log("get user:"+error.message)
        res.status(422);
        res.json({"Error":"get user:"+error.message})
        }
        if (row.length > 0){
            res.status(200);
            res.json({"result":row[0]});
        }else{
          res.status(422);
          res.json({"message":"No Result"});
        }
      })
      })  

    exports.getTransaction = ((req,res)=>{
      const transaction_id = req.params.transaction_id
      db.query('select u.first_name as client_fname, u.last_name as client_lname ,'+
      'a.latitude as client_lat, a.longitude as client_long, a.location, a.head_count, a.notes,a.booking_date,'+
      ' t.total_amount,	d.first_name as driver_fname, d.last_name as driver_lname, u.mobile as user_mobile,'+
      ' d.mobile, d.plate_number, v.name as vehicle, td.latitude as toda_lat, td.longitude as toda_long, td.location as toda_loc '+
      ' FROM summon.transactions t	inner join users u on t.user_id = u.user_id '+
      'inner join appointments a on t.appointment_id = a.appointment_id '+
      'inner join drivers d on t.driver_id = d.driver_id '+
      'inner join vehicles v on d.vehicle_id = v.vehicle_id '+
      'inner join todas td on td.toda_id = d.toda_id '+
      'where transaction_id = ?', transaction_id,
      (error,row)=>{
        if (error){console.log("get transaction:"+error.message)
        res.status(422);
        res.json({"Error":"get transaction:"+error.message})
        }
        if (row.length > 0){
            res.status(200);
            res.json({"result":row[0]});
        }else{
          res.status(422);
          res.json({"message":"No Result"});
        }
      })
      })  

  exports.getHistory = ((req,res)=>{
    const driver_id = req.params.driver_id
    db.query('select u.first_name as client_fname, u.last_name as client_lname ,'+
    'a.latitude as client_lat, a.longitude as client_long, a.location, a.head_count, a.notes,a.booking_date,'+
    ' t.total_amount,	d.first_name as driver_fname, d.last_name as driver_lname, u.mobile as user_mobile,'+
    ' d.mobile, d.plate_number, v.name as vehicle, td.latitude as toda_lat, td.longitude as toda_long, td.location as toda_loc '+
    ' FROM summon.transactions t	inner join users u on t.user_id = u.user_id '+
    'inner join appointments a on t.appointment_id = a.appointment_id '+
    'inner join drivers d on t.driver_id = d.driver_id '+
    'inner join vehicles v on d.vehicle_id = v.vehicle_id '+
    'inner join todas td on td.toda_id = d.toda_id '+
    'where t.driver_id = ?', driver_id,
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