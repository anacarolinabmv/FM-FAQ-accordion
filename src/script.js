'use strict';

const btn = document.querySelector('.show-more');

btn.addEventListener('click', function (e) {
  const answer = e.target.closest('.question').querySelector('.answer');
  answer.classList.toggle('show');
});
