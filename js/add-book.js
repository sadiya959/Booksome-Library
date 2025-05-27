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
  console.log(getBooks)

  addBookDom();
});


function addBookDom() {
  const books = JSON.parse(localStorage.getItem('books')) || [];

  books.forEach(book => {
    BooksContainer.innerHTML += `
      <div class="book-card">
        <img src="${book.cover}" alt="${book.title}" />
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">${book.author}</p>
        <div class="book-info">
          <div class="rate">
            <i class="ri-star-line"></i>
            <i class="ri-star-line"></i>
            <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
        </div>
        <span class="book-price">${book.year}</span>
        <i class="ri-heart-line"></i>
      </div>
    </div>
  `;
});
}