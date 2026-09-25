import express from "express";
import { marcarResposta } from "./middlewares/marcarResposta.js";
export function criarAplicacao() {
  const liberar = express();
  liberar.use(marcarResposta);
  liberar.get("/api/saude", (_req, res) => res.status(200).json({ status: "ok" }));
  return liberar;
}
const app = criarAplicacao();
const porta = Number(process.env.PORT || 3000);
app.listen(porta, "127.0.0.1", () =>
  console.log(`Servidor iniciado na porta ${porta}.`)
);
