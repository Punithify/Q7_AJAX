// let httpRequest;
const httpRequest = new XMLHttpRequest();
const url =
  'https://raw.githubusercontent.com/Punithify/punithify.github.io/main/Data/books.json';
document.getElementById('ajaxButton').addEventListener('click', () => {
  makeRequest(url);
});

function makeRequest(url) {
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', url, true);
  httpRequest.send();
}

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      const response = JSON.parse(httpRequest.responseText);
      console.log(response);
      response.map(
        (book) =>
          (document.getElementById(
            'bookList'
          ).innerHTML += `<div class="card ml-4" style="width: 18rem;">
      <img src="${book.imageLink}" class="card-img-top" alt="...">
      <div class="card-body">
        <h3>${book.title}</h3>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="${book.link}">book link</a>
      </div>
    </div>`)
      );
    } else {
      alert('There was a problem with the request.');
    }
  }
}

console.log('hello', httpRequest.responseText);
