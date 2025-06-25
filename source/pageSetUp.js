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
        const overlay = document.getElementById("overlay")
        if (navBar.style.width == "350px") {
            navBar.style.width = "0px";
            navButton.textContent = "☰";
            overlay.style.opacity = 0
        } else {
            navBar.style.width = "350px";
            navButton.textContent = "✖"
            overlay.style.opacity = 1
        }           
    }





async function loadImagesForGrid(grid) {
    const folder = grid.dataset.folder; // get folder from data-folder attribute
    if (!folder) return; // skip if no folder defined

    let index = 1;
    while (true) {
        const filePath = `images/${folder}/${index}.jpg`; // adjust extension if needed

        try {
            const response = await fetch(filePath, { method: 'HEAD' });
            if (response.ok) {
                // File exists, create image element
                const img = document.createElement('img');
                img.src = filePath;
                img.id = 'image-grid-item'; // keep your id if needed
                grid.appendChild(img);
                index++;
            } else {
                // File not found, stop loop
                break;
            }
        } catch (error) {
            // Network or other error, stop loop
            break;
        }
    }
}

async function loadAllGrids() {
    const grids = document.getElementsByClassName('image-grid');
    for (let i = 0; i < grids.length; i++) {
        await loadImagesForGrid(grids[i]);
    }
}

window.addEventListener('DOMContentLoaded', loadAllGrids);
