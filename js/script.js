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

function setStaffSkins() {
    let url = "https://crafatar.com/avatars/";
    let ids = [
        "8406c95d235f4aa98be7798ad7ca9e37", "2f756bae16fe412c8f74baf0907dc25d", "335d6b831f2d4f19a280f329a928c692",
        "b29e19ca633e3ea4bfe1d9208a95178d", "406054323fbe4e49bc54f7fb0ae3c818", "5a48464a-2376-3e9f-b1e8-c8dde6d9fd3f",
    ];

    for (let i = 0; i <= ids.length; i++) {
        document.getElementById(`staff${i+1}`).src = url + ids[i];
    }
}

setStaffSkins()

function openTab() {
    window.open("https://polytech-services-nancy.fr/", '_blank');
    let views = Number(localStorage.getItem("clicked")) + 1;
    localStorage.setItem("clicked", String(views));
}