const baseURL = "https://picsum.photos/";

const container = document.querySelector(".content");

let rows = 7;

for (let i = 0; i < rows * 3; i++) {
  const image = document.createElement("img");
  image.src = `${baseURL}${randomSize()}`;
  console.log(image.src);
  container.appendChild(image);
}

function randomSize() {
  return `${randomNumber()}x${randomNumber()}`;
}

function randomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
