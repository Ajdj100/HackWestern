import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

fastify.post('/receive-sms', async (request, reply) => {
    const smsData = request.body;
    console.log('Received SMS: ', smsData);

    // Example processing logic
    if (smsData.text.includes('keyword')) {
        // Process based on keyword
    }

    return { success: true };
});

// Start the server (if this is the main server file)
const start = async () => {
    try {
        await fastify.listen(3000);
        console.log('Server listening on port 3000');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();