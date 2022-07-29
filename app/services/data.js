import Service from '@ember/service';
import ENV from 'books/config/environment';

export default Service.extend({
  getBooks() {
    return fetch(`${ENV.backendUrl}/books`).then(response => response.json());
  },
  getBook(id) {
    return fetch(`${ENV.backendUrl}/books/${id}`).then(response => response.json());
  },
  deleteBook(book) {
    return fetch(`${ENV.backendUrl}/books/${book.id}`, { method: "DELETE" });
  },
  updateBook(book) {
    return fetch(`${ENV.backendUrl}/books/${book.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    });
  },
  createBook(book) {
    return fetch(`${ENV.backendUrl}/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    });
  },
  getSpeakers() {
    return fetch(`${ENV.backendUrl}/speakers`).then(response => response.json());
  },
  getSpeaker(id) {
    return fetch(`${ENV.backendUrl}/speakers/${id}`).then(response => response.json());
  }
});
