// type Product = {
//     id: number;
//     name: string;
//     price: number;
//     brand: string;
//     type: string;
//     subtype: string;
//     images: string[];
// };

const name = document.getElementsByClassName('headline-5 pb1-sm d-sm-ib')[0].innerText;
const _price = document.getElementsByClassName('product-price css-11s12ax is--current-price css-tpaepq')[0].innerText;
const price = parseFloat(_price.replace('$', '').replace(',', ''));
const brand = "Nike";
const type = "Techwear";
const subtype = "";
const imageContainer = document.getElementsByClassName('css-r3as8n')[0];
let images = [];
imageContainer.childNodes.forEach((child) => {
    try {
        const labelTag = child.getElementsByTagName('label')[0];
        const imgTag = labelTag.getElementsByTagName('img')[0];
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