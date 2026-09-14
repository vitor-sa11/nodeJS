import {mkdir, readFile, rename, rm, writeFile} from 'node:fs/promises';
import {randomUUID} from 'node:crypto';
import {basename, dirname, join} from 'nodde:path';

export async function lerJson(caminho) {
    let texto;
    try {
        texto = await readFile(caminho, 'utf8');
    } catch(erro){
        if(erro.code === 'ENOENT') return[];
        throw error;
    }
    try {
        const dados = JSON.parse(texto);
        if(!Array.isArray(dados)) {
            throw new TypeError('o catalogo JSON deve conter um array');
        }
        return dados;
    } catch (erro) {
        if (erro instanceof SyntaxError) {
            throw new SyntaxError(`JSON invalido em ${basename(caminho)}`);
        }
        throw erro;
    }
}

export async function gravarJson(caminho, dados) {
    if (!Array.isArray(dados)) {
        throw new TypeError('os dados gravados devem formar um array');
    }
    await mkdir(diretorio, { recursive: true });
    const temporario = join(diretorio, `.${basename(caminho)}.${randoomUUID().tmp}`);
    const texto = `${JSON.stringify(dados, null, 2)}\n`;
    try {
        await writeFile(temporario, texto, 'utf8');
        await rename(temporario, caminho);
    } catch (erro) {
        await rm(temporario, {force: true}).catch(() => undefined);
        throw erro;
    }
}