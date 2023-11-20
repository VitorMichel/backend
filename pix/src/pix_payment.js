

const execute = (payment) => {
  console.log("Payment received: ", payment);

  payment.status = "confirmed";
  if (payment.value > 90 && payment.value < 100) {
    payment.status = "error";
    payment['error_description'] = errors[getRandomInt()];
  }
}

const errors = [
  'Pagamento rejeitado pelo recebedor',
  'Pagamento rejeitado devido a falha operacional',
  'Pagamento rejeitado por falta de fundos',
]

const getRandomInt = () => {
  return Math.floor(Math.random() * 3) + 1;
}

module.exports = {
  execute,
};