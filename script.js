const textContainer = document.getElementById('text-container');
const nextButton = document.getElementById('next-button');

const texts = [
    "Semangat Ya😊😊😊",
    "Klik tombol di bawah untuk ini melanjutkan."
];

let currentIndex = 0;
let charIndex = 0;

function typeText() {
    if (currentIndex < texts.length) {
        if (charIndex < texts[currentIndex].length) {
            textContainer.textContent += texts[currentIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 75); // Kecepatan mengetik (ms)
        } else {
            currentIndex++;
            charIndex = 0;
            if (currentIndex < texts.length) {
                setTimeout(() => {
                    textContainer.textContent = '';
                    typeText();
                }, 1500); // Jeda antar teks (ms)
            } else {
                nextButton.style.display = 'block'; // Tampilkan tombol setelah teks selesai
            }
        }
    }
}

nextButton.addEventListener('click', () => {
    window.location.href = 'https://forms.gle/YUFvDzYUhR1ALoNFA'; // Ganti dengan link yang diinginkan
});

// Mulai animasi
typeText();
