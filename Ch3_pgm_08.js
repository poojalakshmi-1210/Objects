// Using dot notation to access property values

var book;

book = {
  title     : "The Hobbit",
	author    : "J. R. R. Tolkien",
	published : 1937
};

console.log(book.title);
console.log(book.author);
console.log(book.published); // Output: 1937

var book2 = {
    title     : "Harry Potter and the Philosopher's Stone",
    author    : "J.K. Rowling",
    published : 1997
};

console.log(book2.title);   // Output: "Harry Potter and the Philosopher's Stone"
console.log(book2.author);  // Output: "J.K. Rowling"
console.log(book2.published); // Output: 1997


/* Further Adventures
 *
 * 1) Log the published property to the console.
 *
 * 2) Add a second book.
 *
 * 3) Log its details to the console.
 *
 * 4) In the console tab, at the prompt,
 *    type in book.title and press Enter.
 *    Once the program is run, object properties
 *    are available interactively via the console.
 *
 */