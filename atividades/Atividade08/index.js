import express from 'express';

const produtos = [
  { id: 1, nome: 'Teclado', preco: 120 },
  { id: 2, nome: 'Mouse', preco: 80 }
];

export function criarAplicacao() {
  const teste = express();
  teste.get('/api/produtos', (_req, res) => {
    res.status(200).json({ sucesso: true, dados: produtos });
  });
  return teste;
}

const app = criarAplicacao();
const porta = Number(process.env.PORT || 3000);
app.listen(porta, '127.0.0.1', () => console.log(`Servidor iniciado na porta ${porta}.`));
