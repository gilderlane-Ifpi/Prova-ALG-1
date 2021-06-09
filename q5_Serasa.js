const prompt = require('prompt-sync')()

function main(){
    // Notas dos criterios de 0 a 100
    const criterio1 = Number(prompt('nota de Dados Positivos 0 a 100: '))
    const criterio2 = Number(prompt('Nota de informação de dividas 0 a 100: '))
    const criterio3 = Number(prompt('Nota de consultas novos contratos 0 a 100: '))

    // Calculo da nota com o peso percentual da nota
    const peso1_serasa1 = criterio1 * 26/10
    const peso2_serasa = criterio2 * 57/10
    const peso3_serasa = criterio3 * 17/10

    const peso1_serasanovo1 =criterio1 * 62/10
    const peso1_serasanovo2 = criterio2 * 19/10
    const peso1_serasanovo3 = criterio3 * 19/10

    // Notas do serasa 1.0 e 2.0
    const srada1_0 = peso1_serasa1 + peso2_serasa + peso3_serasa
    const serasa_2 = peso1_serasanovo1 + peso1_serasanovo2 + peso1_serasanovo3

    // Classificação do score
    if (srada1_0 >= 800){
        console.log('o score 1.0 esta muito bom', srada1_0)
    }else if(srada1_0 >= 600){
        console.log('o score 1.0 esta bom', srada1_0)
    }else if(srada1_0 >= 400){
        console.log('o score 1.0 esta regular', srada1_0)
    }else{
        console.log('o score 1.0 esta baixo', srada1_0)
    }
    if (serasa_2 >= 701){
        console.log('o score 2.0 esta muito bom', serasa_2)
    }else if (serasa_2 >= 501){
        console.log('o score 2.0 esta bom', serasa_2)
    }else if (serasa_2 >= 301){
        console.log('o score 2.0 esta regular', serasa_2)
    }else{
        console.log('o scorre 2.0 esta baixo', serasa_2)
    }


}

main()