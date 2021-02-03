const express = require('express');
require('./db/dbConnection');

const blogRouter = require('./router/blog_router');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/blog', blogRouter);


app.get('/', (req,res) => {
    res.json({'msg' : 'Welcome to blog api'});
})

app.get('/api/users/all', (req,res) => {
    console.log(req.query.sortBy);
   
});


app.listen(3000, ()=> {console.log("server running, port: 3000")})