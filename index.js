const path = require('path');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('prerender-node').set('prerenderToken', 'k3xIdbb9kjdtqrVs3yw9'));

require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded( { extended: true } ));


// Set EJS as the template engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.engine('html', require('ejs').renderFile); // Add this line
app.set('view engine', 'html'); // Update this line
app.set('views', './views');



const routes = require('./routes/web')
app.use('/', routes);

// const webhook = require('./routes/webhook')
// app.use('/webhook', webhook);


const port = process.env.PORT || 3000;
app.listen(port, (err, res) => {
    console.log(err);
    console.log('App is Running');
});


