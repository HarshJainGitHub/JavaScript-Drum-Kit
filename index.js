window.addEventListener('keydown', function(e) {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // get keycode
    if(!audio) return; // returning no keycode is present from provided one
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});