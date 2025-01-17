function toggleMenu() {
    sidebarDisplay = document.getElementById("sidebar").style.display;

    if (sidebarDisplay === "none") {
        document.getElementById("sidebar").style.display = "flex";
    } else {
        document.getElementById("sidebar").style.display = "none";
    }
}

function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;
}

getCurrentYear();