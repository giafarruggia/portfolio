const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.querySelector(".lightbox-close");
const prevButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");

let currentIndex = 0;


// gallery lightbox
if (lightbox && galleryImages.length > 0) {

    function showImage(index){
        lightboxImage.src = galleryImages[index].src;
        lightboxImage.alt = galleryImages[index].alt;
    }

    galleryImages.forEach((image, index) => {
        image.addEventListener("click", () => {

            if (window.innerWidth > 700) {
                lightbox.style.display = "flex";
                currentIndex = index;
                showImage(currentIndex);
            }

        });
    });

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            currentIndex++;

            if(currentIndex >= galleryImages.length){
                currentIndex = 0;
            }

            showImage(currentIndex);
        });
    }

    if (prevButton) {
        prevButton.addEventListener("click", () => {
            currentIndex--;

            if(currentIndex < 0){
                currentIndex = galleryImages.length - 1;
            }

            showImage(currentIndex);
        });
    }

}


// charlie lightbox
const charlieLink = document.querySelector(".charlie-link");

if (charlieLink && lightbox && lightboxImage) {

    charlieLink.addEventListener("click", (event) => {

        if (window.innerWidth > 700) {

            event.preventDefault();

            lightbox.style.display = "flex";
            lightboxImage.src = charlieLink.href;
            lightboxImage.alt = "Charlie";

        }

    });

}


// dark mode
const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");

    if (themeToggle) {
        themeToggle.textContent = "☀";
    }
}

if(themeToggle){

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const darkMode = document.body.classList.contains("dark-mode");

        localStorage.setItem("dark-mode", darkMode);

        themeToggle.textContent = darkMode ? "☀" : "☾";

    });

}

// close lightbox
if (closeButton) {
    closeButton.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

if (lightbox) {
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

// escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox) {
        lightbox.style.display = "none";
    }
});
