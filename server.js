import Fastify from 'fastify';
import { Infobip, AuthType } from '@infobip-api/sdk';
import 'dotenv/config';

// Initialize Fastify
const fastify = Fastify({ logger: true });

// Setup Infobip
const infobip = new Infobip({
    baseUrl: String(process.env.INFOBIP_BASE_URL),
    apiKey: String(process.env.INFOBIP_API_KEY),
    authType: AuthType.ApiKey,
});

// Route for sending SMS
fastify.post('/send-sms', async (request, reply) => {
    const { number, message } = request.body;

    try {
        const response = await infobip.channels.sms.send({
            messages: [
                {
                    destinations: [{ to: number }],
                    from: 'DispatchSMS',
                    text: "message"
                }
            ]
        });

        console.log(`SMS sent to ${number} with message: ${message}`);
        reply.send({ success: true, response: response.data });
    } catch (error) {
        console.error(`Error sending SMS: ${error}`);
        reply.status(500).send({ error: 'Failed to send SMS' });
    }
});

// Route for receiving SMS (set up as a webhook endpoint in Infobip)
fastify.post('/receive-sms', async (request, reply) => {
    const smsData = request.body;
    console.log('Received SMS:', smsData);

    // Process the received SMS as needed

    reply.send({ success: true });
});

fastify.post('/delivery-reports', async (request, reply) => {
    const deliveryReports = request.body;
    console.log('Received delivery reports:', deliveryReports);

    // Process each report
    deliveryReports.results.forEach(report => {
        console.log(report.messageId + " - " + report.status.name);
    });

    // Send a success response
    return { success: true };
});

// Start the server
const start = async () => {
    try {
        const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
        const HOST = process.env.HOST || '127.0.0.1';
        await fastify.listen({ port: PORT, host: HOST });
        console.log(`Server listening on ${fastify.server.address().port}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();