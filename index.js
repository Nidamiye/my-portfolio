let yourName= prompt("what's your name");
alert("welcome, "+yourName+ " to my first ever project");
let myHeading= document.querySelector("h1");
myHeading.innerHTML="welcome to exquisite dinig";
myHeading.style.fontSize="5rem";
document.querySelector("li a").setAttribute("href", "https://www.bing.com");
document.querySelectorAll(".list")[1].innerHTML="Chicken biryani";
let myButton=document.querySelector(".apply");
myButton.addEventListener("click", function() {
alert("i got clicked");
});

let names=["Amina", "Ali", "Kamau", "Aisha"];
let button2= document.querySelector(".press");
button2.addEventListener("click", function whosPaying() {
    let noOfPeople= names.length;
    let randomPerson= Math.floor(Math.random()*noOfPeople);
    let randomPersonPosition= names[randomPerson];
    alert(randomPersonPosition+" is going to pay the bill!");

});