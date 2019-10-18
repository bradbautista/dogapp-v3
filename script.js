let doggos;

function getDogImage() {
    fetch(`https://dog.ceo/api/breed/${doggos}/images/random`)
        .then(response => response.json())
        .then(responseJson => 
          displayResults(responseJson))
        .catch(error => alert('Ruh-roh! Romething rent wrong!'));
}

function displayResults(responseJson) {
    
    // Clear the error message area in case an error has previously
    // been generated
    $('.msg-area').text('');

    // Check the response status for errors; if there's an error,
    // provide the user with the error message and a picture of a sad dog.
    if (responseJson.status === 'error') {
        $('.msg-area').text(`Dog.CEO has encountered an error: ${responseJson.message}.`);
        $('.results-img').replaceWith(`<img src="https://i.ytimg.com/vi/NMrHd17OeUk/hqdefault.jpg" class="results-img">`)
    } else {
        $('.results-img').replaceWith(
        `<img src="${responseJson.message}" class="results-img">`
    )
    }
  
  // Show the results
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    doggos = $('#selector').val();
    getDogImage();
  });
}

$(function() {
  console.log('Ruff! Waiting for submit!');
  watchForm();
});