// ===== SISTEMA DE IDIOMAS =====
let currentLang = "en";
let currentNavLang = "en";

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
        "artisanal_text": "Un trabajo artesanal, cuidadoso y personalizado marca la diferencia entre un contenido superfluo y uno que realmente conecte, persuada y perdure en el tiempo.",
        
        // NUEVAS TRADUCCIONES PARA LA LISTA
        "proofreading_fiction": "Corrección de Ficción",
        "proofreading_non_fiction": "Corrección y Edición de No Ficción",
        "wikipedia_contributions": "Contribuciones a Wikipedia",
        "english_wikipedia": "Wikipedia en Inglés",
        "spanish_wikipedia": "Wikipedia en Español",
        "ngo_section": "ONG",
        "fiction_book": "Los que nos fuimos (2025)",
        "nonfiction_book1": "Acción del Precio 2.0 (2023)",
        "nonfiction_book2": "Smart Money Concept 3.0 (2023)", 
        "nonfiction_book3": "Las Bandas Bollinger (2025)"
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
        
        // NUEVAS TRADUCCIONES PARA LA LISTA
        "proofreading_fiction": "Proofreading Fiction",
        "proofreading_non_fiction": "Proofreading & Edition Non-Fiction",
        "wikipedia_contributions": "Wikipedia Contributions",
        "english_wikipedia": "English Wikipedia",
        "spanish_wikipedia": "Spanish Wikipedia",
        "ngo_section": "NGO",
        "fiction_book": "Los que nos fuimos (2025)",
        "nonfiction_book1": "Acción del Precio 2.0 (2023)",
        "nonfiction_book2": "Smart Money Concept 3.0 (2023)",
        "nonfiction_book3": "Las Bandas Bollinger (2025)"
    }
};

// Diccionario de traducciones para la barra de navegación
const navTranslations = {
    "es": {
        "nav_home": '<i class="fa fa-house"></i> INICIO',
        "nav_about": '<i class="fa fa-coffee"></i> SOBRE MÍ',
        "nav_portfolio": '<i class="fa fa-suitcase"></i> PORTAFOLIO',
        "nav_samples": '<i class="fa fa-pen"></i> MUESTRAS',
        "nav_cv": '<i class="fa fa-file"></i> MI CV'
    },
    "en": {
        "nav_home": '<i class="fa fa-house"></i> HOME',
        "nav_about": '<i class="fa fa-coffee"></i> ABOUT ME',
        "nav_portfolio": '<i class="fa fa-suitcase"></i> PORTFOLIO',
        "nav_samples": '<i class="fa fa-pen"></i> SAMPLES',
        "nav_cv": '<i class="fa fa-file"></i> MY CV'
    }
};

// Función para cambiar idioma
function toggleLanguage() {
    console.log('Cambiando idioma...');
    
    currentLang = currentLang === "en" ? "es" : "en";
    currentNavLang = currentNavLang === "en" ? "es" : "en";
    
    console.log('Idioma actual:', currentLang);
    
    // Traducir elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        console.log('Traduciendo elemento:', key, 'a', currentLang);
        
        if (translations[currentLang][key]) {
            if (element.tagName.toLowerCase() === 'a' || element.tagName.toLowerCase() === 'button') {
                element.innerHTML = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
            console.log('✓ Traducido:', key);
        } else {
            console.log('✗ No se encontró traducción para:', key);
        }
    });
    
    // Traducir elementos de la barra de navegación
    document.querySelectorAll('.w3-top a[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (navTranslations[currentNavLang][key]) {
            element.innerHTML = navTranslations[currentNavLang][key];
        }
    });
    
    // TRADUCIR ELEMENTOS DE LA LISTA
    translateListItems();
    
    // Actualizar texto del botón de idioma
    updateLanguageButton();
    
    console.log('Idioma cambiado exitosamente a:', currentLang);
}

