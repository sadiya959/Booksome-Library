const container = document.querySelector(".books");

function addBookDom() {
  const books = JSON.parse(localStorage.getItem("books")) || [];

  if (books.length === 0) {
    container.innerHTML = `
      <div class="no-books">
        <h2>No books added yet!</h2>
        <p>Start adding your books. you're reading</p>
      </div>
    `;
    return;
  }

  container.innerHTML = "";

  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <img src="${book.cover}" alt="${book.title}" />
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">${book.author}</p>
      <div class="book-info">
        <button onclick="markBookAsFinished(${book.id})" class="btn">Mark as Finished</button>

        <div class="rate">
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
        </div>
        <span class="book-price">${book.year}</span>
      </div>
    `;

    container.appendChild(bookCard);
  });
}

addBookDom();

function markBookAsFinished(id) {
  let books = JSON.parse(localStorage.getItem("books")) || [];
  let finishedBooks = JSON.parse(localStorage.getItem("finishedBooks")) || [];

  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    const [book] = books.splice(index, 1);
    book.finished = true;
    finishedBooks.push(book);
    alert("Book marked as finished");
  }
  else {
    console.error("Book not found");
    return;
  }

  // Updated localStorage
  localStorage.setItem("books", JSON.stringify(books));
  localStorage.setItem("finishedBooks", JSON.stringify(finishedBooks));
  addBookDom();

}
