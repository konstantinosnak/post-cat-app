const express = require('express');
const app = express();
const port = 3000;
const dataSource = require('./connect').dataSource;

const postRoute = require('./routes/post.route');
const categoryRoute = require('./routes/category.route');

app.use(express.json());

app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)

app.listen(port, () => {
    console.log(`Listening to ${port}!`)
})
