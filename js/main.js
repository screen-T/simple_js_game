let ts=document.querySelectorAll("td")
let pos=12
let car="<img src='./images/fr.jpg'>"
var audio = new Audio('./audio/piiiib.wav');
let color_bg=document.querySelector("#color-bg")
let table=document.querySelector("#tab")
function avanceCar(){
    if (pos-5 >=0){
    ts[pos-5].innerHTML=ts[pos].innerHTML ;
    ts[pos].innerHTML="";
    pos=pos-5;
}
else {
    playAudio() ;
}
}
function downCar(){
    if (pos+5 <25){
    ts[pos+5].innerHTML=ts[pos].innerHTML ;
    ts[pos].innerHTML="" ;
    pos=pos+5 ;
}
else {
    playAudio();
}
}
function leftCar(){
    if (pos !=0 && pos !=10 && pos !=15 && pos !=20 && pos !=5 ){
    ts[pos-1].innerHTML=ts[pos].innerHTML ;
    ts[pos].innerHTML="" ;
    pos=pos-1;
    }
    else{ 
        playAudio();
    }
}
function rightCar(){
    if (pos+1 !=5 && pos+1 !=10 && pos+1 !=15 && pos+1 !=20 && pos+1 !=25 ){
    ts[pos+1].innerHTML=ts[pos].innerHTML ;
    ts[pos].innerHTML="" ;
    pos=pos+1;
    }
else{
    playAudio();
} 
}
function changeCar(){
    ts[pos].innerHTML=car ;

    

}
function playAudio() {
    audio.play();
}
document.addEventListener("keydown",event=> {
  if (event.isComposing ||event.keyCode == 38) {
     avanceCar() ;
  }
  else if (event.isComposing ||event.keyCode == 40)
     {
        downCar() ;
     }

     else if (event.isComposing ||event.keyCode == 37)
     {
        leftCar() ;
    }

    else if (event.isComposing ||event.keyCode == 39)
     {
        rightCar() ;
    }
    else if (event.isComposing ||event.keyCode == 70)
     {
        changeCar();
    }
    else if (event.isComposing ||event.keyCode == 71)
     {
        playAudio();
    }    
  }
)
