const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const cilent = require('twilio')(accountSid, authToken)

cilent.messages.create({
    to: process.env.MY_PHONE_NUMBER,
    from: '+447723499643',
    body: 'You are paired up with '
})