const addBookForm = document.querySelector('#book-form');
const cover = document.querySelector("#cover");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const BooksContainer = document.querySelector(".books");



addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookData = {
    cover: cover.value,
    title: title.value,
    author: author.value,
    year: year.value,
  };
  
  const getBooks = JSON.parse(localStorage.getItem('books')) || []
  getBooks.push(bookData)

  localStorage.setItem("books", JSON.stringify(getBooks))

  window.location.href = "../pages/myBooks.html";
});

