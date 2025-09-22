const searchIcon = document.querySelector('.search-icon');
const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn')
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
    "Frontend Projects",
    "Fullstack Development",
    "Google Search Clone",
    "Tailwind CSS Tips",
    "HTML Best Practices",
    "CSS Grid Layout",
    "Project",
    "Portfolio",
    "Experience",
];

//show input when clicking icon
searchIcon.addEventListener('click', () => {
    searchContainer.classList.add('active');
    searchInput.focus();
});

// suggestions filter on typing
searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    suggestionsList.innerHTML = "";

    
    if (query === "") {
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
    if (!e.target.closest(".search-container")) {
        suggestionsList.classList.remove("show");
        searchInput.value = '';
        searchContainer.classList.remove("active");

    }
});

searchBtn.addEventListener("click", () => {
    searchContainer.classList.remove('active');
    searchInput.value = '';
    suggestionsList.classList.remove('show');
})


let counter = 1;
let slider = document.querySelector(".slider");
let interval = setInterval(autoPlay, 5000);

function autoPlay() {
    document.getElementById("radio" + counter).checked = true;
    slider.style.transform = 'translateX(-${(counter - 1) * 100}%)';
    counter++;
    if (counter > 3) counter = 1;
};

slider.addEventListener("mouseenter", () => clearInterval(interval));
slider.addEventListener("mouseleave", () => interval = setInterval(autoPlay, 5000));

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

const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navLinks.classList.toggle("show");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    burger.classList.remove("active");
    navLinks.classList.remove("show");
    overlay.classList.remove("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        burger.classList.remove("active");
        navLinks.classList.remove("show");
        overlay.classList.remove("show");
    });
});

const sections = document.querySelectorAll("section");
const navLinksA = document.querySelectorAll(".nav-links a");

const options = {
  root: null,
  threshold: 0.5 // highlight when 60% of section is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      navLinksA.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});


const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        alert("Message sent successfully ✅");
        form.reset();
    } else {
        alert("Oops! Something went wrong ❌");
    }
});