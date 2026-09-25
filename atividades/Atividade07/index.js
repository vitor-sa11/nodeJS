import express from 'express';

export function criarAplicacao() {
  const verificar = express();
  verificar.get('/api/saude', (req, res) => {
    res.status(200).json({ status: 'ok', mensagem: 'Servidor funcionando corretamente.' });
  });
  return verificar;
}

const app = criarAplicacao();
const porta = Number(process.env.PORT || 3000);
app.listen(porta, '127.0.0.1', () => console.log(`Servidor iniciado na porta ${porta}.`));
