"use strict"


//1.1

// es5

function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price / 100 * 25);
    alert(`Сумма товара ${this.name} со скидкой составила ${this.price}.`);
}

let product1 = new Product("колесо", 100);
product1.make25PercentDiscount();

// es6

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - (this.price / 100 * 25);
        alert(`Сумма товара ${this.name} со скидкой составила ${this.price}.`);
    }
}
let product1 = new Product("колесо", 100);
product1.make25PercentDiscount();

//1.2

// es5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function () {
    this.text = prompt("Введите новый текст.");
}

function AttachedPost(author, text, date) {
    Post.call(this, author);
    Post.call(this, text);
    Post.call(this, date);
    this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}
// es6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit() {
        this.text = prompt("Введите новый текст.");
    }
}
class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}


let post2 = new AttachedPost("Вячеслав Машнов", "Здесь Декстер Морган, будто Вилли Вонка", 2016);
post2.edit();
post2.makeTextHighlighted();