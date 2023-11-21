

const execute = async (payment) => {
  payment.status = "confirmed";
  if (payment.value > 90 && payment.value < 100) {
    payment.status = "error";
    payment['error_description'] = errors[getRandomInt(3)];
  }

  const seconds = getRandomInt(15);
  await sleep(seconds);

  return JSON.stringify(payment);
}

const sleep = async (seconds) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

const errors = [
  'Pagamento rejeitado pelo recebedor',
  'Pagamento rejeitado devido a falha operacional',
  'Pagamento rejeitado por falta de fundos',
]

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

module.exports = {
  execute,
};