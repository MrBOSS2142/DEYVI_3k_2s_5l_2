var name=prompt("Как вас зовут?");

var hobbies = 
    {
        "Зима": "сидеть смотреть сериальчики",
        "Весна": "гулять по улице",    
        "Лето": "пойдем играть в волейбол",    
        "Осень": "кататься на велосипедах"
    }

var currentDate = new Date();
var month = currentDate.getMonth();
var months = {
    0: "Зима",
    1: "Зима",
    2: "Весна",
    3: "Весна",
    4: "Весна",
    5: "Лето",
    6: "Лето",
    7: "Лето",
    8: "Осень",
    9: "Осень",
    10: "Осень",
    11: "Зима"
}

var photoMonth = {
    "Зима": "./img/1.jpg",
    "Весна": "./img/2.jpg",
    "Лето": "./img/3.jpg",
    "Осень": "./img/4.jpg"
}


var currentMonth = months[month];
var monthImg = photoMonth[currentMonth];
var myImage = document.getElementById("img");
var img = document.createElement("IMG");
img.src = monthImg;
myImage.appendChild(img);

var textUser = "Привет, " + name + "! Сейчас " + currentMonth + ", поэтому давай " + hobbies[currentMonth];
document.getElementById("text").innerHTML = textUser;
