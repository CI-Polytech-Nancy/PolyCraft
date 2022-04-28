// Bare de navigation responsive
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Afficher ou pas le bouton pour retourner en haut de la page
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// Retourner en haut de la page
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Copier l'addresse IP du serveur
function copy() {
    navigator.clipboard.writeText("mc.polycraft.fr");
}

function setStaffSkins() {
    url = "https://crafatar.com/avatars/";

    var skins = [];
    var ids = ["8406c95d235f4aa98be7798ad7ca9e37", "2f756bae16fe412c8f74baf0907dc25d", "335d6b831f2d4f19a280f329a928c692", "406054323fbe4e49bc54f7fb0ae3c818", "5a48464a-2376-3e9f-b1e8-c8dde6d9fd3f"];

    for (id of ids) 

    for (let i = 1; i <= ids.length; i++) {
        document.getElementById(`staff${i}`).src = url + ids[i-1];
    }
}

setStaffSkins()