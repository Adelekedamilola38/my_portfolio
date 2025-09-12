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

// button click event
document.getElementById("click-btn").addEventListener("click", function() {
    window.location.href = "card-demo.html"; // replace #work with your actual work section ID
});

// add hover effect to button
const button = document.getElementById("click-btn");
button.addEventListener("mousedown", function() {
    button.style.transform = "scale(0.95)";
});

button.addEventListener("mouseup", function() {
    button.style.transform = "scale(1)";
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