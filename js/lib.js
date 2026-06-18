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
    description: "Jollibee là món ăn hấp dẫn với lớp vỏ vàng giòn rụm, hương vị đậm đà và thịt gà bên trong mềm, mọng nước. Món ăn mang đến cảm giác thơm ngon, dễ thưởng thức và thường được dùng kèm cơm hoặc sốt để tăng thêm hương vị.",
    image: "../assets/img/image.png",
    link: "https://jollibee.com.vn/dich-vu/big-order/order-now",
    category: "food"
},
{
    id: 2,
    name: "Mỳ cay Hàn Quốc",
    price: 49000,
    description: "Mỳ cay là món ăn hấp dẫn với sợi mì dai mềm hòa quyện cùng nước dùng đậm đà, thơm mùi gia vị đặc trưng. Vị cay nồng lan tỏa kích thích vị giác, kết hợp cùng các loại topping như thịt, hải sản, nấm và rau củ tạo nên hương vị phong phú. Đây là món ăn được nhiều người yêu thích, đặc biệt trong những ngày thời tiết se lạnh..",
    image: "../assets/img/2-cach-lam-mi-cay-han-quoc-tai-nha-ngon-nhu-ngoai-hang-m--n-m---cay-h---i-s---n-1596697335-152-width600height489.jpg",
    link: "https://eva.vn/bep-eva/2-cach-lam-mi-cay-han-quoc-tai-nha-ngon-nhu-ngoai-hang-c162a441782.html",
    category: "food"
},
{
    id: 3,
    name: "Pizza hải sản",
    price: 70000,
    description: "Pizza hải sản là món ăn thơm ngon với lớp đế bánh nướng vàng giòn, phủ bên trên là sự kết hợp của tôm, mực, thanh cua hoặc các loại hải sản tươi ngon. Phần phô mai béo ngậy hòa quyện cùng nước sốt đậm đà tạo nên hương vị hấp dẫn, mang đến trải nghiệm vừa đậm vị biển cả vừa thơm béo khó cưỡng..",
    image: "../assets/img/cach-lam-pizza-hai-san-nong-gion-hap-dan-ngay-tai-nha-201911300931185790.jpg",
    link: "https://www.bachhoaxanh.com/kinh-nghiem-hay/cach-lam-pizza-hai-san-nong-gion-hap-dan-ngay-tai-nha-1223498",
    category: "food"
},
{
    id: 4,
    name: "Hamburger",
    price: 50000,
    description: "Hamburger là món ăn nhanh phổ biến với lớp bánh mì mềm xốp kẹp bên trong phần thịt nướng thơm ngon, rau xanh tươi mát và các loại sốt đậm đà. Sự kết hợp hài hòa giữa vị béo của thịt, độ giòn của rau và hương thơm của bánh mì tạo nên hương vị hấp dẫn, phù hợp cho những bữa ăn tiện lợi và ngon miệng.",
    image: "../assets/img/the-ultimate-hamburger.webp",
    link: "https://www.epicurious.com/recipes/food/views/the-ultimate-hamburger-232191",
    category: "food"
},
{
    id: 5,
    name: "Trà sữa trân châu",
    price: 35000,
    description: "Trà sữa trân châu là thức uống được yêu thích nhờ sự kết hợp giữa vị trà thơm dịu và sữa béo ngậy, tạo nên hương vị hài hòa, dễ uống. Những viên trân châu dai mềm, ngọt nhẹ giúp tăng thêm độ hấp dẫn và mang lại cảm giác thú vị khi thưởng thức. Đây là lựa chọn phù hợp để giải khát và thư giãn vào bất kỳ thời điểm nào trong ngày.",
    image: "../assets/img/cach-lam-tran-chau-tra-sua_1.jpg",
    link: "https://www.nguyenkim.com/cach-lam-tran-chau-tra-sua.html?srsltid=AfmBOopHHf-wJmspaRTQ0av8a6yNQQtXMt04uyvnWkEZKWiiizfqaTVr",
    category: "drink"
},
{
    id: 6,
    name: "Bơ già dừa non",
    price: 30000,
    description: "Bơ già dừa non là món đồ uống thơm béo với sự kết hợp giữa bơ chín mềm mịn và dừa non tươi ngọt tự nhiên. Vị béo ngậy của bơ hòa quyện cùng độ giòn dai của dừa non tạo nên hương vị hài hòa, hấp dẫn và giàu dinh dưỡng. Đây là thức uống mát lạnh, thích hợp để giải khát và bổ sung năng lượng trong những ngày nóng.",
    image: "../assets/img/528871219_1148931657256092_9018023693759675752_n-db22.jpg",
    link: "https://kinhtedouong.vn/bo-gia-dua-non--su-hai-hoa-tu-nhung-vi-ngon-nguyen-ban-131297.html",
     category: "drink"
},
{
    id: 7,
    name: "Matcha Latte",
    price: 40000,
    description: "Matcha Latte là thức uống hấp dẫn được pha chế từ bột trà xanh matcha kết hợp với sữa tươi, tạo nên màu xanh đẹp mắt và hương thơm đặc trưng. Vị chát nhẹ của matcha hòa quyện cùng vị béo ngọt của sữa mang đến cảm giác cân bằng, dễ chịu khi thưởng thức. Đây là lựa chọn được nhiều người yêu thích nhờ hương vị tinh tế và khả năng mang lại cảm giác thư giãn.",
    image: "../assets/img/cach-pha-matcha-latte.jpg",
    link: "https://kingcoffee.com.vn/tin-tuc/cach-pha-matcha-latte/",
     category: "drink"
},
{
    id: 8,
    name: "Trà đào cam sả",
    price: 25000,
    description: "Trà đào cam sả là thức uống thanh mát với sự kết hợp hài hòa giữa vị trà thơm dịu, đào ngọt mềm, cam tươi chua nhẹ và hương sả thanh khiết. Hương vị chua ngọt cân bằng cùng mùi thơm tự nhiên tạo cảm giác sảng khoái, dễ chịu khi thưởng thức. Đây là lựa chọn lý tưởng để giải khát và tiếp thêm năng lượng trong những ngày nóng.",
    image: "../assets/img/huong-dan-cong-thuc-tra-dao-cam-sa-hut-khach-ngon-kho-cuong_20240526180626.jpg",
    link: "http://horecavn.com/cong-thuc-tra-dao-cam-sa.html",
     category: "drink"
},
];

