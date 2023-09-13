// Antigua
const cuerpoDeLaWeb = document.getElementsByTagName("body")
console.log("getElementsByTagName", cuerpoDeLaWeb[0]);

// Moderna
const body = document.querySelector("body" );
// body.style.backgroundColor = "#eee"
// body.style.fontSize = "20px"

body.style.cssText = `
    background-color: #eee;
    font-size: 20px;
`

const secondaryTitles = document.getElementsByTagName("h2")

for (const item of secondaryTitles) {
    console.log(item)
}

console.log("-------")

const secondaryTitles2 = document.querySelectorAll("h2");
secondaryTitles2.forEach((item) => {
    console.log(item);
});

// Obtener elemento por la forma antigua
// antigua
const title = document.getElementById("title")
// moderna 
const title2 = document.querySelector("#title")

// obtener elemento por class
// antigua
const imageAvengers = document.getElementsByClassName("img-avengers")
console.log(imageAvengers)
// moderna
const imageAvengers2 = document.querySelector(".img-avengers")
console.log(imageAvengers2)

const btnChangeWeb = document.querySelector("#btn-change-web")

btnChangeWeb.onclionclick = function () {
    imageAvengers2.src = "https://i.pinimg.com/736x/80/5a/70/805a703fde3eba777f354a12b059ad54.jpg"

    imageAvengers2.style.cssText = `
        width: 200px;
    `
    title2.textContent = "Avengers End Game"
}