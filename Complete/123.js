function changeText(){
var paragraph= document.getElementsByClassName('para');

var firstText= paragraph[0].innerHTML;
var secondText= paragraph[1].innerHTML;

var addThem= paragraph[2].innerHTML = firstText + secondText;

var firstText= paragraph[0].innerHTML= "";
var secondText= paragraph[1].innerHTML= "";

}