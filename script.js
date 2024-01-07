function login_pop() {
    alert("clicked!");

} 
// define elements
var UpperBox = document.querySelector('div#upperbox');
var isScrolled = false

// all the content is loaded !
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY >= 10 & isScrolled == false){
            isScrolled = true;
    

            UpperBox.classList.add('scrolled');
        }
        else if (window.scrollY < 10 & isScrolled == true){
            UpperBox.classList.remove('scrolled');
            isScrolled = false;
            
        }
        
    });
    
  
});


