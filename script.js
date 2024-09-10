// Typing animation for the header text
const typedText = document.querySelector('.typed-text');
const words = ['AI', 'ML', 'DL', 'Computer Vision'];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = '';
let isDeleting = false;

function type() {
    if (isDeleting) {
        currentWord = words[wordIndex].substring(0, letterIndex--);
    } else {
        currentWord = words[wordIndex].substring(0, letterIndex++);
    }

    typedText.textContent = currentWord;

    if (!isDeleting && letterIndex === words[wordIndex].length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1000); // Pause before deleting
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 100 : 150); // Speed up when deleting
}

document.addEventListener('DOMContentLoaded', type); // Start typing when the page loads


// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});


// Scroll animations to reveal elements
const revealElements = document.querySelectorAll('.reveal');
const windowHeight = window.innerHeight;

function revealOnScroll() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add 'reveal' class to sections for scroll animation
document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
});
