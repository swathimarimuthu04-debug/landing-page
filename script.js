
// Open and close mobile navigation menu

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const button = document.querySelector(".menu-toggle");

  nav.classList.toggle("open");

  button.setAttribute(
    "aria-expanded",
    nav.classList.contains("open")
  );
}



function closeMenu() {
  document.getElementById("navLinks").classList.remove("open");

  document.querySelector(".menu-toggle").setAttribute(
    "aria-expanded",
    "false"
  );
}
