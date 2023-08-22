
function show_list() {
    var courses = document.getElementById("dropdown");

    if (courses.style.display == "block") {
        courses.style.display = "none";
    } else {
        courses.style.display = "flex";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.dropdown_button')) {
        document.getElementById('dropdown')
            .style.display = "none";
    }
}   