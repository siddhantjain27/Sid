function newParagraph(){
  
  //this Creates the Heading
  var elementH = document.createElement("h2");
  var main = document.getElementById("main");
  main.appendChild(elementH);
  var textH = document.createTextNode("NEW HEADING INSERTED");
  elementH.appendChild(textH);  
  
  
  //This creates the paragraph
  var element = document.createElement("p");
  
  main.appendChild(element);
  
  var text = document.createTextNode("New inserted Text ");
  
  element.appendChild(text);
    
}

function removeHeader(){
 //Removing Header
  var elementH = document.getElementsByTagName("h2")[2];
  var parent = elementH.parentNode;
  
  parent.removeChild(elementH);
  
  //Removing Paragraph
  var elementP= document.getElementsByTagName("p")[4];
   parent.removeChild(elementP);
  
}
