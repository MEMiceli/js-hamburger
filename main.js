// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Ricordate di scrivere solo il codice JavaScript e non modificare HTML e CSS ma non fatevi problemi a inserire gli id sugli elementi che volete poi gestire su js :occhiolino: altrimenti non avete modo di selezionarli
// Consiglio del giorno:
// Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a vostro vantaggio!

// all'evento click su hamburger menu <i class="fas fa-bars"></i> da inspector 
//  header right ul perde la funzione flex

const HamburgerM = document.getElementById("open-menu");

// const HamburgerMView = document.getElementsById("hamburgermview");
const Close = document.getElementById("close-menu")

HamburgerM.addEventListener("click",
    function() {
        document.getElementById("hamburgermview").style.display = 'block';  
        
}
);
Close.addEventListener("click",
    function() {
        document.getElementById("hamburgermview").style.display = 'none';  
        
}
);