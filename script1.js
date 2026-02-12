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
