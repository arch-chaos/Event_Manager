
// Keyboard tracking panel
document.addEventListener("keydown", function(event) {
    const keyDisplay = document.querySelector("#keyDisplay");
    const key = event.key === " " ? "[SPACE]" : event.key;
    const timestamp = new Date().toLocaleTimeString();
    
    // Create new entry
    const entry = document.createElement("div");
    entry.textContent = `[${timestamp}] ${key}`;
    
    // Add to top of display
    keyDisplay.insertBefore(entry, keyDisplay.firstChild);
    
    // Keep only last 10 keys
    const entries = keyDisplay.children;
    while (entries.length > 10) {
        keyDisplay.removeChild(entries[entries.length - 1]);
    }
});

// Clear all events button
document.querySelector("#clearBtn").addEventListener("click", function() {
    document.querySelector(".cards").innerHTML = "";
});

// Add Event Card button with random values
function createRandomCard() {
    const titles = ["Tech Conference", "JavaScript Workshop", "Web Design Meetup", "Cloud Computing Webinar", "AI Workshop", "React Bootcamp", "DevOps Summit", "Data Science Talk"];
    const categories = ["conference", "workshop", "meetup", "webinar", "social"];
    const descriptions = [
        "An exciting event to explore new technologies",
        "Learn from industry experts and network with professionals",
        "Hands-on training session for skill development",
        "Interactive webinar with Q&A session",
        "Great opportunity to connect with like-minded people",
        "Deep dive into cutting-edge technologies",
        "Networking event with refreshments",
        "Workshop covering practical implementations"
    ];
    
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
    
    // Generate random date within next 30 days
    const randomDate = new Date();
    randomDate.setDate(randomDate.getDate() + Math.floor(Math.random() * 30));
    const dateString = randomDate.toISOString().split('T')[0];
    
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <button class="deleteCard">&times;</button>
        <h2>${randomTitle}</h2>
        <p><strong>Date:</strong> ${dateString}</p>
        <p><strong>Category:</strong> ${randomCategory}</p>
        <p><strong>Description:</strong> ${randomDescription}</p>
        `;
        document.querySelector(".cards").appendChild(card);
    
    card.querySelector(".deleteCard").addEventListener("click", function() {
        card.remove();
    });
}

document.querySelector("#addCardBtn").addEventListener("click", function() {
    createRandomCard();
});

const form = document.querySelector("#form")
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(eventTitle.value);
    console.log(eventDate.value);
    console.log(category.value);
    console.log(description.value);
    

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <button class="deleteCard">&times;</button>
        <h2>${eventTitle.value}</h2>
        <p><strong>Date:</strong> ${eventDate.value}</p>
        <p><strong>Category:</strong> ${category.value}</p>
        <p><strong>Description:</strong> ${description.value}</p>
    `;
    document.querySelector(".cards").appendChild(card);

    card.querySelector(".deleteCard").addEventListener("click", function() {
        card.remove();
    });
})

// Simple Randomization Helper Functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomBoolean() {
    return Math.random() < 0.5;
}