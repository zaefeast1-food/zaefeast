const products = [

{
    id:1,
    nama:"Ayam Geprek",
    kategori:"Makanan",
    harga:10000,
    gambar:"images/ayam-geprek.png",
    deskripsi:"Ayam geprek pedas level sesuai selera"
},

{
    id:2,
    nama:"Ayam Geprek+",
    kategori:"Makanan",
    harga:13000,
    gambar:"images/Ayam-geprek-nasi.jpg",
    deskripsi:"nasi-ayam crispy dengan sambal pedas"
},

{
    id:3,
    nama:"Bakso",
    kategori:"Makanan",
    harga:10000,
    gambar:"images/bakso.jpg",
    deskripsi:"Bakso Sapi dengan kuah Nikmat"
},

{
    id:4,
    nama:"Mie Ayam",
    kategori:"Makanan",
    harga:10000,
    gambar:"images/mie-ayam.png",
    deskripsi:"Mie ayam Full Toping"
},

{
    id:5,
    nama:"Nasi",
    kategori:"Makanan",
    harga:3000,
    gambar:"images/nasi.png",
    deskripsi:"Nasi Tambah"
},

{
    id:6,
    nama:"Es Teh Manis",
    kategori:"Minuman",
    harga:5000,
    gambar:"images/es-teh.png",
    deskripsi:"Es teh manis segar"
},

{
    id:7,
    nama:"Jus jeruk",
    kategori:"Minuman",
    harga:5000,
    gambar:"images/jus-jeruk.png",
    deskripsi:""
},

{
    id:8,
    nama:"Jus Alpukat",
    kategori:"Minuman",
    harga:5000,
    gambar:"images/jus-alpukat.png",
    deskripsi:""
},

{
    id:9,
    nama:"Jus Buah Naga",
    kategori:"Minuman",
    harga:5000,
    gambar:"images/jus-naga.png",
    deskripsi:""
},

{
    id:10,
    nama:"Jus Mangga",
    kategori:"Minuman",
    harga:5000,
    gambar:"images/jus-mangga.png",
    deskripsi:""
},

{
    id:11,
    nama:"Jus Nanas",
    kategori:"Minuman",
    harga:5000,
    gambar:"images/jus-nanas.png",
    deskripsi:""
},




{
    id:12,
    nama:"Kentang Goreng",
    kategori:"Snack",
    harga:10000,
    gambar:"images/kentang.png",
    deskripsi:"Kentang goreng crispy"
},

{
    id:13,
    nama:"Cheese Cake",
    kategori:"Dessert",
    harga:25000,
    gambar:"images/cheese.png",
    deskripsi:"Cheese cake lembut premium"
},

{
    id:14,
    nama:"Americano Hot",
    kategori:"Coffee",
    harga:6000,
    gambar:"images/americano.png",
    deskripsi:""
},

{
    id:15,
    nama:"Americano Ice",
    kategori:"Coffee",
    harga:8000,
    gambar:"images/americano-ice.png",
    deskripsi:""
},

{
    id:16,
    nama:"Kopi Hitam",
    kategori:"Coffee",
    harga:5000,
    gambar:"images/kopi-hitam.png",
    deskripsi:""
},

{
    id:16,
    nama:"Luwak White Coffee",
    kategori:"Coffee",
    harga:5000,
    gambar:"images/luwak-white.png",
    deskripsi:"Panas/dingin"
},

{
    id:16,
    nama:"Kopi Gula Aren",
    kategori:"Coffee",
    harga:5000,
    gambar:"images/gula-aren.png",
    deskripsi:"TOP Coffe Panas/dingin"
},




];

let cart = [];

const menuContainer =
document.getElementById("menuContainer");

const cartItems =
document.getElementById("cartItems");

const cartCount =
document.getElementById("cartCount");

const totalPrice =
document.getElementById("totalPrice");

function renderProducts(data){

menuContainer.innerHTML = "";

data.forEach(product => {

menuContainer.innerHTML += `

<div class="menu-card">

<div class="menu-image">

<img src="${product.gambar}">

<span class="menu-badge">

${product.kategori}

</span>

</div>

<div class="menu-content">

<h3>${product.nama}</h3>

<p class="menu-desc">

${product.deskripsi}

</p>

<div class="menu-footer">

<div class="menu-price">

Rp ${product.harga.toLocaleString()}

</div>

<button
class="add-cart"
onclick="addToCart(${product.id})">

+

</button>

</div>

</div>

</div>

`;

});

}

function addToCart(id){

const product =
products.find(
item => item.id === id
);

const exist =
cart.find(
item => item.id === id
);

if(exist){

exist.qty++;

}else{

cart.push({

...product,

qty:1

});

}

saveCart();

renderCart();

}

