// Afficher ou pas le bouton pour retourner en haut de la page
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.opacity = "1";
    } else {
        document.getElementById("topBtn").style.opacity = "0";
    }
}

// Retourner en haut de la page
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Copier l'addresse IP du serveur
function copyId() {
    navigator.clipboard.writeText("mc.polycraft.fr");
}
