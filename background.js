const images = ["1.gif","2.gif","3.gif","4.gif","5.gif","6.gif"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src=`background/${chosenImage}`;
// document.body.appendChild(bgImage);
document.body.style.backgroundImage = `url(${bgImage.src})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";
document.body.style.width="100%";
document.body.style.height="100vh";