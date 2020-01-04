
var url='http://twitch.tv/slrabbit';

function log(message){
    //send an http request
    console.log(message);
}


module.exports=log; //log這個function要是global就要加這行
