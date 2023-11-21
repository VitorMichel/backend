const { Kafka } = require('kafkajs');
const pix = require('../service/payment_confirm');

(async () => {
  console.log("Initializing kafka...");
  const kafka = new Kafka({
    clientId: 'payments',
    brokers: ['localhost:9092'],
  });

  // Initialize the Kafka producer and consumer
  const consumer = kafka.consumer({ groupId: 'payment-confirm-consumer' });
  console.log("Consumer initialized");

  await consumer.connect();
  console.log("Connected to consumer.");

  await consumer.subscribe({ topic: 'payment-order-confirmed', fromBeginning: true });
  console.log("Consumer subscribed to topic = payment-order-confirmed");

  // Log every message consumed
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {

      const paymentJSON = message.value.toString()
      const payment = JSON.parse(paymentJSON);
      pix.confirmPayment(payment);

      console.log(`Payment ${paymentJSON} processed`);
    },
  });
})();
