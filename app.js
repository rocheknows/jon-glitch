const images = [
  "img/01.png",
  "img/02.png",
  "img/03.png",
  "img/04.png",
  "img/05.png",
  "img/06.png",
  "img/07.png",
  "img/08.png",
  "img/09.png",
  "img/10.png",
  "img/11.png",
  "img/12.png",
  "img/13.png",
  "img/14.png",
  "img/15.png",
  "img/16.png",
  "img/17.png",
  "img/18.png",
  "img/19.png",
  "img/20.png",
  "img/21.png",
  "img/22.png",
  "img/23.png",
  "img/24.png",
  "img/25.png",
  "img/26.png",
  "img/27.png",
  "img/28.png",
  "img/29.png",
  "img/30.png",
  "img/31.png",
  "img/32.png",
  "img/33.png",
  "img/34.png",
  "img/35.png",
  "img/36.png",
  "img/37.png",
  "img/38.png",
  "img/39.png",
  "img/40.png",
  "img/41.png",
  "img/42.png",
  "img/43.png",
  "img/44.png",
  "img/45.png",
  "img/46.png"
];

let i = 0;

function placeImage(x, y) {
  const nextImage = images[i];
  const img = document.createElement("img");
  img.setAttribute("src", nextImage);
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.transform = "translate(-50%, -50%) scale(0.6)";
  document.body.appendChild(img);

  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
}

document.addEventListener("mousemove", function(event) {
  event.preventDefault();
  placeImage(event.pageX, event.pageY);
});