// Función específica para traducir los elementos de la lista
function translateListItems() {
    console.log('Traduciendo elementos de lista...');
    
    // Proofreading Fiction
    const fictionTitle = document.querySelector('.collapsible-item:nth-child(2) .item-header span');
    if (fictionTitle) {
        fictionTitle.textContent = translations[currentLang]["proofreading_fiction"];
        console.log('✓ Fiction title traducido');
    }
    
    // Proofreading & Edition Non-Fiction
    const nonfictionTitle = document.querySelector('.collapsible-item:nth-child(3) .item-header span');
    if (nonfictionTitle) {
        nonfictionTitle.textContent = translations[currentLang]["proofreading_non_fiction"];
        console.log('✓ Non-fiction title traducido');
    }
    
    // Wikipedia Contributions
    const wikipediaTitle = document.querySelector('.collapsible-item:nth-child(4) .item-header span');
    if (wikipediaTitle) {
        wikipediaTitle.textContent = translations[currentLang]["wikipedia_contributions"];
        console.log('✓ Wikipedia title traducido');
    }
    
    // NGO Section
    const ngoTitle = document.querySelector('.collapsible-item:nth-child(5) .item-header span');
    if (ngoTitle) {
        ngoTitle.textContent = translations[currentLang]["ngo_section"];
        console.log('✓ NGO title traducido');
    }
    
    // English Wikipedia link
    const englishWiki = document.querySelector('a[href*="en.wikipedia.org"]');
    if (englishWiki) {
        englishWiki.textContent = translations[currentLang]["english_wikipedia"];
        console.log('✓ English Wikipedia link traducido');
    }
    
    // Spanish Wikipedia link
    const spanishWiki = document.querySelector('a[href*="es.wikipedia.org"]');
    if (spanishWiki) {
        spanishWiki.textContent = translations[currentLang]["spanish_wikipedia"];
        console.log('✓ Spanish Wikipedia link traducido');
    }
    
    // Fiction book
    const fictionBook = document.querySelector('a[href*="Los-que-nos-fuimos"]');
    if (fictionBook) {
        fictionBook.textContent = translations[currentLang]["fiction_book"];
        console.log('✓ Fiction book traducido');
    }
    
    // Non-Fiction books
    const nonfictionBooks = document.querySelectorAll('.collapsible-item:nth-child(3) .w3-small a');
    if (nonfictionBooks.length >= 3) {
        nonfictionBooks[0].textContent = translations[currentLang]["nonfiction_book1"];
        nonfictionBooks[1].textContent = translations[currentLang]["nonfiction_book2"];
        nonfictionBooks[2].textContent = translations[currentLang]["nonfiction_book3"];
        console.log('✓ Non-fiction books traducidos');
    }
}

// Función para actualizar el texto del botón de idioma
function updateLanguageButton() {
    const langButtons = document.querySelectorAll('.lang-toggle, .lang-toggle-mobile');
    langButtons.forEach(button => {
        if (currentLang === "en") {
            button.innerHTML = '<i class="fa fa-language"></i> ES/EN';
        } else {
            button.innerHTML = '<i class="fa fa-language"></i> EN/ES';
        }
    });
    console.log('Botón de idioma actualizado');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sistema de idiomas cargado');
    console.log('Idioma inicial:', currentLang);
    
    // Aplicar traducciones iniciales
    applyTranslations(currentLang);
});

// Función para aplicar traducciones
function applyTranslations(lang) {
    currentLang = lang;
    currentNavLang = lang;
    
    // Traducir elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName.toLowerCase() === 'a' || element.tagName.toLowerCase() === 'button') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Traducir elementos de la barra de navegación
    document.querySelectorAll('.w3-top a[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (navTranslations[lang][key]) {
            element.innerHTML = navTranslations[lang][key];
        }
    });
    
    // Traducir elementos de la lista
    translateListItems();
    
    // Actualizar botón de idioma
    updateLanguageButton();
}
