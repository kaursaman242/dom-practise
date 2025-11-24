const searchBar = document.getElementsByClassName("search-bar")
const filterBtn = document.getElementsByClassName("filter-btn")
const product=[
   {
        name: "Pet1",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
        description: "Classic handbag with premium leather finish.",
        price: 20
    },
   {
        name: "Pet2",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
        description: "Classic handbag with premium leather finish.",
        price: 20
    },
   {
        name: "Pet3",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
        description: "Classic handbag with premium leather finish.",
        price: 20
    },
   {
        name: "Pet4",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
        description: "Classic handbag with premium leather finish.",
        price: 20
    },
   {
        name: "Pet5",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
        description: "Classic handbag with premium leather finish.",
        price: 20
    },
   {
        name: "Pet6",
        image: "C:\Users\Admin\OneDrive\DOM\dom-practise\images\dog1.jpg",
        description: "Classic handbag with premium leather finish.",
        price: 20
    },
   {
        name: "Pet7",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
        description: "Classic handbag with premium leather finish.",
        price: 20
    },
   {
        name: "Pet8",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
        description: "Classic handbag with premium leather finish.",
        price: 20
    },
   {
        name: "Pet9",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
        description: "Classic handbag with premium leather finish.",
        price: 20
    },
   {
        name: "Pet10",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
        description: "Classic handbag with premium leather finish.",
        price: 20
    }
];

const productGrid = document.getElementById("pG")

for (let i = 0; i < products.length; i++) {
            const obj = products[i]

           
            if (!obj) continue

            const cardElement = document.createElement("div")
            cardElement.className = "card"
 cardElement.innerHTML = `
        <img class="card-img" src="${obj.image}" alt="${obj.name || 'product image'}" loading="lazy">
        <h3 class="card-title">${obj.name}</h3>
        <p class="card-text">${obj.description}</p>
        <h4 class="card-price">${obj.price}</h4>
        <button class="card-btn">Buy Now</button>
      `

            productGrid.append(cardElement)
}

const buyNow=document.getElementsByClassName("card-btn")
console.log(buyNow)


