$(document).ready(function() {
  $("#getQuote").on("click", function() {
    getQuote();
    tweet();
    });
  });

  function getQuote(){
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(a) {
      $('#quote').html(a[0].content + '- ' + a[0].title);
      $('#quote').addClass("quote-after");
  });
}

function tweet(){
    var tweet = $('#quote').text();
    $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + tweet);
  }
