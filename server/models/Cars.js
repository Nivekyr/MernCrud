const mongoose = require("mongoose")

const CrudSchema = new mongoose.Schema({
    infoText: {
        type: String,
        require: true,
    },
    infoRadio: {
        type: String,
        required: false,
    },
    infoDate: {
        type: String,
        default: Date,
        required: false,
    },
    infoNumber: {
        type: Number,
        require: false,
    },
    infoList: {
        type: String,
        require: false,
    },
    infoCheckBox: {
        type: String,
        require: false,
    },
});

const Crud = mongoose.model("Crud", CrudSchema)
module.exports = Crud