function myFunction() {
    var drawer = document.getElementById("nav");
    console.log(drawer.className);
    if (drawer.className === "navHide") {
        drawer.classList.add("navShow");
        drawer.classList.remove("navHide");
    } else {
        drawer.classList.add("navHide");
        drawer.classList.remove("navShow");
    }
}