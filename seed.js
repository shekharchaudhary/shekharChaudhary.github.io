
    var myString =  "I am a front-end webDeveloper with experience of Developing & Designing highend user friendly Website/Web Application/Mobile Application/UI Design & THANK YOU FOR VISITING MY PAGE ";
var myArray = myString.split("");
var loopTimer;

function frameLooper (){
    
    if (myArray.length > 0){
        document.getElementById('demo').innerHTML += myArray.shift();
    }else{
        clearTimeout(loopTimer);
    }
    loopTimer = setTimeout ( "frameLooper ()",50);
}

arrow.addEventListener("animationend",function(){
     
    window.onload = frameLooper(); 
 });
$(function(){

/*this is toggle text */

var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); 
}



function computeBMI()
        {
            //Obtain user inputs
            var height=Number(document.getElementById("height").value);
            var heightunits=document.getElementById("heightunits").value;
            var weight=Number(document.getElementById("weight").value);
            var weightunits=document.getElementById("weightunits").value;


            //Convert all units to metric
            if (heightunits=="feet") height/=3.2808399;
            if (weightunits=="lb") weight/=2.20462;

            //Perform calculation
            var BMI=weight/Math.pow(height,2);

            //Display result of calculation
            document.getElementById("output").innerText=Math.round(BMI*100)/100;

            if (output<18.5)
            document.getElementById("comment").value = "Underweight";
            if (output>=18.5 && output<=25)
            document.getElementById("comment").value = "Normal";
            if (output>=25 && output<=30)
            document.getElementById("comment").value = "Obese";
            if (output>30)
            document.getElementById("comment").value = "Overweight";
            
            document.getElementById("answer").value = output; 
        }



    
    
        
        
    
    
});




