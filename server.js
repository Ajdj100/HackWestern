require('dotenv').config();
const Fastify = require('fastify');
const {SmsClient} = require('@infobip-api/sdk');

const fastify = Fastify({logger: true});

//Init Infobip SMS client
const smsClient = new SmsClient({apiKey: process.env.INFOBIP_API_KEY});

//Route: send SMS
fastify.post('/send-sms', async (request, reply) => {
    const{number, message} = request.body;

    try{
        const response = await smsClient.sendSmsMessage({
            from: 'DispatchSMS',
            to: number,
            text: message
        });

        reply.send(response);
    } catch(error){
        reply.status(500).send({error: 'Failed to send SMS'});
    }
});

//Start the server
const start = async() => {
    try{
        await fastify.listen(3000);
        fastify.log.into('server listening on ${fastify.server.address().port}');
    } catch(err){
        fastify.log.error(err);
        process.exit(1);    
    }
}