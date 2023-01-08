let audioPointer; 
let audio;
let i=0;
let txt="";

/*
const audioArray = [ 
  "b.mp3",
  "g1" 
];
*/
const mus = {
  A: new Audio("audio/Violin/v1.mp3"),
  B: new Audio("audio/Violin/v2.mp3"),
  C: new Audio("audio/Violin/v3.mp3"),
  D: new Audio("audio/Violin/v4.mp3"),
  E: new Audio("audio/Violin/v5.mp3"),
  F: new Audio("audio/Violin/v6.mp3"),
  G: new Audio("audio/Violin/v7.mp3"),
  H: new Audio("audio/Violin/v8.mp3"),
  I: new Audio("audio/Violin/v9.mp3"),
  J: new Audio("audio/Violin/v10.mp3"),
  K: new Audio("audio/Violin/v11.mp3"),
  L: new Audio("audio/Violin/v12.mp3"),
  M: new Audio("audio/Violin/v13.mp3"),
  N: new Audio("audio/Violin/v14.mp3"),
  O: new Audio("audio/Violin/v15.mp3"),
  P: new Audio("audio/Violin/v16.mp3"),
  Q: new Audio("audio/Violin/v17.mp3"),
  R: new Audio("audio/Violin/v18.mp3"),
  S: new Audio("audio/Violin/v19.mp3"),
  T: new Audio("audio/Violin/v20.mp3"),
  U: new Audio("audio/Violin/v21.mp3"),
  V: new Audio("audio/Violin/v22.mp3"),  /*&#119187*/ 
  W: new Audio("audio/Violin/v23.mp3"),
  X: new Audio("audio/Violin/v24.mp3"),
  Y: new Audio("audio/Violin/v25.mp3"), 
  Z: new Audio("audio/Violin/v26.mp3"),
 " ":new Audio("audio/Violin/silent_quarter-second.mp3"),  //&#119047;	\x1d107
 "#":new Audio("audio/Violin/v12.mp3")
};

//const startButton = document.getElementById('#startButton');//instead of using doublequotes
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