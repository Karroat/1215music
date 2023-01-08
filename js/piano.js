let audioPointer; 
let audio;
let i=0;
let txt="";
const mus = {
  A: new Audio("audio/Piano/Bb3.mp3"),
  B: new Audio("audio/Piano/B4.mp3"),
  C: new Audio("audio/Piano/Bb1.mp3"),
  D: new Audio("audio/Piano/B0.mp3"),
  E: new Audio("audio/Piano/B7.mp3"),
  F: new Audio("audio/Piano/A7.mp3"),
  G: new Audio("audio/Piano/Ab3.mp3"),
  H: new Audio("audio/Piano/B5.mp3"),
  I: new Audio("audio/Piano/Bb0.mp3"),
  J: new Audio("audio/Piano/B1.mp3"),
  K: new Audio("audio/Piano/A6.mp3"),
  L: new Audio("audio/Piano/Ab2.mp3"),
  M: new Audio("audio/Piano/Bb2.mp3"),
  N: new Audio("audio/Piano/A0.mp3"),
  O: new Audio("audio/Piano/A5.mp3"),
  P: new Audio("audio/Piano/Ab4.mp3"),
  Q: new Audio("audio/Piano/Bb4.mp3"),
  R: new Audio("audio/Piano/Ab1.mp3"),
  S: new Audio("audio/Piano/A2.mp3"),
  T: new Audio("audio/Piano/A4.mp3"),
  U: new Audio("audio/Piano/Ab5.mp3"),
  V: new Audio("audio/Piano/Ab7.mp3"),  /*&#119187*/ 
  W: new Audio("audio/Piano/A3.mp3"),
  X: new Audio("audio/Piano/A8.mp3"),
  Y: new Audio("audio/Piano/Ab6.mp3"), 
  Z: new Audio("audio/Piano/A1.mp3"),
 " ":new Audio("audio/Piano/silent_quarter-second.mp3"),  //&#119047;	\x1d107
 "#":new Audio("audio/Piano/A1.mp3")
};

//onst startButton = document.getElementById('#startButton');//instead of using doublequotes
//startButton.addEventListener("onload", onStart); 
//console.log(txt);

function playNext() { 
  //txt = document.getElementById("d1").value.toUpperCase()
  txt=sessionStorage.getItem("usertext").toUpperCase()
  if (i < txt.length) { 
    //audio = new Audio(audioArray[audioPointer]);
    if (!(txt[i] in mus)){
      mus["#"].play()
      mus["#"].addEventListener("ended",playNext);
    }
    else if(txt[i] in mus){
      mus[txt[i]].play()
      mus[txt[i]].addEventListener("ended",playNext);
    }
    //mus[txt[i]].addEventListener("ended",playNext);
    //audio.play();
    //mus["#"].currentTime = 0;
    //mus[txt[i]].currentTime = 0;
    console.log(`playing ${txt[i]}`);
    //audioPointer += 1;
    i += 1;
  } else { 
    console.log("finished"); 
  }
  
}
   
function onStart() {
  if (audio) { 
    audio.pause()
  }
  console.log("start");
  audioPointer = 0;
  playNext();
}
   
   

