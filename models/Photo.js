/**
 * Created with IntelliJ IDEA.
 * Creator: Li'Zhuo
 * Date: 2015/3/19
 * Time: 16:33
 */
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://127.0.0.1:27017/photo_app');
var schema = new mongoose.Schema({
    name: String,
    path: String
});
module.exports = mongoose.model('Photo',schema);