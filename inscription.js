////////////////////////////////////
/// BARRE DE PROGRESSION DU MDP ///
//////////////////////////////////

let password = document.getElementById("mdp");
let power = document.getElementById("power-point");
password.oninput = function () {
    let point = 0;
    let value = password.value;
    let widthPower = 
        ["1%", "33%", "66%", "100%"];
    let colorPower = 
        ["#D73F40", "#DC6551", "#F2B84F", "#3ba62f"];

    if (value.length >= 6) {
        let arrayTest = 
            [/[0-9]/, /[a-z]/, /[^0-9a-zA-Z]/];
        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point += 1;
            }
        });
    }
    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
}


/////////////////////////////////////////
/// RECUP DES DONNÉES D'INSCRIPTIONS ///
///////////////////////////////////////

function nomUtilisateurValide(){
    let baliseNom = document.getElementById("nom");
    let nom = baliseNom.value
    if(nom.length<3){
        alert("Nom d'utilisateur invalide, choisissez un pseudo comprenant au moins 3 caractères")
        localStorage.clear()
        return;
    }
    localStorage.setItem('nom', nom);
}

function emailUtilisateurValide(){
    const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let baliseEmail = document.getElementById("email");
    let email = baliseEmail.value

    if(regexMail.test(email)){
        localStorage.setItem('email', email)
    }
    else{
        alert("Veuillez rentrer un email valide")
        localStorage.clear()
        return;
    }
}

function mdpUtilisateurValide(){
    const regexMdp = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/
    let baliseMdp = document.getElementById("mdp");
    let mdp = baliseMdp.value

    if(regexMdp.test(mdp)){
        alert("Veuillez rentrer un mot de passe valide. Celui-ci doit comporter 8 caractères minimum, dont une majuscule, un symbole et un chiffre.")
        localStorage.clear()
        return;
    }
    else{
        localStorage.setItem('mdp', mdp);
    }
}

function mdpRepeatUtilisateurValide(){
    let baliseMdpRepeat = document.getElementById('mdprepeat')
    let mdpRepeat = baliseMdpRepeat.value
 
    if(mdpRepeat!==localStorage.getItem('mdp')){
        alert('Les mots de passe ne correspondent pas');
        localStorage.clear()
        return; 
    }
}

let validationInscrit = document.getElementById("btnValidation").addEventListener('click', inscription);

function inscription(event){

    event.preventDefault();
    nomUtilisateurValide();
    emailUtilisateurValide();
    mdpUtilisateurValide(),
    mdpRepeatUtilisateurValide()

    let donnesUtilisateur = {
        nom : localStorage.getItem('nom'),
        email : localStorage.getItem('email'),
        mdp : localStorage.getItem('mdp')
    }
    let donnesUtilisateurJson = JSON.stringify(donnesUtilisateur)
    localStorage.setItem('donnesUtilisateur', donnesUtilisateurJson)


    if(localStorage.getItem('nom') && localStorage.getItem('email') && localStorage.getItem('mdp')){
        alert("Vous êtes bien inscrit");
        window.location.href="http://127.0.0.1:5500/connexion.html";
    }
    else{
        console.log('raté')
        localStorage.clear()
        alert("Au moins un des champs n'est pas rempli");
        return;
    }
}