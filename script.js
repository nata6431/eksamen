window.addEventListener("load", showTryk);

function showTryk() {
    console.log("show tryk")
    document.querySelector("#tryk").classList.add("pulse");
    document.querySelector("#tryk").addEventListener("click", ShowGoddag);
}


function ShowGoddag() {
    console.log("show goddag");
    document.querySelector("#tryk").classList.add("hide");
    document.querySelector("#goddag").classList.remove("hide");
}
