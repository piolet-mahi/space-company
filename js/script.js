document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero");
    heroSection.style.opacity = "0";
    heroSection.style.transform = "translateY(20px)";
    setTimeout(() => {
        heroSection.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        heroSection.style.opacity = "1";
        heroSection.style.transform = "translateY(0)";
    }, 300);

    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach((img, index) => {
        img.style.opacity = "0";
        img.style.transform = "scale(0.8)";
        setTimeout(() => {
            img.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
            img.style.opacity = "1";
            img.style.transform = "scale(1)";
        }, 500 + index * 200);
    });

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff9800";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Form submitted successfully!");
        });
    }
});
