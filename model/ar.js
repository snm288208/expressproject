const mongoose = require('mongoose')

const arSchema = new mongoose.Schema({
    _id :mongoose.Schema.Types.ObjectId,
    name :String,
    phone :Number,
    gmail :String,
    gender :String
})

module.exports = mongoose.model('Ar',arSchema)