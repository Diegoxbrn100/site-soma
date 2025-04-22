const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Rota inicial
app.get('/', (req, res) => {
  res.send('Oi, mundo :-)');
});

// Funções matemáticas
function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return 'Erro: divisão por zero!';
  return a / b;
}

// Rota POST para soma
app.post('/soma', (req, res) => {
  const corpo = req.body;
  const resultado = soma(corpo.a, corpo.b);
  res.send(`O resultado da soma de ${corpo.a} e ${corpo.b} é ${resultado}`);
});

// Rota POST para subtração
app.post('/subtrai', (req, res) => {
  const corpo = req.body;
  const resultado = subtrai(corpo.a, corpo.b);
  res.send(`O resultado da subtração de ${corpo.a} e ${corpo.b} é ${resultado}`);
});

// Rota POST para multiplicação
app.post('/multiplica', (req, res) => {
  const corpo = req.body;
  const resultado = multiplica(corpo.a, corpo.b);
  res.send(`O resultado da multiplicação de ${corpo.a} e ${corpo.b} é ${resultado}`);
});

// Rota POST para divisão
app.post('/divide', (req, res) => {
  const corpo = req.body;
  const resultado = divide(corpo.a, corpo.b);
  res.send(`O resultado da divisão de ${corpo.a} por ${corpo.b} é ${resultado}`);
});

// Inicia o servidor
const porta = 3001;
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
