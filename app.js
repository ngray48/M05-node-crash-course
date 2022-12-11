const express = require('express');
const morgan = require('morgan');
const mongoose =require('mongoose');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes')

//express app
const app = express();

//connect to mongo db
const dbURI ='mongodb+srv://netninja:Ninjas8mybaby!@nodetuts.ih7jv8a.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true} )
    //listen for requests
    .then((result) => app.listen(3000))
    .catch((err)=> console.log(err))

//register view engine
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public'));
//for accepting form data
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//routes
app.get('/',(req,res) => {
    res.redirect('/blogs');
});

app.get('/about',(req,res) => {
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html', {root: __dirname });
    res.render('about', {title: 'About'});
});

//blog routes
app.use('/blogs', blogRoutes);

//404 page--must be at bottom to catch if nothing else matches
app.use((req,res)=>{
    res.status(404).render('404', {title: '404'});
});