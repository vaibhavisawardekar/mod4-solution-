(function (window){
    var byeSpeaker={};
    byeSpeaker.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Jim"];
    byeSpeaker.speaker = function(names){
        var firstLetter;
        for(var i=0; i<names.length; i++){
        if(firstLetter === "j")
        {
            console.log("Good Bye " + byeSpeaker.names[i]);
        }
    }
    names();
    window.byeSpeaker = byeSpeaker;
    };

})(window);