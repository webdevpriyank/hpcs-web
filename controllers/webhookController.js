const request = require("request"),
    axios = require("axios").default;

const token = process.env.WHATSAPP_TOKEN;


exports.webhookPost = async (req, res) => {

    let body = req.body;

    console.log("BODY =======>>>>>> " + JSON.stringify(body, null, 2));
    console.log("BODY =======>>>>>> " + body);

    if (req.body.object) {
        if (
            req.body.entry &&
            req.body.entry[0].changes &&
            req.body.entry[0].changes[0] &&
            req.body.entry[0].changes[0].value.messages &&
            req.body.entry[0].changes[0].value.messages[0]
        ) {
            let phone_number_id =
                req.body.entry[0].changes[0].value.metadata.phone_number_id;
            let from = req.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
            let msg_body = req.body.entry[0].changes[0].value.messages[0].text.body; // extract the message text from the webhook payload
            axios({
                method: "POST", // Required, HTTP method, a string, e.g. POST, GET
                url:
                    "https://graph.facebook.com/v12.0/" +
                    phone_number_id +
                    "/messages?access_token=" +
                    token,
                data: {
                    messaging_product: "whatsapp",
                    to: from,
                    text: { body: "Ack: " + msg_body },
                },
                headers: { "Content-Type": "application/json" },
            });
        }
        res.sendStatus(200);
    } else {

        res.sendStatus(404);
    }
}; // End webhook


exports.webhookGet = async (req, res, next) => {
    
    const verify_token = process.env.VERIFY_TOKEN;
    
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];
    
    if (mode && token) {
    
        if (mode === "subscribe" && token === verify_token) {
    
            console.log("WEBHOOK_VERIFIED");
            res.status(200).send(challenge);
        } else {
    
            res.sendStatus(403);
        }
    }
} // End webhook