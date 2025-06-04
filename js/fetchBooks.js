function loadingSpin(){
 const spinner = document.createElement("div")
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


// Fetch books Google Books
const fetchBooks = async (subject = "fiction") => {
  
  try {
    loadingSpin()
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}`);
    const data = await response.json();
    displayBooks(data.items);
    console.log(data.items)
  } catch (error) {
    console.error("Error fetching books:", error);
  }finally {
    removeSpinner();
  }
};

function displayBooks(books) {
  const container = document.querySelector(".books");
  container.innerHTML = ""; 

  books.forEach(book => {
    
    container.innerHTML += `
      <div class="book-card">
        <img onclick="window.location.href='book-details.html?id=${book.id}'" src="${book.volumeInfo.imageLinks.thumbnail}" alt="${book.volumeInfo.title}" />
        <h3 class="book-title">${book.volumeInfo.title}</h3>
        <p class="book-author">${book.volumeInfo.authors[0]}</p>
        <div class="book-info">
          <div class="rate">
            <i class="ri-star-fill"></i>
            <span>${book.volumeInfo.averageRating || "N/A"}</span>
          </div>
          <i class="ri-heart-line"></i>
        </div>
      </div>
    `;
  });

  document.querySelector('.ri-star-fill').addEventListener('click', () => {
    console.log('clciked heart')
  })
}


fetchBooks();

