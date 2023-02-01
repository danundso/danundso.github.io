d = document

function pink(){ 
  title = d.getElementById("title");  
  me = d.getElementById("me");
  color = d.getElementById("col1");
}
function change(){
  title.innerHTML = "Danny Anundson";

}

function pic(){
  if (me.src.match("myself.jpg")) {
    me.src = "bathroom.jpg";
  }
   else {
      me.src = "bathroom.jpg";
   }
}

function color(){
  color.style.backgroundColor = "Red";
}
