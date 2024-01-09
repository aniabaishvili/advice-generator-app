const dice = document.querySelector('.button');
const idNumber = document.querySelector('#advice-id');
const quotes = document.querySelector('.advice-text');

const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    quotes.innerText = data.slip.advice;
    idNumber.innerText = data.slip.id;

}

dice.addEventListener("click", getAdvice);
