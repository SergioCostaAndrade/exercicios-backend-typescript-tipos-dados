const numeros: number [] =
[1,5, 2]
const tabuada = (array:number []):string => {
for (const numero of array) {
    for (let index = 0; index < 10; index++) {
  console.log(`${numero} x ${index+1} = ${numero*(index+1)}`);
        
    }  
     
  }
  return 'aqui'
}
console.log(tabuada(numeros));
