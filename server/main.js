import { Meteor } from 'meteor/meteor';
var request = require('request');

Meteor.startup(() => {
  // code to run on server at startup
    let apiKey = '';
    request(`http://www.omdbapi.com/?apikey=${apiKey}&?&s=blade`, function(err, res, body){
        if(!err && res.statusCode == '200'){
            var data = JSON.parse(body);
            console.log(data);
        }
    });
});
