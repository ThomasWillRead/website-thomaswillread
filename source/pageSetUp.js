fetch("/source/head.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("head").innerHTML += data;
    });

fetch("/source/header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML += data;
    });

fetch("/source/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML += data;
    });


function navButton() {
        const navBar = document.getElementById("nav-bar")
        const navButton = document.getElementById("nav-button")
        if (navBar.style.width == "250px") {
            navBar.style.width = "0px";
            navButton.textContent = "☰";
        } else {
            navBar.style.width = "250px";
            navButton.textContent = "✖"
        }           
    }

