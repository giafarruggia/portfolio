const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.querySelector(".lightbox-close");
const prevButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");
const lightboxCaption = document.getElementById("lightbox-caption");
const themeToggle = document.getElementById("theme-toggle");
const mobileToggle = document.getElementById("theme-toggle-mobile");

let currentIndex = 0;


// gallery lightbox
if (lightbox && galleryImages.length > 0) {

function showImage(index){
    if (!lightboxImage) return;

    lightboxImage.src = galleryImages[index].src;
    lightboxImage.alt = galleryImages[index].alt;
}

    galleryImages.forEach((image, index) => {
        image.addEventListener("click", () => {

            if (window.innerWidth > 700) {
                lightbox.style.display = "flex";
                if (prevButton) {
    prevButton.style.display = "block";
}

if (nextButton) {
    nextButton.style.display = "block";
}
                currentIndex = index;
                showImage(currentIndex);
                if (lightboxCaption) {
    lightboxCaption.textContent = "";
}
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
            if (lightboxCaption) {
    lightboxCaption.textContent = "";
}
        });
    }

    if (prevButton) {
        prevButton.addEventListener("click", () => {
            currentIndex--;

            if(currentIndex < 0){
                currentIndex = galleryImages.length - 1;
            }

            showImage(currentIndex);
            if (lightboxCaption) {
    lightboxCaption.textContent = "";
}
        });
    }

}


// charlie lightbox
const charlieLink = document.querySelector(".charlie-link");

if (charlieLink && lightbox && lightboxImage) {

    charlieLink.addEventListener("click", (event) => {

        event.preventDefault();

        lightbox.style.display = "flex";
        lightboxImage.src = charlieLink.href;
        lightboxImage.alt = "Charlie";

        if (lightboxCaption) {
            lightboxCaption.textContent = "say hello to charlie";
        }

        if (prevButton) {
            prevButton.style.display = "none";
        }

        if (nextButton) {
            nextButton.style.display = "none";
        }

    });

}


// dark mode

function setTheme(isDark) {

    if (isDark) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
    } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
    }

    localStorage.setItem("dark-mode", isDark);

    updateThemeControls();
}


function updateThemeControls() {

    const darkMode = document.body.classList.contains("dark-mode");

    if (themeToggle) {
        themeToggle.textContent = darkMode ? "☀️" : "🌙";
    }

    if (mobileToggle) {
        mobileToggle.textContent = darkMode ? "☀ light mode" : "☾ dark mode";
    }

}


const savedTheme = localStorage.getItem("dark-mode");

if (savedTheme !== null) {

    setTheme(savedTheme === "true");

} else {

    const deviceDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    setTheme(deviceDarkMode);

}


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const currentlyDark = document.body.classList.contains("dark-mode");

        setTheme(!currentlyDark);

    });

}


if (mobileToggle) {

    mobileToggle.addEventListener("click", (event) => {

        event.preventDefault();

        const currentlyDark = document.body.classList.contains("dark-mode");

        setTheme(!currentlyDark);

    });

}

// close lightbox

function closeLightbox() {
    if (lightbox) {
        lightbox.style.display = "none";
    }
}

// click X
if (closeButton) {
    closeButton.addEventListener("click", closeLightbox);
}

// click outside
if (lightbox) {
    lightbox.addEventListener("click", (event) => {

        if (!event.target.closest(".lightbox-content")) {
            closeLightbox();
        }

    });
}

// press escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeLightbox();
    }
});
