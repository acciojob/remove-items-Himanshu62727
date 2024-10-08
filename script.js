//your JS code here. If required.

function removeSelectedColor() {
    var selectElement = document.getElementById("colorSelect");
    var selectedIndex = selectElement.selectedIndex;
    
    if (selectedIndex !== -1) {
        selectElement.remove(selectedIndex);
    }
}

const input = document.querySelector("input");
input.addEventListener('click', removeSelectedColor);