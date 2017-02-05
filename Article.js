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
            image:img[i]
        }
    }
}

function displaytext() {
    for (var i = 0; i < articles.length; i++) {
        html += "<div class='headline'>";
        html += "<a href='Vol1Iss1.html#art" + i.toString() + "'>";
        html += allarticles[i].headline;
        html += "</a>";
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

function displayFull() {
    for (var i = 0; i < articles.length; i++) {
        html += "<div class='headline' id='art" + i.toString() +"'>";

        html += allarticles[i].headline;

        html += "</div><div class='writer'>";
        html += allarticles[i].writer;
        html += "</div><div class='articletext'>";
        html += allarticles[i].text;
        html += "</div>";
    }
    document.getElementById('articles').innerHTML = html;
}
