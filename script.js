const slideshowContainer = document.querySelector('.slideshow-container');

// Add your image file names here (assuming they are in the same folder as the HTML file)
const imageFileNames = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg',
    'img13.jpg',
    'img14.jpg',

    // Add more image file names as needed
];

let currentSlide = 0;

function showSlide() {
    const imageUrl = imageFileNames[currentSlide];
    slideshowContainer.style.backgroundImage = `url('${imageUrl}')`;
    currentSlide = (currentSlide + 1) % imageFileNames.length;
}

// Change slide every 5 seconds (5000ms)
setInterval(showSlide, 5000);

// Show the first slide immediately when the page loads
showSlide();
function handleSubmit(event) {
    event.preventDefault();

    const place= document.getElementById('place').value;
    const submittedText = document.getElementById('submittedText');

    submittedText.textContent = "Male";
}