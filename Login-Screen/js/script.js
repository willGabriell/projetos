const inputs = document.querySelectorAll('.input');
const buttom = document.querySelector('.login__button')

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
  }    

const handleFocusout = ({ target}) => {

    if(target.value == '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active')     
    }

}

const handleChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length > 7) {
        buttom.removeAttribute('disabled');
    }else {
        buttom.setAttribute('disabled', '');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusout))
inputs.forEach((input) => input.addEventListener('input', handleChange))