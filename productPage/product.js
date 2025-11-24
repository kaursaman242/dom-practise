const searchBar = document.getElementById("searchInput")
const filterBtn = document.getElementById("filterButton")
const productBtns = document.getElementsByClassName("product-btn")

const products = [
    {
        name: "Handbag1",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
        description: "Classic handbag with premium leather finish.",
        price: 20
    },
    {
        name: "Handbag2",
        image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
        description: "Stylish handbag suitable for daily use.",
        price: 25
    },
    {
        name: "Handbag3",
        image: "https://images.pexels.com/photos/3746234/pexels-photo-3746234.jpeg",
        description: "Elegant party wear handbag with modern design.",
        price: 30
    },
    {
        name: "Handbag4",
        image: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg",
        description: "Trendy handbag with spacious compartments.",
        price: 27
    }
];

const productGrid = document.getElementById("pG")

// If productGrid doesn't exist, do nothing to avoid errors
if (!productGrid) {
    console.warn("No element with id 'pG' found. Aborting render.")
} else {
    // If there are no products, show a single "No product" card
    if (!products || products.length === 0) {
        const cardElement = document.createElement("div")
        cardElement.className = "card"
        cardElement.innerText = "No product"
        productGrid.append(cardElement)
    } else {
        // iterate correctly (i < products.length)
        for (let i = 0; i < products.length; i++) {
            const obj = products[i]

            // guard: if obj is falsy, skip
            if (!obj) continue

            const cardElement = document.createElement("div")
            cardElement.className = "card"

            // Use template literal for innerHTML, but include proper escaping attributes
            // (We assume product data is trusted here as in your original)
            cardElement.innerHTML = `
        <img class="card-img" src="${obj.image}" alt="${obj.name || 'product image'}" loading="lazy">
        <h3 class="card-title">${obj.name}</h3>
        <p class="card-text">${obj.description}</p>
        <h4 class="card-price">${obj.price}</h4>
        <button class="card-btn">Buy Now</button>
      `

            productGrid.append(cardElement)
        }
    }
}
const buyNow=document.getElementsByClassName("card-btn")
console.log(buyNow)


