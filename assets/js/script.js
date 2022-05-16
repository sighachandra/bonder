window.addEventListener("scroll", function() {
    var mainH = document.getElementById("myHeader");
   
    mainH.classList.toggle("sticky", window.scrollY > mainH.scrollHeight);
    
  });
