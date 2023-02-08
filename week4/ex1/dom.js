const myEmptyDiv = document.querySelector("#myEmptyDiv");

const heading = document.createElement("h1");
heading.innerHTML = "All about Llamas";
heading.style.cursor = "pointer";
heading.addEventListener("click", handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    document.body.style.backgroundColor = "orange";
}
