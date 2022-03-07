import mongoose from "mongoose";
const config = require("../config");

async function mongooseLoader() {
    try{
        await mongoose.connect(config.db.uri)}
    catch (err){
        console.error(err)
    }
}

module.exports = mongooseLoader