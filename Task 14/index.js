const checkNetworkStatus = () => {
    const onlineStatus = navigator.onLine;
    if (!onlineStatus) {
        document.body.textContent = "You are offline!";
    }
};
checkNetworkStatus();

const customCursor = document.querySelector(".custom_cursor");
window.addEventListener("mousemove", (e) => {
    customCursor.style.left = e.clientX - 20 + "px";
    customCursor.style.top = e.clientY - 20 + "px";
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav_links a");
const scrollTopBtn = document.querySelector(".scroll_to_top");

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionOffset = section.offsetTop;
        navLinks.forEach((link) => {
            const linkId = link.getAttribute("href").slice(1);
            if (scrollPosition >= sectionOffset) {
                if (sectionId === linkId) {
                    link.classList.add("nav_active");
                    document.title = `BOM | ${sectionId.toUpperCase()}`;
                } else {
                    link.classList.remove("nav_active");
                }
            }
        });
    });
    if (scrollPosition >= 100) {
        scrollTopBtn.classList.add("active");
    } else {
        scrollTopBtn.classList.remove("active");
    }
});

scrollTopBtn.addEventListener("click", () => {
    scrollTo({
        top: 0,
    });
});

window.addEventListener("blur", () => {
    document.title = "BOM | Come back!";
});
const initialTitle = document.title;
window.addEventListener("focus", () => {
    document.title = initialTitle;
});

const loadingScreen = document.querySelector(".loading_screen");
const loadingCounter = loadingScreen.children[1];
let counter = 0;

function loadCounter() {
    const interval = setInterval(() => {
        counter++;
        if (counter == 100) {
            clearInterval(interval);
            loadingScreen.classList.add("hiddenLoader");
            loadingScreen.children[0].classList.add("hiddenTitle");
            loadingScreen.children[1].classList.add("hiddenTitle");
        }
        loadingCounter.textContent = `${counter}%`;
    }, 50);
}
loadCounter();

let timeDisplay = document.getElementById("current_time");
setInterval(() => {
    let currentTime = new Date();
    timeDisplay.innerHTML = currentTime.toLocaleTimeString();
}, 1000);
