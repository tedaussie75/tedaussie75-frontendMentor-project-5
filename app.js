const faqBtns = document.querySelectorAll(".plus-icon img");

function displayAnswer(e) {
    e.parentElement.parentElement.parentElement.children[1].classList.toggle('show');
    e.classList.toggle('hide');
}

faqBtns.forEach(element => {
    element.addEventListener('click', e => displayAnswer(e.target));
});