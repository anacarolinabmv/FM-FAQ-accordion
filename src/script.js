'use strict';

const FAQsContainer = document.querySelector('.FAQs');

FAQsContainer.addEventListener('click', function (e) {
  const accordion = e.target.closest('.FAQs__accordion');
  const answer = accordion.querySelector('.FAQs__accordion--answer');

  if (!accordion) return;
  accordion.classList.toggle('open');

  if (accordion.classList.contains('open')) {
    answer.style.maxHeight = answer.scrollHeight + 'px';
  } else {
    answer.style.maxHeight = 0;
  }
});
