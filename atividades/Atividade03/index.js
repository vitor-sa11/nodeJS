const nomeInformado = process.argv[2];
const turmaInformada = process.argv[3];

if (nomeInformado && turmaInformada) {
    console.log(`Inscrição: ${nomeInformado} - ${turmaInformada}`);
    process.exitCode = 0;
} else {
    console.error('informe nome e turma: ');
    process.exitCode = 1;
}
