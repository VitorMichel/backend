const express = require('express');
const cors = require('cors');
const pagamentoRoutes = require('./routes/pagamentoRoutes');

(async () => {

  const redis = require('redis');
  const client = redis.createClient();
  client.connect();

  client.on("error", (error) => {
    console.error(error);
  });

  const result = await client.set("key", "value");
  console.log(`result: ${result}`);

})();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/pagamentos', pagamentoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});