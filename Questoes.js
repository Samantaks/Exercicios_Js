console.log("-------------- PRIMEIRA QUESTÃO ------------------");

const PRIMEIRAarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const PRIMEIRApares = []

PRIMEIRAarray.forEach((i) => {
    if (i % 2 == 0){
        PRIMEIRApares.push(i)
    }
})

console.log (PRIMEIRApares)

console.log("-------------- FINAL DA PRIMEIRA QUESTÃO ------------------");
console.log("-------------- SEGUNDA QUESTÃO ------------------");



console.log("-------------- FINAL DA SEGUNDA QUESTÃO ------------------");
console.log("-------------- TERCEIRA QUESTÃO ------------------");

var TERCEIRApeso = 60 ;
var TERCEIRAaltura = 1.6
var IMC

IMC = (TERCEIRApeso / ((TERCEIRAaltura)**2)).toFixed(2)

if (IMC <= 18.6){
    console.log(`Seu IMC É ${IMC} , ou seja, estás: abaixo do peso.`)

} else if (IMC > 18.5 && IMC <= 25) {
    console.log(`Seu IMC É ${IMC} , ou seja, estás com: o peso ideal.`)

} else if (IMC > 25 && IMC <= 30 ){
    console.log(`Seu IMC É ${IMC} , ou seja, estás com:  Sobrepeso`)

} else if (IMC > 30 && IMC <= 40 ){
    console.log(`Seu IMC É ${IMC} , ou seja, estás com:  Obesidade`)

} else if (IMC > 40 ){
    console.log(`Seu IMC É ${IMC} , ou seja, estás com:  Obesidade morbida`)
}

console.log("-------------- FINAL DA TERCEIRA QUESTÃO ------------------");
console.log("-------------- QUARTA QUESTÃO ------------------");

function tabuada(NUMERO){
    for(let i = 1; i<=10; i++){
        console.log(`${NUMERO} x ${i} = ${NUMERO*i}`)
    }
}

tabuada(7)

console.log("-------------- FINAL DA QUARTA QUESTÃO ------------------");
console.log("-------------- QUINTA QUESTÃO ------------------");

function divisao(a,b){
    try{
        if (b==0){
            throw new RangeError("Impossivel se dividir números por zero.")
        } else {
            console.log("O primeiro número dividido pelo segundo é" , a/b )
        }
    } catch (error) {
        console.error("Erro:" + error.message)
    }
}

divisao(10,0)
divisao(10,2)

console.log("-------------- FINAL DA QUINTA QUESTÃO ------------------");
console.log("-------------- SEXTA QUESTÃO ------------------");

function calcularGasolina(distancia){
    const precoGasolina = 5.24
    const autonomia = 9.8
    let valor = ((distancia/autonomia) * precoGasolina).toFixed(2)
    console.log(`Para fazer ${distancia}kms você deve abastecer R$ ${valor*2}`)
}
calcularGasolina(500)

console.log("-------------- FINAL DA SEXTA QUESTÃO ------------------");
console.log("-------------- SÉTIMA QUESTÃO ------------------");

function fatorial(num){
    try {
        if (num < 0){
            throw new RangeError ("Não é possivel calcular o fatorial de numeros negativos");
        } else if (num===0){
            console.log("O fatorial de zero é 1");
        } else {
            let resultado = 1;
            for(let i = 1; i<= num; i++){
                resultado *= i;
            }
            console.log(`O fatorial de ${num} é ${resultado}`);
        }
    }catch(error){
        console.error("Erro:" + error.message)
    }
}

fatorial(15)
fatorial(-10)


console.log("-------------- FINAL DA SÉTIMA QUESTÃO ------------------");