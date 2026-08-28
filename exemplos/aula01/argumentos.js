const [, ,nome, turma] = process.argv;

if(!nome || !turma) {
    console.error('use: node argumentos.js <nome> <turma>');
    process.exitCode = 1;
} else {
    console.log({nome, turma});
}