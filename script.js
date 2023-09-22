const myLibrary = ["book 1", "book 2", "book 3"];

const displayBtn = document.querySelector('#btn');
const display = document.querySelector('.display');
const dial = document.querySelector('#dial');
const submitBtn = document.querySelector('#submit');
const input = document.querySelector('input')
const book = document.querySelector('#bookName')
const author = document.querySelector('#author');
const pages = document.querySelector('#page')

displayBtn.addEventListener('click', () => {
    // loop();
    dial.showModal();
})
  
submitBtn.addEventListener('click', () => {

    let book_name = document.createElement('p');
    book_name.classList.add('hello');
    book_name.innerText = book.value;
    div.appendChild(book_name);

    let author_name = document.createElement('p')
    author_name.classList.add('hello')
    author_name.innerText = author.value;
    div.appendChild(author_name)

    let page_number = document.createElement('p')
    page_number.classList.add('hello')
    page_number.innerText = page.value;
    div.appendChild(page_number)

    console.log(book.value)
    console.log(author.value)
    console.log(pages.value)
})

function loop(){
     myLibrary.forEach((book) => {
        const para = document.createElement('p')
        para.innerText = book;
        document.body.appendChild(para);
    })
}


