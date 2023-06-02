const ejs = require('ejs');
const fs = require('fs');

exports.renderHomePage = async(req, res) => {
    try {
        res.render('index.html')
    } catch (e) {
        console.error(e);
    };
};

