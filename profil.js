window.onload = init;

function init() {
    
    let token = localStorage.getItem('auth');

    if(token){
        let input = document.getElementById('nom');
        input.value = localStorage.getItem('nom');
        let deuxput = document.getElementById('email');
        deuxput.value = localStorage.getItem('email');
    }
    else{
        console.log('nik')
    }
}

