const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand')

const getTime = () => {
    const date = new Date();

    return {
        hours: date.getHours(),
        minutes:date.getMinutes(),
        seconds: date.getSeconds(),
    };
}

setInterval(() => {

    const { seconds, minutes, hours } = getTime();

    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`
    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`

}, 1000);

const showBtn = document.querySelector('.showNumber');

const hideBtn = document.querySelector('.hiddeNumber')

function showNumber() {;
    const number1 = document.querySelector('.number-1')
    const number2 = document.querySelector('.number-2')
    const number3 = document.querySelector('.number-3')
    const number4 = document.querySelector('.number-4')
    const number5 = document.querySelector('.number-5')
    const number6 = document.querySelector('.number-6')
    const number7 = document.querySelector('.number-7')
    const number8 = document.querySelector('.number-8')
    const number9 = document.querySelector('.number-9')
    const number10 = document.querySelector('.number-10')
    const number11 = document.querySelector('.number-11')
    const number12 = document.querySelector('.number-12')

    number1.style.color = '#f0f8ff';
    number2.style.color = '#f0f8ff';
    number3.style.color = '#f0f8ff';
    number4.style.color = '#f0f8ff';
    number5.style.color = '#f0f8ff';
    number6.style.color = '#f0f8ff';
    number7.style.color = '#f0f8ff';
    number8.style.color = '#f0f8ff';
    number9.style.color = '#f0f8ff';
    number10.style.color = '#f0f8ff';
    number11.style.color = '#f0f8ff';
    number12.style.color = '#f0f8ff';
}

function hiddeNumber() {
    const number1 = document.querySelector('.number-1')
    const number2 = document.querySelector('.number-2')
    const number3 = document.querySelector('.number-3')
    const number4 = document.querySelector('.number-4')
    const number5 = document.querySelector('.number-5')
    const number6 = document.querySelector('.number-6')
    const number7 = document.querySelector('.number-7')
    const number8 = document.querySelector('.number-8')
    const number9 = document.querySelector('.number-9')
    const number10 = document.querySelector('.number-10')
    const number11 = document.querySelector('.number-11')
    const number12 = document.querySelector('.number-12')

    number1.style.color = '#000';
    number2.style.color = '#000';
    number3.style.color = '#000';
    number4.style.color = '#000';
    number5.style.color = '#000';
    number6.style.color = '#000';
    number7.style.color = '#000';
    number8.style.color = '#000';
    number9.style.color = '#000';
    number10.style.color = '#000';
    number11.style.color = '#000';
    number12.style.color = '#000';
}



