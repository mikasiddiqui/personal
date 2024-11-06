function darkModeSwitch1() {
    var body = document.body;
    var check = document.getElementById("switch-image");
    var box = document.getElementsByClassName("box")[0]; // Get the first box element
    if (check.classList.contains("darkActive")) {
        check.classList.remove("darkActive");
        body.classList.remove("body-dark");
        box.classList.remove("dark"); // Remove dark class from box
        box.classList.add("light"); // Add light class to box

    }
    else {
        check.classList.add("darkActive");
        body.classList.add("body-dark");
        box.classList.remove("light"); // Remove light class from box
        box.classList.add("dark"); // Add dark class to box

    }
}