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


g