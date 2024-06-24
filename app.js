let tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37"; // зеленая кнопка создаваемая самой телегой а не сайтом
// item - з
let item = "";  // отправляется в телегу взавис от того какую кнопку с товаром нажали

// создадим обработчик кнопок

let btn1 = document.getElementByID("btn1"); // достаем элемент из фйла index.html
let btn2 = document.getElementByID("btn2");
let btn3 = document.getElementByID("btn3");
let btn4 = document.getElementByID("btn4");
let btn5 = document.getElementByID("btn5");
let btn6 = document.getElementByID("btn6");

btn1.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 2!");
        item = "2";
        tg.MainButton.show();
    }
});

btn3.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 3!");
        item = "3";
        tg.MainButton.show();
    }
});

btn4.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 4!");
        item = "4";
        tg.MainButton.show();
    }
});

btn5.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 5!");
        item = "5";
        tg.MainButton.show();
    }
});

btn6.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 6!");
        item = "6";
        tg.MainButton.show();
    }
});

// ф-я, которая передаст событие в телегу
Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");
let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`
usercard.appendChild(p); // добавили дочерний блок let p в файл index.html  в раздел usercard
