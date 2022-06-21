const mongoose = require('mongoose');



const languageSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    description: String,
    score: {
        type: Number,
        required: true,
        default: 60,
        max: 85,
        min: 50
    }


});

mongoose.model('Language', languageSchema);
