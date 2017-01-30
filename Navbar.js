var nav = "";

function createNavBar() {
    nav += "<div id='bar'>";
    nav += "<a class='navlink'>Stuy Democrats Newsletter</a>";
    nav += " | ";
    nav += "<a class='navlink'>Volumes</a>";
    nav += " | ";
    nav += "<a class='navlink'>Issues</a>";
    nav += " | "
    getDate();
    nav += "</div>";
    //getDate();
    nav += "<div id='front'>"
    nav += '<div id="poli" class="bow">Poli</div><div id="tique" class="wob">tique</div>';
    nav += "</div>"
    document.getElementById("nav").innerHTML = nav;
}

function getDate() {
    var d = new Date();
    var n = d.getMonth();
    var y = d.getFullYear();
    var m = numToMonth(n);
    nav += m + "";
    nav += " ";
    nav += y;
}
function numToMonth(m) {
    if (m == 0) {
        return "January";
    }
    if (m == 1) {
        return "February";
    }
    if (m == 2) {
        return "March";
    }
    if (m == 3) {
        return "April";
    }
    if (m == 4) {
        return "May";
    }
    if (m == 5) {
        return "June";
    }
    if (m == 6) {
        return "July";
    }
    if (m == 7) {
        return "August";
    }
    if (m == 8) {
        return "September";
    }
    if (m == 9) {
        return "October"
    }
    if (m == 10) {
        return "November";
    }
    if (m == 11) {
        return "December";
    }
    return "";
}

function clicky() {
    $('a').click(function() {
        alert("Not yet implemented. Sorry");
    });
}
