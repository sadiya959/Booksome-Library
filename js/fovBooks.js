const container = document.querySelector(".books");

async function fetchBooks() {
  try {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    return books;
  } catch (error) {
    console.error("Error getting books from localStorage:", error);
    return [];
  }
}

function displayBooks(books) {
  container.innerHTML = ""; 

  books.forEach((book, bookIndex) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const savedRating = book.userRating || 0;

    bookCard.innerHTML = `
      <img src="${book.cover}" alt="${book.title}" />
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">${book.author}</p>
      <div class="book-info">
        <div class="rate" data-index="${bookIndex}">
          ${[1, 2, 3, 4, 5].map(i => `
            <i class="${i <= savedRating ? "ri-star-fill" : "ri-star-line"}" data-rating="${i}"></i>
          `).join("")}
        </div>
        <span class="book-price">${book.year}</span>
        <i class="ri-heart-line"></i>
      </div>
    `;
    container.appendChild(bookCard);
  });

  document.querySelectorAll(".rate").forEach(rateContainer => {
    const bookIndex = rateContainer.dataset.index;
    const stars = rateContainer.querySelectorAll("i");

    stars.forEach((star, idx) => {
      star.addEventListener("click", () => {
        const rating = parseInt(star.dataset.rating);
        stars.forEach((s, i) => {
          if (i < rating) {
            s.classList.add("ri-star-fill");
            s.classList.remove("ri-star-line");
          } else {
            s.classList.remove("ri-star-fill");
            s.classList.add("ri-star-line");
          }
        });

        // Save rating in localStorage
        books[bookIndex].userRating = rating;
        localStorage.setItem("books", JSON.stringify(books));
      });
    });
  });
}

fetchBooks().then(displayBooks);
