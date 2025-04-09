let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
let products = [
    {
        id: 1,
        img: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg",
        name: "Seeds of Change Organic Quinoa",
        description: "Snack",
        price: 28.50
    },
    {
        id: 2,
        img: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-2-1.jpg",
        name: "All Natural Italian-Style Chicken Meatballs",
        description: "Hodo food",
        price: 32.00
    },
    {
        id: 3,
        img: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-3-1.jpg",
        name: "Foster Farms Takeout Crispy Classic",
        description: "Vegetables",
        price: 35.50
    },
    {
        id: 4,
        img: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-4-1.jpg",
        name: "Blue Diamond Almonds Lightly Salted ",
        description: "Pet food",
        price: 63.50
    },
    {
        id: 5,
        img: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-5-1.jpg",
        name: "Chobani Complete Vanilla Greek Yogurt",
        description: "Hodo food",
        price: 70.00
    },
    {
        id: 6,
        img: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-6-1.jpg",
        name: "Canada Dry Ginger Ale – 2 L",
        description: "Meats",
        price: 55.00
    },
    {
        id: 7,
        img: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-7-1.jpg",
        name: "Encore Seafoods Stuffed Alaskan Salmon",
        description: "Snack",
        price: 90.50
    },
    {
        id: 8,
        img: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-8-1.jpg",
        name: "Gorton’s Beer Battered Fish Fillets",
        description: "Coffes",
        price: 32.50
    },
    {
        id: 9,
        img: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-2-1.jpg",
        name: "All Natural Italian-Style Chicken Meatballs",
        description: "Hodo food",
        price: 32.00
    },
    {
        id: 10,
        img: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-9-1.jpg",
        name: "Haagen-Dazs Caramel Cone Ice Cream",
        description: "Cream",
        price: 70.50
    }
];
let productIDX;

const cartCounter = document.getElementById("counter");



function addToCart(productID) {

    let cartItem = products.find((item) => {
        return item.id == productID
    })

    productIDX = cartArr.findIndex((obj) => {
        return obj.id === productID
    });

    if (productIDX !== -1) {
        cartArr[productIDX].quantity++;
        Swal.fire({
            position: "bottom-end",
            toast: true,
            icon: "warning",
            title: "Item already added to cart.",
            showConfirmButton: false,
            timer: 2500,
        });
        return;
    }
     else {
        cartItem.quantity = 1;
        cartArr.push(cartItem)
        cartCounter.innerHTML = cartArr.length;
        Swal.fire({
            position: "bottom-end",
            toast: true,
            icon: "success",
            title: "Item added to cart.",
            showConfirmButton: false,
            timer: 2500
        });
    }
    localStorage.setItem("cart", JSON.stringify(cartArr))


}
products.forEach((product, idx) => {
    let products = document.getElementById("product-list").innerHTML += `
    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 items-box">
        <div class="img-fluid"class="d-flex align-items-center justify-content-center">
        <img src="${product.img}" alt="${product.name}" width="100%">
    </div>
    <div class="items-des">
        <p class="product-des">${product.description}</p>
        <h2>${product.name}</h2>
        <div class="items-rating mb-3 d-flex">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-line"></i>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <span class="price">$${product.price}</span>
            <button class="add-to-cart" onclick="addToCart(${product.id})" ><i class="ri-shopping-cart-2-fill"></i></button>
        </div>
    </div>
    </div>
    `;
})

cartCounter.innerHTML = cartArr.length;