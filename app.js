const express = require('express');
//const { Server } = require('http');
//const { serialize } = require('v8');


//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

app.get('/',(req,res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat Bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ]
    res.render('index', {title: 'Home', blogs: blogs });
});

app.get('/about',(req,res) => {
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html', {root: __dirname });
    res.render('about', {title: 'About'});
});

app.get('/blogs/create',(req,res) => {
    res.render('create', {title: 'Create a new Blog'});
})

//404 page--must be at bottom to catch if nothing else matches
app.use((req,res)=>{
    res.status(404).render('404', {title: '404'});
});