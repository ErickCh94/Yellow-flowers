const audio = document.getElementById('miAudio');
audio.volume = 0.3; // Establece el volumen al 50%

function reproducirAudio() {
    audio.play();
}
window.onload = () =>{
document.body.classList.remove("container");
};
