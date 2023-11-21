const express = require('express');
const cors = require('cors');
const pagamentoRoutes = require('./routes/pagamentoRoutes');
require('./kafka/payment_confirm')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/pagamentos', pagamentoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});