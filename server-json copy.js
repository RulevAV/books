/* eslint-disable no-console */
// eslint-disable-next-line no-undef
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./tests/test-data/db.json')
const middlewares = jsonServer.defaults()

const path = require('path');
const multer = require('multer');
const fs = require("fs");

const pathToSave = 'public/uploads';
const urlBase = '/uploads/';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(path.join(__dirname, pathToSave))) {
      fs.mkdirSync(path.join(__dirname, pathToSave));
    }
    cb(null, path.join(__dirname, pathToSave));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = path.win32.basename(file.originalname, ext);
    cb(null, `${name}-${Date.now()}${ext}`);
  }
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

const upload = multer({ storage });

server.post("/FileUpload", upload.any(), function (req, res) {

  let filedata = req.files;

  if (!filedata) {
    res.status(500).json(getError('File upload', 'Error during file upload', 500, null));
  }
  else {
    res.status(201).json({ filename: filedata[0].filename });
  }
});

server.post('/saveURL', function (req, res) {
  const entityId = req.body.entityId;
  const fileName = req.body.fileName;

  const db = router.db; //lowdb instance
  const book = db.getState().books.find(book => book.id === entityId);
  book.URLcover = `${urlBase}${fileName}`;
  db.write();
  res.status(200).json(book);
});

function responseInterceptor(req, res, next) {
  var originalSend = res.send;

  res.send = function () {
    let body = arguments[0];

    if (req.method === 'DELETE') {
      let urlSegms = req.url.split('/');
      let idStr = urlSegms[urlSegms.length - 1];
      let id = parseInt(idStr);
      id = isNaN(id) ? idStr : id;

      let newBody = Object.assign({}, JSON.parse(body));
      newBody.id = id;
      arguments[0] = JSON.stringify(newBody);
    }

    originalSend.apply(res, arguments);
  };

  next();
}

server.use(responseInterceptor);




// Use default router
server.use(router)

let port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running at port ${port}`);
})
