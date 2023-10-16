// initialize the variables
let songIndex =0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName');
let playing = false;
let timeDuration = document.getElementsByClassName('timeStamp');


let songs=[

    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" , duration:'2'},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" , duration:'2'},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" , duration:'2'},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" , duration:'2'},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" , duration:'2'},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" , duration:'2'},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" , duration:'2'},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" , duration:'2'},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" , duration:'2'},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg" , duration:'2'},
]
 

// Array.from(timeDuration).forEach(element=>{
//     console.log(element);
//     let time = songs[songIndex].duration
//     element.innerText += time
//     console.log(audioElement)
// })

masterPlay.addEventListener('click',(e)=>{
    if(audioElement.paused || audioElement.currentTime == 0){
        audioElement.play()
        // songs[songIndex].classList.add("fa-pause-circle")
        // songs[songIndex].classList.remove("fa-play-circle")
        // e.target.classList.add('fa-pause-circle')
        // console.log(e.target);
        
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        playing = false
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity =0;
    }
})

audioElement.addEventListener("timeupdate",()=>{
    // console.log('time update'); 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    // let time =audioElement.duration/60
    // console.log(time.toFixed(2));
    myProgressBar.value = progress; 
    console.log(progress);
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * (audioElement.duration/100)
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach(element=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach(element=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
     
        songIndex = parseInt(e.target.id)
        // element.classList.add('fa-pause-circle');
        // element.classList.remove('fa-play-circle');
        // element.classList.add('on');

        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

        if(element.classList.contains('off')){
            element.classList.remove('off');
            element.classList.add('on');
            element.classList.add('fa-pause-circle');
            element.classList.remove('fa-play-circle');
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');

        }else if(element.classList.contains('on')){
            element.classList.remove('on');
            element.classList.add('off');
            element.classList.add('fa-play-circle');
            element.classList.remove('fa-pause-circle');
            audioElement.pause();

            masterPlay.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
        }
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

