console.log("this is index,js")

//constructor
class Book {
    constructor(Name, author, type) {
        this.Name = Name;
        this.author = author;
        this.type = type;
    }
}





//display
class Display {
    // constructor() {
    // }
    //validatioon
    validate(Book) {
        if (Book.Name.length < 3 || Book.author.length < 3) {
            return false;
        }
        else {
            return true;
        }
    }
    //add methods to display prototype
    add(book) {
        // console.log("adding to ui");
        // console.log(book.Name)
        let tableBody = document.getElementById('tableBody');
        let uiString = `
                    <tr>
                        <td>${book.Name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>
    `;
        tableBody.innerHTML += uiString;
    }
    show(msg, desciption) {
        let message = document.getElementById('msg');
        message.innerHTML = `<hr>
                            <div class="alert alert-${msg} alert-dismissible fade show" role="alert">
                                <strong>Holy guacamole!</strong> ${desciption}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        <hr>`;

        setTimeout(function () {
            message.innerHTML = '';
        }, 5000);
    }
    // Display.prototype.store = function(book){
    //     // console.log(book)
    //     a = localStorage.setItem('storing', JSON.stringify(book));
    //     b = localStorage.getItem('storing');
    //     console.log(JSON.parse(b));
    // }
    clear() {
        let libraryform = document.getElementById('libraryForm');
        libraryform.reset();
    }
}





//add submit event listener to form libraryform
let libraryform = document.getElementById('libraryForm');
libraryform.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e){
    // console.log("u hve submited");
    let Name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type
    
    if(fiction.checked){
        type = fiction.value;
    }
    else if(programming.checked){
        type = programming.value;
    }
    else if(cooking.checked){
        type = cooking.value;
    }


    let book = new Book(Name, author, type);

    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        // display.store(book);
        display.clear();
        display.show('success', 'Your book has successfuly been added');
    }
    else{
        //show error to user
        display.show('danger', 'Something went wrong pkease enter coorect details of the book');
    }
    // console.log(book)
    e.preventDefault();
}
