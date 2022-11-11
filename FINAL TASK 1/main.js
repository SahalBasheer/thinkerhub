
const image = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const currentTimeEl = document.getElementById("current-time");
const durationEl  = document.getElementById("duration");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const prevbtn = document.getElementById("prev");
const playbtn = document.getElementById("play");
const nextbtn = document.getElementById("next");
const background = document.getElementById("background");



const songs = [
    {path:"song1.mp3",musicname:"Faded",artist:"Alan Walker",cover:"psong1.jpg" },
    {path:"song2.mp3",musicname:"Alone",artist:"Marshmellow",cover:"psong2.jpg" },
    {path:"song3.mp3",musicname:"Night Changes",artist:"One Direction",cover:"psong3.jpg" },
    {path:"song4.mp3",musicname:"Bones",artist:"Imagine Dragons",cover:"psong4.jpg" }
];



let isloading=false;

function playToggle(){
    if(isloading){
        pauseSong();
    }
    else{
        playSong();
    }
}

function playSong(){
    isloading=true;
    playbtn.classList.replace("fa-play","fa-pause");
    playbtn.setAttribute("title","Pause");
    music.play();
}

function pauseSong(){
    isloading=false;
    playbtn.classList.replace("fa-pause","fa-play");
    playbtn.setAttribute("title","Play");
    music.pause();
}


function changeCover(cover){
    image.classList.remove("active");
    setTimeout(function (){
        image.src=cover;
        image.classList.add("active");
    },100)
    background.src = cover;
}

function loadSongs(song){
    title.innerHTML= song.musicname;
    artist.innerHTML=song.artist;
    music.src=song.path;
    changeCover(song.cover);
}

let songindex=0;

function prevSong(){
    songindex--;
    if(songindex<0){
    songindex=songs.length-1;
    }
    loadSongs(songs[songindex]);
    playSong();
}

function nextSong(){
    songindex++;
    if(songindex>songs.length-1){
    songindex=0;
    }
    loadSongs(songs[songindex]);
    playSong();
}


loadSongs(songs[songindex])
function updateProgressBar(){
    if(isloading)
    {
       const duration =music.duration;
       let currentTime=music.currentTime;
       let progresspercentage = (currentTime/duration)*100;
       progress.style.width=progresspercentage+"%";


       const tmin =Math.floor(duration/60);
       let tsec =Math.floor(duration%60);
       if(tsec<10)
       {
        tsec="0"+tsec;
       }

       if(tsec){
        durationEl.innerHTML=tmin+":"+tsec;
       }


       const cmin =Math.floor(currentTime/60);
       let csec=Math.floor(currentTime%60);
       if(csec<10)
       {
        csec="0"+csec;
       }

       if(csec){
        currentTimeEl.innerHTML=cmin+":"+csec;
       }
    }
}

function setProgressBar(e){
    const width=this.clientWidth;
    const clickX=e.offsetX;
    const duration=music.duration;
    music.currentTime=(clickX/width)*duration;
}

playbtn.addEventListener("click",playToggle);
prevbtn.addEventListener("click",prevSong);
nextbtn.addEventListener("click",nextSong);
music.addEventListener("ended",nextSong);
music.addEventListener("timeupdate",updateProgressBar);
progressContainer.addEventListener("click",setProgressBar);
