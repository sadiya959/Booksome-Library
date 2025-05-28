const container = document.querySelector(".books");

function addBookDom() {
  const books = JSON.parse(localStorage.getItem('books')) || [];

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

  books.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
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
        <button class="btn">Finish</button>
      </div>
    `;

    container.appendChild(bookCard);
  });
}

addBookDom()



const btns = container.querySelectorAll('.btn')


btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    console.log(e.target)
  })
})