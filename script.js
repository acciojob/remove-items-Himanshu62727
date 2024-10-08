//your JS code here. If required.

function removeSelectedColor() {
    let selectElement = document.getElementById("colorSelect");
    let selectedIndex = selectElement.selectedIndex;
    
    if (selectedIndex !== -1) {
        selectElement.remove(selectedIndex);
    }
}

const input = document.querySelector("input");
input.addEventListener('click', removeSelectedColor);