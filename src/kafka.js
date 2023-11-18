const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'], // Altere conforme necessário
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'my-group' });

const connectKafka = async () => {
  await producer.connect();
  await consumer.connect();
};

const disconnectKafka = async () => {
  await producer.disconnect();
  await consumer.disconnect();
};

module.exports = {
  kafka,
  producer,
  consumer,
  connectKafka,
  disconnectKafka,
};