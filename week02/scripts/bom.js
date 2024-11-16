const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        // alert(input.value);

        // Create Element and fix
        const listItem = document.createElement("li");
        const deleteBtn = document.createElement('button');

        listItem.textContent = input.value;
        deleteBtn.textContent = "❌";
        listItem.appendChild(deleteBtn);

        list.appendChild(listItem);

        deleteBtn.addEventListener('click', () => {
            // alert("Clicked!");
            listItem.remove();
            input.focus();
        });

        input.value = "";
        // } else {
    }
    input.focus();
})