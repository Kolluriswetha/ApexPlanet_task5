function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

const products = [
    { name: "Smartphone", price: 149999, img: "https://blackzone.in/cdn/shop/files/P1.png?v=1748844977" },
    {name: "Laptop", price: 99999, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { name: "Headphones", price: 3999, img: "https://images.alphacoders.com/109/1090856.jpg" },
    { name: "Camera", price: 34999, img: "https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3" },
    { name: "Smartwatch", price: 3499, img: "https://m.media-amazon.com/images/I/61Famx7xQwL._UF1000,1000_QL80.jpg" },
    { name: "Bluetooth Speaker", price: 2199, img: "https://jasminesmarthomes.com/img/shop-single-img/product1553-item-01.jpg" },
    { name: "Gaming Mouse", price: 999, img: "https://images.unsplash.com/photo-1623820919239-0d0ff10797a1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wx" },
    { name: "Smart Glasses", price: 699, img: "https://m.media-amazon.com/images/I/41Dx7cXZx7L._UF1000,1000_QL80.jpg" },
    { name: "Fridge", price: 15990, img: "https://e1.pxfuel.com/desktop-wallpaper/437/1011/desktop-wallpaper-lg-double-door-refrigerator-gl-fridge-thumbnail.jpg" },
    {name: "kurtas", price: 1299, img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/ethnic-set/e/c/c/s-mittu-blue-kurta-set-s-universal-corporation-original-imah57cgdrxgphtg.jpeg?q=20&crop=false" },
    { name: "Shoes", price: 999, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3" },
    { name: "Shirts", price: 899, img: "https://images.meesho.com/images/products/363307786/fipaw_512.jpg" }
];


const cart = [];

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("cart-total");
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(li);
        total += item.price;
    });

    totalDisplay.textContent = `Total: ₹${total}`;
}

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

const grid = document.querySelector(".product-grid");
products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
    `;
    grid.appendChild(div);
});

