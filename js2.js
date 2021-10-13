let animationContainer= document.getElementsByClassName("animation-container");
let line1=document.getElementsByClassName("line1");
let line3=document.getElementsByClassName("line3");
let line2=document.getElementsByClassName("line2");
animationContainer[0].addEventListener("click",function myfunction()
{
    line1[0].classList.toggle("effect1");
    line2[0].classList.toggle("effect2");
    line3[0].classList.toggle("effect3");
})
