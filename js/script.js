// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
var giphyUrl = "https://api.giphy.com/v1/stickers/search?q=";
var apiKey = "&api_key=dc6zaTOxFJmzC";

function giphyURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the giphy API with
var jason = giphyUrl + searchTerm + apiKey;
return jason;

    // the searchTerm provided in the parameters
}

function appendImageToBody(srcURL) {
    $("body").append("<img src=" + srcURL + ">");
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
}


function callGiphyAPIWithSearchTerm(searchTerm) {

    // write a function that uses the above two functions to create the url,
    // uses ajax to send a request, and appends the result to the body
    
$.ajax({
 url: giphyURLWithSearchTerm(searchTerm),
 method: "GET",
 success: function(response) {
            var url = response.data[0].images.original.url;
            appendImageToBody(url);
},
});
}


            
// Add a click handler below to call callGiphyAPIWithSearchTerm when the
// button is clicked with the value in the text box
$("button").click(function(){
    var input = $("#srch-term").val();
    callGiphyAPIWithSearchTerm(input);
});
  
  
  
});
