// 1) Məhsulların məlumatları
const products = [
  {
    title: "Pizza",
    description: "Çox dadlı pendirli pizza.",
    price: "12 AZN",
    image:
      "https://www.oldenburger-professional.com/media/c5/dd/66/1669910692/OLB_Recipe-Pics_Watermark_970x480px_LY01_72dpi_Cheese_Pizza.jpg",
  },
  {
    title: "Burger",
    description: "Dana ətindən şirəli burger.",
    price: "9 AZN",
    image:
      "https://www.indilight.ru/upload/resize_cache/iblock/0c8/568_679_2/0c87da077d9872c1963fd7318399be37.png",
  },
  {
    title: "Dönər",
    description: "Toyuq dönər lavaşda.",
    price: "4 AZN",
    image:
      "https://146036028.cdn6.editmysite.com/uploads/1/4/6/0/146036028/2JMZVB3BNVGRAZPALZJRRLR5.jpeg?width=2400&optimize=medium",
  },
  {
    title: "Lavaş",
    description: "Ətli lavaş + ayran.",
    price: "6 AZN",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7w1vkwuHha37PA2GGuikH2rXnuCWgmO3nMg&s=1",
  },
  {
    title: "Lavaş",
    description: "Ətli lavaş + ayran.",
    price: "6 AZN",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7w1vkwuHha37PA2GGuikH2rXnuCWgmO3nMg&s=1",
  },
  {
    title: "Lavaş",
    description: "Ətli lavaş + ayran.",
    price: "6 AZN",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7w1vkwuHha37PA2GGuikH2rXnuCWgmO3nMg&s=1",
  },
  {
    title: "Lavaş",
    description: "Ətli lavaş + ayran.",
    price: "6 AZN",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7w1vkwuHha37PA2GGuikH2rXnuCWgmO3nMg&s=1",
  },
  {
    title: "Lavaş",
    description: "Ətli lavaş + ayran.",
    price: "6 AZN",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7w1vkwuHha37PA2GGuikH2rXnuCWgmO3nMg&s=1",
  },
  {
    title: "Lavaş",
    description: "Ətli lavaş + ayran.",
    price: "6 AZN",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7w1vkwuHha37PA2GGuikH2rXnuCWgmO3nMg&s=1",
  },
  {
    title: "Lavaş",
    description: "Ətli lavaş + ayran.",
    price: "6 AZN",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7w1vkwuHha37PA2GGuikH2rXnuCWgmO3nMg&s=1",
  },
];

// 2) HTML-dəki #products div-ni tapırıq
const productsBody = document.getElementById("products");

// 3) Kartların HTML-ni yığıb DOM-a yazırıq
let html = "";

for (let i = 0; i < products.length; i++) {
  const item = products[i];

  html += `
    <div class="product-card">
      <img src="${item.image}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <p class="product-price">${item.price}</p>
      <button class="add-btn" onclick="addToCart('${item.title}')">Add to Cart</button>
    </div>
  `;
}

productsBody.innerHTML = html;

// 4) Add to Cart funksiyası
function addToCart(productName) {
  alert(productName + " səbətə əlavə olundu!");
}