const ejs = require('ejs');
const fs = require('fs');

// Render Global Anti-Termite Page
exports.antiTermitePage = async (req, res, next) => {
    try {
        data1 = {
            title: "Anti-termite Treatment : Experts in termite treatment",
            description: "best anti-termite treatment provider with years of experience. Best anti-termite service provider in Vapi, Silvassa, Daman",
            keywords: "Anti-termite treatment, anti-termite treatment in Silvassa, anti-termite treatment in vapi, best anti-termite service provider",
            breadcrumTitle: "Anti-Termite Treatment",
            imageUrl: "/img/service/antii.jpg",
            h1Title: "Leading Anti Termite Treatment Provider with 14+ Years of Experience...",
            descriptionRight: `
                    <p>
                        At <strong>HPCS</strong>, we are dedicated to protecting your property from the destructive nature of termites. Our comprehensive anti-termite treatment service offers a range of solutions designed to eradicate termites and provide long-lasting protection. With our expertise and a commitment to quality, we ensure that your property remains termite-free for years to come.
                    </p>

                    <ol>
                        <li>
                            <strong>Inspection and Assessment:</strong> Our highly skilled technicians conduct a thorough inspection of your property to identify existing termite infestations and assess the extent of the damage. This step allows us to develop a customized treatment plan tailored to your specific needs.
                        </li>
                        <li>
                            <strong>Termite Extermination:</strong> We employ advanced techniques and industry-approved products to eliminate termites from your property. Our team of experts uses targeted methods to eradicate termites from their source, ensuring effective and long-lasting results.
                        </li>
                        <li>
                            <strong>Preventive Treatments:</strong> Prevention is key to protecting your property from future termite infestations. We offer preventive treatments to create a barrier against termites, employing termiticides and other proven methods to keep these pests at bay.
                        </li>
                        <li>
                            <strong>Termite Baiting Systems:</strong> In addition to traditional treatment methods, we also provide termite baiting systems as an eco-friendly alternative. These systems work by attracting and eliminating termites in a targeted manner, minimizing the use of chemicals while effectively controlling termite populations.
                        </li>
                        <li>
                            <strong>Ongoing Monitoring and Maintenance:</strong> We understand the importance of ongoing termite control. Our service includes regular monitoring visits to ensure the continued effectiveness of the treatment. If any signs of termite activity are detected during the monitoring phase, we take immediate action to prevent further infestation.
                        </li>
                    </ol>
            `,
            h2Title: `The Best Anti Termite Treatment at Constructional Area in Vapi, Daman, Silvassa, Valsad, Umabrgam and more...`,
            descriptionBottom: `
            <h4>Why Choose Us?</h4>
                    <ol>
                        <li>
                            Expert Technicians: Our team of skilled technicians is trained in the latest termite treatment techniques. With their knowledge and experience, they deliver effective and reliable solutions tailored to your property's unique requirements.
                        </li>
                        <li>
                            Quality Products and Methods: We use only industry-approved products and methods that are safe for your property and the environment. Our treatments are designed to provide maximum effectiveness while minimizing any potential risks.
                        </li>
                        <li>
                            Warranty: We stand behind the quality of our work. We offer a comprehensive 3-year warranty on our anti-termite treatment services, providing you with peace of mind and assurance that your property remains protected.
                        </li>
                        <li>
                            Customized Solutions: We understand that each property is different. Our experts assess your specific situation and develop a customized treatment plan that addresses your unique needs, ensuring the most effective and efficient results.
                        </li>
                        <li>
                            Excellent Customer Service: We prioritize customer satisfaction and strive to deliver exceptional service at every step. Our friendly and knowledgeable team is available to address any questions or concerns you may have, providing you with a hassle-free experience.
                        </li>
                        <li>
                            Protect your property from the devastating effects of termites. Contact us today to schedule an inspection and take the first step towards a termite-free environment. With our comprehensive anti-termite treatment services and warranty, we are your trusted partner in termite control and prevention.
                        </li>
                    </ol>
                        <a class="default-btn" href="/contact">Send Enquiry</a>
                        <br><br>
                        <h2>Call Us At Our Helpline No +91 99748 06633 for any enquiry.
                        </h2>
            `,
        };

        res.render('services/service-details-page.html', data1)
    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};

// Render Global General Pest Control Page
exports.generalPestControlPage = async (req, res, next) => {
    try {
        const currentUrl = req.url;

        if (currentUrl === '/services/general-pest-control-service') {
            data1 = {
                title: "General Pest Control Service",
                description: "Heena Pest Control Services is one of the most popular pest control services provider with years of experience and trusted by customers.",
                keywords: "general pest control services, pest control services, pest control services for home, home pest control, kitchen cleaning, cockroach control",
                breadcrumTitle: "General Pest Control Services",
                imageUrl: "/img/service/general.jpeg",
                h1Title: `Leaders in General Pest Control Services in Vapi, Silvassa, Valsad, Daman, Umargam and other area.`,
                descriptionRight: `
                <p>With over 14 years of experience, Heena Pest Control Services has been providing reliable and effective general pest control services to both residential and commercial customers. Our commitment to excellence and customer satisfaction has earned us the trust of over 5000 residential customers and 800 commercial clients.                </p>
                <p>At Heena Pest Control Services, we understand the importance of maintaining a pest-free environment in your homes and businesses. Pests can pose health risks, damage property, and create discomfort. Our goal is to offer comprehensive pest control solutions to eliminate pests and ensure your peace of mind.</p>
                <h6>Our General Pest Control Services cover a wide range of common pests, including:</h6>
                <ol>
                    <li>
                        <strong>Cockroach Control:</strong> Our expert technicians employ targeted treatments to eliminate cockroaches from your premises. We focus on identifying and treating their hiding places, ensuring complete eradication.
                    </li>
                    <li>
                        <strong>Ant Control:</strong> Ants can be persistent intruders, both indoors and outdoors. We use effective methods to locate and eliminate ant colonies, preventing further infestations.
                    </li>
                    <li>
                        <strong>Rodent Control:</strong> Rats and mice can cause significant damage and pose health risks. Our rodent control solutions involve a combination of trapping, baiting, and sealing entry points to prevent future infestations.
                    </li>
                    <li>
                        <strong>Bed Bug Control:</strong> Bed bugs can be a nightmare, causing sleepless nights and discomfort. Our bed bug control treatments target all stages of the bed bug life cycle, ensuring thorough eradication.
                    </li>
                    <li>
                        <strong>Termite Control:</strong> Termites can wreak havoc on your property. Our experienced team utilizes advanced techniques and quality products to protect your home or business from these destructive pests.
                    </li>
                    <li>
                        <strong>Spider Control:</strong> Spiders may not pose significant health risks, but their presence can be unsettling. Our spider control services effectively remove spiders and their webs, creating a safer and more pleasant environment.
                    </li>
                </ol>
                `,
                h2Title: "We're WHO-GMO, HACCAP & ISO 9001 Certified Company and Proud Members of PCAI & BNI",
                descriptionBottom: `
                <h4>When you choose Heena Pest Control Services, you can expect:</h4>
                <ol>
                    <li>
                        <strong>Experienced Professionals: </strong>Our technicians have extensive knowledge and expertise in pest control. They undergo regular training to stay updated on the latest techniques and products, ensuring effective treatments.
                    </li>
                    <li>
                        <strong>Customized Solutions: </strong>We understand that every pest situation is unique. Our team conducts a thorough inspection to assess the extent of the infestation and develops a tailored pest control plan that suits your specific needs.
                    </li>
                    <li>
                        <strong>Safe and Environmentally Friendly Approach: </strong>We prioritize the safety of your family, pets, and the environment. Our treatments utilize eco-friendly products that are effective against pests while minimizing any potential risks.
                    </li>
                    <li>
                        <strong>Timely Service: </strong>We value your time and strive to provide prompt service. Our team ensures that appointments are scheduled at your convenience, and we aim for efficient and timely execution of pest control treatments.
                    </li>
                    <li>
                        <strong>Customer Satisfaction: </strong>Customer satisfaction is at the core of our business. We are dedicated to delivering exceptional service and achieving long-term pest control solutions. Your happiness is our top priority.
                    </li>
                </ol>
                <p>
                    With Heena Pest Control Services, you can trust that your pest control needs are in capable hands. Contact us today for a pest-free and healthier living or working environment. Let us be your reliable partner in pest control.
                </p>
                `,
    
            };
        }

        res.render('services/service-details-page.html', data1)

    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};

// Render Herbal Pest Control Page
exports.herbalPestControlPage = async (req, res, next) => {
    try {
        const currentUrl = req.url;

        if (currentUrl === '/services/general-pest-control-service') {
            data1 = {
                title: "General Pest Control Service",
                description: "Heena Pest Control Services is one of the most popular pest control services provider with years of experience and trusted by customers.",
                keywords: "general pest control services, pest control services, pest control services for home, home pest control, kitchen cleaning, cockroach control",
                breadcrumTitle: "General Pest Control Services",
                imageUrl: "/img/service/general.jpeg",
                h1Title: `Leaders in General Pest Control Services in Vapi, Silvassa, Valsad, Daman, Umargam and other area.`,
                descriptionRight: `
                <p>With over 14 years of experience, Heena Pest Control Services has been providing reliable and effective general pest control services to both residential and commercial customers. Our commitment to excellence and customer satisfaction has earned us the trust of over 5000 residential customers and 800 commercial clients.                </p>
                <p>At Heena Pest Control Services, we understand the importance of maintaining a pest-free environment in your homes and businesses. Pests can pose health risks, damage property, and create discomfort. Our goal is to offer comprehensive pest control solutions to eliminate pests and ensure your peace of mind.</p>
                <h6>Our General Pest Control Services cover a wide range of common pests, including:</h6>
                <ol>
                    <li>
                        <strong>Cockroach Control:</strong> Our expert technicians employ targeted treatments to eliminate cockroaches from your premises. We focus on identifying and treating their hiding places, ensuring complete eradication.
                    </li>
                    <li>
                        <strong>Ant Control:</strong> Ants can be persistent intruders, both indoors and outdoors. We use effective methods to locate and eliminate ant colonies, preventing further infestations.
                    </li>
                    <li>
                        <strong>Rodent Control:</strong> Rats and mice can cause significant damage and pose health risks. Our rodent control solutions involve a combination of trapping, baiting, and sealing entry points to prevent future infestations.
                    </li>
                    <li>
                        <strong>Bed Bug Control:</strong> Bed bugs can be a nightmare, causing sleepless nights and discomfort. Our bed bug control treatments target all stages of the bed bug life cycle, ensuring thorough eradication.
                    </li>
                    <li>
                        <strong>Termite Control:</strong> Termites can wreak havoc on your property. Our experienced team utilizes advanced techniques and quality products to protect your home or business from these destructive pests.
                    </li>
                    <li>
                        <strong>Spider Control:</strong> Spiders may not pose significant health risks, but their presence can be unsettling. Our spider control services effectively remove spiders and their webs, creating a safer and more pleasant environment.
                    </li>
                </ol>
                `,
                h2Title: "We're WHO-GMO, HACCAP & ISO 9001 Certified Company and Proud Members of PCAI & BNI",
                descriptionBottom: `
                <h4>When you choose Heena Pest Control Services, you can expect:</h4>
                <ol>
                    <li>
                        <strong>Experienced Professionals: </strong>Our technicians have extensive knowledge and expertise in pest control. They undergo regular training to stay updated on the latest techniques and products, ensuring effective treatments.
                    </li>
                    <li>
                        <strong>Customized Solutions: </strong>We understand that every pest situation is unique. Our team conducts a thorough inspection to assess the extent of the infestation and develops a tailored pest control plan that suits your specific needs.
                    </li>
                    <li>
                        <strong>Safe and Environmentally Friendly Approach: </strong>We prioritize the safety of your family, pets, and the environment. Our treatments utilize eco-friendly products that are effective against pests while minimizing any potential risks.
                    </li>
                    <li>
                        <strong>Timely Service: </strong>We value your time and strive to provide prompt service. Our team ensures that appointments are scheduled at your convenience, and we aim for efficient and timely execution of pest control treatments.
                    </li>
                    <li>
                        <strong>Customer Satisfaction: </strong>Customer satisfaction is at the core of our business. We are dedicated to delivering exceptional service and achieving long-term pest control solutions. Your happiness is our top priority.
                    </li>
                </ol>
                <p>
                    With Heena Pest Control Services, you can trust that your pest control needs are in capable hands. Contact us today for a pest-free and healthier living or working environment. Let us be your reliable partner in pest control.
                </p>
                `,
    
            };
        }

        res.render('services/service-details-page.html', data1)

    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};


exports.cockroachControlPage = async (req, res, next) => {
    try {
        data1 = {
            title: "Anti-termite Treatment : Experts in termite treatment",
            description: "best anti-termite treatment provider with years of experience. Best anti-termite service provider in Vapi, Silvassa, Daman",
            keywords: "Anti-termite treatment, anti-termite treatment in Silvassa, anti-termite treatment in vapi, best anti-termite service provider"
        };
        res.render('services/anti-termite.html', data1)
    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};

exports.rodentControlTreatmentPage = async (req, res, next) => {
    try {
        data1 = {
            title: "Anti-termite Treatment : Experts in termite treatment",
            description: "best anti-termite treatment provider with years of experience. Best anti-termite service provider in Vapi, Silvassa, Daman",
            keywords: "Anti-termite treatment, anti-termite treatment in Silvassa, anti-termite treatment in vapi, best anti-termite service provider"
        };
        res.render('services/service-details-page.html', data1)
    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};

exports.birdNettingServicePage = async (req, res, next) => {
    try {
        data1 = {
            title: "Anti-termite Treatment : Experts in termite treatment",
            description: "best anti-termite treatment provider with years of experience. Best anti-termite service provider in Vapi, Silvassa, Daman",
            keywords: "Anti-termite treatment, anti-termite treatment in Silvassa, anti-termite treatment in vapi, best anti-termite service provider"
        };
        res.render('services/anti-termite.html', data1)
    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};

exports.woodBorerTreatmentPage = async (req, res, next) => {
    try {
        data1 = {
            title: "Anti-termite Treatment : Experts in termite treatment",
            description: "best anti-termite treatment provider with years of experience. Best anti-termite service provider in Vapi, Silvassa, Daman",
            keywords: "Anti-termite treatment, anti-termite treatment in Silvassa, anti-termite treatment in vapi, best anti-termite service provider"
        };
        res.render('services/anti-termite.html', data1)
    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};

exports.foggingServicePage = async (req, res, next) => {
    try {
        data1 = {
            title: "Anti-termite Treatment : Experts in termite treatment",
            description: "best anti-termite treatment provider with years of experience. Best anti-termite service provider in Vapi, Silvassa, Daman",
            keywords: "Anti-termite treatment, anti-termite treatment in Silvassa, anti-termite treatment in vapi, best anti-termite service provider"
        };
        res.render('services/anti-termite.html', data1)
    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};

exports.fumigationServicePage = async (req, res, next) => {
    try {
        data1 = {
            title: "Anti-termite Treatment : Experts in termite treatment",
            description: "best anti-termite treatment provider with years of experience. Best anti-termite service provider in Vapi, Silvassa, Daman",
            keywords: "Anti-termite treatment, anti-termite treatment in Silvassa, anti-termite treatment in vapi, best anti-termite service provider"
        };
        res.render('services/anti-termite.html', data1)
    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};




// Render Silvassa Anti-Termite Page
exports.renderSilvassaTermitePage = async (req, res, next) => {
    try {
        data1 = {
            title: "Anti-termite Treatment in Silvassa: Experts in termite treatment",
            description: "best anti-termite treatment provider with years of experience in silvassa. Best anti-termite service provider in Vapi, Silvassa, Daman",
            keywords: "Anti-termite treatment, anti-termite treatment in Silvassa, anti-termite treatment in vapi, best anti-termite service provider",
            breadcrumTitle: "Anti-Termite Treatment in Silvassa",
            h1Title: "Anti-Termite Treatment in Silvassa, Dadra & Nagar Haveli and near by area...",
            h2Title: "The Best Anti Termite Treatment at Constructional Area in Silvassa, Dadra & Nagar Haveli and near by area...",
            cityName: "Silvassa, Dadra & Nagar Haveli"
        };
        res.render('city/anti-termite.html', data1)
    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};

// Render Vapi Anti-termite Page
exports.renderVapiTermitePage = async (req, res, next) => {
    try {
        data1 = {
            title: "Anti-termite Treatment in Vapi: Experts in termite treatment",
            description: "best anti-termite treatment provider with years of experience in Vapi. Best anti-termite service provider in Vapi, Silvassa, Daman",
            keywords: "Anti-termite treatment, anti-termite treatment in Silvassa, anti-termite treatment in vapi, best anti-termite service provider",
            breadcrumTitle: "Anti-Termite Treatment in Vapi",
            h1Title: "Anti-Termite Treatment in Vapi and near by area...",
            h2Title: "The Best Anti Termite Treatment at Constructional Area in Vapi and near by area...",
            cityName: "Vapi, Gujarat"
        };
        res.render('city/anti-termite.html', data1)
    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};

// render Valsad Anti-Termite Page
exports.renderValsadTermitePage = async (req, res, next) => {
    try {
        data1 = {
            title: "Anti-termite Treatment in Valsad: Experts in termite treatment",
            description: "best anti-termite treatment provider with years of experience in Valsad. Best anti-termite service provider in Vapi, Silvassa, Daman",
            keywords: "Anti-termite treatment, anti-termite treatment in Valsad, anti-termite treatment in vapi, best anti-termite service provider",
            breadcrumTitle: "Anti-Termite Treatment in Valsad",
            h1Title: "Anti-Termite Treatment in Valsad and near by area...",
            h2Title: "The Best Anti Termite Treatment at Constructional Area in Valsad and near by area...",
            cityName: "Valsad, Gujarat"
        };
        res.render('city/anti-termite.html', data1)
    } catch (e) {
        console.error(e);
        res.render('404.html')
    };
};
