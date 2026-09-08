import Produto from '../models/Produto.js';
import { listarDadosDoCatalogo } from
'../data/catalogo.js';
function esperar(ms) {
return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function buscarProdutoPorId(id) {
await esperar(80);
const dados = listarDadosDoCatalogo().find((produto) => produto.id === id);
if (!dados) {
    throw new Error(`Produto ${id} não encontrado.`);
}
return new Produto(dados);
}
export async function listarCategorias() {
await esperar(60);
const categorias = listarDadosDoCatalogo().map(({ categoria }) => categoria);
return [...new Set(categorias)];
}