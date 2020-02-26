const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CounterSchema =  new Schema({
    val:{type: String, default: 'counterId'},
    counter:{type: Number}
});

const Counter = mongoose.model('counter', CounterSchema);
module.exports = Counter;

//hellotesting