const {STRING,UUID,UUIDV4} = require('sequelize')
const {db}= require('../db');

const Thing = db.define('thing',{
    id : {
        primaryKey : true,
        type:UUID,
        defaultValue : UUIDV4,
    },
    name:{
       // primaryKey:true,
        type: STRING,
        allowNull: false,
        unique: true,
        notEmpty:true
    }
},{
        freezeTableName: true,
    
});
module.exports = Thing;