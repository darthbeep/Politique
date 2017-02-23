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
			artnum:art[i],
            //image: "<img class='boximage' src='" + img[i] + "'>"
            image:img[i],
            preview:prevtext[i]
        }
    }
}

function displaytext() {
    for (var i = 0; i < articles.length; i++) {
		if (i == 0 || allarticles[i].issue != allarticles[i-1].issue) {
			html += "<div class='issuediv'>";
			html += "<a href='issues/Vol" + allarticles[i].volume+ "Iss"+ allarticles[i].issue + ".html'>";
			html += "Volume " + allarticles[i].volume + ", Issue " + allarticles[i].issue;
			html += "</a></div>";
		}
        html += "<div class='headline'>";
        html += "<a href='articles/Vol" + allarticles[i].volume+"Iss" + allarticles[i].issue+"Art" + allarticles[i].artnum + ".html'>";
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
    html += "<img src='../" + allarticles[i].image + "' class='floatingimage'>";
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
function generateArticlesIssues(v, is) {
	createObjects();
	html += "<div class='issuediv'>Volume " + v + ", Issue " + is + "</div>";
	var ok = [];
	var place = 0;
	for (var i = 0; i < allarticles.length; i++) {
		if (v == allarticles[i].volume && is == allarticles[i].issue) {
			ok[place] = i;
			place++;
		}
	}
    for (var i = 0; i < place; i++) {

		html += "<div class='headline'>";
        html += "<a href='../articles/Vol" + allarticles[ok[i]].volume + "Iss" + allarticles[ok[i]].issue + "Art" + allarticles[ok[i]].artnum + ".html'>";
        html += allarticles[ok[i]].headline;
        html += "</a>";
        html += "</div>";
        html += "<div class='articletext'>";
        html += allarticles[ok[i]].preview;
        html += "</div>";

    }
    document.getElementById('articles').innerHTML = html;
}
