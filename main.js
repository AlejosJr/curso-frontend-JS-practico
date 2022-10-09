const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconHamMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconCart = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".product-detail");
const productDetailsClose = document.querySelector(".product-details-close");
const productDetails = document.querySelector(".product-details");

menuEmail.addEventListener("click", toggleDesktopMenu);
iconHamMenu.addEventListener("click", toggleMobileMenu);
iconCart.addEventListener("click", toggleIconCart);
productDetailsClose.addEventListener("click", toggleDetailsProduct);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    shoppingCart.classList.add("inactive");
};

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    shoppingCart.classList.add("inactive");
};

function toggleIconCart() {
    shoppingCart.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
};



const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""'
});
productList.push({
    name: "TV",
    price: 200,
    image: 'https://www.sony.com.mx/image/5a01a9fdb85a075ce2d715c1254b08ab?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF alt=""'
});
productList.push({
    name: "Gamer PC",
    price: 650,
    image: 'https://www.profesionalreview.com/wp-content/uploads/2017/09/pc-gamer.jpg'
});
productList.push({
    name: "Laptop",
    price: 550,
    image: 'https://http2.mlstatic.com/D_NQ_NP_632682-MLV49940965100_052022-W.jpg'
});



function renderProductList(listOfProducts){
    for(product of productList){
    
        const productCard = document.createElement('div');
        productCard.classList.add("product-card");
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo= document.createElement('div');
        productInfo.classList.add("product-info");
    
        const productInfoDiv= document.createElement('div');
    
        const productPrice= document.createElement('p');
        productPrice.innerHTML = "$" + product.price;
    
        const productName= document.createElement('p');
        productName.innerHTML = product.name;
    
        const figure = document.createElement("figure");
    
        const imgIcon =  document.createElement('img');
        imgIcon.setAttribute('src', './icons/bt_add_to_cart.svg');   
    
        figure.append(imgIcon);
    
        productInfoDiv.append(productPrice, productName);
    
        productInfo.append(productInfoDiv, figure);
    
        productCard.append(img, productInfo)
    
        const cardsContainer = document.querySelector(".cards-container");
        cardsContainer.append(productCard);
    
    }
}

renderProductList(productList);

const productCard = document.getElementsByClassName("product-card");

productCard.addEventListener("click", toggleDetailsProduct);

function toggleDetailsProduct() {
    productDetails.classList.toggle("inactive");
};