'use strict';

const form = document.getElementById('source');


form.addEventListener('submit', function(event) {

  event.preventDefault();


  const firstName = document.querySelector('input[name="firstname"]').value;
  const lastName = document.querySelector('input[name="lastname"]').value;

  const targetElement = document.getElementById('target');


  targetElement.textContent = `Your name is ${firstName} ${lastName}`;
});

