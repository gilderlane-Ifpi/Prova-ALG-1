const prompt = require('prompt-sync')()

function main (){
    //inicio
    const consumo_kwh = Number(prompt('O valor consumido em kwh: '))
    const bandeira = Number(prompt('digite o valor da bandeira amarela: '))

    //processamento
    const taxa_iluminação = consumo_kwh * 6/100
    const valor_tarifa1 = consumo_kwh * 0.59
    const valor_tarifa2 = consumo_kwh * 0.75
    const valor_faturado = consumo_kwh + valor_tarifa1 + bandeira + taxa_iluminação
    const valor_faturado1 = consumo_kwh +valor_tarifa2 + bandeira + taxa_iluminação
    const valor_faturado2 = consumo_kwh + bandeira 
    const valo_ICMS = consumo_kwh * 25/100
    const valor_Pis = consumo_kwh * 15/100

    //final
    if (consumo_kwh <= 30){
        console.log('O valor  faturado é', valor_faturado2, 'R$')
    }else if (consumo_kwh <= 100){
        console.log('o valor do talão é', valor_faturado, 'R$')
    }else if (consumo_kwh > 100){
        console.log('o valor do talão é', valor_faturado1, 'R$')
    }
    

    console.log('consumo em kwh', consumo_kwh)
    console.log('valor da bandeira', bandeira)
    console.log('ICMS (R$)', valo_ICMS)
    console.log('Pis/confis', valor_Pis)
    console.log('taxa de iluminação', taxa_iluminação)


}
main()