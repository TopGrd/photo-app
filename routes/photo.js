/**
 * Created with IntelliJ IDEA.
 * Creator: Li'Zhuo
 * Date: 2015/3/19
 * Time: 15:57
 */
var Photo = require('../models/Photo');
var fs = require('fs');
var path = require('path');
var join = path.join;

var photos = [];
exports.list = function(req, res){ res.render('photos', {
    title: 'Photos',
    photos: photos });
};
exports.list = function (req, res, next) {
    /*res.render('photos',{
        title:'Photos',
        photos:photos
    })*/
    Photo.find({},function(err,photos){
        if(err) return next(err);
        res.render('photos',{
            title:'Photos',
            photos:photos
        })
    })
};
exports.form = function(req,res){
    res.render('photos/upload',{
        title:'Photo Upload'
    });
};
exports.submit = function(dir){
    return function(req,res,next){
        var img = req.files.photo.image;
        var name = req.body.photo.name||img.name;
        var path = join(dir,img.name);
        fs.rename(img.path,path, function (err) {
            if(err) throw err;
            Photo.create({
                name:name,
                path:img.name
            },function(err){
                if(err) return next(err);
                res.redirect('/');
            })
        })
    }
};