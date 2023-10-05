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

var TERCEIRApeso = 104 ;
var TERCEIRAaltura = 1.6
var IMC

IMC = (TERCEIRApeso / ((TERCEIRAaltura)**2))

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