let loyer = document.getElementById("loyer");
let credit = document.getElementById("crédit");
let factures = document.getElementById("eau");
let internet = document.getElementById("internet");

let salaire = document.getElementById("salaire");
let aides = document.getElementById("aides");
let rentes = document.getElementById("rentes");
let autres = document.getElementById("autres");


let totalDepenses = document.getElementById("total-depenses");
let totalRecettes = document.getElementById("total-recettes");

let resultatcharges = document.getElementById("totalcharge");
let resultatrecettes = document.getElementById("totalrecettes");

let restart = document.getElementById("reset");

let buttonBudget = document.getElementById("total-budget");
let Conseilsbudget = document.getElementById("conseilsbudget");

function CalcDepenses() {
    resultatcharges.innerHTML =
        Number.parseInt(loyer.value)
        + Number.parseInt(credit.value)
        + Number.parseInt(factures.value)
        + Number.parseInt(internet.value)
}

function CalcRecettes() {
    resultatrecettes.innerHTML =
        Number.parseInt(salaire.value)
        + Number.parseInt(aides.value)
        + Number.parseInt(rentes.value)
        + Number.parseInt(autres.value)
}

function CalcBudget(){
  let r = Number.parseInt(resultatrecettes.innerHTML) - Number.parseInt(resultatcharges.innerHTML);
   if (r > 0){
       Conseilsbudget.innerHTML = "Vous possèdez un bénéfice budget positif";
   }
   if(r < 0){
        Conseilsbudget.innerHTML = "Vous êtes en négatif perte confirmer";
   }
   if (r === 0){
       Conseilsbudget.innerHTML = "Ni perte ni gain";
   }
}



buttonBudget.addEventListener("click", function (){
    CalcBudget();
})

totalDepenses.addEventListener("click", function () {
    CalcDepenses();
})

totalRecettes.addEventListener("click", function () {
    CalcRecettes();
})

let toutDepense = document.getElementById("depenses").getElementsByTagName("input");
let toutRecette = document.getElementById("recettes").getElementsByTagName("input");

restart.addEventListener("click", function () {
    for (let i = 0; i < toutRecette.length; i++) {
        toutRecette[i].value = "0";
        resultatrecettes.innerHTML = "0";
    }
    CalcRecettes();

    for (let y = 0; y < toutDepense.length; y++) {
        toutDepense[y].value = "0";
        resultatcharges.innerHTML = "0";
    }
    CalcDepenses();
})

