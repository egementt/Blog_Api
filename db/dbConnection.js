const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydb', {useCreateIndex: true, useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("connected to db"))
.catch(err => console.log("db connection error" + err));