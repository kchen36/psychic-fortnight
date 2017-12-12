var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    return Math.sqrt((x0 - x1)**2 + (y0 - y1)**2)
};


var findIt = function(e) {
    
    var posX = e.clientX;
    var posY = e.clientY;
    var dist = distance(posX, posY, targetX, targetY);
    console.log(dist);
    var c = (800-dist)/800*255;
    document.body.style.backgroundColor = 'rgb(' + c + ',' + 0 + ',' + 0 + ')';
};

/*
your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);
