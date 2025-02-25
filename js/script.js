document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero");
    if (heroSection) {
        heroSection.style.opacity = "0";
        heroSection.style.transform = "translateY(20px)";
        setTimeout(() => {
            heroSection.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            heroSection.style.opacity = "1";
            heroSection.style.transform = "translateY(0)";
        }, 300);
    }

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff9800";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });

    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            fetch("https://spacetechbackend.onrender.com/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: document.getElementById("name").value,
                    department: document.getElementById("department").value,
                    year: document.getElementById("year").value,
                    section: document.getElementById("section").value,
                    password: document.getElementById("password").value
                })
            }).then(response => response.json())
              .then(data => alert(data.message))
              .catch(error => console.error(error));
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            fetch("https://spacetechbackend.onrender.com/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: document.getElementById("name").value,
                    password: document.getElementById("password").value
                })
            }).then(response => response.json())
              .then(data => {
                  if (data.success) {
                      window.location.href = "index.html";
                  } else {
                      alert("Invalid credentials!");
                  }
              })
              .catch(error => console.error(error));
        });
    }
});
