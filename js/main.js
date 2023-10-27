const nomeCognome = prompt("inserisci nome e cognome")
const kmDaPercorre = parseInt(prompt("quanti km vuoi percorre?"));
const eta = parseInt(prompt("eta del passeggero"))
const tariffa = "0.21"
const element = document.getElementById("message");



if (Number.isFinite(eta) && Number.isFinite(kmDaPercorre )){
    
    const alKm = kmDaPercorre * tariffa;
    console.log(alKm)

    if ( eta < 18){
        costo = (alKm / 100) * 80;
        message = "per junior "
    } else if(eta > 65){
        costo = (alKm / 100) * 60;
        message = "per over65 "
    }


}
