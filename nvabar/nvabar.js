const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');
function MenuBar() {
overlay.style.display = 'block';
sidebar.classList.add('open');
container.style.display= "none";

}
function CloseBar() {
overlay.style.display = 'none';
sidebar.classList.remove('open');
container.style.display= "block";
}