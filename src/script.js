'use strict';

const init = async function () {
  const response = await fetch('src/data.json');
  const data = await response.json();

  const accordionsContainer = document.querySelector('.FAQs__questions');

  const html = data.reduce((markup, question) => {
    return (markup += `<li class="FAQs__accordion">
            <div class="FAQs__accordion--question">
              <h3 class="question">${question.question}</h3>
              <span class="FAQs__accordion--btn btn"></span>
            </div>
            <div class="FAQs__accordion--answer">
              <p class="answer">${question.answer}</p>
            </div>
          </li>`);
  }, '');

  accordionsContainer.insertAdjacentHTML('afterbegin', html);
};

init();

//Event Listeners
const FAQsContainer = document.querySelector('.FAQs');

FAQsContainer.addEventListener('click', function (e) {
  const accordionQuestion = e.target.closest('.FAQs__accordion--question');
  if (!accordionQuestion) return;

  const answer = accordionQuestion.nextElementSibling;
  accordionQuestion.classList.toggle('open');

  if (accordionQuestion.classList.contains('open')) {
    answer.style.maxHeight = answer.scrollHeight + 'px';
    answer.style.marginTop = '2.4rem';
  } else {
    answer.style.maxHeight = 0;
    answer.style.marginTop = '0';
  }
});
