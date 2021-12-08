
function setColor(btn, color){
    
    var count=1;
    var property = document.getElementById(btn);
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#7FFF00"
        count=0;
    }
}
function NewFunction(){
document.getElementById("newForm").reset();
}


var button=document.getElementById("button");
button.addEventListener("click",function(){
    console.log("click me");
});

document.getElementById("toBlue").onclick = function () {
    document.getElementById("output_text").style.color = 'blue';
}

document.getElementById("toGreen").onclick = function () {
    document.getElementById("output_text").style.color = 'green';
}

document.getElementById("toRed").onclick = function () {
    document.getElementById("output_text").style.color = '#FF0000';
}


