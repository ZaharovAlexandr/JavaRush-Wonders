export function initFaqs() {
    const buttonFaqs = document.querySelectorAll('.faqs__button')
    const imageFaqs = document.querySelectorAll('.faqs__image')
    const textFaqs = document.querySelectorAll('.faqs__qustion-text')


    buttonFaqs.forEach((element, i) => {
        element.addEventListener('click', function () {
            imageFaqs[i].classList.toggle('faqs__image_active')
            textFaqs[i].classList.toggle('faqs__qustion-text_active')
        })
    });
};