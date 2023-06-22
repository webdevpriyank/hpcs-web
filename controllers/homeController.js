const ejs = require('ejs');
const fs = require('fs');

// Home
exports.renderHomePage = async(req, res, next) => {
    try {
        data1 = {
            title: "Home :: Heena Pest Control Services",
            description: "Call +919825176003 Heena Pest Control Silvassa is Leading Company in Silvassa, Vapi, providing all types of pest control services for Home & Office",
            keywords: "pest control in Silvassa, Vapi, heena pest control, heena pest control silvassa, heena pest control dadra, heena pest control vapi, heena pest control valsad, heena pest control umargam, heena pest control India, heena pest control services in daman, anti-termite treatment, fumigation service"
        };
        res.render('index.html', data1)
    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};

exports.renderSilvassaHomePage = async(req, res, next) => {
    try {
        data1 = {
            title: "Best Pest Control in Silvassa",
            description: "Call +919825176003 Heena Pest Control Silvassa is Leading Company in Silvassa providing all types of pest control services for Home & Office",
            keywords: "pest control in Silvassa, anti-termite treatment in silvassa, silvassa best pest control, cockroach control in silvassa, rodent control in silvasa, pest control silvassa"
        };
        res.render('city/home.html', data1)
    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};

// About
exports.renderAboutPage = async(req, res) => {
    try {
        data2 = {
            title: "About :: Heena Pest Control Services",
            description: "Call +919825176003 Heena Pest Control Silvassa is Leading Company in Silvassa, Vapi, providing all types of pest control services for Home & Office",
            keywords: "pest control in Silvassa, Vapi, heena pest control, heena pest control silvassa, heena pest control dadra, heena pest control vapi, heena pest control valsad, heena pest control umargam, heena pest control India, heena pest control services in daman, anti-termite treatment, fumigation service"
        };
        res.render('about.html', data2)
    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};

// Cpntact
exports.renderContactPage = async(req, res) => {
    try {
        data3 = {
            title: "Contact :: Heena Pest Control Services",
            description: "Call +919825176003 Heena Pest Control Silvassa is Leading Company in Silvassa, Vapi, providing all types of pest control services for Home & Office",
            keywords: "pest control in Silvassa, Vapi, heena pest control, heena pest control silvassa, heena pest control dadra, heena pest control vapi, heena pest control valsad, heena pest control umargam, heena pest control India, heena pest control services in daman, anti-termite treatment, fumigation service"
        };
        res.render('contact.html', data3)
    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};

