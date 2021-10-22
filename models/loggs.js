import { url } from "inspector";
const mongoose = require('mongoose');
const logDataSchema = new mongoose.Schema(
    {
        bookid : {type : mongoose.Schema.Types.ObjectId, required:true},
        sellerid : {type : mongoose.Schema.Types.ObjectId, required:true}
    });

    module.exports = mongoose.model('logs',logDataSchema)