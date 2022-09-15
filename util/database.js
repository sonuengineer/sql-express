// const mysql=require("mysql2");
// const pool=mysql.createPool({
//     host:"localhost",
//     user:"root",
//     database:"compltenode",
//     password:"admin"

// })
// module.exports=pool.promise();


const Sequelize=require("Sequelize");
const sequelize=new Sequelize("compltenode","root","admin",{
    dialect:"mysql",
    host:"localhost"
})

module.exports=sequelize;