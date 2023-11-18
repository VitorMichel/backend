const { producer, consumer, connectKafka, disconnectKafka } = require('../kafka');

module.exports = {
  buscarPagamentos: async (req, res) => {
    // Conectar ao Kafka
    await connectKafka();

    // Lógica para buscar pagamentos do Kafka

    // Desconectar do Kafka
    await disconnectKafka();

    res.json(pagamentos);
  },

  realizarPagamento: async (req, res) => {
    const { valor, descricao } = req.body;

    if (!valor || !descricao) {
      return res.status(400).json({ mensagem: 'Valor e descrição são obrigatórios.' });
    }

    // Conectar ao Kafka
    await connectKafka();

    // Lógica para enviar pagamento ao Kafka

    // Desconectar do Kafka
    await disconnectKafka();

    const pagamento = {
      id: pagamentos.length + 1,
      valor,
      descricao,
    };

    pagamentos.push(pagamento);

    res.status(201).json(pagamento);
  },
};