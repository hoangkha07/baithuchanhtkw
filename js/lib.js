// js
function inBCC(n) {

    if (n < 1 || n > 10 || isNaN(n)) {
        alert("Vui lòng nhập số từ 1 đến 10 nheeeeeee!");
        return;
    }

    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += `${n} x ${i} = ${n * i}<br>`;
    }

    document.getElementById("result").innerHTML = result;

}


function addItem(name, price, description, link, image)
{
    // Tạo container-item
    const item = document.createElement("div");
    item.setAttribute("class", "container-item");

    // Tạo container-image
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "container-image");

    // Tạo ảnh
    const imageProduct = document.createElement("img");
    imageProduct.setAttribute("src", image);
    imageProduct.setAttribute("alt", name);

    containerImage.appendChild(imageProduct);

    // Tạo container-info
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "container-info");

    // Tên sản phẩm
    const nameProduct = document.createElement("h3");
    nameProduct.innerHTML = name;

    // Giá sản phẩm
    const priceProduct = document.createElement("p");
    priceProduct.setAttribute("class", "price");
    priceProduct.innerHTML = price;

    // Mô tả sản phẩm
    const descProduct = document.createElement("p");
    descProduct.setAttribute("class", "description");
    descProduct.innerHTML = description;

    // Link sản phẩm
    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", link);
    linkProduct.setAttribute("target", "_blank");

    // Đưa thông tin vào container-info
    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(priceProduct);
    containerInfo.appendChild(descProduct);
    containerInfo.appendChild(linkProduct);

    // Đưa ảnh và thông tin vào item
    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    // Đưa item vào danh sách
    document
        .getElementById("container-product-list")
        .appendChild(item);
}

const products = [
{
    id: 1,
    name: "Jollibee",
    price: 88000,
    description: "Gà rán giòn tan.",
    image: "../assets/img/image.png",
    link: "https://jollibee.com.vn/dich-vu/big-order/order-now"
},
{
    id: 2,
    name: "Mỳ cay Hàn Quốc",
    price: 49000,
    description: "Hương vị cay nồng khó cưỡng.",
    image: "../assets/img/2-cach-lam-mi-cay-han-quoc-tai-nha-ngon-nhu-ngoai-hang-m--n-m---cay-h---i-s---n-1596697335-152-width600height489.jpg",
    link: "https://eva.vn/bep-eva/2-cach-lam-mi-cay-han-quoc-tai-nha-ngon-nhu-ngoai-hang-c162a441782.html"
},
{
    id: 3,
    name: "Pizza hải sản",
    price: 70000,
    description: "Phô mai béo ngậy, hải sản tươi.",
    image: "../assets/img/cach-lam-pizza-hai-san-nong-gion-hap-dan-ngay-tai-nha-201911300931185790.jpg",
    link: "https://www.bachhoaxanh.com/kinh-nghiem-hay/cach-lam-pizza-hai-san-nong-gion-hap-dan-ngay-tai-nha-1223498"
},
{
    id: 4,
    name: "Hamburger",
    price: 50000,
    description: "Thịt bò thơm ngon kết hợp với phô mai.",
    image: "../assets/img/the-ultimate-hamburger.webp",
    link: "https://www.epicurious.com/recipes/food/views/the-ultimate-hamburger-232191"
},
{
    id: 5,
    name: "Trà sữa trân châu",
    price: 35000,
    description: "Thức uống ngọt ngào.",
    image: "../assets/img/cach-lam-tran-chau-tra-sua_1.jpg",
    link: "https://www.nguyenkim.com/cach-lam-tran-chau-tra-sua.html?srsltid=AfmBOopHHf-wJmspaRTQ0av8a6yNQQtXMt04uyvnWkEZKWiiizfqaTVr"
},
{
    id: 6,
    name: "Bơ già dừa non",
    price: 30000,
    description: "Béo ngậy, mát lạnh và bổ dưỡng.",
    image: "../assets/img/528871219_1148931657256092_9018023693759675752_n-db22.jpg",
    link: "https://kinhtedouong.vn/bo-gia-dua-non--su-hai-hoa-tu-nhung-vi-ngon-nguyen-ban-131297.html"
},
{
    id: 7,
    name: "Matcha Latte",
    price: 40000,
    description: "Matcha thơm béo, vị ngọt nhẹ.",
    image: "../assets/img/cach-pha-matcha-latte.jpg",
    link: "https://kingcoffee.com.vn/tin-tuc/cach-pha-matcha-latte/"
},
{
    id: 8,
    name: "Trà đào cam sả",
    price: 25000,
    description: "Thanh mát, thơm ngon và giải khát.",
    image: "../assets/img/huong-dan-cong-thuc-tra-dao-cam-sa-hut-khach-ngon-kho-cuong_20240526180626.jpg",
    link: "http://horecavn.com/cong-thuc-tra-dao-cam-sa.html"
},
];

function addItemV2(product) {
    document.getElementById("product-list").innerHTML += `
       <div class="col-md-3 mb-4 g-4">
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>

                    <p class="card-text">
                        ${product.description}
                    </p>

                    <p class="text-danger fw-bold">
                        ${product.price.toLocaleString()} VNĐ
                    </p>

                    <a href="${product.link}" 
                       class="btn btn-primary"
                       target="_blank">
                        Xem chi tiết
                    </a>
                </div>
            </div>
        </div>
    `;
}

function loadAllProduct() {
    let i = 0;

    while (i < products.length) {
        addItemV2(products[i]);
        i++;
    }
}