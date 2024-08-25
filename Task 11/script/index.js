const cardContainer = document.querySelector(".container");
const cards = [
    { 
        id: 1, 
        title: "Perfected Strategies for you", 
        description: "Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.",
        image: "./image.png",
        logo: "./logo.png" 
    },
    {
        id: 2,
        title: "Perfected Strategies for you", 
        description: "Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.",
        image: "./image.png",
        logo: "./logo.png" 
    },
    {
        id: 3,
        title: "Perfected Strategies for you", 
        description: "Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.",
        image: "./image.png",
        logo: "./logo.png" 
    },
];

cards.forEach(
    (data) =>
        (cardContainer.innerHTML += `<div class="card">
            <div class="card_image">
                <img src="${data.image}" alt="${data.title}-image">
            </div>
            <div class="card_description">
                <h2>${data.title}</h2>
                <p>${data.description}</p>
            </div>
            <div class="logo">
                <img src="${data.logo}" alt="Logo" style="width:30px; height:30px;">
            </div>
        </div>`),
);
