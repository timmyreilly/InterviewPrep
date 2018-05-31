// get stuff
const player = document.querySelector('.player');
const video = player.querySelector('.viewer'); 
const progress = player.querySelector('.progress'); 
const progressBar = player.querySelector('.progress__filled'); 
const toggle = document.querySelector('.toggle'); 
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider'); 

// methods 

function togglePlay() {
    if(video.paused){
        video.play(); 
    } else {
         video.pause(); 
     }
}



function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚'; 
    toggle.textContent = icon; 
}

function skip(e){
    video.currentTime += parseFloat(this.dataset.skip);  
}

let x; 

function handleRangeUpdate() {
    video[this.name] = this.value; 
}

function handleProgress(e) {
    // we need a percentage. 
    const percent = (video.currentTime / video.duration) * 100; 
    progressBar.style.flexBasis = `${percent}%`; 
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth ) * video.duration; 
    
    video.currentTime = scrubTime; 
}


// add event listeners

video.addEventListener('click', togglePlay); 
video.addEventListener('play', updateButton); 
video.addEventListener('pause', updateButton); 
video.addEventListener('timeupdate', handleProgress); 

toggle.addEventListener('click', togglePlay); 

skipButtons.forEach( button => button.addEventListener('click', skip))

ranges.forEach( range => range.addEventListener('change', handleRangeUpdate)); 
ranges.forEach( range => range.addEventListener('mousemove', handleRangeUpdate)); 

let mousedown = false; 
progress.addEventListener('click', scrub); 
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));


progress.addEventListener('mousedown', () => mousedown = true); 
progress.addEventListener('mouseup', () => mousedown = false); 