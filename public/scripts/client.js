/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  /* Function createTweetElement accepts object argument and create new DOM element from tweet object   */
  const createTweetElement = (tweetData) => {
    const { user, content, created_at } = tweetData;
    const tweetTime = timeago.format(created_at);
    const $tweet = $(`<article class="tweet">
  <header class="tweet-header">
    <div class="tweet-avatar">
      <img src="${user.avatars}"/>
      <p>${user.name}</p>
    </div>
    <p class="tweet-tag"><strong>${user.handle}</strong></p>
  </header>
  <p class="tweet-content"><strong>${content.text}</strong></p>
  <footer class="tweet-footer">
    <p class="tweet-time">${tweetTime}</p>
    <div class="tweet-icons">
      <i class="fas fa-flag fa-xs"></i>
      <i class="fas fa-retweet fa-xs"></i>
      <i class="fas fa-heart fa-xs"></i>
    </div>
  </footer>
</article>`);
    return $tweet;
  };

  /* Function renderTweet prepends single tweet to container */
  const renderTweet = (tweet) => {
    const $tweet = createTweetElement(tweet);
    $(".tweet-container").prepend($tweet);
  };

  /* FunctionrenderTweets accepts an array of objects, creates new DOM elements for each object, and prepends each object to tweet container */

  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      renderTweet(tweet);
    }
  };

  /* Function loadTweets renders all existing tweets to page on load*/
  const loadTweets = function() {
    $.get("/tweets").then(function(data) {
      renderTweets(data);
    });
  };
  loadTweets();

  /* Function loadNewTweet renders newest tweet in tweet database*/
  const loadNewTweet = function() {
    $.get("/tweets").then(function(data) {
      const newTweet = data[data.length - 1];
      renderTweet(newTweet);
    });
  };

  //Function validateForm takes a form ID as an argument and prevents submission if submission length is < 0 or > 140.
  const validateForm = function(tweetFieldID) {
    const $tweetValue = $(`#${tweetFieldID}`).val();
    if (!$tweetValue.length) {
      alert("You need to write something in your tweet!");
      return false;
    }
    if ($tweetValue.length > 140) {
      alert("Your tweet has exceeded the maximum length");
      return false;
    }
    return true;
  };

  /* Form event handler - prevent default behaviour of submit, serializes the form data, and submits a jQuery post request to /tweets with the serialized form data */
  $("#new-tweet-form").submit(function(event) {
    event.preventDefault();
    if (!validateForm("tweet-text")) return false;
    const formData = $(this).serialize();
    $("#tweet-text").val("");
    $.post("/tweets", formData).then(loadNewTweet);
  });
});


