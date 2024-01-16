document.addEventListener("DOMContentLoaded", () => {
  const filterIcon = document.querySelector(".filter-icon");
  const shopSidebar = document.querySelector(".shop-sidebar");

  filterIcon.addEventListener("click", () => {
    shopSidebar.classList.toggle("active");
  });
});
