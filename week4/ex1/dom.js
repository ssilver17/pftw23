const myEmptyDiv = document.querySelector("#myEmptyDiv");

const heading = document.createElement("h1");
heading.innerHTML = "All about Llamas";
heading.style.cursor = "pointer";
heading.addEventListener("click", handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    document.body.style.backgroundColor = "orange";
}

const emptyDivTwo = document.querySelector("#emptyDivTwo");
const subhead = document.createElement("h2");
subhead.innerHTML = "Ancestors of the llama lived in the Great Plains of North America";
subhead.addEventListener("mouseover", handleSubheadClick);
emptyDivTwo.appendChild(subhead);
function handleSubheadClick() {
    document.body.style.color = "blue"; 
}
