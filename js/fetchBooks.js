const container = document.querySelector(".books");


async function fetchBooks() {
  try {
    books = JSON.parse(localStorage.getItem('books')) || [];
    if (books.length > 0) {
      return books;
    }
    return books;
  } catch (error) {
    console.error("Error getting books from localstroge:", error);
    return [];
  }
}

function displayBooks(books) {
books.forEach(book => {
  container.innerHTML += `
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


fetchBooks().then(displayBooks);