function addItemV2(product){

    document.getElementById("product-list").innerHTML += `

    

    <div class="col-md-3 mb-4">

        <div class="card h-100">

            <img src="${product.image}"

                 class="card-img-top"

                 alt="${product.name}">

            <div class="card-body">

                <h5 class="card-title">

                    ${product.name}

                </h5>

                <p class="card-text">

                    ${product.description}

                </p>

                <p class="text-danger fw-bold">

                    ${product.price.toLocaleString()} VNĐ

                </p>

                <a href="chi-tiet.html?ma=${product.id}"

                   class="btn btn-primary" target = "_blank">

                   Xem chi tiết

                </a>

            </div>

        </div>

    </div>

    `;

}

function loadAllProduct(){

    let i = 0;

    while(i < products.length){
        addItemV2(products[i]);

        i++;

    }

}

function loadByCategory(category){

    document.getElementById("product-list").innerHTML = "";

    products.forEach(product => {

        if(
            category === "all" ||
            product.category === category
        ){
            addItemV2(product);
        }

    });

}

const relatedProducts =
document.getElementById("related-products");

products.forEach(item => {

    if(
        item.category === foundProduct.category &&
        item.id !== foundProduct.id
    ){

        relatedProducts.innerHTML += `

        <div class="col-lg-4 col-md-6 mb-3">

            <div class="card h-100">

                <img src="${item.image}"
                     class="card-img-top">

                <div class="card-body">

                    <h5>${item.name}</h5>

                    <p class="text-danger fw-bold">
                        ${item.price.toLocaleString()} VNĐ
                    </p>

                    <a href="chi-tiet.html?ma=${item.id}"
                       class="btn btn-primary">
                       Xem chi tiết
                    </a>

                </div>

            </div>

        </div>

        `;
    }

});