const kafka = require('./config');
const broker = kafka.start();
const redis = require('../db/redis');

const consumer = kafka.consumer({ groupId: 'payment-order-consumer' });
const producer = broker.producer({});

(async () => {
  await consumer.connect();
  await producer.connect();
})();

const consume = async (topic) => {

}


const produce = async (topic, message) => {
  const key = await redis.get(topic);
  let i = 0
  if (key) {
    i = parseInt(key);
  } else {
    await redis.set(topic, i);
  }

  try {
    await producer.send({
      topic,
      acks: 1,
      messages: [
        {
          key: String(i),
          value: message,
        },
      ],
    })
  } catch (err) {
    console.error("could not write message " + err)
  }
}

module.exports = {
  produce
}