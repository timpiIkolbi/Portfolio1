const emailEll = /^[^\s@]{3,}@[^\s@]{3,}\.+[^\s@]{2,}$/;
const email = "tothtamas@turr.hu";
function ellenorzesEmail(){
    const email = document.getElementById('email').value.trim();

    if (email.match(emailEll)){
        
    }
    else{
        alert('Nem megfelelő email')
    }
}

