
/*
 * GET home page.
 */

var pairFiles = require('../public/content/pair.json');
var portraitFiles = require('../public/content/portrait.json');
var weddingFiles = require('../public/content/wedding.json');

exports.index = function(req, res){
  res.render('index', { title: 'Фотограф Наталья Лукьянова' });
};

exports.price = function(req, res){
    res.render('price', { title: 'Цены | Фотограф Наталья Лукьянова' });
};

exports.info = function(req, res){
    res.render('info', { title: 'Контакты | Отзывы | Фотограф Наталья Лукьянова' });
};


exports.pair = function(req, res){
    res.render('album', { title: 'Семья | Пара | Фотограф Наталья Лукьянова', photos:pairFiles });
}

exports.portrait = function(req, res){
    res.render('album', { title: 'Портрет | Фотограф Наталья Лукьянова', photos:portraitFiles });
}

exports.wedding = function(req, res){
    res.render('album', { title: 'Свадьба | Фотограф Наталья Лукьянова', photos:weddingFiles });
}

exports.photobook = function(req, res){
    res.render('album', { title: 'Фотокниги | Фотограф Наталья Лукьянова', photos:weddingFiles });
}




