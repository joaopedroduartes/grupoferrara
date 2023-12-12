let time = 2500,
    currentImageIndex = 0,
    images = document.querySelectorAll(".fotos img");
max = images.length;

function nextImage() {
    images[currentImageIndex].classList.remove("foto1");
    currentImageIndex++;
    if (currentImageIndex >= max) currentImageIndex = 0;
    images[currentImageIndex].classList.add("foto1");
}

setInterval(() => {
    nextImage();
}, time);