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


  exports.login = ((req,res)=>{
    const {username,password} = req.params
    db.query('select * from users where username=?',username,
    async(error,row)=>{
      if (error){console.log("login user:"+error.message)
      res.status(422);
      res.json({"Error":"login user:"+error.message})
    }
    if ((row.length > 0)? (await bcrypt.compare(password, row[0].password)):false){
        res.status(200);
        res.json({"result":row[0]})
      }else{
        db.query('select * from drivers where username=? AND password=?',[username,password],
        async(error,row)=>{
            if (error){console.log("login driver:"+error.message)
            res.status(422);
            res.json({"Error":"login driver:"+error.message})
          }

          if (row.length > 0){
              res.status(200);
              res.json({"result":row[0]})
            }else{
              res.status(200);
              res.json({"message":"Invalid login."})
            }
          })
      }
    })
    })

  exports.getDriver = ((req,res)=>{
      const driver_id = req.params.driver_id
      db.query('select * from drivers where driver_id=?',driver_id,
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
  exports.createUser = ((req, res)=>{
    const {first_name, middle_name, last_name, mobile, latitude, longitude, toda_id, email, username, password, repassword} = req.body;
    let data = {
      first_name : first_name,
      middle_name : middle_name,
      last_name : last_name,
      mobile : mobile,
      latitude : latitude,
      longitude : longitude,
      toda_id : toda_id,
      email : email,
      username : username,
      password : password
    }

    db.query('SELECT username FROM users WHERE username = ?', username,
    async(error, result)=>{
      if(error){
        console.log('Check user if existing:'+error.message);
      }
      if(result.length>0){
        res.status(200);
          res.json({"message":"Username already exist."})
      }
      else if(password != repassword){
        res.status(200);
          res.json({"message":'Password and confirm password does not match'})
        
      } else {
        const hashpassword = await bcrypt.hash(password, 8);  
        let data = {
          first_name : first_name,
          middle_name : middle_name,
          last_name : last_name,
          mobile : mobile,
          latitude : latitude,
          longitude : longitude,
          toda_id : toda_id,
          email : email,
          username : username,
          password : hashpassword
        }
    
        db.query('insert into users set ?', data,
        (error)=>{
          if(error){console.log('create user:' + error.message);
          res.status(422);
          res.json({'Error':'create user:'+ error.message})
          }
          else{
            res.status(200);
            res.json({"result":"Successfully created."})
          }
        })
      }
    


    }
    )

   

  })