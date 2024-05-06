let Nom;
let Adresse;
let Produits = [];
let NomArray = [];
let AdressArray = [];
let ProduitsArray = [];

let namefield = document.getElementById("nom");
let adressfield = document.getElementById("adresse");
let Pizza = document.getElementById("Pizza");
let Pancakes = document.getElementById("Pancakes");
let Buritos = document.getElementById("Buritos");
let valider = document.getElementById("valider");
let bilan = document.getElementById("bilan")


namefield.onchange = function (e) {
    Nom = e.target.value;
    console.log(Nom);
};

adressfield.onchange = function (e) {
    Adresse = e.target.value;
    console.log(Adresse);
};

Pizza.onclick = async function () {
    if (Pizza.checked === true) {
        await Produits.push("Pizza");
    } else {
        Produits = await Produits.filter(element => element != "Pizza");
    }
    console.log(Produits);
};

Pancakes.onclick = async function () {
    if (Pancakes.checked === true) {
        await Produits.push("Pancakes");
    } else {
        Produits = await Produits.filter(element => element != "Pancakes");
    }
    console.log(Produits);
};

Buritos.onclick = async function () {
    if (Buritos.checked === true) {
        await Produits.push("Buritos");
    } else {
        Produits = await Produits.filter(element => element != "Buritos");
    }
    console.log(Produits);
};

const NewTableau = async () => {
    console.log("New");
    NomArray.push(Nom)
    AdressArray.push(Adresse)
    ProduitsArray.push(Produits)
    let compteur = NomArray.length - 1;
    console.log(NomArray.length);
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let supprimer = document.createElement("input")
    supprimer.setAttribute("type", "button")
    supprimer.setAttribute("value", "supprimer")
    supprimer.setAttribute("class", "form_button pointer")
    supprimer.setAttribute("id", compteur)

    supprimer.onclick = () => suppression(compteur)
    //await suppression(compteur)

    td1.append(Nom);
    td2.append(Adresse);

    for (let i = 0; i < Produits.length; i++) {
        let br = document.createElement("br")
        td3.append(Produits[i])
        td3.append(br)

    }
    td4.append(supprimer)

    tr.append(td1, td2, td3, td4)
    bilan.append(tr);
}

valider.onclick = NewTableau

const suppression = async (compteur) => {

    let realNomArray = []
    let realAdressArray = []
    let realProduitsArray = []
    for (let i = 0; i < NomArray.length; i++) {
        if (i != compteur) {
            realNomArray.push(NomArray[i])
        }
    }
    NomArray = realNomArray
    for (let i = 0; i < AdressArray.length; i++) {
        if (i != compteur) {
            realAdressArray.push(AdressArray[i])
        }
    }
    AdressArray = realAdressArray
    for (let i = 0; i < ProduitsArray.length; i++) {
        if (i != compteur) {
            realProduitsArray.push(ProduitsArray[i])
        }
    }
    ProduitsArray = realProduitsArray

    bilan.textContent = ""
    bilan.innerHTML =""
    await renouvellement()
}

const renouvellement = async () => {
    let tr0 = document.createElement("tr")
    let th1 = document.createElement("th")
    let th2 = document.createElement("th")
    let th3 = document.createElement("th")
    let th4 = document.createElement("th")
    th1.textContent = "Nom"
    th2.textContent = "Adresse"
    th3.textContent = "Produits"
    bilan.append(th1, th2, th3, th4)
    
    for (let i = 0; i < NomArray.length; i++) {

        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let supprimer = document.createElement("input")
        supprimer.setAttribute("type", "button")
        supprimer.setAttribute("value", "supprimer")
        supprimer.setAttribute("class", "form_button pointer")
        supprimer.setAttribute("id", i)

        supprimer.onclick = () => suppression(i)

        td1.append(NomArray[i]);
        td2.append(AdressArray[i]);

        if (ProduitsArray[i]) {
            for (let a = 0; a < ProduitsArray[i].length; a++) {
                let br = document.createElement("br")
                td3.append(ProduitsArray[i][a])
                td3.append(br)

            }
        }
        td4.append(supprimer)

        tr.append(td1, td2, td3, td4)
        bilan.append(tr);
    }
}