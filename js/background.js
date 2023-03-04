background = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];


function displayBackground() {
    const randomBg = Math.floor(Math.random() * background.length); 
    const img = document.createElement("img");
    document.body.appendChild(img);
    img.src = `./images/${background[randomBg]}`;
    img.classList.add("adjust");
}
displayBackground();