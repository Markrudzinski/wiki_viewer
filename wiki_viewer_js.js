var wikiURL = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=";
var padeId = 0;
function rndWiki() {
  window.open("https://en.wikipedia.org/wiki/Special:Random");
};
function clearBtn() {
  $("#inpSearch").val("");
  $("#searchResults").html("");
};
function wikiSearch() {
  $.ajax( {
    dataType: "jsonp",
    url: wikiURL + encodeURIComponent($("#inpSearch").val()),
    success: function(data) {
      searchResults(data);
    }
  })
}
function searchResults(data) {
  $("#searchResults").html("");
  for (var i=0; i < 10; i++) {
    padeId = data.query.search[i].pageid;
    $("#searchResults").append(
      '<div id="'+ padeId +'" class="well resultFormat" onClick="openWiki(event)">' + 
        data.query.search[i].title + '<br><br>' +
        data.query.search[i].snippet +
      '</div>'
    );
  }
}
function searchEnter(e) {
  if (e.keyCode == 13){
    wikiSearch();
  }
}
function openWiki(e) {
  window.open("https://en.wikipedia.org/?curid=" + event.target.id );
}
