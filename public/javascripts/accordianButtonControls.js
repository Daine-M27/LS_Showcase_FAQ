
// controls for accordian elements
var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    expandPanel(panel)
  });
}

function expandPanel(panel){
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

function searchFAQ() {
  var inputText = document.getElementById("searchText").value
  var FAQItems = document.getElementsByClassName("accordion")
  if(inputText !== ""){
    resetFAQ()
    for (var i = 0; i < FAQItems.length; i++) {      
      if(FAQItems[i].innerHTML.toLowerCase().includes(inputText.toLowerCase()) == true ){
        FAQItems[i].classList.toggle("active")
        var panel = FAQItems[i].nextElementSibling;
        expandPanel(panel);
        
      }
      else{
        FAQItems[i].style.display = "none"
      }      
    }
  }  
}

function resetFAQ(){
  var FAQItems = document.getElementsByClassName("accordion")
  
  for (var i = 0; i < FAQItems.length; i++) {
    FAQItems[i].style.display = "inline-block"      
    if(FAQItems[i].classList.contains("active") == true ){
      FAQItems[i].classList.toggle("active")
      var panel = FAQItems[i].nextElementSibling;
      expandPanel(panel);
    }    
  }
}

function clearText(){
  var inputBox = document.getElementById("searchText")
  inputBox.value = "";
}

function resetAll(){
  resetFAQ();
  clearText();
}