module.exports = {
  buscarPagamentos: (req, res) => {
    res.json(pagamentos);
  },

  realizarPagamento: (req, res) => {
    const { valor, descricao } = req.body;

    if (!valor || !descricao) {
      return res.status(400).json({ mensagem: 'Valor e descrição são obrigatórios.' });
    }

    const pagamento = {
      id: pagamentos.length + 1,
      valor,
      descricao,
    };

    //fazer post do pagamento

    res.status(201).json(pagamento);
  },
};