/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  /* Function createTweetElement accepts object argument and create new DOM element from tweet object   */
  const createTweetElement = (tweetData) => {
    const { user, content, created_at } = tweetData;
    // const timeSinceTweet =
    //   Math.round(new Date() - created_at) / 1000 / 60 / 60 / 24;

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
    <p class="tweet-time">${created_at} days ago</p>
    <div class="tweet-icons">
      <i class="fas fa-flag fa-xs"></i>
      <i class="fas fa-retweet fa-xs"></i>
      <i class="fas fa-heart fa-xs"></i>
    </div>
  </footer>
</article>`);
    return $tweet;
  };

  /* Function renderTweet renders single tweet to container */
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

  /* Render existing tweets to page on load*/
  const loadTweets = function () {
    $.get("/tweets").then(function (data) {
      $(".tweet-container").val("");
      renderTweets(data);
    });
  };
  loadTweets();

  /* Form event handler - prevent default behaviour of submit, serializes the form data, and submits a jQuery post request to /tweets with the serialized form data */

  $("#new-tweet-form").submit(function (event) {
    event.preventDefault();
    const formData = $(this).serialize();
    $("#tweet-text").val("");
    $.post("/tweets", formData).then(loadTweets);
  });
});
