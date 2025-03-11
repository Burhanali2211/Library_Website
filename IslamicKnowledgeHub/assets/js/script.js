// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const toggleBtn = document.getElementById('theme-toggle');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});




//fourth

// Initialize Swiper Carousel
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,          // 1 book on mobile
    spaceBetween: 20,          // Space between cards
    pagination: {
        el: '.swiper-pagination',
        clickable: true,       // Clickable dots
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', // Navigation arrows
    },
    breakpoints: {
        640: { slidesPerView: 2 },  // 2 books on small screens
        768: { slidesPerView: 3 },  // 3 books on medium screens
        1024: { slidesPerView: 4 }, // 4 books on large screens
    },
});


//fifth

document.getElementById('reveal-btn').addEventListener('click', function () {
    // Sample reflections (replace with your own collection)
    const reflections = [
        {
            hadith: 'Imam Ali (AS) said: "Patience is of two kinds: patience over what pains you, and patience against what you covet."',
            explanation: 'This teaches us to endure hardships and resist fleeting desires, finding peace in submission to Allah’s will.',
            prompt: 'How can you practice patience in your challenges today?'
        },
        {
            hadith: 'Imam Hussain (AS) said: "Death with dignity is better than life with humiliation."',
            explanation: 'This reminds us to stand firm in our principles, even in the face of adversity.',
            prompt: 'What value will you uphold today, no matter the cost?'
        }
        // Add more reflections here
    ];

    // Get today's date and pick a reflection
    const today = new Date().getDate() % reflections.length; // Simple rotation based on day
    const reflection = reflections[today];

    // Update content
    document.getElementById('hadith').textContent = reflection.hadith;
    document.getElementById('explanation').textContent = reflection.explanation;
    document.getElementById('explanation').style.display = 'block';
    document.getElementById('prompt').textContent = reflection.prompt;
    document.getElementById('prompt').style.display = 'block';
    this.style.display = 'none'; // Hide button after click
});


