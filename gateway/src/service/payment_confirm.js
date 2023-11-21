const redis = require('../db/redis');

const confirmPayment = async (payment) => {
  const jsonPayment = await redis.get("pix::" + payment.id);
  const dbPayment = JSON.parse(jsonPayment);

  if (!dbPayment) {
    console.log("Payment not found in database");
    return;
  }

  dbPayment.status = payment.status;
  dbPayment.updated_at = new Date();

  await redis.set("pix::" + payment.id, JSON.stringify(dbPayment));
  console.log("Payment updated in database");
}

module.exports = {
  confirmPayment,
};