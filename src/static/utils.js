function revealOrHideElement(element_id) {
    var x = document.getElementById(element_id);
    if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
    } else {
        x.style.visibility = "visible";
    }
}