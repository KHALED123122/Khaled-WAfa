const books = [
    { no: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565" },
    { no: 2, title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780061120084" },
    { no: 3, title: "1984", author: "George Orwell", isbn: "9780451524935" }
];

function displayBooks(list) {
    const tbody = document.getElementById('tbody');
    
    list.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.no}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
        `;
        tbody.appendChild(row);
    });
}
displayBooks(books);
// function filterBooksByTitle(title) {
//     if (!title) return books;
//     return books.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
// }

// document.addEventListener('DOMContentLoaded', () => {
//     displayBooks(books);
// });
