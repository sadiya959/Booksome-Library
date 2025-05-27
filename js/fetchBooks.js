const fetchBooks = async (subject = "fiction") => {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}`);
    const data = await response.json();
    displayBooks(data.items);
    console.log(data.items)
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

function displayBooks(books) {
  const container = document.querySelector(".books");
  container.innerHTML = ""; 

  books.forEach(book => {
    container.innerHTML += `
      <div class="book-card">
        <img src="${book.volumeInfo.imageLinks.thumbnail}" alt="${book.volumeInfo.title}" />
        <h3 class="book-title">${book.volumeInfo.title}</h3>
        <p class="book-author">${book.volumeInfo.authors[0]}</p>
        <div class="book-info">
          <div class="rate">
            <i class="ri-star-line"></i>
            <i class="ri-star-line"></i>
            <i class="ri-star-line"></i>
            <i class="ri-star-line"></i>
            <i class="ri-star-line"></i>
          </div>
          <i class="ri-heart-line"></i>
        </div>
      </div>
    `;
  });
}



fetchBooks();