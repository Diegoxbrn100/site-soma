📄 README.md
markdown
Copiar
Editar
# 🧮 site-soma

Um pequeno projeto Node.js com Express que disponibiliza rotas POST para realizar operações matemáticas simples: **soma, subtração, multiplicação e divisão**.
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


## 🚀 Tecnologias usadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Body-parser](https://www.npmjs.com/package/body-parser)

## 📦 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/site-soma.git
Acesse a pasta do projeto:

bash
Copiar
Editar
cd site-soma
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor:

bash
Copiar
Editar
node app.js
Acesse no navegador:

arduino
Copiar
Editar
http://localhost:3001
📬 Como usar via Postman
Envie requisições POST para as rotas abaixo com o corpo JSON:

json
Copiar
Editar
{
  "a": 10,
  "b": 5
}
Rotas disponíveis:

Operação	Rota
Soma	/soma
Subtração	/subtrai
Multiplicação	/multiplica
Divisão	/divide
🛡️ Observações
A divisão por zero retorna um erro personalizado.

A pasta node_modules está ignorada via .gitignore.

👨‍💻 Autor
Feito com 💻 por Diego
