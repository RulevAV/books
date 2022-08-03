import Service from '@ember/service';
import ENV from 'books/config/environment';

export default Service.extend({
  getBooks(search, tags_like) {
    let queryParams = "";
    if (search) {
      queryParams = `?q=${search}`;
    }

    if (tags_like) {
      queryParams += queryParams ? `&tags_like=${tags_like}` : `?tags_like=${tags_like}`;
    }

    return fetch(`${ENV.backendUrl}/books${queryParams}`).then(response => response.json());
  },
  getBook(id) {
    return fetch(`${ENV.backendUrl}/books/${id}`).then(response => response.json());
  },
  deleteBook(book) {
    return fetch(`${ENV.backendUrl}/books/${book.id}`, { method: "DELETE" });
  },
  updateBook(book, uploadData) {
    return new Promise(async (resolve, reject) => {
      try {
        await fetch(`${ENV.backendUrl}/books/${book.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(book)
        });

        if (uploadData) {
          uploadData.url = `${ENV.fileUploadURL}`;
          const res =await uploadData.submit();
          console.log(res);
          await fetch(`${ENV.backendUrl}/saveURL`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              entityId: book.id,
              fileName: res.filename
            })
          });
        }

        resolve()
      } catch (error) {
        reject();
      }
    })
  },
  saveFile(uploadData) {
    uploadData.url = ENV.fileUploadURL;
    return uploadData.submit();
  },
  createBook(book, uploadData) {
    return new Promise(async (resolve, reject) => {
      try {
        const entity = await fetch(`${ENV.backendUrl}/books`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(book)
        }).then(response => response.json());

        if (uploadData) {
          uploadData.url = `${ENV.fileUploadURL}`;
          const res = await uploadData.submit();

          await fetch(`${ENV.backendUrl}/saveURL`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              entityId: entity.id,
              fileName: res.filename
            })
          });
        }

        resolve()
      } catch (error) {
        reject();
      }
    })
  },
  getSpeakers(search) {
    let queryParams = "";

    if (search) {
      queryParams = `?q=${search}`;
    }

    return fetch(`${ENV.backendUrl}/speakers${queryParams}`).then(response => response.json());
  },
  getSpeaker(id) {
    return fetch(`${ENV.backendUrl}/speakers/${id}`).then(response => response.json());
  },
  deleteSpeaker(speaker) {
    return fetch(`${ENV.backendUrl}/Speakers/${speaker.id}`, { method: "DELETE" });
  },
  updateSpeaker(speaker) {
    return fetch(`${ENV.backendUrl}/speakers/${speaker.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(speaker)
    });
  },
  createSpeaker(speaker) {
    return fetch(`${ENV.backendUrl}/speakers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(speaker)
    })
  }
});
