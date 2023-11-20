const { produce } = require('../kafka/payment');

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

    // TODO salvar no db (redis)

    // Envia pagamento para tópico do Kafka
    await produce();

    const pagamento = {
      id: 1,
      valor,
      descricao,
    };

    res.status(201).json(pagamento);
  },
};