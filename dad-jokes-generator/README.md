# dad joke generator web application

This is a Dad Jokes Generator web application that generates dad jokes using the icanhazdadjoke API.
The user can click on the "Tell me a joke" button to generate a new joke.
we used HTML, CSS, and JavaScript
To use this application, you need to:
     .Clone the repository.
     .Open the index.html file in a web browser.
     .Click on the "Tell me a joke" button to generate a new dad joke.

The HTML file `index.html` contains a container with a heading, a paragraph tag for the joke, and a button to generate a new joke.
The CSS file `style.css` contains styles for the HTML elements.
The JavaScript file `script.js` contains the code that makes a fetch request to the API to get a new dad joke.
When the "Tell me a joke" button is clicked, the following steps are executed:
      .The `fetch()` method is called to make a GET request to the API.
      .The Accept header is set to application/json to specify that we want to receive a JSON response.
      .Once the response is received, the `response.json()` method is called to parse the response as JSON.
      .The joke text is then extracted from the response JSON and displayed on the web page.

The code in `script.js` uses event listeners and the `fetch()` method to update the web page dynamically.