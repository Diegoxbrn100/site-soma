📄 README.md
markdown
Copiar
Editar
# 🧮 site-soma

Um pequeno projeto Node.js com Express que disponibiliza rotas POST para realizar operações matemáticas simples: **soma, subtração, multiplicação e divisão**.

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
