const kafka = require('./kafka');
const broker = kafka.start();
const producer = broker.producer({});
const redis = require('../db/redis');

(async () => {
  await producer.connect();
})();

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