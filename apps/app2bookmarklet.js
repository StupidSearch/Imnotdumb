function loadXMLDoc(path) { 
var whut; 
var xhttp = new XMLHttpRequest(); 
xhttp.onreadystatechange = function() { if (this.readyState == 4 && this.status == 200) { 
whut = this.responseText; 
eval(whut);
} 
}; 
xhttp.open("GET", path, true); 
xhttp.send(); 
var res = "/Imnotdumb/apps/" + prompt('Enter app id:') + ".js";
prompt("please press ctrl+c to copy the text below",loadXMLDoc(res))
