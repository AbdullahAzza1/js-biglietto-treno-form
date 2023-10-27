const el = document.querySelector("#message");
const nomeCognome = document.querySelector("#buttonName")
const kmDaPercorre = document.querySelector("#buttonKm");
const buttone = document.querySelector("#buttone");
//const eta = parseInt(prompt("eta del passeggero"))
const tariffa = "0.21"


buttone.addEventListener("click", function() {


    alert(nomeCognome.value);
    alert(kmDaPercorre.value);
});

if( kmDaPercorre==null || kmDaPercorre=="" ) {
    el.classList.add("error");
    el.innerHTML = "Utente anonimo, non sei il benvenuto";

} else {
    el.classList.add("valid");
    el.innerHTML = `Benvenuto, ${kmDaPercorre}`;
}

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
