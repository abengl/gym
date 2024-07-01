export function renderItems (dogs) {
    const ulElement = document.createElement("ul");

    dogs.forEach((dog) => {
        const liElement = document.createElement("li");
        liElement.classList.add("card");

        liElement.innerHTML = `
            <img class="image-card" src="${dog.image}" alt="">
            <span class="text-card">${dog.breed}</span>
            `;
        
        ulElement.appendChild(liElement);
    })
    return ulElement;
}