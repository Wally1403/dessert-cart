import waffle from "../asset/images/image-waffle-desktop.jpg"
import cremeBrulee from "../asset/images/image-creme-brulee-desktop.jpg"
import macaron from "../asset/images/image-macaron-desktop.jpg"
import tiramisu from "../asset/images/image-tiramisu-desktop.jpg"
import baklava from "../asset/images/image-baklava-desktop.jpg"
import meringue from "../asset/images/image-meringue-desktop.jpg"
import cake from "../asset/images/image-cake-desktop.jpg"
import brownie from "../asset/images/image-brownie-desktop.jpg"
import pannaCotta from "../asset/images/image-panna-cotta-desktop.jpg"


export const dessertList = [
    {
       cover: waffle,
       id: '1ed',
       name: "Waffle with Berries",
       category: "Waffle",
       price: 6.50
    },
    {
        /*"image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },*/
        cover: cremeBrulee,
        id: '2ab',
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00
     },
     {
        /*"image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },*/
        cover: macaron,
        id: '3sd',
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.00
     },
     {
       /*"image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },*/
        cover: tiramisu,
        id: '4kk',
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.50
     },
     {
        /*"image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },*/
        cover: baklava,
        id: '5pl',
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.00
     },
     {
        /*"image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },*/
        cover: meringue,
        id: '8fp',
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.00
     },
     {
        /*"image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },*/
        cover: cake,
        id: '7ie',
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.50
     },
     {
        /*"image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },*/
        cover: brownie,
        id: '9vn',
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.50
     },
     {
        /*"image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },*/
        cover: pannaCotta,
        id: '6uo',
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.50
     }
]