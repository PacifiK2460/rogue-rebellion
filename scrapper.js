// Clear console
console.clear();

const name = document.getElementsByClassName('name___120FN')[0].innerText;
const _price = document.getElementsByClassName('gl-price-item notranslate')[0].innerText;
const price = parseFloat(_price.replace('$', '').replace(',', ''));
const brand = "Adidas";
const type = "Techwear";
const subtype = "Pants";
const imageContainer = document.getElementById('pdp-gallery-desktop-grid-container');
let images = [];
imageContainer.childNodes.forEach((child) => {
    try {
        const imgTag = child.getElementsByTagName('img')[0];
        images.push(imgTag.src);
    } catch (e) {
        console.log(e);
        // continue
    }
});

// Make a Product object
const product = {
    id: 1,
    name,
    price,
    brand,
    type,
    subtype,
    images,
};

console.log(product);