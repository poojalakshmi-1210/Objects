// Concatenating string properties

var book1;
var book2;

book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien"
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman"
};

console.log(book1.title + " by " + book1.author);
console.log(book2.title + " by " + book2.author);

var book3 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    published: 1960
};

console.log(book3.title + " by " + book3.author + ", published in " + book3.published);  // Output: "To Kill a Mockingbird by Harper Lee, published in 1960"



/* Further Adventures
 *
 * 1) Add a third book.
 *
 * 2) Log its details to the console.
 *
 * 3) Add a third property.
 *
 * 4) Update the messages logged to include the
 *    new property.
 *
 */