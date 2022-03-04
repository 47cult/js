// ПЕРВОЕ

for (let a = 0; a <= 10; a++) {
    let b = a % 2;
    if (a == 0 && b == 0) {
        console.log(a + '-это ноль');
    }
    else if (a > 0 && b == 0) {
        console.log(a + '-это четное число');
    }
    else if (a > 0 && b != 0) {
        console.log(a + '-это нечетное число');
    }
}

// ВТОРОЕ

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
    {
    userId: 10,
    userName: "Alex",
    text: "lorem ipsum",
    rating: {
    likes: 10,
    dislikes: 2 //вывести это число
    }
    },
    {
    userId: 5, //вывести это число
    userName: "Jane",
    text: "lorem ipsum 2", //вывести этот текст
    rating: {
    likes: 3,
    dislikes: 1
    }
    },
    ]
    };
    console.log(post.author);
    console.log(post.comments[0].rating.dislikes);
    console.log(post.comments[1].userId);
    console.log(post.comments[1].text);

// ТРЕТЬЕ

const products = [
    {
    id: 3,
    price: 200,
    },
    {
    id: 4,
    price: 900,
    },
    {
    id: 1,
    price: 1000,
    },
    ];
products.forEach((sales) => {
    let tallage = 15;
    let result = sales.price / 100 * tallage;
    sales.price = sales.price - result;
    console.log(sales);   
})

// ЧЕТВЕРТОЕ

const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
// 1
const photos = products.filter(function (product) {
    if (product.photos != undefined) {
        return product.photos.length > 0;
    }
})
console.log(photos);
// 2

const priceSort = products.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    // a должно быть равным b
    return 0;
});

console.log(priceSort);

// ПЯТОЕ

for (let a = 0; a <= 9; getNumbers(a++)) {

}

function getNumbers(a) {
    return console.log(a);
}

// ШЕСТОЕ

for (let x = "x"; x.length <= 20; x = x + "x") {
    console.log(x);
}