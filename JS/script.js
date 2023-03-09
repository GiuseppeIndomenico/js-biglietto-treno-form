
/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.*/


const priceKm = 0.21





document.getElementById("calcPrice").addEventListener("click", dati)




function dati() {


    let userAge = document.getElementById("age").value
    let distanceKm = document.getElementById("distance").value
    let totalPrice = distanceKm * priceKm

    if (userAge < 18) {

        let totalPrice = (distanceKm * priceKm) * 0.80

        console.log(totalPrice)

    } else if (userAge > 65) {


        let totalPrice = (distanceKm * priceKm) * 0.60

        console.log(totalPrice)
    }

    else {


        console.log(userAge)
        console.log(distanceKm)
        console.log(totalPrice)

    }


}