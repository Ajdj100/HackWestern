const fetch = require('node-fetch');

async function sendSMS(number, message){
    const url = 'https://api.infobip.com/sms/2/text/single';
    const headers = {
        'Authorization': `App${process.env.INFOBIP_API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    const body =  JSON.stringify({
        from: 'DispatchSMS',
        to: number,
        text: message
    });

    try{
        const response = await fetch(url, {method: 'POST', headers: headers, body: body});
        if (!response.ok){
            throw new Error('HTTP error! status: ${response.status}');
        }

        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error("Error sending SMS:", error);
    }
}

module.exports = sendSMS;