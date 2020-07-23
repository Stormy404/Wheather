var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Raipur,IN&appid=21e32f35ac43f7c7d5fd5ccb54523935&units=metric';
var server = http.createServer(function(request, response){

var request = require('request');
request(url,function(err,res,body){
var data = JSON.parse(body);

response.write("<html><body><div id='container'>");
response.write("<h1>"+ 'city name - :'+ data['name'] + '<br>' + "</h1>");
response.write("<h2>"+ 'Temperature - :'+ data.main['temp'] + '<br>' + "</h2>");
response.write("<h2>"+ 'SunSet Time - :'+ new Date(data.sys['sunset']+1000) + "</h2>");
response.write("</div></body></html>");
response.end();

});

}).listen(2000);