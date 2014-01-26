
/**
 * Module dependencies.
 */

//function FormatNumberLength(num, length) {
//    var r = "" + num;
//    while (r.length < length) {
//        r = "0" + r;
//    }
//    return r;
//}
//    var p = [];
//for(var i=1; i<=90; i++){
//    p.push({
//        "url":"/content/photo/pair/"+FormatNumberLength(i,3)+'.jpeg',
//        "thumb":"/content/thumb/pair/"+FormatNumberLength(i,3)+'.jpeg'
//    })
//}
//var str = JSON.stringify(p);
//debugger;

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(function(req, res, next) {
    app.locals.pretty = true;
    next();
});

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/price', routes.price);
app.get('/info', routes.info);

app.get('/album/pair', routes.pair);
app.get('/album/portrait', routes.portrait);
app.get('/album/wedding', routes.wedding);
app.get('/album/photobook', routes.photobook);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
