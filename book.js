let myLibrary = [];

function Book(title, author, numPages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.hasBeenRead = hasBeenRead;

  // TODO: change hasBeenRead to a boolean, then change the output to print two different strings
  // based on true or false
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.numPages}, ${this.hasBeenRead}`;
  };
}

function createRemoveButton(index) {
  const removeButton = document.createElement('button');
  removeButton.textContent = 'X';
  // add array index to div class
  removeButton.classList.add(index);

  // add remove button behavior
  removeButton.addEventListener('click', () => {
    myLibrary.splice(index, 1);

    // reprint the new library
    displayLibrary();
  });

  return removeButton;
}

function displayLibrary() {
  const libraryDisplay = document.querySelector('.output');

  // clear display
  libraryDisplay.textContent = '';

  for (let i = 0; i < myLibrary.length; i += 1) {
    const bookElement = document.createElement('div');
    bookElement.classList.add(i); // add index number
    bookElement.textContent = myLibrary[i].info();
    bookElement.appendChild(createRemoveButton(i));
    libraryDisplay.appendChild(bookElement);
  }
}

function addBookToLibrary(e) {
  e.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const number = document.querySelector('#pages');
  const hasBeenRead = document.querySelector('#hasBeenRead');

  const newBook = new Book(title.value, author.value, number.value, hasBeenRead.checked);
  myLibrary.push(newBook);

  // reprint the new library
  displayLibrary();
}

// search all elements for remove buttons and add event listeners
// function removeBookButtonListener() {
//   const removeButtons = document.querySelectorAll('div.output button');
//   console.log(removeButtons);

//   removeButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//       const index = button.className;

//       myLibrary.splice(index, 1);

//       // reprint the new library
//       displayLibrary();
//     });
//   });
// }

const addBookForm = document.querySelector('#addBookForm');
addBookForm.addEventListener('submit', addBookToLibrary);

const theHobbit = new Book('The Hobbit', 'JRR Tolkien', 295, false);
const harryPotter = new Book('Harry Potter', 'JK Rowling', 223, false);
const gameOfThrones = new Book('Game of Thrones', 'George RR Martin', 694, false);

myLibrary.push(theHobbit);
myLibrary.push(harryPotter);
myLibrary.push(gameOfThrones);

displayLibrary();