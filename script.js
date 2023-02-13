const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('.product-detail');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cardContainer = document.querySelector('.cards-container');
const productXLdetail = document.querySelector('.product-XL-detail');
const productXLdetailClose = document.querySelector('.product-XL-detail-close')


// APERTURA Y CIERRE DE MENUS
navEmail.addEventListener('click', toggleDesktopMenu);
mobileIconMenu.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartMenu);
productXLdetailClose.addEventListener('click', closeProductXLdetail)

function toggleDesktopMenu() {
    const cartMenuClosed = cartMenu.classList.contains('inactive');
    const productXLdetailClosed = productXLdetail.classList.contains('inactive')
    
    !cartMenuClosed ? cartMenu.classList.add('inactive'): true;
    !productXLdetailClosed ? productXLdetail.classList.add('inactive'): true;

    desktopMenu.classList.toggle('inactive')
}  

function toggleMobileMenu() {
    const cartMenuClosed = cartMenu.classList.contains('inactive');
    const productXLdetailClosed = productXLdetail.classList.contains('inactive')

    !cartMenuClosed ? cartMenu.classList.add('inactive'): true;
    !productXLdetailClosed ? productXLdetail.classList.add('inactive'): true;

    mobileMenu.classList.toggle('inactive')
}  

function toggleCartMenu() {
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');
    const productXLdetailClosed = productXLdetail.classList.contains('inactive')
    
    !mobileMenuClosed ? mobileMenu.classList.add('inactive'): true;
    !desktopMenuClosed ? desktopMenu.classList.add('inactive'): true;
    !productXLdetailClosed ? productXLdetail.classList.add('inactive'): true;

    cartMenu.classList.toggle('inactive')

}  

function openProductXLdetail(){
    const cartMenuClosed = cartMenu.classList.contains('inactive');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');

    !cartMenuClosed ? cartMenu.classList.add('inactive'): true;
    !desktopMenuClosed ? desktopMenu.classList.add('inactive'): true;
    
    productXLdetail.classList.remove('inactive')
}

function closeProductXLdetail(){
    productXLdetail.classList.add('inactive')
}

//LISTA DE PRODUCTOS

const productList = [];
productList.push({
    nombre: 'Bicicleta',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    nombre: 'Móvil',
    precio: 299,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    nombre: 'Cargador',
    precio: 15,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function cargarProductos(lista){
    for (product of lista){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    const productImage = document.createElement('img')
    productImage.setAttribute('src', product.imagen)
    productImage.addEventListener('click', openProductXLdetail)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const productBox = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = product.precio + ' €'

        const productName = document.createElement('p')
        productName.innerText = product.nombre

    const productFigure = document.createElement('figure')
        const addImage = document.createElement('img')
        addImage.setAttribute('src', './icons/bt_add_to_cart.svg')

    productFigure.appendChild(addImage) 
    productBox.append(productName, productPrice)
    productInfo.append(productBox, productFigure)
    productCard.append(productImage, productInfo)
    cardContainer.appendChild(productCard)
}
}
cargarProductos(productList)

module.exports = cargarProductos