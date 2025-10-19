// ===== CONFIGURACIÓN DE CERTIFICACIONES =====
const CERTIFICATIONS_CONFIG = {
    images: [
        {
            src: "./images/certifications/diplomaConsejo.jpg",
            alt: "Diploma del Consejo"
        },
        {
            src: "./images/certifications/diplomaDatos.png", 
            alt: "Diploma de Datos"
        },
        {
            src: "./images/certifications/certificateOLI.png",
            alt: "OLI Certificate"
        },
        {
            src: "./images/certifications/charlaModProd.jpg",
            alt: "Charla sobre Modulación de Producción"
        },
        {
            src: "./images/certifications/distinción.jpg",
            alt: "Distinción Académica"
        },
        {
            src: "./images/certifications/prozcert.png",
            alt: "Certificación ProZ"
        },
        {
            src: "./images/certifications/foroCarreras.jpg",
            alt: "Foro de Carreras"
        },
        {
            src: "./images/certifications/charlaESI.jpg",
            alt: "Charla sobre ESI"
        },
        {
            src: "./images/certifications/charlaCarreras.jpg",
            alt: "Charla sobre Carreras"
        }
    ]
};

let slideIndexC = 1;

// Generar galería de certificaciones dinámicamente
function generateCertificationsGallery() {
    console.log('Generando galería de certificaciones...');
    
    const galleryContainer = document.getElementById('certifications-gallery');
    
    if (!galleryContainer) {
        console.error('No se encontró el contenedor de certificaciones');
        return;
    }
    
    // Crear la estructura completa del slideshow
    galleryContainer.innerHTML = `
        <div class="slideshow-container-c">
            ${CERTIFICATIONS_CONFIG.images.map((image, index) => `
                <div class="mySlides-c fade-c hoverwrap">
                    <img src="${image.src}" style="width:100%" onclick="onClick(this)" alt="${image.alt}">
                </div>
            `).join('')}
            
            <a class="prev-c" onclick="plusSlidesC(-1)">❮</a>
            <a class="next-c" onclick="plusSlidesC(1)">❯</a>
        </div>
        
        <br>
        
        <div style="text-align:center">
            ${CERTIFICATIONS_CONFIG.images.map((_, index) => `
                <span class="dot-c" onclick="currentSlideC(${index + 1})"></span>
            `).join('')}
        </div>
    `;
    
    console.log('Galería generada con', CERTIFICATIONS_CONFIG.images.length, 'imágenes');
    
    // Reiniciar el slideshow
    slideIndexC = 1;
    showSlidesC(slideIndexC);
}

// Slideshow Certifications
function plusSlidesC(n) {
    showSlidesC(slideIndexC += n);
}

function currentSlideC(n) {
    showSlidesC(slideIndexC = n);
}

function showSlidesC(n) {
    console.log('Mostrando slide C:', n);
    
    let i;
    let slidesC = document.getElementsByClassName("mySlides-c");
    let dotsC = document.getElementsByClassName("dot-c");
    
    if (!slidesC.length) {
        console.log('No se encontraron slides C');
        return;
    }
    
    if (n > slidesC.length) { slideIndexC = 1 }
    if (n < 1) { slideIndexC = slidesC.length }
    
    for (i = 0; i < slidesC.length; i++) {
        slidesC[i].style.display = "none";
    }
    
    for (i = 0; i < dotsC.length; i++) {
        dotsC[i].className = dotsC[i].className.replace(" active-c", "");
    }
    
    if (slidesC[slideIndexC - 1]) {
        slidesC[slideIndexC - 1].style.display = "block";
    }
    
    if (dotsC[slideIndexC - 1]) {
        dotsC[slideIndexC - 1].className += " active-c";
    }
    
    console.log('Slides C totales:', slidesC.length, 'Dots C totales:', dotsC.length);
}

// Función para verificar si las imágenes existen
function checkImages() {
    CERTIFICATIONS_CONFIG.images.forEach(image => {
        const img = new Image();
        img.onload = function() {
            console.log('✓ Imagen cargada:', image.src);
        };
        img.onerror = function() {
            console.error('✗ Error cargando imagen:', image.src);
        };
        img.src = image.src;
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, inicializando galería de certificaciones...');
    generateCertificationsGallery();
    checkImages();
});

// También llamar cuando la ventana se cargue completamente
window.addEventListener('load', function() {
    console.log('Página completamente cargada');
    setTimeout(() => {
        slideIndexC = 1;
        showSlidesC(slideIndexC);
    }, 100);
});
