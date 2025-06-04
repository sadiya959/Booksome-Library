const container = document.querySelector(".books");

function addBookDom() {
  const books = JSON.parse(localStorage.getItem("finishedBooks")) || [];

  if (books.length === 0) {
    container.innerHTML = `
      <div class="no-books">
        <h2>No books added yet!</h2>
        <p>Start adding your finished books.</p>
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
        <button onclick="markBookAsUnFinished(${book.id})" class="btn">Mark as Unfinished</button>
        <div class="rate">
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
        </div>
      </div>
    `;

    container.appendChild(bookCard);
  });
}

addBookDom();


function markBookAsUnFinished(id) {
  let books = JSON.parse(localStorage.getItem("books")) || [];
  let finishedBooks = JSON.parse(localStorage.getItem("finishedBooks")) || [];

  const index = finishedBooks.findIndex(book => book.id === id);
  if (index !== -1) {
    const [book] = finishedBooks.splice(index, 1);
    book.finished = false;
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("finishedBooks", JSON.stringify(finishedBooks));
    alert("Book marked as unfinished");
    addBookDom();
  } else {
    console.error("Book not found");
  }
}
