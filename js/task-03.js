const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
const makeGalleryImage = (image) => {
  return `<li> <img src=${image.url} alt = ${image.alt} class="image"/> </li>`;
};

const galleryCardEl = images.map(makeGalleryImage);
console.log(galleryCardEl);

galleryEl.insertAdjacentHTML("beforeend", galleryCardEl.join(""));

// const galleryItemEl = document.createElement('li');
// galleryItemEl.classList.add('gallery - item');
// const galleryImgEl = document.createElement('image');
// galleryImgEl.src = image.url;
// galleryImgEl.alt = image.alt;

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
