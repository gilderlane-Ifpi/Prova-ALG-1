const prompt = require('prompt-sync')();

function main(){
    //entrada
    const salario = Number(prompt('salario fixo: '))
    const vendas = Number(prompt('valor de vendas: '))
    
    // Soma da comissão com o salario
    const comissao_5 = (vendas - 5000) * 5/100
    const comissao2 = ((10000 * 5/100) + (vendas - 10000) * (10/100))
    const comissao20 = vendas * 20/100

    const salario_final = salario + comissao_5
    const salario_final2 = salario + comissao2
    const salario_final3 = salario + comissao20

    // Resultado do salario mais as comissões
     if (vendas >=30000){
        console.log('O salario final com comissão foi',salario_final3 )
    }else if (vendas >=10000){
        console.log('o salario final com comissão foi', salario_final2)
    }else if (vendas >= 5000){
        console.log('O salario final com comissão foi', salario_final)
    }else{
        console.log('o salario final com comissão foi', salario)
    }
    
}
main()