const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true,
        min:0
    },
    category:{
        type: String,
        enum:['card', 'clothes', 'collect'],
        lowercase: true
    }
});

const Inventory = mongoose.model('Inventory', productSchema);

module.exports = Inventory;
