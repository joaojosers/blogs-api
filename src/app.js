const express = require('express');

// ...
const loginController = require('./controllers/loginController');
// const authMiddleware = require('./middlewares/authenticate.middleware');
const { fieldsValid } = require('./middlewares/loginFields.middleware');

const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', fieldsValid, loginController.execute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
