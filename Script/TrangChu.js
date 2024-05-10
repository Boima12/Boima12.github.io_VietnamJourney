let check = "none";

function showdropmenu() {
    if (check == "none") {
        check = "block";
    } else {
        check = "none";
    }

    document.getElementById("dropmenu1").style.display = check;
    
}



// navigation bar background transparency
const navheader = document.getElementById('header1');
function toggle_navheader() {
    if (window.screenY == 0) {
        navheader.style.backgroundColor = "rgba(82, 82, 82, 0)";
    } else if (window.screenY < 140) {
        navheader.style.backgroundColor = "rgba(82, 82, 82, " + parseInt(window.scrollY)*2 / 200 + ")";
    } else {
        navheader.style.backgroundColor = "rgba(82, 82, 82, 0.7)";
    }
}

window.addEventListener('scroll', toggle_navheader);