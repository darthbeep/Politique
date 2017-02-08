var html = "";
var allarticles = [];

function generateArticlesFront() {
    createObjects();
    displaytext();
}

function createObjects() {
    for (var i = 0; i < articles.length; i++) {
        allarticles[i] = {
            headline:articles[i],
            writer:writers[i],
            text:text[i],
            volume:vol[i],
            issue:iss[i],
            //image: "<img class='boximage' src='" + img[i] + "'>"
            image:img[i],
            preview:prevtext[i]
        }
    }
}

function displaytext() {
    for (var i = 0; i < articles.length; i++) {
        html += "<div class='headline'>";
        html += "<a href='Vol1Iss1Art" + i.toString() + ".html'>";
        html += allarticles[i].headline;
        html += "</a>";
        html += "</div>";
        html += "<div class='articletext'>";
        html += allarticles[i].preview;
        html += "</div>";
        /*html += "</div><div class='writer'>";
        html += allarticles[i].writer;
        html += "</div><div class='articletext'>";
        html += allarticles[i].text;
        html += "</div>";*/
    }
    document.getElementById('articles').innerHTML = html;
}

function generateArticles() {
    createObjects();
    displayFull();
}

function generateArticle(i) {
    createObjects();
    html += "<div class='headline' id='art" + i.toString() +"'>";
    html += allarticles[i].headline;
    html += "</div><div class='writer'>";
    html += allarticles[i].writer;
    html += "</div><br><div class='articletext'>";
    html += "<img src='" + allarticles[i].image + "' class='floatingimage'>";
    html += allarticles[i].text;
    html += "</div>";
    document.getElementById('articles').innerHTML = html;
    document.getElementsByTagName('title')[0].innerHTML = allarticles[i].headline;
}

function displayFull() {
    for (var i = 0; i < articles.length; i++) {
        html += "<div class='headline' id='art" + i.toString() +"'>";

        html += allarticles[i].headline;

        html += "</div><div class='writer'>";
        html += allarticles[i].writer;
        //html += "<br>";
        html += "</div><br><div class='articletext'>";
        html += "<img src='" + allarticles[i].image + "' class='floatingimage'>";
        html += allarticles[i].text;
        html += "</div>";
    }
    document.getElementById('articles').innerHTML = html;
}
