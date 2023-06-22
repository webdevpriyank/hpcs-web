const ejs = require('ejs');
const fs = require('fs');
const Service = require('../models/Service')

// Render Global Anti-Termite Page
exports.viewCreateService = async (req, res, next) => {
    try {

        if (req.method === 'GET') {
            res.render('admin/createNewService.html')

        } else if (req.method === 'POST') {

            const name = req.body.name
            const description = req.body.description
            const keywords = req.body.keywords
            const breadcrumTitle = req.body.breadcrumTitle
            const imageUrl = req.body.imageUrl
            const h1Title = req.body.h1Title
            const descriptionRight = req.body.descriptionRight
            const h2Title = req.body.h2Title
            const descriptionBottom = req.body.descriptionBottom
            const cityName = req.body.cityName

            if (name === undefined) res.send({
                message: 'Missing Name'
            })
            if (description === undefined) res.send({
                message: 'Missing description'
            })
            if (keywords === undefined) res.send({
                message: 'Missing keywords'
            })
            if (breadcrumTitle === undefined) res.send({
                message: 'Missing breadcrumTitle'
            })
            if (imageUrl === undefined) res.send({
                message: 'Missing imageUrl'
            })
            if (h1Title === undefined) res.send({
                message: 'Missing h1Title'
            })
            if (descriptionRight === undefined) res.send({
                message: 'Missing descriptionRight'
            })
            if (h2Title === undefined) res.send({
                message: 'Missing h2Title'
            })
            if (descriptionBottom === undefined) res.send({
                message: 'Missing descriptionBottom'
            })
            if (cityName === undefined) res.send({
                message: 'Missing cityName'
            })

            try {
                const newService = new Service({
                    name,
                    description,
                    keywords,
                    breadcrumTitle,
                    imageUrl,
                    h1Title,
                    descriptionRight,
                    h2Title,
                    descriptionBottom,
                    cityName
                });

                newService.save()
                    .then(savedService => {
                        console.log('New service created:', savedService);
                        res.send({
                            'message': 'new service created successfully'
                        })
                    })
                    .catch(error => {
                        console.error('Error creating service:', error);
                        res.send({
                            'error': error.message
                        })
                    });
            } catch (error) {
                console.error(error)
            }
        }

    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};
