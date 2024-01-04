console.log("script")

async function getProducts(){
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json();

    const productDiv = document.getElementById("products");
    data.map(product=>{
        console.log(product);
        const p = document.createElement("div")
        p.classList.add("product")
        p.textContent = product.title;
        const img = document.createElement("img")
        img.src = product.image;

        productDiv.appendChild(p);
        p.appendChild(img);
    })
}

getProducts();