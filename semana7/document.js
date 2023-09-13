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

const secondaryTitles2 = document.querySelector("h2")
secondaryTitles2.foreac((item) => {
    console.log(item)
})

// Obtener elemento por la forma antigua
const title = document.getElementById("title")

