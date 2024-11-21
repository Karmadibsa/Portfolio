// script.js

// Liste des mots à afficher
const words = ["développeur", "curieux", "créatif", "passionné"];
let index = 0; // Indice du mot courant
let charIndex = 0; // Position actuelle dans le mot
let isDeleting = false; // Indique si on supprime des lettres

// Récupère l'élément cible
const changingWord = document.getElementById("changing-word");

// Fonction pour animer le texte
function typeEffect() {
    const currentWord = words[index]; // Mot actuel
    const displayedText = changingWord.textContent;

    if (isDeleting) {
        // Supprime une lettre
        changingWord.textContent = displayedText.slice(0, -1);
    } else {
        // Ajoute une lettre
        changingWord.textContent = currentWord.slice(0, charIndex + 1);
    }

    // Ajuste les indices et bascule entre ajout/suppression
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
    } else if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true; // Commence à supprimer
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false; // Passe au mot suivant
        index = (index + 1) % words.length; // Change de mot
    }

    // Ajuste la vitesse : rapide pour suppression, lent pour ajout
    const typingSpeed = isDeleting ? 100 : 200;

    setTimeout(typeEffect, typingSpeed);
}

// Démarre l'animation
typeEffect();

let selection = Splitting();

gsap.registerPlugin(ScrollTrigger);

gsap.from(selection[0].chars, {
    transformOrigin: "bottom", // testez d'autres animations facilement
    scaleY: 0,
    opacity : 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".text-reveal",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true
    }
});

const cards = document.querySelectorAll(".card");

gsap.from(cards, {
    transformOrigin: "bottom", // testez d'autres animations facilement
    scaleY: 0,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card-reveal",
        start: "top 80%",
        end: "bottom 90%",
        scrub: true
    }
});

const itemsL = document.querySelectorAll(".itemL");

gsap.from(itemsL, {
    transformOrigin: "bottom", // testez d'autres animations facilement
    scaleY: 0,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".langage",
        start: "top 80%",
        end: "bottom 100%",
        scrub: true
    }
});

const itemsS = document.querySelectorAll(".itemS");

gsap.from(itemsS, {
    transformOrigin: "bottom", // testez d'autres animations facilement
    scaleY: 0,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".langage",
        start: "top 80%",
        end: "bottom 100%",
        scrub: true
    }
});

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 600);
});

gsap.ticker.lagSmoothing(0);