
var randomNumber1 = Math.floor(Math.random()*3)+1;
var randomHandImage =+randomNumber1+".png";
var randomImageSource ="images/"+randomHandImage;

var image1=document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var randomNumber2 =Math.floor(Math.random()*3)+1;
var randomImageSource2="images/"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if (randomNumber1==1 && randomNumber2==2 || randomNumber1==2 && randomNumber2==3 || randomNumber1==3 && randomNumber2==1) {
    document.querySelector("h1").innerHTML="🚩 Player 2 Wins!"
}
else if (randomNumber1==2 && randomNumber2==1 ||randomNumber1==3 && randomNumber2==2 || randomNumber1==1 && randomNumber2==3) {
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!"
}
else if(randomNumber1==randomNumber2)
{
  document.querySelector("h1").innerHTML="Tie"
}
