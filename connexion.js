let validationConnexion = document.getElementById("btnConnexion").addEventListener('click', connexion);

function connexion(event) {

    event.preventDefault();

    let baliseEmailCo = document.getElementById("emailCo");
    let emailCo = baliseEmailCo.value;

    let baliseMdpCo = document.getElementById("mdpCo");
    let mdpCo = baliseMdpCo.value;

   
    if (!emailCo || !mdpCo) {
        console.log("Rentrer votre email et votre mot de passe.");
        return; 
    }
    
    if (emailCo === localStorage.getItem('email') && mdpCo === localStorage.getItem('mdp')) {
        console.log('Connexion réussi');
        localStorage.setItem('auth','oui')
        window.location.href="http://127.0.0.1:5500/profil.html";
    } else {
        alert('Email ou mot de passe invalide');
        return; 
    }
}
