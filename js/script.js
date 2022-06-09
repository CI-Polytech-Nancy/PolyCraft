// Bare de navigation responsive
function myFunction() {
    let x = document.getElementById("myTopnav");
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

// Ouvrir un onglet avec le site de PSN
function openTab() {
    alert("Sympa le nouveau site de PSN, surtout les photos");
    window.open("https://polytech-services-nancy.fr/", "_blank");
}
