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




// Home and Company button clicking changes

function companyButtnDisplay(){
   var selectedCompText = document.getElementById("companyTextMobile");
   var selectedHomeText = document.getElementById("homeTextMobile");
   var selectedCompButton = document.getElementById("companyButtonMobile");
   var selectedHomeButton = document.getElementById("homeButtonMobile");
   selectedCompText.classList.remove("cm-text-hs");
   selectedHomeText.classList.add("cm-text-hs");
   selectedCompButton.classList.remove("cm-icon");
   selectedCompButton.classList.add("cm-text");
   selectedHomeButton.classList.remove("cm-text");
   selectedHomeButton.classList.add("cm-icon");
}

function HomeButtnDisplay(){
   var selectedCompText = document.getElementById("companyTextMobile");
   var selectedHomeText = document.getElementById("homeTextMobile");
   var selectedCompButton = document.getElementById("companyButtonMobile");
   var selectedHomeButton = document.getElementById("homeButtonMobile");
   selectedHomeText.classList.remove("cm-text-hs");
   selectedCompText.classList.add("cm-text-hs");
   selectedHomeButton.classList.remove("cm-icon");
   selectedHomeButton.classList.add("cm-text");
   selectedCompButton.classList.remove("cm-text");
   selectedCompButton.classList.add("cm-icon");
}

function cmpnyHomeButtnclick(){
   location.href = "/bonder/try.html";
}

document.getElementById("companyButtonMobile").addEventListener("click", companyButtnDisplay);
document.getElementById("homeButtonMobile").addEventListener("click", HomeButtnDisplay);
document.getElementById("homeButtonMobile").addEventListener("click", cmpnyHomeButtnclick);


// display plus page
function displayPLusPage(){
   document.getElementById("adddingPart").classList.add("display-pluspage-n");
   document.getElementById("displayingPage").classList.remove("display-pluspage-n");
}

document.getElementById("plusIdisplay").addEventListener("click", displayPLusPage);

//adding link to the inner pages

// =============for company home==============//
 
function companyHome(){
 
   var classDetect = document.getElementsByClassName("cmpny-focus");
      for(var i = 0; i < classDetect.length; i++){
         classDetect[i].classList.remove('cmpny-focus');
      }
      document.getElementById("companyHome").classList.add("cmpny-focus");
      
}
document.getElementById("companyHome").addEventListener("click", companyHome);
document.getElementById("companyHome").addEventListener("click", cmpnyHomeButtnclick);

function paymentHistory(){
 
   var classDetect = document.getElementsByClassName("cmpny-focus");
      for(var i = 0; i < classDetect.length; i++){
         classDetect[i].classList.remove('cmpny-focus');
      }
      document.getElementById("paymentHistory").classList.add("cmpny-focus");
}

document.getElementById("paymentHistory").addEventListener("click", paymentHistory);

function notificationClick(){
 
   var classDetect = document.getElementsByClassName("cmpny-focus");
      for(var i = 0; i < classDetect.length; i++){
         classDetect[i].classList.remove('cmpny-focus');
      }
      document.getElementById("notiFications").classList.add("cmpny-focus");
}

document.getElementById("notiFications").addEventListener("click", notificationClick);

function helpClick(){
 
   var classDetect = document.getElementsByClassName("cmpny-focus");
      for(var i = 0; i < classDetect.length; i++){
         classDetect[i].classList.remove('cmpny-focus');
      }
      document.getElementById("helpBlock").classList.add("cmpny-focus");
}

document.getElementById("helpBlock").addEventListener("click", helpClick);