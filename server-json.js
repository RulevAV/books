/* eslint-disable no-console */
// eslint-disable-next-line no-undef
const jsonServer = require('json-server')
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const fetch = require('node-fetch');
const server = jsonServer.create()
const router = jsonServer.router('./tests/test-data/db.json')
const middlewares = jsonServer.defaults()
const secretKey = '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611';
const hashingSecret = "f844b09ff50c";

const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';
const RECAPTCHA_SECRET = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe';

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

const generateAccessToken = (userData) => {
  // expires after half and hour (1800 seconds = 30 minutes)
  return jwt.sign(userData, secretKey, { expiresIn: '1800s' });
}

const getErrors = (errorsToSend) => {
  let errors = [];
  if (errorsToSend && Array.isArray(errorsToSend)) {
    errors = [...errorsToSend];
  }

  return {
    errors
  };
};

const getError = (title, detail, status, pathToAttribute) => {
  let errors = [];
  errors.push({
    title,
    detail,
    status,
    source: pathToAttribute ? { pointer: pathToAttribute } : null
  });

  return getErrors(errors);
};

const getUnauthorizedError = () => getError('Login', 'You are not authorized, please log in', 401, null);
const getForbiddenError = () => getError('Forbidden', 'You don\'t have permissions to this resource', 403, null);

const getBaseRoute = (req) => {
  const path = req.path.split('/');
  return path.length > 1 ? path[1] : '/';
};

const isAuthorized = (req) => {
  const baseRoute = getBaseRoute(req);
  if (req.path === '/recaptcha' || req.path === '/users' || req.path === '/token' || ((baseRoute === 'meetings' || baseRoute === 'books' || baseRoute === 'speakers') && req.method === 'GET')) {
    return 200;
  }

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return 401;
  }

  try {
    let user = jwt.verify(token, secretKey);
    req.app.set('sessionUser', user);
    return 200;
  }
  catch (e) {
    return 403;
  }
};

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
  const entityId = parseInt(req.body.entityId);
  const fileName = req.body.fileName;

  const db = router.db; //lowdb instance
  const book = db.getState().books.find(book => book.id === entityId);

  book.urlCover = `${urlBase}${fileName}`;
  db.write();
  res.status(200).json(book);
});

server.use(jsonServer.bodyParser);

server.post('/token', function (req, res) {

  const emailFromBody = req.body.email;
  const passwordFromBody = req.body.password;
  const hashedPassword = crypto.createHmac('sha256', hashingSecret).update(passwordFromBody).digest('hex');

  const db = router.db; //lowdb instance
  const user = db.get('users').find({ email: emailFromBody, password: hashedPassword }).value();

  if (user) {
    const token = generateAccessToken({ email: user.email, username: user.username });
    res.json({ token });
  }
  else {
    res.status(401).json(getError('Login', 'Error logging in user with that e-mail and password', 401, null));
  }
});

// Check authorization
server.use((req, res, next) => {
  const authorizeCode = isAuthorized(req);
  if (authorizeCode === 200) {
    next() // continue to JSON Server router
  }
  else if (authorizeCode === 401) {
    res.status(401).json(getUnauthorizedError());
  }
  else if (authorizeCode === 403) {
    res.status(403).json(getForbiddenError());
  }
  else {
    res.status(403).json(getForbiddenError());
  }
});

// Get current user
server.use((req, res, next) => {
  if (req.path === '/users/me' && req.method === 'GET') {
    let storedUser = req.app.get('sessionUser');
    if (!storedUser) {
      res.sendStatus(404);
    }
    else {
      const db = router.db; //lowdb instance

      const user = db.getState().users.find(u => {
        return u.email === storedUser.email;
      })
      const userCopy = Object.assign({}, user);

      delete userCopy.password;
      delete userCopy.passwordConfirmation;
      res.json(userCopy);
    }
  }
  else {
    next();
  }
});

// Disable get, modify or delete users
server.use((req, res, next) => {
  if (getBaseRoute(req) === 'users' && (req.method === 'PATCH' || req.method === 'DELETE')) {
    res.sendStatus(404);
  }
  else if (getBaseRoute(req) === 'users' && req.method === 'GET') {
    let urlSegms = req.url.split('/');
    let idStr = urlSegms[urlSegms.length - 1];
    let id = parseInt(idStr);
    id = isNaN(id) ? idStr : id;

    const db = router.db; //lowdb instance
    const user = db.get('users').find({ id: id }).value();
    const userCopy = Object.assign({}, user);

    delete userCopy.password;
    delete userCopy.passwordConfirmation;
    res.json(userCopy);
  }
  else {
    // Continue to JSON Server router
    next();
  }
});

// Validate user to add
server.use((req, res, next) => {
  const db = router.db; //lowdb instance
  const user = db.get('users').find({ email: req.body.email }).value();
  const valid = !req.body || req.body && !user;
  if (getBaseRoute(req) === 'users' && req.method === 'POST' && !valid) {
    res.status(422).json(getError('Username', 'username is already taken', 422, '/data/attributes/username'));
  }
  else if (getBaseRoute(req) === 'users' && req.method === 'POST') {
    const hashedPassword = crypto.createHmac('sha256', hashingSecret).update(req.body.password).digest('hex');
    req.body.password = hashedPassword;
    req.body.passwordConfirmation = hashedPassword;
    next();
  }
  else {
    // Continue to JSON Server router
    next();
  }
});

server.use(async (request, response, next) => {
  if (request.path === '/recaptcha' && request.query.key) {
    const { success } = await (await fetch(RECAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET}&response=${request.query.key}`,
    })).json();

    response.json({ success });
  } else {
    next();
  }
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

// meetings GET
server.use((req, res, next) => {
  const speaker = Number(req.query.speaker);
  const book = Number(req.query.book);
  let date = req.query.date ? req.query.date : '';

  if (req.method === "GET" && req.path === "/meetings" && (!Number.isNaN(speaker) || !Number.isNaN(book) || date)) {
    date = date ? date : '';

    let meetings = router.db.getState().meetings.filter(m => {
      return m.dateMeeting.includes(date)
    });

    meetings = meetings.filter((m) => {
      m.reports = router.db.getState().reports.filter(r => r.meetingId === m.id);

      if (!Number.isNaN(speaker))
        m.reports = m.reports.filter(r => r.speakerId === speaker);

      if (!Number.isNaN(book))
        m.reports = m.reports.filter(r => r.bookId === book);

      m.reports = m.reports.map(r => {
        r.book = router.db.getState().books.filter(b => b.id === r.bookId)
        r.speaker = router.db.getState().speakers.filter(s => s.id === r.speakerId)
        return r;
      });

      return m.reports.length > 0 ? m : false
    });

    res.header('x-total-count', meetings.length);
    res.header('Access-Control-Expose-Headers', 'X-Total-Count')

    return res.json(meetings);
  }
  else {
    next();
  }
})

//error logger
server.use((req, res, next) => {
  if (getBaseRoute(req) === 'errors' && req.method === 'POST') {
    req.body.date = new Date().toISOString()
    req.body.ipClient = req.ip;
    next();
  }
  else {
    next();
  }
});

// Use default router
server.use(router)

let port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running at port ${port}`);
})
