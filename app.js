fetch(https://api.github.com/repos/bitcoin/bitcoin/stats/commit_activity)
  // get the JSON data
  .then(response => response.json())
  // use (display) the JSON data
  .then(data => console.log(data))
