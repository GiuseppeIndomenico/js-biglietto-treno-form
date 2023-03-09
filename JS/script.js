
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



        document.getElementById("ticket").innerHTML =

            `
                
        
            <div class="card-header ">
                <h3 class="text-center">Ecco il tuo biglietto!</h3>

            </div>

            <div class="card-body">
                <div class="card m-2 p-3 pb-0">

                    <div class="card-header">
                        <h6> Destinazione: Vattelapesca-city!</h6>
                    </div>
                    
                    <div class="card-body">
        
                        <p>
                        età: ${userAge} anni
                        </p>
                        
                        <p>distanza: ${distanceKm}Km</p>
                        
                        <h4>
                        prezzo: ${totalPrice} &euro;
                        
                        </h4>

                        <p class="text-end fs-6 fst-italic
                        "> Condoglianze per aver scelto la nostra compagnia...Buon Viaggio!</p>
                    </div>
                </div>
                         


            </div>

   
                
                `





        console.log(totalPrice)

    } else if (userAge > 65) {


        let totalPrice = (distanceKm * priceKm) * 0.60




        document.getElementById("ticket").innerHTML =

            `
                
                
              
            <div class="card-header ">
                <h3 class="text-center">Ecco il tuo biglietto!</h3>

            </div>

            <div class="card-body">
                <div class="card m-2 p-3 pb-0">

                    <div class="card-header">
                        <h6> Destinazione: Vattelapesca-city!</h6>
                    </div>
                    
                    <div class="card-body">
        
                        <p>
                        età: ${userAge} anni
                        </p>
                        
                        <p>distanza: ${distanceKm}Km</p>
                        
                        <h4>
                        prezzo: ${totalPrice} &euro;
                        
                        </h4>

                        <p class="text-end fs-6 fst-italic
                        "> Condoglianze per aver scelto la nostra compagnia...Buon Viaggio!</p>
                    </div>
                </div>
                         


            </div>

                
                `



        console.log(totalPrice)
    }

    else {



        document.getElementById("ticket").innerHTML =

            `
                
                
            <div class="card-header ">
                <h3 class="text-center">Ecco il tuo biglietto!</h3>

            </div>

            <div class="card-body">
                <div class="card m-2 p-3 pb-0">

                    <div class="card-header">
                        <h6> Destinazione: Vattelapesca-city!</h6>
                    </div>
                    
                    <div class="card-body">
        
                        <p>
                        età: ${userAge} anni
                        </p>
                        
                        <p>distanza: ${distanceKm}Km</p>
                        
                        <h4>
                        prezzo: ${totalPrice} &euro;
                        
                        </h4>

                        <p class="text-end fs-6 fst-italic
                        "> Condoglianze per aver scelto la nostra compagnia...Buon Viaggio!</p>
                    </div>
                </div>
                         


            </div>

                
                `









        console.log(userAge)
        console.log(distanceKm)
        console.log(totalPrice)

    }


}