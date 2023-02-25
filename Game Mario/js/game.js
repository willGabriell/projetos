const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const timer = document.querySelector('.timer')

const jump = () => {
    mario.classList.add("jump");
    setTimeout(()=>{
        mario.classList.remove('jump');
    },500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')

    console.log(marioPosition)

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
           pipe.style.animation = 'none'
           pipe.style.left = `${pipePosition}px`

           /*TRAVAR O MARIO ONDE ELE MORREU*/
           mario.style.animation = 'none'
           mario.style.bottom = `${marioPosition}px`

           /*TROCAR A IMAGEM DO MARIO*/ 
           mario.src = '../images/game-over.png'
           mario.style.width = '75px'
           mario.style.marginLeft = '50px'

           clearInterval(loop);
           clearInterval(this.loop);
    }

}, 10)

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1
;    }, 40)
}
/*SEMPRE QUE UMA TECLA FOR PRESSIONADA, O MARIO PULA*/
document.addEventListener('keydown',jump)
startTimer();