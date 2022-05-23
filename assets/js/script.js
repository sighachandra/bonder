window.addEventListener("scroll", function() {
    var mainH = document.getElementById("myHeader");
   
    mainH.classList.toggle("sticky", window.scrollY > mainH.scrollHeight);
    
  });
   
//  Header styling for display the home page

function displayMenu(){
	document.getElementById("homeNav").style.display ="flex";
}
function hideMenu(){
  document.getElementById("homeNav").style.display ="none";
}

document.getElementById("displayMenuBar").addEventListener("click", displayMenu);
document.getElementById("closingIcon").addEventListener("click", hideMenu);