function login_pop() {
    alert("clicked!");

} 
// define elements
var UpperBox = document.querySelector('div#upperbox');


// all the content is loaded !
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY >= 10){
            UpperBox.setAttribute('scrolled',true);
            console.log("scrolled!")
        }
        else {
            UpperBox.removeAttribute('scrolled');
            console.log("removed scrolled!");
        }
        
    });
    
  
});


