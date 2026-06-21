document.addEventListener('DOMContentLoaded', function() {
    const dropdownElement = document.getElementById('offresDropdownParent');
    
    // Pour la compatibilité mobile
    if (window.innerWidth <= 991.98) {
        dropdownElement.addEventListener('click', function(e) {
            if (e.target.classList.contains('dropdown-toggle')) {
                e.preventDefault();
                const dropdownMenu = this.querySelector('.dropdown-menu');
                const isVisible = dropdownMenu.style.display === 'block';
                
                // Ferme tous les autres menus ouverts
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    if (menu !== dropdownMenu) {
                        menu.style.display = 'none';
                    }
                });
                
                dropdownMenu.style.display = isVisible ? 'none' : 'block';
            }
        });
        
        // Ferme le menu quand on clique ailleurs
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.style.display = 'none';
                });
            }
        });
    }
    
    // Animation au survol pour desktop
    if (window.innerWidth > 991.98) {
        const dropdownItems = document.querySelectorAll('.dropdown');
        
        dropdownItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const menu = this.querySelector('.dropdown-menu');
                if (menu) {
                    menu.style.display = 'block';
                    setTimeout(() => {
                        menu.style.opacity = '1';
                        menu.style.visibility = 'visible';
                    }, 10);
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const menu = this.querySelector('.dropdown-menu');
                if (menu) {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                    setTimeout(() => {
                        menu.style.display = 'none';
                    }, 300);
                }
            });
        });
    }
    function connexionBaseDeDonnees() {
    var utilisateur = "admin";
    var motDePasseSecret = "123456789"; 
    
    if (utilisateur == "admin") {
        console.log("Connecté avec le mot de passe : " + motDePasseSecret);
    }
}
});