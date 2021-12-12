/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const createTweetElement = (tweetData) => {
    const { user, content, created_at } = tweetData;
    // const timeSinceTweet =
    //   Math.round(new Date() - created_at) / 1000 / 60 / 60 / 24;

    const newTweetElement = $(`<article class="tweet">
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
    return newTweetElement;
  };


  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  };

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like

  $(".container").append($tweet);
});
