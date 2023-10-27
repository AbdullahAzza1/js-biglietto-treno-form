const nomeCognome = document.querySelector("#buttonName")
const kmDaPercorre = document.querySelector("#buttonKm");
const buttone = document.querySelector("buttone")
//const eta = parseInt(prompt("eta del passeggero"))
const tariffa = "0.21"
const element = document.getElementById("message");


buttone.addEventListener("click", function() {


    alert("L'utente ha scritto: " + input.value);
});

console.log(buttone)

if (Number.isFinite(eta) && Number.isFinite(kmDaPercorre )){
    
    const alKm = kmDaPercorre * tariffa;
    console.log(alKm)

    if ( eta < 18){

        costo = (alKm / 100) * 80;
        message = "per junior"
        
    } else if(eta > 65){

        costo = (alKm / 100) * 60;
        message = "per over65"
    
    }
console.log(costo)

}
