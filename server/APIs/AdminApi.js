const exp=require('express')
const AdminApp=exp.Router();
//API
AdminApp.get("/",(req,res)=>{
    res.send({message:"from admin api"})

})
module.exports=AdminApp;