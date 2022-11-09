class user {
  borrowedBooks;
  constructor(firstName, lastName, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.borrowedBooks = [];
  }
  printBorrowedBooks() {
    console.log(this.borrowedBooks);
  }
}

let user1 = new user("Avi", "Pinto", "Haifa");
let user2 = new user("moshe", "cohen", "nesher");
let user3 = new user("ohad", "levi", "tel aviv");
let user4 = new user("ran", "peretz", "jerusalem");

class weeklyReport {
  constructor() {
    this.allUsersOfSystem = [];
  }
  addUser(newUser) {
    this.allUsersOfSystem.push(newUser);
  }
  printReport() {
    for (let i = 0; i < this.allUsersOfSystem.leangh; i++) {
      this.allUsersOfSystem[i].printBorrowedBooks();
    }
  }
}

let weeklyReport1 = new weeklyReport();
weeklyReport1.addUser(user1);
weeklyReport1.addUser(user2);
weeklyReport1.addUser(user3);
weeklyReport1.addUser(user4);
console.log(weeklyReport1);

class book {
  constructor(bookName, authorName, canBeBarrowed) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.canBeBarrowed = canBeBarrowed;
  }
  addBookToUser(user) {
    if (this.canBeBarrowed == "true") {
      user.borrowedBooks.push([this.bookName, this.authorName]);
    }
  }
}

let book1 = new book("harry potter", "jk", "true");
let book2 = new book("spider men", "marvel", "true");
let book3 = new book("booky", "booksy", "false");
book1.addBookToUser(user1);
book2.addBookToUser(user1);
book3.addBookToUser(user1);
console.log(user1);
