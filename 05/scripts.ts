const palavra:string = 'programador'
const soletrar = (palavra:string):string =>{
    let palavraFinal: string = ""
    for (const letra of palavra) {
        palavraFinal = palavraFinal + letra + '-'
    }
    palavraFinal = palavraFinal.slice(0,palavraFinal.length-1)
    return palavraFinal
}
console.log(soletrar(palavra));
