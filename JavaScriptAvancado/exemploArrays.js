const alunasGama = ["Paula", "Maria", "Estela", "Clara"]

//Acessar informações num array
console.log(alunasGama[3]) //"Clara"

// Operador spread (...)
//copia e acrescenta sem alterara a ordem do array
const alunasXp = [...alunasGama, "Simara"]
//tras todas as alunas mais a "Simara"
console.log(alunasXp)


//Metodos de iteração
//Map
                //função callback
alunasXp.map(aluna => console.log(aluna))
//imprime em ordem cada linha

//Filter, filtra o que esta sendo solicitado 
const numeros = [34, 45, 67, 90, 55, 76]
//filtra numeros impar
const numerosImpares = numeros.filter(numero => numero%2 !=0)
console.log(numerosImpares)
//filtra numeros pares
const numerosPares = numeros.filter(numero => numero%2 ==0)
console.log(numerosPares)

//find- encontra produtos
const produtos = ["geladeira", "fogao", "cama", "mesa"]
const encontraCama = produtos.find(produto => produto === "cama")
console.log(encontraCama)
const encontraMesa = produtos.find(produto => produto === "mesa")
console.log(encontraMesa)

//sort - ordenação 
const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)
const numerosOrdenadosDecrescente = numeros.sort((a,b)=> b-a)
console.log(numerosOrdenadosDecrescente)


//reduce - reduz nosso array a um resultado de uma operação matemática
const numbers = [1,34,35]
//Neste caso somou os numeros 
const soma = numbers.reduce((valorAnterior, valorAtual)=> {
    return valorAnterior + valorAtual
})
console.log(soma) //75

const numerais =[1,2,3]
const subtracao = numerais.reduce((a,b)=>{
    return a -b
})
console.log(subtracao)//-4