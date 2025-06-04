function loadingSpin() {
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.setAttribute("id", "loading-spinner");
  document.body.append(spinner);
}

function removeSpinner() {
  const spinner = document.getElementById("loading-spinner");
  if (spinner) {
    spinner.remove();
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector(".container");
  const params = new URLSearchParams(window.location.search);
  const bookId = params.get("id");

  if (!bookId) {
    container.innerHTML = "<p>No book ID provided.</p>";
    return;
  }

  try {
    loadingSpin();

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
    const data = await response.json();
    const book = data.volumeInfo;

    container.innerHTML = `
      <div class="book-details">
        <div class="book-cover">
          <img src="${book.imageLinks?.thumbnail}" alt="book cover" class="cover-image" />
        </div>
        <div class="book-info">
          <h1 class="book-title">${book.title}</h1>
          <p class="book-author">by ${book.authors?.join(", ") || "Unknown"}</p>
          <p class="book-description">${book.description || "No description available."}</p>
          <div class="more-details">
            <span class="book-genre">Genre: ${book.categories?.join(", ") || "N/A"}</span>
            <span class="book-published">Published: ${book.publishedDate || "N/A"}</span>
            <div class="book-rating">
              <i class="ri-star-fill"></i>
              ${book.averageRating || "N/A"}
            </div>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    console.error("Error loading book details:", error);
    container.innerHTML = "<p>Failed to load book details.</p>";
  } finally {
    removeSpinner();
  }
});
