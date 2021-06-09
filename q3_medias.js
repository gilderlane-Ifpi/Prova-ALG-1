const prompt = require('prompt-sync')();

function main(){
    // notas do aluno
    const nota1 = Number(prompt('Nota 1: '))
    const peso1 = Number(prompt('Peso  : '))

    const nota2 = Number(prompt('Nota 2: '))
    const peso2 = Number(prompt('peso  : '))

    const nota3 = Number(prompt('Nota 3: '))
    const peso3 = Number(prompt('Peso  : '))

    // soma das notas

    const soma_notas = nota1*peso1 + nota2*peso2 + nota3*peso3
    const soma_pesos = peso1 + peso2 + peso3
    const media_ponderada = soma_notas / soma_pesos

    //Resultado das medias
    if (media_ponderada >= 7){
        console.log('O aluno foi aprovado', 'com media', media_ponderada)
    }else if (media_ponderada <= 4){
        console.log('O aluno foi reprovado')

        // Se o aluno ficar com a media maior que 4 ou igual/menor que 6 ele ira para prova final
    }else if (media_ponderada <= 6){
        console.log('o aluno foi para prova final','com a media', media_ponderada)

    // soma da nota final
    const notaPF = Number(prompt('Nota PF: '))
        const resultado_final = (media_ponderada + notaPF) / 2
    // Resultado final
    if (resultado_final >= 6){
        console.log('o aluno foi aprovado', 'com media', resultado_final)
    }else if (resultado_final <= 6){
        console.log('o aluno foi reprovado', 'com a media', resultado_final)
    }
    }
}

main()