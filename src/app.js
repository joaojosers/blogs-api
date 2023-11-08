const express = require('express');

// ...
const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');
const categoriesController = require('./controllers/categoriesController');
const authMiddleware = require('./middlewares/authenticate.middleware');
const { fieldsValid } = require('./middlewares/loginFields.middleware');
// const { validatePostUser } = require('./utilities/schemaValidation');

const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', fieldsValid, loginController.execute);
app.post('/user', userController.addNewUser);
app.get('/user', authMiddleware, userController.getAllUsers); // Adicione esta linha para o endpoint GET /user
app.get('/user/:id', authMiddleware, userController.getUserById);
app.post('/categories', authMiddleware, categoriesController.addNewCategory);
// app.get('/categories', categoriesController.getCategories);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
