const url = "https://dog.ceo/api/breeds/image/random"

async function fetchImage(){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function showImage(){
    const data = await fetchImage();
    const image = document.getElementById("image");
    image.src = data.message;
}

