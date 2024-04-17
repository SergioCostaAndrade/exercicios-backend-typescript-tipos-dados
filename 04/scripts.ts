const informacoesEtiqueta:{produto:string,lote:number,ano:number,qtd:number} =
 {   produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 8
}
let arrayImprimir:string []= []
const imprimeEtiquetas = (array:{produto:string,lote:number,ano:number,qtd:number}):string[] => {
for (let index = 1; index <= array.qtd; index++) {
    let preparaPush:string = array.lote.toString(10) + '-' + array.ano.toString(10) + '-' + index.toString(10) 
  arrayImprimir.push(preparaPush)
}
return arrayImprimir
}
console.log(imprimeEtiquetas(informacoesEtiqueta));
