const mongoose = require('mongoose');
const personSchema = mongoose.Schema({
    client_name:{
        type: String,
        require: true
    },
    dni:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: Array,
        require: true,
        city: {
            type: String,
            require: true
        },
        code:{
            type: String,
            require: true
        },
        latitud: {
            type: Number,
            require: true
        },
        longuitud: {
            type: Number,
            require: true
        },    
    },
    contact:{
        type: Object,
        require: true,
        email: {
            type: String,
            require: true
            },
            cellphone:{
                type: String,
                require: true
            },
        },
});

module.exports = mongoose.model('PersonCollection', personSchema);