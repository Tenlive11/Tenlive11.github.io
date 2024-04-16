var final = 0;
function yespic(){
    if(final == 0){
        var image = document.getElementById("picture");

        image.src = "pic/cute-happy.gif";
    
        document.getElementById("text").innerHTML = "YIPPIE!!";
    }

}

function nopic(){
    if(final == 0){
        var image = document.getElementById("picture");

        image.src = "pic/No1.gif";

        document.getElementById("text").innerHTML = "Are you sure?";
    }
    
}

var nocounter =0;
var yescounter =0;


function yesclick(){
    yescounter++;
    var total =yescounter - nocounter;
    
    if(total > 0){
        yespic();
        final++;
       
    }else if (total == 0 && final == 0){
        var image = document.getElementById("picture");

        image.src = "pic/no10.jpg";
    
        document.getElementById("text").innerHTML = "Naur";
        final++;
    }
    


}

function noclick(){
    ++nocounter;
    var total = yescounter - nocounter;
    console.log(total%2);
    if(Math.abs(total%2) == 1 && final ==0){
        nopic();
    }else if (Math.abs(total%2) == 0 && final ==0){
        nocounter =0;
        yescounter =0;
        var image = document.getElementById("picture");
        image.src = "pic/shy-cute.gif";
        document.getElementById("text").innerHTML = "Would you like to go out with me...";
    }
    

}