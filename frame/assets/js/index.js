addEventListener("DOMContentLoaded", () => {
  let sidenav = document.getElementById("burgerNav");
  let openBtn = document.getElementById("openBtn");
  let closeBtn = document.getElementById("closeBtn");

  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;

  function openNav() {
    sidenav.classList.add("active");
  }

  function closeNav() {
    sidenav.classList.remove("active");
  }
});
