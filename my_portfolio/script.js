const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestions");

const data = [
    "JavaScript Basics",
    "JavaScript Functions",
    "React Tutorials",
    "Node.js Guide",
    "CSS Flexbox",
    "CSS Animations",
    "HTML5 Features",
    "Web Development",
    "Frontend Frameworks",
    "Backend Development",
    "Fontend Projects",
    "Fullstack Development",
    "Google Search Clone",
    "Tailwind CSS Tips",
    "HTML Best Pactices",
    "Css Grid Layout",
];

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    suggestionsList.innerHTML = "";

    if (query.trim() === "") {
        suggestionsList.classList.remove("show");
        return;
    }

    const filtered = data.filter(item => item.toLowerCase().includes(query));

    if (filtered.length > 0) {
        filtered.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            li.addEventListener("click", () => {
                searchInput.value = item;
                suggestionsList.classList.remove("show");
            });
            suggestionsList.appendChild(li);
        });

        suggestionsList.classList.add("show");
    } else {
        suggestionsList.classList.remove("show");
    }
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper")) {
        suggestionsList.classList.remove("show");
    }
});


let counter = 1;
let slider = document.querySelector(".slider");
let interval = setInterval(autoPlay, 5000);

function autoPlay() {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 3) counter = 1;
}

slider.addEventListener("mouseenter", () => clearInterval(interval));
slider.addEventListener("mouseenter", () => interval = setInterval(autoPlay, 5000));

const images = [
    "images/my_profile_pic.jpg",
    "images/my_profile_pic2.jpg",
    "images/my_profile_pic3.jpg",
    "images/my_profile_pic4.jpg"
];

let index = 0;
const slideshow = document.getElementById("slideshow");

setInterval(() => {
    index = (index + 1) % images.length;
    slideshow.style.opacity = 0;
    setTimeout(() => {
        slideshow.src = images[index];
        slideshow.style.opacity = 1;
    }, 500);
}, 5000);


document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".experience-section");
    const starContainer = document.createElement("div");
    starContainer.classList.add("stars");
    section.appendChild(starContainer);

    for (let i = 0; i < 25; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = '${Math.random() * 100}%';
        star.style.left = '${Math.random() * 100}%';
        starContainer.appendChild(star);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            starContainer.style.opacity = entry.isIntersecting ? "1" : "0";
            starContainer.style.transition = "opacity is ease";
        });
    }, { threshold: 0.3});

    observer.observe(section);

});