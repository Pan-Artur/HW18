// Task 1

const categoriesItemsEl = document.querySelectorAll("#categories > #categories-item");

categoriesItemsEl.forEach((category) => {
    const categorytTitle = category.querySelector("h2").textContent;
    const amountOfItems = category.querySelectorAll("ul > li").length;

    console.log(`Категорія: ${categorytTitle}`);
    console.log(`Кількість елементів: ${amountOfItems}`);
});

// Task 2

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const ingredientsEl = document.querySelector("#ingredients");

// const addIngredients = function(arr){
//     arr.forEach(element => {
//         const arrItemEl = document.createElement("li");
//         arrItemEl.textContent = element;
//         ingredientsEl.append(arrItemEl);
//     });
// }

const addIngredients = function(arr){
    ingredientsEl.insertAdjacentHTML("afterbegin", arr.map(element => `<li>${element}</li>`).join(""));
};

addIngredients(ingredients);

// Task 3

const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
];

const imagesEl = document.querySelector("#gallery");

const addImages = function(arr){
    let properties = [];

    for(const image of images) {
        properties += `<li><img class="image" src="${image.url}" alt="${image.alt}"></img></li>`;
    }

    imagesEl.insertAdjacentHTML("afterbegin", properties);
};

addImages(images);

// Task 4...

