function SwapImages(arr, idx, action) {
  if (action === "next") {
    if (idx === arr.length - 1) {
      return { image: arr[0], idx: idx };
    }
    return { image: arr[idx + 1], idx: arr[idx + 1] };
  } else if (action === "prev") {
    if (idx === 0) {
      return { image: arr[arr.length - 1], idx: arr.length - 1 };
    }
    return { image: arr[idx - 1], idx: idx - 1 };
  }
}

const images = [
  "Cafecito-1.jpg",
  "Cafecito-2.jpg",
  "Cafecito-3.jpg",
  "Cafecito-4.jpg",
];
const currentIndex = 3;

console.log("Current image", images[currentIndex]);
console.log(SwapImages(images, currentIndex, "next"));

console.log("Current image", images[0]);
console.log(SwapImages(images, 0, "prev"));
