const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    //TODO: debug
    
    name: { type: String, required: true},
    price: { type: Number, required: true}
    
   /*
    name: String,
    price: Number*/
});

module.exports = mongoose.model('Product', productSchema);