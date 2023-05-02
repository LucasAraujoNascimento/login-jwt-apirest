require('dotenv').config();

const express = require('express');
const app = express();

const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const loggedRouter = require('./routes/loggedRouter');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.sebclkl.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {console.log('Database Connected')})
.catch(error => {console.log(error)})

app.use('/', express.json(), userRouter);
app.use('/admin', express.json(), adminRouter);
app.use('/logged', express.json(), loggedRouter);

app.listen(process.env.PORT, () => {console.log('Server running')});