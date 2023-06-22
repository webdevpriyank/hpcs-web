const path = require('path');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const express = require('express');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createReadStream } = require('fs');
const connectDB = require('./database/db');

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


// Call the connectDB function to establish the connection
connectDB();

app.use((req, res, next) => {
  const services = ['Service 1', 'Service 2', 'Service 3'];
  res.locals.services = services;
  next();
});

const routes = require('./routes/web')
app.use('/', routes);

const webhook = require('./routes/webhook')
app.use('/webhook', webhook);

const admin = require('./routes/admin')
app.use('/admin', admin);


app.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  
  // Create a new sitemap
  const sitemapStream = new SitemapStream({ hostname: 'https://heenapestcontrol.com' });
  
  // Add URLs to the sitemap
  sitemapStream.write({ url: '/' });
  sitemapStream.write({ url: '/about' });
  sitemapStream.write({ url: '/services' });
  sitemapStream.write({ url: '/contact' });
  sitemapStream.write({ url: '/services/anti-termite-treatment' });
  sitemapStream.write({ url: '/services/general-pest-control-service' });
  sitemapStream.write({ url: '/services/rodent-control-service' });
  sitemapStream.write({ url: '/services/herbal-pest-control-treatment' });
  sitemapStream.write({ url: '/services/cockroach-control-treatment' });
  sitemapStream.write({ url: '/services/bird-netting-service' });
  sitemapStream.write({ url: '/services/wood-borer-treatment' });
  sitemapStream.write({ url: '/services/industrial/fogging-service' });
  sitemapStream.write({ url: '/services/industrial/fumigation-service' });
  sitemapStream.write({ url: '/pest-control-service-provider/city/silvassa' });
  sitemapStream.write({ url: '/anti-termite-treatment/city/silvassa' });
  sitemapStream.write({ url: '/anti-termite-treatment/city/vapi' });
  sitemapStream.write({ url: '/anti-termite-treatment/city/valsad' });

  // Add more URLs as needed
  
  sitemapStream.end();
  
  // Convert the sitemap stream to a string and send it as the response
  streamToPromise(sitemapStream).then((sitemapXML) => {
    res.send(sitemapXML);
  }).catch((err) => {
    res.status(500).end();
  });
});

app.get('/robots.txt', (req, res) => {
  res.sendFile('robots.txt', { root: __dirname });
});


// Set up the 404 middleware
app.use((req, res, next) => {
    res.status(404).render('404');
  });
  
const port = process.env.PORT || 3000;
app.listen(port, (err, res) => {
    console.log(err);
    console.log('App is Running');
});


