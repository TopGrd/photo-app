var http = require('http');

var arr =[];
var options = {
    host:'api.36wu.com',
    port:80,
    path:'/Movie/GetHotMovie?location=北京'
};
var data = '';
var str = '';
var  pas = '';
http.get(options,function(res){
    res.on('data',function(chunck){
        data += chunck;
    })
    res.on('end',function(){
        str = JSON.parse(data);
        for(var i= 0; i<str.movie.length;i++){
            var photos = {};
            photos.name=str.data.movie[i].movie_name;
            console.log(photos.name);
            photos.path= str.data.movie[i].movie_picture;
            arr.push(photos);
            console.log(arr);
        }
        console.log(arr);
        console.log(str.subjects.length);
        /*photos.path = str.subjects.casts.medium;*/
    })
})