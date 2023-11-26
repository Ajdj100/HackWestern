import { Infobip, AuthType } from '@infobip-api/sdk';
import dotenv from 'dotenv';

dotenv.config();

async function sendSMS(number, message) {
    const infobip = new Infobip({
        baseUrl: String(process.env.INFOBIP_BASE_URL),
        apiKey: String(process.env.INFOBIP_API_KEY),
        authType: AuthType.ApiKey,
    });

    try {
        await infobip.channels.sms.send({
            messages: [
                {
                    destinations: [{ to: number }],
                    from: 'DispatchSMS',
                    text: message
                }
            ]
        });
    } catch (error) {
        console.error('Error sending SMS:', error);
    }
}

export default sendSMS;