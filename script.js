const myLibrary = ["book 1", "book 2", "book 3"];

const displayBtn = document.querySelector('#btn');
const display = document.querySelector('.display');
const dial = document.querySelector('#dial');
const submitBtn = document.querySelector('#submit');
const input = document.querySelector('input')
const book = document.querySelector('#bookName')
const author = document.querySelector('#author');
const pages = document.querySelector('#page')
const read = document.querySelector('#read')

displayBtn.addEventListener('click', () => {
    // loop();
    dial.showModal();
})

function Book(bookName, authorName, pages, read){
    this.bookName = bookName;
    this.authorName = authorName;
    this.pages = pages;
    this.read = read;
    this.bookPush = function(){
        myLibrary.push(bookName);
        myLibrary.push(authorName)
        myLibrary.push(pages)
        myLibrary.push(read)
    }
}



submitBtn.addEventListener('click', () => {
    // console.log(book.value)
    let book1 = new Book(book.value, author.value, pages.value, );
    book1.bookPush();

    let newDiv = document.createElement('div')
    newDiv.classList.add('inner')
    display.appendChild(newDiv);

    let bookGrid = document.createElement('p')
    bookGrid.innerText = `Book name: ${book.value}`
    newDiv.appendChild(bookGrid)

    let authorGrid = document.createElement('p')
    authorGrid.innerText = `Author: ${author.value}`
    newDiv.appendChild(authorGrid)

    let pageGrid = document.createElement('p');
    pageGrid.innerText = `Pages: ${pages.value}`
    newDiv.appendChild(pageGrid)

    let readGrid = document.createElement('p')
    if(read.checked){
        readGrid.innerText = `Not Read`;
    }
    else{
        readGrid.innerText = `Read`;
    }

    newDiv.appendChild(readGrid);
    dial.close();
})


function loop(){
     myLibrary.forEach((book) => {
        const para = document.createElement('p')
        para.innerText = book;
        document.body.appendChild(para);
    })
}


