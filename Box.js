/*function outlineBox() {
    var boxHTML = "";
    boxHTML += "<div id='boxintro'>This Issue:</div>";
    boxHTML += "<div id='boxborder'>";
    boxHTML += "<div id='leftimage'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id</div>";
    boxHTML += "<div id='rightnav'>"
    for (var i = 0; i < 3; i++) {
        boxHTML += "<div id='disp"+ i +"' class='navbox'>" + allarticles[i].headline + "</div>";
    }

    boxHTML += "</div>";
    boxHTML += "</div>";
    boxHTML += "<div id='boxheadline'></div>";
    boxHTML += "<div id='boxwriter'></div>";
    //
    document.getElementById('box').innerHTML = boxHTML;
}
function detectHovering() {
    document.getElementById('leftimage').innerHTML = allarticles[0].image;
    document.getElementById('boxheadline').innerHTML = allarticles[0].headline;
    document.getElementById('boxwriter').innerHTML = allarticles[0].writer;
    $("#disp"+0).hover(function() {
        document.getElementById('leftimage').innerHTML= allarticles[0].image;
        document.getElementById('boxheadline').innerHTML = allarticles[0].headline;
        document.getElementById('boxwriter').innerHTML = allarticles[0].writer;
    }, function() {
    });
    $("#disp"+1).hover(function() {
        document.getElementById('leftimage').innerHTML= allarticles[1].image;
        document.getElementById('boxheadline').innerHTML = allarticles[1].headline;
        document.getElementById('boxwriter').innerHTML = allarticles[1].writer;
    }, function() {
    });
    $("#disp"+2).hover(function() {
        document.getElementById('leftimage').innerHTML= allarticles[2].image;
        document.getElementById('boxheadline').innerHTML = allarticles[2].headline;
        document.getElementById('boxwriter').innerHTML = allarticles[2].writer;
    }, function() {
    });
}
*/
function outlineBox() {
    var boxHTML = "";
    boxHTML += "<ul class='bxslider'>";
    for (var i = 0; i < allarticles.length; i++) {
        var tboxHTML = "<li>";
        tboxHTML += "<a href='Vol1Iss1.html#art" + i.toString() + "'>";
        tboxHTML += "<img src=\"";
        tboxHTML += allarticles[i].image;
        tboxHTML += "\" title=\"";
        tboxHTML += allarticles[i].headline;
        tboxHTML += "\" /></a></li>";
        //alert(tboxHTML);
        boxHTML += tboxHTML;
    }
    boxHTML += "</ul>"
    document.getElementById('box').innerHTML = boxHTML;
}

function makeitslide() {
    $('.bxslider').bxSlider({
  mode: 'fade',
  captions: true,
  touchEnabled: true
});
}
