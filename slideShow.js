'use strict';

const images = [
    { 'id': '1', 'url': './imgs/evangelion.jpg' },
    { 'id': '2', 'url': './imgs/kuroko.png' },
    { 'id': '3', 'url': './imgs/mobpsycho.png' },
    { 'id': '4', 'url': './imgs/parasyte.jpg' },
    { 'id': '5', 'url': './imgs/monogatari.jpg' },
    { 'id': '6', 'url': './imgs/overlord.jpg' },

]

const containerItems = document.querySelector('#containerImg');

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
        <div class='item'>
            <img src='${image.url}'>
        </div>
        `
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');

}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);