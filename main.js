const body = document.querySelector('body');

let metorNumber = 25;
for (let i = 0; i <= metorNumber; i++) {
    body.innerHTML += `<div class="meteor-${i}"></div>`;
}

// Создание звезд
let starNumber = 300;
const starSizes = [2, 0.8, 0.2, 0.4]; // Возможные размеры звезд
const starAlphas = [0.5, 0.7, 0.9, 1]; // Возможные значения альфа-канала

for (let i = 0; i < starNumber; i++) {
    let star = document.createElement('div');
    star.classList.add('simple-star');
    
    // Случайный размер и альфа-канал
    let size = starSizes[Math.floor(Math.random() * starSizes.length)];
    let alpha = starAlphas[Math.floor(Math.random() * starAlphas.length)];
    
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.backgroundColor = `rgba(255, 255, 255, ${alpha})`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    
    // Случайная задержка начала анимации
    let delay = Math.random() * 5; // Задержка до 5 секунд
    star.style.animationDelay = `${delay}s`;
    
    body.appendChild(star);
}