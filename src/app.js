const express = require('express');

// ...
const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');
const categoriesController = require('./controllers/categoriesController');
const postController = require('./controllers/postController');
const authMiddleware = require('./middlewares/authenticate.middleware');
const { fieldsValid } = require('./middlewares/loginFields.middleware');
const { 
  inputValid,
  categoryValid,
} = require('./middlewares/validate.input.middleware');
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
app.get('/categories', authMiddleware, categoriesController.getCategories);
app.post(
  '/post', 
  authMiddleware, 
  inputValid,
  categoryValid, 
  postController.addPost,
);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
