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

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Slideshow Certifi
let slideIndexC = 1;
showSlidesC(slideIndexC);

function plusSlidesC(n) {
  showSlidesC(slideIndexC += n);
}

function currentSlideC(n) {
  showSlidesC(slideIndexC = n);
}

function showSlidesC(n) {
  let i;
  let slidesC = document.getElementsByClassName("mySlides-c");
  let dotsC = document.getElementsByClassName("dot-c");
  if (n > slidesC.length) {slideIndexC = 1}    
  if (n < 1) {slideIndexC = slidesC.length}
  for (i = 0; i < slidesC.length; i++) {
    slidesC[i].style.display = "none";  
  }
  for (i = 0; i < dotsC.length; i++) {
    dotsC[i].className = dotsC[i].className.replace(" active-c", "");
  }
  slidesC[slideIndexC-1].style.display = "block";  
  dotsC[slideIndexC-1].className += " active-c";
}


// Slideshow REVIEWS
let slideIndexR = 1;
showSlidesR(slideIndexR);

function plusSlidesR(n) {
  showSlidesR(slideIndexR += n);
}

function currentSlideR(n) {
  showSlidesR(slideIndexR = n);
}

function showSlidesR(n) {
  let i;
  let slidesR = document.getElementsByClassName("mySlides-r");
  let dotsR = document.getElementsByClassName("dot-r");
  if (n > slidesR.length) {slideIndexR = 1}    
  if (n < 1) {slideIndexR = slidesR.length}
  for (i = 0; i < slidesR.length; i++) {
    slidesR[i].style.display = "none";  
  }
  for (i = 0; i < dotsR.length; i++) {
    dotsR[i].className = dotsR[i].className.replace(" active-r", "");
  }
  slidesR[slideIndexR-1].style.display = "block";  
  dotsR[slideIndexR-1].className += " active-r";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  //var captionText = document.getElementById("caption");
  //captionText.innerHTML = element.alt;
}

// IDIOMAS

// Agregar un botón en la barra de navegación en index.html
const navbar = document.getElementById('myNavbar');
const langButton = document.createElement('a');
langButton.className = 'w3-bar-item w3-button w3-hide-small';
langButton.href = 'javascript:void(0);';
langButton.innerHTML = '<i class="fa fa-language"></i> ES/EN';
langButton.onclick = toggleLanguage;
navbar.appendChild(langButton);

