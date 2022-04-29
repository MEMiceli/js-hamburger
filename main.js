// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Ricordate di scrivere solo il codice JavaScript e non modificare HTML e CSS ma non fatevi problemi a inserire gli id sugli elementi che volete poi gestire su js :occhiolino: altrimenti non avete modo di selezionarli
// Consiglio del giorno:
// Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a vostro vantaggio!

// all'evento click su hamburger menu <i class="fas fa-bars"></i> da inspector 
//  header right ul perde la funzione flex

const HamburgerM = document.getElementById("fa-bars");

const HamburgerMView = document.getElementsByClassName("header-left");


HamburgerMView.addEventListener("click",
    function() {
        windows.alert("funziona!");
}
);