// ===== FUNCIONES BÁSICAS =====

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-barra";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

// ===== INICIALIZACIÓN GENERAL =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada - inicializando componentes');
});

// ===== INTERACTIVIDAD PARA LA LISTA =====
document.addEventListener('DOMContentLoaded', function() {
    // Hacer los items con sub-links clickeables para expandir/contraer
    const listItemsWithSubs = document.querySelectorAll('.w3-ul li.w3-padding-small');
    
    listItemsWithSubs.forEach(item => {
        // Verificar si el item tiene sub-links
        const hasSubLinks = item.querySelector('.w3-small');
        if (hasSubLinks) {
            // Hacer todo el item clickeable (excepto los links mismos)
            item.style.cursor = 'pointer';
            
            item.addEventListener('click', function(e) {
                // No hacer nada si se clickeó en un link
                if (e.target.tagName === 'A') return;
                
                const subLinks = this.querySelector('.w3-padding-small');
                if (subLinks) {
                    subLinks.style.display = subLinks.style.display === 'none' ? 'block' : 'none';
                }
            });
        }
    });
});
