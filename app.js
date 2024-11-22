import express from 'express';
import conectarBanco from './src/connections/database.js';
import rotasDeVeiculos from './src/routes/rotasVeiculo.js';

const servidor = express();
const PORTA = 3000;

// Estabelece conexão com o banco de dados
conectarBanco();

// Middleware para interpretar JSON
servidor.use(express.json());

// Configurações de rotas
servidor.use('/api/veiculos', rotasDeVeiculos);

// Inicialização do servidor
servidor.listen(PORTA, () => {
  console.log(`Aplicação rodando na porta ${PORTA}`);
});

export default servidor;
