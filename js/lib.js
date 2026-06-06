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