const prompt = require('prompt-sync')()


function main(){
    console.log('### covid-19 ###')
    
    // Entrada
    const covid14dias = Number(prompt('digite o numero de caso ha 14 dias: '))
    const covidhoje = Number(prompt('Digite o numero de casos hoje: '))
    
    //processamento
    const variacao = (covid14dias - covidhoje) * 15/100
    
    //saida
    if (variacao >= 15){
        console.log('O covid esta em estabilidade',variacao,'%' )
    }else if(variacao < 15){
        console.log('o covid esta em alta', variacao,'%')
    }
        
    
}
main()