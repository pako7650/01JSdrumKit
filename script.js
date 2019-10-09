window.addEventListener('keydown', function (event) {
    const audio = document.querySelector(`audio[data-key="${event.key}"]`);
    const eventKeys = Object.keys(events);
    // console.log(event);
        for (let ev in events) {
            if (eventKeys.includes(ev) && ev === event.key) {
                if(!audio) return;
                audio.currentTime = 0;
                audio.play();
            }
        }
});
const events = {
    'a': 'clap',
    's': 'hihat',
    'd': 'kick',
    'f': 'openhat',
    'g': 'boom',
    'h': 'ride',
    'j': 'snare',
    'k': 'tom',
    'l': 'tink'
};
let div = '';
for (let ev in events) {
    div += `<div class="events" data-key="${ev}">\n<letter>${ev}</letter>\n<br>\n<audio data-key="${ev}" src="sounds/${events[ev]}.wav"></audio>\n<span class="sound">${events[ev]}</span>\n</div>`
}
document.getElementById('App').innerHTML += div;
