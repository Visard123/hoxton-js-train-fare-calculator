let normalPricePerKm= 0.21


const age = Number (prompt("How old are you?"))
const kmTravelled= Number(prompt("How many Km are you travelling?"))

let totalPrice18= (normalPricePerKm  - ( 0.2 *normalPricePerKm))*kmTravelled
let totalprice65= (normalPricePerKm     - (0.4 *normalPricePerKm)) *kmTravelled
let totalNormalPrice=normalPricePerKm *kmTravelled


if (age<18){
console.log(`Your ticket price is ${totalPrice18.toFixed(2)} £  `)

}
else if (age>65){
    console.log(`Your ticket price is ${totalprice65} £  `)

}

else {
    console.log(`Your ticket price is ${totalNormalPrice} £  `)
}

