/*//alert("hi");
function fetchArticles() {
    //alert("start");
$.get(urlprefix+"Article.html", function(data) {
    var html = $('').html(data);
    var content = html.find("div#text").html();
    alert(content);
    //$("#articles").html(content);
}
)
//alert("stall");
}
//$('#articles').load('Article.html#text');
*/
//setup();
    //$( "#head" ).click(function() {
    //    alert("test");
$.get( "Article.html", function( data ) {
        //alert( "Data Loaded: " + data );
        //var getdata = $($.parseHTML(data));
        //var content = getdata.find("div#text").html();
        //var jqueryObject = $($.parseHTML(data));
        //alert(jqueryObject.find("div#text").html());
        var string = "<div>OutterDiv<div>InnerDiv\n<span id='mySpan'>This is a span</span></div></div>";
        var st = data.replace(/\t/g,'');
        string +="<div>hi</div>";
        var no = "<div>Down with the bourgiouse</div>";
        //string += data.replace(/\s/g,'') ;
        var otherString = string+data.toString();
        alert(no);
        var jqueryObject = $($.parseHTML(no));
        alert(jqueryObject.find("div").html());
        //alert(content);
//});
});
//alert("end");
