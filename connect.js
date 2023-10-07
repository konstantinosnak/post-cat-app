const typeorm = require('typeorm');
require('dotenv').config();

const CategoryEntity = require('./model/Category').CategoryEntity;
const PostEntity = require('./model/Post').PostEntity;

const dataSource = new typeorm.DataSource({
    type: "mariadb",
    host: process.env.HOST,
    port: 3306,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: [CategoryEntity, PostEntity],
    synchronize: true
})

dataSource
.initialize()
.then( function(){
    console.log("Connected to Database! :)")
})
.catch(function(err){
    console.log("Problem in connecting to the Database!", err)
})

module.exports = {dataSource}