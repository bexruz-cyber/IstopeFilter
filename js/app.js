// Ma'lumotlar massivi
const items = [
    { name: "Item 1", category: "category-a", number: 3 },
    { name: "Item 2", category: "category-b", number: 1 },
    { name: "Item 3", category: "category-c", number: 4 },
    { name: "Item 4", category: "category-a", number: 2 },
    { name: "Item 5", category: "category-b", number: 5 },
    { name: "Item 6", category: "category-c", number: 6 },
  ];
  
  // Grid elementini tanlash
  const grid = document.querySelector(".grid");
  
  // Ma'lumotlarni gridga yuklash
  items.forEach(item => {
    const div = document.createElement("div");
    div.className = `grid-item ${item.category}`;
    div.dataset.name = item.name.toLowerCase(); // Sorting uchun
    div.dataset.number = item.number; // Sorting uchun
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Category: ${item.category}</p>
      <p>Number: ${item.number}</p>
    `;
    grid.appendChild(div);
  });
  
  // Isotope ni o'rnatish
// Isotope ni o'rnatish
const iso = new Isotope(grid, {
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    getSortData: {
      name: "[data-name]",
      number: function (itemElem) {
        // number qiymatini to‘g‘ri parse qilish
        return parseInt(itemElem.dataset.number, 10);
      },
    },
  });
  
  // Saralashni boshqarish
  document.querySelectorAll(".sort-controls button").forEach(button => {
    button.addEventListener("click", () => {
      const sortBy = button.getAttribute("data-sort-by");
      iso.arrange({ sortBy });
    });
  });
  
  
  // Filtrlashni boshqarish
  document.querySelectorAll(".controls button").forEach(button => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");
      iso.arrange({ filter: filterValue });
    });
  });
  

  