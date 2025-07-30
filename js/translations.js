// Translations object
const translations = {
    fr: {
        // Header
        'greeting': 'Salut, je suis',
        'job-title': 'Ingénieur Logiciel.',
        'intro-text': 'Je suis un ingénieur logiciel passionné par le développement d\'applications web et mobiles. Spécialisé en Spring Boot, Angular, et architectures microservices, j\'aime créer des solutions innovantes et fonctionnelles qui répondent aux besoins des utilisateurs.',
        'download-cv': 'Télécharger CV',
        
        // About section
        'about': 'À propos',
        'about-me': 'de moi',
        'my-stats': 'mes statistiques',
        'info-about-me': 'Informations à propos de moi',
        'about-description': 'Diplômé d\'un Master en Génie Logiciel et Nouvelles Technologies, je suis passionné par le développement d\'applications innovantes. Mon expertise couvre les technologies Java/Spring Boot, Angular, et les architectures microservices. J\'ai une solide expérience dans le développement full-stack, la gestion de projets agiles, et l\'intégration de solutions d\'intelligence artificielle. Mon objectif est de créer des applications robustes et évolutives qui apportent une réelle valeur ajoutée aux utilisateurs.',
        'projects-completed': 'Projets<br />Terminés',
        'years-experience': 'Années<br />d\'expérience',
        'technologies-mastered': 'Technologies<br />Maîtrisées',
        'certifications-obtained': 'Certifications<br />Obtenues',
        'my-skills': 'Mes Compétences',
        'my-timeline': 'Mon Parcours',
        
        // Portfolio section
        'my-portfolio': 'Mon',
        'portfolio': 'Portfolio',
        'my-work': 'Mes Projets',
        'portfolio-description': 'Voici quelques-uns de mes projets réalisés dans différents langages de programmation.',
        
        // Certifications section
        'my-certifications': 'Mes',
        'certifications': 'Certifications',
        
        // Contact section
        'contact-me': 'Me',
        'contact': 'Contacter',
        'contact-here': 'Contactez-moi ici',
        'contact-description': 'N\'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration. Je suis toujours ouvert aux nouveaux défis et projets innovants.',
        'location': 'Localisation',
        'email': 'Email',
        'education': 'Formation',
        'mobile-number': 'Numéro Mobile',
        'languages': 'Langues',
        
        // Contact form
        'your-name': 'VOTRE NOM',
        'your-email': 'VOTRE EMAIL',
        'enter-subject': 'ENTREZ LE SUJET',
        'message-here': 'Votre message ici...'
    },
    
    en: {
        // Header
        'greeting': 'Hi, I\'m',
        'job-title': 'Software Engineer.',
        'intro-text': 'I\'m a passionate software engineer focused on developing web and mobile applications. Specialized in Spring Boot, Angular, and microservices architectures, I love creating innovative and functional solutions that meet user needs.',
        'download-cv': 'Download CV',
        
        // About section
        'about': 'About',
        'about-me': 'me',
        'my-stats': 'my stats',
        'info-about-me': 'Information About me',
        'about-description': 'Graduate with a Master\'s in Software Engineering and New Technologies, I am passionate about developing innovative applications. My expertise covers Java/Spring Boot technologies, Angular, and microservices architectures. I have solid experience in full-stack development, agile project management, and artificial intelligence solutions integration. My goal is to create robust and scalable applications that bring real added value to users.',
        'projects-completed': 'Projects<br />Completed',
        'years-experience': 'Years of<br />experience',
        'technologies-mastered': 'Technologies<br />Mastered',
        'certifications-obtained': 'Certifications<br />Obtained',
        'my-skills': 'My Skills',
        'my-timeline': 'My Timeline',
        
        // Portfolio section
        'my-portfolio': 'My',
        'portfolio': 'Portfolio',
        'my-work': 'My Work',
        'portfolio-description': 'Here is some of my work that I\'ve done in various programming languages.',
        
        // Certifications section
        'my-certifications': 'My',
        'certifications': 'Certifications',
        
        // Contact section
        'contact-me': 'Contact',
        'contact': 'Me',
        'contact-here': 'Contact me here',
        'contact-description': 'Feel free to contact me to discuss your projects or collaboration opportunities. I am always open to new challenges and innovative projects.',
        'location': 'Location',
        'email': 'Email',
        'education': 'Education',
        'mobile-number': 'Mobile Number',
        'languages': 'Languages',
        
        // Contact form
        'your-name': 'YOUR NAME',
        'your-email': 'YOUR EMAIL',
        'enter-subject': 'ENTER SUBJECT',
        'message-here': 'Message Here...'
    }
};

// Language switching functionality
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'fr';
        this.init();
    }
    
    init() {
        this.updateActiveButton();
        this.translatePage();
        this.bindEvents();
    }
    
    bindEvents() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.currentTarget.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    }
    
    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.updateActiveButton();
        this.translatePage();
        document.documentElement.lang = lang;
    }
    
    updateActiveButton() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active-lang');
            if (btn.dataset.lang === this.currentLang) {
                btn.classList.add('active-lang');
            }
        });
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.dataset.translate;
            if (translations[this.currentLang] && translations[this.currentLang][key]) {
                element.innerHTML = translations[this.currentLang][key];
            }
        });
        
        // Translate placeholders
        this.translatePlaceholders();
    }
    
    translatePlaceholders() {
        const placeholderElements = [
            { selector: 'input[placeholder]', attr: 'placeholder' },
            { selector: 'textarea[placeholder]', attr: 'placeholder' }
        ];
        
        placeholderElements.forEach(({ selector, attr }) => {
            document.querySelectorAll(selector).forEach(element => {
                const translateKey = element.dataset.translate;
                if (translateKey && translations[this.currentLang] && translations[this.currentLang][translateKey]) {
                    element.setAttribute(attr, translations[this.currentLang][translateKey]);
                }
            });
        });
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
});
