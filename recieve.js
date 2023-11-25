fastify.post('  /receive-sms', async (request, reply) => {
    const smsData = request.body;
    console.log('Received SMS: ', smsData);

    //Process SMS as needed, OpenAI API reads key words

    return {success };
});