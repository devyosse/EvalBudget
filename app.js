let loyer = document.getElementById("loyer");
let credit = document.getElementById("loyer");
let factures = document.getElementById("loyer");
let internet = document.getElementById("loyer");

let salaire = document.getElementById("loyer");
let aides = document.getElementById("loyer");
let rentes = document.getElementById("loyer");
let autres = document.getElementById("loyer");
let epargne = document.getElementById("loyer");

let totalDepenses = document.getElementById("total-depenses");
let totalRecettes = document.getElementById("total-recettes");

let resultatcharges = document.getElementById("totalcharge");


totalDepenses.addEventListener("click", function (){
    function CalcDepenses(){
        resultatcharges.innerHTML =
            Number.parseInt(loyer.value)
        + Number.parseInt(credit.value)
        + Number.parseInt(factures.value)
        + Number.parseInt(internet.value)

    }
CalcDepenses();

})
