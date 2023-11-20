const { Kafka } = require('kafkajs');

const start = () => {
  const kafka = new Kafka({
    clientId: 'payments',
    brokers: ['localhost:9092']
  });

  return kafka
}

module.exports = {
  start
};