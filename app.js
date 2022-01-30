const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const http = require("http");
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = '<This should be the connection string copied from Atlas MongoDB>';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  // .then((result) => app.listen(3000))
  // .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/products', requireAuth, (req, res) => res.render('products'));
app.get('/contact', (req, res) => res.render('contact'));

app.use(authRoutes);


http.createServer(app).listen(process.env.PORT || 3000);
console.log("BackEnd Server Is On=", process.env.PORT || 3000);