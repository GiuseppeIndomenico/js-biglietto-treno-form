
/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.*/


const priceKm = 0.21



let userAge= document.getElementById("age").value
let distanceKm= document.getElementById("distance").value  



document.getElementById("calcPrice").addEventListener("click",function () {
    distanceKm * priceKm
    
    let totalPrice= distanceKm * priceKm 
    
    console.log (totalPrice)
    
}
)




