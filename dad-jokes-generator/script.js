const button = document.querySelector('#get-joke');
const jokeText = document.querySelector('#joke');

button.addEventListener('click', () => {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    jokeText.textContent = data.joke;
  });
});



  
