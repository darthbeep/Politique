var html = "";
function generateArticles() {
    for (var i = 0; i < articles.length; i++) {
        html += "<div class='headline'>";
        html += articles[i];
        html += "</div><div class='writer'>";
        html += writers[i];
        html += "</div><div class='articletext'>";
        html += text[i];
        html += "</div>";
    }
    document.getElementById('articles').innerHTML = html;
}