function renderCart(){

cartItems.innerHTML = "";

let total = 0;

let jumlahItem = 0;

cart.forEach(item => {

jumlahItem += item.qty;

total += item.harga * item.qty;

cartItems.innerHTML += `

<div class="cart-item">

<div class="cart-info">

<h4>${item.nama}</h4>

<p class="cart-price">

Rp ${item.harga.toLocaleString()}

</p>

</div>

<div class="qty-control">

<button
onclick="decreaseQty(${item.id})">

-

</button>

<span>${item.qty}</span>

<button
onclick="increaseQty(${item.id})">

+

</button>

</div>

</div>

`;

});

cartCount.innerText = jumlahItem;

totalPrice.innerText =
"Rp " + total.toLocaleString();

}

function increaseQty(id){

const item =
cart.find(
p => p.id === id
);

item.qty++;

saveCart();

renderCart();

}

function decreaseQty(id){

const item =
cart.find(
p => p.id === id
);

item.qty--;

if(item.qty <= 0){

cart =
cart.filter(
p => p.id !== id
);

}

saveCart();

renderCart();

}

const floatingCart =
document.getElementById("floatingCart");

const cartSidebar =
document.getElementById("cartSidebar");

const closeCart =
document.getElementById("closeCart");

floatingCart.addEventListener("click",()=>{

cartSidebar.classList.add("active");

});

closeCart.addEventListener("click",()=>{

cartSidebar.classList.remove("active");

});

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

const keyword =
searchInput.value.toLowerCase();

const filtered =
products.filter(item =>

item.nama
.toLowerCase()
.includes(keyword)

);

renderProducts(filtered);

});

const categories =
document.querySelectorAll(".category");

categories.forEach(button=>{

button.addEventListener("click",()=>{

categories.forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

const category =
button.innerText
.replace(/[^\w]/g,"")
.trim();

if(category === "Semua"){

renderProducts(products);

return;

}

const filtered =
products.filter(item=>

item.kategori === category

);

renderProducts(filtered);

});

});

function saveCart(){

localStorage.setItem(
"zaefeast_cart",
JSON.stringify(cart)
);

}

function loadCart(){

const data =
localStorage.getItem(
"zaefeast_cart"
);

if(data){

cart = JSON.parse(data);

renderCart();

}

}

function openCheckoutModal(){

    document
    .getElementById("checkoutModal")
    .classList.add("active");

}

function closeCheckoutModal(){

    document
    .getElementById("checkoutModal")
    .classList.remove("active");

}



const nomorWA =
"6281541374258";

function sendWhatsappOrder(){
    
if(cart.length === 0){

alert(
"Keranjang masih kosong"
);

return;

}

const nama =
document.getElementById(
"customerName"
).value;

const alamat =
document.getElementById(
"customerAddress"
).value;

const catatan =
document.getElementById(
"customerNote"
).value;

if(!nama){

    alert(
    "Masukkan nama terlebih dahulu"
    );

    return;

}

if(!alamat){

    alert(
    "Masukkan alamat terlebih dahulu"
    );

    return;

}

let pesan =
"🍽️ *PESANAN BARU ZAEFEAST*%0A%0A";

pesan +=
"👤 DATA PEMESAN%0A";

pesan +=
`Nama : ${nama}%0A`;

pesan +=
`Alamat : ${alamat}%0A`;

pesan +=
`Catatan : ${catatan}%0A%0A`;

pesan +=
"====================%0A";

pesan +=
"🛒 DETAIL PESANAN%0A%0A";

let total = 0;

let totalItem = 0;

cart.forEach(item=>{

total +=
item.harga * item.qty;

totalItem += item.qty;

let subtotal =
item.harga * item.qty;

pesan +=
`${item.nama}%0A`;

pesan +=
`Qty : ${item.qty}%0A`;

pesan +=
`Subtotal : Rp ${subtotal.toLocaleString()}%0A%0A`;

});

pesan +=
"====================%0A";

pesan +=
"💰 RINGKASAN%0A%0A";

pesan +=
`Total Item : ${totalItem}%0A`;

pesan +=
`Total Bayar : Rp ${total.toLocaleString()}%0A`;

window.open(

`https://wa.me/${nomorWA}?text=${pesan}`,

"_blank"

);

}

renderProducts(products);

loadCart();

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle(
        "mobile-active"
    );

});

document.addEventListener("click",(e)=>{

   if(
      !navLinks.contains(e.target) &&
      !menuToggle.contains(e.target)
   ){

      navLinks.classList.remove(
         "mobile-active"
      );

   }

});

window.addEventListener("resize",()=>{

   if(window.innerWidth > 768){

      navLinks.classList.remove(
         "mobile-active"
      );

   }

});

