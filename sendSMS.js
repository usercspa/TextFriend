const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const cilent = require('twilio')(accountSid, authToken)

cilent.messages.create({
    to: process.env.MY_PHONE_NUMBER,
    from: '+447723499643',
    body: 'Matching is completed, our volunteer will get in touch with you shortly:)',
})
.then((message) => console.log(message.sid));