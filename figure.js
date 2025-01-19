document.addEventListener("DOMContentLoaded", function () {
    fetch('./forgure.json')
        .then(response => response.json())
        .then(data => {
            const thingy = document.getElementById("thingy");

            // Create HTML elements to display the JSON data
            const thingyP = document.createElement("p");
            thingyP.textContent = data.imageText;

            // const ageElement = document.createElement("p");
            // ageElement.textContent = "Age: " + data.age;

            // const cityElement = document.createElement("p");
            // cityElement.textContent = "City: " + data.city;

            // Append the elements to the "dataDisplay" div
            // dataDisplay.appendChild(nameElement);
            // dataDisplay.appendChild(ageElement);
            thingy.appendChild(thingyP);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
