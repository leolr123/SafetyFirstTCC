const mongoose = require('../config/database.js');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    macaddress: {type: String, required: true},
    type: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    when: {type: Date, requiered: true},
    done: {type: Boolean, default: false},
    created: {type: Date, default: Date.now()},

});

module.exports = mongoose.model('Task', TaskSchema);