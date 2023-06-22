const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    keywords: { type: String, required: true },
    breadcrumTitle: { type: String, required: true },
    imageUrl: { type: String, required: true },
    h1Title: { type: String, required: true },
    descriptionRight: { type: String, required: true },
    h2Title: { type: String, required: true },
    descriptionBottom: { type: String, required: true },
    cityName: { type: String, required: true },
});

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;
