const mongoose = require('mongoose')
var agentSchema = new mongoose.Schema({
    surName:String,
    givenName:String,
    dob:date,
    residence:String,
    occupation:String,
    nationality:string,
})
    module.exports = mongoose.model("Agent", agentSchema)