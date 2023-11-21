

const execute = (payment) => {
  payment.status = "confirmed";

  const seconds = getRandomInt(15000);

  setTimeout(() => {
    if (payment.value > 90 && payment.value < 100) {
      payment.status = "error";
      payment['error_description'] = errors[getRandomInt(3)];
    }
  }, seconds.toString());

  return JSON.stringify(payment);
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