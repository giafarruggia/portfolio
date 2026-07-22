const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.querySelector(".lightbox-close");

if (lightbox) {

    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            if (window.innerWidth > 700) {
                lightbox.style.display = "flex";
                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;
            }
        });
    });

    closeButton.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

}
