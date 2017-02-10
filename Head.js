
function createheader() {
    /*var head = '<div><span class="mastheadnameleft">Editor In Chief: Kevin Boodram and Melissa Hinckly</span>'+
    												'<span class="mastheadnameright">Print Editor: Ahmed Sultan</span></div>'+
    												'<br>'+
    												'<div><span class="mastheadnameleft">Junior Editor In Chief: Chloe Hanson </span>'+
    												'<span class="mastheadnameright">Web Editor: Shaina Peters </span></div><br>';*/
    var head = "<table><tr><td class='headpart'>Editor In Chief: Kevin Boodram and Melissa Hinckly</td><td class='headpart'>Print Editor: Ahmed Sultan</td></tr><tr><td class='headpart'>Junior Editor In Chief: Chloe Hanson</td><td class='headpart'>Web Editor: Shaina Peters</td></tr></table>";
    document.getElementById("head").innerHTML = head;
}
