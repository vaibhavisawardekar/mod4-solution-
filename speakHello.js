(function (window){
    var helloSpeaker={};
    helloSpeaker.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Jim"];
    helloSpeaker.speaker = function(){
        var firstLetter;
        for(var i=0; i<names.length; i++){
        if(firstLetter !== "j")
        {
            console.log("Hello " + helloSpeaker.names[i]);
        }
    }
    window.helloSpeaker = helloSpeaker;
    };

})(window);