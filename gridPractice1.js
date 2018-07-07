var myString =  "I am a front-end webDeveloper with experience of Developing & Designing highend user friendly Web Application/Mobile Application/UI Design";
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

time.addEventListener("animationend",function(){
     
    window.onload = frameLooper(); 
 });

$(function(){
    document.getElementById('time').innerHTML= Date();
    
    $('#fbutton').click(function(){
      alert('PLEASE FILL UP THE FORM AND HIT SUBMIT');
    });
    
    
    
    
      
    


/*var slideIndex = 0;
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
    */

    
    
    
});