// Diccionario de traducciones
const translations = {
    "es": {
        "about": "Sobre mí",
        "portfolio": "Portafolio",
        "samples": "Muestras",
        "cv": "Mi CV",
        "contact": "Contáctame",
        "who_am_i": "¿Quién soy?",
        "academic_career": "Carrera académica",
        "interests": "Intereses",
        "experience": "Experiencia",
        "text_importance": "Importancia del texto",
        "description": "Hola, mi nombre es Dante. Estudié una carrera enfocada en distintas áreas de lingüística y literatura. Esto me proporciona herramientas no solo para revisar la coherencia, cohesión, sintaxis y ortografía de un texto; sino también para analizar y desarrollar estrategias pertinentes desde el área de la semiótica y la pragmática. Esto me permite gestionar un discurso (académico, político o marketing) no solo desde su proceso de producción, sino también pensando en su recepción (plataforma, público objetivo, código o vocabulario).",
        "academic_text": "Durante mis estudios, participé en el ámbito legislativo de la academia. El recorrido de cada proyecto desde que se escribe hasta que se ejectua en el co-gobierno universitario es un mundo apasionante. Uno siempre aprende cosas nuevas sobre normativas, leyes, protocolos, tesorería, finanzas, desarrollo, entre muchos otros espacios. La gestión y la administración es un campo muy productivo cuando se desarrolla mediante un buen trabajo en equipo.",
        "interests_text": "Además de mi formación académica, soy un aficionado a la programación y al software libre. Participo en diferentes proyectos comunitarios ya sea a través de correciones, traducciones o modestos aportes de código. Siempre es fascinante la organización de los usuarios para encontrar respuestas a sus necesidades o problemas: no solo fomenta la participación colectiva, sino que el conocimiento que uno adquiere y pone a prueba es invaluable.",
        "experience_text": "En el ámbito laboral, cuento con experiencia en: clases particulares de asignaturas relacionadas a los contenidos en los que me he formado; localización de sitios web de empleo y de venta de libros; programación de bots de Telegram para tareas específicas; transcripción y edición de formularios y documentos administrativos; corrección y edición de textos académicos, publicaciones de educación financiera y libros de autoayuda; traducción y edición de informes de biotecnología y artículos web, y traducción y revisión de textos en diversas ONG.",
        "text_importance_text": "Un texto bien elaborado no solo garantiza una comunicación clara y efectiva, sino que también construye un mensaje que resuena y deja un impacto en quen lo lee. Como co-autor del texto, el lector interpreta y da vida al contenido, convirtiéndose en una parte esencial del resultado final.",
        "every_text": "Cada nivel lingüístico —desde la gramática hasta el estilo— resulta un elemento clave en el fortalecimiento del mensaje. Del mismo modo, las funciones del lenguaje (informativa, persuasiva, emotiva, etc.) influyen directamente en la relación que se establece con el lector o la audiencia. Por ello, la redacción de un texto no puede reducirse a algo automatizado.",
        "artisanal_text": "Un trabajo artesanal, cuidadoso y personalizado marca la diferencia entre un contenido superfluo y uno que realmente conecte, persuada y perdure en el tiempo."
    },
    "en": {
        "about": "About Me",
        "portfolio": "Portfolio",
        "samples": "Samples",
        "cv": "My CV",
        "contact": "Talk to Me!",
        "who_am_i": "Who am I?",
        "academic_career": "Academic Career",
        "interests": "Interests",
        "experience": "Experience",
        "text_importance": "Text Importance",
        "description": "Hello, my name is Dante. I studied a degree focused on different areas of linguistics and literature. This gives me a set of tools not only to check the coherence, cohesion, syntax, and spelling of a text; but also to analyze and develop strategies related to signs and discourses belonging to the area of semiotics and pragmatics. This allows me to manage a discourse (academic, political, marketing) not only in its production process but also thinking about its reception (platform, target audience, code, vocabulary).",
        "academic_text": "During my studies, I've participated in the legislative sphere of the academy. The journey of each project that is written and presented in the university co-government is an exciting world. One is always learning new things regarding regulations, laws, protocols, treasury, finances, development, among many other spaces. Management and administration is a very productive field when it is developed through good teamwork.",
        "interests_text": "Despite my academic training, I am a fan of programming and free software. I participate in different community projects either through proofreading, translation, or a modest contribution of code. The organization of users to find answers to their needs or problems is always fascinating, not only does it encourage participation but the knowledge that one acquires and tests is invaluable.",
        "experience_text": "At work I have experience in: private classes of subjects with contents which I have studied in my training; localization of employment websites and book sales websites; programming Telegram bots for specific tasks of different entities, both to speed up the search for files in the cloud and also for the field of translation and literature; transcription and editing of forms and administrative documents; proofreading and editing of academic texts, financial education publications and self-help books; translation and editing of biotechnology reports and web articles; translator and reviewer of texts in various NGOs.",
        "text_importance_text": "A well-crafted text not only ensures clear and effective communication but also builds a message that resonates and leaves an impact on the reader. As a co-creator of the process, the reader interprets and brings the content to life, becoming an essential part of the final result.",
        "every_text": "Every linguistic level—from grammar to style—plays a key role in enhancing the message. Similarly, the functions of language (informative, persuasive, emotive, etc.) directly influence the relationship established with the reader or audience. For this reason, creating a text cannot be reduced to automation.",
        "artisanal_text": "Artisanal, careful, and personalized work makes the difference between functional content and content that truly connects, persuades, and endures.",
    }
};

let currentLang = "en";

// Función para cambiar idioma
function toggleLanguage() {
    currentLang = currentLang === "en" ? "es" : "en";
    document.querySelectorAll('.w3-container h5, .w3-container p, #navDemo a').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            if (element.tagName.toLowerCase() === 'h5') {
                element.innerHTML = `<b>${translations[currentLang][key]}</b>`;
            } else {
                element.innerText = translations[currentLang][key];
            }
        }
    });
    document.querySelectorAll('.w3-top a').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (navTranslations[currentNavLang][key]) {
            element.innerHTML = navTranslations[currentLang][key];
        }
    });
}

//// NAVEGACION

// Diccionario de traducciones para la barra de navegación
const navTranslations = {
    "es": {
        "nav_home": '<i class="fa fa-house"></i> INICIO',
        "nav_about": '<i class="fa fa-coffee"></i> SOBRE MÍ',
        "nav_portfolio": '<i class="fa fa-suitcase"></i> PORTAFOLIO',
        "nav_samples": '<i class="fa fa-pen"></i> MUESTRAS',
        "nav_cv": '<i class="fa fa-file"></i> MI CV',
        "nav_contact": '<i class="fa fa-paper-plane"></i> CONTÁCTAME!',
        
    },
    "en": {
        "nav_home": '<i class="fa fa-house"></i> HOME',
        "nav_about": '<i class="fa fa-coffee"></i> ABOUT ME',
        "nav_portfolio": '<i class="fa fa-suitcase"></i> PORTFOLIO',
        "nav_samples": '<i class="fa fa-pen"></i> SAMPLES',
        "nav_cv": '<i class="fa fa-file"></i> MY CV',
        "nav_contact": '<i class="fa fa-paper-plane"></i> TALK ME!',
    }
};

let currentNavLang = "en";
